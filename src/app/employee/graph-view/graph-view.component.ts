import { Component, ViewChild } from '@angular/core';
import { Employee } from '../employee.interface';
import { EmployeeService } from 'src/app/services/employee.service';
import { map, Observable, startWith, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllEmployees } from 'src/app/state/employee/employee.selectors';
import { MenuItem, TreeNode } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss']
})
export class GraphViewComponent {

  employees$: Observable<TreeNode[]> = new Observable<TreeNode[]>();
  @ViewChild('contextMenu') contextMenu: any;
  

  constructor(private store: Store,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
) {}
  
  data: TreeNode[] = [];
  contextMenuItems: MenuItem[] = [];
  selectedNode: any;

  ngOnInit(): void {

    // Initialize context menu items
    this.contextMenuItems = [
      {
        label: 'Add Reportee',
        icon: 'pi pi-user-plus',
        command: () => this.addReportee(),
      },
      {
        label: 'Edit Details',
        icon: 'pi pi-pencil',
        command: () => this.editDetails(),
      },
      {
        label: 'Delete Employee',
        icon: 'pi pi-ban',
        command: () => this.deleteEmployee(),
      },
      {
        label: 'Change Reporting Line',
        icon: 'pi pi-arrow-right-arrow-left',
        command: () => this.changeReportingLine(),
      },
    ];

    this.employees$ = this.route.params.pipe(
      // Step 1: Check for 'id' parameter
      map(params => parseInt(params['id'] || "0")),
      // Step 2: Use the 'id' or load the default chart
      switchMap(id => {
        return this.store.select(selectAllEmployees).pipe(
          map(data => this.convertToOrgChartFormat(id, data) || [])
        )
      })
    );
  }

  openContextMenu(event: MouseEvent, node: any): void {
    this.selectedNode = node;
    this.contextMenu.show(event);
  }

  onNodeSelect(event: any): void {
    console.log('Selected node:', event.node);
    this.router.navigate(['employee', 'graph', event.node.data.id]);
  }

  // Context Menu Actions
  addReportee(): void {
    this.employeeService.triggerOpenAddReporteeDialog(this.selectedNode.data);
  }

  editDetails(): void {
    this.employeeService.triggerOpenEditEmployeeDialog(this.selectedNode.data);
  }

  deleteEmployee(): void {
    this.employeeService.triggerOpenDeleteEmployeeDialog(this.selectedNode.data);
  }

  changeReportingLine(): void {
    this.employeeService.triggerOpenChangeManagerDialog(this.selectedNode.data);
  }

  convertToOrgChartFormat(firstEmployeeId: number, employees: Employee[]): TreeNode[] {
    const employeeMap = new Map();
  
    // Step 1: Initialize all employees in the map
    employees.forEach(emp => {
      employeeMap.set(emp.id, {
        label: emp.name,
        type: 'person',
        styleClass: 'p-person',
        expanded: true,
        data: emp,
        children: [],
      });
    });
  
    const orgChart: TreeNode<Employee>[] = [];
  
    // Step 2: Build hierarchy
    employees.forEach(emp => {
      if (emp.manager) {
        // If the employee has a manager, add them as a child of their manager
        const managerNode = employeeMap.get(emp.manager.id);
        if (managerNode) {
          managerNode.children.push(employeeMap.get(emp.id));
        }
      } else {
        // If the employee has no manager, add them to the top level of the org chart
        orgChart.push(employeeMap.get(emp.id));
      }
    });
  
    return firstEmployeeId ? [employeeMap.get(firstEmployeeId)] : orgChart;
  }
  
}

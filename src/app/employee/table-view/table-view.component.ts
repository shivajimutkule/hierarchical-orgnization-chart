import { Component } from '@angular/core';
import { Employee } from '../employee.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllEmployees } from 'src/app/state/employee/employee.selectors';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {
  clrDgActionOverflowButtonLabel: string = 'Actions/operations context menu launched on clicking : employee row';
  loading: boolean = false;

  // Observable for paginated employees
  employees$: Observable<Employee[]> = this.store.select(selectAllEmployees);

  constructor(private store: Store, private router: Router, private employeeService: EmployeeService) {}

  // Context Menu Actions
  addReportee(employee: Employee) {
    this.employeeService.triggerOpenAddReporteeDialog(employee);
  }

  editDetails(employee: Employee) {
    this.employeeService.triggerOpenEditEmployeeDialog(employee);
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.triggerOpenDeleteEmployeeDialog(employee);
  }

  changeReportingLine(employee: Employee) {
    this.employeeService.triggerOpenChangeManagerDialog(employee);
  }
}

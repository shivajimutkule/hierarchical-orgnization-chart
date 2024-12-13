import { Component } from '@angular/core';
import { Employee } from '../employee.interface';
import { Observable, startWith } from 'rxjs';
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

  employeeList: Observable<Employee[]> = this.store.select(selectAllEmployees).pipe(
    startWith([])
  );
  
  employees: Employee[] = []; // Array to store all employees
  loading: boolean = false;

  constructor(private store: Store, private router: Router, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    // Simulate fetching data from a server
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

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
    alert(`Change Reporting Line for: ${employee.name}`);
  }
}

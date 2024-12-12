import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EMPLOYEES } from './employee';
import { Employee } from '../employee.interface';
import { Observer } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllEmployees } from 'src/app/state/employee/employee.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {

  @Input() employeeList: Employee[] | null = [];
  @Output() add = new EventEmitter<Employee>();
  
  employees: Employee[] = []; // Array to store all employees
  loading: boolean = false;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    // Simulate fetching data from a server
    this.loading = true;
    setTimeout(() => {
      //this.employees = EMPLOYEES;
      //this.paginatedEmployees$ = this.employees.slice(0, 5); // Initialize first page
      this.loading = false;
    }, 1000);
  }

  refresh() {
    //this.paginatedEmployees = this.employees.slice(0, 5); // Simulate refresh (update logic as needed)
  }

  // Context Menu Actions
  addReportee(employee: Employee) {
    //alert(`Add Reportee for: ${employee.name}`);
    //this.router.navigate(['add'], { state: employee});
    this.add.emit(employee);
  }

  editDetails(employee: Employee) {
    alert(`Edit Details for: ${employee.name}`);
  }

  deleteEmployee(employee: Employee) {
    alert(`Delete Employee: ${employee.name}`);
  }

  changeReportingLine(employee: Employee) {
    alert(`Change Reporting Line for: ${employee.name}`);
  }
}

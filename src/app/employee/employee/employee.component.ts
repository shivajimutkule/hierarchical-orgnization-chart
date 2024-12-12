import { Component, ViewChild } from '@angular/core';
import { Employee } from '../employee.interface';
import { Store } from '@ngrx/store';
import { selectAllEmployees } from 'src/app/state/employee/employee.selectors';
import { AddReporteeComponent } from '../add-reportee/add-reportee.component';
import { catchError, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  paginatedEmployees$: Observable<Employee[]> = this.store.select(selectAllEmployees).pipe(
    startWith([]), // Emit an empty array as the initial value
    catchError(() => [])
  ); // Subset for current page

  constructor(private store: Store) {
    
  }

  @ViewChild("addReporteeDialog") addReporteeDialog!: AddReporteeComponent;


  closeAddReporteeDialog(): void {
  
  }

  addReportee(employee: Employee) {
    console.log(employee);
    this.addReporteeDialog.open(employee);
  }
}

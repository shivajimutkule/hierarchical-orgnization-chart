import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from '../employee/employee.interface';
import { Store } from '@ngrx/store';
import { deleteEmployee } from '../state/employee/employee.actions';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private openAddReporteeSubject = new Subject<Employee>();
  // Observable to notify when to open the dialog
  openAddReporteeDialog$ = this.openAddReporteeSubject.asObservable();

  private openEditEmployeeSubject = new Subject<Employee>();
  // Observable to notify when to open the dialog
  openEditEmployeeDialog$ = this.openEditEmployeeSubject.asObservable();


  private openDeleteEmployeeSubject = new Subject<Employee>();
  // Observable to notify when to open the dialog
  openDeleteEmployeeDialog$ = this.openDeleteEmployeeSubject.asObservable();

  constructor(private store: Store) {
    
  }
  // Trigger the dialog open event
  triggerOpenAddReporteeDialog(employee: Employee) {
    this.openAddReporteeSubject.next(employee);
  }

  triggerOpenEditEmployeeDialog(employee: Employee) {
    this.openEditEmployeeSubject.next(employee);
  }

  triggerOpenDeleteEmployeeDialog(employee: Employee) {
    this.openDeleteEmployeeSubject.next(employee);
  }
}

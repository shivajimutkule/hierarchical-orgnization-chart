import { Component } from '@angular/core';
import { Employee } from '../employee.interface';
import { Store } from '@ngrx/store';
import { deleteEmployee } from 'src/app/state/employee/employee.actions';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent {
  isDeleteDialogOpen = false;
  selectedEmployee: Employee | null = null;

  constructor(private store: Store) {}

  // Open the delete confirmation dialog
  open(employee: Employee) {
    this.selectedEmployee = employee;
    this.isDeleteDialogOpen = true;
  }

  // Close the dialog without deleting
  closeDialog() {
    this.isDeleteDialogOpen = false;
    this.selectedEmployee = null;
  }

  // Confirm deletion and dispatch the action
  confirmDelete() {
    if (this.selectedEmployee) {
      this.store.dispatch(deleteEmployee({ id: this.selectedEmployee.id }));
      this.closeDialog();
    }
  }
}
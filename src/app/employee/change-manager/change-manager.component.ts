import { Component } from '@angular/core';
import { Employee } from '../employee.interface';
import { Store } from '@ngrx/store';
import { changeManager } from 'src/app/state/employee/employee.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { selectAllEmployees } from 'src/app/state/employee/employee.selectors';

@Component({
  selector: 'app-change-manager',
  templateUrl: './change-manager.component.html',
  styleUrls: ['./change-manager.component.scss']
})
export class ChangeManagerComponent {
  isChangeManagerDialogOpen = false;
  selectedEmployee: Employee | null = null;

  managers$: Observable<Employee[]> = this.store.select(selectAllEmployees);
  reporteeForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
        this.reporteeForm = this.fb.group({
          manager: ['', Validators.required],
        });
  }

  open(employee: Employee) {
    this.selectedEmployee = employee;
    this.isChangeManagerDialogOpen = true;
  }

  closeDialog() {
    this.reporteeForm.reset();
    this.isChangeManagerDialogOpen = false;
    this.selectedEmployee = null;
  }

  confirmChangeManager() {
    if (this.reporteeForm.valid && this.selectedEmployee) {
      const reporteeData = this.reporteeForm.value;
      this.store.dispatch(changeManager({ id: this.selectedEmployee.id, managerId: reporteeData.manager.id })); // Dispatch action
      this.isChangeManagerDialogOpen = false;

      this.reporteeForm.reset(); // Reset form after submission
    } else {
      this.reporteeForm.markAllAsTouched(); // Mark fields to show validation errors
    }
  }
}

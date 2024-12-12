import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state'; // Adjust the path to your AppState
import { addReportee } from '../../state/employee/employee.actions'; // Adjust the path to your action file
import { Employee } from '../employee.interface';

@Component({
  selector: 'app-add-reportee',
  templateUrl: './add-reportee.component.html',
  styleUrls: ['./add-reportee.component.scss'],
})
export class AddReporteeComponent {
  public showDialog = false; // Receive dialog state from parent
  public selectedEmployee!: Employee;

  @Output() closeDialog = new EventEmitter<void>(); // Notify parent to close dialog

  reporteeForm: FormGroup;

    // Predefined designations for the dropdown
   public designations: string[] = [
      'Head of Engineering',
      'Engineering Manager',
      'Head of Sales',
      'DevOps Engineer',
    ];

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    // Initialize reactive form
    this.reporteeForm = this.fb.group({
      manager: [''],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  open(selectedEmployee: Employee) {
    this.selectedEmployee = selectedEmployee;
    this.showDialog = true;
  }

  onAddReportee(): void {
    if (this.reporteeForm.valid) {
      const reporteeData = this.reporteeForm.value;
      this.store.dispatch(addReportee({ employee: reporteeData })); // Dispatch action
      this.showDialog = false;

      this.closeDialog.emit(); // Notify parent to close dialog
      this.reporteeForm.reset(); // Reset form after submission
    } else {
      this.reporteeForm.markAllAsTouched(); // Mark fields to show validation errors
    }
  }

  onCancel(): void {
    this.showDialog = false;
    this.reporteeForm.reset(); // Reset form
    this.closeDialog.emit(); // Notify parent to close dialog
  }
}
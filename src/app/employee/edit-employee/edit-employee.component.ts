import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from '../employee.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { editEmployee } from 'src/app/state/employee/employee.actions';
import { DESIGNATION_LIST } from 'src/app/util/designations';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent {
  public showDialog = false; // Receive dialog state from parent
  public selectedEmployee!: Employee;

  reporteeForm: FormGroup;

    // Predefined designations for the dropdown
   public designations: string[] = DESIGNATION_LIST;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    // Initialize reactive form
    this.reporteeForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      email: ['', [Validators.email]],
      phone: ['', [Validators.pattern(/^\d{10}$/)]],
    });
  }

  open(selectedEmployee: Employee) {
    this.selectedEmployee = selectedEmployee;
    this.reporteeForm.patchValue(selectedEmployee);
    this.showDialog = true;
  }

  onAddReportee(): void {
    if (this.reporteeForm.valid) {
      const reporteeData = this.reporteeForm.value;
      reporteeData.id = this.selectedEmployee.id;
      console.log(reporteeData);
      this.store.dispatch(editEmployee({ employee: reporteeData })); // Dispatch action
      this.showDialog = false;

      this.reporteeForm.reset(); // Reset form after submission
    } else {
      this.reporteeForm.markAllAsTouched(); // Mark fields to show validation errors
    }
  }

  onCancel(): void {
    this.showDialog = false;
    this.reporteeForm.reset(); // Reset form
  }
}

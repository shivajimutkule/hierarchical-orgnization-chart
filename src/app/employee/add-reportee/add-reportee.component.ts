import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { addReportee } from '../../state/employee/employee.actions';
import { Employee } from '../employee.interface';
import { DESIGNATION_LIST } from 'src/app/util/designations';

@Component({
  selector: 'app-add-reportee',
  templateUrl: './add-reportee.component.html',
  styleUrls: ['./add-reportee.component.scss'],
})
export class AddReporteeComponent {
  public showDialog = false;
  public selectedEmployee!: Employee;
  reporteeForm: FormGroup;

  public designations: string[] = DESIGNATION_LIST;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    // Initialize employee reactive form
    this.reporteeForm = this.fb.group({
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
      reporteeData.manager = this.selectedEmployee;
      this.store.dispatch(addReportee({ employee: reporteeData }));
      this.showDialog = false;

      this.reporteeForm.reset();
    } else {
      this.reporteeForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.showDialog = false;
    this.reporteeForm.reset(); // Reset form
  }
}
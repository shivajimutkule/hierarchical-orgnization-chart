import { Component, ViewChild } from '@angular/core';
import { Employee } from '../employee.interface';
import { Store } from '@ngrx/store';
import { AddReporteeComponent } from '../add-reportee/add-reportee.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  
  @ViewChild("addReporteeDialog") addReporteeDialog!: AddReporteeComponent;

  @ViewChild("editEmployeeDialog") editEmployeeDialog!: EditEmployeeComponent;

  @ViewChild("deleteEmployeeDialog") deleteEmployeeDialog!: DeleteEmployeeComponent;

  constructor(private store: Store, private employeeService: EmployeeService) {
    // Subscribe to the openAddReporteeDialog$ observable
    this.employeeService.openAddReporteeDialog$.subscribe((employee) => {
      this.addReportee(employee);
    });

    // Subscribe to the openEditEmployeeDialog$ observable
    this.employeeService.openEditEmployeeDialog$.subscribe((employee) => {
      this.editEmployee(employee);
    });
    
    // Subscribe to the openEditEmployeeDialog$ observable
    this.employeeService.openDeleteEmployeeDialog$.subscribe((employee) => {
      this.deleteEmployee(employee);
    });
  }



  closeAddReporteeDialog(): void {
  
  }

  addReportee(employee: Employee) {
    console.log(employee);
    this.addReporteeDialog.open(employee);
  }

  editEmployee(employee: Employee) {
    console.log(employee);
    this.editEmployeeDialog.open(employee);
  }

  deleteEmployee(employee: Employee) {
    console.log(employee);
    this.deleteEmployeeDialog.open(employee);
  }

}

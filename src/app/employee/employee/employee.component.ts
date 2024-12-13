import { Component, ViewChild } from '@angular/core';
import { Employee } from '../employee.interface';
import { Store } from '@ngrx/store';
import { AddReporteeComponent } from '../add-reportee/add-reportee.component';
import { EmployeeService } from 'src/app/services/employee.service';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { ChangeManagerComponent } from '../change-manager/change-manager.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  
  @ViewChild("addReporteeDialog") addReporteeDialog!: AddReporteeComponent;

  @ViewChild("editEmployeeDialog") editEmployeeDialog!: EditEmployeeComponent;

  @ViewChild("deleteEmployeeDialog") deleteEmployeeDialog!: DeleteEmployeeComponent;

  @ViewChild("changeManagerDialog") changeManagerDialog!: ChangeManagerComponent;

  constructor(private store: Store, private employeeService: EmployeeService) {
    this.employeeService.openAddReporteeDialog$.subscribe((employee) => {
      this.addReportee(employee);
    });

    this.employeeService.openEditEmployeeDialog$.subscribe((employee) => {
      this.editEmployee(employee);
    });
    
    this.employeeService.openDeleteEmployeeDialog$.subscribe((employee) => {
      this.deleteEmployee(employee);
    });

    this.employeeService.openChangeManagerDialog$.subscribe((employee) => {
      this.changeManager(employee);
    });
  }


  addReportee(employee: Employee) {
    this.addReporteeDialog.open(employee);
  }

  editEmployee(employee: Employee) {
    this.editEmployeeDialog.open(employee);
  }

  deleteEmployee(employee: Employee) {
    this.deleteEmployeeDialog.open(employee);
  }

  changeManager(employee: Employee) {
    this.changeManagerDialog.open(employee);
  }

}

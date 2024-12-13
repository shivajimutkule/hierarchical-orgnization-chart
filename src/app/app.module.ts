import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmployeeComponent } from './employee/employee/employee.component';
import { TableViewComponent } from './employee/table-view/table-view.component';
import { employeeReducer } from './state/employee/employee.reducers';
import { AddReporteeComponent } from './employee/add-reportee/add-reportee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraphViewComponent } from './employee/graph-view/graph-view.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TableViewComponent,
    AddReporteeComponent,
    GraphViewComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ClarityModule,
    StoreModule.forRoot({ employeeState: employeeReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

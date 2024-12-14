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
import { ChangeManagerComponent } from './employee/change-manager/change-manager.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { ContextMenuModule } from 'primeng/contextmenu'; // For the context menu

import '@cds/core/icon/register.js';
import { ClarityIcons, usersIcon, tableIcon, cogIcon, userIcon } from '@cds/core/icon';

// Register icons globally
ClarityIcons.addIcons(usersIcon, tableIcon, cogIcon, userIcon);


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TableViewComponent,
    AddReporteeComponent,
    GraphViewComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    ChangeManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ClarityModule,
    OrganizationChartModule,
    ContextMenuModule,
    StoreModule.forRoot({ employeeState: employeeReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

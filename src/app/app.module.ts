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

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    TableViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityModule,
    StoreModule.forRoot({ employeeState: employeeReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

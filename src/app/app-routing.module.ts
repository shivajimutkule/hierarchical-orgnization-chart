import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [{
    path: 'employee',
    component: EmployeeComponent,
  }]
}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

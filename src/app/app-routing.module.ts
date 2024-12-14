import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { TableViewComponent } from './employee/table-view/table-view.component';
import { GraphViewComponent } from './employee/graph-view/graph-view.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [{
    path: 'employee',
    component: EmployeeComponent,
    children: [
      {
        path: 'graph', // Nested path for the Graph View
        component: GraphViewComponent,
      },
      {
        path: 'grid', // Nested path for the Grid View
        component: TableViewComponent,
      },
      {
        path: '', // Default route when no child is selected
        redirectTo: 'graph', // Default to Graph view
        pathMatch: 'full',
      },
    ],
  }, {
    path: '', // Default route when no child is selected
    redirectTo: 'employee', // Default to Employee view
    pathMatch: 'full',
  },]
}, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

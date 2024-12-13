import { Component } from '@angular/core';
import { Employee } from '../employee.interface';
import { EmployeeService } from 'src/app/services/employee.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllEmployees } from 'src/app/state/employee/employee.selectors';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss']
})
export class GraphViewComponent {

  employees$: Observable<Employee[]> = this.store.select(selectAllEmployees);

  constructor(private store: Store) {}

  ngOnInit(): void {
    // No need to dispatch anything here, just subscribe to employees in the store
  }
}

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeState } from "./employee.reducers";

// Select the employee feature state
export const selectEmployeeState = createFeatureSelector<EmployeeState>(
    'employeeState'
  );
  
  // Select all employees
  export const selectAllEmployees = createSelector(
    selectEmployeeState,
    (state: EmployeeState) => state ? state?.employees ?? [] : []
  );
  
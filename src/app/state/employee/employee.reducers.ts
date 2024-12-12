import { createReducer, on } from "@ngrx/store";
import { Employee } from "src/app/employee/employee.interface";
import { addReportee } from "./employee.actions";
import { EMPLOYEES } from "src/app/employee/table-view/employee";

export interface EmployeeState {
    employees: Employee[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

const initialState: EmployeeState = {
    employees: EMPLOYEES,
    error: '',
    status: 'pending'
}
export const employeeReducer = createReducer(
    initialState,
    on(addReportee, (state,  { employee }) => {
        return {
            ...state,
            employees: [...state.employees, {...employee, status: 'success', id: state.employees.length + 1}]
        }
    })
)
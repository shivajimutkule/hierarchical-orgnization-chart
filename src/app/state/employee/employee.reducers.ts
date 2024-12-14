import { createReducer, on } from "@ngrx/store";
import { Employee } from "src/app/employee/employee.interface";
import { addReportee, changeManager, deleteEmployee, editEmployee } from "./employee.actions";
import { EMPLOYEES } from "src/app/util/employee";

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
        // new employee id
        const maxId = state.employees.length > 0 ? Math.max(...state.employees.map(employee => employee.id)) : 0;
        return {
            ...state,
            employees: [...state.employees, {...employee, id: maxId + 1}],
        }
    }),

    on(editEmployee, (state,  { employee }) => {
        return {
            ...state,
            employees: state.employees.map((e) =>
                e.id === employee.id ? { ...e, ...employee } : e
              ),
        }
    }),

    on(deleteEmployee, (state,  { id }) => {
       // Find the employee to delete
        const employeeToDelete = state.employees.find((e) => e.id === id);

        // If the employee doesn't exist, return the current state
        if (!employeeToDelete) {
        return state;
        }

        const manager = employeeToDelete.manager;

        return {
        ...state,
        employees: state.employees
            .filter((e) => e.id !== id) // Remove the employee to delete
            .map((e) => 
            e.manager?.id === id // Check if the current employee reports to the deleted employee
                ? { ...e, manager } // Reassign manager to the deleted employee's manager
                : e // Keep other employees unchanged
            ),
        };
    }),

    on(changeManager, (state,  { id, managerId }) => {
        // Find the manager
        const manager = state.employees.find((e) => e.id === managerId);

        // If the employee doesn't exist, return the current state
        if (!manager) {
            return state;
            }

        return {
            ...state,
            employees: state.employees.map((e) =>
                e.id === id ? { ...e, manager } : e
              ),
        }
    }),
)
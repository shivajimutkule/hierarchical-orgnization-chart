import { createAction, props } from "@ngrx/store";
import { Employee } from "src/app/employee/employee.interface";

export const addReportee = createAction('[Employee Page] add Reportee', props<{ employee: Employee; }>());

export const editEmployee = createAction('[Employee Page] edit Employee', props<{ employee: Employee; }>());

export const deleteEmployee = createAction('[Employee Page] delete Employee', props<{ id: number; }>());

export const changeManager = createAction('[Employee Page] change Manager', props<{ id: number; managerId: number }>());

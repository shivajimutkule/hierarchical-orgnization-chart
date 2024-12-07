import { createAction, props } from "@ngrx/store";
import { Employee } from "src/app/employee/employee.interface";

export const addEmployee = createAction('[Employee Page] add Employee', props<{ employee: Employee; }>());



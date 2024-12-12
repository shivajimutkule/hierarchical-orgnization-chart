import { createAction, props } from "@ngrx/store";
import { Employee } from "src/app/employee/employee.interface";

export const addReportee = createAction('[Employee Page] add Reportee', props<{ employee: Employee; }>());


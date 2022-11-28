import {FieldValues, Path} from "react-hook-form";
export type FormControlValues = FieldValues;
export type FormControlPath<T = FormControlValues> = Path<T>;
export type SubmitForm<T> = { data?:T }

import {Type} from "@angular/core";
import {IDynamicFormField} from "./dynamic-form-field.interface";

export interface IDynamicFormFieldsType {
  type: string;
  component: Type<IDynamicFormField>;
}

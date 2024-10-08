import { IDynamicFormFieldOptions } from './dynamic-form-field-options.interface';

export interface IDynamicFormFieldModel {
  type: string;
  classes?: string;
  options: IDynamicFormFieldOptions;
}

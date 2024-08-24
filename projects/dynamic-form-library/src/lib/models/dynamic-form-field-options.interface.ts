import { IDynamicFormFieldDropdownOption } from './dynamic-form-field-dropdown-option.interface';

export interface IDynamicFormFieldOptions {
  label?: string;
  placeHolder?: string;
  formControlName: string;
  value?: any;
  disabled?: boolean;
  validators?: {
    required?: boolean;
    number?: boolean;
    email?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
  errorMessage?: string;
  dropDownOptions?: IDynamicFormFieldDropdownOption;
}

import { InputComponent } from '../components/fields/input/input.component';
import { IDynamicFormFieldsType } from '../models/dynamic-form-field-type.interface';

export const DynamicFieldsConfig: IDynamicFormFieldsType[] = [
  {
    type: 'input',
    component: InputComponent,
  },
];

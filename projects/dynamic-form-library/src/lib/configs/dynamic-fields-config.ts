import { InputComponent } from '../components/fields/input/input.component';
import { MultiSelectSearchableComponent } from '../components/fields/multi-select-searchable/multi-select-searchable.component';
import { IDynamicFormFieldsType } from '../models/dynamic-form-field-type.interface';

export const DynamicFieldsConfig: IDynamicFormFieldsType[] = [
  {
    type: 'input',
    component: InputComponent,
  },
  {
    type: 'multi-select-searchable',
    component: MultiSelectSearchableComponent,
  },
];

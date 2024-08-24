import { IDynamicFormFieldModel } from 'dynamic-form-library';

export const formFields: IDynamicFormFieldModel[] = [
  {
    type: 'input',
    options: {
      label: 'name',
      validators: {
        required: true,
      },
      formControlName: 'name',
      placeHolder: 'user name',
    },
  },
  {
    type: 'input',
    options: {
      label: 'last name',
      formControlName: 'lastName',
      placeHolder: 'user name',
    },
  },
  {
    type: 'multi-select-searchable',
    options: {
      label: 'select option',
      formControlName: 'options',
      placeHolder: 'choose option',
      dropDownOptions: [
        { label: 'item1', value: 1 },
        { label: 'item2', value: 2 },
        { label: 'item3', value: 3 },
        { label: 'item3', value: 4 },
      ],
    },
  },
];

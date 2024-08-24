import { IDynamicFormFieldModel } from 'dynamic-form-library';

export const formFields: IDynamicFormFieldModel[] = [
  {
    type: 'input',
    classes: 'basis-1/3 mr-1',
    options: {
      label: 'name',
      validators: {
        required: true,
      },
      formControlName: 'firstName',
      placeHolder: 'Name',
    },
  },
  {
    type: 'input',
    classes: 'basis-1/4 mr-1',
    options: {
      label: 'last name',
      formControlName: 'lastName',
      placeHolder: 'Last Name',
    },
  },
  {
    type: 'multi-select-searchable',
    classes: 'basis-full ',
    options: {
      label: 'Options',
      formControlName: 'options',
      placeHolder: 'Choose an option',
      dropDownOptions: [
        { label: 'item1', value: 1 },
        { label: 'item2', value: 2 },
        { label: 'item3', value: 3 },
        { label: 'item4', value: 4 },
      ],
    },
  },
];

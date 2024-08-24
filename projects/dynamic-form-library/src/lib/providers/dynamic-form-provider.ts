import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { IDynamicFormFieldsType } from '../models/dynamic-form-field-type.interface';
import { DynamicFieldsConfig } from '../configs/dynamic-fields-config';

export function provideDynamicForm(config: {
  fields: IDynamicFormFieldsType[];
}): EnvironmentProviders {
  const merged = [...DynamicFieldsConfig, ...config.fields];
  return makeEnvironmentProviders([
    { provide: 'config', useValue: { fields: merged } },
  ]);
}

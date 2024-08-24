import { inject, Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { IDynamicFormFieldModel } from '../models/dynamic-form-field-model.interface';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  private formBuilder = inject(FormBuilder);

  createForm(fields: IDynamicFormFieldModel[]): FormGroup {
    const form: FormGroup = this.formBuilder.group({});

    fields.forEach((field: any) => {
      if (field.dummyFields) {
        field.dummyFields.forEach((dummyField: any) => {
          this.createField(dummyField, form);
        });
      }
      // Check if this is group of dields
      if (field.group) {
        // Loop group of fields
        field.group.forEach((singleField: any) => {
          this.createField(singleField, form);
        });
      } else {
        this.createField(field, form);
      }
    });

    return form;
  }

  private createField(field: IDynamicFormFieldModel, form: FormGroup) {
    const validators = [];
    let newControl;
    if (field.options) {
      // Create form control
      newControl = new FormControl({
        value: field.options?.value ?? '',
        disabled: !!field.options?.disabled,
      });

      // Add validators to control
      if (field.options?.validators?.pattern) {
        validators.push(Validators.pattern(field.options?.validators?.pattern));
      }
      if (field.options?.validators?.required) {
        validators.push(Validators.required);
      }
      if (field.options?.validators?.minLength) {
        validators.push(
          Validators.minLength(field.options?.validators?.minLength)
        );
      }
      if (field.options?.validators?.maxLength) {
        validators.push(
          Validators.maxLength(field.options?.validators?.maxLength)
        );
      }
      if (field.options?.validators?.email) {
        validators.push(Validators.email);
      }

      // Set validators
      newControl.setValidators(validators);
      // Add control to form
      form.addControl(field.options.formControlName, newControl);
    }
  }
}

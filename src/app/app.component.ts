import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';

import { DynamicFormComponent, DynamicFormService } from 'dynamic-form-library';
import { formFields } from './form-fields';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  fields = formFields;
  dynamicFormService = inject(DynamicFormService);
  formGroup = this.dynamicFormService.createForm(this.fields);
  formValue: any;

  onSubmit() {
    this.formValue = this.formGroup.getRawValue();
  }

  onClear() {
    this.formGroup.reset();
    this.onSubmit();
  }
}

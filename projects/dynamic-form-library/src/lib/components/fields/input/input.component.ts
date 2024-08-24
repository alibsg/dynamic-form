import { Component, Input, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IDynamicFormFieldOptions } from '../../../models/dynamic-form-field-options.interface';
import { MatInputModule } from '@angular/material/input';
import {
  ControlContainer,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class InputComponent {
  @Input() options?: IDynamicFormFieldOptions;
}

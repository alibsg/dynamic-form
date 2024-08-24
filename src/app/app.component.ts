import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DynamicFormComponent } from 'dynamic-form-library';
import { formFields } from './form-fields';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  fields = formFields;
}

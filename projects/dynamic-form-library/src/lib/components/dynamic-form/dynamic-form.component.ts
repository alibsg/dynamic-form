import { Component, computed, inject, input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

import { IDynamicFormFieldModel } from '../../models/dynamic-form-field-model.interface';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { InputComponent } from '../fields/input/input.component';
import { DynamicFormFieldComponent } from "../dynamic-form-field/dynamic-form-field.component";

@Component({
  selector: 'dynamic-form',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, InputComponent, DynamicFormFieldComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
})
export class DynamicFormComponent implements OnInit {
  form = input<FormGroup>();
  fields = input.required<IDynamicFormFieldModel[]>();
  private dynamicFormService = inject(DynamicFormService);
  dynamicForm = computed(
    () => this.form() || this.dynamicFormService.createForm(this.fields())
  );

  ngOnInit(): void {
    console.log(this.dynamicForm());
  }

  onSubmit() {
    console.log(this.dynamicForm().value);
  }
}

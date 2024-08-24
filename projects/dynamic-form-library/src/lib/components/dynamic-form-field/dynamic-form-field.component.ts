import {
  Component,
  Inject,
  input,
  OnInit,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';

import { IDynamicFormFieldModel } from '../../models/dynamic-form-field-model.interface';
import { IDynamicFormFieldsType } from '../../models/dynamic-form-field-type.interface';
import { IDynamicFormField } from '../../models/dynamic-form-field.interface';

@Component({
  selector: 'lib-dynamic-form-field',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-form-field.component.html',
  styleUrl: './dynamic-form-field.component.css',
})
export class DynamicFormFieldComponent implements OnInit {
  private host = viewChild('dynamicField', {
    read: ViewContainerRef,
  });

  field = input.required<IDynamicFormFieldModel>();

  constructor(
    @Inject('config') private config: { fields: IDynamicFormFieldsType[] }
  ) {}

  ngOnInit(): void {
    this.createFieldComponent();
  }

  private createFieldComponent() {
    const componentType = this.getFieldComponent();
    if (!componentType) return;
    const componentRef = this.host()?.createComponent(componentType);
    if (componentRef) {
      componentRef.instance.options = this.field().options;
    }
  }

  private getFieldComponent(): Type<IDynamicFormField> | undefined {
    const fields = this.config.fields.filter(
      (field) => field.type === this.field().type
    );
    if (fields.length === 0) return undefined;
    return fields[0].component;
  }
}

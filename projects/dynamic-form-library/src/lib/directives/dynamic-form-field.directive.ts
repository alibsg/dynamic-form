import {
  computed,
  Directive,
  Inject,
  inject,
  input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

import { IDynamicFormFieldsType } from '../models/dynamic-form-field-type.interface';
import { IDynamicFormFieldModel } from '../models/dynamic-form-field-model.interface';

@Directive({
  selector: 'ng-template[libDynamicFormField]',
  standalone: true,
})
export class DynamicFormFieldDirective implements OnInit {
  libDynamicFormField = input.required<IDynamicFormFieldModel>();
  host = inject(ViewContainerRef);
  componentType = computed(() => {
    const fields = this.config.fields.filter(
      (field) => field.type === this.libDynamicFormField().type
    );
    if (fields.length === 0) return undefined;
    return fields[0].component;
  });

  constructor(
    @Inject('config') private config: { fields: IDynamicFormFieldsType[] }
  ) {}

  ngOnInit(): void {
    if (!this.componentType()) return;
    this.host.clear();
    const componentRef = this.host.createComponent(this.componentType()!);
    componentRef.instance.options = this.libDynamicFormField().options;
  }
}

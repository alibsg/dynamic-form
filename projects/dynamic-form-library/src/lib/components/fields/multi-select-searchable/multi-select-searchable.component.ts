import {
  Component,
  computed,
  inject,
  Input,
  model,
  OnInit,
  signal,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  AbstractControl,
  ControlContainer,
  FormGroup,
  FormsModule,
} from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';

import { IDynamicFormFieldOptions } from '../../../models/dynamic-form-field-options.interface';
import { IDynamicFormFieldDropdownOption } from '../../../models/dynamic-form-field-dropdown-option.interface';

@Component({
  selector: 'lib-multi-select-searchable',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  templateUrl: './multi-select-searchable.component.html',
  styleUrl: './multi-select-searchable.component.css',
  host: {hostId: crypto.randomUUID().toString()}
})
export class MultiSelectSearchableComponent implements OnInit {
  @Input() options?: IDynamicFormFieldOptions;

  selected = signal<IDynamicFormFieldDropdownOption[]>([]);
  currentSelected = model('');
  filteredOptions = computed(() => {
    const currentValue = this.currentSelected().toLowerCase();
    return currentValue
      ? this.selectOptions.filter((option) =>
          option.label.toLowerCase().includes(currentValue)
        )
      : this.selectOptions.slice();
  });
  selectOptions: IDynamicFormFieldDropdownOption[] = [];
  control?: AbstractControl;
  controlContainer = inject(ControlContainer);

  ngOnInit(): void {
    if (this.options?.dropDownOptions) {
      this.selectOptions = this.options.dropDownOptions;
    }

    if (this.options) {
      this.control = (this.controlContainer.control as FormGroup).controls[
        this.options.formControlName
      ];
    }
  }

  remove(option: IDynamicFormFieldDropdownOption): void {
    this.selected.update((selected) => {
      const index = selected.findIndex((item) => item.value === option.value);
      if (index < 0) {
        return selected;
      }

      selected.splice(index, 1);
      this.control?.setValue(selected.map((item) => item.value));
      return [...selected];
    });
  }

  selectOption(event: MatAutocompleteSelectedEvent) {
    this.currentSelected.set('');
    const existingOption = this.selected().find(
      (item) => item.value === event.option.value.value
    );
    // prevent adding an option twice
    if (existingOption) return;
    this.selected.update((selected) => [...selected, event.option.value]);
    this.control?.setValue(this.selected().map((item) => item.value));
    event.option.deselect();
  }
}

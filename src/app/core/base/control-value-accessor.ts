import { Component, inject, input, InputSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { BaseComponent } from 'app/core/base/component';

@Component({
  selector: 'syncro-base-control-value-accessor',
  template: '',
})
export abstract class BaseControlValueAccessor<T>
  extends BaseComponent
  implements ControlValueAccessor
{
  label: InputSignal<string> = input<string>('');

  control = inject(NgControl, { optional: true, self: true });

  formControl = new FormControl<T | null>(null);
  isTouched: boolean = false;
  isDisabled: boolean = false;

  constructor() {
    super();

    if (this.control) {
      this.control.valueAccessor = this;
    }

    this.formControl.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((value) => {
        this.onChange(value);
      });
  }

  writeValue(value: T): void {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: (value: T | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.onDisabled(isDisabled);
  }

  protected onTouched(): void {
    this.isTouched = true;
  }

  protected onDisabled(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  private onChange: (value: T | null) => void = () => {};
}

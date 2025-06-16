import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from '@angular/core';
import { BaseControlValueAccessor } from 'app/core/base/control-value-accessor';
import { TOption } from 'app/shared/types/option.type';

@Component({
  selector: 'syncro-button-toggle',
  imports: [NgClass],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleComponent extends BaseControlValueAccessor<
  unknown[] | unknown
> {
  options: InputSignal<TOption<unknown>[]> = input.required();
  multi: InputSignal<boolean> = input(false);

  onSelect(option: TOption<unknown>): void {
    let selected = this.getSelected();

    const value = Array.isArray(selected)
      ? this.selectMulti(selected, option)
      : this.selectSingle(selected, option);

    this.writeValue(value);
  }

  isSelected(option: TOption<unknown>): boolean {
    const selected = this.getSelected();
    if (!Array.isArray(selected)) {
      return option.value === selected;
    }

    return selected.some((o) => o === option.value);
  }

  private getSelected(): unknown[] | unknown {
    let options = this.formControl.value;

    if (!options) {
      options = this.multi() ? [] : null;
    }

    return options;
  }

  private selectSingle(selected: unknown, option: TOption<unknown>): unknown {
    return selected === option.value ? null : option.value;
  }

  private selectMulti(
    selected: unknown[],
    option: TOption<unknown>,
  ): unknown[] {
    let res = [...selected];
    const value = option.value;
    const index = selected.findIndex((o) => o === value);

    if (index === -1) {
      res = [...selected, value];
    } else {
      res.splice(index, 1);
    }

    return res;
  }
}

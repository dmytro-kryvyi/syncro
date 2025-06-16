import {
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
  signal,
  WritableSignal,
} from '@angular/core';
import { TOption } from 'app/shared/types/option.type';

@Component({
  selector: 'syncro-dropdown',
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  selected: OutputEmitterRef<TOption<unknown>> = output();

  options: WritableSignal<TOption<unknown>[]> = signal([]);
  selectedOption: WritableSignal<TOption<unknown> | null> = signal(null);

  onSelect(option: TOption<unknown>): void {
    this.selected.emit(option);
    this.selectedOption.set(option);
  }
}

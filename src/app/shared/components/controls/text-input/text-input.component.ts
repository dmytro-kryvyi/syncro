import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseControlValueAccessor } from 'app/shared/base/control-value-accessor';
import { InputType } from 'zlib';

@Component({
  selector: 'syncro-text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class TextInputComponent extends BaseControlValueAccessor<string> {
  inputType: InputSignal<InputType> = input<InputType>('text');
  placeholder: InputSignal<string> = input<string>('');
}

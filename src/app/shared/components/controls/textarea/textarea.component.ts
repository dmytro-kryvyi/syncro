import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseControlValueAccessor } from 'app/shared/base/control-value-accessor';

@Component({
  selector: 'syncro-textarea',
  imports: [ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent extends BaseControlValueAccessor<string> {
  placeholder: InputSignal<string> = input<string>('');
}

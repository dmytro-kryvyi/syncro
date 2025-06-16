import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseControlValueAccessor } from 'app/core/base/control-value-accessor';
import { IconComponent } from '../../components/icon/icon.component';

@Component({
  selector: 'syncro-password-input',
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, IconComponent],
})
export class PasswordInputComponent extends BaseControlValueAccessor<string> {
  placeholder: InputSignal<string> = input<string>('');

  type: WritableSignal<'password' | 'text'> = signal('password');
  icon: Signal<string> = computed(() => {
    return this.type() === 'password' ? 'EYE' : 'EYE-CLOSED';
  });

  onToggleVisibility(): void {
    this.type.update((currentType) => (currentType === 'password' ? 'text' : 'password'));
  }
}

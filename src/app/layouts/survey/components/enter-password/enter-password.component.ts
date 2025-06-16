import { ChangeDetectionStrategy, Component, output, OutputEmitterRef } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordInputComponent } from 'app/shared/components/controls/password-input/password-input.component';

@Component({
  selector: 'syncro-enter-password',
  templateUrl: './enter-password.component.html',
  styleUrl: './enter-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PasswordInputComponent, ReactiveFormsModule],
})
export class EnterPasswordComponent {
  submit: OutputEmitterRef<string> = output();

  control: FormControl<string> = new FormControl('', {
    validators: [Validators.required],
    nonNullable: true,
  });

  onSubmit(): void {
    this.submit.emit(this.control.value);
  }
}

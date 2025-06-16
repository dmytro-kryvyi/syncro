import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseControlValueAccessor } from 'app/shared/base/control-value-accessor';

@Component({
  selector: 'syncro-toggle-input',
  templateUrl: './toggle-input.component.html',
  styleUrl: './toggle-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
})
export class ToggleInputComponent extends BaseControlValueAccessor<boolean> {
  constructor() {
    super();
  }
}

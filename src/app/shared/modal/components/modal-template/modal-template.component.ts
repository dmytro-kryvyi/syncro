import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { IconComponent } from '../../../components/icon/icon.component';

@Component({
  selector: 'syncro-modal-template',
  imports: [IconComponent],
  templateUrl: './modal-template.component.html',
  styleUrl: './modal-template.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalTemplateComponent {
  title: InputSignal<string | null> = input<string | null>(null);

  closeModal(): void {}
}

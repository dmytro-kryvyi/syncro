import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { IconComponent } from 'app/shared/components/icon/icon.component';

@Component({
  selector: 'syncro-event-link',
  templateUrl: './event-link.component.html',
  styleUrl: './event-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
})
export class EventLinkComponent {
  link: InputSignal<string> = input.required();

  onCopy(): void {}
}

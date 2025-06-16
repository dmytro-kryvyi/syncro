import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { TEvent } from 'app/entities/event/types/event.type';

@Component({
  selector: 'syncro-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
})
export class EventCardComponent {
  event: InputSignal<TEvent> = input.required();
}

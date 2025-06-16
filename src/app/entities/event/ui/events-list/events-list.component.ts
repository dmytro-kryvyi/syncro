import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
} from '@angular/core';
import { TEvent } from 'app/entities/event/types/event.type';
import { IconComponent } from 'app/shared/components/icon/icon.component';

@Component({
  selector: 'syncro-events-list',
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, IconComponent],
})
export class EventsListComponent {
  events: InputSignal<TEvent[]> = input.required();

  eventClick: OutputEmitterRef<TEvent> = output();

  onEventClick(event: TEvent): void {
    this.eventClick.emit(event);
  }

  onCopy(mouseEvent: MouseEvent, event: TEvent): void {
    mouseEvent.stopPropagation();

    navigator.clipboard
      .writeText(event.link)
      .then(() => {
        //TODO show a toast or notification to indicate success
        console.log('Copied to clipboard:', event.link);
      })
      .catch((err) => {
        console.error('Failed to copy text:', err);
      });
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EventFormComponent } from '../../components/event-form/event-form.component';
import { AccordionComponent } from '../../../../shared/components/accordion/accordion.component';
import { EventCardComponent } from '../../../../entities/event/ui/event-card/event-card.component';
import { TEvent } from 'app/entities/event/types/event.type';

@Component({
  selector: 'syncro-event-details',
  imports: [EventFormComponent, AccordionComponent, EventCardComponent],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventDetailsComponent {
  event: TEvent = {
    id: '1',
    title: 'Event 1',
    description: 'Description for Event 1',
    startDate: new Date('2023-10-01T10:00:00'),
    endDate: new Date('2023-10-01T12:00:00'),
    days: ['Mon'],
    isProtected: false,
    startTime: '10:00',
    endTime: '12:00',
    fractions: 10,
    link: 'https://example.com/event1',
  };
}

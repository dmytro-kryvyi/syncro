import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TabsRoutingPanelComponent } from '../../../../shared/components/tabs-panel/tabs-routing-panel/tabs-routing-panel.component';
import { TabComponent } from '../../../../shared/components/tabs-panel/tab/tab.component';
import { EventsListComponent } from 'app/entities/event/ui/events-list/events-list.component';
import { TEvent } from 'app/entities/event/types/event.type';
import { EmptyComponent } from '../../../../shared/components/no-data-message/empty.component';
import { Router } from '@angular/router';

@Component({
  selector: 'syncro-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TabsRoutingPanelComponent, TabComponent, EventsListComponent, EmptyComponent],
})
export class EventsComponent {
  private router: Router = inject(Router);

  onEventClick(event: TEvent): void {
    this.router.navigate(['events', 'details', event.id]);
  }

  events: TEvent[] = [
    {
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
    },
  ];
}

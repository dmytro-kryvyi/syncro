import { Route } from '@angular/router';
import { EventDetailsComponent } from 'app/layouts/events/pages/event-details/event-details.component';
import { EventPublishedComponent } from 'app/layouts/events/pages/event-published/event-published.component';
import { EventsComponent } from 'app/layouts/events/pages/events/events.component';
import { OrganizeComponent } from 'app/layouts/events/pages/organize/organize.component';

export const eventsRoutes: Route[] = [
  {
    path: 'events',
    loadComponent: () =>
      import('app/layouts/events/index/events-index.component').then((m) => m.EventsIndexComponent),
    children: [
      {
        path: '',
        component: EventsComponent,
      },
      {
        path: 'organize',
        component: OrganizeComponent,
      },
      {
        path: 'published',
        component: EventPublishedComponent,
      },
      {
        path: 'details/:eventId',
        component: EventDetailsComponent,
      },
    ],
  },
];

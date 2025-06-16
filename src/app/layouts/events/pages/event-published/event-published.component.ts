import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventLinkComponent } from 'app/layouts/events/components/event-link/event-link.component';

@Component({
  selector: 'syncro-event-published',
  imports: [EventLinkComponent],
  templateUrl: './event-published.component.html',
  styleUrl: './event-published.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventPublishedComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);

  get link(): string {
    return this.route.snapshot.queryParamMap.get('link') || '';
  }
}

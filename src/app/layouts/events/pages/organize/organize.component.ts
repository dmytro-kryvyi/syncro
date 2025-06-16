import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EventFormComponent } from '../../components/event-form/event-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'syncro-organize',
  templateUrl: './organize.component.html',
  styleUrl: './organize.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EventFormComponent],
})
export class OrganizeComponent {
  private router = inject(Router);

  private event: any = null;

  onFormChange(event: any): void {
    this.event = event;
  }

  onView(): void {}

  onPublish(): void {
    this.router.navigate(['events', 'published'], {
      queryParams: { link: 'https://mock.com' },
    });
  }
}

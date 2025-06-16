import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'syncro-events-index',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class EventsIndexComponent {}

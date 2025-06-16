import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'syncro-survey-index',
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class SurveyIndexComponent {}

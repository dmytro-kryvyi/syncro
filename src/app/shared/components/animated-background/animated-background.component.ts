import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'syncro-animated-background',
  imports: [],
  templateUrl: './animated-background.component.html',
  styleUrl: './animated-background.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent {}

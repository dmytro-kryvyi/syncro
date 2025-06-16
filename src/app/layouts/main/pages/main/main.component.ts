import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'syncro-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class MainComponent {
  private router = inject(Router);

  onOrganize(): void {
    this.router.navigate(['events', 'organize']);
  }

  onView(): void {
    this.router.navigate(['events']);
  }
}

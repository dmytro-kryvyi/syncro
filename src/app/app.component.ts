import { afterNextRender, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from 'app/shared/components/background/background.component';
import { ModalComponent } from './shared/modal/index/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [BackgroundComponent, RouterOutlet, ModalComponent],
})
export class AppComponent {}

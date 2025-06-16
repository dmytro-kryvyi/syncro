import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'syncro-empty',
  imports: [],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyComponent {
  text: InputSignal<string> = input('Nothing to see here!');
}

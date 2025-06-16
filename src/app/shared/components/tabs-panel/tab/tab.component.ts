import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'syncro-tab',
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  title: InputSignal<string> = input.required();
  route: InputSignal<string> = input('');

  active: WritableSignal<boolean> = signal(false);
}

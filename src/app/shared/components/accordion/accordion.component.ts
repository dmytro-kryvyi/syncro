import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';
import { IconComponent } from 'app/shared/components/icon-wrapper/icon.component';

@Component({
  selector: 'syncro-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, NgClass],
})
export class AccordionComponent {
  title: InputSignal<string> = input.required();

  isExpanded: WritableSignal<boolean> = signal(false);

  onToggle(): void {
    this.isExpanded.update((expanded) => !expanded);
  }
}

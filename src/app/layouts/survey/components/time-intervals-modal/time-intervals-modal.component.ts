import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { ModalTemplateComponent } from '../../../../shared/modal/components/modal-template/modal-template.component';
import { TimePickerComponent } from 'app/shared/inputs/time-picker/index/time-picker/time-picker.component';

@Component({
  selector: 'syncro-time-intervals-modal',
  templateUrl: './time-intervals-modal.component.html',
  styleUrl: './time-intervals-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ModalTemplateComponent, TimePickerComponent],
})
export class TimeIntervalsModalComponent {
  intervals: WritableSignal<{ start: string; end: string }[]> = signal([]);
}

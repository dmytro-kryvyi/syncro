import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ModalTemplateComponent } from '../../../../shared/components/modal-template/modal-template.component';
import { TimePickerComponent } from 'app/shared/components/controls/time-picker/time-picker/time-picker.component';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { start } from 'repl';
import { DatePipe } from '@angular/common';
import { IconComponent } from 'app/shared/components/icon-wrapper/icon.component';
import { TOption } from 'app/shared/types/option.type';

@Component({
  selector: 'syncro-time-intervals-modal',
  templateUrl: './time-intervals-modal.component.html',
  styleUrl: './time-intervals-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ModalTemplateComponent,
    TimePickerComponent,
    ReactiveFormsModule,
    DatePipe,
    IconComponent,
  ],
})
export class TimeIntervalsModalComponent implements OnInit {
  private fb = inject(NonNullableFormBuilder);

  intervals: WritableSignal<{ start: string; end: string }[]> = signal([]);
  timeForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  onAdd(): void {
    if (this.timeForm.invalid) {
      return;
    }

    const { start, end } = this.timeForm.value;

    this.intervals.update((currentIntervals) => [
      ...currentIntervals,
      { start: start.label, end: end.label },
    ]);
  }

  onDelete(index: number): void {
    this.intervals.update((currentIntervals) => {
      const newIntervals = [...currentIntervals];
      newIntervals.splice(index, 1);
      return newIntervals;
    });
  }

  private initForm(): void {
    this.timeForm = this.fb.group({
      start: this.fb.control<TOption<string>>(this.getOption('00:00')),
      end: this.fb.control<TOption<string>>(this.getOption('24:00')),
    });
  }

  private getOption(time: string): TOption<string> {
    return {
      label: time,
      value: time,
    };
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseControlValueAccessor } from 'app/shared/base/control-value-accessor';
import { SelectorComponent } from 'app/shared/components/controls/selector/selector/selector.component';
import { TOption } from 'app/shared/types/option.type';

@Component({
  selector: 'syncro-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SelectorComponent, ReactiveFormsModule],
})
export class TimePickerComponent extends BaseControlValueAccessor<string> implements OnInit {
  interval: InputSignal<number> = input(60);

  options: WritableSignal<TOption<string>[]> = signal([]);

  ngOnInit(): void {
    this.initOptions();
  }

  private initOptions(): void {
    let time = 0;
    const options: TOption<string>[] = [];
    const interval = this.interval();

    if (interval < 1 || interval > 1440) {
      throw new Error('Interval must be between 1 and 1440 minutes');
    }

    while (time <= 1440) {
      const value = this.convertToHours(time);

      options.push({
        label: value,
        value,
      });

      time += interval;
    }

    this.options.set(options);
  }

  private convertToHours(minutes: number): string {
    const hours = Math.floor(minutes / 60)
      .toString()
      .padStart(2, '0');
    const minutesLeft = (minutes % 60).toString().padStart(2, '0');

    return `${hours}:${minutesLeft}`;
  }
}

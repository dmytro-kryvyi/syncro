import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  Signal,
} from '@angular/core';
import { BaseControlValueAccessor } from 'app/core/base/control-value-accessor';
import { TAvailabilityMatrix } from 'app/entities/survey/types/availability-matrix.type';
import { TimeIntervalsComponent } from '../time-intervals/time-intervals.component';

type TTimeSlotGroup = {
  title: string;
  days: Date[];
};

@Component({
  selector: 'syncro-days-matrix-selector',
  templateUrl: './days-matrix-selector.component.html',
  styleUrl: './days-matrix-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, TimeIntervalsComponent],
})
export class DaysMatrixSelectorComponent extends BaseControlValueAccessor<TAvailabilityMatrix[]> {
  test() {
    console.log(this.groups());
  }
  days: InputSignal<Date[]> = input<Date[]>([]);

  groups: Signal<TTimeSlotGroup[]> = computed(() => {
    const days = this.days().sort((a, b) => a.getTime() - b.getTime());
    if (!days.length) return [];

    console.log(` days: ${days.map((date) => date.toISOString()).join(', ')}`);

    const groups: TTimeSlotGroup[] = [];
    let currentGroup: TTimeSlotGroup = this.getGroup(days[0]);

    for (let i = 1; i < days.length; i++) {
      const currentDay = days[i];
      const previousDay = days[i - 1];

      if (this.isConcurentDay(previousDay, currentDay)) {
        currentGroup.days.push(currentDay);
      } else {
        groups.push(currentGroup);

        currentGroup = this.getGroup(currentDay);
      }
    }
    groups.push(currentGroup);

    return groups;
  });

  private isConcurentDay(previousDay: Date, currentDay: Date) {
    const currentDayCopy = new Date(currentDay);
    currentDayCopy.setDate(currentDay.getDate() - 1);

    return (
      previousDay.getDate() === currentDayCopy.getDate() &&
      previousDay.getMonth() === currentDayCopy.getMonth() &&
      previousDay.getFullYear() === currentDayCopy.getFullYear()
    );
  }

  private getGroup(day: Date): TTimeSlotGroup {
    return {
      title: `Group starting ${day.toDateString()}`,
      days: [day],
    };
  }
}

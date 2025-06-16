import { DatePipe, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
  signal,
  WritableSignal,
} from '@angular/core';
import { IconComponent } from 'app/shared/components/icon/icon.component';

@Component({
  selector: 'syncro-calendar-selector',
  templateUrl: './calendar-selector.component.html',
  styleUrl: './calendar-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, DatePipe, NgClass],
})
export class CalendarSelectorComponent {
  daysSelected: OutputEmitterRef<Date[]> = output();

  days: WritableSignal<string[]> = signal([]);
  currentViewDate: WritableSignal<Date> = signal(new Date());
  selectedDates: WritableSignal<Date[]> = signal([]);

  dayNames: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  ngOnInit() {
    this.initCalendar();
  }

  selectDay(day: string): void {
    const selectedDate = new Date(this.currentViewDate());
    const dayNumber = Number.parseInt(day);
    selectedDate.setDate(dayNumber);

    const index = this.selectedDates().findIndex(
      (date) =>
        date.getDate() === dayNumber &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear(),
    );

    if (index === -1) {
      this.selectedDates.update((dates) => [...dates, selectedDate]);
    } else {
      this.selectedDates.update((dates) => {
        const newValue = [...dates];
        newValue.splice(index, 1);
        return newValue;
      });
    }

    console.log(
      `Selected dates: ${this.selectedDates()
        .map((date) => date.toISOString())
        .join(', ')}`,
    );

    this.daysSelected.emit(this.selectedDates());
  }

  onPrevMonth(): void {
    const date = new Date(this.currentViewDate());
    date.setMonth(date.getMonth() - 1);
    this.currentViewDate.set(date);
    this.initCalendar();
  }

  onNextMonth(): void {
    const date = new Date(this.currentViewDate());
    date.setMonth(date.getMonth() + 1);
    this.currentViewDate.set(date);
    this.initCalendar();
  }

  isSelected(day: string): boolean {
    const selectedDate = new Date(this.currentViewDate());
    const dayNumber = Number.parseInt(day);
    selectedDate.setDate(dayNumber);

    return this.selectedDates().some(
      (date) =>
        date.getDate() === dayNumber &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear(),
    );
  }

  private initCalendar(): void {
    const date = new Date(this.currentViewDate());

    this.days.set(Array.from({ length: this.getDaysInMonth(date) }, (_, i) => String(i + 1)));

    date.setDate(1);
    let offset = date.getDay();
    offset = offset === 0 ? 6 : offset - 1; // Adjust for Monday start

    for (let i = 0; i < offset; i++) {
      this.days.set(['', ...this.days()]);
    }
  }

  private getDaysInMonth(date: Date): number {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }
}

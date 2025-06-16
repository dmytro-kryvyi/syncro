import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  output,
  OutputEmitterRef,
  signal,
  WritableSignal,
} from '@angular/core';
import { IconComponent } from 'app/shared/components/icon-wrapper/icon.component';

@Component({
  selector: 'syncro-date-picker-overlay',
  imports: [DatePipe, IconComponent],
  templateUrl: './date-picker-overlay.component.html',
  styleUrl: './date-picker-overlay.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerOverlayComponent {
  selected: OutputEmitterRef<Date> = output();

  days: WritableSignal<string[]> = signal([]);
  selectedDate: WritableSignal<Date> = signal(new Date());

  dayNames: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  ngOnInit() {
    this.initCalendar();
  }

  selectDay(day: string): void {
    const date = new Date();
    date.setDate(Number.parseInt(day, 10));
    this.selected.emit(date);
  }

  onPrevMonth(): void {
    const date = new Date(this.selectedDate());
    date.setMonth(date.getMonth() - 1);
    this.selectedDate.set(date);
    this.initCalendar();
  }

  onNextMonth(): void {
    const date = new Date(this.selectedDate());
    date.setMonth(date.getMonth() + 1);
    this.selectedDate.set(date);
    this.initCalendar();
  }

  private initCalendar(): void {
    const date = new Date(this.selectedDate());

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

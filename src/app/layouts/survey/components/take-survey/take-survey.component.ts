import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { CalendarSelectorComponent } from '../calendar-selector/calendar-selector.component';
import { DaysMatrixSelectorComponent } from '../days-matrix-selector/days-matrix-selector.component';

@Component({
  selector: 'syncro-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrl: './take-survey.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CalendarSelectorComponent, DaysMatrixSelectorComponent],
})
export class TakeSurveyComponent {
  selectedDays: WritableSignal<Date[]> = signal([]);

  onDaysSelected(days: Date[]): void {
    console.log('Selected days:', days);

    this.selectedDays.set(days);
  }
}

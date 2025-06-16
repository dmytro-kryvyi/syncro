import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { EnterPasswordComponent } from 'app/layouts/survey/components/enter-password/enter-password.component';
import { FastOptionsComponent } from 'app/layouts/survey/components/fast-options/fast-options.component';
import { TakeSurveyComponent } from 'app/layouts/survey/components/take-survey/take-survey.component';
import { TSurveySteps } from 'app/layouts/survey/types/survey-steps.type';
import { TSurveyOption } from '../../types/survey-option.type';
import { TSurveyOptionId } from 'app/layouts/survey/types/survey-id.type';

@Component({
  selector: 'syncro-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EnterPasswordComponent, FastOptionsComponent, TakeSurveyComponent],
})
export class SurveyComponent {
  readonly OPTIONS_MAPPER: Record<TSurveyOptionId, () => void> = {
    always: this.onAlwaysSelected.bind(this),
    weekends: this.onWeekendsSelected.bind(this),
    custom: this.onCustomSelected.bind(this),
  };

  step: WritableSignal<TSurveySteps> = signal('calendar');

  onSubmitPassword(password: string): void {
    //TODO: Implement password submission logic
    this.step.set('select');
  }

  onSelectedOption(option: TSurveyOption) {
    this.OPTIONS_MAPPER[option.id]();
  }

  private onAlwaysSelected(): void {}

  private onWeekendsSelected(): void {}

  private onCustomSelected(): void {
    this.step.set('calendar');
  }
}

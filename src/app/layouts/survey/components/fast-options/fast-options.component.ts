import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, output, OutputEmitterRef } from '@angular/core';
import { SURVEY_OPTIONS } from 'app/layouts/survey/data/options.constant';
import { TSurveyOption } from 'app/layouts/survey/types/survey-option.type';

@Component({
  selector: 'syncro-fast-options',
  templateUrl: './fast-options.component.html',
  styleUrl: './fast-options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgStyle],
})
export class FastOptionsComponent {
  selected: OutputEmitterRef<TSurveyOption> = output<TSurveyOption>();

  options = SURVEY_OPTIONS;

  getColor(option: TSurveyOption): string {
    const color = option?.color;
    return color ? `var(${color})` : '';
  }

  onSelect(option: TSurveyOption): void {
    this.selected.emit(option);
  }
}

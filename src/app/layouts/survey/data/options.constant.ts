import { TSurveyOption } from 'app/layouts/survey/types/survey-option.type';

export const SURVEY_OPTIONS: TSurveyOption[] = [
  {
    id: 'always',
    title: 'Always Available',
    description: 'Set your availability for all days and times',
    image: 'assets/images/survey/fast-options.png',
    color: '--mint',
  },
  {
    id: 'weekends',
    title: 'Weekend Only',
    description: 'Set your availability for weekends only',
    image: 'assets/images/survey/advanced-options.png',
    color: '--cyan',
  },
  {
    id: 'custom',
    title: "I'm busy cat",
    description: 'Select days and times when you are available',
    image: 'assets/images/survey/custom-options.png',
    color: '--orange',
  },
];

import { Route } from '@angular/router';
import { SurveyComponent } from 'app/layouts/survey/pages/survey/survey.component';

export const surveyRoutes: Route[] = [
  {
    path: 'survey',
    loadComponent: () =>
      import('app/layouts/survey/index/survey-index.component').then((m) => m.SurveyIndexComponent),
    children: [
      {
        path: '',
        component: SurveyComponent,
      },
    ],
  },
];

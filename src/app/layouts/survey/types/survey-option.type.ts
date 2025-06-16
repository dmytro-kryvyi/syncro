import { TSurveyOptionId } from 'app/layouts/survey/types/survey-id.type';

export type TSurveyOption = {
  id: TSurveyOptionId;
  title: string;
  description: string;
  image: string;
  color: string;
};

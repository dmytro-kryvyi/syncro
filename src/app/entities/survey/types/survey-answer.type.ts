import { TAvailabilityMatrix } from 'app/entities/survey/types/availability-matrix.type';
import { TSurveyOptionId } from 'app/layouts/survey/types/survey-id.type';

export type TSurveyAnswer = {
  userId: string;
  type: TSurveyOptionId;
  availabilityMatrix?: TAvailabilityMatrix[];
};

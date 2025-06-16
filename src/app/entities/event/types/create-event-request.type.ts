import { TEventFractions } from 'app/entities/event/data/event-fractions.type';

export type TCreateEventRequest = {
  title: string;
  description: string;
  isProtected: boolean;
  startDate: Date;
  endDate: Date;
  fractions: TEventFractions;
  days: string[];
  startTime: string | null;
  endTime: string | null;
  password?: string;
};

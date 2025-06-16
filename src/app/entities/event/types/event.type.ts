import { TEventFractions } from 'app/entities/event/data/event-fractions.type';

export type TEvent = {
  id: string;
  title: string;
  description: string;
  isProtected: boolean;
  startDate: Date;
  endDate: Date;
  startTime: string | null;
  endTime: string | null;
  fractions: TEventFractions;
  link: string;
  days: string[];
};

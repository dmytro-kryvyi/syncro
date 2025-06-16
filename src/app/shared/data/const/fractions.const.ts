import { TEventFractions } from 'app/entities/event/data/event-fractions.type';
import { TOption } from 'app/shared/types/option.type';

export const FRACTIONS: TOption<TEventFractions>[] = [
  { label: '10 m', value: 10 },
  { label: '30 m', value: 30 },
  { label: '1 h', value: 60 },
];

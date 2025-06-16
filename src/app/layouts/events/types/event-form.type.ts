import { FormControl } from '@angular/forms';
import { TEventFractions } from 'app/entities/event/data/event-fractions.type';

export type TEventFormType = {
  title: FormControl<string>;
  isProtected: FormControl<boolean>;
  password: FormControl<string>;
  description: FormControl<string>;
  isSetTime: FormControl<boolean>;
  startDate: FormControl<Date>;
  endDate: FormControl<Date>;
  startTime: FormControl<string | null>;
  endTime: FormControl<string | null>;
  fractions: FormControl<TEventFractions>;
  days: FormControl<string[]>;
};

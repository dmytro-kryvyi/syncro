import { TTimeSlot } from 'app/entities/survey/types/time-slot.type';

export type TAvailabilityMatrix = {
  day: Date;
  timeSlots: TTimeSlot[];
};

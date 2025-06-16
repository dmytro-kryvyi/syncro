import { ChangeDetectionStrategy, Component, inject, OnInit, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { TEventFractions } from 'app/entities/event/data/event-fractions.type';
import { TEventFormType } from 'app/layouts/events/types/event-form.type';
import { DAYS } from 'app/shared/const/days.const';
import { FRACTIONS } from 'app/shared/const/fractions.const';
import { ButtonToggleComponent } from 'app/shared/components/controls/button-toggle/button-toggle.component';
import { DatePickerComponent } from 'app/shared/components/controls/date-picker/date-picker/date-picker.component';
import { TextInputComponent } from 'app/shared/components/controls/text-input/text-input.component';
import { TextareaComponent } from 'app/shared/components/controls/textarea/textarea.component';
import { TimePickerComponent } from 'app/shared/components/controls/time-picker/time-picker/time-picker.component';
import { ToggleInputComponent } from 'app/shared/components/controls/toggle-input/toggle-input.component';
import { TOption } from 'app/shared/types/option.type';

@Component({
  selector: 'syncro-event-form',
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    TextInputComponent,
    DatePickerComponent,
    ToggleInputComponent,
    TimePickerComponent,
    ButtonToggleComponent,
    TextareaComponent,
  ],
})
export class EventFormComponent implements OnInit {
  formChange = output<any>();

  fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  readonly days: TOption<string>[] = DAYS;
  readonly fractions: TOption<TEventFractions>[] = FRACTIONS;

  eventForm!: FormGroup<TEventFormType>;

  get isProtected(): FormControl<boolean> {
    return this.eventForm.controls.isProtected as FormControl<boolean>;
  }

  get isSetTime(): FormControl<boolean> {
    return this.eventForm.controls.isSetTime as FormControl<boolean>;
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.eventForm = this.fb.group<TEventFormType>({
      title: this.fb.control<string>(''),
      isProtected: this.fb.control<boolean>(false),
      password: this.fb.control<string>(''),
      description: this.fb.control<string>(''),
      startDate: this.fb.control<Date>(new Date()),
      endDate: this.fb.control<Date>(new Date()),
      fractions: this.fb.control<TEventFractions>(60),
      isSetTime: this.fb.control<boolean>(false),
      startTime: this.fb.control<string | null>(null),
      endTime: this.fb.control<string | null>(null),
      days: this.fb.control<string[]>(this.days.map((day) => day.value)),
    });

    this.initFormListeners();
  }

  private initFormListeners(): void {
    this.eventForm.valueChanges.subscribe((value) => {
      this.formChange.emit(value);
    });
  }
}

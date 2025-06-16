import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  ElementRef,
  inject,
  input,
  InputSignal,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { BaseControlValueAccessor } from 'app/core/base/control-value-accessor';
import { OverlayService } from 'app/shared/services/overlay/overlay.service';
import { IconComponent } from 'app/shared/components/icon/icon.component';
import { DatePickerOverlayComponent } from 'app/shared/inputs/date-picker/components/date-picker-overlay/date-picker-overlay.component';
import { untilDestroyed } from 'app/shared/utils/until-destroyed';

@Component({
  selector: 'syncro-date-picker',
  imports: [DatePipe, IconComponent],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerComponent extends BaseControlValueAccessor<Date> implements OnInit {
  @ViewChild('picker', { static: true }) pickerEl!: ElementRef<HTMLElement>;

  placeholder: InputSignal<string> = input<string>('');

  private overlay = inject(OverlayService);

  selectedDate = signal<Date | null>(null);

  private overlayRef: ComponentRef<DatePickerOverlayComponent> | null = null;

  ngOnInit(): void {
    this.selectedDate.set(this.formControl.value);

    this.formControl.valueChanges.pipe(untilDestroyed(this)).subscribe((date: Date | null) => {
      this.selectedDate.set(date);
    });
  }

  getPlaceholder(): string {
    return this.placeholder() || this.label();
  }

  open(): void {
    if (this.overlayRef) return;

    const target = this.pickerEl.nativeElement as HTMLElement;
    this.overlayRef = this.overlay.open(DatePickerOverlayComponent, target, {
      onClose: () => (this.overlayRef = null),
    });

    this.overlayRef.instance.selected.subscribe((date: Date) => {
      this.selectedDate.set(date);
      this.overlay.close(this.overlayRef!);
      this.overlayRef = null;
    });
  }
}

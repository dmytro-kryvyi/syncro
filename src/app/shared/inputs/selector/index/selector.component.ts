import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  ElementRef,
  inject,
  input,
  InputSignal,
  signal,
  ViewChild,
} from '@angular/core';
import { BaseControlValueAccessor } from 'app/core/base/control-value-accessor';
import { OverlayService } from 'app/shared/services/overlay/overlay.service';
import { IconComponent } from 'app/shared/components/icon/icon.component';
import { DropdownComponent } from 'app/shared/inputs/selector/components/dropdown/dropdown.component';
import { TOption } from 'app/shared/types/option.type';

@Component({
  selector: 'syncro-selector',
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
})
export class SelectorComponent extends BaseControlValueAccessor<TOption<unknown>> {
  @ViewChild('selector', { static: true }) selectorEl!: ElementRef<HTMLElement>;

  options: InputSignal<TOption<unknown>[]> = input.required();
  placeholder: InputSignal<string> = input<string>('');
  icon: InputSignal<string> = input('ARROW-DOWN');

  private overlay = inject(OverlayService);

  selected = signal<TOption<unknown> | null>(null);
  private overlayRef: ComponentRef<DropdownComponent> | null = null;

  open(event: MouseEvent): void {
    if (this.overlayRef) return;

    const target = this.selectorEl.nativeElement;

    this.overlayRef = this.overlay.open(DropdownComponent, target, {
      onClose: () => (this.overlayRef = null),
    });

    this.overlayRef.instance.options.set(this.options());

    this.overlayRef.instance.selected.subscribe((option: TOption<unknown>) => {
      this.selected.set(option);
      this.overlay.close(this.overlayRef!);
      this.overlayRef = null;
    });
  }

  getPlaceholder(): string {
    return this.placeholder() ? this.placeholder() : this.label();
  }
}

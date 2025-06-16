import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TimeIntervalsModalComponent } from 'app/layouts/survey/components/time-intervals-modal/time-intervals-modal.component';
import { IconComponent } from 'app/shared/components/icon/icon.component';
import { ModalService } from 'app/shared/services/modal/modal.service';

@Component({
  selector: 'syncro-time-intervals',
  templateUrl: './time-intervals.component.html',
  styleUrl: './time-intervals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
})
export class TimeIntervalsComponent {
  private modalService = inject(ModalService);

  onChangeTime(): void {
    const modalRef = this.modalService.openModal(TimeIntervalsModalComponent);
  }
}

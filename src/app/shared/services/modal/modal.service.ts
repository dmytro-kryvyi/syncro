import { Injectable, Type } from '@angular/core';
import { ModalRef } from 'app/shared/base/modal/modal-ref';
import { Observable, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalStateSubject = new Subject<ModalRef<any>[]>();
  private modals: ModalRef<any>[] = [];

  openModal<T>(modal: Type<T>, data?: unknown): ModalRef<T> {
    const modalRef = new ModalRef<T>();

    modalRef.modalType = modal;
    modalRef.data = data;

    this.modals.push(modalRef);
    this.modalStateSubject.next(this.modals);

    modalRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        this.closeModal(result.id);
      });

    return modalRef;
  }

  closeModal(id: string): void {
    this.modals = this.modals.filter((modal) => modal.id !== id);
    this.modalStateSubject.next(this.modals);
  }

  closeLastModal(): void {
    if (this.modals.length === 0) return;

    this.modals.pop();
    this.modalStateSubject.next(this.modals);
  }

  getModalState(): Observable<ModalRef<unknown>[]> {
    return this.modalStateSubject.asObservable();
  }
}

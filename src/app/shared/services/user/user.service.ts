import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { PersistenceService } from 'app/shared/services/persistence/persistence.service';
import { nanoid } from 'nanoid';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private persistenceService = inject(PersistenceService);

  // Internal mutable signal
  private _userId: WritableSignal<string | null> = signal(null);

  // Public read-only signal
  userId: Signal<string | null> = this._userId.asReadonly();

  constructor() {
    let userId: string | null = this.persistenceService.get('userId') as string | null;

    if (!userId) {
      console.log('User ID not found, generating a new one.');

      userId = this.generateUserId();
      this._userId.set(userId);
      this.persistenceService.set('userId', userId);
    } else {
      this._userId.set(userId);
    }
  }

  private generateUserId(): string {
    return `su-${nanoid()}`;
  }
}

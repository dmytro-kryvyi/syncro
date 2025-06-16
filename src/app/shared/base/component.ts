import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class BaseComponent implements OnDestroy {
  $destroyRef = new Subject<void>();

  ngOnDestroy(): void {
    this.$destroyRef.next();
    this.$destroyRef.complete();
  }
}

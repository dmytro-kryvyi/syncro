import { BaseComponent } from 'app/core/base/component';
import { MonoTypeOperatorFunction, takeUntil } from 'rxjs';

export function untilDestroyed<T>(component: BaseComponent): MonoTypeOperatorFunction<T> {
  return takeUntil(component.$destroyRef);
}

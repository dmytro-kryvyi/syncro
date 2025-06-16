import {
  ApplicationRef,
  ComponentRef,
  Injectable,
  Injector,
  Type,
  createComponent,
  inject,
} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OverlayService {
  private injector = inject(Injector);
  private appRef = inject(ApplicationRef);

  open<T extends object>(
    component: Type<T>,
    target: HTMLElement,
    config?: {
      onClose?: () => void;
      position?: 'bottom-left' | 'bottom-right';
      data?: Partial<T>;
    },
  ): ComponentRef<T> {
    const componentRef = createComponent(component, {
      environmentInjector: this.appRef.injector,
      elementInjector: this.injector,
    });

    if (config?.data) Object.assign(componentRef.instance, config.data);

    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;

    const rect = target.getBoundingClientRect();
    domElem.style.position = 'absolute';
    domElem.style.zIndex = '1000';
    domElem.style.width = target.clientWidth + 'px';
    domElem.style.top = `${rect.bottom + window.scrollY}px`;
    domElem.style.left = `${rect.left + window.scrollX}px`;

    document.body.appendChild(domElem);

    const clickHandler = (event: MouseEvent) => {
      if (!domElem.contains(event.target as Node) && event.target !== target) {
        this.close(componentRef);
        document.removeEventListener('mousedown', clickHandler);
        config?.onClose?.();
      }
    };
    setTimeout(() => document.addEventListener('mousedown', clickHandler));

    return componentRef;
  }

  close<T>(ref: ComponentRef<T>): void {
    this.appRef.detachView(ref.hostView);
    ref.destroy();
  }
}

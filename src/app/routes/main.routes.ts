import { Route } from '@angular/router';

export const mainRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('app/layouts/main/pages/main/main.component').then(
        (m) => m.MainComponent,
      ),
  },
];

import { Route } from '@angular/router';
import { eventsRoutes } from 'app/core/routes/events.routes';
import { mainRoutes } from 'app/core/routes/main.routes';
import { surveyRoutes } from 'app/core/routes/survey.routes';

export const routes: Route[] = [...mainRoutes, ...eventsRoutes, ...surveyRoutes];

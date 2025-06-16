import { Route } from '@angular/router';
import { eventsRoutes } from 'app/routes/events.routes';
import { mainRoutes } from 'app/routes/main.routes';
import { surveyRoutes } from 'app/routes/survey.routes';

export const routes: Route[] = [...mainRoutes, ...eventsRoutes, ...surveyRoutes];

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

//primeng config 

export const appConfig: ApplicationConfig = {
  providers: [ provideRouter(routes), provideHttpClient()]
};

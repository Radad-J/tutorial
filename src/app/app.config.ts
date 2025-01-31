import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

//primeng config 
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/Lara';
export const appConfig: ApplicationConfig = {
  providers: [ provideRouter(routes), provideHttpClient(), provideAnimationsAsync(),
    providePrimeNG({ 
        theme: {
            //preset: Lara
        }
    })]
};

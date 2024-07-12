import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { todoReducer } from './todo/todo.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './app.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideStore(reducers),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: true,
      autoPause: true,
    }),
  ],
};

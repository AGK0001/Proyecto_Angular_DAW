import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // 1. Importar esto
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // 2. Configurar el Router así:
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',       // <--- ESTO ES LA CLAVE
        scrollPositionRestoration: 'enabled'
      })
    ),
    provideClientHydration(withEventReplay())
  ]
};

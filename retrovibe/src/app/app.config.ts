import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  // importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
// import { FormlyModule } from '@ngx-formly/core';
// import { FormlyMaterialModule } from '@ngx-formly/material';
import { provideFormlyCore } from '@ngx-formly/core';
import { withFormlyMaterial } from '@ngx-formly/material'; // Import material instead of bootstrap

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    // importProvidersFrom(FormlyModule.forRoot(), FormlyMaterialModule),
    // provideFormlyCore(withFormlyMaterial()),
    // importProvidersFrom(
    //   FormlyModule.forRoot({
    //     validationMessages: [{ name: 'required', message: 'This field is required' }],
    //   }),
    //   // Make sure the material module is also imported
    //   FormlyMaterialModule
    // ),
    provideFormlyCore([
      ...withFormlyMaterial(),
      {
        validationMessages: [{ name: 'required', message: 'This field is required' }],
      },
    ]),
  ],
};

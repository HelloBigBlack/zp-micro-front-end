import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// SPA --start
import * as singleSpa from 'single-spa';


singleSpa.registerApplication(
  'app1',
  function () {
    return window.System.import('app1');
  },
  function (location) {
    return location.pathname.startsWith('/app1');
  }
);

singleSpa.start();
// SPA --end

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

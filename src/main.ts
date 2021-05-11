import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Scrollbar from "smooth-scrollbar";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


Scrollbar.initAll();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

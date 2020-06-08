import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// SPA --start
import { SpaHostComponent } from './spa-host/spa-host.component';
import { RouteReuseStrategy } from '@angular/router';
import { MicroFrontendRouteReuseStrategy } from '../service/route-reuse-strategy';
// SPA --end

@NgModule({
  declarations: [
    AppComponent,
    // SPA --start
    SpaHostComponent
    // SPA --end
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // SPA --start
    {
      provide: RouteReuseStrategy,
      useClass: MicroFrontendRouteReuseStrategy
    }
    // SPA --end
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

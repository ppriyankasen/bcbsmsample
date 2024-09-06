import { FormsModule } from '@angular/forms';
import { NgModule, Injector } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {
  BrowserModule
} from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoggingServiceModule } from 'ionic-logging-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalServiceLocator } from './shared/GlobalServiceLocator';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    IonicModule.forRoot({
      innerHTMLTemplatesEnabled: true,
      swipeBackEnabled: false,
      // mode: 'ios'
    }),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),

    LoggingServiceModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {    // Create global Service Injector.
    GlobalServiceLocator.injector = this.injector;
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LoginPageModule } from '../pages/login/login.module';
import { EventPageModule } from '../pages/event/event.module';
import { EventDetailPageModule } from '../pages/event-detail/event-detail.module';
import { VendorListPageModule } from '../pages/vendor-list/vendor-list.module';
import { DataServiceProvider } from '../providers/data-service/data-service';

import { Ionic2RatingModule } from "ionic2-rating";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    EventPageModule,
    EventDetailPageModule,
    VendorListPageModule,
    HttpModule,
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    DataServiceProvider
  ]
})
export class AppModule {}

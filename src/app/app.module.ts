import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

var firebaseConfig = {
  apiKey: "AIzaSyBVaVsFICrTNoMypfxQf3eOSqFtVh06pZE",
  authDomain: "houseiot-4eee8.firebaseapp.com",
  databaseURL: "https://houseiot-4eee8.firebaseio.com",
  projectId: "houseiot-4eee8",
  storageBucket: "houseiot-4eee8.appspot.com",
  messagingSenderId: "353838960510",
  appId: "1:353838960510:web:12b50fa332da10b80e2d2f"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

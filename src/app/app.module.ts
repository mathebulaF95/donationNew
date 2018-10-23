import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCmSq5CxDnVrT8pdErsMbNzq7g63PXxkro",
  authDomain: "task-app-b0628.firebaseapp.com",
  databaseURL: "https://task-app-b0628.firebaseio.com",
  projectId: "task-app-b0628",
  storageBucket: "task-app-b0628.appspot.com",
  messagingSenderId: "299430065996"
});

@NgModule({
  declarations: [
    MyApp,
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

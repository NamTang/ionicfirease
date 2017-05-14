import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { MapPage } from '../pages/map/map';
import {AngularFireModule} from 'angularfire2';
import { TabsPage } from "../pages/tabs/tabs";
import { ListPage } from "../pages/list/list";
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { Device } from "@ionic-native/device";
const firebaseConfig = {
    apiKey: "AIzaSyCi-VjhHR_vNmpA0gYCIJ25uDomjFYS-XA",
    authDomain: "zxczxc-c727c.firebaseapp.com",
    databaseURL: "https://zxczxc-c727c.firebaseio.com",
    projectId: "zxczxc-c727c",
    storageBucket: "zxczxc-c727c.appspot.com",
    messagingSenderId: "274529849874"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ResetpasswordPage,
    EditprofilePage,
    MapPage,
    TabsPage,
    ListPage,
  
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ResetpasswordPage,
    EditprofilePage,
    MapPage,
    TabsPage,
    ListPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Camera,
    Device

  ]
})
export class AppModule {}
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { ContactEditPage } from '../pages/contact-edit/contact-edit';
import { HomePage } from '../pages/home/home';
import { Filter} from '../pages/home/filter';
import { AddBike } from '../pages/addBike/addbike';
import { EditBikePage } from '../pages/edit-bike/edit-bike';
import { TabsPage } from '../pages/tabs/tabs';
import {UserService} from '../pages/Services/user.service';
import {BikeService} from '../pages/Services/bike.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
 
import {AngularFireDatabaseModule} from 'angularfire2/database';


export const firebaseconfig={
apiKey: "AIzaSyD-W4I7E6mLs8KMJFyHZXUpQkUJB9rerl0",
    authDomain: "bikeservicerecords.firebaseapp.com",
    databaseURL: "https://bikeservicerecords.firebaseio.com",
    projectId: "bikeservicerecords",
    storageBucket: "",
    messagingSenderId: "945555448792" 
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    AddBike,
    HomePage,
    TabsPage,
    EditBikePage,
    ContactEditPage,
    Filter,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
 //AngularFireAuth,
    AngularFireModule.initializeApp(firebaseconfig),
    IonicStorageModule.forRoot({
        name: '__mydb',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    AddBike,
    HomePage,
    EditBikePage,
    ContactEditPage,
    TabsPage,
    LoginPage
  ],
 
  providers: [
  UserService,
  BikeService,
  AngularFireAuth,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

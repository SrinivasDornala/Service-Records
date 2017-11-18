var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { Filter } from '../pages/home/filter';
import { AddBike } from '../pages/addBike/addbike';
import { EditBikePage } from '../pages/edit-bike/edit-bike';
import { TabsPage } from '../pages/tabs/tabs';
import { UserService } from '../pages/Services/user.service';
import { BikeService } from '../pages/Services/bike.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
export var firebaseconfig = {
    apiKey: "AIzaSyD-W4I7E6mLs8KMJFyHZXUpQkUJB9rerl0",
    authDomain: "bikeservicerecords.firebaseapp.com",
    databaseURL: "https://bikeservicerecords.firebaseio.com",
    projectId: "bikeservicerecords",
    storageBucket: "",
    messagingSenderId: "945555448792"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            AboutPage,
            ContactPage,
            AddBike,
            HomePage,
            TabsPage,
            EditBikePage,
            Filter
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
            TabsPage
        ],
        providers: [
            UserService,
            BikeService,
            AngularFireAuth,
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
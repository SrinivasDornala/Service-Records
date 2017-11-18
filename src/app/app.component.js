var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform, Nav } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//  import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
//import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AddBike } from '../pages/addBike/addbike';
import { TabsPage } from '../pages/tabs/tabs';
var MyApp = (function () {
    // loginForm: ControlGroup;
    function MyApp(platform, statusBar, splashScreen, af, alertCtrl) {
        var _this = this;
        this.af = af;
        this.alertCtrl = alertCtrl;
        this.rootPage = TabsPage;
        this.user = {};
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.ngInit();
        });
        /*this.loginForm = builder.group({
         'username': [
           '', // default value
           Validators.compose([Validators.required, Validators.minLength(5)])
         ],
         'password': [
           '',
           Validators.compose([Validators.required, Validators.minLength(5)])
         ]
       });*/
    }
    MyApp.prototype.ngInit = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Login ',
            inputs: [
                {
                    name: 'Email',
                    placeholder: 'Email',
                    type: 'text'
                },
                {
                    name: 'Password',
                    placeholder: 'Password',
                    type: 'text'
                }
            ],
            buttons: [
                {
                    text: 'Forgot password',
                    //role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        _this.user.email = data.Email;
                        _this.user.password = data.Password;
                        console.log(_this.user);
                        try {
                            var auth = _this.loginWithEmail(_this.user);
                            if (auth) {
                                _this.navCtrl.setRoot(TabsPage);
                            }
                            else {
                                return false;
                            }
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(HomePage);
    };
    MyApp.prototype.goToAddCustomer = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(AddBike);
    };
    MyApp.prototype.goToContacts = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(ContactPage);
    };
    MyApp.prototype.loginWithEmail = function (user) {
        console.log(user);
        try {
            var result = this.af.auth.signInWithEmailAndPassword(user.email, user.password);
            console.log(result);
            if (result) {
                return true;
            }
            else { }
        }
        catch (error) {
            console.log(error);
            return false;
        }
    };
    return MyApp;
}());
__decorate([
    ViewChild(Nav),
    __metadata("design:type", Nav)
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen, AngularFireAuth,
        AlertController])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map
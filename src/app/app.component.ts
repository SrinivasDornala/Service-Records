import { Component,ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform, Nav } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth';
//  import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
//import { AddBike } from '../pages/addBike/addbike';
//import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;  
  rootPage:any = LoginPage;
  user: any ={};

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ,public af:AngularFireAuth
          ,private alertCtrl: AlertController) {
      platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /*ngInit(){
     let alert = this.alertCtrl.create({
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
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Login',
            handler: data => {
              this.user.email =data.Email;
              this.user.password=data.Password;
              console.log(this.user);
              try{
              let auth =this.loginWithEmail(this.user);
              if(auth){
                  this.navCtrl.setRoot(TabsPage);
                }else {
                return false;
                }
            }catch(e){
              console.log(e);
            }
            }
          }
        ]
      });
            alert.present();
  }*/
  /*goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  goToAddCustomer(params){
    if (!params) params = {};
    this.navCtrl.push(AddBike);
  }goToContacts(params){
    if (!params) params = {};
    this.navCtrl.push(ContactPage);
  }
  async logout(){
   try{
      let result =false;
       await  this.af.auth.signOut()
       .then(function() {
           result = true;
        }).catch(function(error) {
            result= false;
        });
       console.log(result);

       if(result){
          this.navCtrl.setRoot(LoginPage);
        }
       
      }catch(error){
        console.log(error);
        this.navCtrl.setRoot(LoginPage);
      }
  }
*/
  
}

import { Component } from '@angular/core';
import { AddBike } from '../addBike/addbike';
import { AngularFireAuth} from 'angularfire2/auth';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform } from 'ionic-angular'
import { NavController } from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ,public navCtrl:NavController
          ,public af:AngularFireAuth,private alertCtrl: AlertController) {
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
  goToHome(params){
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

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AngularFireAuth} from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	public user :any ={};
  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFireAuth,private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }
	async goToHome(){
    //console.log(this.user);
    try{
    	let result =false;
       await  this.af.auth.signInWithEmailAndPassword(this.user.email,this.user.password)
       .then(function(authData) {
       	//console.log(authData);
           result = true;
        }).catch(function(error) {
            result= false;
        });
       //console.log(result);

       if(result){
          this.navCtrl.setRoot(TabsPage,{Result: result});
        }else{
         this.navCtrl.setRoot(LoginPage);	
        }
       
      }catch(error){
       // console.log(error);
        this.navCtrl.setRoot(LoginPage);
      }
   
  }

  passwordReset(){
     let alert = this.alertCtrl.create({
        title: 'Login ',
        inputs: [
          {
            name: 'Email',
            placeholder: 'Email',
            type: 'text'
          },
/*          {
            name: 'Password',
            placeholder: 'Password',
            type: 'text'
          }*/
        ],
        buttons: [
          {
            text: 'Cancel',
            //role: 'cancel',
            handler: data => {
             // console.log('Cancel clicked');
            }
          },
          {
            text: 'Send Mail',
            handler: data => {
            }
          }
        ]
      });
            alert.present();
  }
}

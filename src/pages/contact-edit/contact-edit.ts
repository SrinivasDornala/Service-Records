import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { User } from '../models/user';
import {UserService} from '../Services/user.service';
import {Observable} from 'rxjs/Observable';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ContactPage } from '../contact/contact';
@IonicPage()
@Component({
  selector: 'page-contact-edit',
  templateUrl: 'contact-edit.html',
})
export class ContactEditPage {

public user :any;
public User: any = {};
userItems : Observable<Array<any>>;
 UserForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService:UserService, private formBuilder: FormBuilder) {
  	this.user = navParams.get('User');
  	console.log(this.user.$key);
  	this.userItems =userService.getUsers();
  	 this.UserForm = formBuilder.group({
          BikeNumber: ['', Validators.compose([Validators.minLength(6),Validators.maxLength(6), Validators.pattern('[0-9a-zA-Z]*'), Validators.required])],
          name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
          email: ['',Validators.compose([Validators.maxLength(30),Validators.email,Validators.required,Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')])],
          phone: ['',Validators.compose([Validators.minLength(10),Validators.maxLength(12),Validators.pattern('[0-9]*'),Validators.required])],
          modal: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
         
        });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ContactEditPage');
  }
  addUser(){
  	this.userService.updateUser(this.user.$key,this.User);
  	this.navCtrl.setRoot(ContactPage);
  }
}

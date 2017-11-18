import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserService} from '../Services/user.service';
import {BikeService} from '../Services/bike.service';
import {User} from '../models/user';
import { Items } from '../models/item';
import { AlertController } from 'ionic-angular';
//import {Observable} from 'rxjs/Observable';
//import {FORM_DIRECTIVES, ControlGroup, AbstractControl} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'page-addbike',
  templateUrl: 'addbike.html',
})

export class AddBike {	
    
   // bike : Bike; 
    bike: any = {};
    //items : Observable<Array<Bike>>;  
    date : Date = new Date();
    bikeItems : Items[];
    myDate:Date;
    bikeForm: FormGroup;

    constructor(private navController: NavController, public userService:UserService,public bikeService:BikeService,private alertCtrl: AlertController,public formBuilder:FormBuilder  ) {
        //this.items =bikeService.getbikes();
        this.bikeItems= [];
        this.bikeForm = formBuilder.group({
          BikeNumber: ['', Validators.compose([Validators.minLength(6),Validators.maxLength(6), Validators.pattern('[0-9a-zA-Z]*'), Validators.required])],
          name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
          email: ['',Validators.compose([Validators.maxLength(30),Validators.email,Validators.required,Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')])],
          phone: ['',Validators.compose([Validators.minLength(10),Validators.maxLength(12),Validators.pattern('[0-9]*'),Validators.required])],
          modal: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
          amount: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required]),this.isamount()]
        });
    }
    search(){
       this.navController.pop(AddBike);
    }
    isamount(){
      if(this.bikeItems.length<1) return false;
      return true;
    }

    addItem(){
           let alert = this.alertCtrl.create({
        title: 'Add Item ',
        inputs: [
          {
            name: 'itemName',
            placeholder: 'itemName',
            type: 'text'
          },
          {
            name: 'itemPrice',
            placeholder: 'itemPrice',
            type: 'text'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              //console.log('Cancel clicked');
            }
          },
          {
            text: 'Add',
            handler: data => {
              let itemlist = new Items();
              itemlist.itemName=data.itemName;
              itemlist.itemPrice=data.itemPrice;
              if (this.isValid(itemlist)) {
                 let index = this.containsObject(itemlist,this.bikeItems) 
               //console.log(index);
                 if(index==-1){
                    this.bikeItems.push(itemlist);
                    this.bike.amount = this.totalAmount();
                    //console.log(this.bike.amount);
                    this.bike.items= this.bikeItems;
                   // console.log(this.bike.items);
                }
              } else {
               
                return false;
              }
            }
          }
        ]
      });
            alert.present();
    }

   
   addBike(){
     this.bike.date = Date().toString();
     this.bikeService.addBike(this.bike);
    
     let user: User = new User();
     user.bikeId= this.bike.bikeId;
     user.name= this.bike.name;
     user.modal= this.bike.modal;
     user.phone= this.bike.phone;
     user.email= this.bike.email;
     user.cnt=1;
     this.userService.updateUserCnt(user);
     this.bike ={};
     this.navController.pop(AddBike);
   }

   editItem(item){
        let alert = this.alertCtrl.create({
        title: 'Add Item ',
        inputs: [
          {
            name: 'itemName',
            placeholder: 'itemName',
            type: 'text',
            value: item.itemName
          },
          {
            name: 'itemPrice',
            placeholder: 'itemPrice',
            type: 'text',
            value:item.itemPrice
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
             // console.log('Cancel clicked');
            }
          },
          {
            text: 'Add',
            handler: data => {
              let itemlist = new Items();
              itemlist.itemName=data.itemName;
              itemlist.itemPrice=data.itemPrice;
              if (this.isValid(itemlist)) {
                let index = this.containsObject(itemlist,this.bikeItems); 
                this.bikeItems.splice(index);
                this.bikeItems.push(itemlist);
                 this.bike.amount = this.totalAmount();
                 //console.log(this.bike.amount);
                 //console.log(this.bike.items);
                 this.bike.items= this.bikeItems;
              } else {
               
                return false;
              }
            }
          }
        ]
      });
            alert.present();
   }


    isValid(item):boolean{
      if(item.itemName !=""&& item.itemName !=" " && isNaN(item.itemName) &&item.itemName !=undefined && !isNaN(item.itemPrice)&& item.itemPrice !=undefined){
        //console.log(false);
        return true;
      }
      return false;
    }
    totalAmount():number{
      var amt: number;
      amt=0;
      for (var i = this.bikeItems.length - 1; i >= 0; i--) {
        let price:number;
        price=this.bikeItems[i].itemPrice;
        amt= parseInt(amt.toString()) +parseInt(price.toString());
      }
      return amt;
    }
  containsObject(obj, list) :number{
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].itemName == obj.itemName) {
            return i;
        }
    }
    return -1;
  }
  containsUserObject(obj, list) :number{
    var i;
    //console.log(obj.phone);
    for (i = 0; i < list.length; i++) {
     // console.log(list[i].phone);
        if (list[i].phone == obj.phone) {
            return i;
        }
    }
    return -1;
  }

  delete(item){
    let index = this.containsObject(item,this.bikeItems); 
     this.bike.amount = parseInt(this.bike.amount.toString()) -parseInt(item.itemPrice.toString());
     this.bikeItems.splice(index,1);
  }
}

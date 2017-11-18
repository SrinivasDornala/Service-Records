import { Component } from '@angular/core';
import {NavController,ViewController} from 'ionic-angular';
import {UserService} from '../Services/user.service';
import { AddBike } from '../addBike/addbike';
import { ContactEditPage } from '../contact-edit/contact-edit';
import { User } from '../models/user';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

    originItems :Observable<Array<any>>;
    dupItems :Array<User>;
    userItems : Observable<Array<any>>;
    constructor(private navController: NavController,  public userService:UserService, public viewCrtl:ViewController) {
    	this.dupItems=[];
         this.userItems =userService.getUsers();
          this.userItems.forEach(item => {
            item.map( it=> {
                this.dupItems.push(it)
            });
        });
    }
 
    public add() {
         this.navController.push(AddBike);
    }
 	deleteItem(key){
        //console.log(key);
        this.userService.removeBike(key);
        this.dupItems=[];
        this.userItems.forEach(item => {
            item.map( it=> {
                this.dupItems.push(it)
            });
        });
    }
   

  onInput(searchbar) {
      // Reset items back to all of the items
      this.dupItems=[];
        this.userItems.forEach(item => {
            item.map( it=> {
                this.dupItems.push(it);
            });
        });
      var q = searchbar.srcElement.value;
      if (!q) {
        return;
      }
      this.dupItems = this.dupItems.filter((v) => {
        if((v.name && q) || (v.bikeId && q) ||(v.phone && q)) {
          if ((v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) || (v.bikeId.toLowerCase().indexOf(q.toLowerCase()) > -1)
              || (v.phone.toString().indexOf(q.toLowerCase()) > -1)) {
            return true;
          }
          return false;
        }
      });
         // console.log(q, this.dupItems.length);
    }

     editUser(item){
        this.navController
      .push(ContactEditPage,{
              User : item
            });
     /* .then(() => {
        const index = this.viewCrtl.index;
        this.navController.remove(index);
      });*/
    }
}

import { Component } from '@angular/core';
import { NavController,ViewController,NavParams } from 'ionic-angular';
import {UserService} from '../Services/user.service';
import {BikeService} from '../Services/bike.service';
import {Bike} from '../models/bike';
//import {Bikes} from '../models/Bikes';
//import { Items } from '../models/item';
import { AddBike } from '../addBike/addbike';
import { EditBikePage } from '../edit-bike/edit-bike';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {	
    
    bikes : Array<Bike>; 
    items :Observable<Array<Bike>>;
    dupItems :Array<Bike>;
    result:any;
    //originItems :Observable<Array<Bike>>;
    userItems : Observable<Array<any>>;
    datetoday : string;
    constructor(private navController: NavController, private viewCrtl: ViewController, public navParams: NavParams, public userService:UserService,public bikeService:BikeService ) {
         this.result = navParams.get('Result');
        this.dupItems =[];
        this.items =bikeService.getbikes();
       // console.log(this.items);
        this.userItems =userService.getUsers();
       // this.originItems=this.items;
        this.items.forEach(item => {
            item.map( it=> {
                this.dupItems.push(it)
            });
        });
//console.log(this.dupItems);
        //this.dupItems = this.items;
     /*   this.items.forEach(items => {
           // this.dupItems= data;
           items.map( item=> {
               let Bike:Bikes = new Bikes();
            Bike.bikeId= item.bikeId;
            Bike.name= item.name;
            Bike.modal= item.modal;
            Bike.phone= item.phone;
            Bike.email= item.email;
            //Bike.key= item.$key;
            Bike.email= item.email;

            });
       });*/
       
    }


    newCustomer(){
        //console.log("sdk");
        this.navController.push(AddBike);

    }

    editBike(item){
        this.navController
      .push(EditBikePage,{
              Bike : item
            });
      /*.then(() => {
        //const index = this.viewCrtl.index;
        //this.navController.remove(index);
      });*/
    }

    deleteitem(key){
        //console.log(key);
        this.bikeService.removeBike(key);
        this.items =this.bikeService.getbikes();
        this.dupItems=[];
        this.items.forEach(item => {
            item.map( it=> {
                this.dupItems.push(it)
            });
        });
    }

   containsObject(obj, list) :string{
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].$key == obj.$key) {
            //console.log(obj.$key);
            return obj.$key;
        }
    }
    return "";
  }

    handleDate(bike : Bike){

        let dateString : string = bike.date;
        let days : number = parseInt(dateString.substring(8, 10));
        let months : number = parseInt(dateString.substring(5, 7));
        let years : number = parseInt(dateString.substring(0, 5));
        let goodDate : Date = new Date(years + "/" + months + "/" + days);
        goodDate.setDate(goodDate.getDate() + 2);
        this.datetoday = goodDate.toISOString().substring(0, 10);
    }
    onInput(searchbar) {
      // Reset items back to all of the items
       this.dupItems=[];
        this.items.forEach(item => {
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
              || (v.phone.toLocaleString().indexOf(q.toLowerCase()) > -1))  {
            return true;
          }
          return false;
        }
      });

     // console.log(q, this.dupItems.length);
    }
}

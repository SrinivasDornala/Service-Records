import { Injectable } from '@angular/core';
import  {FirebaseListObservable,AngularFireDatabase} from 'angularfire2/database';
//import {Bike} from '../models/bike';

@Injectable()
export class BikeService {

	bikeObjects: FirebaseListObservable<any>;
 	constructor(public angf:AngularFireDatabase ) {
		this.bikeObjects = angf.list('/UserContact');
 	}

 	getbikes(){
 		return this.bikeObjects;
 	}
    save() {
       
    }

    addBike(Bike) {
      // console.log(Bike.name);
       this.bikeObjects.push(Bike);
      // console.log("hjas");
    }

    itemsObject(Bike): any{
    	let items = Bike.items;
    	let str :string;
    	str="";
    	for (var i =0 ; i <items.length; i++) {
    		str= str+"itemName: "+items[i].itemName+",itemprice: " +items[i].itemPrice+"},{";
    	}
    	str=str.substring(0,str.length-3);
    	//console.log(JSON.stringify(str));
    	return JSON.stringify(str);
    }

    removeBike(index) {
       
            this.bikeObjects.remove(index);
           // console.log( this.bikeObjects);

        this.save();
    }
    updateBike(bike){

    }
}
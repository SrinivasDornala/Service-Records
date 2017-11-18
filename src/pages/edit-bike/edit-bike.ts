import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {BikeService} from '../Services/bike.service';
import {Bike} from '../models/bike';
//import { Items } from '../models/item';

//@author Srinivaas Dornala
@IonicPage()
@Component({
  selector: 'page-edit-bike',
  templateUrl: 'edit-bike.html',
})
export class EditBikePage {

	public bike :Bike;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	  this.bike = navParams.get('Bike');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBikePage');
  }

}

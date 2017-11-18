var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../Services/user.service';
import { BikeService } from '../Services/bike.service';
import { User } from '../models/user';
import { Items } from '../models/item';
import { AlertController } from 'ionic-angular';
//import {FORM_DIRECTIVES, ControlGroup, AbstractControl} from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
var AddBike = AddBike_1 = (function () {
    function AddBike(navController, userService, bikeService, alertCtrl, formBuilder) {
        this.navController = navController;
        this.userService = userService;
        this.bikeService = bikeService;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        // bike : Bike; 
        this.bike = {};
        //items : Observable<Array<Bike>>;  
        this.date = new Date();
        //this.items =bikeService.getbikes();
        this.bikeItems = [];
        this.bikeForm = formBuilder.group({
            BikeNumber: ['', Validators.compose([Validators.maxLength(6), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            email: ['', Validators.compose([Validators.maxLength(30), Validators.email, Validators.required])],
            phone: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[0-9]*'), Validators.required])],
            modal: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            amount: ['', Validators.compose([Validators.maxLength(5), Validators.pattern('[0-9]*'), Validators.required])]
        });
    }
    AddBike.prototype.search = function () {
        this.navController.pop(AddBike_1);
    };
    AddBike.prototype.addItem = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        var itemlist = new Items();
                        itemlist.itemName = data.itemName;
                        itemlist.itemPrice = data.itemPrice;
                        if (_this.isValid(itemlist)) {
                            var index = _this.containsObject(itemlist, _this.bikeItems);
                            console.log(index);
                            if (index == -1) {
                                _this.bikeItems.push(itemlist);
                                _this.bike.amount = _this.totalAmount();
                                console.log(_this.bike.amount);
                                _this.bike.items = _this.bikeItems;
                                console.log(_this.bike.items);
                            }
                        }
                        else {
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    AddBike.prototype.addBike = function () {
        this.bike.date = Date().toString();
        this.bikeService.addBike(this.bike);
        var user = new User();
        user.bikeId = this.bike.bikeId;
        user.name = this.bike.name;
        user.modal = this.bike.modal;
        user.phone = this.bike.phone;
        user.email = this.bike.email;
        user.cnt = 1;
        this.userService.updateUserCnt(user);
        this.bike = {};
        this.navController.pop(AddBike_1);
    };
    AddBike.prototype.editItem = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    value: item.itemPrice
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        var itemlist = new Items();
                        itemlist.itemName = data.itemName;
                        itemlist.itemPrice = data.itemPrice;
                        if (_this.isValid(itemlist)) {
                            var index = _this.containsObject(itemlist, _this.bikeItems);
                            _this.bikeItems.splice(index);
                            _this.bikeItems.push(itemlist);
                            _this.bike.amount = _this.totalAmount();
                            console.log(_this.bike.amount);
                            console.log(_this.bike.items);
                            _this.bike.items = _this.bikeItems;
                        }
                        else {
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    AddBike.prototype.isValid = function (item) {
        if (item.itemName != "" && item.itemName != " " && isNaN(item.itemName) && item.itemName != undefined && !isNaN(item.itemPrice) && item.itemPrice != undefined) {
            console.log(false);
            return true;
        }
        return false;
    };
    AddBike.prototype.totalAmount = function () {
        var amt;
        amt = 0;
        for (var i = this.bikeItems.length - 1; i >= 0; i--) {
            var price = void 0;
            price = this.bikeItems[i].itemPrice;
            amt = parseInt(amt.toString()) + parseInt(price.toString());
        }
        return amt;
    };
    AddBike.prototype.containsObject = function (obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].itemName == obj.itemName) {
                return i;
            }
        }
        return -1;
    };
    AddBike.prototype.containsUserObject = function (obj, list) {
        var i;
        console.log(obj.phone);
        for (i = 0; i < list.length; i++) {
            console.log(list[i].phone);
            if (list[i].phone == obj.phone) {
                return i;
            }
        }
        return -1;
    };
    AddBike.prototype.delete = function (item) {
        var index = this.containsObject(item, this.bikeItems);
        this.bike.amount = parseInt(this.bike.amount.toString()) - parseInt(item.itemPrice.toString());
        this.bikeItems.splice(index, 1);
    };
    return AddBike;
}());
AddBike = AddBike_1 = __decorate([
    Component({
        selector: 'page-addbike',
        templateUrl: 'addbike.html',
    }),
    __metadata("design:paramtypes", [NavController, UserService, BikeService, AlertController, FormBuilder])
], AddBike);
export { AddBike };
var AddBike_1;
//# sourceMappingURL=addbike.js.map
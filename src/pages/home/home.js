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
import { NavController, ViewController } from 'ionic-angular';
import { UserService } from '../Services/user.service';
import { BikeService } from '../Services/bike.service';
import { AddBike } from '../addBike/addbike';
import { EditBikePage } from '../edit-bike/edit-bike';
var HomePage = (function () {
    function HomePage(navController, viewCrtl, userService, bikeService) {
        var _this = this;
        this.navController = navController;
        this.viewCrtl = viewCrtl;
        this.userService = userService;
        this.bikeService = bikeService;
        this.dupItems = [];
        this.items = bikeService.getbikes();
        this.userItems = userService.getUsers();
        this.originItems = this.items;
        //this.dupItems = this.items;
        this.items.subscribe(function (data) {
            _this.dupItems = data;
            _this.dupItems.bikeId = data.bikeId;
            _this.dupItems.name = data.name;
            _this.dupItems.modal = _this.bike.modal;
            _this.dupItems.phone = _this.bike.phone;
            _this.dupItems.email = _this.bike.email;
        });
    }
    HomePage.prototype.newCustomer = function () {
        console.log("sdk");
        this.navController.push(AddBike);
    };
    HomePage.prototype.editBike = function (item) {
        this.navController
            .push(EditBikePage, {
            Bike: item
        });
        /*.then(() => {
          //const index = this.viewCrtl.index;
          //this.navController.remove(index);
        });*/
    };
    HomePage.prototype.deleteitem = function (key) {
        console.log(key);
        this.bikeService.removeBike(key);
        /* this.items.forEach(item => {
         console.log('Item:', item);
      
             if ((item.$key ==key)) {
                 console.log(key);
                   this.items.remove(key);
                   this.bikeService.removeBike(key);
             }
            });*/
    };
    HomePage.prototype.containsObject = function (obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].$key == obj.$key) {
                console.log(obj.$key);
                return obj.$key;
            }
        }
        return "";
    };
    HomePage.prototype.handleDate = function (bike) {
        var dateString = bike.date;
        var days = parseInt(dateString.substring(8, 10));
        var months = parseInt(dateString.substring(5, 7));
        var years = parseInt(dateString.substring(0, 5));
        var goodDate = new Date(years + "/" + months + "/" + days);
        goodDate.setDate(goodDate.getDate() + 2);
        this.datetoday = goodDate.toISOString().substring(0, 10);
    };
    HomePage.prototype.onInput = function (ev) {
        var val = ev.target.value;
        console.log(val);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.dupItems = this.dupItems.filter(function (item) {
                return (item.bikeId.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, ViewController, UserService, BikeService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map
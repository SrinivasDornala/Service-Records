var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
//import {Bike} from '../models/bike';
var BikeService = (function () {
    function BikeService(angf) {
        this.angf = angf;
        this.bikeObjects = angf.list('/UserContact');
    }
    BikeService.prototype.getbikes = function () {
        return this.bikeObjects;
    };
    BikeService.prototype.save = function () {
    };
    BikeService.prototype.addBike = function (Bike) {
        console.log(Bike.name);
        this.bikeObjects.push(Bike);
        console.log("hjas");
    };
    BikeService.prototype.itemsObject = function (Bike) {
        var items = Bike.items;
        var str;
        str = "";
        for (var i = 0; i < items.length; i++) {
            str = str + "itemName: " + items[i].itemName + ",itemprice: " + items[i].itemPrice + "},{";
        }
        str = str.substring(0, str.length - 3);
        console.log(JSON.stringify(str));
        return JSON.stringify(str);
    };
    BikeService.prototype.removeBike = function (index) {
        this.bikeObjects.remove(index);
        console.log(this.bikeObjects);
        this.save();
    };
    BikeService.prototype.updateBike = function (bike) {
    };
    return BikeService;
}());
BikeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFireDatabase])
], BikeService);
export { BikeService };
//# sourceMappingURL=bike.service.js.map
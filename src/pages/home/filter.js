var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var Filter = (function () {
    function Filter() {
    }
    Filter.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return item.name.indexOf(filter.name) !== -1; });
    };
    return Filter;
}());
Filter = __decorate([
    Pipe({
        name: 'filter',
        pure: false
    })
], Filter);
export { Filter };
/* this.items.forEach(item => {
        console.log('Item:', item);
        });*/
//this.bikes=this.items;
//console.log(this.bikes[0].items[0].itemName);
//console.log(this.UserContact.push({bikeId: "123",name: "asdf",email: "sadf@sfd.com,dfs@hgj.com",phone : 9898989898,amount: 300,date : Date(),items:{itemName:"oil",itemprice:280}}));
/* let item1 = new Items();
 item1.itemName="oil";
 item1.itemPrice=280;

 let item2 = new Items();
 item2.itemName="Service Charge";
 item2.itemPrice=20;

 let item = [];
 item.push(item1);
 item.push(item2);

 let bike = new Bike();
 bike.amount=300;
 bike.name="ashd";
 bike.date= Date().toString();
 bike.phone=989895289;
 bike.email="jas@hsdg.com";
 bike.bikeId="TS0033";
 bike.items = item;
 bike.modal = "activa";
 bikeService.addBike(bike);
 console.log(bike);*/
//bikeService.removeBike("-KoWc8F2EKRby_LXxyT-");
//# sourceMappingURL=filter.js.map
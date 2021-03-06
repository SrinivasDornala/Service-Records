import { Pipe, PipeTransform } from '@angular/core';  
import {Bike} from '../models/bike';
  
@Pipe({  
    name: 'filter',  
    pure: false  
})  
  
export class Filter implements PipeTransform {  
    transform(items: any[], filter: Bike): any {  
        if (!items || !filter) {  
            return items;  
        }  
        return items.filter(item => item.name.indexOf(filter.name) !== -1);  
    }  
}


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





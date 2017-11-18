import { Items } from '../models/item';

export class Bike {
  bikeId: string;
  modal:string;
  amount: number;
  name: string;
  email: string;
  date: string;
  phone: number ;
  items : Items[];
}
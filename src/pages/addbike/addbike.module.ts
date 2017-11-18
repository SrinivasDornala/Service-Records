import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBike } from './addbike';

@NgModule({
  declarations: [
    AddBike,
  ],
  imports: [
    IonicPageModule.forChild(AddBike),
  ],
  exports: [
    AddBike
  ]
})
export class AddbikeModule {}

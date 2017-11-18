import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBikePage } from './edit-bike';

@NgModule({
  declarations: [
    EditBikePage,
  ],
  imports: [
    IonicPageModule.forChild(EditBikePage),
  ],
  exports: [
    EditBikePage
  ]
})
export class EditBikePageModule {}

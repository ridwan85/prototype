import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VendorListPage } from './vendor-list';

import { Ionic2RatingModule } from "ionic2-rating";


@NgModule({
  declarations: [
    VendorListPage,
  ],
  imports: [
    IonicPageModule.forChild(VendorListPage),
    Ionic2RatingModule
    
  ],
  exports: [
    VendorListPage
  ]
})
export class VendorListPageModule {}

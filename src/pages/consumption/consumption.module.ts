import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsumptionPage } from './consumption';

@NgModule({
  declarations: [
    ConsumptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsumptionPage),
  ],
  exports: [
    ConsumptionPage
  ]
})
export class ConsumptionPageModule {}

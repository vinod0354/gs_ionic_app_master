import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectiveModalPageRoutingModule } from './objective-modal-routing.module';

import { ObjectiveModalPage } from './objective-modal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectiveModalPageRoutingModule
  ],
  declarations: [ObjectiveModalPage]
})
export class ObjectiveModalPageModule {}

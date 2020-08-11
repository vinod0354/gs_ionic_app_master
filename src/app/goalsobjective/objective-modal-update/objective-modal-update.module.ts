import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectiveModalUpdatePageRoutingModule } from './objective-modal-update-routing.module';

import { ObjectiveModalUpdatePage } from './objective-modal-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectiveModalUpdatePageRoutingModule
  ],
  declarations: [ObjectiveModalUpdatePage]
})
export class ObjectiveModalUpdatePageModule {}

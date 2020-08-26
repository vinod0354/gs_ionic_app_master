import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionDatePageRoutingModule } from './action-date-routing.module';

import { ActionDatePage } from './action-date.page';
import { MbscModule } from '@mobiscroll/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionDatePageRoutingModule,
    MbscModule
  ],
  declarations: [ActionDatePage]
})
export class ActionDatePageModule {}

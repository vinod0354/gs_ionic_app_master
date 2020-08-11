import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionCreationPageRoutingModule } from './action-creation-routing.module';

import { ActionCreationPage } from './action-creation.page';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionCreationPageRoutingModule
  ],
  declarations: [ActionCreationPage],
  providers:[DatePipe]
  
})
export class ActionCreationPageModule {}

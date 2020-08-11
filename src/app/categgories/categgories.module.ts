import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CateggoriesPageRoutingModule } from './categgories-routing.module';

import { CateggoriesPage } from './categgories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CateggoriesPageRoutingModule
  ],
  declarations: [CateggoriesPage]
})
export class CateggoriesPageModule {}

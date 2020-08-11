import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalsFilterPageRoutingModule } from './goals-filter-routing.module';

import { GoalsFilterPage } from './goals-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalsFilterPageRoutingModule
  ],
  declarations: [GoalsFilterPage]
})
export class GoalsFilterPageModule {}

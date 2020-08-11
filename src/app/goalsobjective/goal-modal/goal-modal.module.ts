import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalModalPageRoutingModule } from './goal-modal-routing.module';

import { GoalModalPage } from './goal-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalModalPageRoutingModule
  ],
  declarations: [GoalModalPage]
})
export class GoalModalPageModule {}

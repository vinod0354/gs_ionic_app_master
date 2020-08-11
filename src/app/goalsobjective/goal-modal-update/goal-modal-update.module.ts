import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalModalUpdatePageRoutingModule } from './goal-modal-update-routing.module';

import { GoalModalUpdatePage } from './goal-modal-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalModalUpdatePageRoutingModule
  ],
  declarations: [GoalModalUpdatePage]
})
export class GoalModalUpdatePageModule {}

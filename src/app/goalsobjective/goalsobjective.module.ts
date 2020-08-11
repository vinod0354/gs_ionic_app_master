import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalsobjectivePageRoutingModule } from './goalsobjective-routing.module';

import { GoalsobjectivePage } from './goalsobjective.page';
// import { GoalModalPage } from './goal-modal/goal-modal.page';
import { GoalModalPageModule } from './goal-modal/goal-modal.module';
import { GoalsFilterPageModule } from './goals-filter/goals-filter.module';
import { ObjectiveModalPageModule } from './objective-modal/objective-modal.module';
import { ObjectiveModalUpdatePageModule } from './objective-modal-update/objective-modal-update.module';
import { GoalModalUpdatePageModule } from './goal-modal-update/goal-modal-update.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalsobjectivePageRoutingModule,
    GoalModalPageModule,
    GoalsFilterPageModule,
    ObjectiveModalPageModule,
    GoalModalUpdatePageModule,
    ObjectiveModalUpdatePageModule,
    PipesModule
    ],
  declarations: [GoalsobjectivePage]
})
export class GoalsobjectivePageModule {}

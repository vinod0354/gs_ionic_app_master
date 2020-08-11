import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalModalPage } from './goal-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GoalModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalModalPageRoutingModule {}

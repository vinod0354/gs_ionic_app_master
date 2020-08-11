import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalModalUpdatePage } from './goal-modal-update.page';

const routes: Routes = [
  {
    path: '',
    component: GoalModalUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalModalUpdatePageRoutingModule {}

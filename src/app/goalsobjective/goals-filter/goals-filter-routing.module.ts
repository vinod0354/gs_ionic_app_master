import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalsFilterPage } from './goals-filter.page';

const routes: Routes = [
  {
    path: '',
    component: GoalsFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalsFilterPageRoutingModule {}

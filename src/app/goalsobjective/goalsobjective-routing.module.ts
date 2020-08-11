import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalsobjectivePage } from './goalsobjective.page';

const routes: Routes = [
  {
    path: '',
    component: GoalsobjectivePage
  },
  {
    path: 'goals-filter',
    loadChildren: () => import('./goals-filter/goals-filter.module').then( m => m.GoalsFilterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalsobjectivePageRoutingModule {}

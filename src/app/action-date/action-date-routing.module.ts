import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionDatePage } from './action-date.page';

const routes: Routes = [
  {
    path: '',
    component: ActionDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionDatePageRoutingModule {}

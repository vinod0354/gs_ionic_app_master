import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionCreationPage } from './action-creation.page';

const routes: Routes = [
  {
    path: '',
    component: ActionCreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionCreationPageRoutingModule {}

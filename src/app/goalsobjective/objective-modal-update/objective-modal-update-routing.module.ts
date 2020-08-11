import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectiveModalUpdatePage } from './objective-modal-update.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectiveModalUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectiveModalUpdatePageRoutingModule {}

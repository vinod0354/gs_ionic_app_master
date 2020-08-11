import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CateggoriesPage } from './categgories.page';

const routes: Routes = [
  {
    path: '',
    component: CateggoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CateggoriesPageRoutingModule {}

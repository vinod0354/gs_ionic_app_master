import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidingPrinciplesPage } from './guiding-principles.page';

const routes: Routes = [
  {
    path: '',
    component: GuidingPrinciplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuidingPrinciplesPageRoutingModule {}

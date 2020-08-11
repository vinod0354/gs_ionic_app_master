import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressmonitoringPage } from './progressmonitoring.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressmonitoringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressmonitoringPageRoutingModule {}

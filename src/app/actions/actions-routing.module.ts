import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionsPage } from './actions.page';

const routes: Routes = [
  {
    path: '',
    component: ActionsPage
  }
];

@NgModule({
  imports: [ 
    MbscModule,  
    FormsModule,
RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionsPageRoutingModule {}

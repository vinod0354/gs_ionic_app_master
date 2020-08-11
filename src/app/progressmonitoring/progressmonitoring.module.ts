import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressmonitoringPageRoutingModule } from './progressmonitoring-routing.module';

import { ProgressmonitoringPage } from './progressmonitoring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressmonitoringPageRoutingModule
  ],
  declarations: [ProgressmonitoringPage]
})
export class ProgressmonitoringPageModule {}

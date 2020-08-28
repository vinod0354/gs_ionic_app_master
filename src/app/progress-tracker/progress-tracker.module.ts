import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressTrackerPageRoutingModule } from './progress-tracker-routing.module';

import { ProgressTrackerPage } from './progress-tracker.page';
import { ChartsModule } from 'ng2-charts';
import { SharePageModule } from './share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressTrackerPageRoutingModule,
    ChartsModule,
    SharePageModule
  ],
  declarations: [ProgressTrackerPage]
})
export class ProgressTrackerPageModule {}

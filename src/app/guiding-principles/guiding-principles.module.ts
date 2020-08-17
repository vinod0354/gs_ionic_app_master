import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuidingPrinciplesPageRoutingModule } from './guiding-principles-routing.module';

import { GuidingPrinciplesPage } from './guiding-principles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidingPrinciplesPageRoutingModule
  ],
  declarations: [GuidingPrinciplesPage]
})
export class GuidingPrinciplesPageModule {}

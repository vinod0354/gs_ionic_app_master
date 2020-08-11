import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionsPageRoutingModule } from './actions-routing.module';

import { ActionsPage } from './actions.page';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { ActionCreationPageModule } from '../action-creation/action-creation.module';
import { DatePipe } from '@angular/common';
import { SearchPageModule } from '../search/search.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [ 
    MbscModule,  
    CommonModule,
    FormsModule,
    IonicModule,
    DragDropModule,
    ActionsPageRoutingModule,
    SearchPageModule,
    PipesModule,
    ActionCreationPageModule
  ],
  declarations: [ActionsPage],
  providers:[DatePipe]
})
export class ActionsPageModule {}

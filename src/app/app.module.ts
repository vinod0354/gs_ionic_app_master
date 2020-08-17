import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryModalPageModule } from './categgories/category-modal/category-modal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ApiServicesService } from './services/api-services.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { DatePipe } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { Camera } from '@ionic-native/camera/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ 
    MbscModule,  
    FormsModule,  
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CategoryModalPageModule,
    BrowserAnimationsModule,
    PipesModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiServicesService,
    NativeStorage,
    DatePipe,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoryModalPage } from './category-modal/category-modal.page';
import { ApiServicesService } from '../services/api-services.service';
import { GlobalsService } from '../services/globals.service';



@Component({
  selector: 'app-categgories',
  templateUrl: './categgories.page.html',
  styleUrls: ['./categgories.page.scss'],
})
export class CateggoriesPage implements OnInit {

  categoryInfo:any = [];
  catogery_names_list:any = [];


  constructor( private modalController:ModalController, private apiService:ApiServicesService, private global:GlobalsService ) { }

  ngOnInit() {
    console.log('Category init Method');
    this.getCatagoriesMethod();

  }

  ionViewWillEnter(){
  }

  ionViewDidEnter(){
  }

  ionViewDidLeave(){
  }

  getCatagoriesMethod(){
    this.global.showLoading();
    console.log(this.global.enterprisedId);
    console.log(this.global.userId);
    // this.global.enterprisedId ="1";
    // this.global.userId ="2";
     this.apiService.getCatagories(this.global.enterprisedId,this.global.userId).subscribe((result)=>{
      this.global.hideLoading();
      console.log(result.body);
      this.categoryInfo=result.body;
      this.catogery_names_list = [];
        for(let i=0;i<this.categoryInfo.length;i++){
          this.catogery_names_list.push(this.categoryInfo[i].name);
        }
     },
     (error) =>{
      this.global.hideLoading();
      console.log(error);
     });
  }

  async clickedAction(category){
    console.log(category);
    const modal = await this.modalController.create({
      component: CategoryModalPage,
      cssClass: 'custom-modal',
      componentProps: { 
        passCatagory: category,
        filterList:this.catogery_names_list
      }
      
    });
    modal.onWillDismiss().then(dataReturned => {
      // trigger when about to close the modal
      console.log('Receive:' );
      this.getCatagoriesMethod();
    });
    return await modal.present().then(_ => {
      // triggered when opening the modal
      console.log('Sending:');
    });
  }

}

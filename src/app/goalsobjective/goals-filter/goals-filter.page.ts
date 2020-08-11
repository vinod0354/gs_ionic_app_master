import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalsService } from 'src/app/services/globals.service';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-goals-filter',
  templateUrl: './goals-filter.page.html',
  styleUrls: ['./goals-filter.page.scss'],
})
export class GoalsFilterPage implements OnInit {

  segmentDisabled = true;
  passData1 = '';
  passData2 = '';
  goalTypeInfo = [];
  AllData = [];
  constructor(private modalController: ModalController, private nativeStorage:NativeStorage, private global:GlobalsService, private apiService:ApiServicesService) {

    this.nativeStorage.getItem('getFullList')
    .then(
      data => {
        console.log(data);
        this.AllData = data;
      },
      error => {
        console.error(error)
      }
    );
   }

  ngOnInit() {
    this.global.showLoading();
    console.log(this.global.enterprisedId);
    // this.global.enterprisedId ="1";
     this.apiService.getGoalTypes(this.global.enterprisedId).subscribe((result)=>{
      this.global.hideLoading();
      console.log(result.body);
      if(result.status == 200){
        this.goalTypeInfo = result.body;
        for(var i =0; i<this.goalTypeInfo.length; i++){
          if(this.goalTypeInfo[i].type_name == "Professional"){
            this.global.goal_type_id_profsnal = this.goalTypeInfo[i].goal_type_id;
          }else if(this.goalTypeInfo[i].type_name == "Personal"){
            this.global.goal_type_id_persnal = this.goalTypeInfo[i].goal_type_id;
          }
        }
      }else{
        this.goalTypeInfo = [];
      }
     },
     (error) =>{
      this.global.hideLoading();
      console.log(error);
     });
  }

  segmentChanged1(ev: any) {
    this.segmentDisabled = false;
    this.passData1 = ev.detail.value;
  }

  segmentChanged2(ev: any) {
    this.passData2 = ev.detail.value;
  }

  closemodal(type){
    this.modalController.dismiss();
  }

  applyfilter(type) {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'type':type,
      'pass1' : this.passData1,
      'pass2' : this.passData2,
      'filterData' : this.AllData
    });
  }

}

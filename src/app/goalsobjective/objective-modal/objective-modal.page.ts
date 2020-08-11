import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GlobalsService } from 'src/app/services/globals.service';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-objective-modal',
  templateUrl: './objective-modal.page.html',
  styleUrls: ['./objective-modal.page.scss'],
})
export class ObjectiveModalPage implements OnInit {


  showMoreInfoDetails = false;

  objectiveTitle:any = '';
  objectiveDescription:any = '';
  objectiveTargetDate:any = '';
  objectiveCompletedDate:any = '';



  objectiveTypeInfo:any = [];
  objectiveLevelInfo:any = [];
  categoryInfo:any = [];
  goalInfo:any = [];
  categorySelected:any = '';

  milestones:any=[];


  objectiveBody:any = {
    "objective": "",
    "description": "",
    "goal_id": "",
    "target_date": "",
    "objective_members": this.global.userId,
    "created_user_id": this.global.userId,
    "completed_date": "",
    "remarks": "",
    "milestone_id": 0,
    "enterprise_id": this.global.enterprisedId,
    "scheduled_date": "",
    "objective_type": 0,
    "goal_category_id": "",
    "objective_level_id": 0
  }

  min_date:any;


  toggleDetails() {
    if (this.showMoreInfoDetails) {
        this.showMoreInfoDetails = false;
    } else {
        this.showMoreInfoDetails = true;
    }
  }


  constructor(private modal: ModalController, private datapipe:DatePipe, private apiService:ApiServicesService, private nativeStorage:NativeStorage, private global:GlobalsService) {

    this.min_date = this.datapipe.transform(new Date(), 'yyyy-MM-dd')

    this.getCategorieandGoalsData();
    this.getGoalTypeDeatils();

   }

   getCategorieandGoalsData(){
    this.nativeStorage.getItem('catagoryList')
    .then(data =>{
      console.log(data);
      this.categoryInfo = data;
      for(var i =0; i<data.length; i++){
        if(this.categoryInfo[i].name == "Miscellaneous"){
          this.objectiveBody.goal_category_id = this.categoryInfo[i].category_id;
        }
      }
    },error=>{
      console.log(error);
    });

    this.nativeStorage.getItem('getFullList')
    .then(
      data => {
        console.log(data);
        console.log(data.goalInfo);

        this.goalInfo = data.goalInfo;
      },
      error => {
        console.error(error)
      }
    );

  }

  getGoalTypeDeatils(){
    this.global.showLoading();
    // this.global.enterprisedId = "1";

    console.error(this.global.enterprisedId)

     this.apiService.getGoalTypes(this.global.enterprisedId).subscribe((result)=>{
      // this.global.hideLoading();
      console.log(result.body);
      if(result.status == 200){
        this.objectiveTypeInfo = result.body;
        for(var i =0; i<this.objectiveTypeInfo.length; i++){
          if(this.objectiveTypeInfo[i].type_name == "Professional"){
            // Do Something
          }else if(this.objectiveTypeInfo[i].type_name == "Personal"){
            this.objectiveBody.objective_type = this.objectiveTypeInfo[i].goal_type_id;
            console.log(this.objectiveBody);
          }
        }
        this.getGoalLevels();
      }else{
        this.objectiveTypeInfo = [];
        this.getGoalLevels();
      }
     },
     (error) =>{
      // this.global.hideLoading();
      console.log(error);
      this.getGoalLevels();
     });

  }

  getGoalLevels(){
    // this.global.showLoading();
    // this.global.enterprisedId = "1";
     this.apiService.getGoalLevels(this.global.enterprisedId).subscribe((result)=>{
      // this.global.hideLoading();
      console.log(result.body);
      if(result.status == 200){
        this.objectiveLevelInfo = result.body;
        for(var i =0; i<this.objectiveLevelInfo.length; i++){
          if(this.objectiveLevelInfo[i].level_name == "Individual"){
            console.log(this.objectiveLevelInfo[i].level_id);
            this.objectiveBody.objective_level_id = this.objectiveLevelInfo[i].level_id;
            console.log(this.objectiveBody);
          }else if(this.objectiveTypeInfo[i].level_name == "Team"){
            // console.log(this.goalLevelInfo[i].level_id);
          }else if(this.objectiveTypeInfo[i].level_name == "Enterprise"){
            // console.log(this.goalLevelInfo[i].level_id);
          }
        }
      }else{
        this.objectiveTypeInfo = [];
      }
      this.ToloadMilestones('ts');
     },
     (error) =>{
      // this.global.hideLoading();
      this.ToloadMilestones('ts');
      console.log(error);
     });

  }


  ngOnInit() {
  }

  ToloadMilestones(type){
    console.log("goalId");

    console.log(this.objectiveBody.goal_id);

      this.apiService.getMilestones(this.global.enterprisedId, this.objectiveBody.goal_id).subscribe((result) => {
        this.global.hideLoading();
        if(type == 'html'){
          this.milestones = [];
          this.objectiveBody.milestone_id = "";
        }

        if (result.status == 200) {
          this.milestones = result.body;
          console.log(this.milestones);
        }else{
          console.log("Get Milestone error...");
          this.milestones =[];
        }},(error)=>{
          console.log("Get Milestone error...");
          this.milestones = [];
          this.global.hideLoading();
        });
    }


  onObjectiveTypeChange(event){
    console.log("Objective type changed..");
    console.log(event);
    //console.log(event.target.value);
    this.objectiveBody.objective_type = event;
  }

  closemodal(type){
    console.log(this.categorySelected);

    this.objectiveBody.objective = this.objectiveTitle;
    this.objectiveBody.description = this.objectiveDescription;
    this.objectiveBody.target_date = this.datapipe.transform(this.objectiveTargetDate, 'yyyy-MM-dd hh:mm:ss')
    this.objectiveBody.completed_date = this.datapipe.transform(this.objectiveCompletedDate, 'yyyy-MM-dd hh:mm:ss')

    console.log(this.objectiveBody);

      if(type == "SAVE"){
        if(this.objectiveBody.objective !="" && this.objectiveBody.target_date != null){
          this.global.showLoading();
          this.apiService.createObjective(this.objectiveBody).subscribe((result)=>{
            this.global.hideLoading();
            if(result.status ==200){
              //this.global.presentAlert("","Objective Added successfully","",);
              this.global.presentToast("Objective Added successfully");
              console.log("Objective created successfully");
              this.modal.dismiss({"type":type});
            }else{
              //this.global.presentAlert("","Objective Creation failed","",)
              this.global.presentToast("Objective Creation failed");
              console.log("Objective creation failed");
            }
          },
          (error) =>{
           this.global.hideLoading();
           this.global.presentToast("Objective Creation failed");
           console.log(error);
          });
        }else{
          //this.global.presentToast("Please fill title & target Date fields");
          this.global.presentToast("Please fill title & target Date fields");
        }

      }else{
        this.modal.dismiss();
      }


  }




}

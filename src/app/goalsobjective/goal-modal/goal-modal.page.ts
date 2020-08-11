import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { GlobalsService } from 'src/app/services/globals.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-goal-modal',
  templateUrl: './goal-modal.page.html',
  styleUrls: ['./goal-modal.page.scss'],
})
export class GoalModalPage implements OnInit {

  showMoreInfoDetails = false;


  goalTitle:any = '';
  goalDescription:any = '';
  goalTargetDate:any = '';
  goalCompletedDate:any = '';

  mstxt1:any = '';
  mstargetdate1:any = '';
  mscompleteddate1:any = '';
  mstxt2:any = '';
  mstargetdate2:any = '';
  mscompleteddate2:any = '';

  goalTypeInfo:any = [];
  goalLevelInfo:any = [];
  categoryInfo:any = [];
  categorySelected:any = '';
  // goalTypeSelected:any = 'Personal';
  isPersonal:boolean = true;
  isProfessional:boolean = false;

  goalBody:any = {
    "goal_type_id": "",
    "target_date": "",
    "enterprise_id": this.global.enterprisedId,
    "created_user_id": this.global.userId,
    "modified_user_id": this.global.userId,
    "goal_members": this.global.userId,
    "goal_title": "",
    "description": "",
    "completed_date": "",
    "remarks": "",
    "goal_level_id": "",
    "scheduled_date": "",
    "goal_category_id": ""
  }

  milestonesData = [
    {
    "milestone": '',
    "target_date": '',
    "enterprise_id": this.global.enterprisedId,
    "completion_date": '',
    "goal_id": 0,
    "milestone_number": 0
  }, {
    "milestone": '',
    "target_date": '',
    "enterprise_id": this.global.enterprisedId,
    "completion_date": '',
    "goal_id": 0,
    "milestone_number": 0
  }
 ];

  milestoneBody:any = {

  }

  min_date:any;
  max_date:any;


  constructor(private modal: ModalController,private datapipe:DatePipe, private nativeStorage:NativeStorage, private apiService:ApiServicesService, private global:GlobalsService) {

    this.min_date = this.datapipe.transform(new Date(), 'yyyy-MM-dd')
    // this.max_date = this.datapipe.transform(new Date(), 'yyyy-MM-dd')

    this.getCategoriesData();
    this.getGoalTypeDeatils();
    // this.getGoalLevels();
   }

  ngOnInit() {

  }

  validatemstargetdate1(){
    console.log(this.goalTargetDate);
    if(this.goalTargetDate != ""){
      this.max_date = this.datapipe.transform(this.goalTargetDate, 'yyyy-MM-dd');
    }
  }

  validatemstargetdate2(){
    console.log(this.goalTargetDate);
    if(this.goalTargetDate != ""){
      this.max_date = this.datapipe.transform(this.goalTargetDate, 'yyyy-MM-dd');
      console.log("success2.....")
    }
  }

  getCategoriesData(){

    // this.global.enterprisedId ="1";
    // this.global.userId ="2";
    //  this.apiService.getCatagories(this.global.enterprisedId,this.global.userId).subscribe((result)=>{
    //   if(result.status == 200){
    //     this.categoryInfo = result.body;        
    //   }else{
    //   }
    //  },
    //  (error) =>{
    //   console.log(error);
    //  });

    this.nativeStorage.getItem('catagoryList')
    .then(data =>{
      console.log(data);
      this.categoryInfo = data;
      for(var i =0; i<data.length; i++){
        if(this.categoryInfo[i].name == "Miscellaneous"){
          this.goalBody.goal_category_id = this.categoryInfo[i].category_id;
        }
      }
    },error=>{
      console.log(error);
    });
  }

  getGoalTypeDeatils(){
    this.global.showLoading();
    // this.global.enterprisedId = "1";

     this.apiService.getGoalTypes(this.global.enterprisedId).subscribe((result)=>{
      // this.global.hideLoading();
      console.log(result.body);
      if(result.status == 200){
        this.goalTypeInfo = result.body;
        for(var i =0; i<this.goalTypeInfo.length; i++){
          if(this.goalTypeInfo[i].type_name == "Professional"){
            // Do Something
          }else if(this.goalTypeInfo[i].type_name == "Personal"){
            this.goalBody.goal_type_id = this.goalTypeInfo[i].goal_type_id;
            console.log(this.goalBody);
          }
        }
        this.getGoalLevels();
      }else{
        this.goalTypeInfo = [];
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
     this.apiService.getGoalLevels(this.global.enterprisedId).subscribe((result)=>{
      this.global.hideLoading();
      console.log(result.body);
      if(result.status == 200){
        this.goalLevelInfo = result.body;
        for(var i =0; i<this.goalLevelInfo.length; i++){
          if(this.goalLevelInfo[i].level_name == "Individual"){
            console.log(this.goalLevelInfo[i].level_id);
            this.goalBody.goal_level_id = this.goalLevelInfo[i].level_id;
          }else if(this.goalTypeInfo[i].level_name == "Team"){
          }else if(this.goalTypeInfo[i].level_name == "Enterprise"){
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

  clickPersonal(){
    console.log('clciked personal');
    this.isProfessional = false;
    this.isPersonal = true;
  }

  clickProfessional(){
    console.log('clciked Professional');
    this.isPersonal = false;
    this.isProfessional = true;
  }

  toggleDetails() {
    if (this.showMoreInfoDetails) {
        this.showMoreInfoDetails = false;
    } else {
        this.showMoreInfoDetails = true;
    }
  }

  onGoalTypeChange(event){
    console.log("Goal type changed..");
    console.log(event);
    this.goalBody.goal_type_id = event;
  }

  closemodal(type){
    console.log(this.categorySelected);

    this.goalBody.goal_title = this.goalTitle;
    this.goalBody.description = this.goalDescription;
    this.goalBody.target_date = this.datapipe.transform(this.goalTargetDate, 'yyyy-MM-dd hh:mm:ss');
    this.goalBody.completed_date = this.datapipe.transform(this.goalCompletedDate, 'yyyy-MM-dd hh:mm:ss');

    console.log(this.goalBody);

      if(type == "SAVE"){
        if(this.goalBody.goal_title !="" && this.goalBody.target_date != null){
          this.global.showLoading();
          this.apiService.createGoal(this.goalBody).subscribe((result)=>{
            this.global.hideLoading();
            if(result.status ==200){
              //this.global.presentAlert("","Goal Added successfully","",);
              this.global.presentToast("Goal Added successfully");
              console.log("goal created successfully");
              this.processMilestones(result.body.goal_id,this.global.enterprisedId);
              this.modal.dismiss({
                "type":type
              });
            }else{
              //this.global.presentAlert("","Goal Creation failed","",)
              this.global.presentToast("Goal Creation failed");
              //console.log("goal creation failed");
            }
          },
          (error) =>{
           this.global.hideLoading();
           this.global.presentToast("Goal Creation failed");
           console.log(error);
          });
        }else{
          //this.global.presentToast("Please fill title & target Date fields");
          this.global.presentToast("Please fill title & target Date fields");
        }
      }else{
        this.modal.dismiss({"type":type});
      }

  }

  processMilestones(goalId,enterprisedId){

    this.milestonesData[0].milestone = this.mstxt1;
    this.milestonesData[0].target_date = this.datapipe.transform(this.mstargetdate1, 'yyyy-MM-dd hh:mm:ss');
    this.milestonesData[0].completion_date = this.datapipe.transform(this.mscompleteddate1, 'yyyy-MM-dd hh:mm:ss');

    this.milestonesData[1].milestone = this.mstxt2;
    this.milestonesData[1].target_date = this.datapipe.transform(this.mstargetdate2, 'yyyy-MM-dd hh:mm:ss');
    this.milestonesData[1].completion_date = this.datapipe.transform(this.mscompleteddate2, 'yyyy-MM-dd hh:mm:ss');

    for(var i =0; i< this.milestonesData.length; i++){
      if (this.milestonesData[i].milestone !='' && this.milestonesData[i].target_date != null) {
           console.log("Create Milestone....:",+i);
           this.milestonesData[i].goal_id = goalId;
           this.milestonesData[i].enterprise_id = enterprisedId;

           this.milestonesData[i].milestone_number = i + 1;

           var jsonBody = this.milestonesData[i];

           this.apiService.createMilestones(jsonBody).subscribe((result) => {
             console.log("milestone response");
             console.log(result);
             if (result.status == 200) {
               console.log("Created Milestone " + i + " Sucessfully");
               // this.global.presentAlert("","Milestone Created","");
             }else{
               // this.global.presentAlert("","Milestone Creation Failed","");
             }
           }, (err) => {
             console.log("Milestone creation err");
             console.log(err);
           });
      } else {
          console.log("No milestone date");
      }
    }

  }

}

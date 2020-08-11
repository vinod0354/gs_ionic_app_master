import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController, ToastController } from '@ionic/angular';
import { GlobalsService } from 'src/app/services/globals.service';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-goal-modal-update',
  templateUrl: './goal-modal-update.page.html',
  styleUrls: ['./goal-modal-update.page.scss'],
})
export class GoalModalUpdatePage implements OnInit {

  goalSelected :any;
  showMoreInfoDetails = false;
  goalTypeInfo = [];
  goalLevelInfo = [];
  categoryInfo = [];
  goalId='';
  milestones = [];
  goalUpdateBody:any = {
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

  milestonesData: any= [{
    "milestone": "",
    "target_date": "",
    "enterprise_id": 0,
    "completion_date": "",
    "goal_id": 0,
    "milestone_number": 0
  }, {
    "milestone": "",
    "target_date": "",
    "enterprise_id": 0,
    "completion_date": "",
    "goal_id": 0,
    "milestone_number": 0
  }];

  min_date:any;
  max_date:any;
  constructor(private toastController:ToastController, private alertController:AlertController, private modal:ModalController,private datapipe:DatePipe, private nativeStorage:NativeStorage, private navParams: NavParams, private global:GlobalsService, private apiService:ApiServicesService) {

    this.min_date = this.datapipe.transform(new Date(), 'yyyy-MM-dd')

   }

  ngOnInit() {

    this.goalSelected = this.navParams.get('goalSelected');
    this.goalId = this.goalSelected.goal_id;
    console.log(this.goalSelected);

    // setting empty if updation date is 1900-01-01
    if(this.datapipe.transform(this.goalSelected.completed_date, 'yyyy-MM-dd') == "1900-01-01"){
      this.goalSelected.completed_date = "";
    }
    if(this.datapipe.transform(this.goalSelected.target_date, 'yyyy-MM-dd') == "1900-01-01"){
      this.goalSelected.target_date = "";
    }


    this.getCategoriesData();
    this.getGoalTypeDeatils();

  }

  validatemstargetdate(){
    console.log(this.goalSelected.target_date);
    if(this.goalSelected.target_date != ""){
      this.max_date = this.datapipe.transform(this.goalSelected.target_date, 'yyyy-MM-dd');
    }
  }

  toggleDetails() {
    if (this.showMoreInfoDetails) {
        this.showMoreInfoDetails = false;
    } else {
        this.showMoreInfoDetails = true;
    }
  }

  getCategoriesData(){
    this.nativeStorage.getItem('catagoryList')
    .then(data =>{
      console.log("Selected Goal Category Id:"+this.goalSelected.goal_category_id);
      console.log(data);
      this.categoryInfo = data;
      if(this.goalSelected.goal_category_id !=""){
        // Do Nothing
      }else{
        for(var i=0; i<this.categoryInfo.length; i++){
          if(this.categoryInfo[i].name == "Miscellaneous"){
            console.log("Goal Category Id by default:"+this.goalSelected.goal_category_id);
            this.goalSelected.goal_category_id = this.categoryInfo[i].category_id;
          }
        }
      }
      
     
    },error=>{
      console.log(error);
    });
  }

  getGoalTypeDeatils(){
    this.global.showLoading();
     this.apiService.getGoalTypes(this.global.enterprisedId).subscribe((result)=>{
      console.log(result.body);
      if(result.status == 200){
        this.goalTypeInfo = result.body;
        this.getGoalLevels();
      }else{
        this.goalTypeInfo = [];
        this.getGoalLevels();
      }
     },
     (error) =>{
      console.log(error);
      this.getGoalLevels();

     });

  }

  getGoalLevels(){
     this.apiService.getGoalLevels(this.global.enterprisedId).subscribe((result)=>{
      // this.global.hideLoading();
      console.log(result.body);
      if(result.status == 200){
        for(var i=0; i< result.body.length; i++)
        this.milestones.push(result.body)
      }else{
        this.goalLevelInfo = [];
      }
      this.getmilestones(this.global.enterprisedId,this.goalId)

     },
     (error) =>{
      this.getmilestones(this.global.enterprisedId,this.goalId)
      // this.global.hideLoading();
      console.log(error);
     });

  }

  getmilestones(enterprisedId,goalId){
    this.apiService.getMilestones(enterprisedId, goalId).subscribe((result) => {
      this.global.hideLoading();
      if (result.status == 200) {
        let receivedData = result.body;

        receivedData.sort(function (a, b) {
          return a.milestone_number - b.milestone_number;
        });
        for (let i = 0; i < receivedData.length; i++) {
          if(receivedData[i].completion_date == '1900-01-01T00:00:00.000Z'){
            receivedData[i].completion_date = "";
          }
          if(receivedData[i].target_date == '1900-01-01T00:00:00.000Z'){
            receivedData[i].target_date = "";
          }
          this.milestonesData[i] = receivedData[i];
        }

        console.log(this.milestonesData);
      }else{
        console.log("Get Milestone error...");
        this.milestones =[];
      }},(error)=>{
        console.log("Get Milestone error...");
        this.milestones = [];
        this.global.hideLoading();
      });
  }

  processMilestones(goalID, enterpriseID) {

    for (let i = 0; i < 2; i++) {
      if (this.milestonesData[i].milestone != "" && this.milestonesData[i].target_date != "") {
            console.log("Found milestone data for :",+i);
            this.milestonesData[i].target_date = this.datapipe.transform(this.milestonesData[i].target_date, 'yyyy-MM-dd hh:mm:ss');
            this.milestonesData[i].completion_date = this.datapipe.transform(this.milestonesData[i].completion_date,'yyyy-MM-dd hh:mm:ss');

            console.log(this.milestonesData[i].milestone_number);
            console.log(this.milestonesData[i]);

            this.apiService.updateMilestones(this.milestonesData[i].milestone_number, this.milestonesData[i]).subscribe((result) => {
              console.log(result);
              if (result.status == 200) {
                console.log("Updated Milestone " + i + " Sucessfully");
              }
            }, (err) => {
              console.log("Milestone update err");
              console.log(err);
            });

      } else {
        //Do Nothing
        console.log("No milestone data for :",+i);
      }
    }
  }


  closemodal(type,goalId){
    this.goalUpdateBody.goal_title = this.goalSelected.goal_title;
    this.goalUpdateBody.description = this.goalSelected.description;
    this.goalUpdateBody.target_date = this.datapipe.transform(this.goalSelected.target_date, 'yyyy-MM-dd hh:mm:ss');
    this.goalUpdateBody.completed_date = this.datapipe.transform(this.goalSelected.completed_date, 'yyyy-MM-dd hh:mm:ss');

    this.goalUpdateBody.goal_type_id = this.goalSelected.goal_type_id;
    this.goalUpdateBody.goal_level_id = this.goalSelected.goal_level_id;
    this.goalUpdateBody.goal_category_id = this.goalSelected.goal_category_id;

    console.log(this.goalUpdateBody);
    console.log(this.goalId);

      if(type == "UPDATE"){
        if(this.goalSelected.created_user_id != this.global.userId){
            this.global.presentAlert('','You are not authorized to update this goal.','');
            return;
        }

        if(this.goalUpdateBody.goal_title !="" && this.goalUpdateBody.target_date != null){
          this.global.showLoading();
          this.apiService.updateGoal(this.goalId,this.goalUpdateBody).subscribe((result)=>{
            this.global.hideLoading();
            if(result.status ==200){
              //this.global.presentAlert("","Goal Updated successfully","");
              this.presentToast('Goal Updated successfully');
              console.log("goal updated successfully");
              this.processMilestones(result.body.goal_id,this.global.enterprisedId);
              this.modal.dismiss({
                "type":type
              });
            }else{
              //this.global.presentAlert("","Goal Updation failed","");
              this.presentToast("Goal Updation failed");
              console.log("goal updation failed");
            }
          },
          (error) =>{
           this.global.hideLoading();
           console.log(error);
          });
        }
        else{
          //this.global.presentToast("Please fill title & target Date fields");
          this.presentToast("Please fill title & target Date fields");
        }

      }else if(type == "DELETE"){
         //this.calGoalDeleteAPI(type);
         if(this.goalSelected.created_user_id != this.global.userId){
          this.global.presentAlert('','You are not authorized to delete this goal.','');
          return;
         }
         this.openDeleteConfirmDialog(type);
      }
      else{
        this.modal.dismiss({"type":type});
      }

  }

  async openDeleteConfirmDialog(type) {


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete!',
      message: 'Do you want to delete <strong>Goal</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.calGoalDeleteAPI(type);
          }
        }
      ]
    });

    await alert.present();


}

async presentToast(msg) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}

  calGoalDeleteAPI(type){
    this.apiService.deleteGoal(this.global.enterprisedId,this.goalId).subscribe((result)=>{
      if(result.status ==200){
        //this.global.presentAlert("","Goal Deleted successfully","");
        this.presentToast("Goal Deleted successfully");
        this.modal.dismiss({
          "type":type
        });
      }else{
        //this.global.presentAlert("","Goal Deletion failed","",)
        this.presentToast("Goal Deletion failed");
        console.log("goal Deletion failed");
      }

    },
    (error) =>{
      this.global.hideLoading();
      console.log(error);
    });
  }


}

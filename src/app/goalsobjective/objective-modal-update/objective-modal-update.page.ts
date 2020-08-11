import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController, ToastController  } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-objective-modal-update',
  templateUrl: './objective-modal-update.page.html',
  styleUrls: ['./objective-modal-update.page.scss'],
})
export class ObjectiveModalUpdatePage implements OnInit {


  showMoreInfoDetails = false;


  objectiveSelected :any;
  objectiveTypeInfo = [];
  objectiveLevelInfo = [];
  categoryInfo = [];
  goalInfo = [];
  milestones = [];
  objectiveId = '';
  objectiveUpdateBody:any = {
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
    "objective_type": "",
    "goal_category_id": "",
    "objective_level_id": 0,
    "modified_user_id":this.global.userId
  }

  min_date:any;


  constructor(private toastController:ToastController, private alertController:AlertController, private modal: ModalController,private navParams:NavParams, private datapipe:DatePipe, private apiService:ApiServicesService, private nativeStorage:NativeStorage, private global:GlobalsService) {

    this.min_date = this.datapipe.transform(new Date(), 'yyyy-MM-dd')

    this.objectiveSelected = this.navParams.get('objectiveSelected');
    this.objectiveId = this.objectiveSelected.objective_id;
    console.log(this.objectiveSelected);
    this.objectiveSelected.objective_type = this.objectiveSelected.objective_type.toString();
    console.log(this.objectiveSelected.objective_type);

    // setting empty if updation date is 1900-01-01
    if(this.datapipe.transform(this.objectiveSelected.completed_date, 'yyyy-MM-dd') == "1900-01-01"){
      this.objectiveSelected.completed_date = "";
    }
    if(this.datapipe.transform(this.objectiveSelected.target_date, 'yyyy-MM-dd') == "1900-01-01"){
      this.objectiveSelected.target_date = "";
    }

    this.getCategorieandGoalsData();
    this.getGoalTypeDeatils();
   }

   toggleDetails() {
    if (this.showMoreInfoDetails) {
        this.showMoreInfoDetails = false;
    } else {
        this.showMoreInfoDetails = true;
    }
  }

   getCategorieandGoalsData(){
    this.nativeStorage.getItem('catagoryList')
    .then(data =>{
      console.log(data);
      this.categoryInfo = data;
      if(this.objectiveSelected.goal_category_id !=""){
        // Do Nothing
      }else{
        for(var i=0; i<this.categoryInfo.length; i++){
          if(this.categoryInfo[i].name == "Miscellaneous"){
            console.log("Goal Category Id by default:"+this.objectiveSelected.goal_category_id);
            this.objectiveSelected.goal_category_id = this.categoryInfo[i].category_id;
          }
        }
      }
    },error=>{
      console.log(error);
    });

    this.nativeStorage.getItem('getFullList')
    .then(
      data => {
        console.log(data);
        this.goalInfo = data.goalInfo;
      },
      error => {
        console.error(error)
      }
    );

  }

  getGoalTypeDeatils(){
    this.global.showLoading();
     this.apiService.getGoalTypes(this.global.enterprisedId).subscribe((result)=>{
      console.log(result.body);
      if(result.status == 200){
        this.objectiveTypeInfo = result.body;
        console.log(this.objectiveTypeInfo);
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
     this.apiService.getGoalLevels(this.global.enterprisedId).subscribe((result)=>{
      // this.global.hideLoading();
      console.log(result.body);
      if(result.status == 200){
        this.objectiveLevelInfo = result.body;
      }else{
        this.objectiveTypeInfo = [];
      }
      this.ToloadMilestones('ts');
     },
     (error) =>{
      // this.global.hideLoading();
      this.ToloadMilestones('ts')
      console.log(error);
     });

  }


  ngOnInit() {
  }


  ToloadMilestones(type){
    console.log("goalId");

    console.log(this.objectiveSelected.goal_id);
    console.log(this.objectiveSelected.milestone_id);

      this.apiService.getMilestones(this.global.enterprisedId, this.objectiveSelected.goal_id).subscribe((result) => {
        this.global.hideLoading();
        if(type == 'html'){
          this.milestones = [];
          this.objectiveSelected.milestone_id = "";
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



  closemodal(type){
      this.objectiveUpdateBody.objective = this.objectiveSelected.objective;
      this.objectiveUpdateBody.description = this.objectiveSelected.description;
      this.objectiveUpdateBody.target_date = this.datapipe.transform(this.objectiveSelected.target_date, 'yyyy-MM-dd hh:mm:ss');
      this.objectiveUpdateBody.completed_date = this.datapipe.transform(this.objectiveSelected.completed_date, 'yyyy-MM-dd hh:mm:ss');

      this.objectiveUpdateBody.objective_type = this.objectiveSelected.objective_type;
      this.objectiveUpdateBody.objective_level_id = this.objectiveSelected.objective_level_id;
      this.objectiveUpdateBody.goal_category_id = this.objectiveSelected.goal_category_id;
      this.objectiveUpdateBody.goal_id = this.objectiveSelected.goal_id;
      this.objectiveUpdateBody.milestone_id = this.objectiveSelected.milestone_id;

      console.log(this.objectiveUpdateBody);
      console.log(this.objectiveId);


        if(type == "UPDATE"){
          if(this.objectiveSelected.created_user_id != this.global.userId){
              this.global.presentAlert('','You are not authorized to update this objective.','');
              return;
          }
          if(this.objectiveUpdateBody.objective !="" && this.objectiveUpdateBody.target_date != null){
          this.global.showLoading();
          this.apiService.updateObjective(this.objectiveId,this.objectiveUpdateBody).subscribe((result)=>{
            this.global.hideLoading();
            if(result.status ==200){
              //this.global.presentAlert("","Objective Updated successfully","",)
              this.presentToast('Objective Updated successfully');
              console.log("Objective updated successfully");
              // this.processMilestones(result.body.goal_id,this.global.enterprisedId);
              this.modal.dismiss({
                "type":type
              });
            }else{
              //this.global.presentAlert("","Objective Updation failed","",)
              this.presentToast('Objective Updation failed');
              console.log("Objective updation failed");
            }
          },
          (error) =>{
           this.global.hideLoading();
           console.log(error);
          });
          }else{
            //this.global.presentToast("Please fill title & target Date fields");
            this.presentToast('Please fill title & target Date fields');
          }

        }else if(type == "DELETE"){
          console.log(type);
          //this.calObjectiveDeleteAPI(type);
          if(this.objectiveSelected.created_user_id != this.global.userId){
            this.global.presentAlert('','You are not authorized to delete this objective.','');
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
      message: 'Do you want to delete <strong>Objective</strong>?',
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
            this.calObjectiveDeleteAPI(type);
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


  calObjectiveDeleteAPI(type){
    this.apiService.deleteObjective(this.global.enterprisedId,this.objectiveId).subscribe((result)=>{
      if(result.status ==200){
        //this.global.presentAlert("","Objective Deleted successfully","");
        this.presentToast('Objective Deleted successfully');
        this.modal.dismiss({
          "type":type
        });
      }else{
        //this.global.presentAlert("","Objective Deletion failed","",)
        this.presentToast('Objective Deletion failed');
        console.log("Objective Deletion failed");
      }

    },
    (error) =>{
      this.global.hideLoading();
      console.log(error);
    });
  }


}

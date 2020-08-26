import { Component, OnInit,Input, EventEmitter } from '@angular/core';
import { GlobalsService } from '../services/globals.service';
import { ApiServicesService } from '../services/api-services.service';
import { DatePipe } from '@angular/common';
import { ModalController, AlertController, ToastController } from '@ionic/angular';




@Component({
  selector: 'app-action-creation',
  templateUrl: './action-creation.page.html',
  styleUrls: ['./action-creation.page.scss'],
})
export class ActionCreationPage implements OnInit {

  // Data passed in by componentProps
  
  @Input() modalType;
  @Input() modalData;
  @Input() modalActions;
  @Input() modalCatogeries;
  @Input() modalGoals;
  @Input() modalObjectives;
  @Input() miscellaneousCatogeryID;

  ButtonText:string = 'Save';
  targetMinDate = new Date();
  completedMinDate = new Date();
  scheduledMinDate = new Date();
  allMilestones = [];

  show_expander = true;
  isEditable : boolean = false;
  isEdit = true;

  actions:any = {
    "action": "",
    "objective_id": null,
    "created_user_id":null,
    "scheduled_date": "",
    "completed_date": "",
    "target_date": "",
    "description": "null",
    "remarks": "null",
    "priority_id": null,
    "action_category_id": null,
    "enterprise_id": null,
    "goal_id": null,
    "milestone_id":null
  };
  
  visible = false;
  min_date:any;
  showMoreInfoDetails = false;
  constructor(private toastController:ToastController, private alertController:AlertController, private modal:ModalController, private datapipe:DatePipe,private globals:GlobalsService, private api:ApiServicesService) { 

    // setTimeout(() => {
     
    // }, 2000);

    this.min_date = this.datapipe.transform(new Date(), 'yyyy-MM-dd')
   
  }

  ngOnInit() {
    this.show_expander = true;
    console.log("Received Data : ");
    console.log(this.modalData);
    console.log('Modal Type');
    console.log(this.modalType)
    console.log(this.modalActions);
    console.log(this.modalCatogeries);
    console.log(this.modalGoals);
    console.log(this.modalObjectives);
    console.log(this.miscellaneousCatogeryID);
    
    if(this.modalData.goal_id){
      this.api.getMilestones(this.globals.enterprisedId, this.modalData.goal_id).subscribe((result) => {
        if (result.status == 200) {
          this.allMilestones = result.body;
          console.log(this.allMilestones);
        }else{
          console.log("Get Milestone error...");
        }},(error)=>{
          console.log("Get Milestone error...");
        });
  
    }

    if (this.modalType == 'create') {

      this.modalData = {
        "action": "",
        "objective_id": "",
        "created_user_id":this.globals.userId,
        "scheduled_date": "",
        "completed_date": "",
        "target_date": "",
        "description": "",
        "remarks": "",
        "priority_id": this.modalActions[2].priority_id,
        "action_category_id": "",
        "enterprise_id": this.globals.enterprisedId,
        "goal_id": "",
        "milestone_id":""
      };
      this.actions = {
        "action": "",
        "objective_id": "",
        "created_user_id":this.globals.userId,
        "scheduled_date": "",
        "completed_date": "",
        "target_date": "",
        "description": "",
        "remarks": "",
        "priority_id": this.modalActions[2].priority_id,
        "action_category_id": "",
        "enterprise_id": this.globals.enterprisedId,
        "goal_id": "",
        "milestone_id":""
      };

    } else if(this.modalType == 'sortplus'){

      let category_id:any;
      if(this.modalData.actions.length>0){
        category_id = this.modalData.actions[0].action_category_id;
      } else{
        category_id = this.modalData.category_id;
      }

      this.modalData = {
        "action": "",
        "objective_id": "",
        "scheduled_date": "",
        "completed_date": "",
        "target_date": "",
        "description": "",
        "remarks": "",
        "priority_id": this.modalActions[2].priority_id,
        "action_category_id": this.actions.action_category_id ? this.actions.action_category_id : "",
        "enterprise_id": this.globals.enterprisedId,
        "goal_id": "",
        "milestone_id":""
      };


      this.actions = {
        "action": "",
        "objective_id": "",
        "created_user_id":this.globals.userId,
        "scheduled_date": "",
        "completed_date": "",
        "target_date": "",
        "description": "",
        "remarks": "",
        "priority_id": this.modalActions[2].priority_id,
        "action_category_id": category_id ? category_id : "",
        "enterprise_id": this.globals.enterprisedId,
        "goal_id": "",
        "milestone_id":""
      };

    } else{

      if(this.modalType == 'find'){
        this.show_expander = false;
      }

      console.log((!this.modalData.scheduled_date.includes('1900')));
      console.log(!(this.modalData.completed_date.includes('1900')));
      console.log((!this.modalData.target_date.includes('1900')));
      this.actions = {
        "action": this.modalData.action,
        "objective_id": this.modalData.objective_id ? this.modalData.objective_id : "",
        "created_user_id":this.modalData.created_user_id,
        "scheduled_date": (this.modalData.scheduled_date) && (!this.modalData.scheduled_date.includes('1900')) ? this.modalData.scheduled_date : "",
        "completed_date": this.modalData.completed_date  && (!this.modalData.completed_date.includes('1900') ) ? this.modalData.completed_date : "",
        "target_date": this.modalData.target_date  && (!this.modalData.target_date.includes('1900')) ? this.modalData.target_date : "",
        "description": this.modalData.description,
        "remarks": this.modalData.remarks,
        "priority_id": this.modalData.priority_id,
        "action_category_id": this.modalData.action_category_id ? this.modalData.action_category_id : "",
        "enterprise_id": this.modalData.enterprise_id,
        "goal_id": this.modalData.goal_id ? this.modalData.goal_id  : "",
        "milestone_id":this.modalData.milestone_id ? this.modalData.milestone_id : ""
      };
    }
    console.log("Actions");
    console.log(this.actions);
  }

  async closemodal(data){

    let dummyData = this.actions;
    dummyData['close'] = data;
    console.log();
    await this.modal.dismiss({data:dummyData});


  }

  onEdit(){
    this.isEditable = !this.isEditable;
    this.isEdit = !this.isEdit
  }

  onBlur(event){
    this.isEdit = !this.isEdit
  }
 
    saveActions(){
      let action_id = "null";
    
      console.log(this.actions);
      console.log("Save actions clicked....");
  
      if((this.actions.action_category_id == ""  || this.actions.action_category_id == this.miscellaneousCatogeryID) &&   this.actions.target_date != ""){
        this.presentToast("Please, select Category.");
        return;
    }else{
  
      this.globals.showLoading('Please wait');
          if(this.modalType == 'create'){

           
  
            if(!this.showMoreInfoDetails){
      
              console.log("Miscellaneous....only action short");
              this.actions = {
                "action": this.actions.action ? this.actions.action : "",
                "objective_id": "null",
                "created_user_id":this.globals.userId,
                "scheduled_date": "",
                "completed_date": "",
                "target_date": "",
                "description": "",
                "remarks": "null",
                "priority_id": this.modalActions[2].priority_id ? this.modalActions[2].priority_id :"null",
                "action_category_id": this.miscellaneousCatogeryID ? this.miscellaneousCatogeryID : "null",
                "enterprise_id": this.globals.enterprisedId,
                "goal_id": "null",
                "milestone_id":"null"
              };
      
            } else{
      
              console.log("Miscellaneous....only action full");
              
              this.actions.priority_id = this.actions.priority_id ? this.actions.priority_id : this.modalActions[2].priority_id;
              this.actions.goal_id = this.actions.goal_id ? this.actions.goal_id : "null";
              this.actions.milestone_id = this.actions.milestone_id ? this.actions.milestone_id : "null";
              this.actions.enterprise_id = this.globals.enterprisedId;
              this.actions.scheduled_date = this.actions.scheduled_date ? this.datapipe.transform(this.actions.scheduled_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.scheduled_date  ? new Date(this.actions.scheduled_date).toUTCString() : "null";
              this.actions.completed_date = this.actions.completed_date ? this.datapipe.transform(this.actions.completed_date, 'yyyy-MM-dd hh:mm:ss') : "";   //this.actions.completed_date  ? new Date(this.actions.completed_date).toUTCString() : "null";
              this.actions.target_date = this.actions.target_date ? this.datapipe.transform(this.actions.target_date, 'yyyy-MM-dd hh:mm:ss') : "";  //this.actions.target_date ? new Date(this.actions.target_date).toUTCString() : "null";
              this.actions.objective_id = this.actions.objective_id ? this.actions.objective_id : 'null';
              this.actions.action_category_id = this.actions.action_category_id ? this.actions.action_category_id : (this.miscellaneousCatogeryID ? this.miscellaneousCatogeryID : "null");
              //this.datepipe.transform(this.ObjectiveInfo.scheduledDate, 'yyyy-MM-dd hh:mm:ss hh:mm:ss')
            }
      
           
      
          }
           else if(this.modalType == 'sortplus'){

           
      
            this.actions.priority_id = this.actions.priority_id ? this.actions.priority_id : this.modalActions[2].priority_id;
            this.actions.goal_id = this.actions.goal_id ? this.actions.goal_id : "null";
            this.actions.milestone_id = this.actions.milestone_id ? this.actions.milestone_id : "null";
            this.actions.enterprise_id = this.globals.enterprisedId;
            this.actions.scheduled_date = this.actions.scheduled_date ? this.datapipe.transform(this.actions.scheduled_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.scheduled_date  ? new Date(this.actions.scheduled_date).toUTCString() : "null";
            this.actions.completed_date = this.actions.completed_date ? this.datapipe.transform(this.actions.completed_date, 'yyyy-MM-dd hh:mm:ss') : "";   //this.actions.completed_date  ? new Date(this.actions.completed_date).toUTCString() : "null";
            this.actions.target_date = this.actions.target_date ? this.datapipe.transform(this.actions.target_date, 'yyyy-MM-dd hh:mm:ss') : "";  //this.actions.target_date ? new Date(this.actions.target_date).toUTCString() : "null";
            this.actions.objective_id = this.actions.objective_id ? this.actions.objective_id : 'null';
            this.actions.action_category_id = this.actions.action_category_id ? this.actions.action_category_id : (this.miscellaneousCatogeryID ? this.miscellaneousCatogeryID : "null");
            //this.datepipe.transform(this.ObjectiveInfo.scheduledDate, 'yyyy-MM-dd hh:mm:ss hh:mm:ss')
      
      
           }
           else{
      
      
            console.log('Editing existing action');
            this.actions = {
              "action":this.actions.action ? this.actions.action : "",
              "objective_id": this.actions.objective_id ?  this.actions.objective_id :"null",
              "created_user_id":this.globals.userId,
              "scheduled_date": this.actions.scheduled_date ? this.datapipe.transform(this.actions.scheduled_date, 'yyyy-MM-dd hh:mm:ss') :  "",
              "completed_date": this.actions.completed_date ? this.datapipe.transform(this.actions.completed_date, 'yyyy-MM-dd hh:mm:ss') : "",
              "target_date": this.actions.target_date ? this.datapipe.transform(this.actions.target_date, 'yyyy-MM-dd hh:mm:ss') : "",
              "description": this.actions.description ? this.actions.description: "",
              "remarks": this.actions.remarks ? this.actions.remarks : "null",
              "priority_id": this.actions.priority_id ?this.actions.priority_id :"null",
              "action_category_id": this.actions.action_category_id  ? this.actions.action_category_id : "null",
              "enterprise_id": this.globals.enterprisedId,
              "goal_id": this.actions.goal_id ? this.actions.goal_id : "null",
              "milestone_id" : this.actions.milestone_id ? this.actions.milestone_id : "null"
            };
        } 
      }
   
    console.log(this.actions);

    
    if(this.modalType == 'create' || this.modalType == 'sortplus'){

      if(this.actions.action == ''){
        this.presentAlert();
      }else{
        this.api.createActions(this.actions).subscribe((result)=>{
          console.log('Action creation is successful');
          console.log(result);
          this.globals.hideLoading();
          if(result.status ==200){
            this.presentToast("Action Created Successfully.");
            this.closemodal('');
    
            //this.sweetAlertDisplay("Action created successfully", true);
          }else{
            //this.sweetAlertDisplay("Action Creation failed, Try Again", false);
            this.globals.hideLoading();
            this.presentToast("Action Creation Failed.");
          }
          
    
        },(error)=>{
          console.log('Action creation Failed.');
          console.log(error);
          this.globals.hideLoading();
          this.presentToast("Action Creation Failed.");
         // this.sweetAlertDisplay("Action Creation failed, Try Again", false);
    
        });
      }

    

    } else{

      if(this.actions.action == ''){
        this.presentAlert();
      }else{
        this.api.updateActions( this.actions,this.modalData.action_id).subscribe((result)=>{
          console.log('Action Update is successful');
          console.log(result);
          this.globals.hideLoading();
          if(result.status ==200){
            this.presentToast("Action Updated Successfully.");
            this.closemodal('');
            //this.sweetAlertDisplay("Action Updated successfully", true);
          }else{
            this.globals.hideLoading();
            this.presentToast("Action Updation Failed.");
            //this.sweetAlertDisplay("Action Update failed, Try Again", false);
          }
  
        },(error)=>{
          console.log('Action Updation Failed.');
          this.presentToast('Action Updation Failed.');
          console.log(error);
          this.globals.hideLoading();
          //this.sweetAlertDisplay("Action Update failed, Try Again", false)
        });

    }
  }


  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Action name cannot be empty.',
      buttons: ['OK']
    });

    await alert.present();
  }


  toggleDetails(){
    this.showMoreInfoDetails = !this.showMoreInfoDetails;
  }


  
 async openDeleteConfirmDialog() {

  
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Delete!',
        message: 'Do you want to delete <strong>Action</strong>?',
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
              this.api.deleteActions(this.globals.enterprisedId,this.modalData.action_id).subscribe((result)=>{
                console.log(result);
                if(result.status == 200){
                  console.log(result);
                  this.closemodal('');
                  this.presentToast('Action deleted Successfully');
                  //this.sweetAlertDisplay("Action Deleted successfully", true);
                  
                }else{
                  console.log("Delete Api server error.");
                  //this.sweetAlertDisplay("Action Deleted failed", true);
                }
              },(error)=>{
                console.log(error);
              });
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


  onChangeGoals(event){
    this.allMilestones = [];
    this.actions.milestone_id = '';
    console.log("Select Event triggered");
    this.globals.showLoading();
    console.log(event);
    console.log(event.target.value);
    this.actions.goal_id = event.target.value;
    if(event.target.value){
      this.api.getMilestones(this.globals.enterprisedId, event.target.value).subscribe((result) => {
        if (result.status == 200) {
          this.allMilestones = result.body;
          this.globals.hideLoading();
          console.log(this.allMilestones);
        }else{
          console.log("Get Milestone error...");
          this.allMilestones =[];
          this.globals.hideLoading();
        }},(error)=>{
          console.log("Get Milestone error...");
          this.allMilestones = [];
          this.globals.hideLoading();
        });
  
    }
     
  }

  onChangeMileStones(event){
    // this.actions.goal_id = event.target.value;
    //as of now do nothing.

  }

  onChangeObjectives(event){
    this.actions.objective_id = event.target.value;
    console.log('Objective Changed');
    console.log(this.actions.objective_id);
  }

  onChangePriority(event){
    this.actions.priority_id = event.target.value;
    console.log('Priority Changed.');
    console.log(this.actions.priority_id);
  }

  onChangeCategory(event){
    if(event.target.value == ""){
      this.actions.action_category_id = this.miscellaneousCatogeryID;
    }else{
      this.actions.action_category_id = event.target.value;
    }
    
    console.log('Change category');
    console.log(this.actions.action_category_id);
  }

  editTitle(event){
    console.log(event.target.value);
    this.actions.action = event.target.value;
  }

  editDescription(event){
    console.log(event.target.value);
    this.actions.description = event.target.value;
      }


}

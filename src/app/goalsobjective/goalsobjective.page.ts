import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoalModalPage } from './goal-modal/goal-modal.page';
import { Router, ActivatedRoute } from '@angular/router';
import { GoalsFilterPageModule } from './goals-filter/goals-filter.module';
import { GoalsFilterPage } from './goals-filter/goals-filter.page';
import { ObjectiveModalPage } from './objective-modal/objective-modal.page';
import { GlobalsService } from '../services/globals.service';
import { ApiServicesService } from '../services/api-services.service';
import { concat } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import * as moment from 'moment-timezone';
import { GoalModalUpdatePage } from './goal-modal-update/goal-modal-update.page';
import { ObjectiveModalUpdatePage } from './objective-modal-update/objective-modal-update.page';
import { Platform } from '@ionic/angular';

// import { GlobalsService } from '../globals.service';


@Component({
  selector: 'app-goalsobjective',
  templateUrl: './goalsobjective.page.html',
  styleUrls: ['./goalsobjective.page.scss'],
})
export class GoalsobjectivePage implements OnInit {
    momentjs: any = moment;
    showSearchbar:boolean=false;
    isFound="";

    goalInfo = [];
    objInfo = [];
    dueDateObjInfo = [
      {
        "name" : 'Over Due',
        "color" : "red",
        "dueDateObj":[]
      },
      {
        "name" : 'Today',
        "color" : "#722CA0",
        "dueDateObj":[]
      },
      {
        "name" : 'Tomorrow',
        "color" : "orange",
        "dueDateObj":[]
      },
      {
        "name" : 'Others',
        "color" : "green",
        "dueDateObj":[]
      },
    ];
    completedDateObjInfo = [];
    completedDateGoalInfo = [];
    categoryObjInfo = [];
    categoryObjInfoMain = [];
    doneObjInfo = [];

    filterCategoryObjInfo = [];
    filterDueDateObjInfo = [];

   isCategory = true;
   isDate = false;
   isType = false;
   isDone = false;
   isCategoryEnb = "bold";
   isDueDateEnb = "normal";
   isTypeEnb = "normal";
   isDoneEnb = "normal";
   deviceType = 'android';
  constructor(private activateRoute:ActivatedRoute,private platform:Platform,private nativeStorage:NativeStorage, private global:GlobalsService, private apiService:ApiServicesService, private modalController: ModalController, private route:Router) { 
    this.activateRoute.queryParams.subscribe(params => {
      if (params && params.special) {
        console.log("Received Data : "+ params.special);
        if(params.special == 'goals'){
          this.click_CreateGoal();
        }

        if(params.special == 'objectives'){
          this.click_CreateObj();
        }
    }});


    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
           console.log('android');
           this.deviceType = 'android';
      } else if (this.platform.is('ios')) {
           console.log('ios');
           this.deviceType = 'ios';
      } else {
           //fallback to browser APIs or
           this.deviceType = 'ios';
           console.log('The platform is not supported');
      }
    });

  }

  ngOnInit() {
    this.getAllGoalsandObjectives();
  }

  clickShowSearchbar(){
    this.showSearchbar = true;
  }

  hideSearchbar(item){
    console.log("cancekl")
    this.showSearchbar = false;
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.refreshData();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  refreshData(){
    this.categoryObjInfo = [];
    this.dueDateObjInfo = [
      {
        "name" : 'Over Due',
        "color" : "red",
        "dueDateObj":[]
      },
      {
        "name" : 'Today',
        "color" : "#722CA0",
        "dueDateObj":[]
      },
      {
        "name" : 'Tomorrow',
        "color" : "orange",
        "dueDateObj":[]
      },
      {
        "name" : 'Others',
        "color" : "green",
        "dueDateObj":[]
      },
    ];    
    this.goalInfo = [];
    this.objInfo = [];
    this.completedDateGoalInfo = [];
    this.completedDateObjInfo = [];

    this.getAllGoalsandObjectives();
  }

  getAllGoalsandObjectives(){
    this.global.showLoading();
    // this.global.enterprisedId ="1";
    // this.global.userId ="2";
     this.apiService.getCatagories(this.global.enterprisedId,this.global.userId).subscribe((result)=>{
      if(result.status == 200){
        for(var i=0; i<result.body.length; i++){
          if(result.body[i].name.toLowerCase().indexOf("category") == -1){
            this.categoryObjInfo.push(result.body[i]);
          }
        }
        // this.categoryObjInfo = result.body;
        console.log(this.categoryObjInfo);
        
        this.nativeStorage.setItem('catagoryList', this.categoryObjInfo)
        .then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );

        this.getGoalsData();
      }else{
        this.global.hideLoading();
        this.categoryObjInfo = [];
      }
     },
     (error) =>{
      this.global.hideLoading();
      console.log(error);
     });

  }
  getGoalsData(){
    this.apiService.getGoals(this.global.userId,this.global.enterprisedId).subscribe((result)=>{
      this.global.hideLoading();
      if(result.status ==200){
        this.goalInfo = result.body;
        console.log(this.goalInfo);

        // Push Category wise Data to Array
        for(var i=0; i<this.categoryObjInfo.length; i++){
          this.categoryObjInfo[i]['goalObjInfo'] = [];
          for(var j=0; j<this.goalInfo.length; j++){
            if(this.categoryObjInfo[i].category_id == this.goalInfo[j].goal_category_id){
              if (this.categoryObjInfo[i].hasOwnProperty("goalObjInfo")) {
                
                this.goalInfo[j]['category_Type'] = "G";
                this.goalInfo[j]['action'] = this.goalInfo[j].goal_title;

                var currentDate = new Date(); 
                var targetDate = new Date(this.goalInfo[j].target_date); 
                var completedDate = new Date(this.goalInfo[j].completed_date);
                console.log(completedDate);

                let currentDateTime = this.momentjs(currentDate).format('YYYY-MM-DD');
                let targetDateTime = this.momentjs(targetDate).format('YYYY-MM-DD');
                let completedDateTime = this.momentjs(completedDate).format('YYYY-MM-DD');

                if(currentDateTime > targetDateTime){
                  if(completedDateTime == '1900-01-01'){
                      this.goalInfo[j]['item_Color'] = "red";
                  }else{
                    this.goalInfo[j]['item_Color'] = "grey";
                  }
                }else{
                  this.goalInfo[j]['item_Color'] = "grey";
                }

                //Decide header text
                let displayHeaderDate = new Date(this.goalInfo[j].target_date);
                let displayHeaderString = displayHeaderDate.getFullYear() + "-" + this.addZero(displayHeaderDate.getMonth()+1) + "-" + this.addZero(displayHeaderDate.getDate());
                var getHeaderDate = this.parse_Date(displayHeaderString);
                this.goalInfo[j]['item_HeaderDate'] = getHeaderDate;

                this.categoryObjInfo[i]['goalObjInfo'].push(this.goalInfo[j]);

              }
            }
          }
        }

      // Push Unknown Goals data to Miscellaneous Category
        for(var x=0; x<this.goalInfo.length; x++){
         this.isFound = "false";
         for(var y=0; y<this.categoryObjInfo.length; y++){
           if(this.goalInfo[x].goal_category_id == this.categoryObjInfo[y].category_id){
             console.log("Yes Datttttttttt;")
             this.isFound = "true";
             break;
           }
         }
         
         if(this.isFound == "false"){
          for(var z=0; z<this.categoryObjInfo.length; z++){
            if(this.categoryObjInfo[z].name == "Miscellaneous"){
                  this.goalInfo[x]['category_Type'] = "G";
                  this.goalInfo[x]['action'] = this.goalInfo[x].goal_title;
  
                  var currentDate = new Date(); 
                  var targetDate = new Date(this.goalInfo[x].target_date); 
                  var completedDate = new Date(this.goalInfo[x].completed_date);
  
                  let currentDateTime = this.momentjs(currentDate).format('YYYY-MM-DD');
                  let targetDateTime = this.momentjs(targetDate).format('YYYY-MM-DD');
                  let completedDateTime = this.momentjs(completedDate).format('YYYY-MM-DD');
  
                  if(currentDateTime > targetDateTime){
                    if(completedDateTime == '1900-01-01'){
                        this.goalInfo[x]['item_Color'] = "red";
                    }else{
                      this.goalInfo[x]['item_Color'] = "grey";
                    }
                  }else{
                    this.goalInfo[x]['item_Color'] = "grey";
                  }
  
                  //Decide header text
                  let displayHeaderDate = new Date(this.goalInfo[x].target_date);
                  let displayHeaderString = displayHeaderDate.getFullYear() + "-" + this.addZero(displayHeaderDate.getMonth()+1) + "-" + this.addZero(displayHeaderDate.getDate());
                  var getHeaderDate = this.parse_Date(displayHeaderString);
                  this.goalInfo[x]['item_HeaderDate'] = getHeaderDate;
  
                  this.categoryObjInfo[z]['goalObjInfo'].push(this.goalInfo[x]);
            }
          }
         }
        }

       
        // Push DueDate Data to Array
        for(var i=0; i<this.goalInfo.length; i++){
          var currentDate = new Date();
          var targetDate = new Date(this.goalInfo[i].target_date);
          var completedDate = new Date(this.goalInfo[i].completed_date);

          let currentDateTime = this.momentjs(currentDate).format('YYYY-MM-DD');
          let targetDateTime = this.momentjs(targetDate).format('YYYY-MM-DD');
          let completedDateTime = this.momentjs(completedDate).format('YYYY-MM-DD');

          if(completedDateTime == '1900-01-01'){
            if(currentDateTime > targetDateTime){
              this.dueDateObjInfo[0]['dueDateObj'].push(this.goalInfo[i]);
              console.log("OverDueloop");            
            }else{
                let checkToday = targetDate.getFullYear() + "-" + this.addZero(targetDate.getMonth()+1) + "-" + this.addZero(targetDate.getDate());
                var checkTodayDate = this.parse_Date(checkToday);
                if(checkTodayDate == 'Today'){
                  this.dueDateObjInfo[1]['dueDateObj'].push(this.goalInfo[i]);
                }else if(checkTodayDate == 'Tomorrow'){
                  console.log("Tomorrowloop");
                  this.dueDateObjInfo[2]['dueDateObj'].push(this.goalInfo[i]);
                } else{
                  console.log("ThisWeekloop");
                  this.dueDateObjInfo[3]['dueDateObj'].push(this.goalInfo[i]);
                }
            }
          }

        }

        // Push Completed Data to Array
        for(var i=0; i<this.goalInfo.length; i++){
          var completedDate = new Date(this.goalInfo[i].completed_date);
          let completedDateTime = this.momentjs(completedDate).format('YYYY-MM-DD');
          if(completedDateTime == '1900-01-01'){
            console.log(completedDateTime);
          }else{
            this.completedDateGoalInfo.push(this.goalInfo[i]);
          }

        }

       
        this.getObjectivesData();
      }else{
        this.goalInfo = [];
        for(var i=0; i<this.categoryObjInfo.length; i++){
          this.categoryObjInfo[i]['goalObjInfo'] = [];
        }
        this.getObjectivesData();
      }
     },
     (error) =>{
      this.global.hideLoading();
      this.goalInfo = [];
      for(var i=0; i<this.categoryObjInfo.length; i++){
        this.categoryObjInfo[i]['goalObjInfo'] = [];
      }
      this.getObjectivesData();
      console.log(error);
     });
  }

  
  getObjectivesData(){
    this.apiService.getObjectives(this.global.userId,this.global.enterprisedId).subscribe((result)=>{
      this.global.hideLoading();
      if(result.status ==200){
        this.objInfo = result.body;

        // Push Category wise Data to Array
        for(var i=0; i<this.categoryObjInfo.length; i++){
          // this.categoryObjInfo[i]['goalObjInfo'] = [];
          for(var j=0; j<this.objInfo.length; j++){

            if(this.categoryObjInfo[i].category_id == this.objInfo[j].goal_category_id){
              if (this.categoryObjInfo[i].hasOwnProperty("goalObjInfo")) {
                // set goal type
                this.objInfo[j]['category_Type'] = "O";
                this.objInfo[j]['action'] = this.objInfo[j].objective;

                // Decide color
                var currentDate = new Date(); 
                var targetDate = new Date(this.objInfo[j].target_date); 
                var completedDate = new Date(this.objInfo[j].completed_date);

                let currentDateTime = this.momentjs(currentDate).format('YYYY-MM-DD');
                let targetDateTime = this.momentjs(targetDate).format('YYYY-MM-DD');
                let completedDateTime = this.momentjs(completedDate).format('YYYY-MM-DD');

                if(currentDateTime > targetDateTime){
                  if(completedDateTime == '1900-01-01'){
                    this.objInfo[j]['item_Color'] = "red";
                  }else{
                    this.objInfo[j]['item_Color'] = "grey";
                  }
                }else{
                  this.objInfo[j]['item_Color'] = "grey";
                }

                //Decide header text
                let displayHeaderDate = new Date(this.objInfo[j].target_date);
                let displayHeaderString = displayHeaderDate.getFullYear() + "-" + this.addZero(displayHeaderDate.getMonth()+1) + "-" + this.addZero(displayHeaderDate.getDate());
                var getHeaderDate = this.parse_Date(displayHeaderString);
                this.objInfo[j]['item_HeaderDate'] = getHeaderDate;
               
                this.categoryObjInfo[i]['goalObjInfo'].push(this.objInfo[j]);
              }
            }
          }
        }

        // Push Unknown Objectives data to Miscellaneous Category
        for(var x=0; x<this.objInfo.length; x++){
          this.isFound = "false";
          for(var y=0; y<this.categoryObjInfo.length; y++){
            if(this.objInfo[x].goal_category_id == this.categoryObjInfo[y].category_id){
              console.log("Yes Datttttttttt;")
              this.isFound = "true";
              break;
            }
          }
          
          if(this.isFound == "false"){
           for(var z=0; z<this.categoryObjInfo.length; z++){
             if(this.categoryObjInfo[z].name == "Miscellaneous"){
                   this.objInfo[x]['category_Type'] = "O";
                   this.objInfo[x]['action'] = this.objInfo[x].objective;
   
                   var currentDate = new Date(); 
                   var targetDate = new Date(this.objInfo[x].target_date); 
                   var completedDate = new Date(this.objInfo[x].completed_date);
   
                   let currentDateTime = this.momentjs(currentDate).format('YYYY-MM-DD');
                   let targetDateTime = this.momentjs(targetDate).format('YYYY-MM-DD');
                   let completedDateTime = this.momentjs(completedDate).format('YYYY-MM-DD');
   
                   if(currentDateTime > targetDateTime){
                     if(completedDateTime == '1900-01-01'){
                         this.objInfo[x]['item_Color'] = "red";
                     }else{
                       this.objInfo[x]['item_Color'] = "grey";
                     }
                   }else{
                     this.objInfo[x]['item_Color'] = "grey";
                   }
   
                   //Decide header text
                   let displayHeaderDate = new Date(this.objInfo[x].target_date);
                   let displayHeaderString = displayHeaderDate.getFullYear() + "-" + this.addZero(displayHeaderDate.getMonth()+1) + "-" + this.addZero(displayHeaderDate.getDate());
                   var getHeaderDate = this.parse_Date(displayHeaderString);
                   this.objInfo[x]['item_HeaderDate'] = getHeaderDate;
   
                   this.categoryObjInfo[z]['goalObjInfo'].push(this.objInfo[x]);
             }
           }
          }
        }

        // Push DueDate Data to Array
        for(var i=0; i<this.objInfo.length; i++){
          var currentDate = new Date();
          var targetDate = new Date(this.objInfo[i].target_date);
          var completedDate = new Date(this.objInfo[i].completed_date);

          let currentDateTime = this.momentjs(currentDate).format('YYYY-MM-DD');
          let targetDateTime = this.momentjs(targetDate).format('YYYY-MM-DD');
          let completedDateTime = this.momentjs(completedDate).format('YYYY-MM-DD');

          if(completedDateTime == '1900-01-01'){
            if(currentDateTime > targetDateTime){
              this.dueDateObjInfo[0]['dueDateObj'].push(this.objInfo[i]);
              console.log("OverDueloop");            
            }
            else{
                let checkToday = targetDate.getFullYear() + "-" + this.addZero(targetDate.getMonth()+1) + "-" + this.addZero(targetDate.getDate());
                var checkTodayDate = this.parse_Date(checkToday);
                if(checkTodayDate == 'Today'){
                  console.log("Todayloop");
                  this.dueDateObjInfo[1]['dueDateObj'].push(this.objInfo[i]);
                }else if(checkTodayDate == 'Tomorrow'){
                  console.log("Tomorrowloop");
                  this.dueDateObjInfo[2]['dueDateObj'].push(this.objInfo[i]);
                } else{
                  console.log("ThisWeekloop");
                  this.dueDateObjInfo[3]['dueDateObj'].push(this.objInfo[i]);
                }
            }
          }
        }

        // Push Completed Data to Array
        for(var i=0; i<this.objInfo.length; i++){
          var completedDate = new Date(this.objInfo[i].completed_date);
          let completedDateTime = this.momentjs(completedDate).format('YYYY-MM-DD');
          if(completedDateTime == '1900-01-01'){
            console.log(completedDateTime);
          }else{
            this.completedDateObjInfo.push(this.objInfo[i]);
          }
        }

        console.log(this.categoryObjInfo);
        console.log(this.dueDateObjInfo);
        console.log(this.goalInfo);
        console.log(this.objInfo);
        console.log(this.completedDateGoalInfo);
        console.log(this.completedDateObjInfo);


        this.nativeStorage.setItem('getFullList', {"categoryObjInfo": this.categoryObjInfo, "dueDateObjInfo": this.dueDateObjInfo,
        "goalInfo": this.goalInfo, "objInfo": this.objInfo})
        .then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );

      }else{
        this.objInfo = [];
        for(var i=0; i<this.categoryObjInfo.length; i++){
          if(this.categoryObjInfo[i].hasOwnProperty("goalObjInfo")){
            // Do nothing
          }else{
            this.categoryObjInfo[i]['goalObjInfo'] = [];
          }
        }
        
      }
     },
     (error) =>{
      this.global.hideLoading();
      this.objInfo = [];
      for(var i=0; i<this.categoryObjInfo.length; i++){
        if(this.categoryObjInfo[i].hasOwnProperty("goalObjInfo")){
          // Do nothing
        }else{
          this.categoryObjInfo[i]['goalObjInfo'] = [];
        }
      }
      console.log(error);
     });
  }

  parse_Date(input_string){
    // console.log(input_string);
    let current_date = new Date();
    let today_string = current_date.getFullYear() + "-" + this.addZero(current_date.getMonth()+1) + "-" + this.addZero(current_date.getDate());
    
    let yesterday_date = new Date();
    yesterday_date.setDate(yesterday_date.getDate() - 1);
    let yesterday_string = yesterday_date.getFullYear() + "-" + this.addZero(yesterday_date.getMonth()+1) + "-" + this.addZero(yesterday_date.getDate());
    
    let tomorrow_date = new Date();
    tomorrow_date.setDate(tomorrow_date.getDate() + 1);
    let tomorrow_string = tomorrow_date.getFullYear() + "-" + this.addZero(tomorrow_date.getMonth()+1) + "-" + this.addZero(tomorrow_date.getDate());
    
    // console.log(today_string);
    // console.log(tomorrow_string);
    // console.log(input_string);

    if(input_string == today_string){
      return "Today";
    }else if(input_string == tomorrow_string){
      return "Tomorrow";
    }else{
      return input_string;
    }
  }

  addZero(i){
    if(i<10){
      i = '0' +i;
    }
    return i;
  }


  click_Category(){
    console.log("clicked click_Category");
    this.isCategory = true;
    this.isDate = false;
    this.isType = false;
    this.isDone = false;
    this.isCategoryEnb = "bold";
    this.isDueDateEnb = "normal";
    this.isTypeEnb = "normal";
    this.isDoneEnb = "normal";
  }

  click_Duedate(){
    console.log("clicked click_Duedate");
    this.isDate = true;
    this.isCategory = false;
    this.isType = false;
    this.isDone = false;
    this.isDueDateEnb = "bold";
    this.isCategoryEnb = "normal";
    this.isTypeEnb = "normal";
    this.isDoneEnb = "normal";
  }

  click_Type(){
    console.log("clicked click_Type");
    this.isType = true;
    this.isCategory = false;
    this.isDate = false;
    this.isDone = false;
    this.isTypeEnb = "bold";
    this.isCategoryEnb = "normal";
    this.isDueDateEnb = "normal";
    this.isDoneEnb = "normal";
  }

  click_Done(){
    console.log("clicked click_Done");
    this.isDone = true;
    this.isCategory = false;
    this.isDate = false;
    this.isType = false;
    this.isDoneEnb = "bold";
    this.isCategoryEnb = "normal";
    this.isDueDateEnb = "normal";
    this.isTypeEnb = "normal";
  }

  async click_CreateGoal(){
    const modal = await this.modalController.create({
      component: GoalModalPage,cssClass: 'custom-modal1',componentProps:{
        // 'isMoreExpanded': this.global.isObjExpandble
      }
    });
    modal.onWillDismiss().then(dataReturned => {
      console.log('Receive11:' );
      console.log(dataReturned);
      if (dataReturned !== null) {
        if(dataReturned.data.type == "SAVE"){
          console.log("Refreshing Type:",+dataReturned.data.type);
          this.refreshData();
        }
      }
    });

    return await modal.present().then(_ => {
      console.log('Sending22:');
    });
  }

  async click_CreateObj(){
    console.log("clicked click_CreateObj");

    const modal = await this.modalController.create({
      component: ObjectiveModalPage,cssClass: 'custom-modal1',componentProps:{
        // 'isMoreExpanded': this.global.isObjExpandble
      }
    });
    modal.onWillDismiss().then(dataReturned => {
      console.log('Receive11:' );
      if (dataReturned !== null) {
        if(dataReturned.data.type == "SAVE"){
          console.log("Refreshing Type:",+dataReturned.data.type);
          this.refreshData();
        }
      }
    });
    return await modal.present().then(_ => {
      console.log('Sending22:');
    });

    
  }

  async openModal() {

      const modal = await this.modalController.create({
       component: GoalsFilterPage,cssClass: 'custom-modal',componentProps: {
       }
      });
    
      modal.onDidDismiss().then((dataReturned) => {
       if (dataReturned !== null) {
        console.log("Modal got dismissed !");
        if(dataReturned.data.type == "SAVE"){
          console.log(dataReturned.data.type);
          this.filterData(dataReturned.data.pass1,dataReturned.data.pass2,dataReturned.data.filterData);
        }
      }
      });
      return await modal.present();
  }

  filterData(data1,data2,filterData){
    this.categoryObjInfo = filterData.categoryObjInfo;
    this.dueDateObjInfo = filterData.dueDateObjInfo;
    this.goalInfo = filterData.goalInfo;
    this.objInfo = filterData.objInfo;


    console.log(this.categoryObjInfo);
    console.log(this.global.goal_type_id_persnal);
    console.log(this.global.goal_type_id_profsnal);

    console.log(this.dueDateObjInfo);

      if(data1 =="goal"){
        // console.log(this.goalInfo);
        this.filterGoalData();
        if(data2 == ""){
          console.log("only goal")
          return;
        }

        if(data2 == "professional"){
          console.log("goal,professional")
          this.filterGoalWithProfessionalData();
          return;
        }else if(data2 == "personal"){
          console.log("goal,personal")
          this.filterGoalWithPersonalData();
          return;
        }

      }else if(data1 =="objectives"){
        this.filterObjectiveData();
        if(data2 == ""){
          console.log("only objective")
          return;
        }
        if(data2 == "professional"){
          console.log("objectives,professional")
          this.filterObjectiveWithProfessionalData();
          return;
        }else if(data2 == "personal"){
          console.log("objectives,personal")
          this.filterObjectiveWithPersonalData();
          return;
        }
      }
  }

  filterGoalData(){
    // filter category wise
    for(var i=0; i<this.categoryObjInfo.length; i++){
      this.filterCategoryObjInfo = this.categoryObjInfo[i].goalObjInfo;
      for(var j=0; j<this.filterCategoryObjInfo.length; j++){
        if(this.filterCategoryObjInfo[j].category_Type == "O"){
          console.log("looping----");
          var index = this.filterCategoryObjInfo.indexOf(this.filterCategoryObjInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.filterCategoryObjInfo.splice(index, 1);
              for (var k=0;k<this.filterCategoryObjInfo.length;k++) {
                  if (this.filterCategoryObjInfo.indexOf(this.filterCategoryObjInfo[k]) === -1) {
                    this.filterCategoryObjInfo.push(this.filterCategoryObjInfo[k]);
                  }
              }
          }

        }

      }
    }

    // filter Due Date wise
    console.log(this.dueDateObjInfo);
    for(var i=0; i<this.dueDateObjInfo.length; i++){
      this.filterDueDateObjInfo = this.dueDateObjInfo[i].dueDateObj;
      for(var j=0; j<this.filterDueDateObjInfo.length; j++){
        if(this.filterDueDateObjInfo[j].category_Type == "O"){
          console.log("looping----");
          var index = this.filterDueDateObjInfo.indexOf(this.filterDueDateObjInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.filterDueDateObjInfo.splice(index, 1);
              for (var k=0;k<this.filterDueDateObjInfo.length;k++) {
                  if (this.filterDueDateObjInfo.indexOf(this.filterDueDateObjInfo[k]) === -1) {
                    this.filterDueDateObjInfo.push(this.filterDueDateObjInfo[k]);
                  }
              }
          }

        }

      }
    }

    // filter Type wise
      this.objInfo = [];
    
  }
  
  filterGoalWithProfessionalData(){
    // filter category wise
    for(var i=0; i<this.categoryObjInfo.length; i++){
      this.filterCategoryObjInfo = this.categoryObjInfo[i].goalObjInfo;
      for(var j=0; j<this.filterCategoryObjInfo.length; j++){
        if(this.filterCategoryObjInfo[j].goal_type_id == this.global.goal_type_id_persnal){
          console.log("looping----");
          var index = this.filterCategoryObjInfo.indexOf(this.filterCategoryObjInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.filterCategoryObjInfo.splice(index, 1);
              for (var k=0;k<this.filterCategoryObjInfo.length;k++) {
                  if (this.filterCategoryObjInfo.indexOf(this.filterCategoryObjInfo[k]) === -1) {
                    this.filterCategoryObjInfo.push(this.filterCategoryObjInfo[k]);
                  }
              }
          }

        }

      }
    }

    // filter Due Date wise
    for(var i=0; i<this.dueDateObjInfo.length; i++){
      this.filterDueDateObjInfo = this.dueDateObjInfo[i].dueDateObj;
      for(var j=0; j<this.filterDueDateObjInfo.length; j++){
        if(this.filterDueDateObjInfo[j].goal_type_id == this.global.goal_type_id_persnal){
          console.log("looping----");
          var index = this.filterDueDateObjInfo.indexOf(this.filterDueDateObjInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.filterDueDateObjInfo.splice(index, 1);
              for (var k=0;k<this.filterDueDateObjInfo.length;k++) {
                  if (this.filterDueDateObjInfo.indexOf(this.filterDueDateObjInfo[k]) === -1) {
                    this.filterDueDateObjInfo.push(this.filterDueDateObjInfo[k]);
                  }
              }
          }

        }

      }
    }

    // filter Type wise
    for(var i=0; i<this.goalInfo.length; i++){
        if(this.goalInfo[i].goal_type_id == this.global.goal_type_id_persnal){
          console.log("looping----");
          var index = this.goalInfo.indexOf(this.goalInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.goalInfo.splice(index, 1);
              for (var k=0;k<this.goalInfo.length;k++) {
                  if (this.goalInfo.indexOf(this.goalInfo[k]) === -1) {
                    this.goalInfo.push(this.goalInfo[k]);
                  }
              }
          }

        }
    }
    
  }

  filterGoalWithPersonalData(){
    // filter category wise
    for(var i=0; i<this.categoryObjInfo.length; i++){
      this.filterCategoryObjInfo = this.categoryObjInfo[i].goalObjInfo;
      for(var j=0; j<this.filterCategoryObjInfo.length; j++){
        if(this.filterCategoryObjInfo[j].goal_type_id == this.global.goal_type_id_profsnal){
          console.log("looping----");
          var index = this.filterCategoryObjInfo.indexOf(this.filterCategoryObjInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.filterCategoryObjInfo.splice(index, 1);
              for (var k=0;k<this.filterCategoryObjInfo.length;k++) {
                  if (this.filterCategoryObjInfo.indexOf(this.filterCategoryObjInfo[k]) === -1) {
                    this.filterCategoryObjInfo.push(this.filterCategoryObjInfo[k]);
                  }
              }
          }

        }

      }
    }

    // filter Due Date wise
    for(var i=0; i<this.dueDateObjInfo.length; i++){
      this.filterDueDateObjInfo = this.dueDateObjInfo[i].dueDateObj;
      for(var j=0; j<this.filterDueDateObjInfo.length; j++){
        if(this.filterDueDateObjInfo[j].goal_type_id == this.global.goal_type_id_profsnal){
          console.log("looping----");
          var index = this.filterDueDateObjInfo.indexOf(this.filterDueDateObjInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.filterDueDateObjInfo.splice(index, 1);
              for (var k=0;k<this.filterDueDateObjInfo.length;k++) {
                  if (this.filterDueDateObjInfo.indexOf(this.filterDueDateObjInfo[k]) === -1) {
                    this.filterDueDateObjInfo.push(this.filterDueDateObjInfo[k]);
                  }
              }
          }

        }

      }
    }

    // filter Type wise
    for(var i=0; i<this.goalInfo.length; i++){
      if(this.goalInfo[i].goal_type_id == this.global.goal_type_id_profsnal){
        console.log("looping----");
        var index = this.goalInfo.indexOf(this.goalInfo[j]);
        console.log(index);
        if (index > -1) {
            console.log("Deleting");
            j--;
            this.goalInfo.splice(index, 1);
            for (var k=0;k<this.goalInfo.length;k++) {
                if (this.goalInfo.indexOf(this.goalInfo[k]) === -1) {
                  this.goalInfo.push(this.goalInfo[k]);
                }
            }
        }

      }
    }
  }

  filterObjectiveData(){
    // filter category wise
    for(var i=0; i<this.categoryObjInfo.length; i++){
      this.filterCategoryObjInfo = this.categoryObjInfo[i].goalObjInfo;
      for(var j=0; j<this.filterCategoryObjInfo.length; j++){
        if(this.filterCategoryObjInfo[j].category_Type == "G"){
          console.log("looping----");
          var index = this.filterCategoryObjInfo.indexOf(this.filterCategoryObjInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.filterCategoryObjInfo.splice(index, 1);
              for (var k=0;k<this.filterCategoryObjInfo.length;k++) {
                  if (this.filterCategoryObjInfo.indexOf(this.filterCategoryObjInfo[k]) === -1) {
                    this.filterCategoryObjInfo.push(this.filterCategoryObjInfo[k]);
                  }
              }
          }
  
        }
  
      }
    }

    // filter Due Date wise
    console.log(this.dueDateObjInfo);
    for(var i=0; i<this.dueDateObjInfo.length; i++){
      this.filterDueDateObjInfo = this.dueDateObjInfo[i].dueDateObj;
      for(var j=0; j<this.filterDueDateObjInfo.length; j++){
        if(this.filterDueDateObjInfo[j].category_Type == "G"){
          console.log("looping----");
          var index = this.filterDueDateObjInfo.indexOf(this.filterDueDateObjInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.filterDueDateObjInfo.splice(index, 1);
              for (var k=0;k<this.filterDueDateObjInfo.length;k++) {
                  if (this.filterDueDateObjInfo.indexOf(this.filterDueDateObjInfo[k]) === -1) {
                    this.filterDueDateObjInfo.push(this.filterDueDateObjInfo[k]);
                  }
              }
          }

        }

      }
    }

    // filter Type wise
    this.goalInfo = [];
    
  }

  filterObjectiveWithProfessionalData(){
    // filter category wise
    for(var i=0; i<this.categoryObjInfo.length; i++){
      this.filterCategoryObjInfo = this.categoryObjInfo[i].goalObjInfo;
      for(var j=0; j<this.filterCategoryObjInfo.length; j++){
        if(this.filterCategoryObjInfo[j].objective_type == this.global.goal_type_id_persnal){
          console.log("looping----");
          var index = this.filterCategoryObjInfo.indexOf(this.filterCategoryObjInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.filterCategoryObjInfo.splice(index, 1);
              for (var k=0;k<this.filterCategoryObjInfo.length;k++) {
                  if (this.filterCategoryObjInfo.indexOf(this.filterCategoryObjInfo[k]) === -1) {
                    this.filterCategoryObjInfo.push(this.filterCategoryObjInfo[k]);
                  }
              }
          }

        }

      }
    }

    // filter Due Date wise
    for(var i=0; i<this.dueDateObjInfo.length; i++){
      this.filterDueDateObjInfo = this.dueDateObjInfo[i].dueDateObj;
      for(var j=0; j<this.filterDueDateObjInfo.length; j++){
        if(this.filterDueDateObjInfo[j].objective_type == this.global.goal_type_id_persnal){
          console.log("looping----");
          var index = this.filterDueDateObjInfo.indexOf(this.filterDueDateObjInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.filterDueDateObjInfo.splice(index, 1);
              for (var k=0;k<this.filterDueDateObjInfo.length;k++) {
                  if (this.filterDueDateObjInfo.indexOf(this.filterDueDateObjInfo[k]) === -1) {
                    this.filterDueDateObjInfo.push(this.filterDueDateObjInfo[k]);
                  }
              }
          }

        }

      }
    }

    // filter Type wise
    for(var j=0; j<this.objInfo.length; j++){
        if(this.objInfo[j].objective_type == this.global.goal_type_id_persnal){
          console.log("looping----");
          var index = this.objInfo.indexOf(this.objInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.objInfo.splice(index, 1);
              for (var k=0;k<this.objInfo.length;k++) {
                  if (this.objInfo.indexOf(this.objInfo[k]) === -1) {
                    this.objInfo.push(this.objInfo[k]);
                  }
              }
          }

        }
    }


  }

  filterObjectiveWithPersonalData(){
    // filter category wise
    for(var i=0; i<this.categoryObjInfo.length; i++){
      this.filterCategoryObjInfo = this.categoryObjInfo[i].goalObjInfo;
      for(var j=0; j<this.filterCategoryObjInfo.length; j++){
        if(this.filterCategoryObjInfo[j].objective_type == this.global.goal_type_id_profsnal){
          console.log("looping----");
          var index = this.filterCategoryObjInfo.indexOf(this.filterCategoryObjInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.filterCategoryObjInfo.splice(index, 1);
              for (var k=0;k<this.filterCategoryObjInfo.length;k++) {
                  if (this.filterCategoryObjInfo.indexOf(this.filterCategoryObjInfo[k]) === -1) {
                    this.filterCategoryObjInfo.push(this.filterCategoryObjInfo[k]);
                  }
              }
          }

        }

      }
    }

    // filter Due Date wise
    for(var i=0; i<this.dueDateObjInfo.length; i++){
      this.filterDueDateObjInfo = this.dueDateObjInfo[i].dueDateObj;
      for(var j=0; j<this.filterDueDateObjInfo.length; j++){
        if(this.filterDueDateObjInfo[j].objective_type == this.global.goal_type_id_profsnal){
          console.log("looping----");
          var index = this.filterDueDateObjInfo.indexOf(this.filterDueDateObjInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.filterDueDateObjInfo.splice(index, 1);
              for (var k=0;k<this.filterDueDateObjInfo.length;k++) {
                  if (this.filterDueDateObjInfo.indexOf(this.filterDueDateObjInfo[k]) === -1) {
                    this.filterDueDateObjInfo.push(this.filterDueDateObjInfo[k]);
                  }
              }
          }

        }

      }
    }

    // filter Type wise
    for(var j=0; j<this.objInfo.length; j++){
        if(this.objInfo[j].objective_type == this.global.goal_type_id_profsnal){
          console.log("looping----");
          var index = this.objInfo.indexOf(this.objInfo[j]);
          console.log(index);
          if (index > -1) {
              console.log("Deleting");
              j--;
              this.objInfo.splice(index, 1);
              for (var k=0;k<this.objInfo.length;k++) {
                  if (this.objInfo.indexOf(this.objInfo[k]) === -1) {
                    this.objInfo.push(this.objInfo[k]);
                  }
              }
          }
        }
    }

    //

  }

  /* Update goal & objective */
  click_UpdateCategory(event1,event2){
    console.log(event2);
    console.log(event1);
    if(event2 == "O"){
      this.click_UpdateObjective(event1,event1.objective_id)
    }else if(event2 == "G"){
      this.click_UpdateGoal(event1,event1.goal_id)
    }

  }
  click_UpdatedueDate(event1,event2){
    console.log(event2);
    console.log(event1);
    if(event2 == "O"){
      this.click_UpdateObjective(event1,event1.objective_id)
    }else if(event2 == "G"){
      this.click_UpdateGoal(event1,event1.goal_id)
    }
  }

  async click_UpdateGoal(goal,goalId){
    console.log(goal);
    console.log(goalId);
    console.log(goal.created_user_id);
    // if(goal.created_user_id == this.global.userId){
    //   this.global.presentAlert('','You are not authorized to update or delete this goal.','')
    // }else{
      const modal = await this.modalController.create({
        component: GoalModalUpdatePage,cssClass: 'custom-modal1',componentProps:{
          'goalSelected':goal
        }
      });
      modal.onWillDismiss().then(dataReturned => {
        if (dataReturned !== null) {
          if(dataReturned.data.type == "UPDATE" || dataReturned.data.type == "DELETE"){
            console.log("Refreshing Type:",+dataReturned.data.type);
            this.refreshData();
          }
        }
      });
      return await modal.present().then(_ => {
      });
   // }

  }

  async click_UpdateObjective(objective,objectiveId){
    console.log(objective);
    console.log(objectiveId);
    console.log(objective.created_user_id);

    // if(objective.created_user_id == this.global.userId){
    //   this.global.presentAlert('','You are not authorized to update or delete this objective.','')
    // }else{
      const modal = await this.modalController.create({
        component: ObjectiveModalUpdatePage,cssClass: 'custom-modal1',componentProps:{
          'objectiveSelected':objective
        }
      });
      modal.onWillDismiss().then(dataReturned => {
        console.log('Receive11:' );
        if (dataReturned !== null) {
          if(dataReturned.data.type == "UPDATE" || dataReturned.data.type == "DELETE"){
            console.log("Refreshing Type:",+dataReturned.data.type);
            this.refreshData();
          }
        }
      });
      return await modal.present().then(_ => {
      });
   // }
    

  }



  


 

  

  
}

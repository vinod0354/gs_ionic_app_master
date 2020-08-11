import { Component, OnInit } from '@angular/core';
import { mobiscroll,MbscCalendarOptions } from '@mobiscroll/angular';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { ApiServicesService } from '../services/api-services.service';
import { GlobalsService } from '../services/globals.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

const now = new Date();

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  finalObj = {};
  colorObj = {};
  finalData = [];
  allCatogeries: any[] = [];
  allActions: any[] = [];
  actionsDict: any = {};
  allCatogeriesActions = [];
  modalType: string = 'NEW';
  searchText: string = '';
  ActionPriorities = [];
  AllGoals = [];
  Allobjectives = [];
  miscellaneousCatogeryID = '';
click_previous_index = 0;

quickActionName = '';

  calender_below_overdue = false;
  calender_below_today = true;
  calender_below_thisweek = false;

  dumpActions = [];
  chunkActions = [];
  doActions = [];

  overdueActionList = [];
  todayActionList = [];
  thisWeekActionList = [];
  beyondList = [];
  searchBy: any;
chunkCount = 0;
chunkTotalcount = this.chunkCount.toString().padStart(2, '0');
  catogeryNames:any[] = [];
  catogeryNames_1= ['moviesList'];
  visible = false;
  markedDay: Date;
  markedDays = [];
  markedDays_strings = [];

  allGoals = [];
  allObjectives = [];
  allCategoriesForGoalsAndObjectives = [];


// listviewOptions: MbscListviewOptions = {
//     theme: 'material',
//     themeVariant: 'light',
//     swipe: false
// };

constructor(private nativeStorage:NativeStorage, private datapipe:DatePipe, private modalController: ModalController, private api:ApiServicesService, private globals:GlobalsService) {

  //this.countChunks();

  this.getAllGoalsAndObjectives();

 }

ngOnInit() {
  //this.getCategoriesforActions();
}


/* Get Goals */
getAllGoalsAndObjectives(){
    this.globals.showLoading();
    this.api.getCatagories(this.globals.enterprisedId, this.globals.userId).subscribe(
        (categoriesResult) => {
           if(categoriesResult.status == 200){
               this.allCategoriesForGoalsAndObjectives = categoriesResult.body;

               //this.allCatogeriesActions = this.allCategoriesForGoalsAndObjectives;
               for (let i = 0; i < this.allCategoriesForGoalsAndObjectives.length; i++) {
                   if (this.allCategoriesForGoalsAndObjectives[i].name == 'Miscellaneous') {
                       this.miscellaneousCatogeryID = this.allCategoriesForGoalsAndObjectives[i].category_id;
                   }
               }


               this.api.getGoals(this.globals.userId,this.globals.enterprisedId).subscribe((result)=>{
                //this.globals.hideLoading();
                if(result.status == 200){
                    this.allGoals = result.body;
                }else{
                    this.allGoals = [];
                }

                this.api.getObjectives(this.globals.userId,this.globals.enterprisedId).subscribe((objectiveResult)=>{
                        this.globals.hideLoading();
                        if(objectiveResult.status == 200){
                            this.allObjectives = objectiveResult.body;
                        }else{
                            this.allObjectives = [];
                        }
                        console.log('All Categories');
                        console.log(this.allCategoriesForGoalsAndObjectives);
                        console.log('All Goals');
                        console.log(this.allGoals);
                        console.log('All Objectives');
                        console.log(this.allObjectives);
                        this.processData_1();
                    });
                });
           }
        }
    );
}

processData_1(){

    this.finalObj = {};
    this.colorObj = {};
    for(let i=0; i<this.allCategoriesForGoalsAndObjectives.length;i++){
        this.finalObj[this.allCategoriesForGoalsAndObjectives[i].category_id] = this.allCategoriesForGoalsAndObjectives[i].name;
        this.colorObj[this.allCategoriesForGoalsAndObjectives[i].category_id] = this.allCategoriesForGoalsAndObjectives[i].color;
        if(i == this.allCategoriesForGoalsAndObjectives.length -1){
            console.log("@@@@@@@@");
            console.log(this.finalObj);
            this.processData_2();
        }
    }

}

processData_2(){
    this.finalData = [];
    for(let i=0;i<this.allGoals.length;i++){
      let obj1 = this.allGoals[i];
      console.log(this.allGoals[i].goal_category_id);
      console.log(this.finalObj[this.allGoals[i].goal_category_id]);
      obj1['name'] = this.finalObj[this.allGoals[i].goal_category_id] ? this.finalObj[this.allGoals[i].goal_category_id] : this.miscellaneousCatogeryID;
      obj1['title'] = this.allGoals[i].goal_title? this.allGoals[i].goal_title : '-';
      obj1['type'] = 'G';
      obj1['color'] = this.colorObj[this.allGoals[i].goal_category_id] ? this.colorObj[this.allGoals[i].goal_category_id] : '#ffffff';
      this.finalData.push(obj1);
      if(i == this.allGoals.length-1){
        console.log('*********');
        console.log(obj1);
        console.log(this.finalData);
        for(let j=0; j<this.allObjectives.length;j++){
            let obj2 = this.allObjectives[j];
            console.log(this.allObjectives[j].goal_category_id);
      console.log(this.finalObj[this.allObjectives[j].goal_category_id]);
            obj2['name'] = this.finalObj[this.allObjectives[j].goal_category_id] ? this.finalObj[this.allObjectives[j].goal_category_id] : '-';
            obj2['title'] = this.allObjectives[j].objective? this.allObjectives[j].objective : '-';
            obj2['type'] = 'O';
            obj2['color'] = this.colorObj[this.allObjectives[j].goal_category_id] ? this.colorObj[this.allObjectives[j].goal_category_id] : '-';
            this.finalData.push(obj2);;
            if(j == this.allObjectives.length-1){
                console.log("############");
                console.log(obj2);
                console.log(this.finalData);
                this.processCalenderGoalsObjs(new Date());
            }
        }
      }
    }

}


  //Get All Categories
  getCategoriesforActions() {
      this.catogeryNames = [];
      this.catogeryNames_1= ['moviesList'];
      this.allCatogeriesActions = [];
      this.allCatogeries = [];
  this.globals.showLoading('Please wait');
  console.log(this.globals.enterprisedId);
  console.log(this.globals.userId);
      this.api.getCatagories(this.globals.enterprisedId, this.globals.userId).subscribe(
          (result) => {
              console.log(result.body);
              if (result.status == 200) {
                  console.log("******************** Catogeries*************");
                  console.log(result.body);
                  for(let i=0;i<result.body.length;i++){
                      if(result.body[i].name.toLowerCase().indexOf("category") == -1){
                          this.allCatogeries.push(result.body[i]);
                      }
                      if(i == result.body.length-1){
                          this.allCatogeriesActions = this.allCatogeries;
                          for (let i = 0; i < this.allCatogeries.length; i++) {
                              if (this.allCatogeries[i].name == 'Miscellaneous') {
                                  this.miscellaneousCatogeryID = this.allCatogeries[i].category_id;
                              }
                          }
                          this.getActionsUsingCategoryIDs();
                      }
                  }
                  // this.allCatogeries = result.body;
                  // this.allCatogeriesActions = result.body;

              } else if (result.status == 204) {
                    this.globals.hideLoading();
              } else {
                  this.globals.hideLoading();
              }
          },
          (err) => {
              this.globals.hideLoading();
          }
      );
  }

  //Get All Actions based on categories.
  async getActionsUsingCategoryIDs() {
      let apiCallingCount = 0;
      for (let i = 0; i < this.allCatogeries.length; i++) {
          this.api
              .getActions(
                  this.globals.enterprisedId,
                  this.globals.userId,
                  this.allCatogeries[i].category_id
              )
              .subscribe(
                  (result) => {
                      apiCallingCount++;
                      if (result.status == 200) {
                          console.log('Actions for each category');
                          console.log('i Value : ' + i);
                          console.log(result.body);
                          this.allCatogeriesActions[i]['actions'] = result.body;
                      } else if (result.status == 204) {
                          // this.allActions.push([]);
                          this.allCatogeriesActions[i]['actions'] = [];
                      } else {
                          // this.allActions.push([]);
                          this.allCatogeriesActions[i]['actions'] = [];
                      }
                      this.countChunks();

                      if (apiCallingCount == this.allCatogeries.length) {
                          console.log('Final call can be Done here.');
                          console.log('All Categories.');
                          console.log(this.allCatogeries);
                          console.log('All Categories with actions.');
                          console.log(this.allCatogeriesActions);
                          this.processData();
                      }
                  },
                  (err) => {
                      apiCallingCount++;
                  }
              );
      }
  }

  countChunks() {
      console.log('Chunks count is called.... ');
      this.chunkCount = 0;

      if(this.chunkActions.length == 0){
          this.chunkCount = 0;
          this.chunkTotalcount = this.chunkCount.toString().padStart(2, '0');
          console.log(this.chunkCount);
      }
      for (let i = 0; i < this.chunkActions.length; i++) {
          this.chunkCount = this.chunkCount + this.chunkActions[i].actions.length;
          if (i == this.chunkActions.length - 1) {
      console.log('Chunk count....');
      this.chunkTotalcount = this.chunkCount.toString().padStart(2, '0');
              console.log(this.chunkCount);
          }
      }
  }

  refreshPageData() {
      /* Page refresh method will be called here */
      console.log("Refresh Actions Page");
      this.getCategoriesforActions();
  }



  openActionsModal(type, input) {

      // this.modalRef = this.modalService.show(
      // 	ActionsCreateComponent,
      // 	Object.assign({ initialState }, { class: 'gray modal-lg' })
      // );

      // this.modalRef.content.eventT.subscribe((data) => {
      // 	console.log("Child component's event was triggered", data);
      // 	if (data == 'true') {
      // 		/* Actions loading method should be called here */
  //     console.log('Actions create page loaded....');
  //     this.getCategoriesforActions();
      // 	}
      // });
  }

  openDeleteConfirmDialog(action) {

  this.api.deleteActions(this.globals.enterprisedId,action.action_id).subscribe((result)=>{
    console.log(result);
    if(result.status == 200){
      console.log(result);
     // this.sweetAlertDisplay("Action Deleted successfully", true);
      this.getCategoriesforActions();
    }else{
      console.log("Delete Api server error.");
      //this.sweetAlertDisplay("Action Deleted failed", true);
    }
  },(error)=>{
    console.log(error);
  });
}

getDetailsofClick(data) {
  console.log(data);
  this.processCalenderGoalsObjs(data.valueText);
  console.log(new Date(data.valueText));
}

// a and b are javascript Date objects
dateDiffInDays(a, b) {
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
// Discard the time and time-zone information.
const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

  clickheader(data) {
      this.chunkActions[data].visible = !this.chunkActions[data].visible;
      // console.log('Header clicked');
      // console.log(data);

      // if(data != this.click_previous_index){
      //   this.chunkActions[data].visible = true;
      //   this.chunkActions[this.click_previous_index].visible = false;
      // }else{
      //   this.chunkActions[data].visible = !this.chunkActions[data].visible ;
      // }
      // this.click_previous_index = data;
  }


  // Data for processing Display Actions into dump, chunk & do .
  processData() {
      console.log("Data process Started....");
      this.chunkActions = [];
      this.dumpActions = [];
      this.doActions = [];
      for (let i = 0; i < this.allCatogeriesActions.length; i++) {
          for (let j = 0; j < this.allCatogeriesActions[i].actions.length; j++) {
              this.allActions.push(this.allCatogeriesActions[i].actions[j]);
          }
          if (this.allCatogeriesActions[i].name == 'Miscellaneous') {
              this.dumpActions = this.allCatogeriesActions[i].actions;
          } else {
              this.catogeryNames.push(this.allCatogeriesActions[i].name);
              this.catogeryNames_1.push(this.allCatogeriesActions[i].name);
              this.allCatogeriesActions[i]['visible'] = false;
      let chunkactionfilter = [];
      if(this.allCatogeriesActions[i].actions.length == 0){
        this.chunkActions.push(this.allCatogeriesActions[i]);
      }
              for (let h = 0; h < this.allCatogeriesActions[i].actions.length; h++) {
        // console.log(this.allCatogeriesActions[i].actions[h]['target_date']);
        // console.log('*************************');
        // console.log(this.allCatogeriesActions[i].actions[h]['target_date'].indexOf('1900'));

                  if (
                      this.allCatogeriesActions[i].actions[h]['target_date'] == null ||
          this.allCatogeriesActions[i].actions[h]['target_date'] == '' ||
          this.allCatogeriesActions[i].actions[h]['target_date'].indexOf('1900') != -1
                  ) {
                      chunkactionfilter.push(this.allCatogeriesActions[i].actions[h]);
                  } else {
                      let assignitem = this.allCatogeriesActions[i].actions[h];
                      assignitem['color'] = this.allCatogeriesActions[i].color;
                      assignitem['name'] = this.allCatogeriesActions[i].name;
                      this.doActions.push(assignitem);
                  }

                  if (h == this.allCatogeriesActions[i].actions.length - 1) {
                      this.countChunks();
                      let dummy = this.allCatogeriesActions[i];
                      dummy['actions'] = chunkactionfilter;
                      this.chunkActions.push(dummy);
                  }
              }
          }

          if (i == this.allCatogeriesActions.length - 1) {
              if(this.chunkActions.length > 0){
                this.chunkActions[0]['visible'] = true;
              }

              this.globals.hideLoading();
              this.countChunks();
              console.log('Dump Actions');
              console.log(this.dumpActions);
              console.log('Chunk Actions');
              console.log(this.chunkActions);
              console.log('DO Actions');
              console.log(this.doActions);
              console.log("Chunk count");
              console.log(this.chunkCount);
              console.log('Catogery Names');
              console.log(this.catogeryNames);
              console.log(this.catogeryNames_1);
              this.processCalenderEvents(new Date());
              this.getCreatePageDropdownData();
          }
      }
  }
  // { d: new Date(now.getFullYear(), now.getMonth(), 2), color: '#46c4f3' }
  processCalenderEvents(datedata) {
      this.overdueActionList = [];
      this.todayActionList = [];
  this.thisWeekActionList = [];
  this.beyondList = [];
  this.markedDays =[];
  this.markedDays_strings = [];

      for (let i = 0; i < this.doActions.length; i++) {
    let now = new Date(this.doActions[i].target_date);

          let insertData = {
              d: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
              color: this.doActions[i].color
          };
          this.markedDays.push(insertData);
          this.markedDays_strings.push(JSON.stringify(insertData));


      let then = new Date(datedata);
      let DaysDifference  = this.dateDiffInDays(then, now);
      console.log(DaysDifference);

              if (DaysDifference < 0) {
                  this.overdueActionList.push(this.doActions[i]);
              } else if (DaysDifference == 0) {
                  this.todayActionList.push(this.doActions[i]);
              } else if (DaysDifference >= 1 && DaysDifference <= 7) {
                  this.thisWeekActionList.push(this.doActions[i]);
              } else{
                  this.beyondList.push(this.doActions[i]);
              }


          if (i == this.doActions.length - 1) {
              console.log('Marked days');
              console.log(this.markedDays);
              console.log('DIFF DAYS LOG');
              console.log(this.overdueActionList);
              console.log(this.todayActionList);
              console.log(this.thisWeekActionList);
              console.log(this.beyondList);
              let filter_list = [];
              let assign_list = [];
              for(let i=0;i<this.markedDays.length;i++){
                  if(i==0){
                      filter_list.push(this.markedDays_strings[i]);
                      assign_list.push(this.markedDays[i]);
                  }else{
                          if(filter_list.includes(this.markedDays_strings[i])){
                              //skip
                          }else{
                              filter_list.push(this.markedDays_strings[i]);
                              assign_list.push(this.markedDays[i]);
                          }
                      }

                      if(i == this.markedDays.length-1){
                          console.log("Filtered list");
                          console.log(assign_list);
                          this.markedDays = assign_list;
                      }
                  }
              }
          }
      }


      processCalenderGoalsObjs(datedata) {
        this.overdueActionList = [];
        this.todayActionList = [];
        this.thisWeekActionList = [];
        this.beyondList = [];
        this.markedDays =[];
        this.markedDays_strings = [];
  
        for (let i = 0; i < this.finalData.length; i++) {

            let now = new Date(this.finalData[i].target_date);
  
            let insertData = {
                d: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
                color: this.finalData[i].color
            };
            this.markedDays.push(insertData);
            this.markedDays_strings.push(JSON.stringify(insertData));
  
  
                let then = new Date(datedata);
                let DaysDifference  = this.dateDiffInDays(then, now);
                console.log(DaysDifference);
  
                if (DaysDifference < 0) {
                    this.overdueActionList.push(this.finalData[i]);
                } else if (DaysDifference == 0) {
                    this.todayActionList.push(this.finalData[i]);
                } else if (DaysDifference >= 1 && DaysDifference <= 7) {
                    this.thisWeekActionList.push(this.finalData[i]);
                } else{
                    this.beyondList.push(this.finalData[i]);
                }
  
  
            if (i == this.finalData.length - 1) {
                console.log('Marked days');
                console.log(this.markedDays);
                console.log('DIFF DAYS LOG');
                console.log(this.overdueActionList);
                console.log(this.todayActionList);
                console.log(this.thisWeekActionList);
                console.log(this.beyondList);
                let filter_list = [];
                let assign_list = [];
                for(let i=0;i<this.markedDays.length;i++){
                    if(i==0){
                        filter_list.push(this.markedDays_strings[i]);
                        assign_list.push(this.markedDays[i]);
                    }else{
                            if(filter_list.includes(this.markedDays_strings[i])){
                                //skip
                            }else{
                                filter_list.push(this.markedDays_strings[i]);
                                assign_list.push(this.markedDays[i]);
                            }
                        }
                        if(i == this.markedDays.length-1){
                            console.log("Filtered list");
                            console.log(assign_list);
                            this.markedDays = assign_list;
                        }
                   }
                }
            }
        }

  //Get All Data by calling API's for create Action Page.
  getCreatePageDropdownData() {
      this.api.getPriorities(this.globals.enterprisedId).subscribe(
          (result) => {
              if (result.status == 200) {
                  this.ActionPriorities = result.body;
                  console.log('Priorities...');
                  console.log(result.body);
              } else {
              }
          },
          (error) => {
              console.log('Get Priorities error....');
          }
      );

      this.api.getGoals(this.globals.userId,this.globals.enterprisedId).subscribe(
          (result) => {
              console.log('Get all Goals...');
              console.log(result);
              if (result.status == 200) {
                  this.AllGoals = result.body;
              } else {
              }
          },
          (error) => {
              console.log('Get All Goals error....');
          }
      );

      this.api
          .getObjectives(this.globals.userId,this.globals.enterprisedId)
          .subscribe(
              (result) => {
                  console.log('Get all Objectives...');
                  console.log(result);
                  if (result.status == 200) {
                      this.Allobjectives = result.body;
                  } else {
                  }
              },
              (error) => {
                  console.log('Get All Objectives error....');
              }
          );
}


}

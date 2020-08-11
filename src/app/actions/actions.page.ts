import { Component, OnInit } from '@angular/core';
import { mobiscroll,MbscCalendarOptions } from '@mobiscroll/angular';
import { ModalController, Platform } from '@ionic/angular';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ActionCreationPage } from '../action-creation/action-creation.page';
import { GlobalsService } from '../services/globals.service';
import { ApiServicesService } from '../services/api-services.service';
import { DatePipe } from '@angular/common';
import { SearchPage } from '../search/search.page';



mobiscroll.settings = {
	theme: 'ios',
	themeVariant: 'light'
};
const now = new Date();
@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

	displayIfNoCategories = false;
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

   click_header_index = 0;

    quickActionName = '';
    showSearchbar:boolean = false;
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



//   listviewOptions: MbscListviewOptions = {
//       theme: 'material',
//       themeVariant: 'light',
//       swipe: false
//   };

  deviceType = 'android';

  constructor( private datapipe:DatePipe, private platform:Platform, private modalController: ModalController, private api:ApiServicesService, private globals:GlobalsService) {

	this.countChunks();


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
    this.getCategoriesforActions();
  }

  async openModal(type,input) {

    console.log('Clicked objective modal');
		let Categories_duplicate = [];
			for(let i=0;i<this.allCatogeries.length;i++){
			  if(this.allCatogeries[i].name != 'Miscellaneous'){
				Categories_duplicate.push(this.allCatogeries[i]);
			  }
			  if(i == this.allCatogeries.length-1){

				for(let j=0;j<Categories_duplicate.length;j++){
					if(Categories_duplicate[j].category_id == input.category_id){
						this.click_header_index = j;
					}
				}

			}
			}

		const initialState = {
			modalType: type,
			modalData: input,
			modalActions: this.ActionPriorities,
			modalCatogeries: Categories_duplicate,
			modalGoals: this.AllGoals,
			modalObjectives: this.Allobjectives,
			miscellaneousCatogeryID: this.miscellaneousCatogeryID
		};



      const modal = await this.modalController.create({
       component: ActionCreationPage,cssClass: 'actions-modal',componentProps: initialState
      });

      modal.onDidDismiss().then((dataReturned) => {
       if (dataReturned !== null) {
	    console.log("Modal got dismissed !");
		this.globals.hideLoading();

		this.markedDay = new Date(dataReturned.data.data.target_date);
        this.processCalenderEvents(this.markedDay);
            if(dataReturned.data.data.close != "CANCEL"){
                this.getCategoriesforActions();
            }
	//     console.log(dataReturned.data.data); 
	// 		if(dataReturned.data.data != "CANCEL"){
	// 			this.getCategoriesforActions();
	// 		}	
    }
      });
      return await modal.present();
	 }

	clickedheader(i){
		console.log("Clicked header index....  "+ i);
		this.click_header_index = i;
	}


	doRefresh(event){
		console.log("Do Refresh......");
		console.log(event);
		this.getCategoriesforActions();
		setTimeout(() => {
			console.log('Async operation has ended');
			event.target.complete();
		  }, 2000);
	}

	 searchAction(){
		this.showSearchbar = true;

		// console.log("search butto clicked....");
		// const modal = await this.modalController.create({
		// 	   component: SearchPage,cssClass: 'custom-modal3'
		// 	  });

		// 	  modal.onDidDismiss().then((dataReturned) => {
		// 	   if (dataReturned !== null) {
		// 		console.log(dataReturned.data.data);
		// 		this.searchText = dataReturned.data.data;
		// 		this.refreshSearch();
		// 	    console.log("Modal got dismissed !");
		//     }
		// 	  });
		// 	  return await modal.present();

	}


	  hideSearchbar(item){
		console.log("cancekl")
		this.showSearchbar = false;
	  }


	refreshSearch() {
        console.log("Refresh search triggered...");
        this.searchBy = this.getSearchObject();
        console.log(this.searchBy);
        this.countChunks();
    }
    getSearchObject() {
        let searchObj = {};
        searchObj['action'] = this.searchText;
        return searchObj;
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
			await this.api
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
    this.processCalenderEvents(data.valueText);
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

	onDrop(event: CdkDragDrop<string[]>) {
		console.log('Event Triggered....');
		console.log(event);
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
			console.log('SAME container......');
		} else {
			let substract_index = 0;
			if(event.currentIndex == 0){
				substract_index = 0;
			}else if(event.currentIndex == 1){
				substract_index = 1;
			}else{
				substract_index = 2
			}
			transferArrayItem(
				event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex-substract_index
			);

    console.log('other container......');

      console.log(this.chunkActions);
      console.log(this.dumpActions);
      console.log(event.currentIndex-substract_index);
      console.log(event.container.id);
      for(let i=0;i< this.chunkActions.length;i++){

        if(this.chunkActions[i].name == event.container.id){
		  console.log('*********');
		  console.log(i);
		  console.log(this.chunkActions[i]);
		  console.log(this.chunkActions[i].actions);
		  console.log(this.chunkActions[i].actions[event.currentIndex-substract_index]);
		  console.log(this.chunkActions[i].actions[event.currentIndex-substract_index]['action_category_id']);
          this.chunkActions[i].actions[event.currentIndex-substract_index]['action_category_id'] = this.chunkActions[i].category_id;
          this.chunkActions[i].actions[event.currentIndex-substract_index]['category_name'] = this.chunkActions[i].name;
          this.updateOnDragDrop(this.chunkActions[i].actions[event.currentIndex-substract_index]);

        }
      }
      this.countChunks();
		}
  }

  onDropFind(event: CdkDragDrop<string[]>) {
	console.log('Event Triggered....');
	console.log(event);
	if (event.previousContainer === event.container) {
		moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		console.log('SAME container......');
	} else {
		transferArrayItem(
			event.previousContainer.data,
			event.container.data,
			event.previousIndex-2,
			event.currentIndex
		);
	console.log('other container......');

  console.log(this.chunkActions);
  console.log(this.dumpActions);
  console.log(event.currentIndex);
  console.log(event.container.id);


this.dumpActions[event.currentIndex]['action_category_id'] = this.miscellaneousCatogeryID;
this.dumpActions[event.currentIndex]['category_name'] = 'Miscellaneous';
this.updateOnDragDrop(this.dumpActions[event.currentIndex]);

  this.countChunks();

	}
}


  updateOnDragDrop(dataReceived){

    console.log("Data Received");
    console.log(dataReceived);

   let update_actions = {
      "action":dataReceived.action ? dataReceived.action : "",
      "objective_id": dataReceived.objective_id ?  dataReceived.objective_id :"null",
      "created_user_id":this.globals.userId,
      "scheduled_date": dataReceived.scheduled_date ? this.datapipe.transform(dataReceived.scheduled_date, 'yyyy-MM-dd hh:mm:ss') :  "",
      "completed_date": dataReceived.completed_date ? this.datapipe.transform(dataReceived.completed_date, 'yyyy-MM-dd hh:mm:ss') : "",
      "target_date": dataReceived.target_date ? this.datapipe.transform(dataReceived.target_date, 'yyyy-MM-dd hh:mm:ss') : "",
      "description": dataReceived.description ? dataReceived.description: "",
      "remarks": dataReceived.remarks ? dataReceived.remarks : "null",
      "priority_id": dataReceived.priority_id ?dataReceived.priority_id :"null",
      "action_category_id": dataReceived.action_category_id  ? dataReceived.action_category_id : "null",
      "enterprise_id": this.globals.enterprisedId,
	  "goal_id": dataReceived.goal_id ? dataReceived.goal_id : "null",
	  "milestone_id":dataReceived.milestone_id ? dataReceived.milestone_id : "null"
    };

    console.log(update_actions);
    this.api.updateActions(update_actions,dataReceived.action_id).subscribe((result)=>{
      console.log(result);
      if(result.status == 200){
        console.log("Succesfully updated.");
      }else{
        console.log('Api error');
      }
    },(error)=>{
      console.log(error);
    })

  }

	// Data for processing Display Actions into dump, chunk & do .
	processData() {
		if(this.allCatogeriesActions.length == 0){
			return;
		}
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
					this.displayIfNoCategories = false;
					this.chunkActions[this.click_header_index]['visible'] = true;
				}else{
					this.displayIfNoCategories = true;
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
	this.markedDays =[];
	this.markedDays_strings = [];
	this.beyondList = [];

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

  triggerQUickAction(event){
    console.log("Quick Action Triggered.");
    console.log(event);
	console.log(this.quickActionName);

	if(this.quickActionName == ''){
		return;
	}
   let quick_actions = {
      "action": this.quickActionName,
      "objective_id": 'null',
      "created_user_id":this.globals.userId,
      "scheduled_date": "",
      "completed_date": "",
      "target_date": "",
      "description": "",
      "remarks": "null",
      "priority_id":  this.ActionPriorities[2].priority_id,
      "action_category_id": this.miscellaneousCatogeryID ? this.miscellaneousCatogeryID :'null',
      "enterprise_id": this.globals.enterprisedId,
	  "goal_id": "null",
	  "milestone_id":"null"
    };
    this.globals.showLoading('Please wait....');
    console.log(quick_actions);
    this.api.createActions(quick_actions).subscribe((result)=>{
      console.log('Action creation is successful');
      console.log(result);
      this.globals.hideLoading();
      if(result.status ==200){
        //this.sweetAlertDisplay("Action created successfully", true);
        this.quickActionName = '';
        this.globals.hideLoading();

        this.getCategoriesforActions();
      }else{
       // this.sweetAlertDisplay("Action Creation failed, Try Again", false);
        this.globals.hideLoading();
      }


    },(error)=>{
      console.log('Action creation Failed.');
      console.log(error);
     this.globals.hideLoading();
      //this.sweetAlertDisplay("Action Creation failed, Try Again", false);

    });


  }

}

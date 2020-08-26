(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button style=\"color: #e4a147;\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Calendar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card style=\"padding:0px !important\">\r\n    <ion-card-content>\r\n      <mbsc-form-group>\r\n        <mbsc-calendar [(ngModel)]=\"markedDay\" display=\"inline\" (onSet)=\"getDetailsofClick($event)\" [marked]=\"markedDays\"></mbsc-calendar>\r\n    </mbsc-form-group>\r\n      <div>\r\n        <ion-card style=\"margin-bottom: 5px !important\">\r\n        <ion-card-header class=\"ion-no-padding\" (click)=\"visible = !visible\" style=\"--background:red;padding:0px !important\">\r\n          <ion-item lines=\"none\" style=\"--background:red\">\r\n            <ion-label style=\"color:white !important;margin: 0px !important;\">Overdue</ion-label>\r\n            <!-- <ion-text slot=\"end\">{{overdueActionList.length}}</ion-text> -->\r\n            <span class=\"roundbutton\" style=\"text-align:center;vertical-align: middle; color:red; padding-top:3px !important; font-size:small; float:right;\">\r\n              <span style=\"margin-top: 5px;\">{{overdueActionList.length}}</span>\r\n           </span>\r\n          </ion-item>\r\n        </ion-card-header>\r\n        <ion-card-content *ngIf=\"visible\" class=\"ion-padding-top\" style=\"padding:0px !important\">\r\n          <ion-grid>\r\n            <ion-row *ngIf=\"overdueActionList.length == 0\">\r\n              <ion-col>\r\n                <div style=\"text-align: center;\">\r\n                    No Data\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row *ngFor=\"let item1 of overdueActionList \" (click)=\"openModal('edit',item1)\"  style=\"font-weight: normal;\">\r\n              <ion-col size=\"1\"\r\n                ><ion-text color=\"light\" [style.background-color]=\"item1.color\"\r\n                  >{{item1.name | slice:0:1}}</ion-text\r\n                ></ion-col\r\n              >\r\n              <ion-col size=\"3\">{{item1.target_date ? (item1.target_date | date: 'd MMM') : ''}}</ion-col>\r\n              <ion-col size=\"2\">{{item1.type | slice:0:1}}</ion-col>\r\n              <ion-col size=\"6\">{{item1.title | slice:0:15}}</ion-col>\r\n            </ion-row>\r\n\r\n          </ion-grid>\r\n\r\n        </ion-card-content>\r\n\r\n      </ion-card>\r\n\r\n        <ion-card style=\"margin-bottom: 5px !important\">\r\n        <ion-card-header class=\"ion-no-padding\" (click)=\"visible2 = !visible2\" style=\"--background:orange;padding:0px !important\">\r\n          <ion-item lines=\"none\" style=\"--background:orange\">\r\n            <ion-label style=\"color:white !important;margin: 0px !important;\">Today</ion-label>\r\n            <!-- <ion-text slot=\"end\">{{todayActionList.length}}</ion-text> -->\r\n            <span class=\"roundbutton\" style=\"text-align:center;vertical-align: middle; color:red; padding-top:3px !important; font-size:small; float:right;\">\r\n              <span style=\"margin-top: 5px;\">{{todayActionList.length}}</span>\r\n           </span>\r\n          </ion-item>\r\n        </ion-card-header>\r\n\r\n        <ion-card-content *ngIf=\"visible2\" class=\"ion-padding-top\" style=\"padding:0px !important\">\r\n          <ion-grid>\r\n            <ion-row *ngIf=\"todayActionList.length == 0\">\r\n              <ion-col>\r\n                <div style=\"text-align: center;\">\r\n                    No Data\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row *ngFor=\"let item2 of todayActionList\" (click)=\"openModal('edit',item2)\"  style=\"font-weight: normal;\">\r\n              <ion-col size=\"1\"\r\n                ><ion-text color=\"light\"  [style.background-color]=\"item2.color\"\r\n                  >{{item2.name | slice:0:1}}</ion-text\r\n                ></ion-col\r\n              >\r\n              <ion-col size=\"3\">{{item2.target_date ? (item2.target_date | date: 'd MMM') : ''}} </ion-col>\r\n              <ion-col size=\"2\">{{item2.type | slice:0:1}}</ion-col>\r\n              <ion-col size=\"6\">{{item2.title | slice:0:15}}</ion-col>\r\n            </ion-row>\r\n\r\n          </ion-grid>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <ion-card style=\"margin-bottom: 5px !important\">\r\n        <ion-card-header class=\"ion-no-padding\" (click)=\"visible3 = !visible3\" style=\"--background:green;padding:0px !important\">\r\n          <ion-item lines=\"none\" style=\"--background:green\">\r\n            <ion-label style=\"color:white !important; margin: 0px !important;\">This Week</ion-label>\r\n            <!-- <ion-text slot=\"end\">{{thisWeekActionList.length}}</ion-text> -->\r\n            <span class=\"roundbutton\" style=\"text-align:center;vertical-align: middle; color:red; padding-top:3px !important; font-size:small; float:right;\">\r\n              <span style=\"margin-top: 5px;\">{{thisWeekActionList.length}}</span>\r\n           </span>\r\n          </ion-item>\r\n        </ion-card-header>\r\n        <ion-card-content *ngIf=\"visible3\" class=\"ion-padding-top\" style=\"padding:0px !important\">\r\n          <ion-grid>\r\n            <ion-row *ngIf=\"thisWeekActionList.length == 0\">\r\n              <ion-col>\r\n                <div style=\"text-align: center;\">\r\n                    No Data\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row  *ngFor=\"let item3 of thisWeekActionList\" (click)=\"openModal('edit',item3)\" style=\"font-weight: normal;\">\r\n              <ion-col size=\"1\">\r\n                <ion-text color=\"light\"  [style.background-color]=\"item3.color\">{{item3.name | slice:0:1}}</ion-text>\r\n                </ion-col>\r\n              <ion-col size=\"3\">{{item3.target_date ? (item3.target_date | date: 'd MMM') : ''}}</ion-col>\r\n              <ion-col size=\"2\">{{item3.type | slice:0:1}}</ion-col>\r\n              <ion-col size=\"6\">{{item3.title | slice:0:15}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-card style=\"margin-bottom: 5px !important\">\r\n        <ion-card-header class=\"ion-no-padding\" (click)=\"visible4 = !visible4\" style=\"--background:blueviolet;padding:0px !important\">\r\n          <ion-item lines=\"none\" style=\"--background:blueviolet\">\r\n            <ion-label style=\"color:white !important; margin: 0px !important;\">Beyond</ion-label>\r\n            <!-- <ion-text slot=\"end\">{{thisWeekActionList.length}}</ion-text> -->\r\n            <span class=\"roundbutton\" style=\"text-align:center;vertical-align: middle; color:red; padding-top:3px !important; font-size:small; float:right;\">\r\n              <span style=\"margin-top: 5px;\">{{beyondList.length}}</span>\r\n           </span>\r\n          </ion-item>\r\n        </ion-card-header>\r\n        <ion-card-content *ngIf=\"visible4\" class=\"ion-padding-top\" style=\"padding:0px !important\">\r\n          <ion-grid>\r\n            <ion-row *ngIf=\"beyondList.length == 0\">\r\n              <ion-col>\r\n                <div style=\"text-align: center;\">\r\n                    No Data\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row  *ngFor=\"let item4 of beyondList\" (click)=\"openModal('edit',item4)\" style=\"font-weight: normal;\">\r\n              <ion-col size=\"1\">\r\n                <ion-text color=\"light\"  [style.background-color]=\"item4.color\">{{item4.name | slice:0:1}}</ion-text>\r\n                </ion-col>\r\n              <ion-col size=\"3\">{{item4.target_date ? (item4.target_date | date: 'd MMM') : ''}}</ion-col>\r\n              <ion-col size=\"2\">{{item4.type | slice:0:1}}</ion-col>\r\n              <ion-col size=\"6\">{{item4.title | slice:0:15}}</ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/calendar/calendar-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/calendar/calendar-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CalendarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageRoutingModule", function() { return CalendarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar.page */ "./src/app/calendar/calendar.page.ts");






const routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_5__["CalendarPage"]
    }
];
let CalendarPageRoutingModule = class CalendarPageRoutingModule {
};
CalendarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__["MbscModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
    })
], CalendarPageRoutingModule);



/***/ }),

/***/ "./src/app/calendar/calendar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-routing.module */ "./src/app/calendar/calendar-routing.module.ts");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.page */ "./src/app/calendar/calendar.page.ts");
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");








let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_7__["MbscModule"],
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarPageRoutingModule"]
        ],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]]
    })
], CalendarPageModule);



/***/ }),

/***/ "./src/app/calendar/calendar.page.scss":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  --padding:0px !important;\n  margin: 0px !important;\n}\n\n.roundbutton {\n  display: block;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  background-color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvQzpcXFVzZXJzXFx2aW5vZFxcT25lRHJpdmVcXERvY3VtZW50c1xcR29hbCBzaGFwZXJcXDEwLTA4LTIwMjBcXGdvYWwtc2hhcGVyLW1vYmlsZS1tYXN0ZXIvc3JjXFxhcHBcXGNhbGVuZGFyXFxjYWxlbmRhci5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XG4gICAgLS1wYWRkaW5nOjBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjowcHggIWltcG9ydGFudDtcbn1cblxuLnJvdW5kYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8vIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9IiwiaW9uLWNhcmQge1xuICAtLXBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5yb3VuZGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/calendar/calendar.page.ts":
/*!*******************************************!*\
  !*** ./src/app/calendar/calendar.page.ts ***!
  \*******************************************/
/*! exports provided: CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPage", function() { return CalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/globals.service */ "./src/app/services/globals.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");







const now = new Date();
let CalendarPage = class CalendarPage {
    // listviewOptions: MbscListviewOptions = {
    //     theme: 'material',
    //     themeVariant: 'light',
    //     swipe: false
    // };
    constructor(nativeStorage, datapipe, modalController, api, globals) {
        //this.countChunks();
        this.nativeStorage = nativeStorage;
        this.datapipe = datapipe;
        this.modalController = modalController;
        this.api = api;
        this.globals = globals;
        this.finalObj = {};
        this.colorObj = {};
        this.finalData = [];
        this.allCatogeries = [];
        this.allActions = [];
        this.actionsDict = {};
        this.allCatogeriesActions = [];
        this.modalType = 'NEW';
        this.searchText = '';
        this.ActionPriorities = [];
        this.AllGoals = [];
        this.Allobjectives = [];
        this.miscellaneousCatogeryID = '';
        this.click_previous_index = 0;
        this.quickActionName = '';
        this.calender_below_overdue = false;
        this.calender_below_today = true;
        this.calender_below_thisweek = false;
        this.dumpActions = [];
        this.chunkActions = [];
        this.doActions = [];
        this.overdueActionList = [];
        this.todayActionList = [];
        this.thisWeekActionList = [];
        this.beyondList = [];
        this.chunkCount = 0;
        this.chunkTotalcount = this.chunkCount.toString().padStart(2, '0');
        this.catogeryNames = [];
        this.catogeryNames_1 = ['moviesList'];
        this.visible = false;
        this.markedDays = [];
        this.markedDays_strings = [];
        this.allGoals = [];
        this.allObjectives = [];
        this.allCategoriesForGoalsAndObjectives = [];
        this.getAllGoalsAndObjectives();
    }
    ngOnInit() {
        //this.getCategoriesforActions();
    }
    /* Get Goals */
    getAllGoalsAndObjectives() {
        this.globals.showLoading();
        this.api.getCatagories(this.globals.enterprisedId, this.globals.userId).subscribe((categoriesResult) => {
            if (categoriesResult.status == 200) {
                this.allCategoriesForGoalsAndObjectives = categoriesResult.body;
                //this.allCatogeriesActions = this.allCategoriesForGoalsAndObjectives;
                for (let i = 0; i < this.allCategoriesForGoalsAndObjectives.length; i++) {
                    if (this.allCategoriesForGoalsAndObjectives[i].name == 'Miscellaneous') {
                        this.miscellaneousCatogeryID = this.allCategoriesForGoalsAndObjectives[i].category_id;
                    }
                }
                this.api.getGoals(this.globals.userId, this.globals.enterprisedId).subscribe((result) => {
                    //this.globals.hideLoading();
                    if (result.status == 200) {
                        this.allGoals = result.body;
                    }
                    else {
                        this.allGoals = [];
                    }
                    this.api.getObjectives(this.globals.userId, this.globals.enterprisedId).subscribe((objectiveResult) => {
                        this.globals.hideLoading();
                        if (objectiveResult.status == 200) {
                            this.allObjectives = objectiveResult.body;
                        }
                        else {
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
        });
    }
    processData_1() {
        this.finalObj = {};
        this.colorObj = {};
        for (let i = 0; i < this.allCategoriesForGoalsAndObjectives.length; i++) {
            this.finalObj[this.allCategoriesForGoalsAndObjectives[i].category_id] = this.allCategoriesForGoalsAndObjectives[i].name;
            this.colorObj[this.allCategoriesForGoalsAndObjectives[i].category_id] = this.allCategoriesForGoalsAndObjectives[i].color;
            if (i == this.allCategoriesForGoalsAndObjectives.length - 1) {
                console.log("@@@@@@@@");
                console.log(this.finalObj);
                this.processData_2();
            }
        }
    }
    processData_2() {
        this.finalData = [];
        for (let i = 0; i < this.allGoals.length; i++) {
            let obj1 = this.allGoals[i];
            console.log(this.allGoals[i].goal_category_id);
            console.log(this.finalObj[this.allGoals[i].goal_category_id]);
            obj1['name'] = this.finalObj[this.allGoals[i].goal_category_id] ? this.finalObj[this.allGoals[i].goal_category_id] : this.miscellaneousCatogeryID;
            obj1['title'] = this.allGoals[i].goal_title ? this.allGoals[i].goal_title : '-';
            obj1['type'] = 'G';
            obj1['color'] = this.colorObj[this.allGoals[i].goal_category_id] ? this.colorObj[this.allGoals[i].goal_category_id] : '#ffffff';
            this.finalData.push(obj1);
            if (i == this.allGoals.length - 1) {
                console.log('*********');
                console.log(obj1);
                console.log(this.finalData);
                for (let j = 0; j < this.allObjectives.length; j++) {
                    let obj2 = this.allObjectives[j];
                    console.log(this.allObjectives[j].goal_category_id);
                    console.log(this.finalObj[this.allObjectives[j].goal_category_id]);
                    obj2['name'] = this.finalObj[this.allObjectives[j].goal_category_id] ? this.finalObj[this.allObjectives[j].goal_category_id] : '-';
                    obj2['title'] = this.allObjectives[j].objective ? this.allObjectives[j].objective : '-';
                    obj2['type'] = 'O';
                    obj2['color'] = this.colorObj[this.allObjectives[j].goal_category_id] ? this.colorObj[this.allObjectives[j].goal_category_id] : '-';
                    this.finalData.push(obj2);
                    ;
                    if (j == this.allObjectives.length - 1) {
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
        this.catogeryNames_1 = ['moviesList'];
        this.allCatogeriesActions = [];
        this.allCatogeries = [];
        this.globals.showLoading('Please wait');
        console.log(this.globals.enterprisedId);
        console.log(this.globals.userId);
        this.api.getCatagories(this.globals.enterprisedId, this.globals.userId).subscribe((result) => {
            console.log(result.body);
            if (result.status == 200) {
                console.log("******************** Catogeries*************");
                console.log(result.body);
                for (let i = 0; i < result.body.length; i++) {
                    if (result.body[i].name.toLowerCase().indexOf("category") == -1) {
                        this.allCatogeries.push(result.body[i]);
                    }
                    if (i == result.body.length - 1) {
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
            }
            else if (result.status == 204) {
                this.globals.hideLoading();
            }
            else {
                this.globals.hideLoading();
            }
        }, (err) => {
            this.globals.hideLoading();
        });
    }
    //Get All Actions based on categories.
    getActionsUsingCategoryIDs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let apiCallingCount = 0;
            for (let i = 0; i < this.allCatogeries.length; i++) {
                this.api
                    .getActions(this.globals.enterprisedId, this.globals.userId, this.allCatogeries[i].category_id)
                    .subscribe((result) => {
                    apiCallingCount++;
                    if (result.status == 200) {
                        console.log('Actions for each category');
                        console.log('i Value : ' + i);
                        console.log(result.body);
                        this.allCatogeriesActions[i]['actions'] = result.body;
                    }
                    else if (result.status == 204) {
                        // this.allActions.push([]);
                        this.allCatogeriesActions[i]['actions'] = [];
                    }
                    else {
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
                }, (err) => {
                    apiCallingCount++;
                });
            }
        });
    }
    countChunks() {
        console.log('Chunks count is called.... ');
        this.chunkCount = 0;
        if (this.chunkActions.length == 0) {
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
        this.api.deleteActions(this.globals.enterprisedId, action.action_id).subscribe((result) => {
            console.log(result);
            if (result.status == 200) {
                console.log(result);
                // this.sweetAlertDisplay("Action Deleted successfully", true);
                this.getCategoriesforActions();
            }
            else {
                console.log("Delete Api server error.");
                //this.sweetAlertDisplay("Action Deleted failed", true);
            }
        }, (error) => {
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
            }
            else {
                this.catogeryNames.push(this.allCatogeriesActions[i].name);
                this.catogeryNames_1.push(this.allCatogeriesActions[i].name);
                this.allCatogeriesActions[i]['visible'] = false;
                let chunkactionfilter = [];
                if (this.allCatogeriesActions[i].actions.length == 0) {
                    this.chunkActions.push(this.allCatogeriesActions[i]);
                }
                for (let h = 0; h < this.allCatogeriesActions[i].actions.length; h++) {
                    // console.log(this.allCatogeriesActions[i].actions[h]['target_date']);
                    // console.log('*************************');
                    // console.log(this.allCatogeriesActions[i].actions[h]['target_date'].indexOf('1900'));
                    if (this.allCatogeriesActions[i].actions[h]['target_date'] == null ||
                        this.allCatogeriesActions[i].actions[h]['target_date'] == '' ||
                        this.allCatogeriesActions[i].actions[h]['target_date'].indexOf('1900') != -1) {
                        chunkactionfilter.push(this.allCatogeriesActions[i].actions[h]);
                    }
                    else {
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
                if (this.chunkActions.length > 0) {
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
        this.markedDays = [];
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
            let DaysDifference = this.dateDiffInDays(then, now);
            console.log(DaysDifference);
            if (DaysDifference < 0) {
                this.overdueActionList.push(this.doActions[i]);
            }
            else if (DaysDifference == 0) {
                this.todayActionList.push(this.doActions[i]);
            }
            else if (DaysDifference >= 1 && DaysDifference <= 7) {
                this.thisWeekActionList.push(this.doActions[i]);
            }
            else {
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
                for (let i = 0; i < this.markedDays.length; i++) {
                    if (i == 0) {
                        filter_list.push(this.markedDays_strings[i]);
                        assign_list.push(this.markedDays[i]);
                    }
                    else {
                        if (filter_list.includes(this.markedDays_strings[i])) {
                            //skip
                        }
                        else {
                            filter_list.push(this.markedDays_strings[i]);
                            assign_list.push(this.markedDays[i]);
                        }
                    }
                    if (i == this.markedDays.length - 1) {
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
        this.markedDays = [];
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
            let DaysDifference = this.dateDiffInDays(then, now);
            console.log(DaysDifference);
            if (DaysDifference < 0) {
                this.overdueActionList.push(this.finalData[i]);
            }
            else if (DaysDifference == 0) {
                this.todayActionList.push(this.finalData[i]);
            }
            else if (DaysDifference >= 1 && DaysDifference <= 7) {
                this.thisWeekActionList.push(this.finalData[i]);
            }
            else {
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
                for (let i = 0; i < this.markedDays.length; i++) {
                    if (i == 0) {
                        filter_list.push(this.markedDays_strings[i]);
                        assign_list.push(this.markedDays[i]);
                    }
                    else {
                        if (filter_list.includes(this.markedDays_strings[i])) {
                            //skip
                        }
                        else {
                            filter_list.push(this.markedDays_strings[i]);
                            assign_list.push(this.markedDays[i]);
                        }
                    }
                    if (i == this.markedDays.length - 1) {
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
        this.api.getPriorities(this.globals.enterprisedId).subscribe((result) => {
            if (result.status == 200) {
                this.ActionPriorities = result.body;
                console.log('Priorities...');
                console.log(result.body);
            }
            else {
            }
        }, (error) => {
            console.log('Get Priorities error....');
        });
        this.api.getGoals(this.globals.userId, this.globals.enterprisedId).subscribe((result) => {
            console.log('Get all Goals...');
            console.log(result);
            if (result.status == 200) {
                this.AllGoals = result.body;
            }
            else {
            }
        }, (error) => {
            console.log('Get All Goals error....');
        });
        this.api
            .getObjectives(this.globals.userId, this.globals.enterprisedId)
            .subscribe((result) => {
            console.log('Get all Objectives...');
            console.log(result);
            if (result.status == 200) {
                this.Allobjectives = result.body;
            }
            else {
            }
        }, (error) => {
            console.log('Get All Objectives error....');
        });
    }
};
CalendarPage.ctorParameters = () => [
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"] },
    { type: _services_globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"] }
];
CalendarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendar.page.scss */ "./src/app/calendar/calendar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"], _services_globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"]])
], CalendarPage);



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module-es2015.js.map
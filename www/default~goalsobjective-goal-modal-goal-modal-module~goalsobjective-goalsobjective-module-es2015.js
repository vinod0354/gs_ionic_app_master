(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~goalsobjective-goal-modal-goal-modal-module~goalsobjective-goalsobjective-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/goalsobjective/goal-modal/goal-modal.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/goalsobjective/goal-modal/goal-modal.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Create Goal</ion-title>\n </ion-toolbar>\n</ion-header>\n\n\n<ion-content  mode=\"ios\">\n\n  <ion-list>\n      <br>\n      <ion-item>\n          <ion-input placeholder=\"Title\" type=\"text\" [(ngModel)]=\"goalTitle\"></ion-input>\n      </ion-item>\n\n        <ion-item>\n          <ion-input placeholder=\"Description\" type=\"text\" [(ngModel)]=\"goalDescription\"></ion-input>\n        </ion-item>\n\n        &nbsp;\n\n        <ion-item lines=\"none\" style=\"padding-right: 0px !important;\">\n            <ion-label style=\"color: hsl(197, 71%, 73%);\">Target Date</ion-label>\n            <ion-datetime displayFormat='DD-MMM-YYYY' style=\"color: gray;\" [min]=\"min_date\"  max=\"2099-10-31\" value=\"1990-02-19\" placeholder=\"Select Date\" [(ngModel)]=\"goalTargetDate\" required></ion-datetime>\n        </ion-item>\n\n        <ion-item lines=\"none\">\n            <ion-label style=\"color: skyblue;\">Complete Date</ion-label>\n            <ion-icon name=\"checkbox-outline\"></ion-icon>\n            <ion-datetime displayFormat='DD-MMM-YYYY' style=\"color: grey;\" [min]=\"min_date\"  max=\"2099-10-31\" value=\"1990-02-19\" placeholder=\"Complete Date\" [(ngModel)]=\"goalCompletedDate\"></ion-datetime>\n        </ion-item>\n\n        <ion-item *ngIf=\"!showMoreInfoDetails\" style=\"color: skyblue;cursor: pointer;\" lines=\"none\" (click)=toggleDetails()>\n            <ion-label>More information</ion-label>\n            <ion-icon style=\"color: orange;\" name=\"caret-down-outline\"></ion-icon>\n        </ion-item>\n\n        <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"color: skyblue; cursor: pointer;\" (click)=toggleDetails()>\n            <ion-label>Less information</ion-label>\n            <ion-icon style=\"color: orange;\" name=\"caret-up-outline\"></ion-icon>\n        </ion-item>\n\n        <div  *ngIf=\"showMoreInfoDetails\">\n            <ion-item lines=\"none\">\n                <span *ngFor=\"let item of goalTypeInfo;let i = index;\">\n                    <input type=\"radio\" [(ngModel)]=\"goalBody.goal_type_id\"  id=\"professional_{{i}}\" name=\"goalType\" [value]=\"item.goal_type_id\" style=\"color: #0072BB;\" (change)=\"onGoalTypeChange(item.goal_type_id)\">\n                    <label for=\"professional_{{i}}\" style=\"margin:10px 0px 0px 6px; margin-right:30px; color: skyblue;\">{{item.type_name}}</label>\n                </span>\n\n                <!-- <ion-checkbox [(ngModel)]=\"isPersonal\" (ionChange)=\"clickPersonal()\"></ion-checkbox>\n                <ion-label>Personal</ion-label>\n                <ion-checkbox [(ngModel)]=\"isProfessional\" (ionChange)=\"clickProfessional()\" ></ion-checkbox>\n                <ion-label>Professional</ion-label> -->\n            </ion-item>&nbsp;\n\n            <ion-item lines=\"none\" style=\"padding-right: 0px !important;\">\n               <!-- <span slot=\"start\" style=\"color: skyblue;\">Category</span>\n               <span style=\"color: gray;\" slot=\"end\">Miscellaneous</span> -->\n               <ion-label style=\"color: skyblue;\">Category</ion-label>\n\n               <ion-select [(ngModel)]=\"goalBody.goal_category_id\">\n                  <!-- <ion-select-option value=\"\">Select Category</ion-select-option> -->\n                  <ion-select-option *ngFor=\"let catogery of categoryInfo\" value=\"{{catogery.category_id}}\">{{catogery.name}}</ion-select-option>\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item lines=\"none\" style=\"color: skyblue;\" >\n              <ion-label>Milestones</ion-label>\n              <ion-label>Target Date</ion-label>\n              <ion-label>Complete Date</ion-label>\n           </ion-item>\n\n           <ion-item lines=\"none\" >\n                <ion-grid>\n                        <ion-row>\n                                <ion-col class=\"col\" color=\"light\" size=\"4\">\n                                        <ion-input  placeholder=\"ms1\" [(ngModel)]=\"mstxt1\"></ion-input>\n                                  </ion-col>\n                                  <ion-col color=\"light\" size=\"4\">\n                                        <ion-datetime displayFormat='DD-MMM-YYYY'   [min]=\"min_date\" [max]=\"max_date\" value=\"1990-02-19\"  (click)=\"validatemstargetdate1()\" placeholder=\"Target\" [(ngModel)]=\"mstargetdate1\"></ion-datetime>\n                                  </ion-col>\n                                  <ion-col color=\"light\" size=\"4\">\n                                        <ion-datetime displayFormat='DD-MMM-YYYY'  [min]=\"min_date\"  max=\"2099-10-31\" value=\"1990-02-19\"  placeholder=\"Complete\" [(ngModel)]=\"mscompleteddate1\"></ion-datetime>\n                                  </ion-col>\n                        </ion-row>\n                        <ion-row>\n                          <ion-col  class=\"col\" color=\"light\" size=\"4\">\n                                <ion-input  placeholder=\"ms2\" [(ngModel)]=\"mstxt2\"></ion-input>\n                          </ion-col>\n                          <ion-col color=\"light\" size=\"4\">\n                                <ion-datetime  displayFormat='DD-MMM-YYYY'  [min]=\"min_date\" [max]=\"max_date\" value=\"1990-02-19\" (click)=\"validatemstargetdate2()\"  placeholder=\"Target\" [(ngModel)]=\"mstargetdate2\"></ion-datetime>\n                          </ion-col>\n                          <ion-col color=\"light\" size=\"4\">\n                                <ion-datetime  displayFormat='DD-MMM-YYYY'  [min]=\"min_date\"  max=\"2099-10-31\" value=\"1990-02-19\"  placeholder=\"Complete\" [(ngModel)]=\"mscompleteddate2\"></ion-datetime>\n                          </ion-col>\n                        </ion-row>\n                </ion-grid>\n            </ion-item>\n        </div>\n\n\n  </ion-list>\n\n</ion-content>\n\n\n<ion-footer style=\"border-top: solid 1px lightgray;\">\n        <!-- <table lines=\"none\" style=\"width:100%; border-radius:15px;\">\n            <tr>\n                <td align=\"center\" style=\"width:50%;border-top:solid 1px #dcdcdc; height:30px; text-align:center; font-weight:bold;\">\n\n                    <ion-item lines=\"none\" tappable  (click)=\"closemodal('SAVE');\" style=\"font-weight:bold; background:transparent; border-bottom-left-radius:15px; border-right:solid 1px #dcdcdc;  margin:0 auto;  width:100%;  text-align:center; height:50px\">\n                        <ion-icon style=\"color: #039CD9; margin-right: -20px;\" name=\"checkmark-outline\"></ion-icon>\n                        <ion-label style=\"color: #039CD9;\">Save</ion-label>\n\n\n                    </ion-item>\n                </td>\n                <td align=\"center\" style=\"width:50%;border-top:solid 1px #dcdcdc; height:30px; text-align:center;\">\n\n                    <ion-item lines=\"none\" tappable (click)=\"closemodal('CANCEL');\" style=\"font-weight:bold; background:transparent; border-bottom-right-radius:15px;  margin:0 auto;  width:100%;  text-align:center; height:50px\">\n                        <ion-icon style=\"color: red;\" name=\"close-circle-outline\"></ion-icon>\n                        <ion-label style=\"color: red;\">Cancel</ion-label>\n                    </ion-item>\n\n                </td>\n            </tr>\n        </table> -->\n\n        <ion-grid>\n            <ion-row class=\"ion-text-center\">\n              <ion-col size=\"6\">\n                <ion-item lines=\"none\" (click)=\"closemodal('SAVE');\" style=\"text-align: center; font-weight:bold; background:transparent; border-bottom-left-radius:15px; border-right:solid 1px #dcdcdc;    width:100%;  text-align:center; height:50px\">\n                  <ion-icon style=\"color: #039CD9;margin-left: 16px;\" name=\"checkmark-outline\"></ion-icon>\n                  <ion-text  style=\"color: #039CD9; font-weight: bold;\" class=\"ion-margin-start\">Save</ion-text>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item lines=\"none\" tappable (click)=\"closemodal('CANCEL');\" style=\"font-weight:bold; background:transparent; border-bottom-right-radius:15px;  margin:0 auto;  width:100%;  text-align:center; height:50px\">\n                  <ion-icon style=\"color: red; margin-left: 10px;\" name=\"close-circle-outline\"></ion-icon>\n                  <ion-text style=\"color: red; font-weight: bold;\" class=\"ion-margin-start\">Cancel</ion-text>\n              </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/goalsobjective/goal-modal/goal-modal-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/goalsobjective/goal-modal/goal-modal-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: GoalModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalModalPageRoutingModule", function() { return GoalModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _goal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goal-modal.page */ "./src/app/goalsobjective/goal-modal/goal-modal.page.ts");




const routes = [
    {
        path: '',
        component: _goal_modal_page__WEBPACK_IMPORTED_MODULE_3__["GoalModalPage"]
    }
];
let GoalModalPageRoutingModule = class GoalModalPageRoutingModule {
};
GoalModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GoalModalPageRoutingModule);



/***/ }),

/***/ "./src/app/goalsobjective/goal-modal/goal-modal.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/goalsobjective/goal-modal/goal-modal.module.ts ***!
  \****************************************************************/
/*! exports provided: GoalModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalModalPageModule", function() { return GoalModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _goal_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goal-modal-routing.module */ "./src/app/goalsobjective/goal-modal/goal-modal-routing.module.ts");
/* harmony import */ var _goal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goal-modal.page */ "./src/app/goalsobjective/goal-modal/goal-modal.page.ts");







let GoalModalPageModule = class GoalModalPageModule {
};
GoalModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _goal_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoalModalPageRoutingModule"]
        ],
        declarations: [_goal_modal_page__WEBPACK_IMPORTED_MODULE_6__["GoalModalPage"]]
    })
], GoalModalPageModule);



/***/ }),

/***/ "./src/app/goalsobjective/goal-modal/goal-modal.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/goalsobjective/goal-modal/goal-modal.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  padding: 0px !important;\n}\n\nion-item {\n  --inner-padding-end: 0px !important;\n}\n\nion-input {\n  --inner-padding-start: 0px !important;\n}\n\nion-datetime {\n  --inner-padding-start: 0px !important;\n}\n\n.col {\n  border-bottom: solid 1px lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1ByYWN0aWNlL0dpdEh1Yi9nb2FsLXNoYXBlci1tb2JpbGUvc3JjL2FwcC9nb2Fsc29iamVjdGl2ZS9nb2FsLW1vZGFsL2dvYWwtbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9nb2Fsc29iamVjdGl2ZS9nb2FsLW1vZGFsL2dvYWwtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLG1DQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQ0FBQTtBQ0VKOztBREFBO0VBQ0kscUNBQUE7QUNHSjs7QUREQTtFQUNJLGtDQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9nb2Fsc29iamVjdGl2ZS9nb2FsLW1vZGFsL2dvYWwtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLWlucHV0IHtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLWRhdGV0aW1lIHtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xufVxuLmNvbHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggbGlnaHRncmF5O1xufVxuXG4iLCJpb24tY29sIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggbGlnaHRncmF5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/goalsobjective/goal-modal/goal-modal.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/goalsobjective/goal-modal/goal-modal.page.ts ***!
  \**************************************************************/
/*! exports provided: GoalModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalModalPage", function() { return GoalModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/globals.service */ "./src/app/services/globals.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let GoalModalPage = class GoalModalPage {
    constructor(modal, datapipe, nativeStorage, apiService, global) {
        this.modal = modal;
        this.datapipe = datapipe;
        this.nativeStorage = nativeStorage;
        this.apiService = apiService;
        this.global = global;
        this.showMoreInfoDetails = false;
        this.goalTitle = '';
        this.goalDescription = '';
        this.goalTargetDate = '';
        this.goalCompletedDate = '';
        this.mstxt1 = '';
        this.mstargetdate1 = '';
        this.mscompleteddate1 = '';
        this.mstxt2 = '';
        this.mstargetdate2 = '';
        this.mscompleteddate2 = '';
        this.goalTypeInfo = [];
        this.goalLevelInfo = [];
        this.categoryInfo = [];
        this.categorySelected = '';
        // goalTypeSelected:any = 'Personal';
        this.isPersonal = true;
        this.isProfessional = false;
        this.goalBody = {
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
        };
        this.milestonesData = [
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
        this.milestoneBody = {};
        this.min_date = this.datapipe.transform(new Date(), 'yyyy-MM-dd');
        // this.max_date = this.datapipe.transform(new Date(), 'yyyy-MM-dd')
        this.getCategoriesData();
        this.getGoalTypeDeatils();
        // this.getGoalLevels();
    }
    ngOnInit() {
    }
    validatemstargetdate1() {
        console.log(this.goalTargetDate);
        if (this.goalTargetDate != "") {
            this.max_date = this.datapipe.transform(this.goalTargetDate, 'yyyy-MM-dd');
        }
    }
    validatemstargetdate2() {
        console.log(this.goalTargetDate);
        if (this.goalTargetDate != "") {
            this.max_date = this.datapipe.transform(this.goalTargetDate, 'yyyy-MM-dd');
            console.log("success2.....");
        }
    }
    getCategoriesData() {
        this.nativeStorage.getItem('catagoryList')
            .then(data => {
            console.log(data);
            this.categoryInfo = data;
            for (var i = 0; i < data.length; i++) {
                if (this.categoryInfo[i].name == "Miscellaneous") {
                    this.goalBody.goal_category_id = this.categoryInfo[i].category_id;
                }
            }
        }, error => {
            console.log(error);
        });
    }
    getGoalTypeDeatils() {
        this.global.showLoading();
        // this.global.enterprisedId = "1";
        this.apiService.getGoalTypes(this.global.enterprisedId).subscribe((result) => {
            // this.global.hideLoading();
            console.log(result.body);
            if (result.status == 200) {
                this.goalTypeInfo = result.body;
                for (var i = 0; i < this.goalTypeInfo.length; i++) {
                    if (this.goalTypeInfo[i].type_name == "Professional") {
                        // Do Something
                    }
                    else if (this.goalTypeInfo[i].type_name == "Personal") {
                        this.goalBody.goal_type_id = this.goalTypeInfo[i].goal_type_id;
                        console.log(this.goalBody);
                    }
                }
                this.getGoalLevels();
            }
            else {
                this.goalTypeInfo = [];
                this.getGoalLevels();
            }
        }, (error) => {
            // this.global.hideLoading();
            console.log(error);
            this.getGoalLevels();
        });
    }
    getGoalLevels() {
        this.apiService.getGoalLevels(this.global.enterprisedId).subscribe((result) => {
            this.global.hideLoading();
            console.log(result.body);
            if (result.status == 200) {
                this.goalLevelInfo = result.body;
                for (var i = 0; i < this.goalLevelInfo.length; i++) {
                    if (this.goalLevelInfo[i].level_name == "Individual") {
                        console.log(this.goalLevelInfo[i].level_id);
                        this.goalBody.goal_level_id = this.goalLevelInfo[i].level_id;
                    }
                    else if (this.goalTypeInfo[i].level_name == "Team") {
                    }
                    else if (this.goalTypeInfo[i].level_name == "Enterprise") {
                    }
                }
            }
            else {
                this.goalTypeInfo = [];
            }
        }, (error) => {
            this.global.hideLoading();
            console.log(error);
        });
    }
    clickPersonal() {
        console.log('clciked personal');
        this.isProfessional = false;
        this.isPersonal = true;
    }
    clickProfessional() {
        console.log('clciked Professional');
        this.isPersonal = false;
        this.isProfessional = true;
    }
    toggleDetails() {
        if (this.showMoreInfoDetails) {
            this.showMoreInfoDetails = false;
        }
        else {
            this.showMoreInfoDetails = true;
        }
    }
    onGoalTypeChange(event) {
        console.log("Goal type changed..");
        console.log(event);
        this.goalBody.goal_type_id = event;
    }
    closemodal(type) {
        console.log(this.categorySelected);
        this.goalBody.goal_title = this.goalTitle;
        this.goalBody.description = this.goalDescription;
        this.goalBody.target_date = this.datapipe.transform(this.goalTargetDate, 'yyyy-MM-dd hh:mm:ss');
        this.goalBody.completed_date = this.datapipe.transform(this.goalCompletedDate, 'yyyy-MM-dd hh:mm:ss');
        console.log(this.goalBody);
        if (type == "SAVE") {
            if (this.goalBody.goal_title != "" && this.goalBody.target_date != null) {
                this.global.showLoading();
                this.apiService.createGoal(this.goalBody).subscribe((result) => {
                    this.global.hideLoading();
                    if (result.status == 200) {
                        //this.global.presentAlert("","Goal Added successfully","",);
                        this.global.presentToast("Goal Added successfully");
                        console.log("goal created successfully");
                        this.processMilestones(result.body.goal_id, this.global.enterprisedId);
                        this.modal.dismiss({
                            "type": type
                        });
                    }
                    else {
                        //this.global.presentAlert("","Goal Creation failed","",)
                        this.global.presentToast("Goal Creation failed");
                        //console.log("goal creation failed");
                    }
                }, (error) => {
                    this.global.hideLoading();
                    this.global.presentToast("Goal Creation failed");
                    console.log(error);
                });
            }
            else {
                //this.global.presentToast("Please fill title & target Date fields");
                this.global.presentToast("Please fill title & target Date fields");
            }
        }
        else {
            this.modal.dismiss({ "type": type });
        }
    }
    processMilestones(goalId, enterprisedId) {
        this.milestonesData[0].milestone = this.mstxt1;
        this.milestonesData[0].target_date = this.datapipe.transform(this.mstargetdate1, 'yyyy-MM-dd hh:mm:ss');
        this.milestonesData[0].completion_date = this.datapipe.transform(this.mscompleteddate1, 'yyyy-MM-dd hh:mm:ss');
        this.milestonesData[1].milestone = this.mstxt2;
        this.milestonesData[1].target_date = this.datapipe.transform(this.mstargetdate2, 'yyyy-MM-dd hh:mm:ss');
        this.milestonesData[1].completion_date = this.datapipe.transform(this.mscompleteddate2, 'yyyy-MM-dd hh:mm:ss');
        for (var i = 0; i < this.milestonesData.length; i++) {
            if (this.milestonesData[i].milestone != '' && this.milestonesData[i].target_date != null) {
                console.log("Create Milestone....:", +i);
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
                    }
                    else {
                        // this.global.presentAlert("","Milestone Creation Failed","");
                    }
                }, (err) => {
                    console.log("Milestone creation err");
                    console.log(err);
                });
            }
            else {
                console.log("No milestone date");
            }
        }
    }
};
GoalModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"] },
    { type: src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_4__["GlobalsService"] }
];
GoalModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-goal-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./goal-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/goalsobjective/goal-modal/goal-modal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./goal-modal.page.scss */ "./src/app/goalsobjective/goal-modal/goal-modal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"], src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"], src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_4__["GlobalsService"]])
], GoalModalPage);



/***/ })

}]);
//# sourceMappingURL=default~goalsobjective-goal-modal-goal-modal-module~goalsobjective-goalsobjective-module-es2015.js.map
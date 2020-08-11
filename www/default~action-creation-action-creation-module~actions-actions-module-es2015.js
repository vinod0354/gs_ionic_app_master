(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~action-creation-action-creation-module~actions-actions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/action-creation/action-creation.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/action-creation/action-creation.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Actions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n        <ion-input placeholder=\"Title\"  [(ngModel)]=\"actions.action\" type=\"text\" (ionChange)=\"editTitle($event)\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"!showMoreInfoDetails\" style=\"color: skyblue;cursor: pointer;\" lines=\"none\" (click)=toggleDetails()>\n      <ion-label>More information</ion-label>\n      <ion-icon style=\"color: orange;\" name=\"caret-down-outline\"></ion-icon>\n  </ion-item>\n\n  <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"color: skyblue; cursor: pointer;\" (click)=toggleDetails()>\n      <ion-label>Less information</ion-label>\n      <ion-icon style=\"color: orange;\" name=\"caret-up-outline\"></ion-icon>\n  </ion-item>\n      <ion-item *ngIf=\"showMoreInfoDetails\">\n        <ion-input placeholder=\"Description\"  value=\"{{actions.description}}\" type=\"text\" (ionChange)=\"editDescription($event)\"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n        <ion-label style=\"color: skyblue;\">Schedule Date</ion-label>\n        <ion-datetime displayFormat='DD-MMM-YYYY' [min]=\"min_date\" max=\"2099-10-31\"  style=\"color: gray;\" [(ngModel)]=\"actions.scheduled_date\" placeholder=\"Select Date\"></ion-datetime>\n    </ion-item>\n\n      <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n          <ion-label style=\"color: skyblue;\">Target Date</ion-label>\n          <ion-datetime displayFormat='DD-MMM-YYYY' [min]=\"min_date\" max=\"2099-10-31\" style=\"color: gray;\" [(ngModel)]=\"actions.target_date\" placeholder=\"Select Date\"></ion-datetime>\n      </ion-item>\n\n      <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\">\n          <ion-label style=\"color: skyblue;\">Complete Date</ion-label>\n          <ion-datetime displayFormat='DD-MMM-YYYY' [min]=\"min_date\" max=\"2099-10-31\" style=\"color: grey;\" [(ngModel)]=\"actions.completed_date\" placeholder=\"Complete Date\"></ion-datetime>\n      </ion-item>\n\n      <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n        <ion-label style=\"color: skyblue;\">Category</ion-label>\n        <ion-select [(ngModel)]=\"actions.action_category_id\">\n          <ion-select-option value=\"\">Select Category</ion-select-option>\n          <ion-select-option *ngFor=\"let catogery of modalCatogeries\" value=\"{{catogery.category_id}}\">{{catogery.name}}</ion-select-option>\n          <!-- <ion-select-option value=\"Hello\">Hello</ion-select-option>\n          <ion-select-option value=\"Personal\">Personal</ion-select-option> -->\n        </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n      <ion-label style=\"color: skyblue;\">Priority</ion-label>\n      <ion-select  [(ngModel)]=\"actions.priority_id\" >\n        <!-- <ion-select-option value=\"\">Select Priority</ion-select-option> -->\n        <ion-select-option  *ngFor=\"let priority of modalActions\" value=\"{{priority.priority_id}}\">{{priority.name}}</ion-select-option>\n        <!-- <ion-select-option value=\"Medium\">Medium</ion-select-option>\n        <ion-select-option value=\"Low\">Low</ion-select-option> -->\n      </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n    <ion-label style=\"color: skyblue;\">Goal</ion-label>\n    <ion-select [(ngModel)]=\"actions.goal_id\" (ionChange)=\"onChangeGoals($event)\">\n      <ion-select-option value=\"\">Select Goal</ion-select-option>\n      <ion-select-option *ngFor=\"let goal of modalGoals\" [value]=\"goal.goal_id\">{{goal.goal_title}}</ion-select-option>\n      <!-- <ion-select-option value=\"Medium\">Medium</ion-select-option>\n      <ion-select-option value=\"Low\">Low</ion-select-option> -->\n    </ion-select>\n</ion-item>\n\n\n<ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n  <ion-label style=\"color: skyblue;\">Milestones</ion-label>\n  <ion-select [(ngModel)]=\"actions.milestone_id\">\n    <ion-select-option value=\"\">Select Milestone</ion-select-option>\n    <ion-select-option  *ngFor=\"let item of allMilestones\" [value]=\"item.milestone_id\">{{item.milestone}}</ion-select-option>\n    <!-- <ion-select-option value=\"Medium\">Medium</ion-select-option>\n    <ion-select-option value=\"Low\">Low</ion-select-option> -->\n  </ion-select>\n</ion-item>\n\n<ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n  <ion-label style=\"color: skyblue;\">Objective</ion-label>\n  <ion-select  [(ngModel)]=\"actions.objective_id\" >\n    <ion-select-option value=\"\">Select Objective</ion-select-option>\n    <ion-select-option *ngFor=\"let objective of modalObjectives\" [value]=\"objective.objective_id\">{{objective.objective}}</ion-select-option>\n    <!-- <ion-select-option value=\"Medium\">Medium</ion-select-option>\n    <ion-select-option value=\"Low\">Low</ion-select-option> -->\n  </ion-select>\n</ion-item>\n\n</ion-list>\n</ion-content>\n\n<ion-footer style=\"border-top: solid 1px lightgray;\">\n  <ion-grid>\n    <ion-row class=\"ion-text-center\">\n      <!-- <ion-col size=\"6\" *ngIf=\"(modalType == 'create') || (modalType == 'sortplus') \" style=\"border-right: lightgrey 1px solid\">\n\n      <div style=\"text-align: center; margin-top: 4px;\" (click)=\"saveActions();\">\n        <ion-icon style=\"color: #039CD9; margin-top:4px; \" name=\"checkmark-outline\"></ion-icon> <span style=\"margin-left: 4px;color: #039CD9; font-weight: bold;\">Save</span>\n      </div>\n      </ion-col> -->\n\n\n      <ion-col size=\"6\" *ngIf=\"(modalType == 'create') || (modalType == 'sortplus') \">\n        <ion-item lines=\"none\" tappable (click)=\"saveActions();\" style=\"font-weight:bold; background:transparent;border-right:solid 1px #dcdcdc;   margin:0 auto;  width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: #039CD9;margin-left: 16px;\" name=\"checkmark-outline\"></ion-icon>\n          <ion-text  style=\"color: #039CD9; font-weight: bold;\" class=\"ion-margin-start\">Save</ion-text>\n      </ion-item>\n      </ion-col>\n\n\n\n      <!-- <ion-col  size=\"4\" *ngIf=\"(modalType == 'edit') || (modalType == 'find')\" style=\"border-right: lightgrey 1px solid\">\n      <div style=\"text-align: center; margin-top: 4px;\" (click)=\"saveActions();\">\n        <ion-icon style=\"color: #039CD9; margin-top:4px;\" name=\"checkmark-outline\"></ion-icon> <span style=\"margin-left: 4px;color: #039CD9; font-weight: bold;\">Update</span>\n      </div>\n      </ion-col> -->\n\n\n      <ion-col size=\"4\" *ngIf=\"(modalType == 'edit') || (modalType == 'find')\">\n        <ion-item lines=\"none\" tappable (click)=\"saveActions();\" style=\"font-weight:bold; background:transparent; border-right:solid 1px #dcdcdc;   margin:0 auto;  width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: #039CD9;\" name=\"checkmark-outline\"></ion-icon>\n          <ion-text  style=\"color: #039CD9; padding-left:10px; font-weight: bold;\" >Update</ion-text>\n      </ion-item>\n      </ion-col>\n\n\n      <!-- <ion-col  size=\"4\" *ngIf=\"(modalType != 'create') &&( modalType != 'sortplus')\" style=\"border-left: lightgrey 1px solid; border-right: lightgrey 1px solid\">\n      <div style=\"text-align: center; margin-top: 4px;\"  tappable (click)=\"openDeleteConfirmDialog()\">\n        <ion-icon style=\"color: red;margin-top:4px;\" name=\"trash-outline\"></ion-icon> <span style=\"margin-left: 4px;color: red; font-weight: bold;\">Delete</span>\n      </div>\n      </ion-col> -->\n\n      <ion-col size=\"4\" *ngIf=\"(modalType != 'create') &&( modalType != 'sortplus')\">\n        <ion-item lines=\"none\" tappable  (click)=\"openDeleteConfirmDialog()\" style=\"font-weight:bold; background:transparent; border-right:solid 1px #dcdcdc;   margin:0 auto;  width:100%;  text-align:center; height:50px\">\n          <ion-icon size=\"small\" style=\"color: red; \" name=\"trash-outline\"></ion-icon>\n          <ion-text style=\"color: red; padding-left:10px; font-weight: bold;\" >Delete</ion-text>\n      </ion-item>\n      </ion-col>\n\n\n\n\n      <!-- <ion-col size=\"4\" *ngIf=\"(modalType != 'create')\" style=\"border-left: lightgrey 1px solid\">\n        <div style=\"text-align: center; margin-top: 4px;\"  tappable (click)=\"closemodal('CANCEL');\">\n          <ion-icon style=\"color: red;margin-top:4px;\" name=\"close-circle-outline\"></ion-icon> <span style=\"margin-left: 4px; color: red; font-weight: bold;\">Cancel</span>\n        </div>\n      </ion-col> -->\n\n\n      <ion-col size=\"4\" *ngIf=\"(modalType != 'create')\">\n        <ion-item lines=\"none\" tappable  (click)=\"closemodal('CANCEL');\" style=\"font-weight:bold; background:transparent;   margin:0 auto;  width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: red; \" name=\"close-circle-outline\"></ion-icon>\n          <ion-text style=\"color: red; padding-left:10px; font-weight: bold;\" >Cancel</ion-text>\n      </ion-item>\n      </ion-col>\n\n      <!-- <ion-col size=\"6\" *ngIf=\"(modalType == 'create')\" style=\"border-left: lightgrey 1px solid\">\n        <div style=\"text-align: center; margin-top: 4px; \"  tappable (click)=\"closemodal('CANCEL');\">\n          <ion-icon style=\"color: red;margin-top:4px;\" name=\"close-circle-outline\"></ion-icon> <span style=\"margin-left: 4px; color: red; font-weight: bold;\">Cancel</span>\n        </div>\n      </ion-col> -->\n\n      <ion-col size=\"6\" *ngIf=\"(modalType == 'create')\">\n        <ion-item lines=\"none\" tappable (click)=\"closemodal('CANCEL');\" style=\"font-weight:bold; background:transparent;  margin:0 auto;  width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: red; margin-left: 10px;\" name=\"close-circle-outline\"></ion-icon>\n          <ion-text style=\"color: red; font-weight: bold;\" class=\"ion-margin-start\">Cancel</ion-text>\n      </ion-item>\n      </ion-col>\n\n\n\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/action-creation/action-creation-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/action-creation/action-creation-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ActionCreationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionCreationPageRoutingModule", function() { return ActionCreationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _action_creation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-creation.page */ "./src/app/action-creation/action-creation.page.ts");




const routes = [
    {
        path: '',
        component: _action_creation_page__WEBPACK_IMPORTED_MODULE_3__["ActionCreationPage"]
    }
];
let ActionCreationPageRoutingModule = class ActionCreationPageRoutingModule {
};
ActionCreationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActionCreationPageRoutingModule);



/***/ }),

/***/ "./src/app/action-creation/action-creation.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/action-creation/action-creation.module.ts ***!
  \***********************************************************/
/*! exports provided: ActionCreationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionCreationPageModule", function() { return ActionCreationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _action_creation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-creation-routing.module */ "./src/app/action-creation/action-creation-routing.module.ts");
/* harmony import */ var _action_creation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-creation.page */ "./src/app/action-creation/action-creation.page.ts");








let ActionCreationPageModule = class ActionCreationPageModule {
};
ActionCreationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _action_creation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActionCreationPageRoutingModule"]
        ],
        declarations: [_action_creation_page__WEBPACK_IMPORTED_MODULE_6__["ActionCreationPage"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
    })
], ActionCreationPageModule);



/***/ }),

/***/ "./src/app/action-creation/action-creation.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/action-creation/action-creation.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom {\n  --ion-item-padding-end:0px !important;\n  padding: 0px !important;\n  margin: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1ByYWN0aWNlL0dpdEh1Yi9nb2FsLXNoYXBlci1tb2JpbGUvc3JjL2FwcC9hY3Rpb24tY3JlYXRpb24vYWN0aW9uLWNyZWF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWN0aW9uLWNyZWF0aW9uL2FjdGlvbi1jcmVhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FjdGlvbi1jcmVhdGlvbi9hY3Rpb24tY3JlYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbXtcclxuICAgIC0taW9uLWl0ZW0tcGFkZGluZy1lbmQ6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn0iLCIuY3VzdG9tIHtcbiAgLS1pb24taXRlbS1wYWRkaW5nLWVuZDowcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/action-creation/action-creation.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/action-creation/action-creation.page.ts ***!
  \*********************************************************/
/*! exports provided: ActionCreationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionCreationPage", function() { return ActionCreationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/globals.service */ "./src/app/services/globals.service.ts");
/* harmony import */ var _services_api_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let ActionCreationPage = class ActionCreationPage {
    constructor(toastController, alertController, modal, datapipe, globals, api) {
        // setTimeout(() => {
        this.toastController = toastController;
        this.alertController = alertController;
        this.modal = modal;
        this.datapipe = datapipe;
        this.globals = globals;
        this.api = api;
        this.ButtonText = 'Save';
        this.targetMinDate = new Date();
        this.completedMinDate = new Date();
        this.scheduledMinDate = new Date();
        this.allMilestones = [];
        this.show_expander = true;
        this.actions = {
            "action": "",
            "objective_id": null,
            "created_user_id": null,
            "scheduled_date": "",
            "completed_date": "",
            "target_date": "",
            "description": "null",
            "remarks": "null",
            "priority_id": null,
            "action_category_id": null,
            "enterprise_id": null,
            "goal_id": null,
            "milestone_id": null
        };
        this.visible = false;
        this.showMoreInfoDetails = false;
        // }, 2000);
        this.min_date = this.datapipe.transform(new Date(), 'yyyy-MM-dd');
    }
    ngOnInit() {
        this.show_expander = true;
        console.log("Received Data : ");
        console.log(this.modalData);
        console.log('Modal Type');
        console.log(this.modalType);
        console.log(this.modalActions);
        console.log(this.modalCatogeries);
        console.log(this.modalGoals);
        console.log(this.modalObjectives);
        console.log(this.miscellaneousCatogeryID);
        if (this.modalData.goal_id) {
            this.api.getMilestones(this.globals.enterprisedId, this.modalData.goal_id).subscribe((result) => {
                if (result.status == 200) {
                    this.allMilestones = result.body;
                    console.log(this.allMilestones);
                }
                else {
                    console.log("Get Milestone error...");
                }
            }, (error) => {
                console.log("Get Milestone error...");
            });
        }
        if (this.modalType == 'create') {
            this.actions = {
                "action": "",
                "objective_id": "",
                "created_user_id": this.globals.userId,
                "scheduled_date": "",
                "completed_date": "",
                "target_date": "",
                "description": "",
                "remarks": "",
                "priority_id": this.modalActions[2].priority_id,
                "action_category_id": "",
                "enterprise_id": this.globals.enterprisedId,
                "goal_id": "",
                "milestone_id": ""
            };
        }
        else if (this.modalType == 'sortplus') {
            let category_id;
            if (this.modalData.actions.length > 0) {
                category_id = this.modalData.actions[0].action_category_id;
            }
            else {
                category_id = this.modalData.category_id;
            }
            this.actions = {
                "action": "",
                "objective_id": "",
                "created_user_id": this.globals.userId,
                "scheduled_date": "",
                "completed_date": "",
                "target_date": "",
                "description": "",
                "remarks": "",
                "priority_id": this.modalActions[2].priority_id,
                "action_category_id": category_id ? category_id : "",
                "enterprise_id": this.globals.enterprisedId,
                "goal_id": "",
                "milestone_id": ""
            };
        }
        else {
            if (this.modalType == 'find') {
                this.show_expander = false;
            }
            console.log((!this.modalData.scheduled_date.includes('1900')));
            console.log(!(this.modalData.completed_date.includes('1900')));
            console.log((!this.modalData.target_date.includes('1900')));
            this.actions = {
                "action": this.modalData.action,
                "objective_id": this.modalData.objective_id ? this.modalData.objective_id : "",
                "created_user_id": this.modalData.created_user_id,
                "scheduled_date": (this.modalData.scheduled_date) && (!this.modalData.scheduled_date.includes('1900')) ? this.modalData.scheduled_date : "",
                "completed_date": this.modalData.completed_date && (!this.modalData.completed_date.includes('1900')) ? this.modalData.completed_date : "",
                "target_date": this.modalData.target_date && (!this.modalData.target_date.includes('1900')) ? this.modalData.target_date : "",
                "description": this.modalData.description,
                "remarks": this.modalData.remarks,
                "priority_id": this.modalData.priority_id,
                "action_category_id": this.modalData.action_category_id ? this.modalData.action_category_id : "",
                "enterprise_id": this.modalData.enterprise_id,
                "goal_id": this.modalData.goal_id ? this.modalData.goal_id : "",
                "milestone_id": this.modalData.milestone_id ? this.modalData.milestone_id : ""
            };
        }
        console.log("Actions");
        console.log(this.actions);
    }
    closemodal(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.modal.dismiss({ data: data });
        });
    }
    saveActions() {
        let action_id = "null";
        this.globals.showLoading('Please wait');
        console.log(this.actions);
        console.log("Save actions clicked....");
        if (this.modalType == 'create') {
            if (!this.showMoreInfoDetails) {
                console.log("Miscellaneous....only action short");
                this.actions = {
                    "action": this.actions.action ? this.actions.action : "",
                    "objective_id": "null",
                    "created_user_id": this.globals.userId,
                    "scheduled_date": "",
                    "completed_date": "",
                    "target_date": "",
                    "description": "",
                    "remarks": "null",
                    "priority_id": this.modalActions[2].priority_id ? this.modalActions[2].priority_id : "null",
                    "action_category_id": this.miscellaneousCatogeryID ? this.miscellaneousCatogeryID : "null",
                    "enterprise_id": this.globals.enterprisedId,
                    "goal_id": "null",
                    "milestone_id": "null"
                };
            }
            else {
                console.log("Miscellaneous....only action full");
                this.actions.priority_id = this.actions.priority_id ? this.actions.priority_id : this.modalActions[2].priority_id;
                this.actions.goal_id = this.actions.goal_id ? this.actions.goal_id : "null";
                this.actions.milestone_id = this.actions.milestone_id ? this.actions.milestone_id : "null";
                this.actions.enterprise_id = this.globals.enterprisedId;
                this.actions.scheduled_date = this.actions.scheduled_date ? this.datapipe.transform(this.actions.scheduled_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.scheduled_date  ? new Date(this.actions.scheduled_date).toUTCString() : "null";
                this.actions.completed_date = this.actions.completed_date ? this.datapipe.transform(this.actions.completed_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.completed_date  ? new Date(this.actions.completed_date).toUTCString() : "null";
                this.actions.target_date = this.actions.target_date ? this.datapipe.transform(this.actions.target_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.target_date ? new Date(this.actions.target_date).toUTCString() : "null";
                this.actions.objective_id = this.actions.objective_id ? this.actions.objective_id : 'null';
                this.actions.action_category_id = this.actions.action_category_id ? this.actions.action_category_id : (this.miscellaneousCatogeryID ? this.miscellaneousCatogeryID : "null");
                //this.datepipe.transform(this.ObjectiveInfo.scheduledDate, 'yyyy-MM-dd hh:mm:ss hh:mm:ss')
            }
        }
        else if (this.modalType == 'sortplus') {
            this.actions.priority_id = this.actions.priority_id ? this.actions.priority_id : this.modalActions[2].priority_id;
            this.actions.goal_id = this.actions.goal_id ? this.actions.goal_id : "null";
            this.actions.milestone_id = this.actions.milestone_id ? this.actions.milestone_id : "null";
            this.actions.enterprise_id = this.globals.enterprisedId;
            this.actions.scheduled_date = this.actions.scheduled_date ? this.datapipe.transform(this.actions.scheduled_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.scheduled_date  ? new Date(this.actions.scheduled_date).toUTCString() : "null";
            this.actions.completed_date = this.actions.completed_date ? this.datapipe.transform(this.actions.completed_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.completed_date  ? new Date(this.actions.completed_date).toUTCString() : "null";
            this.actions.target_date = this.actions.target_date ? this.datapipe.transform(this.actions.target_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.target_date ? new Date(this.actions.target_date).toUTCString() : "null";
            this.actions.objective_id = this.actions.objective_id ? this.actions.objective_id : 'null';
            this.actions.action_category_id = this.actions.action_category_id ? this.actions.action_category_id : (this.miscellaneousCatogeryID ? this.miscellaneousCatogeryID : "null");
            //this.datepipe.transform(this.ObjectiveInfo.scheduledDate, 'yyyy-MM-dd hh:mm:ss hh:mm:ss')
        }
        else {
            console.log('Editing existing action');
            this.actions = {
                "action": this.actions.action ? this.actions.action : "",
                "objective_id": this.actions.objective_id ? this.actions.objective_id : "null",
                "created_user_id": this.globals.userId,
                "scheduled_date": this.actions.scheduled_date ? this.datapipe.transform(this.actions.scheduled_date, 'yyyy-MM-dd hh:mm:ss') : "",
                "completed_date": this.actions.completed_date ? this.datapipe.transform(this.actions.completed_date, 'yyyy-MM-dd hh:mm:ss') : "",
                "target_date": this.actions.target_date ? this.datapipe.transform(this.actions.target_date, 'yyyy-MM-dd hh:mm:ss') : "",
                "description": this.actions.description ? this.actions.description : "",
                "remarks": this.actions.remarks ? this.actions.remarks : "null",
                "priority_id": this.actions.priority_id ? this.actions.priority_id : "null",
                "action_category_id": this.actions.action_category_id ? this.actions.action_category_id : "null",
                "enterprise_id": this.globals.enterprisedId,
                "goal_id": this.actions.goal_id ? this.actions.goal_id : "null",
                "milestone_id": this.actions.milestone_id ? this.actions.milestone_id : "null"
            };
        }
        console.log(this.actions);
        if (this.modalType == 'create' || this.modalType == 'sortplus') {
            if (this.actions.action == '') {
                this.presentAlert();
            }
            else {
                this.api.createActions(this.actions).subscribe((result) => {
                    console.log('Action creation is successful');
                    console.log(result);
                    this.globals.hideLoading();
                    if (result.status == 200) {
                        this.presentToast("Action Created Successfully.");
                        this.closemodal('');
                        //this.sweetAlertDisplay("Action created successfully", true);
                    }
                    else {
                        //this.sweetAlertDisplay("Action Creation failed, Try Again", false);
                        this.globals.hideLoading();
                        this.presentToast("Action Creation Failed.");
                    }
                }, (error) => {
                    console.log('Action creation Failed.');
                    console.log(error);
                    this.globals.hideLoading();
                    this.presentToast("Action Creation Failed.");
                    // this.sweetAlertDisplay("Action Creation failed, Try Again", false);
                });
            }
        }
        else {
            if (this.actions.action == '') {
                this.presentAlert();
            }
            else {
                this.api.updateActions(this.actions, this.modalData.action_id).subscribe((result) => {
                    console.log('Action Update is successful');
                    console.log(result);
                    this.globals.hideLoading();
                    if (result.status == 200) {
                        this.presentToast("Action Updated Successfully.");
                        this.closemodal('');
                        //this.sweetAlertDisplay("Action Updated successfully", true);
                    }
                    else {
                        this.globals.hideLoading();
                        this.presentToast("Action Updation Failed.");
                        //this.sweetAlertDisplay("Action Update failed, Try Again", false);
                    }
                }, (error) => {
                    console.log('Action Updation Failed.');
                    this.presentToast('Action Updation Failed.');
                    console.log(error);
                    this.globals.hideLoading();
                    //this.sweetAlertDisplay("Action Update failed, Try Again", false)
                });
            }
        }
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Action name cannot be empty.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    toggleDetails() {
        this.showMoreInfoDetails = !this.showMoreInfoDetails;
    }
    openDeleteConfirmDialog() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
                            this.api.deleteActions(this.globals.enterprisedId, this.modalData.action_id).subscribe((result) => {
                                console.log(result);
                                if (result.status == 200) {
                                    console.log(result);
                                    this.closemodal('');
                                    this.presentToast('Action deleted Successfully');
                                    //this.sweetAlertDisplay("Action Deleted successfully", true);
                                }
                                else {
                                    console.log("Delete Api server error.");
                                    //this.sweetAlertDisplay("Action Deleted failed", true);
                                }
                            }, (error) => {
                                console.log(error);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    onChangeGoals(event) {
        console.log("Select Event triggered");
        this.globals.showLoading();
        console.log(event);
        console.log(event.target.value);
        this.actions.goal_id = event.target.value;
        if (event.target.value) {
            this.api.getMilestones(this.globals.enterprisedId, event.target.value).subscribe((result) => {
                if (result.status == 200) {
                    this.allMilestones = result.body;
                    this.globals.hideLoading();
                    console.log(this.allMilestones);
                }
                else {
                    console.log("Get Milestone error...");
                    this.allMilestones = [];
                    this.globals.hideLoading();
                }
            }, (error) => {
                console.log("Get Milestone error...");
                this.allMilestones = [];
                this.globals.hideLoading();
            });
        }
    }
    onChangeMileStones(event) {
        // this.actions.goal_id = event.target.value;
        //as of now do nothing.
    }
    onChangeObjectives(event) {
        this.actions.objective_id = event.target.value;
        console.log('Objective Changed');
        console.log(this.actions.objective_id);
    }
    onChangePriority(event) {
        this.actions.priority_id = event.target.value;
        console.log('Priority Changed.');
        console.log(this.actions.priority_id);
    }
    onChangeCategory(event) {
        if (event.target.value == "") {
            this.actions.action_category_id = this.miscellaneousCatogeryID;
        }
        else {
            this.actions.action_category_id = event.target.value;
        }
        console.log('Change category');
        console.log(this.actions.action_category_id);
    }
    editTitle(event) {
        console.log(event.target.value);
        this.actions.action = event.target.value;
    }
    editDescription(event) {
        console.log(event.target.value);
        this.actions.description = event.target.value;
    }
};
ActionCreationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _services_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"] },
    { type: _services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ActionCreationPage.prototype, "modalType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ActionCreationPage.prototype, "modalData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ActionCreationPage.prototype, "modalActions", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ActionCreationPage.prototype, "modalCatogeries", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ActionCreationPage.prototype, "modalGoals", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ActionCreationPage.prototype, "modalObjectives", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ActionCreationPage.prototype, "miscellaneousCatogeryID", void 0);
ActionCreationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-action-creation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./action-creation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/action-creation/action-creation.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./action-creation.page.scss */ "./src/app/action-creation/action-creation.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _services_globals_service__WEBPACK_IMPORTED_MODULE_2__["GlobalsService"], _services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"]])
], ActionCreationPage);



/***/ })

}]);
//# sourceMappingURL=default~action-creation-action-creation-module~actions-actions-module-es2015.js.map
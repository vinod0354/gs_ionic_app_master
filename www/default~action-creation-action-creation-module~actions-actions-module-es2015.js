(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~action-creation-action-creation-module~actions-actions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/action-creation/action-creation.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/action-creation/action-creation.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Actions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n        <ion-input placeholder=\"Title\"  [(ngModel)]=\"actions.action\" type=\"text\" (ionChange)=\"editTitle($event)\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"!showMoreInfoDetails\" style=\"color: skyblue;cursor: pointer;\" lines=\"none\" (click)=toggleDetails()>\n      <ion-label>More information</ion-label>\n      <ion-icon style=\"color: orange;\" name=\"caret-down-outline\"></ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"color: skyblue; cursor: pointer;\" (click)=toggleDetails()>\n        <ion-label>Less information</ion-label>\n        <ion-icon style=\"color: orange;\" name=\"caret-up-outline\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"showMoreInfoDetails\">\n      <ion-input placeholder=\"Description\"  value=\"{{actions.description}}\" type=\"text\" (ionChange)=\"editDescription($event)\"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n      <ion-label style=\"color: skyblue;\">Schedule Date</ion-label>\n      <ion-datetime mode='ios' displayFormat='DD-MMM-YYYY' [min]=\"min_date\" max=\"2099-10-31\"  style=\"color: gray;\" pickerFormat=\"DD-MMM-YYYY\" [(ngModel)]=\"actions.scheduled_date\" placeholder=\"Select Date\"></ion-datetime>\n    </ion-item>\n\n    <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n      <ion-label style=\"color: skyblue;\">Target Date</ion-label>\n      <ion-datetime mode='ios' displayFormat='DD-MMM-YYYY' [min]=\"min_date\" max=\"2099-10-31\" style=\"color: gray;\" [(ngModel)]=\"actions.target_date\" placeholder=\"Select Date\"></ion-datetime>\n    </ion-item>\n\n    <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\">\n      <ion-label style=\"color: skyblue;\">Complete Date</ion-label>\n      <ion-datetime mode='ios' displayFormat='DD-MMM-YYYY' [min]=\"min_date\" max=\"2099-10-31\" style=\"color: grey;\" [(ngModel)]=\"actions.completed_date\" placeholder=\"Complete Date\"></ion-datetime>\n    </ion-item>\n\n    <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n      <ion-label style=\"color: skyblue;\">Category</ion-label>\n      <ion-select [(ngModel)]=\"actions.action_category_id\">\n        <ion-select-option *ngIf=\"(modalData.target_date.includes('1900') || modalType == 'create' || modalData.target_date == '') && actions.action_category_id != miscellaneousCatogeryID\"   value=\"\">None</ion-select-option>\n        <ion-select-option *ngIf='actions.action_category_id == miscellaneousCatogeryID' value=\"{{actions.action_category_id}}\">None</ion-select-option>\n        <ion-select-option *ngFor=\"let catogery of modalCatogeries\" value=\"{{catogery.category_id}}\">{{catogery.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n      <ion-label style=\"color: skyblue;\">Priority</ion-label>\n      <ion-select  [(ngModel)]=\"actions.priority_id\" >\n        <ion-select-option  *ngFor=\"let priority of modalActions\" value=\"{{priority.priority_id}}\">{{priority.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n      <ion-label style=\"color: skyblue;\">Goal</ion-label>\n      <ion-select [(ngModel)]=\"actions.goal_id\" (ionChange)=\"onChangeGoals($event)\">\n        <ion-select-option value=\"\">Select Goal</ion-select-option>\n        <ion-select-option *ngFor=\"let goal of modalGoals\" [value]=\"goal.goal_id\">{{goal.goal_title}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n      <ion-label style=\"color: skyblue;\">Milestones</ion-label>\n      <ion-select [(ngModel)]=\"actions.milestone_id\">\n        <ion-select-option value=\"\">Select Milestone</ion-select-option>\n        <ion-select-option  *ngFor=\"let item of allMilestones\" [value]=\"item.milestone_id\">{{item.milestone}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf=\"showMoreInfoDetails\" lines=\"none\" style=\"padding-right: 0px !important;\">\n      <ion-label style=\"color: skyblue;\">Objective</ion-label>\n      <ion-select  [(ngModel)]=\"actions.objective_id\" >\n        <ion-select-option value=\"\">Select Objective</ion-select-option>\n        <ion-select-option *ngFor=\"let objective of modalObjectives\" [value]=\"objective.objective_id\">{{objective.objective}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<ion-footer style=\"border-top: solid 1px lightgray;\">\n  <ion-grid>\n    <ion-row class=\"ion-text-center\">\n      <ion-col size=\"6\" *ngIf=\"(modalType == 'create') || (modalType == 'sortplus') \">\n        <ion-item lines=\"none\" tappable (click)=\"saveActions();\" style=\"font-weight:bold; background:transparent;border-right:solid 1px #dcdcdc;   margin:0 auto;  width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: #039CD9;margin-left: 16px;\" name=\"checkmark-outline\"></ion-icon>\n          <ion-text  style=\"color: #039CD9; font-weight: bold;\" class=\"ion-margin-start\">Save</ion-text>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\" *ngIf=\"(modalType == 'edit') || (modalType == 'find')\">\n        <ion-item lines=\"none\" tappable (click)=\"saveActions();\" style=\"font-weight:bold; background:transparent; border-right:solid 1px #dcdcdc;   margin:0 auto;  width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: #039CD9;\" name=\"checkmark-outline\"></ion-icon>\n          <ion-text  style=\"color: #039CD9; padding-left:10px; font-weight: bold;\" >Update</ion-text>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\" *ngIf=\"(modalType != 'create') &&( modalType != 'sortplus')\">\n        <ion-item lines=\"none\" tappable  (click)=\"openDeleteConfirmDialog()\" style=\"font-weight:bold; background:transparent; border-right:solid 1px #dcdcdc;   margin:0 auto;  width:100%;  text-align:center; height:50px\">\n          <ion-icon size=\"small\" style=\"color: red; \" name=\"trash-outline\"></ion-icon>\n          <ion-text style=\"color: red; padding-left:10px; font-weight: bold;\" >Delete</ion-text>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"4\" *ngIf=\"(modalType != 'create')\">\n        <ion-item lines=\"none\" tappable  (click)=\"closemodal('CANCEL');\" style=\"font-weight:bold; background:transparent;   margin:0 auto;  width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: red; \" name=\"close-circle-outline\"></ion-icon>\n          <ion-text style=\"color: red; padding-left:10px; font-weight: bold;\" >Cancel</ion-text>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"(modalType == 'create')\">\n        <ion-item lines=\"none\" tappable (click)=\"closemodal('CANCEL');\" style=\"font-weight:bold; background:transparent;  margin:0 auto;  width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: red; margin-left: 10px;\" name=\"close-circle-outline\"></ion-icon>\n          <ion-text style=\"color: red; font-weight: bold;\" class=\"ion-margin-start\">Cancel</ion-text>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer> -->\n\n<!-- New Form -->\n<ion-content>\n  <ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class=\"ion-text-right\">\n            <span (click)=\"closemodal('CANCEL');\"><i class=\"fa fa-times\" style=\"color: #f78f11;\"></i></span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"(modalType == 'create') || (modalType == 'sortplus')\">\n        <ion-col>\n          <div class=\"\">\n            <ion-item>\n              <ion-input placeholder=\"Title\" [(ngModel)]=\"actions.action\" type=\"text\" (ionChange)=\"editTitle($event)\"></ion-input>\n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"(modalType == 'edit') || (modalType == 'find')\">\n        <ion-col>\n          <div class=\"ion-text-center\" *ngIf=\"isEdit\">\n            <span style=\"font-size: 26px; color: #363648;\" (click)=\"onEdit()\">{{ actions.action }}</span>\n          </div>\n          <div class=\"\" *ngIf=\"isEditable\">\n            <ion-item>\n              <ion-input placeholder=\"Title\"  [(ngModel)]=\"actions.action\" type=\"text\" (ionChange)=\"editTitle($event)\" (ionBlur)=\"onBlur($event);\"></ion-input>\n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-row>\n            <ion-col size=\"3\" style=\"padding-top: 15px; padding-left: 10px;\">\n              <ion-label class=\"lable\">Do</ion-label>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-datetime mode='ios' displayFormat='DD-MMM-YYYY' [min]=\"min_date\" max=\"2099-10-31\"  style=\"color: gray;\" pickerFormat=\"DD-MMM-YYYY\" [(ngModel)]=\"actions.scheduled_date\" placeholder=\"Add Date\"></ion-datetime>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-row>\n            <ion-col size=\"3\" style=\"padding-top: 15px;\">\n              <ion-label class=\"lable\">Due</ion-label>\n            </ion-col>\n            <ion-col size=\"9\">\n              <ion-datetime mode='ios' displayFormat='DD-MMM-YYYY' [min]=\"min_date\" max=\"2099-10-31\" style=\"color: gray;\" [(ngModel)]=\"actions.target_date\" placeholder=\"Add Date\"></ion-datetime>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class=\"ion-text-right\">\n            <span (click)=toggleDetails() style=\"color: #f78f11;\">\n              Advanced&nbsp;\n              <i class=\"fa fa-angle-down\" *ngIf=\"!showMoreInfoDetails\" style=\"color: #f78f11;\"></i>\n              <i class=\"fa fa-angle-up\" *ngIf=\"showMoreInfoDetails\" style=\"color: #f78f11;\"></i>\n            </span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"showMoreInfoDetails\">\n        <ion-col size=\"2\" style=\"padding-top: 15px;\">\n          <div style=\"margin-left: 5px;\">\n            <ion-label class=\"lable des-icon\"><i class=\"fa fa-list-ul\"></i></ion-label>\n          </div>\n        </ion-col>\n        <ion-col size=\"10\">\n          <ion-input placeholder=\"Add a description\" type=\"text\" value=\"{{actions.description}}\" (ionChange)=\"editDescription($event)\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"showMoreInfoDetails\" style=\"margin-top: 10px;\">\n        <ion-col size=12>\n          <ion-item lines=\"none\">\n            <ion-label class=\"lable\">Category</ion-label>\n            <ion-select [(ngModel)]=\"actions.action_category_id\">\n              <ion-select-option *ngIf=\"(modalData.target_date.includes('1900') || modalType == 'create' || modalData.target_date == '') && actions.action_category_id != miscellaneousCatogeryID\"   value=\"\">None</ion-select-option>\n              <ion-select-option *ngIf='actions.action_category_id == miscellaneousCatogeryID' value=\"{{actions.action_category_id}}\">None</ion-select-option>\n              <ion-select-option *ngFor=\"let catogery of modalCatogeries\" value=\"{{catogery.category_id}}\">{{catogery.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"showMoreInfoDetails\">\n        <ion-col size=12>\n          <ion-item lines=\"none\">\n            <ion-label class=\"lable\">Goal</ion-label>\n            <ion-select [(ngModel)]=\"actions.goal_id\" (ionChange)=\"onChangeGoals($event)\">\n              <ion-select-option value=\"\">Select</ion-select-option>\n              <ion-select-option *ngFor=\"let goal of modalGoals\" [value]=\"goal.goal_id\">{{goal.goal_title}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"showMoreInfoDetails\">\n        <ion-col size=12>\n          <ion-item lines=\"none\">\n            <ion-label class=\"lable\">Milestone</ion-label>\n            <ion-select [(ngModel)]=\"actions.milestone_id\">\n              <ion-select-option value=\"\">Select</ion-select-option>\n              <ion-select-option  *ngFor=\"let item of allMilestones\" [value]=\"item.milestone_id\">{{item.milestone}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"(modalType != 'create') &&( modalType != 'sortplus')\" style=\"margin: 10px;\">\n        <ion-col>\n          <div class=\"ion-text-center\" (click)=\"openDeleteConfirmDialog()\">\n            <ion-label class=\"lable des-icon\" style=\"padding: 10px 12px 10px 12px;\"><i class=\"fa fa-minus\" style=\"color: #ed7702;\"></i></ion-label>\n            <span>&nbsp;&nbsp;Delete Action</span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"(modalType != 'create') &&( modalType != 'sortplus')\">\n        <ion-col>\n          <div class=\"ion-text-center\">\n            <ion-button shape=\"round\" class=\"action-btn\"><span style=\"background: white; padding: 10px; border-radius: 50%;\"><i class=\"fa fa-check\" style=\"color: #9ac81b;;\"></i></span>&nbsp;&nbsp;Action Done</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"(modalType == 'edit') || (modalType == 'find')\">\n        <ion-col>\n          <div class=\"ion-text-center\">\n            <ion-button shape=\"round\" class=\"save-btn\" (click)=\"saveActions();\">Save Changes</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"(modalType == 'create') || (modalType == 'sortplus')\">\n        <ion-col>\n          <div class=\"ion-text-center\">\n            <ion-button shape=\"round\" class=\"save-btn\" (click)=\"saveActions();\">Save</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".custom {\n  --ion-item-padding-end:0px !important;\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.lable {\n  font-size: 18px;\n  font-weight: bold;\n  color: #464644;\n}\n\n.des-icon {\n  padding: 10px;\n  border: 1px solid #fafafa;\n  border-radius: 50%;\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.08), 0 -6px 12px 0 rgba(255, 255, 255, 0.5);\n}\n\n.action-btn {\n  width: 230px;\n  height: 72px;\n  font-size: 15px;\n  font-weight: bold;\n  --background: #9ac81b;\n  --box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.08), 0 -6px 12px 0 rgba(255, 255, 255, 0.5);\n}\n\n.save-btn {\n  width: 230px;\n  height: 72px;\n  font-size: 15px;\n  font-weight: bold;\n  color: #ed7702;\n  border: solid 2px #ed7702;\n  border-radius: 36px;\n  --background: white;\n  --box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.08), 0 -6px 12px 0 rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aW9uLWNyZWF0aW9uL0M6XFxVc2Vyc1xcdmlub2RcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdvYWwgc2hhcGVyXFwxMC0wOC0yMDIwXFxnb2FsLXNoYXBlci1tb2JpbGUtbWFzdGVyL3NyY1xcYXBwXFxhY3Rpb24tY3JlYXRpb25cXGFjdGlvbi1jcmVhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjdGlvbi1jcmVhdGlvbi9hY3Rpb24tY3JlYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9GQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0ZBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNGQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hY3Rpb24tY3JlYXRpb24vYWN0aW9uLWNyZWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b217XHJcbiAgICAtLWlvbi1pdGVtLXBhZGRpbmctZW5kOjBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFibGV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNDY0NjQ0O1xyXG59XHJcblxyXG4uZGVzLWljb24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmYWZhZmE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAtNnB4IDEycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnRuIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjOWFjODFiO1xyXG4gICAgLS1ib3gtc2hhZG93OiAwIDZweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAtNnB4IDEycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxuXHJcbi5zYXZlLWJ0biB7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZWQ3NzAyO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggI2VkNzcwMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgLS1ib3gtc2hhZG93OiAwIDZweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCAtNnB4IDEycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn0iLCIuY3VzdG9tIHtcbiAgLS1pb24taXRlbS1wYWRkaW5nLWVuZDowcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDY0NjQ0O1xufVxuXG4uZGVzLWljb24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmFmYWZhO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIC02cHggMTJweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLmFjdGlvbi1idG4ge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogNzJweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLS1iYWNrZ3JvdW5kOiAjOWFjODFiO1xuICAtLWJveC1zaGFkb3c6IDAgNnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIC02cHggMTJweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLnNhdmUtYnRuIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBoZWlnaHQ6IDcycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZWQ3NzAyO1xuICBib3JkZXI6IHNvbGlkIDJweCAjZWQ3NzAyO1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWJveC1zaGFkb3c6IDAgNnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIC02cHggMTJweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn0iXX0= */");

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
        this.isEditable = false;
        this.isEdit = true;
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
            this.modalData = {
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
                "milestone_id": ""
            };
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
            let dummyData = this.actions;
            dummyData['close'] = data;
            console.log();
            yield this.modal.dismiss({ data: dummyData });
        });
    }
    onEdit() {
        this.isEditable = !this.isEditable;
        this.isEdit = !this.isEdit;
    }
    onBlur(event) {
        this.isEdit = !this.isEdit;
        this.isEditable = !this.isEditable;
    }
    saveActions() {
        let action_id = "null";
        console.log(this.actions);
        console.log("Save actions clicked....");
        if ((this.actions.action_category_id == "" || this.actions.action_category_id == this.miscellaneousCatogeryID) && this.actions.target_date != "") {
            this.presentToast("Please, select Category.");
            return;
        }
        else {
            this.globals.showLoading('Please wait');
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
        this.allMilestones = [];
        this.actions.milestone_id = '';
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
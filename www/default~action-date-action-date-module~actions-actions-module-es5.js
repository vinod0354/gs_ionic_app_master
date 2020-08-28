function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~action-date-action-date-module~actions-actions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/action-date/action-date.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/action-date/action-date.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppActionDateActionDatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-right\">\n          <span (click)=\"closemodal('CANCEL');\"><i class=\"fa fa-times\" style=\"color: #f78f11;\"></i></span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div>\n          <span style=\"font-size: 18px; color: #757575;\">Action</span>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div>\n          <span style=\"font-size: 26px; color: #363648;\">Choose a due date</span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <mbsc-form-group>\n        <mbsc-calendar [(ngModel)]=\"markedDay\" display=\"inline\" (onSet)=\"getDetailsofClick($event)\" [marked]=\"markedDays\"></mbsc-calendar>\n      </mbsc-form-group>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center\">\n          <ion-button shape=\"round\" class=\"save-btn\" (click)=\"closemodal('CANCEL');\">Ok</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/action-date/action-date-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/action-date/action-date-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ActionDatePageRoutingModule */

  /***/
  function srcAppActionDateActionDateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionDatePageRoutingModule", function () {
      return ActionDatePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _action_date_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./action-date.page */
    "./src/app/action-date/action-date.page.ts");

    var routes = [{
      path: '',
      component: _action_date_page__WEBPACK_IMPORTED_MODULE_3__["ActionDatePage"]
    }];

    var ActionDatePageRoutingModule = function ActionDatePageRoutingModule() {
      _classCallCheck(this, ActionDatePageRoutingModule);
    };

    ActionDatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ActionDatePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/action-date/action-date.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/action-date/action-date.module.ts ***!
    \***************************************************/

  /*! exports provided: ActionDatePageModule */

  /***/
  function srcAppActionDateActionDateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionDatePageModule", function () {
      return ActionDatePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _action_date_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./action-date-routing.module */
    "./src/app/action-date/action-date-routing.module.ts");
    /* harmony import */


    var _action_date_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./action-date.page */
    "./src/app/action-date/action-date.page.ts");
    /* harmony import */


    var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @mobiscroll/angular */
    "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");

    var ActionDatePageModule = function ActionDatePageModule() {
      _classCallCheck(this, ActionDatePageModule);
    };

    ActionDatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _action_date_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActionDatePageRoutingModule"], _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_7__["MbscModule"]],
      declarations: [_action_date_page__WEBPACK_IMPORTED_MODULE_6__["ActionDatePage"]]
    })], ActionDatePageModule);
    /***/
  },

  /***/
  "./src/app/action-date/action-date.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/action-date/action-date.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppActionDateActionDatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".save-btn {\n  width: 175px;\n  height: 72px;\n  font-size: 15px;\n  font-weight: bold;\n  color: #ed7702;\n  border: solid 2px #ed7702;\n  border-radius: 36px;\n  --background: white;\n  --box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.08), 0 -6px 12px 0 rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aW9uLWRhdGUvQzpcXFVzZXJzXFx2aW5vZFxcT25lRHJpdmVcXERvY3VtZW50c1xcR29hbCBzaGFwZXJcXDEwLTA4LTIwMjBcXGdvYWwtc2hhcGVyLW1vYmlsZS1tYXN0ZXIvc3JjXFxhcHBcXGFjdGlvbi1kYXRlXFxhY3Rpb24tZGF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjdGlvbi1kYXRlL2FjdGlvbi1kYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNGQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hY3Rpb24tZGF0ZS9hY3Rpb24tZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F2ZS1idG4ge1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2VkNzcwMjtcclxuICAgIGJvcmRlcjogc29saWQgMnB4ICNlZDc3MDI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIC0tYm94LXNoYWRvdzogMCA2cHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4wOCksIDAgLTZweCAxMnB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG59IiwiLnNhdmUtYnRuIHtcbiAgd2lkdGg6IDE3NXB4O1xuICBoZWlnaHQ6IDcycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZWQ3NzAyO1xuICBib3JkZXI6IHNvbGlkIDJweCAjZWQ3NzAyO1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWJveC1zaGFkb3c6IDAgNnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIC02cHggMTJweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/action-date/action-date.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/action-date/action-date.page.ts ***!
    \*************************************************/

  /*! exports provided: ActionDatePage */

  /***/
  function srcAppActionDateActionDatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionDatePage", function () {
      return ActionDatePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @mobiscroll/angular */
    "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
    /* harmony import */


    var _services_globals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/globals.service */
    "./src/app/services/globals.service.ts");
    /* harmony import */


    var _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/api-services.service */
    "./src/app/services/api-services.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_2__["mobiscroll"].settings = {
      theme: 'ios',
      themeVariant: 'light'
    };
    var now = new Date();

    var ActionDatePage = /*#__PURE__*/function () {
      function ActionDatePage(toastController, alertController, modal, datapipe, globals, api) {
        _classCallCheck(this, ActionDatePage);

        this.toastController = toastController;
        this.alertController = alertController;
        this.modal = modal;
        this.datapipe = datapipe;
        this.globals = globals;
        this.api = api;
        this.markedDays = [];
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
        this.min_date = this.datapipe.transform(new Date(), 'yyyy-MM-dd');
      }

      _createClass(ActionDatePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

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
            this.api.getMilestones(this.globals.enterprisedId, this.modalData.goal_id).subscribe(function (result) {
              if (result.status == 200) {
                _this.allMilestones = result.body;
                console.log(_this.allMilestones);
              } else {
                console.log("Get Milestone error...");
              }
            }, function (error) {
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
          } else if (this.modalType == 'sortplus') {
            var category_id;

            if (this.modalData.actions.length > 0) {
              category_id = this.modalData.actions[0].action_category_id;
            } else {
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
          } else {
            if (this.modalType == 'find') {
              this.show_expander = false;
            }

            console.log(!this.modalData.scheduled_date.includes('1900'));
            console.log(!this.modalData.completed_date.includes('1900'));
            console.log(!this.modalData.target_date.includes('1900'));
            this.actions = {
              "action": this.modalData.action,
              "objective_id": this.modalData.objective_id ? this.modalData.objective_id : "",
              "created_user_id": this.modalData.created_user_id,
              "scheduled_date": this.modalData.scheduled_date && !this.modalData.scheduled_date.includes('1900') ? this.modalData.scheduled_date : "",
              "completed_date": this.modalData.completed_date && !this.modalData.completed_date.includes('1900') ? this.modalData.completed_date : "",
              "target_date": this.modalData.target_date && !this.modalData.target_date.includes('1900') ? this.modalData.target_date : "",
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
      }, {
        key: "getDetailsofClick",
        value: function getDetailsofClick(data) {
          console.log(data); // this.processCalenderEvents(data.valueText);

          console.log(new Date(data.valueText));
          console.log(this.markedDay);
        }
      }, {
        key: "closemodal",
        value: function closemodal(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var dummyData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    dummyData = this.actions;
                    dummyData['close'] = data;
                    console.log();
                    _context.next = 5;
                    return this.modal.dismiss({
                      data: dummyData
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "saveActions",
        value: function saveActions() {
          var _this2 = this;

          var action_id = "null";
          console.log(this.actions);
          console.log("Save actions clicked....");

          if ((this.actions.action_category_id == "" || this.actions.action_category_id == this.miscellaneousCatogeryID) && this.actions.target_date != "") {
            this.presentToast("Please, select Category.");
            return;
          } else {
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
              } else {
                console.log("Miscellaneous....only action full");
                this.actions.priority_id = this.actions.priority_id ? this.actions.priority_id : this.modalActions[2].priority_id;
                this.actions.goal_id = this.actions.goal_id ? this.actions.goal_id : "null";
                this.actions.milestone_id = this.actions.milestone_id ? this.actions.milestone_id : "null";
                this.actions.enterprise_id = this.globals.enterprisedId;
                this.actions.scheduled_date = this.actions.scheduled_date ? this.datapipe.transform(this.actions.scheduled_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.scheduled_date  ? new Date(this.actions.scheduled_date).toUTCString() : "null";

                this.actions.completed_date = this.actions.completed_date ? this.datapipe.transform(this.actions.completed_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.completed_date  ? new Date(this.actions.completed_date).toUTCString() : "null";

                this.actions.target_date = this.actions.target_date ? this.datapipe.transform(this.actions.target_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.target_date ? new Date(this.actions.target_date).toUTCString() : "null";

                this.actions.objective_id = this.actions.objective_id ? this.actions.objective_id : 'null';
                this.actions.action_category_id = this.actions.action_category_id ? this.actions.action_category_id : this.miscellaneousCatogeryID ? this.miscellaneousCatogeryID : "null"; //this.datepipe.transform(this.ObjectiveInfo.scheduledDate, 'yyyy-MM-dd hh:mm:ss hh:mm:ss')
              }
            } else if (this.modalType == 'sortplus') {
              this.actions.priority_id = this.actions.priority_id ? this.actions.priority_id : this.modalActions[2].priority_id;
              this.actions.goal_id = this.actions.goal_id ? this.actions.goal_id : "null";
              this.actions.milestone_id = this.actions.milestone_id ? this.actions.milestone_id : "null";
              this.actions.enterprise_id = this.globals.enterprisedId;
              this.actions.scheduled_date = this.actions.scheduled_date ? this.datapipe.transform(this.actions.scheduled_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.scheduled_date  ? new Date(this.actions.scheduled_date).toUTCString() : "null";

              this.actions.completed_date = this.actions.completed_date ? this.datapipe.transform(this.actions.completed_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.completed_date  ? new Date(this.actions.completed_date).toUTCString() : "null";

              this.actions.target_date = this.actions.target_date ? this.datapipe.transform(this.actions.target_date, 'yyyy-MM-dd hh:mm:ss') : ""; //this.actions.target_date ? new Date(this.actions.target_date).toUTCString() : "null";

              this.actions.objective_id = this.actions.objective_id ? this.actions.objective_id : 'null';
              this.actions.action_category_id = this.actions.action_category_id ? this.actions.action_category_id : this.miscellaneousCatogeryID ? this.miscellaneousCatogeryID : "null"; //this.datepipe.transform(this.ObjectiveInfo.scheduledDate, 'yyyy-MM-dd hh:mm:ss hh:mm:ss')
            } else {
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
            } else {
              this.api.createActions(this.actions).subscribe(function (result) {
                console.log('Action creation is successful');
                console.log(result);

                _this2.globals.hideLoading();

                if (result.status == 200) {
                  _this2.presentToast("Action Created Successfully.");

                  _this2.closemodal(''); //this.sweetAlertDisplay("Action created successfully", true);

                } else {
                  //this.sweetAlertDisplay("Action Creation failed, Try Again", false);
                  _this2.globals.hideLoading();

                  _this2.presentToast("Action Creation Failed.");
                }
              }, function (error) {
                console.log('Action creation Failed.');
                console.log(error);

                _this2.globals.hideLoading();

                _this2.presentToast("Action Creation Failed."); // this.sweetAlertDisplay("Action Creation failed, Try Again", false);

              });
            }
          } else {
            if (this.actions.action == '') {
              this.presentAlert();
            } else {
              this.api.updateActions(this.actions, this.modalData.action_id).subscribe(function (result) {
                console.log('Action Update is successful');
                console.log(result);

                _this2.globals.hideLoading();

                if (result.status == 200) {
                  _this2.presentToast("Action Updated Successfully.");

                  _this2.closemodal(''); //this.sweetAlertDisplay("Action Updated successfully", true);

                } else {
                  _this2.globals.hideLoading();

                  _this2.presentToast("Action Updation Failed."); //this.sweetAlertDisplay("Action Update failed, Try Again", false);

                }
              }, function (error) {
                console.log('Action Updation Failed.');

                _this2.presentToast('Action Updation Failed.');

                console.log(error);

                _this2.globals.hideLoading(); //this.sweetAlertDisplay("Action Update failed, Try Again", false)

              });
            }
          }
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Alert',
                      message: 'Action name cannot be empty.',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "toggleDetails",
        value: function toggleDetails() {
          this.showMoreInfoDetails = !this.showMoreInfoDetails;
        }
      }, {
        key: "openDeleteConfirmDialog",
        value: function openDeleteConfirmDialog() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Delete!',
                      message: 'Do you want to delete <strong>Action</strong>?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this3.api.deleteActions(_this3.globals.enterprisedId, _this3.modalData.action_id).subscribe(function (result) {
                            console.log(result);

                            if (result.status == 200) {
                              console.log(result);

                              _this3.closemodal('');

                              _this3.presentToast('Action deleted Successfully'); //this.sweetAlertDisplay("Action Deleted successfully", true);

                            } else {
                              console.log("Delete Api server error."); //this.sweetAlertDisplay("Action Deleted failed", true);
                            }
                          }, function (error) {
                            console.log(error);
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastController.create({
                      message: msg,
                      duration: 2000
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "onChangeGoals",
        value: function onChangeGoals(event) {
          var _this4 = this;

          this.allMilestones = [];
          this.actions.milestone_id = '';
          console.log("Select Event triggered");
          this.globals.showLoading();
          console.log(event);
          console.log(event.target.value);
          this.actions.goal_id = event.target.value;

          if (event.target.value) {
            this.api.getMilestones(this.globals.enterprisedId, event.target.value).subscribe(function (result) {
              if (result.status == 200) {
                _this4.allMilestones = result.body;

                _this4.globals.hideLoading();

                console.log(_this4.allMilestones);
              } else {
                console.log("Get Milestone error...");
                _this4.allMilestones = [];

                _this4.globals.hideLoading();
              }
            }, function (error) {
              console.log("Get Milestone error...");
              _this4.allMilestones = [];

              _this4.globals.hideLoading();
            });
          }
        }
      }, {
        key: "onChangeMileStones",
        value: function onChangeMileStones(event) {// this.actions.goal_id = event.target.value;
          //as of now do nothing.
        }
      }, {
        key: "onChangeObjectives",
        value: function onChangeObjectives(event) {
          this.actions.objective_id = event.target.value;
          console.log('Objective Changed');
          console.log(this.actions.objective_id);
        }
      }, {
        key: "onChangePriority",
        value: function onChangePriority(event) {
          this.actions.priority_id = event.target.value;
          console.log('Priority Changed.');
          console.log(this.actions.priority_id);
        }
      }, {
        key: "onChangeCategory",
        value: function onChangeCategory(event) {
          if (event.target.value == "") {
            this.actions.action_category_id = this.miscellaneousCatogeryID;
          } else {
            this.actions.action_category_id = event.target.value;
          }

          console.log('Change category');
          console.log(this.actions.action_category_id);
        }
      }, {
        key: "editTitle",
        value: function editTitle(event) {
          console.log(event.target.value);
          this.actions.action = event.target.value;
        }
      }, {
        key: "editDescription",
        value: function editDescription(event) {
          console.log(event.target.value);
          this.actions.description = event.target.value;
        }
      }]);

      return ActionDatePage;
    }();

    ActionDatePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
      }, {
        type: _services_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"]
      }, {
        type: _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ActionDatePage.prototype, "modalType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ActionDatePage.prototype, "modalData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ActionDatePage.prototype, "modalActions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ActionDatePage.prototype, "modalCatogeries", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ActionDatePage.prototype, "modalGoals", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ActionDatePage.prototype, "modalObjectives", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ActionDatePage.prototype, "miscellaneousCatogeryID", void 0);
    ActionDatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-action-date',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./action-date.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/action-date/action-date.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./action-date.page.scss */
      "./src/app/action-date/action-date.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _services_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"], _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"]])], ActionDatePage);
    /***/
  }
}]);
//# sourceMappingURL=default~action-date-action-date-module~actions-actions-module-es5.js.map
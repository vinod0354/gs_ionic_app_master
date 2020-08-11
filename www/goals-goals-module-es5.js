function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["goals-goals-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/goals.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/goals/goals.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGoalsGoalsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button style=\"color: #F09D2E;\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title color=\"Medium\"> Goals</ion-title>\n        <ion-buttons slot=\"end\">\n              <ion-button style=\"color: #F09D2E;\">\n                  <ion-icon name=\"search\"></ion-icon>\n              </ion-button>\n              <ion-button style=\"color: #F09D2E;\">\n                  <ion-icon name=\"funnel\"></ion-icon>\n              </ion-button>\n              <ion-button style=\"color: #F09D2E;\">\n                  <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n              </ion-button>\n          </ion-buttons>\n      </ion-toolbar>\n  </ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n    \n    <ion-grid>\n        <ion-row>\n          <ion-col col-3>\n            <div>\n                <!-- <ion-button expand=\"full\" color=\"secondary\">A full-width button</ion-button> -->\n                <ion-chip style=\"height: 40px; width: auto; color: white; background-color: chocolate;\">\n                    <ion-label>Create Goal</ion-label>\n                    <ion-icon style=\"color: white;\" name=\"add\"></ion-icon>\n                  </ion-chip>\n            </div>\n          </ion-col>\n          <ion-col col-3>\n            <div>\n                <!-- <ion-button expand=\"full\" color=\"secondary\">A full-width button</ion-button> -->\n                <ion-chip style=\"height: 40px; width: auto; color: white; background-color: chocolate;\">\n                    <ion-label>Create Objective</ion-label>\n                    <ion-icon style=\"color: white;\" name=\"add\"></ion-icon>\n                </ion-chip>\n            </div>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n    <div>\n            <ion-card-header> \n                  <ion-item lines=\"none\">\n                      <ion-label style=\"color: red;\">Designation</ion-label>\n                      <a style=\"background-color: tomato; color: white;\" class=\"roundbutton\">1</a>\n                  </ion-item> \n            </ion-card-header>\n    \n             <ion-card-content style=\"text-align: left;\">\n                <ion-grid >\n                    <ion-row style=\"font-weight:normal;\">\n                      <ion-col col-3>Date </ion-col>\n                      <ion-col col-3>Priority </ion-col>\n                      <ion-col col-3>Action </ion-col>\n                    </ion-row>\n                    <ion-row >\n                      <ion-col color=\"Medium\" style=\"color: red;\" col-3>Dec 1, '19</ion-col>\n                      <ion-col color=\"light\" col-3>Low</ion-col>\n                      <ion-col color=\"light\" col-3>Action1</ion-col>\n                    </ion-row>\n                    <ion-row >\n                        <ion-col color=\"Medium\" style=\"color: red;\" col-3>Jan 1</ion-col>\n                        <ion-col color=\"light\"  col-3>Low</ion-col>\n                        <ion-col color=\"light\" col-3>Syam Kumar</ion-col>\n                    </ion-row>\n                    <ion-row >\n                          <ion-col color=\"Medium\" style=\"color: red;\" col-3>Dec 25, '19</ion-col>\n                          <ion-col color=\"light\" col-3>Low</ion-col>\n                          <ion-col color=\"light\" col-3>Syam Kumar</ion-col>\n                    </ion-row>\n                    \n                  </ion-grid>\n                    \n             </ion-card-content> \n        \n            <ion-card-header> \n                <ion-item style=\"color: royalblue;\"  lines=\"none\">\n                    <ion-label >Designation</ion-label>\n                    <a style=\"background-color: royalblue; color: white;\" class=\"roundbutton\">1</a>\n                </ion-item> \n            </ion-card-header>\n  \n            <ion-card-content style=\"text-align: left;\">\n              <ion-grid >\n                  <ion-row style=\"font-weight:bold;\">\n                    <ion-col col-3>Date </ion-col>\n                    <ion-col col-3>Priority </ion-col>\n                    <ion-col col-3>Action </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-3>19-01-89</ion-col>\n                    <ion-col col-3>Low</ion-col>\n                    <ion-col col-3>Action1</ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-3>19-01-89</ion-col>\n                      <ion-col col-3>Low</ion-col>\n                      <ion-col col-3>Syam Kumar</ion-col>\n                    </ion-row>\n                  \n                </ion-grid>\n                  \n            </ion-card-content>\n\n            <ion-card-header > \n                <ion-item  style=\"color: #F09D2E;\" lines=\"none\">\n                    <ion-label>Designation</ion-label>\n                    <a style=\"background-color: #F09D2E; color: white;\" class=\"roundbutton\">1</a>\n                </ion-item> \n            </ion-card-header>\n  \n            <ion-card-content style=\"text-align: left;\">\n              <ion-grid >\n                  <ion-row style=\"font-weight:bold;\">\n                    <ion-col col-3>Date </ion-col>\n                    <ion-col col-3>Priority </ion-col>\n                    <ion-col col-3>Action </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col col-3>19-01-89</ion-col>\n                    <ion-col col-3>Low</ion-col>\n                    <ion-col col-3>Action1</ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col col-3>19-01-89</ion-col>\n                      <ion-col col-3>Low</ion-col>\n                      <ion-col col-3>Syam Kumar</ion-col>\n                    </ion-row>\n                  \n                </ion-grid>\n                  \n            </ion-card-content>\n           \n    </div> \n     \n   \n\n</ion-content>\n\n\n  \n  ";
    /***/
  },

  /***/
  "./src/app/goals/goals-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/goals/goals-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: GoalsPageRoutingModule */

  /***/
  function srcAppGoalsGoalsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoalsPageRoutingModule", function () {
      return GoalsPageRoutingModule;
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


    var _goals_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./goals.page */
    "./src/app/goals/goals.page.ts");

    var routes = [{
      path: '',
      component: _goals_page__WEBPACK_IMPORTED_MODULE_3__["GoalsPage"]
    }];

    var GoalsPageRoutingModule = function GoalsPageRoutingModule() {
      _classCallCheck(this, GoalsPageRoutingModule);
    };

    GoalsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GoalsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/goals/goals.module.ts":
  /*!***************************************!*\
    !*** ./src/app/goals/goals.module.ts ***!
    \***************************************/

  /*! exports provided: GoalsPageModule */

  /***/
  function srcAppGoalsGoalsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoalsPageModule", function () {
      return GoalsPageModule;
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


    var _goals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./goals-routing.module */
    "./src/app/goals/goals-routing.module.ts");
    /* harmony import */


    var _goals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./goals.page */
    "./src/app/goals/goals.page.ts");

    var GoalsPageModule = function GoalsPageModule() {
      _classCallCheck(this, GoalsPageModule);
    };

    GoalsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _goals_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoalsPageRoutingModule"]],
      declarations: [_goals_page__WEBPACK_IMPORTED_MODULE_6__["GoalsPage"]]
    })], GoalsPageModule);
    /***/
  },

  /***/
  "./src/app/goals/goals.page.scss":
  /*!***************************************!*\
    !*** ./src/app/goals/goals.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppGoalsGoalsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".qwe {\n  --background: red !important;\n}\n\nion-card-content {\n  padding: 0px !important;\n}\n\nion-card-header {\n  padding: 0px !important;\n}\n\n.roundbutton {\n  display: block;\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n  background-color: white;\n  text-align: center;\n}\n\n.cardconteudo {\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.background1-ionitem {\n  --background: rgb(29, 131, 247) !important;\n}\n\n.background2-ionitem {\n  --background: rgb(149, 29, 247) !important;\n}\n\n.background3-ionlabel {\n  --background: rgb(247, 207, 29) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1ByYWN0aWNlL0dpdEh1Yi9nb2FsLXNoYXBlci1tb2JpbGUvc3JjL2FwcC9nb2Fscy9nb2Fscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2dvYWxzL2dvYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNLLDRCQUFBO0FDUEw7O0FEU0E7RUFDSSx1QkFBQTtBQ05KOztBRFNBO0VBQ0ksdUJBQUE7QUNOSjs7QURXQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRGdJQTtFQUNJLG9DQUFBO0FDN0hKOztBRGdJQTtFQUNJLDBDQUFBO0FDN0hKOztBRCtIQTtFQUNJLDBDQUFBO0FDNUhKOztBRDhIQTtFQUNJLDBDQUFBO0FDM0hKIiwiZmlsZSI6InNyYy9hcHAvZ29hbHMvZ29hbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmNhcmRIZWFkZXJTZXR0aW5ncyB7XG4vLyAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbi8vICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbi8vICAgICBmb250LXNpemU6IHNtYWxsO1xuXG5cbi8vIH1cblxuLnF3ZXsgICBcbiAgICAgLS1iYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcbn1cbmlvbi1jYXJkLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG5cbn1cbmlvbi1jYXJkLWhlYWRlcntcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIC8vIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4ucm91bmRidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLy8gLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuLy8gLmNhcmRCb2R5U2V0dGluZ3Mge1xuLy8gICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4vLyAgICAgZm9udC1zaXplOiBzbWFsbDtcbi8vIH1cblxuLy8gLmNhcmRCb2R5QmFja0NvbG9ye1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk5RTQ7XG4vLyAgICAgcGFkZGluZzowcHggIWltcG9ydGFudDtcbi8vICAgICBmb250LXNpemU6IHNtYWxsO1xuLy8gfVxuXG4vLyBociB7XG4vLyAgICAgbWFyZ2luLXRvcDogLTAuNXJlbTtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuLy8gICAgIGJvcmRlcjogMDtcbi8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMSk7XG4vLyB9XG5cbi8vIC5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xuLy8gICAgIHBhZGRpbmctbGVmdDogMi4zNzVyZW07XG4vLyB9XG5cbi8vIC5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB6LWluZGV4OiAyO1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIHdpZHRoOiAyLjM3NXJlbTtcbi8vICAgICBoZWlnaHQ6IDIuMzc1cmVtO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAyLjM3NXJlbTtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyAgICAgY29sb3I6ICNhYWE7XG4vLyB9XG5cbi8vIC50cnVuY2F0ZSB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuLy8gICB9XG5cbi8vICAgcGFnaW5hdGlvbi1jb250cm9scyAubmcyLXBhZ2luYXRpb24gbGkuY3VycmVudCB7XG4vLyAgICAgYmFja2dyb3VuZDogZ3JheTtcbi8vIH1cblxuLy8gLmNhcmQ6aG92ZXIge1xuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4vLyAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4vLyAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbi8vICAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIC4yKTtcbi8vICAgfVxuLy8gICBwIHtcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbi8vICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuLy8gICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbi8vICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4vLyAgICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbi8vIH1cbi8vIC5NYWluQ2FyZHtcbi8vICAgICBmbG9hdDogbGVmdDtcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDglO1xuLy8gICAgIG1hcmdpbi10b3A6IDUwcHg7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vIH1cbi8vIC5jYXJkLWJvZHl7XG4vLyAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuXG4vLyB9XG4vLyAuR29hbFRpdGxle1xuLy8gICAgIGZsb2F0OiBsZWZ0O1xuLy8gICAgIG1hcmdpbi10b3A6IC0yMXB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbi8vICAgICBjb2xvcjojMTA4OUNFOyBcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDVweDsgXG4vLyAgICAgbGluZS1oZWlnaHQ6IDAuODtcbi8vIH1cbi8vIC5Hb2FsVGFyZ2V0RGF0ZXtcbi8vICAgICAvKiBmbG9hdDogcmlnaHQgIWltcG9ydGFudDsgKi9cbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgcmlnaHQ6IDE2cHg7XG4gICBcbi8vIH1cbi8vIC5DdXN0b21CYWRnZXtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgLyogcmlnaHQ6IDQxcHg7ICovXG4vLyAgICAgbGVmdDogOTJweDtcbi8vICAgICBib3R0b206IDM0cHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1NSU7XG4vLyAgICAgcGFkZGluZzogN3B4O1xuLy8gICAgIGNvbG9yOiB3aGl0ZTtcbi8vIH1cbi8vIC5Hb2FsRWRpdHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHJpZ2h0OiA2NnB4O1xuLy8gICAgIGNvbG9yOiAjMDA3YmZmICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyAuR29hbERlbGV0ZXtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHJpZ2h0OiAzNXB4O1xuLy8gICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbi8vIH1cbi8vIC5FZGl0X0RlbGV0ZV9JY29ue1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICByaWdodDogLTEzcHg7XG4vLyAgICAgYm90dG9tOiAzNXB4O1xuLy8gfVxuXG4uY2FyZGNvbnRldWRvIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XG59XG5cbi5iYWNrZ3JvdW5kMS1pb25pdGVteyAgIFxuICAgIC0tYmFja2dyb3VuZDogcmdiKDI5LCAxMzEsIDI0NykgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kMi1pb25pdGVteyAgIFxuICAgIC0tYmFja2dyb3VuZDogcmdiKDE0OSwgMjksIDI0NykgIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kMy1pb25sYWJlbHsgICBcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyNDcsIDIwNywgMjkpICFpbXBvcnRhbnQ7XG59XG4iLCIucXdlIHtcbiAgLS1iYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnJvdW5kYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmRjb250ZXVkbyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLmJhY2tncm91bmQxLWlvbml0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYigyOSwgMTMxLCAyNDcpICFpbXBvcnRhbnQ7XG59XG5cbi5iYWNrZ3JvdW5kMi1pb25pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMTQ5LCAyOSwgMjQ3KSAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZDMtaW9ubGFiZWwge1xuICAtLWJhY2tncm91bmQ6IHJnYigyNDcsIDIwNywgMjkpICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/goals/goals.page.ts":
  /*!*************************************!*\
    !*** ./src/app/goals/goals.page.ts ***!
    \*************************************/

  /*! exports provided: GoalsPage */

  /***/
  function srcAppGoalsGoalsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoalsPage", function () {
      return GoalsPage;
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

    var GoalsPage = /*#__PURE__*/function () {
      function GoalsPage(activatedRoute) {
        _classCallCheck(this, GoalsPage);

        this.activatedRoute = activatedRoute;
        this.clients = [{
          name: 'Brett',
          designation: 'Software Engineer',
          company: [{
            id: 1,
            name: 'Apple1',
            date: 'Apr 20'
          }, {
            id: 2,
            name: 'Apple2',
            date: 'Apr 21'
          }, {
            id: 3,
            name: 'Apple3',
            date: 'Apr 22'
          }]
        }, {
          name: 'Steven',
          designation: 'Database Administrator',
          company: [{
            id: 3,
            name: 'Google1',
            date: 'Apr 25'
          }, {
            id: 3,
            name: 'Google2',
            date: 'Apr 26'
          }]
        }, {
          name: 'Jim',
          designation: 'Designer',
          company: [{
            id: 2,
            name: 'Facebook1',
            date: 'Apr 30'
          }]
        }];
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
      }

      _createClass(GoalsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "viewItem2",
        value: function viewItem2(com) {
          console.log(com);
        }
      }, {
        key: "viewItem1",
        value: function viewItem1(item) {
          console.log(item);
        }
      }]);

      return GoalsPage;
    }();

    GoalsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    GoalsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-goals',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./goals.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/goals/goals.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./goals.page.scss */
      "./src/app/goals/goals.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], GoalsPage);
    /***/
  }
}]);
//# sourceMappingURL=goals-goals-module-es5.js.map
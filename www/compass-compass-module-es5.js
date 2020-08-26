function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compass-compass-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/compass/compass.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compass/compass.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompassCompassPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #f09d2e;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"Medium\"> Compass</ion-title>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n  <div style=\"display: block; padding-top:20px;\">\n    <canvas id=\"yudhatp-chart\"  width=\"100\" height=\"100\"></canvas>\n  </div>\n\n  <form>\n    <ion-grid style=\"padding-left:30px; padding-top:20px;\" >\n      <ion-row > \n          <ion-col size=\"9\">\n            <ion-icon name=\"ellipse\" style=\"color: #296A85;\" class=\"icon\"></ion-icon>\n            <ion-label for=\"role-id\">Work</ion-label> \n          </ion-col>\n          <ion-col size=\"3\">\n             <ion-input class=\"box\"></ion-input>\n          </ion-col>\n      </ion-row>\n    <ion-row> \n      <ion-col size=\"9\" >\n         <ion-icon name=\"ellipse\" style=\"color: #31B5CE;\" class=\"icon\"></ion-icon>\n        <ion-label for=\"role-id\">Health</ion-label>  \n      </ion-col>\n      <ion-col size=\"3\">\n         <ion-input class=\"box\"></ion-input>\n      </ion-col>\n    </ion-row> \n    <ion-row> \n      <ion-col size=\"9\" >\n         <ion-icon name=\"ellipse\" style=\"color: #FFCE56;\" class=\"icon\"></ion-icon>\n         <ion-label for=\"role-id\">Home</ion-label>  \n      </ion-col>\n      <ion-col size=\"3\">\n         <ion-input class=\"box\"></ion-input>\n      </ion-col>\n    </ion-row> \n    <ion-row> \n      <ion-col size=\"9\" >\n         <ion-icon name=\"ellipse\" style=\"color: #316B3F;\" class=\"icon\"></ion-icon>\n        <ion-label for=\"role-id\">Finances</ion-label>  \n      </ion-col>\n      <ion-col size=\"3\">\n         <ion-input class=\"box\"></ion-input>\n      </ion-col>\n    </ion-row> \n    <ion-row> \n      <ion-col size=\"9\" >\n         <ion-icon name=\"ellipse\" style=\"color: #DAF7A6;\" class=\"icon\"></ion-icon>\n         <ion-label for=\"role-id\">Social</ion-label>   \n      </ion-col>\n      <ion-col size=\"3\">\n         <ion-input class=\"box\"></ion-input>\n      </ion-col>\n    </ion-row> \n    <ion-row> \n      <ion-col size=\"9\" >\n         <ion-icon name=\"ellipse\" style=\"color: #8331CE;\" class=\"icon\"></ion-icon>\n        <ion-label for=\"role-id\">Projects</ion-label>\n      </ion-col>\n      <ion-col size=\"3\">\n         <ion-input class=\"box\"></ion-input>\n      </ion-col>\n    </ion-row> \n    <ion-row> \n      <ion-col size=\"9\" >\n         <ion-icon name=\"ellipse\" style=\"color: #9ed127;\" class=\"icon\"></ion-icon>\n          <ion-label for=\"role-id\">Personal Development</ion-label>   \n      </ion-col>\n      <ion-col size=\"3\">\n         <ion-input class=\"box\"></ion-input>\n      </ion-col>\n    </ion-row> \n    <ion-row> \n      <ion-col size=\"9\" >\n         <ion-icon name=\"ellipse\" style=\"color: #2A3486;\" class=\"icon\"></ion-icon>\n          <ion-label for=\"role-id\">Mischellaneous</ion-label>   \n      </ion-col>\n      <ion-col size=\"3\">\n         <ion-input class=\"box\"></ion-input>\n      </ion-col>\n    </ion-row>    \n</ion-grid>\n<ion-row>\n   <ion-col size=\"9\">\n     <ion-label style=\"padding-left:50px; font-weight:bold; \">Overall Average</ion-label> \n   </ion-col>\n   <ion-col size=\"3\">\n      <ion-label style=\"padding-left:10px;\">3.5</ion-label>\n   </ion-col>  \n</ion-row>\n<ion-row style=\"padding-left: 20px; padding-right: 20px;\">\n   <ion-col>\n      <ion-input type=\"text\" class=\"form-control input-class\" placeholder=\"Add Comments\"></ion-input>\n   </ion-col>\n</ion-row>\n  <div style=\"text-align:center;\">\n    <ion-button\n            shape=\"round\"\n            size=\"medium\"\n            fill=\"solid\"\n            style=\"--background: #9ed127;\" \n            class=\"buttons;\"\n            >\n             <ion-icon style=\"color: white;\" name=\"add-circle\"></ion-icon>\n              &nbsp;&nbsp;Add</ion-button>\n  </div>\n  \n</form>\n<div class=\"col-12\" style=\"padding-top:20px;\">\n  <label style=\"padding-left:20px; \">History</label>\n</div>\n        <ion-card>\n           <div class=\"card\" style=\"max-height: 68vh;border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;\">\n              <div class=\"card-body\" style=\"padding: 10px 15px 10px 15px !important;overflow-y: auto\">\n                  <div class=\"col-12\" class=\"space\">\n                     <label>2020</label>\n                  </div>\n                 <div class=\"table-responsive\">\n                    \n                    <table >\n                       <tbody>\n                       <tr>\n                          <td style=\"vertical-align: middle;\" class=\"space\"  >Jun 26</td>\n                          <td class=\"space\" >Compliant from boss</td>                     \n                       </tr>\n                       <tr>\n                          <td style=\"vertical-align: middle;\" class=\"space\">Jun 19</td>\n                          <td class=\"space\">Compliant from boss</td>\n                       </tr>\n                       <tr>\n                          <td style=\"vertical-align: middle;\" class=\"space\">Jun 03 </td>\n                          <td class=\"space\">Compliant from boss</td>\n                       </tr>\n                    \n                       </tbody>\n                    </table>\n                 </div>\n                 <div class=\"col-6\" class=\"space\">\n                    <label>2019</label>\n                 </div>\n                 <div class=\"table-responsive\">\n                    <table  >\n                      <tbody>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 26</td>\n                           <td class=\"space\">Compliant from boss</td>\n                           <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td>                       -->\n                        </tr>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 19</td>\n                           <td class=\"space\">Compliant from boss</td>\n                           <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                        </tr>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 03 </td>\n                           <td class=\"space\">Compliant from boss</td>\n                           <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                        </tr>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 26</td>\n                           <td class=\"space\">Compliant from boss</td>\n                           <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td>                       -->\n                        </tr>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 19</td>\n                           <td class=\"space\">Compliant from boss</td>\n                           <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                        </tr>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 03 </td>\n                           <td class=\"space\">Compliant from boss</td>\n                           <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                        </tr>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 26</td>\n                           <td class=\"space\">Compliant from boss</td>\n                           <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td>                       -->\n                        </tr>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 19</td>\n                           <td class=\"space\">Compliant from boss</td>\n                           <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                        </tr>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 03 </td>\n                           <td class=\"space\">Compliant from boss</td>\n                           <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                        </tr>\n                      </tbody>\n                    </table>\n                 </div>\n              </div>\n           </div>\n       \n</ion-card>\n  \n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/compass/compass-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/compass/compass-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CompassPageRoutingModule */

  /***/
  function srcAppCompassCompassRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompassPageRoutingModule", function () {
      return CompassPageRoutingModule;
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


    var _compass_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./compass.page */
    "./src/app/compass/compass.page.ts");

    var routes = [{
      path: '',
      component: _compass_page__WEBPACK_IMPORTED_MODULE_3__["CompassPage"]
    }];

    var CompassPageRoutingModule = function CompassPageRoutingModule() {
      _classCallCheck(this, CompassPageRoutingModule);
    };

    CompassPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CompassPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/compass/compass.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/compass/compass.module.ts ***!
    \*******************************************/

  /*! exports provided: CompassPageModule */

  /***/
  function srcAppCompassCompassModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompassPageModule", function () {
      return CompassPageModule;
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


    var _compass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./compass-routing.module */
    "./src/app/compass/compass-routing.module.ts");
    /* harmony import */


    var _compass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./compass.page */
    "./src/app/compass/compass.page.ts");

    var CompassPageModule = function CompassPageModule() {
      _classCallCheck(this, CompassPageModule);
    };

    CompassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _compass_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompassPageRoutingModule"]],
      declarations: [_compass_page__WEBPACK_IMPORTED_MODULE_6__["CompassPage"]]
    })], CompassPageModule);
    /***/
  },

  /***/
  "./src/app/compass/compass.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/compass/compass.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompassCompassPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  /* background-color: #F3F3F3; */\n  box-shadow: 5px 5px 5px -5px inset;\n}\n\n.card1 {\n  /* background-color: #F3F3F3; */\n  box-shadow: 5px 10px 8px 10px inset;\n}\n\n.icon {\n  padding-right: 10px;\n  height: 12px;\n  width: 12px;\n}\n\n.space {\n  padding-left: 5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.box {\n  border-radius: 0px;\n  padding-left: 5px;\n  padding-right: 5px;\n  border: 1px solid #dee2e6;\n  width: 35px;\n  height: 20px;\n}\n\n.buttons {\n  height: 55px;\n  width: 140px;\n  font-size: 20px;\n  border-radius: 25px;\n  box-shadow: 5px 5px 15px -4px;\n  /* box-shadow:10px 10px 10px -10px inset; */\n  margin-right: 0px;\n  background-color: #9ed127;\n}\n\ntable, tr, td {\n  border: 1px solid #ddd;\n  text-align: left;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntr:hover {\n  border: 2px solid #1089CE;\n  color: #1089CE;\n  font-weight: bold;\n}\n\nth, td {\n  padding: 10px;\n}\n\n.input-class {\n  border: 1px solid #e98604;\n  min-height: 70px;\n  box-shadow: 3px 2px 7px -5px inset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFzcy9DOlxcVXNlcnNcXHZpbm9kXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxHb2FsIHNoYXBlclxcMTAtMDgtMjAyMFxcZ29hbC1zaGFwZXItbW9iaWxlLW1hc3Rlci9zcmNcXGFwcFxcY29tcGFzc1xcY29tcGFzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXBhc3MvY29tcGFzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FEQ0E7RUFDSSwrQkFBQTtFQUNBLG1DQUFBO0FDRUo7O0FEY0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDWEo7O0FEYUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNWSjs7QURjQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNYSjs7QURjQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNYSjs7QURjQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUNYSjs7QURjRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ1hKOztBRGNFO0VBQVUseUJBQUE7RUFBMEIsY0FBQTtFQUFnQixpQkFBQTtBQ1J0RDs7QURVRTtFQUNFLGFBQUE7QUNQSjs7QURnQkE7RUFFSSx5QkFBQTtFQUNBLGdCQUFBO0VBRUEsa0NBQUE7QUNmSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhc3MvY29tcGFzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7ICovXHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAtNXB4IGluc2V0O1xyXG59XHJcbi5jYXJkMXtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7ICovXHJcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCA4cHggMTBweCBpbnNldDtcclxufVxyXG5cclxuXHJcblxyXG4vLyB0YWJsZSwgdGR7XHJcbi8vICAgICBib3JkZXI6MXB4IHNvbGlkICNkZWUyZTY7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTY2KTtcclxuICAgIFxyXG4vLyB9XHJcbi8vIC50YWJsZSB7XHJcbi8vICAgICB3aWR0aDoxMDAlO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi5pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6MTJweDtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG59XHJcbi5zcGFjZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NXB4OyBcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG4uYm94IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2RlZTJlNjtcclxuICAgIHdpZHRoOjM1cHg7XHJcbiAgICBoZWlnaHQ6MjBweDtcclxufSAgIFxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggLTRweDtcclxuICAgIC8qIGJveC1zaGFkb3c6MTBweCAxMHB4IDEwcHggLTEwcHggaW5zZXQ7ICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzllZDEyNztcclxufVxyXG5cclxudGFibGUsIHRyLCB0ZCB7ICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIHRyOmhvdmVyIHtib3JkZXI6MnB4IHNvbGlkICMxMDg5Q0U7IGNvbG9yOiAjMTA4OUNFOyBmb250LXdlaWdodDogYm9sZDt9XHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuLy8gLmlucHV0LWNsYXNze1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiAjZTk4NjA0OyBcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDU1cHg7XHJcbi8vICAgICBib3gtc2hhZG93OjVweCA1cHggNXB4IC01cHggaW5zZXQgO1xyXG4vLyB9XHJcblxyXG4uaW5wdXQtY2xhc3N7XHJcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZTk4NjA0O1xyXG4gICAgbWluLWhlaWdodDogNzBweDtcclxuICAgIC8vIGJveC1zaGFkb3c6MTBweCAxMHB4IDEwcHggLTEwcHggaW5zZXQgO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDJweCA3cHggLTVweCBpbnNldDtcclxufSIsIi5jYXJkIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMzsgKi9cbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggLTVweCBpbnNldDtcbn1cblxuLmNhcmQxIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMzsgKi9cbiAgYm94LXNoYWRvdzogNXB4IDEwcHggOHB4IDEwcHggaW5zZXQ7XG59XG5cbi5pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTJweDtcbn1cblxuLnNwYWNlIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbnMge1xuICBoZWlnaHQ6IDU1cHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggLTRweDtcbiAgLyogYm94LXNoYWRvdzoxMHB4IDEwcHggMTBweCAtMTBweCBpbnNldDsgKi9cbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWQxMjc7XG59XG5cbnRhYmxlLCB0ciwgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50cjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMDg5Q0U7XG4gIGNvbG9yOiAjMTA4OUNFO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudGgsIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmlucHV0LWNsYXNzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ODYwNDtcbiAgbWluLWhlaWdodDogNzBweDtcbiAgYm94LXNoYWRvdzogM3B4IDJweCA3cHggLTVweCBpbnNldDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/compass/compass.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/compass/compass.page.ts ***!
    \*****************************************/

  /*! exports provided: CompassPage */

  /***/
  function srcAppCompassCompassPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompassPage", function () {
      return CompassPage;
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


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);

    var CompassPage = /*#__PURE__*/function () {
      function CompassPage() {
        _classCallCheck(this, CompassPage);
      }

      _createClass(CompassPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showChart();
        }
      }, {
        key: "showChart",
        value: function showChart() {
          var ctx = document.getElementById('yudhatp-chart').getContext('2d');
          var chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](ctx, {
            type: 'polarArea',
            data: {
              // labels: ["Miscellaneous", "Family", "Personal", "Health", "Friends", "Finance"],
              datasets: [{
                label: "This is chart",
                backgroundColor: ["#102a9e", "#7f0587", "#a80ceb", "#42055c", "#3abdb6", "#7cf578", "#164d14", "#d6d024"],
                data: [20, 15, 10, 35, 50, 40, 35, 50],
                borderWidth: 2
              }]
            }
          });
        }
      }]);

      return CompassPage;
    }();

    CompassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-compass',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./compass.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/compass/compass.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./compass.page.scss */
      "./src/app/compass/compass.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CompassPage);
    /***/
  }
}]);
//# sourceMappingURL=compass-compass-module-es5.js.map
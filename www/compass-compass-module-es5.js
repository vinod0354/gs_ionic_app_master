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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n   <ion-toolbar>\n     <ion-buttons slot=\"start\">\n       <ion-menu-button style=\"color: #f09d2e;\"></ion-menu-button>\n     </ion-buttons>\n     <ion-title color=\"Medium\"> Compass</ion-title>\n </ion-toolbar>\n </ion-header>\n <ion-content>\n   <div style=\"display: block; padding-top:20px;\">\n     <canvas id=\"yudhatp-chart\"  width=\"100\" height=\"100\"></canvas>\n   </div>\n \n   <form>\n     <ion-grid style=\"padding-left:30px; padding-top:20px;\" >\n       <ion-row > \n           <ion-col size=\"9\">\n             <ion-icon name=\"ellipse\" style=\"color: #296A85;\" class=\"icon\"></ion-icon>\n             <ion-label for=\"role-id\">Work</ion-label> \n           </ion-col>\n           <ion-col size=\"3\">\n              <ion-input class=\"box\"></ion-input>\n           </ion-col>\n       </ion-row>\n     <ion-row> \n       <ion-col size=\"9\" >\n          <ion-icon name=\"ellipse\" style=\"color: #31B5CE;\" class=\"icon\"></ion-icon>\n         <ion-label for=\"role-id\">Health</ion-label>  \n       </ion-col>\n       <ion-col size=\"3\">\n          <ion-input class=\"box\"></ion-input>\n       </ion-col>\n     </ion-row> \n     <ion-row> \n       <ion-col size=\"9\" >\n          <ion-icon name=\"ellipse\" style=\"color: #FFCE56;\" class=\"icon\"></ion-icon>\n          <ion-label for=\"role-id\">Home</ion-label>  \n       </ion-col>\n       <ion-col size=\"3\">\n          <ion-input class=\"box\"></ion-input>\n       </ion-col>\n     </ion-row> \n     <ion-row> \n       <ion-col size=\"9\" >\n          <ion-icon name=\"ellipse\" style=\"color: #316B3F;\" class=\"icon\"></ion-icon>\n         <ion-label for=\"role-id\">Finances</ion-label>  \n       </ion-col>\n       <ion-col size=\"3\">\n          <ion-input class=\"box\"></ion-input>\n       </ion-col>\n     </ion-row> \n     <ion-row> \n       <ion-col size=\"9\" >\n          <ion-icon name=\"ellipse\" style=\"color: #DAF7A6;\" class=\"icon\"></ion-icon>\n          <ion-label for=\"role-id\">Social</ion-label>   \n       </ion-col>\n       <ion-col size=\"3\">\n          <ion-input class=\"box\"></ion-input>\n       </ion-col>\n     </ion-row> \n     <ion-row> \n       <ion-col size=\"9\" >\n          <ion-icon name=\"ellipse\" style=\"color: #8331CE;\" class=\"icon\"></ion-icon>\n         <ion-label for=\"role-id\">Projects</ion-label>\n       </ion-col>\n       <ion-col size=\"3\">\n          <ion-input class=\"box\"></ion-input>\n       </ion-col>\n     </ion-row> \n     <ion-row> \n       <ion-col size=\"9\" >\n          <ion-icon name=\"ellipse\" style=\"color: #9ed127;\" class=\"icon\"></ion-icon>\n           <ion-label for=\"role-id\">Personal Development</ion-label>   \n       </ion-col>\n       <ion-col size=\"3\">\n          <ion-input class=\"box\"></ion-input>\n       </ion-col>\n     </ion-row> \n     <ion-row> \n       <ion-col size=\"9\" >\n          <ion-icon name=\"ellipse\" style=\"color: #2A3486;\" class=\"icon\"></ion-icon>\n           <ion-label for=\"role-id\">Mischellaneous</ion-label>   \n       </ion-col>\n       <ion-col size=\"3\">\n          <ion-input class=\"box\"></ion-input>\n       </ion-col>\n     </ion-row>    \n </ion-grid>\n <ion-row>\n    <ion-col size=\"9\">\n      <ion-label style=\"padding-left:50px; font-weight:bold; \">Overall Average</ion-label> \n    </ion-col>\n    <ion-col size=\"3\">\n       <ion-label style=\"padding-left:10px;\">3.5</ion-label>\n    </ion-col>  \n </ion-row>\n <ion-row style=\"padding-left: 20px; padding-right: 20px;\">\n    <ion-col>\n       <ion-input type=\"text\" class=\"form-control input-class\" placeholder=\"Add Comments\"></ion-input>\n    </ion-col>\n </ion-row>\n   <div style=\"text-align:center;\" class=\"ion-margin-top\">\n     <ion-button\n             shape=\"round\"\n             \n             class=\"buttons action-btn\"\n             >\n              <ion-icon style=\"color: white;\" name=\"add-circle\"></ion-icon>\n               &nbsp;&nbsp;Add</ion-button>\n   </div>\n   \n </form>\n <div class=\"col-12\" style=\"padding-top:20px;\">\n   <label style=\"padding-left:20px; \">History</label>\n </div>\n         <ion-card>\n            <div class=\"card\" style=\"max-height: 68vh;border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; overflow-x: hidden;\">\n               <div class=\"card-body\" style=\"padding: 10px 15px 10px 15px !important;overflow-y: auto\">\n                   <div class=\"col-12\" class=\"space\">\n                      <label>2020</label>\n                   </div>\n                  <div class=\"table-responsive\">\n                     \n                     <table >\n                        <tbody>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\"  >Jun 26</td>\n                           <td class=\"space\" >Compliant from boss</td>                     \n                        </tr>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 19</td>\n                           <td class=\"space\">Compliant from boss</td>\n                        </tr>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 03 </td>\n                           <td class=\"space\">Compliant from boss</td>\n                        </tr>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 26</td>\n                           <td class=\"space\">Compliant from boss</td>\n                           <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td>                       -->\n                        </tr>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 19</td>\n                           <td class=\"space\">Compliant from boss</td>\n                           <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                        </tr>\n                        <tr>\n                           <td style=\"vertical-align: middle;\" class=\"space\">Jun 03 </td>\n                           <td class=\"space\">Compliant from boss</td>\n                           <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                        </tr>\n                        </tbody>\n                     </table>\n                  </div>\n                  <div class=\"col-6\" class=\"space\">\n                     <label>2019</label>\n                  </div>\n                  <div class=\"table-responsive\">\n                     <table  >\n                       <tbody>\n                         <tr>\n                            <td style=\"vertical-align: middle;\" class=\"space\">Jun 26</td>\n                            <td class=\"space\">Compliant from boss</td>\n                            <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td>                       -->\n                         </tr>\n                         <tr>\n                            <td style=\"vertical-align: middle;\" class=\"space\">Jun 19</td>\n                            <td class=\"space\">Compliant from boss</td>\n                            <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                         </tr>\n                         <tr>\n                            <td style=\"vertical-align: middle;\" class=\"space\">Jun 03 </td>\n                            <td class=\"space\">Compliant from boss</td>\n                            <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                         </tr>\n                         <tr>\n                            <td style=\"vertical-align: middle;\" class=\"space\">Jun 26</td>\n                            <td class=\"space\">Compliant from boss</td>\n                            <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td>                       -->\n                         </tr>\n                         <tr>\n                            <td style=\"vertical-align: middle;\" class=\"space\">Jun 19</td>\n                            <td class=\"space\">Compliant from boss</td>\n                            <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                         </tr>\n                         <tr>\n                            <td style=\"vertical-align: middle;\" class=\"space\">Jun 03 </td>\n                            <td class=\"space\">Compliant from boss</td>\n                            <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                         </tr>\n                         <tr>\n                            <td style=\"vertical-align: middle;\" class=\"space\">Jun 26</td>\n                            <td class=\"space\">Compliant from boss</td>\n                            <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td>                       -->\n                         </tr>\n                         <tr>\n                            <td style=\"vertical-align: middle;\" class=\"space\">Jun 19</td>\n                            <td class=\"space\">Compliant from boss</td>\n                            <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                         </tr>\n                         <tr>\n                            <td style=\"vertical-align: middle;\" class=\"space\">Jun 03 </td>\n                            <td class=\"space\">Compliant from boss</td>\n                            <!-- <td> <i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></td> -->\n                         </tr>\n                       </tbody>\n                     </table>\n                  </div>\n               </div>\n            </div>\n        \n </ion-card>\n   \n </ion-content>\n \n ";
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


    __webpack_exports__["default"] = ".card {\n  /* background-color: #F3F3F3; */\n  box-shadow: 5px 5px 5px -5px inset;\n  overflow: scroll;\n}\n\n.card1 {\n  /* background-color: #F3F3F3; */\n  box-shadow: 5px 10px 8px 10px inset;\n}\n\n.icon {\n  padding-right: 10px;\n  height: 12px;\n  width: 12px;\n}\n\n.space {\n  padding-left: 5px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.box {\n  border-radius: 0px;\n  padding-left: 5px;\n  padding-right: 5px;\n  border: 1px solid #dee2e6;\n  width: 35px;\n  height: 20px;\n}\n\ntable, tr, td {\n  border: 1px solid #ddd;\n  text-align: left;\n}\n\ntable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\ntr:hover {\n  border: 2px solid #1089CE;\n  color: #1089CE;\n  font-weight: bold;\n}\n\nth, td {\n  padding: 10px;\n}\n\n.input-class {\n  border: 1px solid #e98604;\n  min-height: 70px;\n  box-shadow: 3px 2px 7px -5px inset;\n}\n\n/* width */\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: linear-gradient(114deg, #c354a3 22%, #3668a4 82%);\n  border-radius: 10px;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #1089CE;\n}\n\n.action-btn {\n  width: 175px;\n  height: 72px;\n  font-size: 15px;\n  font-weight: bold;\n  --background: #9ac81b;\n  --box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3), 0 -6px 12px 0 rgba(255, 255, 255, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFzcy9DOlxcVXNlcnNcXHZpbm9kXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxHb2FsIHNoYXBlclxcMTAtMDgtMjAyMFxcZ29hbC1zaGFwZXItbW9iaWxlLW1hc3Rlci9zcmNcXGFwcFxcY29tcGFzc1xcY29tcGFzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXBhc3MvY29tcGFzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLCtCQUFBO0VBQ0EsbUNBQUE7QUNFSjs7QURjQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNYSjs7QURhQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ1ZKOztBRGNBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1hKOztBRGNBO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtBQ1hKOztBRGNFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDWEo7O0FEY0U7RUFBVSx5QkFBQTtFQUEwQixjQUFBO0VBQWdCLGlCQUFBO0FDUnREOztBRFVFO0VBQ0UsYUFBQTtBQ1BKOztBRGdCQTtFQUVJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQ0FBQTtBQ2ZKOztBRGtCRSxVQUFBOztBQUNBO0VBQ0UsV0FBQTtBQ2ZKOztBRGtCRSxVQUFBOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ2ZKOztBRGtCRSxXQUFBOztBQUNBO0VBQ0UsNkRBQUE7RUFDQSxtQkFBQTtBQ2ZKOztBRG1CRSxvQkFBQTs7QUFDQTtFQUNFLG1CQUFBO0FDaEJKOztBRG1CRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxRkFBQTtBQ2hCSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhc3MvY29tcGFzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7ICovXHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAtNXB4IGluc2V0O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG4uY2FyZDF7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGM0YzOyAqL1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggOHB4IDEwcHggaW5zZXQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gdGFibGUsIHRke1xyXG4vLyAgICAgYm9yZGVyOjFweCBzb2xpZCAjZGVlMmU2O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2Nik7XHJcbiAgICBcclxuLy8gfVxyXG4vLyAudGFibGUge1xyXG4vLyAgICAgd2lkdGg6MTAwJTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4uaWNvbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OjEycHg7XHJcbiAgICB3aWR0aDogMTJweDtcclxufVxyXG4uc3BhY2Uge1xyXG4gICAgcGFkZGluZy1sZWZ0OjVweDsgXHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDo1cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICB3aWR0aDozNXB4O1xyXG4gICAgaGVpZ2h0OjIwcHg7XHJcbn0gICBcclxuXHJcbnRhYmxlLCB0ciwgdGQgeyAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0cjpob3ZlciB7Ym9yZGVyOjJweCBzb2xpZCAjMTA4OUNFOyBjb2xvcjogIzEwODlDRTsgZm9udC13ZWlnaHQ6IGJvbGQ7fVxyXG4gIFxyXG4gIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbi8vIC5pbnB1dC1jbGFzc3tcclxuLy8gICAgIGJvcmRlci1jb2xvcjogI2U5ODYwNDsgXHJcbi8vICAgICBtaW4taGVpZ2h0OiA1NXB4O1xyXG4vLyAgICAgYm94LXNoYWRvdzo1cHggNXB4IDVweCAtNXB4IGluc2V0IDtcclxuLy8gfVxyXG5cclxuLmlucHV0LWNsYXNze1xyXG4gICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2U5ODYwNDtcclxuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgICAvLyBib3gtc2hhZG93OjEwcHggMTBweCAxMHB4IC0xMHB4IGluc2V0IDtcclxuICAgIGJveC1zaGFkb3c6IDNweCAycHggN3B4IC01cHggaW5zZXQ7XHJcbn1cclxuXHJcbiAgLyogd2lkdGggKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBUcmFjayAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5OyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gICBcclxuICAvKiBIYW5kbGUgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTRkZWcsICNjMzU0YTMgMjIlLCAjMzY2OGE0IDgyJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzEwODlDRTsgXHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLWJ0biB7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC0tYmFja2dyb3VuZDogIzlhYzgxYjtcclxuICAgIC0tYm94LXNoYWRvdzogMCA2cHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAtNnB4IDEycHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn0iLCIuY2FyZCB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7ICovXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IC01cHggaW5zZXQ7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5jYXJkMSB7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNGM0YzRjM7ICovXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDhweCAxMHB4IGluc2V0O1xufVxuXG4uaWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDEycHg7XG59XG5cbi5zcGFjZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5ib3gge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbnRhYmxlLCB0ciwgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50cjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxMDg5Q0U7XG4gIGNvbG9yOiAjMTA4OUNFO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudGgsIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmlucHV0LWNsYXNzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ODYwNDtcbiAgbWluLWhlaWdodDogNzBweDtcbiAgYm94LXNoYWRvdzogM3B4IDJweCA3cHggLTVweCBpbnNldDtcbn1cblxuLyogd2lkdGggKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTRkZWcsICNjMzU0YTMgMjIlLCAjMzY2OGE0IDgyJSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxMDg5Q0U7XG59XG5cbi5hY3Rpb24tYnRuIHtcbiAgd2lkdGg6IDE3NXB4O1xuICBoZWlnaHQ6IDcycHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC0tYmFja2dyb3VuZDogIzlhYzgxYjtcbiAgLS1ib3gtc2hhZG93OiAwIDZweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIC02cHggMTJweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn0iXX0= */";
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
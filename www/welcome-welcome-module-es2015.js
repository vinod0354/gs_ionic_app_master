(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #F09D2E;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"Medium\"> Welcome</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content mode='ios' fullscreen>\n\n    <ion-grid>\n\n\n      <ion-row>\n        <ion-col style=\"text-align: center; margin-top: 10%;\">\n          <img src=\"assets/icon/GoalShaper-Logo.png\" style=\"width:180px; margin:10px; padding: 0 auto;\"/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin:0px 8px 0px 8px\">\n        <ion-col style=\"text-align: left\">\n          <h2>Boost your productivity by adding Goals Objectives and Actions.</h2>\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row style=\"border-bottom: gray 1px solid; margin: 0px 8px 10px 8px\" class=\"ion-padding-bottom\">\n        <ion-col size=\"9\" style=\"margin-bottom:10px\">\n          <h4>Goals & Milestones</h4>\n          <p>Specific outcomes to be achieved and a timeframe to reach them.</p>\n        </ion-col>\n        <ion-col size=\"3\" (click)=\"goto_goals()\">\n          <img style=\"width:85%; float:right\" src=\"assets/icon/icons_plus.png\" alt=\"\"/>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"border-bottom: gray 1px solid; margin: 0px 8px 10px 8px\" class=\"ion-padding-bottom ion-padding-top\">\n        <ion-col size=\"9\" style=\"margin-bottom:10px\">\n          <h4>Objectives</h4>\n          <p>Your near-term targets.</p>\n        </ion-col>\n        <ion-col size=\"3\" (click)=\"goto_objectives()\">\n          <img style=\"width:85%;  float:right\" src=\"assets/icon/icons_plus.png\" alt=\"\"/>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\" margin: 0px 8px 10px 8px\" class=\"ion-padding-top\">\n        <ion-col size=\"9\" style=\"margin-bottom:10px\">\n          <h4>Actions</h4>\n          <p>Small, bite sized and achievable.</p>\n        </ion-col>\n        <ion-col size=\"3\" (click)=\"goto_actions()\">\n          <img style=\"width:85%;  float:right\" src=\"assets/icon/icons_plus.png\" alt=\"\"/>\n        </ion-col>\n      </ion-row>\n      \n        <!-- <ion-row  style=\"text-align: left;\">\n          <ion-col>\n\n              <ion-list>\n\n                  <ion-item style=\"text-align: center;\" lines=\"none\">\n                      <ion-label class=\"ion-text-wrap\"> \n                          <img src=\"assets/icon/GoalShaper-Logo.png\" style=\"width:180px; margin: 0 auto; padding: 0 auto;\" />\n                        </ion-label>\n                    </ion-item>\n                    \n\n                  <ion-item lines=\"none\">\n                      <ion-label class=\"ion-text-wrap\"> \n                        <h2 style=\"font-size: 16px;\">Boost your productivity by adding Goals Objectives and Actions.</h2>\n                      </ion-label>\n                    </ion-item>\n                    &nbsp;\n\n                    \n\n                  <ion-item>\n                    <ion-avatar slot=\"end\">\n                      <img  src=\"./assets/icon/icons_plus.png\">\n                    </ion-avatar>\n                    <ion-label class=\"ion-text-wrap\">\n                      <h2 style=\"font-size: 16px;\">Golas & milestones</h2>\n                      <p>Specific outcomes to be achieved and a timeframe to reach them.</p>\n                    </ion-label>\n                  </ion-item>\n\n                  <ion-item>\n                      <ion-avatar slot=\"end\">\n                        <img src=\"./assets/icon/icons_plus.png\">\n                      </ion-avatar>\n                      <ion-label class=\"ion-text-wrap\">\n                        <h2 style=\"font-size: 16px;\">Objectives</h2>\n                        <p>Your near-term targets.</p>\n                      </ion-label>\n                    </ion-item>\n\n                    <ion-item lines=\"none\">\n                        <ion-avatar slot=\"end\">\n                          <img src=\"./assets/icon/icons_plus.png\">\n                        </ion-avatar>\n                        <ion-label class=\"ion-text-wrap\">\n                          <h2 style=\"font-size: 16px;\">Actions</h2>\n                          <p>Small, bite sized and achievable.</p>\n                        </ion-label>\n                      </ion-item>\n               </ion-list>\n             \n          </ion-col>\n        </ion-row> -->\n      </ion-grid>\n\n  \n \n   \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/welcome/welcome-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/welcome/welcome-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/welcome/welcome-routing.module.ts");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h4 {\n  margin: 0px;\n}\n\np {\n  margin: 5px 0px 0px 0px;\n}\n\nion-row {\n  --border-bottom: black 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1ByYWN0aWNlL0dpdEh1Yi9nb2FsLXNoYXBlci1tb2JpbGUvc3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBRENBO0VBQ0ksdUJBQUE7QUNFSjs7QURDQTtFQUNJLGdDQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDR7XG4gICAgbWFyZ2luOjBweDtcbn1cbnB7XG4gICAgbWFyZ2luOjVweCAwcHggMHB4IDBweDtcbn1cblxuaW9uLXJvd3tcbiAgICAtLWJvcmRlci1ib3R0b206IGJsYWNrIDFweCBzb2xpZDtcbn0iLCJoNCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiA1cHggMHB4IDBweCAwcHg7XG59XG5cbmlvbi1yb3cge1xuICAtLWJvcmRlci1ib3R0b206IGJsYWNrIDFweCBzb2xpZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/globals.service */ "./src/app/services/globals.service.ts");






let WelcomePage = class WelcomePage {
    constructor(globals, storage, route, apiService) {
        this.globals = globals;
        this.storage = storage;
        this.route = route;
        this.apiService = apiService;
        this.storage.getItem('enterprisedId').then((result) => {
            console.log(result);
            if (result) {
                this.globals.enterprisedId = result;
            }
        });
        this.storage.getItem('userId').then((result) => {
            console.log(result);
            if (result) {
                this.globals.userId = result;
            }
        });
    }
    ngOnInit() {
    }
    goto_goals() {
        console.log("Go to goals hot clicked...");
        let navigationExtras = {
            queryParams: {
                special: 'goals'
            }
        };
        this.route.navigate(['/goalsobjective'], navigationExtras);
    }
    goto_objectives() {
        console.log("Go to Objectives hot clicked...");
        let navigationExtras = {
            queryParams: {
                special: 'objectives'
            }
        };
        this.route.navigate(['/goalsobjective'], navigationExtras);
    }
    goto_actions() {
        this.route.navigate(['/actions']);
    }
};
WelcomePage.ctorParameters = () => [
    { type: _services_globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"] }
];
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module-es2015.js.map
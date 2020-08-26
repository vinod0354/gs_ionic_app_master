(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content mode=\"ios\" class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\" style=\"margin-top: 20%;\">\n        <img\n              src=\"assets/icon/GoalShaper-Logo.png\"\n              style=\"width: 240px; margin: 0 auto; padding: 0 auto;\"\n            />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <ion-text>\n          <h4>Change Password</h4>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <form (ngSubmit)=\"fp.form.valid && onSubmit()\" #fp=\"ngForm\">\n    <ion-item style=\"margin-top: 10px;\">\n      <ion-input\n        style=\"color: black;\"\n        name=\"password\"\n        type=\"password\"\n        placeholder=\"Current Password\"\n        [(ngModel)]=\"current_password\" name=\"current_password_\" #current_password_=\"ngModel\"\n        required\n      ></ion-input>\n    </ion-item>\n    <ion-item style=\"margin-top: 10px;\">\n      <ion-input\n        style=\"color: black;\"\n        name=\"password\"\n        type=\"password\"\n        placeholder=\"New Password\"\n        [(ngModel)]=\"new_password\" name=\"new_password_\" #new_password_=\"ngModel\"\n        required\n      ></ion-input>\n    </ion-item>\n    <ion-item style=\"margin-top: 10px;\">\n      <ion-input\n        style=\"color: black;\"\n        name=\"password\"\n        type=\"password\"\n        placeholder=\"Confirm Password\"\n        [(ngModel)]=\"confirm_password\"  name=\"confirm_password_\" #confirm_password_=\"ngModel\"\n        required\n      ></ion-input>\n    </ion-item>\n  </form>\n</ion-content>\n\n<ion-footer style=\"border-top: solid 1px lightgray;\">\n  <ion-grid>\n    <ion-row class=\"ion-text-center\">\n      <ion-col size=\"6\">\n        <ion-item lines=\"none\" (click)=\"onSubmit()\" style=\"text-align: center; font-weight:bold; background:transparent; border-bottom-left-radius:15px; border-right:solid 1px #dcdcdc;    width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: #039CD9;margin-left: 16px;\" name=\"checkmark-outline\"></ion-icon>\n          <ion-text  style=\"color: #039CD9; font-weight: bold;\" class=\"ion-margin-start\">Save</ion-text>\n      </ion-item>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-item lines=\"none\" tappable (click)=\"closemodal();\" style=\"font-weight:bold; background:transparent; border-bottom-right-radius:15px;  margin:0 auto;  width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: red; margin-left: 10px;\" name=\"close-circle-outline\"></ion-icon>\n          <ion-text style=\"color: red; font-weight: bold;\" class=\"ion-margin-start\">Cancel</ion-text>\n      </ion-item>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/change-password/change-password-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/change-password/change-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function() { return ChangePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/change-password/change-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-routing.module */ "./src/app/change-password/change-password-routing.module.ts");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");







let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"]
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ "./src/app/change-password/change-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/change-password/change-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/change-password/change-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/globals.service */ "./src/app/services/globals.service.ts");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");







let ChangePasswordPage = class ChangePasswordPage {
    constructor(modal, route, apiServcie, global, storage, alertController) {
        this.modal = modal;
        this.route = route;
        this.apiServcie = apiServcie;
        this.global = global;
        this.storage = storage;
        this.alertController = alertController;
        this.current_password = null;
        this.new_password = null;
        this.confirm_password = null;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.username = localStorage.getItem('username');
        let cpwdObj = {
            "username": this.username,
            "oldPassword": this.current_password,
            "newPassword": this.new_password
        };
        this.apiServcie.changePassword(cpwdObj).subscribe((result) => {
            console.log(result.body);
            this.global.hideLoading();
            if (result.status == 200) {
                this.presentAlertConfirm();
            }
        });
        console.log(cpwdObj);
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Password Changed Successfully.',
                message: 'You will be redirected to login page.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'yes',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.storage.remove('login');
                            this.storage.remove('userId');
                            this.storage.remove('enterprisedId');
                            this.route.navigateByUrl('/login');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    closemodal() {
        this.route.navigate(['/welcome']);
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"] },
    { type: _services_globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.page.scss */ "./src/app/change-password/change-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"], _services_globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], ChangePasswordPage);



/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module-es2015.js.map
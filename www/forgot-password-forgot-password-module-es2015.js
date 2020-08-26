(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <form #form=\"ngForm\" (ngSubmit)=\"password(form)\" style=\"margin-top: 25%; height: 50%;\">\n    <ion-grid>\n      <ion-row justify-content-center style=\"text-align: center;\">\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <img\n              src=\"assets/icon/GoalShaper-Logo.png\"\n              style=\"width: 240px; margin: 0 auto; padding: 0 auto;\"\n            />\n          </div>\n          <br /><br /><br />\n          <!-- <ion-row class=\"ion-no-padding\">\n            <ion-col>\n              <p> Enter the Email-address associated with your GoalShaper account.</p>\n            </ion-col>\n          </ion-row> -->\n          <div padding>\n            <p> Enter the Email-address associated with your GoalShaper account.</p>\n            <ion-item class=\"ion-padding-top\">\n              <ion-icon style=\"color: #f09d2e;\" name=\"person\"></ion-icon>\n              &nbsp;&nbsp;\n              <ion-input\n                style=\"color: black;\"\n                name=\"username\"\n                type=\"email\"\n                placeholder=\"Username\"\n                [(ngModel)]=\"resetpassword.username\"\n                #username = \"ngModel\"\n                \n                required\n              ></ion-input>\n            </ion-item>\n            <br />\n          </div>\n          <div padding style=\"margin-top: 5%;\">\n            <ion-button\n              shape=\"round\"\n              size=\"medium\"\n              fill=\"solid\"\n              style=\"--background: #f09d2e;\"\n              type=\"submit\"\n              [disabled]=\"form.invalid\"\n              >Continue</ion-button\n            >\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <ion-grid style=\"margin-top: 35%;\">\n    <ion-row class=\"ion-text-center\">\n      <ion-col>\n        <!-- <ion-text (click)=\"gotoForgotPasswordPage()\" color=\"light\">\n          Forgot Password?\n        </ion-text> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function() { return ForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url(\"/assets/login.svg\") no-repeat center/cover fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0M6XFxVc2Vyc1xcdmlub2RcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdvYWwgc2hhcGVyXFwxMC0wOC0yMDIwXFxnb2FsLXNoYXBlci1tb2JpbGUtbWFzdGVyL3NyY1xcYXBwXFxmb3Jnb3QtcGFzc3dvcmRcXGZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2xvZ2luLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyL2NvdmVyIGZpeGVkO1xyXG4gIH1cclxuICAiLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9sb2dpbi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-services.service */ "./src/app/services/api-services.service.ts");





let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(route, alertcontroller, apiServcie) {
        this.route = route;
        this.alertcontroller = alertcontroller;
        this.apiServcie = apiServcie;
        this.resetpassword = { 'username': '' };
    }
    ngOnInit() {
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertcontroller.create({
                header: 'Confirmation!',
                message: 'Password has been sent to registered E-mail address',
                buttons: ['Done'],
                cssClass: 'custom-modal',
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
            console.log(result);
            this.route.navigate(['/login']);
        });
    }
    password() {
        this.apiServcie.forgotpassword(this.resetpassword.username)
            .subscribe((resData) => {
            console.log(resData);
            if (resData.status == 200) {
                console.log(resData);
                this.presentAlert();
                // this.route.navigate(['/login']);
            }
        });
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"] }
];
ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"]])
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button style=\"color: #f09d2e;\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title color=\"Medium\"> Profile</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content  mode=\"ios\">\n\n<!-- <form onsubmit=\"processForm(event)\"> -->\n\n    <ion-list class=\"ion-no-margin ion-no-padding\" lines=\"none\">\n        <ion-item>\n          <ion-label style=\"font-size: 16px;\" position=\"stacked\">User Name</ion-label>\n          <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"username\" oninput=\"handleFirstNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label style=\"font-size: 16px;\" position=\"stacked\">Role </ion-label>\n          <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"rolename\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">First Name </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"firstname\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Last Name </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"lastname\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Email </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"email\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Designation </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"designation\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Employee Id </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"employeeid\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Phone Number </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"phonenumber\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n        \n\n\n</ion-list>\n\n<!-- </form> -->\n\n  \n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".roundedInput {\n  --border-radius: 5px;\n  --box-shadow: 2px gray;\n  --background: #f8f9fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1ByYWN0aWNlL0dpdEh1Yi9nb2FsLXNoYXBlci1tb2JpbGUvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksb0JBQUE7RUFFQSxzQkFBQTtFQUVBLHFCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucm91bmRlZElucHV0IHtcbiAgICAvLyAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLy8gLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWJveC1zaGFkb3c6IDJweCBncmF5O1xuICAgIC8vIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAtLWJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICB9IiwiLnJvdW5kZWRJbnB1dCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJveC1zaGFkb3c6IDJweCBncmF5O1xuICAtLWJhY2tncm91bmQ6ICNmOGY5ZmE7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/globals.service */ "./src/app/services/globals.service.ts");
/* harmony import */ var _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-services.service */ "./src/app/services/api-services.service.ts");





let ProfilePage = class ProfilePage {
    constructor(storage, global, apiService) {
        this.storage = storage;
        this.global = global;
        this.apiService = apiService;
        this.username = '';
        this.lastname = '';
        this.firstname = '';
        this.email = '';
        this.rolename = '';
        this.designation = '';
        this.employeeid = '';
        this.phonenumber = '';
        this.storage.getItem('userdeatils').then(data => {
            this.currentUserInfo = data.user;
            this.username = this.currentUserInfo.user_name;
            this.firstname = this.currentUserInfo.firstname;
            this.lastname = this.currentUserInfo.lastname;
            this.email = this.currentUserInfo.email;
            this.rolename = this.currentUserInfo.role_name;
            this.designation = this.currentUserInfo.designation;
            this.employeeid = this.currentUserInfo.employee_id;
            this.phonenumber = this.currentUserInfo.phone_number;
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
    closemodal(type) {
        var dict = {};
        dict["username"] = this.username;
        dict["firstname"] = this.firstname;
        dict["lastname"] = this.lastname;
        dict["email"] = this.email;
        dict["role_id"] = this.currentUserInfo.role_id;
        dict["enterprise_id"] = this.global.enterprisedId;
        dict["designation"] = this.designation;
        dict["employee_id"] = this.employeeid;
        dict["phone_number"] = this.phonenumber;
        this.global.showLoading();
        this.apiService.updateUserProfile(this.global.userId, dict).subscribe((result) => {
            this.global.hideLoading();
            console.log(this.saveData.user);
            if (result.status == 200) {
                this.global.presentAlert("", "Profile Updated Successfully", "");
                // this.saveData.user.user_name = this.username;
                this.saveData.user.firstname = this.firstname;
                this.saveData.user.lastname = this.lastname;
                this.saveData.user.email = this.email;
                this.saveData.user.designation = this.designation;
                this.saveData.user.employee_id = this.employeeid;
                this.saveData.user.phone_number = this.phonenumber;
                console.log(this.saveData.user);
                console.log(this.saveData.user.phone_number);
                this.storage.setItem('userdeatils', this.saveData);
            }
            else {
            }
        }, (error) => {
            this.global.hideLoading();
            console.log(error);
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"] },
    { type: _services_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"] },
    { type: _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"], _services_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"], _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map
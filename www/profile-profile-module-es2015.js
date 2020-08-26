(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button style=\"color: #f09d2e;\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title color=\"Medium\"> Profile</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content style=\"text-align: center;\"  mode=\"ios\">\n\n<!-- <form onsubmit=\"processForm(event)\"> -->\n  <br><br>\n  <img src=\"{{ profilephoto }}\"  style=\"width:90px; height:90px; border-radius:90px;\" alt=\"Profile Image\">\n  <br><br>\n  <a style=\"text-align: center; text-decoration: underline; color: black; border-bottom: solid 1px black;\" (click)=\"presentActionSheet()\">Edit</a>\n\n    <!-- <img src=\"{{ profilephoto }}\" (click)=\"presentActionSheet()\" width=\"20%\" height=\"20%\" alt=\"Profile Image\"> -->\n    <ion-list class=\"ion-no-margin ion-no-padding\" lines=\"none\">\n        <ion-item>\n          <ion-label style=\"font-size: 16px;\" position=\"stacked\">User Name</ion-label>\n          <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required disabled  type=\"text\" [(ngModel)]=\"username\" oninput=\"handleFirstNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label style=\"font-size: 16px;\" position=\"stacked\">Role </ion-label>\n          <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required disabled type=\"text\" [(ngModel)]=\"rolename\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">First Name </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required  type=\"text\" [(ngModel)]=\"firstname\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Last Name </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required  type=\"text\" [(ngModel)]=\"lastname\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Email </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required  type=\"text\" [(ngModel)]=\"email\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Designation </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required  type=\"text\" [(ngModel)]=\"designation\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Employee Id </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required  type=\"text\" [(ngModel)]=\"employeeid\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Phone Number </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required  type=\"text\" [(ngModel)]=\"phonenumber\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n    </ion-list>\n    <!-- <br><br> -->\n\n    <!-- <ion-grid>\n        <ion-row class=\"ion-align-items-center\" style=\"margin:0px;padding:0px\">\n          <ion-col class=\"ion-align-self-center\" style=\"margin:0px;padding:0px\">\n            <ion-chip style=\"background-color: #f09d2e;\" (click)=\"saveProfileData()\">\n                <ion-icon style=\"color: #039CD9;\" name=\"checkmark-outline\"></ion-icon>\n                <ion-label style=\"font-weight: bold; font-size: 16px; color: #039CD9;\">Update</ion-label>\n            </ion-chip>\n          </ion-col>\n        </ion-row>\n    </ion-grid> -->\n  \n\n<!-- </form> -->\n\n</ion-content>\n\n  \n<!-- <ion-footer class=\"ion-align-items-center\" style=\"border-top: solid 1px lightgray;\">\n  <ion-grid>\n      <ion-row class=\"bar bar-footer bar-light footer-buttons\">\n        <ion-col class=\"bar bar-footer bar-light footer-buttons\" size=\"12\">\n          <ion-item class=\"ion-align-items-center\" lines=\"none\" (click)=\"closemodal('SAVE');\" style=\"text-align: center; font-weight:bold; background:transparent; width:100%;  text-align:center !important; height:50px\">\n            <ion-icon style=\"color: #039CD9;\" name=\"checkmark-outline\"></ion-icon>\n            <ion-text  style=\"color: #039CD9; font-weight: bold;\" class=\"ion-margin-start\">Save</ion-text>\n        </ion-item>\n        </ion-col>\n       \n      </ion-row>\n    </ion-grid>\n\n</ion-footer> -->\n\n<!-- <ion-footer  style=\"text-align: center; border-top: solid 1px lightgray; background-color: white;\">\n    <ion-grid>\n      <ion-row class=\"bar bar-footer bar-light footer-buttons\" style=\"margin:0px;padding:0px\" >\n        <ion-col class=\"bar bar-footer bar-light footer-buttons\" style=\"margin:0px;padding:0px\">\n          <ion-chip  (click)=\"saveProfileData()\">\n            <ion-icon style=\"font-weight: bold;color: #039CD9;\" name=\"checkmark-outline\"></ion-icon>\n            <ion-label style=\"font-weight: bold; color: #039CD9;\">Save</ion-label>\n          </ion-chip>\n          <ion-item lines=\"none\" (click)=\"closemodal('SAVE');\" style=\"text-align: center; font-weight:bold; background:transparent;  width:100%;  text-align:center; height:50px\">\n            <ion-icon style=\"color: #039CD9;\" name=\"checkmark-outline\"></ion-icon>\n            <ion-text  style=\"color: #039CD9; font-weight: bold;\" class=\"ion-margin-start\">Save</ion-text>\n        </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-footer> -->\n\n<!-- <ion-footer>\n  <ion-grid >\n    <ion-row class=\"ion-align-items-center\" style=\"margin:0px;padding:0px\" >\n      <ion-col class=\"ion-align-self-center\" style=\"margin:0px;padding:0px\" >\n        <ion-text color=\"dark\">\n          <h4 style=\"text-align: center;  font-size: 16px;\" (click)=\"closeModal()\">Cancel</h4>\n        </ion-text>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\" style=\"margin:0px;padding:0px\">\n        <ion-text color=\"primary\">\n          <h4 style=\"text-align: center; font-weight: bold; font-size: 16px;\" (click)=\"saveProfileData()\">Save</h4>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer> -->\n\n<ion-footer style=\"border-top: solid 1px lightgray; background-color: white;\">\n  <ion-grid>\n      <ion-row class=\"ion-text-center\">\n\n        <ion-col  size=\"4\" lines=\"none\"  >\n          <ion-item lines=\"none\" tappable  (click)=\"saveProfileData();\"  style=\"font-weight:bold; background:transparent; width:100%;   text-align:center; height:50px\">\n        </ion-item>\n        </ion-col>\n\n        <ion-col   style=\"text-align: center !important;\" size=\"4\" lines=\"none\"  >\n          <ion-item class=\"cen\" lines=\"none\" tappable (click)=\"saveProfileData();\" style=\"font-weight:bold; background-color: white; background:transparent; width:100%;  text-align:center !important; height:50px\">\n            <ion-icon style=\"color: #039CD9; font-weight: bold;\" name=\"checkmark-outline\"></ion-icon>\n            <ion-text style=\"color: #039CD9; font-weight: bold;\" >Save</ion-text>\n        </ion-item>\n        </ion-col>\n\n        <ion-col   size=\"4\">\n          <ion-item lines=\"none\" tappable  (click)=\"saveProfileData();\"  style=\"font-weight:bold; background:transparent; width:100%;  text-align:center; height:50px\">\n        </ion-item>\n        </ion-col>\n\n\n      </ion-row>\n    </ion-grid>\n\n</ion-footer>\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".roundedInput {\n  --border-radius: 5px;\n  --box-shadow: 2px gray;\n  --background: #f8f9fa;\n}\n\nion-footer {\n  --background:#F7F4F0;\n}\n\nion-grid {\n  text-align: center !important;\n}\n\n.cen {\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXHZpbm9kXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxHb2FsIHNoYXBlclxcMTAtMDgtMjAyMFxcZ29hbC1zaGFwZXItbW9iaWxlLW1hc3Rlci9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxvQkFBQTtFQUVBLHNCQUFBO0VBRUEscUJBQUE7QUNISjs7QURPQTtFQUNJLG9CQUFBO0FDSko7O0FET0E7RUFDSSw2QkFBQTtBQ0pKOztBRE1BO0VBQ0ksNkJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yb3VuZGVkSW5wdXQge1xuICAgIC8vIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvLyAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm94LXNoYWRvdzogMnB4IGdyYXk7XG4gICAgLy8gLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAgIC0tYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgIH1cblxuXG5pb24tZm9vdGVye1xuICAgIC0tYmFja2dyb3VuZDojRjdGNEYwO1xufVxuXG5pb24tZ3JpZHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50O1xufVxuLmNlbntcbiAgICB0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5cbiIsIi5yb3VuZGVkSW5wdXQge1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1ib3gtc2hhZG93OiAycHggZ3JheTtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZhO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiNGN0Y0RjA7XG59XG5cbmlvbi1ncmlkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jZW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */");

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
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events.service */ "./src/app/events.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");








let ProfilePage = class ProfilePage {
    constructor(storage, actionSheetController, events, camera, global, apiService) {
        this.storage = storage;
        this.actionSheetController = actionSheetController;
        this.events = events;
        this.camera = camera;
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
            this.saveData = data;
            this.currentUserInfo = data.user;
            this.username = this.currentUserInfo.user_name;
            this.firstname = this.currentUserInfo.firstname;
            this.lastname = this.currentUserInfo.lastname;
            this.email = this.currentUserInfo.email;
            this.rolename = this.currentUserInfo.role_name;
            this.designation = this.currentUserInfo.designation;
            this.employeeid = this.currentUserInfo.employee_id;
            this.phonenumber = this.currentUserInfo.phone_number;
            // Display profile photo
            if (this.currentUserInfo.profile_photo != null && this.currentUserInfo.profile_photo != '' && this.currentUserInfo.profile_photo != undefined) {
                console.log("Profile data is there:");
                this.profilephoto = this.currentUserInfo.profile_photo;
            }
            else {
                console.log("No Image data:");
                this.profilephoto = "assets/icon/account.jpeg";
            }
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
    openCamera() {
        const options = {
            // quality: 70,
            // destinationType: this.camera.DestinationType.DATA_URL,
            // sourceType : this.camera.PictureSourceType.CAMERA,
            // saveToPhotoAlbum: false
            quality: 100,
            targetWidth: 150,
            targetHeight: 150,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            sourceType: this.camera.PictureSourceType.CAMERA,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then((imageData) => {
            this.profilephoto = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
        });
    }
    openGallery() {
        const options = {
            quality: 100,
            targetWidth: 150,
            targetHeight: 150,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then((imageData) => {
            this.profilephoto = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
        });
    }
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Albums',
                cssClass: 'my-custom-class',
                buttons: [{
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            console.log('Camera clicked');
                            this.openCamera();
                        }
                    }, {
                        text: 'Gallery',
                        icon: 'image',
                        handler: () => {
                            console.log('Gallery clicked');
                            this.openGallery();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    saveProfileData() {
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
        dict["profile_photo"] = this.profilephoto;
        console.log(dict);
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
                this.saveData.user.profile_photo = this.profilephoto;
                console.log(this.saveData.user);
                console.log(this.saveData.user.phone_number);
                this.storage.setItem('userdeatils', this.saveData);
                this.events.publish('user:created', {
                    user: this.saveData
                });
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
    { type: _events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _services_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"] },
    { type: _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"], _events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _services_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"], _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map
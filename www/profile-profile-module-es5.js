function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button style=\"color: #f09d2e;\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title color=\"Medium\"> Profile</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n<ion-content  mode=\"ios\">\n\n<!-- <form onsubmit=\"processForm(event)\"> -->\n\n    <ion-list class=\"ion-no-margin ion-no-padding\" lines=\"none\">\n        <ion-item>\n          <ion-label style=\"font-size: 16px;\" position=\"stacked\">User Name</ion-label>\n          <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"username\" oninput=\"handleFirstNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label style=\"font-size: 16px;\" position=\"stacked\">Role </ion-label>\n          <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"rolename\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">First Name </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"firstname\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Last Name </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"lastname\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Email </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"email\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Designation </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"designation\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Employee Id </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"employeeid\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label style=\"font-size: 16px;\" position=\"stacked\">Phone Number </ion-label>\n            <ion-input style=\"font-size: 15px; color: black;\" class=\"roundedInput\" required readonly type=\"text\" [(ngModel)]=\"phonenumber\" oninput=\"handleLastNameValue(event)\"></ion-input>\n        </ion-item>\n        \n\n\n</ion-list>\n\n<!-- </form> -->\n\n  \n\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/profile/profile-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/profile/profile-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".roundedInput {\n  --border-radius: 5px;\n  --box-shadow: 2px gray;\n  --background: #f8f9fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1ByYWN0aWNlL0dpdEh1Yi9nb2FsLXNoYXBlci1tb2JpbGUvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksb0JBQUE7RUFFQSxzQkFBQTtFQUVBLHFCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucm91bmRlZElucHV0IHtcbiAgICAvLyAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLy8gLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWJveC1zaGFkb3c6IDJweCBncmF5O1xuICAgIC8vIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAtLWJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICB9IiwiLnJvdW5kZWRJbnB1dCB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJveC1zaGFkb3c6IDJweCBncmF5O1xuICAtLWJhY2tncm91bmQ6ICNmOGY5ZmE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/profile.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/profile/profile.page.ts ***!
    \*****************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _services_globals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/globals.service */
    "./src/app/services/globals.service.ts");
    /* harmony import */


    var _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/api-services.service */
    "./src/app/services/api-services.service.ts");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(storage, global, apiService) {
        var _this = this;

        _classCallCheck(this, ProfilePage);

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
        this.storage.getItem('userdeatils').then(function (data) {
          _this.currentUserInfo = data.user;
          _this.username = _this.currentUserInfo.user_name;
          _this.firstname = _this.currentUserInfo.firstname;
          _this.lastname = _this.currentUserInfo.lastname;
          _this.email = _this.currentUserInfo.email;
          _this.rolename = _this.currentUserInfo.role_name;
          _this.designation = _this.currentUserInfo.designation;
          _this.employeeid = _this.currentUserInfo.employee_id;
          _this.phonenumber = _this.currentUserInfo.phone_number;
        }, function (error) {
          console.log(error);
        });
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closemodal",
        value: function closemodal(type) {
          var _this2 = this;

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
          this.apiService.updateUserProfile(this.global.userId, dict).subscribe(function (result) {
            _this2.global.hideLoading();

            console.log(_this2.saveData.user);

            if (result.status == 200) {
              _this2.global.presentAlert("", "Profile Updated Successfully", ""); // this.saveData.user.user_name = this.username;


              _this2.saveData.user.firstname = _this2.firstname;
              _this2.saveData.user.lastname = _this2.lastname;
              _this2.saveData.user.email = _this2.email;
              _this2.saveData.user.designation = _this2.designation;
              _this2.saveData.user.employee_id = _this2.employeeid;
              _this2.saveData.user.phone_number = _this2.phonenumber;
              console.log(_this2.saveData.user);
              console.log(_this2.saveData.user.phone_number);

              _this2.storage.setItem('userdeatils', _this2.saveData);
            } else {}
          }, function (error) {
            _this2.global.hideLoading();

            console.log(error);
          });
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"]
      }, {
        type: _services_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"]
      }, {
        type: _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"]
      }];
    };

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/profile/profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"], _services_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"], _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map
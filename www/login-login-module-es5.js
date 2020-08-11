function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n    <ion-toolbar mode=\"ios\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button color=\"primary\" mode=\"md\" ></ion-back-button>\n      </ion-buttons>\n      <ion-title color=\"primary\">Login</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n<!-- <ion-content class=\"ion-text-center\" mode=\"md\">\n    <ion-grid class=\"halfCircleBottom\" style=\"background-color: blue;\">\n          <form (ngSubmit)=\"checkLogin($event)\">\n            <ion-grid style=\"width:80%\">\n              <br><br>\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col>\n                  <img  style=\"width:55%\" src=\"../assets/images/toolbar_logo.png\" >\n                </ion-col>\n              </ion-row>\n              <br>\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label color=\"primary\" position=\"floating\">Email Address<ion-text color=\"danger\">*</ion-text></ion-label>\n                    <ion-input required type=\"text\" (ionChange)=\"handleEmailValue($event)\"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label color=\"primary\" position=\"floating\">Password<ion-text color=\"danger\">*</ion-text></ion-label>\n                    <ion-input required type=\"password\" (ionChange)=\"handlePasswordValue($event)\"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <br>\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col class=\"ion-align-self-center\">\n                    <ion-button mode=\"ios\" type=\"submit\"  size=\"small\" color=\"primary\" fill=\"outline\" >Create Account</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </form>\n    </ion-grid>\n\n    \n    <br>\n\n   <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-text (click)=\"gotoForgotPasswordPage()\">\n              Forgot Password?\n            </ion-text>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n\n  </ion-content>  -->\n\n<!-- 058EE1\n  F19E2B -->\n\n<!-- f09d2e -->\n\n<!-- <ion-content padding>\n\n    <ion-list style=\"height: 70%;\">\n\n        <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" style=\"margin-top: 100px;\">\n            <ion-grid>\n              <ion-row justify-content-center style=\"text-align: center;\">\n                <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n                  <div text-center>\n                      <img src=\"assets/icon/GoalShaper-Logo.png\" style=\"width:240px; margin: 0 auto; padding: 0 auto;\" />\n                  </div>\n                  <br><br><br>\n                  <div padding>\n                    <ion-item>\n                      <ion-icon style=\"color: #F09D2E;\" name=\"person\"></ion-icon> &nbsp;&nbsp;\n                      <ion-input style=\"color: black;\" name=\"email\" type=\"email\" placeholder=\"Username\" ngModel required></ion-input>\n                    </ion-item>\n                    <br>\n                    <ion-item style=\"margin-top: 10px;\">\n                      <ion-icon style=\"color: #F09D2E;\" name=\"lock-closed\"></ion-icon> &nbsp;&nbsp;\n                      <ion-input style=\"color: black;\" name=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\n                    </ion-item>\n                  </div>\n                  <br><br><br>\n                  <div padding>\n                    <ion-button  shape=\"round\" size=\"small\" fill=\"solid\" style=\"--background: #f09d2e\" type=\"submit\" [disabled]=\"form.invalid\">Login</ion-button>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        </form>\n\n    </ion-list>\n\n\n\n    <ion-list  style=\"height: 30%; background-color: #058EE1;\">\n\n        <br>\n        <br>\n        <br>\n\n        <ion-grid>\n            <ion-row  style=\"text-align: center; color: white;\">\n              <ion-col>\n                <ion-text (click)=\"gotoForgotPasswordPage()\">\n                  Forgot Password?\n                </ion-text>\n              </ion-col>\n            </ion-row>\n        </ion-grid>\n\n  \n    </ion-list>\n\n     \n    </ion-content> -->\n\n<ion-content class=\"ion-padding\">\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" style=\"margin-top: 25%; height: 50%;\">\n    <ion-grid>\n      <ion-row justify-content-center style=\"text-align: center;\">\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <img\n              src=\"assets/icon/GoalShaper-Logo.png\"\n              style=\"width: 240px; margin: 0 auto; padding: 0 auto;\"\n            />\n          </div>\n          <br /><br /><br />\n          <div padding>\n            <ion-item>\n              <ion-icon style=\"color: #f09d2e;\" name=\"person\"></ion-icon>\n              &nbsp;&nbsp;\n              <ion-input\n                style=\"color: black;\"\n                name=\"email\"\n                type=\"email\"\n                placeholder=\"Username\"\n                [(ngModel)]=\"username\"\n                required\n              ></ion-input>\n            </ion-item>\n            <br />\n            <ion-item style=\"margin-top: 10px;\">\n              <ion-icon style=\"color: #f09d2e;\" name=\"lock-closed\"></ion-icon>\n              &nbsp;&nbsp;\n              <ion-input\n                style=\"color: black;\"\n                name=\"password\"\n                type=\"password\"\n                placeholder=\"Password\"\n                [(ngModel)]=\"password\"\n                required\n              ></ion-input>\n            </ion-item>\n          </div>\n          <div padding style=\"margin-top: 15%;\">\n            <ion-button\n              shape=\"round\"\n              size=\"medium\"\n              fill=\"solid\"\n              style=\"--background: #f09d2e;\"\n              type=\"submit\"\n              [disabled]=\"form.invalid\"\n              >Login</ion-button\n            >\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <ion-grid style=\"margin-top: 35%;\">\n    <ion-row class=\"ion-text-center\">\n      <ion-col>\n        <ion-text (click)=\"gotoForgotPasswordPage()\" color=\"light\">\n          Forgot Password?\n        </ion-text>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".halfCircleBottom {\n  height: 50%;\n  width: 100%;\n  background: green;\n  border: 1px solid black;\n  border-top: 0px;\n  border-bottom-left-radius: 45%;\n  border-bottom-right-radius: 45%;\n}\n\nion-item {\n  --background: #ffff;\n  --color: #d7d7d7;\n}\n\nion-content {\n  --background: url(\"/assets/login.svg\") no-repeat center/cover fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL1ByYWN0aWNlL0dpdEh1Yi9nb2FsLXNoYXBlci1tb2JpbGUvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBRUEsaUJBQUE7RUFJQSx1QkFBQTtFQUNBLGVBQUE7RUFFQSw4QkFBQTtFQUNBLCtCQUFBO0FDSkY7O0FETUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FEb0JBO0VBQ0UsbUVBQUE7QUNqQkYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFsZkNpcmNsZUJvdHRvbSB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgLy8gYm9yZGVyLXJhZGl1czogMTAgMCA0MCUgNDAlO1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcblxuICAvLyBoZWlnaHQ6MTAwcHg7XG4gIC8vIHdpZHRoOjEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXRvcDogMHB4O1xuICAvLyBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTAwcHggMTAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQ1JTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQ1JTtcbn1cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZjtcbiAgLS1jb2xvcjogI2Q3ZDdkNztcbn1cblxuLy8gLmJhY2tncm91bmQtaW1hZ2V7XG4vLyAgICAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoYXNzZXRzL2ljb24vbG9naW5fcC5zdmcpIG5vLXJlcGVhdDtcblxuLy8gICAgIC0tYmFja2dyb3VuZDogbGlnaHRncmF5ICB1cmwoJy9hc3NldHMvaWNvbi8xMjM0LmpwZWcnKSAgbm8tcmVwZWF0IHRvcCBjZW50ZXIgLyAxMDAlO1xuLy8gfVxuXG4vLyAuYmFja2dvdW5kLWltYWdlIHtcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29uL2xvZ2luX3Auc3ZnXCIpO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbi8vIH1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvbG9naW4uc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXIvY292ZXIgZml4ZWQ7XG59XG4iLCIuaGFsZkNpcmNsZUJvdHRvbSB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItdG9wOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQ1JTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQ1JTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmO1xuICAtLWNvbG9yOiAjZDdkN2Q3O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9sb2dpbi5zdmdcIikgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _services_api_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/api-services.service */
    "./src/app/services/api-services.service.ts");
    /* harmony import */


    var _services_globals_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/globals.service */
    "./src/app/services/globals.service.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../events.service */
    "./src/app/events.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(storage, events, route, apiServcie, global, globals) {
        _classCallCheck(this, LoginPage);

        this.storage = storage;
        this.events = events;
        this.route = route;
        this.apiServcie = apiServcie;
        this.global = global;
        this.globals = globals;
        this.username = '';
        this.password = '';
        this.checkLengthGoal = [];
        this.checkLengthObjective = [];
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.storage.getItem('getFullList').then(function (data) {
            console.log(data);
            _this.checkLengthGoal = data.goalInfo;
            _this.checkLengthObjective = data.objInfo;
          }, function (error) {
            console.error(error);
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this2 = this;

          console.log(this.username);
          console.log(this.password); // this.global.enterprisedId = "1";
          // this.global.userId = "2";
          // this.route.navigate(['/welcome']);

          if (this.username != '' && this.password != '') {
            var userObj = {
              username: window.btoa(this.username),
              password: window.btoa(this.password)
            };
            console.log(userObj);
            this.global.showLoading();
            this.apiServcie.login(userObj).subscribe(function (result) {
              _this2.global.hideLoading();

              console.log(result);

              if (result.status == 200) {
                var currentUser = result.body;
                console.log(currentUser.user);

                _this2.events.publish('user:created', {
                  user: currentUser
                });

                _this2.global.enterprisedId = currentUser.user.enterprise_id;
                _this2.global.userId = currentUser.user.user_id;

                _this2.storage.setItem('enterprisedId', currentUser.user.enterprise_id);

                _this2.storage.setItem('userId', currentUser.user.user_id);

                _this2.storage.setItem('userdeatils', currentUser);

                _this2.storage.setItem('login', true);

                if (_this2.checkLengthGoal.length != 0 || _this2.checkLengthObjective.length != 0) {
                  _this2.route.navigate(['/goalsobjective']);
                } else {
                  _this2.route.navigate(['/welcome']);
                }
              } else {
                _this2.global.presentAlert('Failed to Sign In', '', ' Please check your credentials and try again!');
                /* Need to do something else */

              }
            }, function (error) {
              _this2.global.hideLoading();

              console.log('Error Block');
              console.log(error);

              _this2.global.presentAlert('Failed to Sign In', '', ' Please check your credentials and try again!');
            });
          } else {}
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]
      }, {
        type: _events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"]
      }, {
        type: _services_globals_service__WEBPACK_IMPORTED_MODULE_4__["GlobalsService"]
      }, {
        type: _services_globals_service__WEBPACK_IMPORTED_MODULE_4__["GlobalsService"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"], _events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"], _services_globals_service__WEBPACK_IMPORTED_MODULE_4__["GlobalsService"], _services_globals_service__WEBPACK_IMPORTED_MODULE_4__["GlobalsService"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map
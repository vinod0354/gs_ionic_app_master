function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["progressmonitoring-progressmonitoring-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/progressmonitoring/progressmonitoring.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/progressmonitoring/progressmonitoring.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProgressmonitoringProgressmonitoringPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button style=\"color: #F09D2E;\"></ion-menu-button>\n        </ion-buttons>\n    <ion-title>progressmonitoring</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/progressmonitoring/progressmonitoring-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/progressmonitoring/progressmonitoring-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ProgressmonitoringPageRoutingModule */

  /***/
  function srcAppProgressmonitoringProgressmonitoringRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressmonitoringPageRoutingModule", function () {
      return ProgressmonitoringPageRoutingModule;
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


    var _progressmonitoring_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./progressmonitoring.page */
    "./src/app/progressmonitoring/progressmonitoring.page.ts");

    var routes = [{
      path: '',
      component: _progressmonitoring_page__WEBPACK_IMPORTED_MODULE_3__["ProgressmonitoringPage"]
    }];

    var ProgressmonitoringPageRoutingModule = function ProgressmonitoringPageRoutingModule() {
      _classCallCheck(this, ProgressmonitoringPageRoutingModule);
    };

    ProgressmonitoringPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProgressmonitoringPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/progressmonitoring/progressmonitoring.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/progressmonitoring/progressmonitoring.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ProgressmonitoringPageModule */

  /***/
  function srcAppProgressmonitoringProgressmonitoringModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressmonitoringPageModule", function () {
      return ProgressmonitoringPageModule;
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


    var _progressmonitoring_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./progressmonitoring-routing.module */
    "./src/app/progressmonitoring/progressmonitoring-routing.module.ts");
    /* harmony import */


    var _progressmonitoring_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./progressmonitoring.page */
    "./src/app/progressmonitoring/progressmonitoring.page.ts");

    var ProgressmonitoringPageModule = function ProgressmonitoringPageModule() {
      _classCallCheck(this, ProgressmonitoringPageModule);
    };

    ProgressmonitoringPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _progressmonitoring_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgressmonitoringPageRoutingModule"]],
      declarations: [_progressmonitoring_page__WEBPACK_IMPORTED_MODULE_6__["ProgressmonitoringPage"]]
    })], ProgressmonitoringPageModule);
    /***/
  },

  /***/
  "./src/app/progressmonitoring/progressmonitoring.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/progressmonitoring/progressmonitoring.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProgressmonitoringProgressmonitoringPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzbW9uaXRvcmluZy9wcm9ncmVzc21vbml0b3JpbmcucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/progressmonitoring/progressmonitoring.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/progressmonitoring/progressmonitoring.page.ts ***!
    \***************************************************************/

  /*! exports provided: ProgressmonitoringPage */

  /***/
  function srcAppProgressmonitoringProgressmonitoringPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressmonitoringPage", function () {
      return ProgressmonitoringPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProgressmonitoringPage = /*#__PURE__*/function () {
      function ProgressmonitoringPage() {
        _classCallCheck(this, ProgressmonitoringPage);
      }

      _createClass(ProgressmonitoringPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressmonitoringPage;
    }();

    ProgressmonitoringPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-progressmonitoring',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progressmonitoring.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/progressmonitoring/progressmonitoring.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./progressmonitoring.page.scss */
      "./src/app/progressmonitoring/progressmonitoring.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProgressmonitoringPage);
    /***/
  }
}]);
//# sourceMappingURL=progressmonitoring-progressmonitoring-module-es5.js.map
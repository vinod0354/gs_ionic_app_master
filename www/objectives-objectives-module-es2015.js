(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["objectives-objectives-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/objectives/objectives.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/objectives/objectives.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button style=\"color: #f09d2e;\"></ion-menu-button>\n        </ion-buttons>\n    <ion-title>objectives</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/objectives/objectives-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/objectives/objectives-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ObjectivesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectivesPageRoutingModule", function() { return ObjectivesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _objectives_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objectives.page */ "./src/app/objectives/objectives.page.ts");




const routes = [
    {
        path: '',
        component: _objectives_page__WEBPACK_IMPORTED_MODULE_3__["ObjectivesPage"]
    }
];
let ObjectivesPageRoutingModule = class ObjectivesPageRoutingModule {
};
ObjectivesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ObjectivesPageRoutingModule);



/***/ }),

/***/ "./src/app/objectives/objectives.module.ts":
/*!*************************************************!*\
  !*** ./src/app/objectives/objectives.module.ts ***!
  \*************************************************/
/*! exports provided: ObjectivesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectivesPageModule", function() { return ObjectivesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _objectives_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./objectives-routing.module */ "./src/app/objectives/objectives-routing.module.ts");
/* harmony import */ var _objectives_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./objectives.page */ "./src/app/objectives/objectives.page.ts");







let ObjectivesPageModule = class ObjectivesPageModule {
};
ObjectivesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _objectives_routing_module__WEBPACK_IMPORTED_MODULE_5__["ObjectivesPageRoutingModule"]
        ],
        declarations: [_objectives_page__WEBPACK_IMPORTED_MODULE_6__["ObjectivesPage"]]
    })
], ObjectivesPageModule);



/***/ }),

/***/ "./src/app/objectives/objectives.page.scss":
/*!*************************************************!*\
  !*** ./src/app/objectives/objectives.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29iamVjdGl2ZXMvb2JqZWN0aXZlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/objectives/objectives.page.ts":
/*!***********************************************!*\
  !*** ./src/app/objectives/objectives.page.ts ***!
  \***********************************************/
/*! exports provided: ObjectivesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectivesPage", function() { return ObjectivesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ObjectivesPage = class ObjectivesPage {
    constructor() { }
    ngOnInit() {
    }
};
ObjectivesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-objectives',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./objectives.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/objectives/objectives.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./objectives.page.scss */ "./src/app/objectives/objectives.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ObjectivesPage);



/***/ })

}]);
//# sourceMappingURL=objectives-objectives-module-es2015.js.map
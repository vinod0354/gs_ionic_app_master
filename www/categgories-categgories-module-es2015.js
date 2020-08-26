(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categgories-categgories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categgories/categgories.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categgories/categgories.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button style=\"color: #F09D2E;\"></ion-menu-button>\n        </ion-buttons>\n    <ion-title>Categories</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n        <ion-list lines=\"none\" > \n             <ion-item *ngFor=\"let category of categoryInfo;let i = index\" (click)=\"clickedAction(category)\"> \n                <ion-icon  class=\"round\" [ngStyle]=\"{'background-color':category.color}\"></ion-icon>&nbsp;&nbsp;\n                <ion-label>{{category.name}}</ion-label>\n             </ion-item> \n        </ion-list>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/categgories/categgories-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/categgories/categgories-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CateggoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateggoriesPageRoutingModule", function() { return CateggoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _categgories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categgories.page */ "./src/app/categgories/categgories.page.ts");




const routes = [
    {
        path: '',
        component: _categgories_page__WEBPACK_IMPORTED_MODULE_3__["CateggoriesPage"]
    }
];
let CateggoriesPageRoutingModule = class CateggoriesPageRoutingModule {
};
CateggoriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CateggoriesPageRoutingModule);



/***/ }),

/***/ "./src/app/categgories/categgories.module.ts":
/*!***************************************************!*\
  !*** ./src/app/categgories/categgories.module.ts ***!
  \***************************************************/
/*! exports provided: CateggoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateggoriesPageModule", function() { return CateggoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _categgories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categgories-routing.module */ "./src/app/categgories/categgories-routing.module.ts");
/* harmony import */ var _categgories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categgories.page */ "./src/app/categgories/categgories.page.ts");







let CateggoriesPageModule = class CateggoriesPageModule {
};
CateggoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categgories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CateggoriesPageRoutingModule"]
        ],
        declarations: [_categgories_page__WEBPACK_IMPORTED_MODULE_6__["CateggoriesPage"]]
    })
], CateggoriesPageModule);



/***/ }),

/***/ "./src/app/categgories/categgories.page.scss":
/*!***************************************************!*\
  !*** ./src/app/categgories/categgories.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".round {\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  height: 15px;\n  left: 0;\n  top: 0;\n  width: 15px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdnb3JpZXMvQzpcXFVzZXJzXFx2aW5vZFxcT25lRHJpdmVcXERvY3VtZW50c1xcR29hbCBzaGFwZXJcXDEwLTA4LTIwMjBcXGdvYWwtc2hhcGVyLW1vYmlsZS1tYXN0ZXIvc3JjXFxhcHBcXGNhdGVnZ29yaWVzXFxjYXRlZ2dvcmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnZ29yaWVzL2NhdGVnZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnZ29yaWVzL2NhdGVnZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgXG4gIC5yb3VuZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbi8vIC5iYWNrZ3JvdW5kLWZhYmJ1dHRvbntcbi8vICAgICAtLWJhY2tncm91bmQ6ICNGMDlEMkUgIWltcG9ydGFudDtcbi8vIH1cblxuLy8gLmJnLXJlZHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4vLyB9XG4gICIsIi5yb3VuZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/categgories/categgories.page.ts":
/*!*************************************************!*\
  !*** ./src/app/categgories/categgories.page.ts ***!
  \*************************************************/
/*! exports provided: CateggoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateggoriesPage", function() { return CateggoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _category_modal_category_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-modal/category-modal.page */ "./src/app/categgories/category-modal/category-modal.page.ts");
/* harmony import */ var _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api-services.service */ "./src/app/services/api-services.service.ts");
/* harmony import */ var _services_globals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/globals.service */ "./src/app/services/globals.service.ts");






let CateggoriesPage = class CateggoriesPage {
    constructor(modalController, apiService, global) {
        this.modalController = modalController;
        this.apiService = apiService;
        this.global = global;
        this.categoryInfo = [];
        this.catogery_names_list = [];
    }
    ngOnInit() {
        console.log('Category init Method');
        this.getCatagoriesMethod();
    }
    ionViewWillEnter() {
    }
    ionViewDidEnter() {
    }
    ionViewDidLeave() {
    }
    getCatagoriesMethod() {
        this.global.showLoading();
        console.log(this.global.enterprisedId);
        console.log(this.global.userId);
        // this.global.enterprisedId ="1";
        // this.global.userId ="2";
        this.apiService.getCatagories(this.global.enterprisedId, this.global.userId).subscribe((result) => {
            this.global.hideLoading();
            console.log(result.body);
            this.categoryInfo = result.body;
            this.catogery_names_list = [];
            for (let i = 0; i < this.categoryInfo.length; i++) {
                this.catogery_names_list.push(this.categoryInfo[i].name);
            }
        }, (error) => {
            this.global.hideLoading();
            console.log(error);
        });
    }
    clickedAction(category) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(category);
            const modal = yield this.modalController.create({
                component: _category_modal_category_modal_page__WEBPACK_IMPORTED_MODULE_3__["CategoryModalPage"],
                cssClass: 'custom-modal',
                componentProps: {
                    passCatagory: category,
                    filterList: this.catogery_names_list
                }
            });
            modal.onWillDismiss().then(dataReturned => {
                // trigger when about to close the modal
                console.log('Receive:');
                this.getCatagoriesMethod();
            });
            return yield modal.present().then(_ => {
                // triggered when opening the modal
                console.log('Sending:');
            });
        });
    }
};
CateggoriesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"] },
    { type: _services_globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"] }
];
CateggoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categgories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categgories.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categgories/categgories.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categgories.page.scss */ "./src/app/categgories/categgories.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"], _services_globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"]])
], CateggoriesPage);



/***/ })

}]);
//# sourceMappingURL=categgories-categgories-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guiding-principles-guiding-principles-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/guiding-principles/guiding-principles.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/guiding-principles/guiding-principles.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #f09d2e;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"Medium\"> Guiding Principles</ion-title>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col size=\"2\">\n      <ion-list>\n        <ion-thumbnail slot=\"start\" style=\"padding-left:10px; padding-top:10px;\" >\n          <ion-img src=\"assets/img/account.png\" class=\"image-container hovereffect\"></ion-img>  \n             <div class=\"btn btn-link btn-file \"> \n              <a  style=\"color:white; padding-top:15px;\" href=\"#\" class=\"overlay\">Edit</a>\n              <ion-input type='file' id=\"upload-img\"  accept=\"image/*\" class=\"select-profile-picture\"></ion-input>\n            </div>   \n        </ion-thumbnail>\n        <!-- <ion-avatar slot=\"start\">\n          <img src=\"assets/img/account.png\">\n        </ion-avatar>\n        <ion-label>Vijay Mitra</ion-label> -->\n      </ion-list> \n    </ion-col>\n    <ion-col size=\"10\">\n      <p style=\"padding-top:12px;\">Vijay Mitra</p>  \n    </ion-col>\n  </ion-row> \n  <ion-grid style=\"padding-top:20px; padding-left:20px; font-weight:bold;\">\n    <ion-label class=\"purpose\">My Purpose</ion-label><br>\n      </ion-grid>\n        <ion-grid style=\"padding-top:5px;  padding-left:20px;\">\n          <ion-label>Lorem Ipsum</ion-label>\n          <ion-icon name=\"pencil\" style=\"color:#1089CE;\" class=\"edit\" ></ion-icon>\n        </ion-grid>\n        <!-- <div class=\"purpose\">\n          <ion-label for=\"description\" id=\"form\"><p style=\"color:#1089CE;\">Lorem Ipsum</p></ion-label>\n         <div class=\"edit\"><a href=\"#\"><ion-icon name=\"pencil\" style=\"color:#1089CE;\" class=\"edit\"></ion-icon></a></div>\n       </div> -->\n        <ion-grid style=\"padding-top:20px; padding-left:20px; font-weight:bold;\">\n          <ion-label>What's important to me</ion-label><br>\n        </ion-grid>\n        <ion-grid style=\"padding-top:5px; padding-left:20px;\">\n          <ion-label>Lorem Ipsum</ion-label><br>\n        </ion-grid>\n    <ion-item style=\"border-bottom: 1px solid grey !important ; padding-right:10px; padding-left:10px;\"></ion-item>\n     \n    <!-- Company details starts here -->\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-list >\n        <img src=\"https://www.impaxivesolutions.com/images/logo.png\" slot=\"start\" style=\"padding-left:10px; padding-top:10px\"  >\n      </ion-list>\n    </ion-col>\n    <ion-col size=\"6\">\n        <p style=\"padding-left:5px; padding-top:20px\" >ACME Inc.</p>\n    </ion-col>\n  </ion-row>\n        <ion-grid style=\"padding-top:20px; padding-left:20px; font-weight:bold;\">\n          <ion-label>Mission</ion-label><br>\n        </ion-grid>\n        <ion-grid style=\"padding-top:5px; padding-left:20px;\">\n          <ion-label>We will bring good things to the world</ion-label><br>\n        </ion-grid>\n        <ion-grid style=\"padding-top:20px; padding-left:20px; font-weight:bold;\">\n          <ion-label>Vision</ion-label><br>\n        </ion-grid>\n        <ion-grid style=\"padding-top:5px; padding-left:20px;\">\n          <ion-label>A world without the problems our products solve</ion-label><br>\n        </ion-grid>\n        <ion-grid style=\"padding-top:20px; padding-left:20px; font-weight:bold;\">\n          <ion-label>Values</ion-label><br>\n        </ion-grid>\n        <ion-grid style=\"padding-left:10px;\" >\n          <li style=\"padding-left:10px;\">Competence</li>\n          <li style=\"padding-left:10px;\">Respect</li>\n          <li style=\"padding-left:10px;\">Have Fun</li>\n        </ion-grid>\n </ion-content>\n");

/***/ }),

/***/ "./src/app/guiding-principles/guiding-principles-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/guiding-principles/guiding-principles-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: GuidingPrinciplesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidingPrinciplesPageRoutingModule", function() { return GuidingPrinciplesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guiding_principles_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guiding-principles.page */ "./src/app/guiding-principles/guiding-principles.page.ts");




const routes = [
    {
        path: '',
        component: _guiding_principles_page__WEBPACK_IMPORTED_MODULE_3__["GuidingPrinciplesPage"]
    }
];
let GuidingPrinciplesPageRoutingModule = class GuidingPrinciplesPageRoutingModule {
};
GuidingPrinciplesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GuidingPrinciplesPageRoutingModule);



/***/ }),

/***/ "./src/app/guiding-principles/guiding-principles.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/guiding-principles/guiding-principles.module.ts ***!
  \*****************************************************************/
/*! exports provided: GuidingPrinciplesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidingPrinciplesPageModule", function() { return GuidingPrinciplesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _guiding_principles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guiding-principles-routing.module */ "./src/app/guiding-principles/guiding-principles-routing.module.ts");
/* harmony import */ var _guiding_principles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guiding-principles.page */ "./src/app/guiding-principles/guiding-principles.page.ts");







let GuidingPrinciplesPageModule = class GuidingPrinciplesPageModule {
};
GuidingPrinciplesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _guiding_principles_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuidingPrinciplesPageRoutingModule"]
        ],
        declarations: [_guiding_principles_page__WEBPACK_IMPORTED_MODULE_6__["GuidingPrinciplesPage"]]
    })
], GuidingPrinciplesPageModule);



/***/ }),

/***/ "./src/app/guiding-principles/guiding-principles.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/guiding-principles/guiding-principles.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select-profile-picture {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n\n/***avatar hover****/\n\n.hovereffect {\n  width: 50px;\n  height: 50px;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: default;\n  border-radius: 50%;\n  background-color: #7e35acf5;\n  vertical-align: middle;\n}\n\n.hovereffect .overlay {\n  width: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n}\n\n.hovereffect img {\n  display: block;\n  position: relative;\n  max-width: none;\n  width: calc(100% + 20px);\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(-10px, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.hovereffect:hover img {\n  opacity: 0.4;\n  filter: alpha(opacity=40);\n  transform: translate3d(0, 0, 0);\n}\n\n.hovereffect h2 {\n  text-transform: uppercase;\n  color: #7e35acf5;\n  text-align: bottom;\n  font-size: 17px;\n  overflow: hidden;\n  padding: 0.5em 0;\n  background-color: #7e35acf5;\n}\n\n.hovereffect h2:after {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #7e35acf5;\n  content: \"\";\n  transition: transform 0.35s;\n  transform: translate3d(-100%, 0, 0);\n}\n\n.hovereffect:hover h2:after {\n  transform: translate3d(0, 0, 0);\n}\n\n.hovereffect a, .hovereffect p {\n  color: #7e35acf5;\n  opacity: 0.5;\n  filter: alpha(opacity=0);\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(100%, 0, 0);\n}\n\n.hovereffect:hover a, .hovereffect:hover p {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  transform: translate3d(0, 0, 0);\n}\n\n.blue-textarea textarea.md-textarea:focus:not([readonly]) {\n  border-bottom: 1px solid #1089CE;\n  box-shadow: 0 1px 0 0 #1089CE;\n  border: none !important;\n}\n\n.image-container {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n}\n\n.image-container:hover .message {\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.purpose:hover .edit {\n  display: block;\n}\n\n.purpose {\n  position: relative;\n  display: inline-block;\n}\n\n.edit {\n  /* padding-top: 7px;\t */\n  position: absolute;\n  /* right: 0; */\n  top: 0;\n  display: none;\n}\n\n.edit a {\n  color: #1089CE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3VpZGluZy1wcmluY2lwbGVzL0M6XFxVc2Vyc1xcdmlub2RcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdvYWwgc2hhcGVyXFwxMC0wOC0yMDIwXFxnb2FsLXNoYXBlci1tb2JpbGUtbWFzdGVyL3NyY1xcYXBwXFxndWlkaW5nLXByaW5jaXBsZXNcXGd1aWRpbmctcHJpbmNpcGxlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2d1aWRpbmctcHJpbmNpcGxlcy9ndWlkaW5nLXByaW5jaXBsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSkY7O0FET0Esb0JBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDSko7O0FET0U7RUFDRSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDTEo7O0FEUUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFFQSwwQ0FBQTtFQUVBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQ0xKOztBRFFFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBRUEsK0JBQUE7QUNMSjs7QURRRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNOSjs7QURTRTtFQUVFLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFFQSwyQkFBQTtFQUVBLG1DQUFBO0FDUEo7O0FEVUU7RUFFRSwrQkFBQTtBQ1BKOztBRFVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFFQSwwQ0FBQTtFQUVBLGtDQUFBO0FDUEo7O0FEVUU7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7RUFFQSwrQkFBQTtBQ1BKOztBRFdFO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FDUko7O0FEWUU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURZRTtFQUNFLGdDQUFBO0VBQ0EsVUFBQTtBQ1RKOztBRFlFO0VBQ0UsY0FBQTtBQ1RKOztBRGFFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ1ZKOztBRGFFO0VBQ0UsdUJBQUE7RUFFQSxrQkFBQTtFQUVBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQ1pKOztBRGVFO0VBQ0UsY0FBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvZ3VpZGluZy1wcmluY2lwbGVzL2d1aWRpbmctcHJpbmNpcGxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaW1hZ2V7XHJcbi8vICAgICB3aWR0aDoxMjAlO1xyXG4vLyAgICAgaGVpZ2h0OjEyMCU7XHJcbi8vIH1cclxuXHJcbi5zZWxlY3QtcHJvZmlsZS1waWN0dXJlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyoqKmF2YXRhciBob3ZlcioqKiovIFxyXG4uaG92ZXJlZmZlY3Qge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2UzNWFjZjU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3QgLm92ZXJsYXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyZWZmZWN0IGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsMCwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsMCwwKTtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3Q6aG92ZXIgaW1nIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5ob3ZlcmVmZmVjdCBoMiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM3ZTM1YWNmNTtcclxuICAgIHRleHQtYWxpZ246IGJvdHRvbTtcclxuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdlMzVhY2Y1O1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3QgaDI6YWZ0ZXIge1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2UzNWFjZjU7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyZWZmZWN0OmhvdmVyIGgyOmFmdGVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuICB9XHJcbiAgXHJcbiAgLmhvdmVyZWZmZWN0IGEsIC5ob3ZlcmVmZmVjdCBwIHtcclxuICAgIGNvbG9yOiAjN2UzNWFjZjU7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwwLDApO1xyXG4gIH1cclxuICBcclxuICAuaG92ZXJlZmZlY3Q6aG92ZXIgYSwgLmhvdmVyZWZmZWN0OmhvdmVyIHAge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gIH1cclxuXHJcblxyXG4gIC5ibHVlLXRleHRhcmVhIHRleHRhcmVhLm1kLXRleHRhcmVhOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzEwODlDRTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjMTA4OUNFO1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7IFxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlLWNvbnRhaW5lcjpob3ZlciAubWVzc2FnZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAucHVycG9zZTpob3ZlciAuZWRpdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnB1cnBvc2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmVkaXQge1xyXG4gICAgLyogcGFkZGluZy10b3A6IDdweDtcdCAqL1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiA1MDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OjIwMHB4O1xyXG4gICAgLyogcmlnaHQ6IDA7ICovXHJcbiAgICB0b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZWRpdCBhIHtcclxuICAgIGNvbG9yOiMxMDg5Q0U7XHJcbiAgfSIsIi5zZWxlY3QtcHJvZmlsZS1waWN0dXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKioqYXZhdGFyIGhvdmVyKioqKi9cbi5ob3ZlcmVmZmVjdCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZTM1YWNmNTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmhvdmVyZWZmZWN0IC5vdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uaG92ZXJlZmZlY3QgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiBub25lO1xuICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5ob3ZlcmVmZmVjdDpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLmhvdmVyZWZmZWN0IGgyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM3ZTM1YWNmNTtcbiAgdGV4dC1hbGlnbjogYm90dG9tO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAuNWVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZTM1YWNmNTtcbn1cblxuLmhvdmVyZWZmZWN0IGgyOmFmdGVyIHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICM3ZTM1YWNmNTtcbiAgY29udGVudDogXCJcIjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbn1cblxuLmhvdmVyZWZmZWN0OmhvdmVyIGgyOmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4uaG92ZXJlZmZlY3QgYSwgLmhvdmVyZWZmZWN0IHAge1xuICBjb2xvcjogIzdlMzVhY2Y1O1xuICBvcGFjaXR5OiAwLjU7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG59XG5cbi5ob3ZlcmVmZmVjdDpob3ZlciBhLCAuaG92ZXJlZmZlY3Q6aG92ZXIgcCB7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi5ibHVlLXRleHRhcmVhIHRleHRhcmVhLm1kLXRleHRhcmVhOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTA4OUNFO1xuICBib3gtc2hhZG93OiAwIDFweCAwIDAgIzEwODlDRTtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyOmhvdmVyIC5tZXNzYWdlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5wdXJwb3NlOmhvdmVyIC5lZGl0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wdXJwb3NlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5lZGl0IHtcbiAgLyogcGFkZGluZy10b3A6IDdweDtcdCAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIHJpZ2h0OiAwOyAqL1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5lZGl0IGEge1xuICBjb2xvcjogIzEwODlDRTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/guiding-principles/guiding-principles.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/guiding-principles/guiding-principles.page.ts ***!
  \***************************************************************/
/*! exports provided: GuidingPrinciplesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidingPrinciplesPage", function() { return GuidingPrinciplesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GuidingPrinciplesPage = class GuidingPrinciplesPage {
    constructor() { }
    ngOnInit() {
    }
};
GuidingPrinciplesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guiding-principles',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./guiding-principles.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/guiding-principles/guiding-principles.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./guiding-principles.page.scss */ "./src/app/guiding-principles/guiding-principles.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GuidingPrinciplesPage);



/***/ })

}]);
//# sourceMappingURL=guiding-principles-guiding-principles-module-es2015.js.map
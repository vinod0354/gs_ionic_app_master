(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guiding-principles-guiding-principles-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/guiding-principles/guiding-principles.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/guiding-principles/guiding-principles.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: #f09d2e;\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"Medium\"> Guiding Principles</ion-title>\n</ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col size=\"2\">\n      <ion-list>\n        <ion-thumbnail slot=\"start\" style=\"padding-left:10px; padding-top:10px;\" >\n          <ion-img src=\"assets/img/account.png\" class=\"image-container hovereffect\"></ion-img>  \n             <div class=\"btn btn-link btn-file \"> \n              <a  style=\"color:white; padding-top:15px;\" href=\"#\" class=\"overlay\">Edit</a>\n              <ion-input type='file' id=\"upload-img\"  accept=\"image/*\" class=\"select-profile-picture\"></ion-input>\n            </div>   \n        </ion-thumbnail>\n        <!-- <ion-avatar slot=\"start\">\n          <img src=\"assets/img/account.png\">\n        </ion-avatar>\n        <ion-label>Vijay Mitra</ion-label> -->\n      </ion-list> \n    </ion-col>\n    <ion-col size=\"10\">\n      <p style=\"padding-top:12px;\">Vijay Mitra</p>  \n    </ion-col>\n  </ion-row> \n  <ion-grid style=\"padding-top:20px; padding-left:20px; font-weight:bold;\">\n    <ion-label class=\"purpose\">My Purpose</ion-label><br>\n      </ion-grid>\n        <ion-grid style=\"padding-top:5px;  padding-left:20px;\">\n          <ion-label>Lorem Ipsum</ion-label>\n          <ion-icon name=\"pencil\" style=\"color:#1089CE;\" class=\"edit\" ></ion-icon>\n        </ion-grid>\n        <!-- <div class=\"purpose\">\n          <ion-label for=\"description\" id=\"form\"><p style=\"color:#1089CE;\">Lorem Ipsum</p></ion-label>\n         <div class=\"edit\"><a href=\"#\"><ion-icon name=\"pencil\" style=\"color:#1089CE;\" class=\"edit\"></ion-icon></a></div>\n       </div> -->\n        <ion-grid style=\"padding-top:20px; padding-left:20px; font-weight:bold;\">\n          <ion-label>What's important to me</ion-label><br>\n        </ion-grid>\n        <ion-grid style=\"padding-top:5px; padding-left:20px;\">\n          <ion-label>Lorem Ipsum</ion-label><br>\n        </ion-grid>\n    <ion-item style=\"border-bottom: 1px solid grey !important ; padding-right:10px; padding-left:10px;\"></ion-item>\n     \n    <!-- Company details starts here -->\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-list >\n        <img src=\"https://www.impaxivesolutions.com/images/logo.png\" slot=\"start\" style=\"padding-left:10px; padding-top:10px\"  >\n      </ion-list>\n    </ion-col>\n    <ion-col size=\"6\">\n        <p style=\"padding-left:5px; padding-top:20px\" >ACME Inc.</p>\n    </ion-col>\n  </ion-row>\n        <ion-grid style=\"padding-top:20px; padding-left:20px; font-weight:bold;\">\n          <ion-label>Mission</ion-label><br>\n        </ion-grid>\n        <ion-grid style=\"padding-top:5px; padding-left:20px;\">\n          <ion-label>We will bring good things to the world</ion-label><br>\n        </ion-grid>\n        <ion-grid style=\"padding-top:20px; padding-left:20px; font-weight:bold;\">\n          <ion-label>Vision</ion-label><br>\n        </ion-grid>\n        <ion-grid style=\"padding-top:5px; padding-left:20px;\">\n          <ion-label>A world without the problems our products solve</ion-label><br>\n        </ion-grid>\n        <ion-grid style=\"padding-top:20px; padding-left:20px; font-weight:bold;\">\n          <ion-label>Values</ion-label><br>\n        </ion-grid>\n        <ion-grid style=\"padding-left:10px;\" >\n          <li style=\"padding-left:10px;\">Competence</li>\n          <li style=\"padding-left:10px;\">Respect</li>\n          <li style=\"padding-left:10px;\">Have Fun</li>\n        </ion-grid>\n </ion-content>\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".select-profile-picture {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n\n/***avatar hover****/\n\n.hovereffect {\n  width: 50px;\n  height: 50px;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: default;\n  border-radius: 50%;\n  background-color: #7e35acf5;\n  vertical-align: middle;\n}\n\n.hovereffect .overlay {\n  width: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n}\n\n.hovereffect img {\n  display: block;\n  position: relative;\n  max-width: none;\n  width: calc(100% + 20px);\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(-10px, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.hovereffect:hover img {\n  opacity: 0.4;\n  filter: alpha(opacity=40);\n  transform: translate3d(0, 0, 0);\n}\n\n.hovereffect h2 {\n  text-transform: uppercase;\n  color: #7e35acf5;\n  text-align: bottom;\n  font-size: 17px;\n  overflow: hidden;\n  padding: 0.5em 0;\n  background-color: #7e35acf5;\n}\n\n.hovereffect h2:after {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background: #7e35acf5;\n  content: \"\";\n  transition: transform 0.35s;\n  transform: translate3d(-100%, 0, 0);\n}\n\n.hovereffect:hover h2:after {\n  transform: translate3d(0, 0, 0);\n}\n\n.hovereffect a, .hovereffect p {\n  color: #7e35acf5;\n  opacity: 0.5;\n  filter: alpha(opacity=0);\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(100%, 0, 0);\n}\n\n.hovereffect:hover a, .hovereffect:hover p {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  transform: translate3d(0, 0, 0);\n}\n\n.blue-textarea textarea.md-textarea:focus:not([readonly]) {\n  border-bottom: 1px solid #1089CE;\n  box-shadow: 0 1px 0 0 #1089CE;\n  border: none !important;\n}\n\n.image-container {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n}\n\n.image-container:hover .message {\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n\n.purpose:hover .edit {\n  display: block;\n}\n\n.purpose {\n  position: relative;\n  display: inline-block;\n}\n\n.edit {\n  /* padding-top: 7px;\t */\n  position: absolute;\n  /* right: 0; */\n  top: 0;\n  display: none;\n}\n\n.edit a {\n  color: #1089CE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3VpZGluZy1wcmluY2lwbGVzL0M6XFxVc2Vyc1xcdmlub2RcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdvYWwgc2hhcGVyXFwxMC0wOC0yMDIwXFxnb2FsLXNoYXBlci1tb2JpbGUtbWFzdGVyL3NyY1xcYXBwXFxndWlkaW5nLXByaW5jaXBsZXNcXGd1aWRpbmctcHJpbmNpcGxlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2d1aWRpbmctcHJpbmNpcGxlcy9ndWlkaW5nLXByaW5jaXBsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSko7O0FET0Usb0JBQUE7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDSk47O0FET0k7RUFDRSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDTE47O0FEUUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFFQSwwQ0FBQTtFQUVBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtBQ0xOOztBRFFJO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBRUEsK0JBQUE7QUNMTjs7QURRSTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNOTjs7QURTSTtFQUVFLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFFQSwyQkFBQTtFQUVBLG1DQUFBO0FDUE47O0FEVUk7RUFFRSwrQkFBQTtBQ1BOOztBRFVJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFFQSwwQ0FBQTtFQUVBLGtDQUFBO0FDUE47O0FEVUk7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7RUFFQSwrQkFBQTtBQ1BOOztBRFdJO0VBQ0UsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FDUk47O0FEWUk7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNUTjs7QURZSTtFQUNFLGdDQUFBO0VBQ0EsVUFBQTtBQ1ROOztBRFlJO0VBQ0UsY0FBQTtBQ1ROOztBRGFJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ1ZOOztBRGFJO0VBQ0UsdUJBQUE7RUFFQSxrQkFBQTtFQUVBLGNBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQ1pOOztBRGVJO0VBQ0UsY0FBQTtBQ1pOIiwiZmlsZSI6InNyYy9hcHAvZ3VpZGluZy1wcmluY2lwbGVzL2d1aWRpbmctcHJpbmNpcGxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaW1hZ2V7XHJcbi8vICAgICB3aWR0aDoxMjAlO1xyXG4vLyAgICAgaGVpZ2h0OjEyMCU7XHJcbi8vIH1cclxuXHJcbi5zZWxlY3QtcHJvZmlsZS1waWN0dXJlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKiphdmF0YXIgaG92ZXIqKioqLyBcclxuICAuaG92ZXJlZmZlY3Qge1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2UzNWFjZjU7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ob3ZlcmVmZmVjdCAub3ZlcmxheSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaG92ZXJlZmZlY3QgaW1nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LDAsMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsMCwwKTtcclxuICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhvdmVyZWZmZWN0OmhvdmVyIGltZyB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ob3ZlcmVmZmVjdCBoMiB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGNvbG9yOiAjN2UzNWFjZjU7XHJcbiAgICAgIHRleHQtYWxpZ246IGJvdHRvbTtcclxuICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZTM1YWNmNTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhvdmVyZWZmZWN0IGgyOmFmdGVyIHtcclxuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogIzdlMzVhY2Y1O1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwwLDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaG92ZXJlZmZlY3Q6aG92ZXIgaDI6YWZ0ZXIge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhvdmVyZWZmZWN0IGEsIC5ob3ZlcmVmZmVjdCBwIHtcclxuICAgICAgY29sb3I6ICM3ZTM1YWNmNTtcclxuICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ob3ZlcmVmZmVjdDpob3ZlciBhLCAuaG92ZXJlZmZlY3Q6aG92ZXIgcCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuICAgIH1cclxuICBcclxuICBcclxuICAgIC5ibHVlLXRleHRhcmVhIHRleHRhcmVhLm1kLXRleHRhcmVhOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTA4OUNFO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgIzEwODlDRTtcclxuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7IFxyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW1hZ2UtY29udGFpbmVyOmhvdmVyIC5tZXNzYWdlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucHVycG9zZTpob3ZlciAuZWRpdCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBcclxuICAgIH1cclxuICBcclxuICAgIC5wdXJwb3NlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZWRpdCB7XHJcbiAgICAgIC8qIHBhZGRpbmctdG9wOiA3cHg7XHQgKi9cclxuICAgICAgLy8gcGFkZGluZy1sZWZ0OiA1MDAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIC8vIHBhZGRpbmctbGVmdDoyMDBweDtcclxuICAgICAgLyogcmlnaHQ6IDA7ICovXHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmVkaXQgYSB7XHJcbiAgICAgIGNvbG9yOiMxMDg5Q0U7XHJcbiAgICB9IiwiLnNlbGVjdC1wcm9maWxlLXBpY3R1cmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qKiphdmF0YXIgaG92ZXIqKioqL1xuLmhvdmVyZWZmZWN0IHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlMzVhY2Y1O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaG92ZXJlZmZlY3QgLm92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5ob3ZlcmVmZmVjdCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmhvdmVyZWZmZWN0OmhvdmVyIGltZyB7XG4gIG9wYWNpdHk6IDAuNDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4uaG92ZXJlZmZlY3QgaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzdlMzVhY2Y1O1xuICB0ZXh0LWFsaWduOiBib3R0b207XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMC41ZW0gMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlMzVhY2Y1O1xufVxuXG4uaG92ZXJlZmZlY3QgaDI6YWZ0ZXIge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzdlMzVhY2Y1O1xuICBjb250ZW50OiBcIlwiO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xufVxuXG4uaG92ZXJlZmZlY3Q6aG92ZXIgaDI6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi5ob3ZlcmVmZmVjdCBhLCAuaG92ZXJlZmZlY3QgcCB7XG4gIGNvbG9yOiAjN2UzNWFjZjU7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbn1cblxuLmhvdmVyZWZmZWN0OmhvdmVyIGEsIC5ob3ZlcmVmZmVjdDpob3ZlciBwIHtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLmJsdWUtdGV4dGFyZWEgdGV4dGFyZWEubWQtdGV4dGFyZWE6Zm9jdXM6bm90KFtyZWFkb25seV0pIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMDg5Q0U7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjMTA4OUNFO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXI6aG92ZXIgLm1lc3NhZ2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnB1cnBvc2U6aG92ZXIgLmVkaXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnB1cnBvc2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmVkaXQge1xuICAvKiBwYWRkaW5nLXRvcDogN3B4O1x0ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogcmlnaHQ6IDA7ICovXG4gIHRvcDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmVkaXQgYSB7XG4gIGNvbG9yOiAjMTA4OUNFO1xufSJdfQ== */");

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
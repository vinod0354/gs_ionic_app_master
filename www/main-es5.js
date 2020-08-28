function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", "stencil-ion-action-sheet-ios-entry-js"],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", "stencil-ion-action-sheet-md-entry-js"],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", "stencil-ion-alert-ios-entry-js"],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", "stencil-ion-alert-md-entry-js"],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", "stencil-ion-app_8-ios-entry-js"],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", "stencil-ion-app_8-md-entry-js"],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", "stencil-ion-avatar_3-ios-entry-js"],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", "stencil-ion-avatar_3-md-entry-js"],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", "stencil-ion-back-button-ios-entry-js"],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", "stencil-ion-back-button-md-entry-js"],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", "stencil-ion-backdrop-ios-entry-js"],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", "stencil-ion-backdrop-md-entry-js"],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", "stencil-ion-button_2-ios-entry-js"],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", "stencil-ion-button_2-md-entry-js"],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", "stencil-ion-card_5-ios-entry-js"],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", "stencil-ion-card_5-md-entry-js"],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", "stencil-ion-checkbox-ios-entry-js"],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", "stencil-ion-checkbox-md-entry-js"],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", "stencil-ion-chip-ios-entry-js"],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", "stencil-ion-chip-md-entry-js"],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", "stencil-ion-col_3-entry-js"],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", "stencil-ion-datetime_3-ios-entry-js"],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", "stencil-ion-datetime_3-md-entry-js"],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", "stencil-ion-fab_3-ios-entry-js"],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", "stencil-ion-fab_3-md-entry-js"],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", "stencil-ion-img-entry-js"],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", "stencil-ion-infinite-scroll_2-ios-entry-js"],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", "stencil-ion-infinite-scroll_2-md-entry-js"],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", "stencil-ion-input-ios-entry-js"],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", "stencil-ion-input-md-entry-js"],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", "stencil-ion-item-option_3-ios-entry-js"],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", "stencil-ion-item-option_3-md-entry-js"],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", "stencil-ion-item_8-ios-entry-js"],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", "stencil-ion-item_8-md-entry-js"],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", "stencil-ion-loading-ios-entry-js"],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", "stencil-ion-loading-md-entry-js"],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", "stencil-ion-menu_3-ios-entry-js"],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", "stencil-ion-menu_3-md-entry-js"],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", "stencil-ion-modal-ios-entry-js"],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", "stencil-ion-modal-md-entry-js"],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", "stencil-ion-nav_2-entry-js"],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", "stencil-ion-popover-ios-entry-js"],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", "stencil-ion-popover-md-entry-js"],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", "stencil-ion-progress-bar-ios-entry-js"],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", "stencil-ion-progress-bar-md-entry-js"],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", "stencil-ion-radio_2-ios-entry-js"],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", "stencil-ion-radio_2-md-entry-js"],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", "stencil-ion-range-ios-entry-js"],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", "stencil-ion-range-md-entry-js"],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", "stencil-ion-refresher_2-ios-entry-js"],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", "stencil-ion-refresher_2-md-entry-js"],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", "stencil-ion-reorder_2-ios-entry-js"],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", "stencil-ion-reorder_2-md-entry-js"],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", "stencil-ion-ripple-effect-entry-js"],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", "stencil-ion-route_4-entry-js"],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", "stencil-ion-searchbar-ios-entry-js"],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", "stencil-ion-searchbar-md-entry-js"],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", "stencil-ion-segment_2-ios-entry-js"],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", "stencil-ion-segment_2-md-entry-js"],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", "stencil-ion-select_3-ios-entry-js"],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", "stencil-ion-select_3-md-entry-js"],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "stencil-ion-slide_2-ios-entry-js"],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "stencil-ion-slide_2-md-entry-js"],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", "stencil-ion-spinner-entry-js"],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", "stencil-ion-split-pane-ios-entry-js"],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", "stencil-ion-split-pane-md-entry-js"],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", "stencil-ion-tab-bar_2-ios-entry-js"],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", "stencil-ion-tab-bar_2-md-entry-js"],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", "stencil-ion-tab_2-entry-js"],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", "stencil-ion-text-entry-js"],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", "stencil-ion-textarea-ios-entry-js"],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", "stencil-ion-textarea-md-entry-js"],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", "stencil-ion-toast-ios-entry-js"],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", "stencil-ion-toast-md-entry-js"],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", "stencil-ion-toggle-ios-entry-js"],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", "stencil-ion-toggle-md-entry-js"],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", "stencil-ion-virtual-scroll-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <br><br>\n        <!-- <ion-item  style=\"height: 150px;\"  lines= \"none\" style=\"border-bottom:solid 2px lightgrey ;\">\n                <ion-avatar style=\"    height: 60px; width: 66px;\">\n                    <img  src=\"assets/icon/1234.jpeg\">\n                  </ion-avatar>\n                &nbsp; &nbsp;\n                <ion-label style=\"color: green;\">Syam Kumar</ion-label>\n                <ion-icon style=\"color: orange;\" (click)=\"closeMenu()\" name=\"close-outline\"></ion-icon>\n\n\n          </ion-item> -->\n\n        <ion-list>\n            <ion-item>\n                    <img style=\"width:45px; height:45px; border-radius:45px; margin-bottom: 20px;\" src=\"{{profilephoto}}\">\n                    &nbsp; &nbsp;\n                    <ion-label style=\"color: green; margin-bottom:30px; text-transform: capitalize;\">{{displayName}}</ion-label>\n                    <ion-icon style=\"color: #f09d2e; margin-top:-50px; margin-left:20px\" size='large' (click)=\"closeMenu()\" name=\"close-outline\"></ion-icon>\n              </ion-item>\n        </ion-list>\n\n\n\n        <ion-list lines=\"none\" id=\"inbox-list\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item lines=\"none\" (click)=\"selectedIndex = i;clickedItem(p)\" routerDirection=\"root\" [routerLink]=\"[p.url]\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon [name]=\"p.icon\" slot=\"start\" style=\"width:25px; height: 25px;\"></ion-icon>\n              <ion-label>\n                <h2 class=\"title\" style=\"padding-top:15px;\">{{ p.title }}</h2>\n                <h3>{{ p.subtitle }}</h3>\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categgories/category-modal/category-modal.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categgories/category-modal/category-modal.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCateggoriesCategoryModalCategoryModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content mode=\"ios\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input placeholder=\"\" required type=\"text\" [(ngModel)]=txtCatagoryName></ion-input>\n        </ion-item>\n       </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"ion-padding-top\">\n    <ion-row class=\"ion-text-center\">\n      <ion-col size=\"2\" class=\"offset\" *ngFor=\"let item of circleArray;let i = index\">\n        <span class=\"ion-matrgin-end\">\n            <ion-checkbox class={{item.color}} id=\"SelectedCheckbox_{{$index}}\"  name=\"CheckBoxdata[]\" (click)=clickMethod(item) [(ngModel)]=item.checked></ion-checkbox>&nbsp;&nbsp;\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-input placeholder=\"Category Description\" required type=\"text\" [(ngModel)]=txtCategoryDescription></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer style=\"border-top: solid 1px lightgray;\">\n  <ion-grid>\n    <ion-row class=\"ion-text-center\">\n      <!-- <ion-col size=\"6\">\n        <ion-item lines=\"none\" (click)=\"closemodal('SAVE');\" style=\"font-weight:bold; background:transparent; border-bottom-left-radius:15px; border-right:solid 1px #dcdcdc; width:100%; height:50px\" button>\n          <ion-icon style=\"color: #039CD9;\" name=\"checkmark-outline\"></ion-icon>\n          <ion-text  style=\"color: #039CD9; font-weight: bold;\" class=\"ion-margin-start\">Save</ion-text>\n        </ion-item>\n      </ion-col> -->\n\n\n      <ion-col size=\"6\">\n        <ion-item lines=\"none\" (click)=\"closemodal('SAVE');\" style=\"text-align: center; font-weight:bold; background:transparent; border-bottom-left-radius:15px; border-right:solid 1px #dcdcdc;    width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: #039CD9;margin-left: 16px;\" name=\"checkmark-outline\"></ion-icon>\n          <ion-text  style=\"color: #039CD9; font-weight: bold;\" class=\"ion-margin-start\">Save</ion-text>\n      </ion-item>\n      </ion-col>\n\n      <!-- <ion-col size=\"6\">\n        <ion-item lines=\"none\" (click)=\"closemodal('CANCEL');\" style=\"font-weight:bold; background:transparent; border-bottom-right-radius:15px;  margin:0 auto; width:100%; height:50px\" button>\n          <ion-icon style=\"color: red;\" name=\"close-circle-outline\"></ion-icon>\n          <ion-text style=\"color: red; font-weight: bold;\" class=\"ion-margin-start\">Cancel</ion-text>\n        </ion-item>\n      </ion-col> -->\n\n      <ion-col size=\"6\">\n        <ion-item lines=\"none\" tappable (click)=\"closemodal('CANCEL');\" style=\"font-weight:bold; background:transparent; border-bottom-right-radius:15px;  margin:0 auto;  width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: red; margin-left: 10px;\" name=\"close-circle-outline\"></ion-icon>\n          <ion-text style=\"color: red; font-weight: bold;\" class=\"ion-margin-start\">Cancel</ion-text>\n      </ion-item>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n\n<!-- <ion-content no-padding mode=\"ios\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder=\"Family\" required type=\"text\" (ionChange)=\"click($event)\"></ion-input>\n          </ion-item>\n         </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid style=\"margin-left:20px;\">\n    <ion-row>\n        <ion-col>\n            <span *ngFor=\"let item of circleArray\">\n                <ion-checkbox class={{item.color}} checked={{item.checked}} style=\"margin-left: 10px;\"></ion-checkbox>&nbsp;&nbsp;\n            </span>\n         </ion-col>\n\n       </ion-row>\n    </ion-grid>\n\n    <ion-grid style=\"margin-top:-10px;\">\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-input placeholder=\"Category Description\" required type=\"text\" (ionChange)=\"click($event)\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n    <br><br>\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-grid>\n    <ion-row class=\"ion-text-center\">\n      <ion-col size=\"6\">\n        <ion-item lines=\"none\" (click)=\"closemodal('SAVE');\" style=\"text-align: center; font-weight:bold; background:transparent; border-bottom-left-radius:15px; border-right:solid 1px #dcdcdc;    width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: #039CD9;\" name=\"checkmark-outline\"></ion-icon>\n          <ion-text  style=\"color: #039CD9;\" class=\"ion-margin-start\">Save</ion-text>\n      </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item lines=\"none\" tappable (click)=\"closemodal('CANCEL');\" style=\"font-weight:bold; background:transparent; border-bottom-right-radius:15px;  margin:0 auto;  width:100%;  text-align:center; height:50px\">\n          <ion-icon style=\"color: red;\" name=\"close-circle-outline\"></ion-icon>\n          <ion-text style=\"color: red;\" class=\"ion-margin-start\">Cancel</ion-text>\n      </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <table lines=\"none\" style=\"width:100%; border-radius:15px;\">\n      <tr>\n          <td align=\"center\" style=\"width:50%;border-top:solid 1px #dcdcdc; height:30px; text-align:center; font-weight:bold;\">\n\n              <ion-item lines=\"none\" (click)=\"closemodal('SAVE');\" style=\"text-align: center; font-weight:bold; background:transparent; border-bottom-left-radius:15px; border-right:solid 1px #dcdcdc;    width:100%;  text-align:center; height:50px\">\n                  <ion-icon style=\"color: #039CD9;\" name=\"checkmark-outline\"></ion-icon>\n                  <ion-label  style=\"color: #039CD9;\">Save</ion-label>\n              </ion-item>\n          </td>\n          <td align=\"center\" style=\"width:50%;border-top:solid 1px #dcdcdc; height:30px; text-align:center; font-weight:bold;\">\n\n              <ion-item lines=\"none\" tappable (click)=\"closemodal('CANCEL');\" style=\"font-weight:bold; background:transparent; border-bottom-right-radius:15px;  margin:0 auto;  width:100%;  text-align:center; height:50px\">\n                  <ion-icon style=\"color: red;\" slot=\"start\" name=\"close-circle-outline\"></ion-icon>\n\n                  <ion-label style=\"text-align: center;\" style=\"color: red;\">Cancel\n                  </ion-label>\n              </ion-item>\n\n              <ion-grid style=\"width:100%; border-radius:15px;\">\n                  <ion-row>\n                   <ion-col width-50>\n                   <ion-item lines=\"none\" (click)=\"closemodal('SAVE');\" style=\"text-align: center; font-weight:bold; background:transparent; border-bottom-left-radius:15px; border-right:solid 1px #dcdcdc;    width:100%;  text-align:center; height:50px\">\n                      <ion-icon style=\"color: #039CD9;\" name=\"checkmark-outline\"></ion-icon>\n                      <ion-label  style=\"color: #039CD9;\">Save</ion-label>\n                  </ion-item>\n                 </ion-col>\n                 <ion-col width-50>\n                    <ion-item lines=\"none\" tappable (click)=\"closemodal('CANCEL');\" style=\"font-weight:bold; background:transparent; border-bottom-right-radius:15px;  margin:0 auto;  width:100%;  text-align:center; height:50px\">\n                        <ion-icon style=\"color: red;\" slot=\"start\" name=\"close-circle-outline\"></ion-icon>\n                        <ion-label style=\"text-align: center;\" style=\"color: red;\">Cancel\n                        </ion-label>\n                    </ion-item>\n                    </ion-col>\n                  </ion-row>\n                  </ion-grid>\n\n\n\n\n          </td>\n      </tr>\n  </table>\n</ion-footer> -->\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/auth-guard.service */
    "./src/app/services/auth-guard.service.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      },
      canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    }, {
      path: 'actions',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | actions-actions-module */
        [__webpack_require__.e("default~actions-actions-module~compass-compass-module~goalsobjective-goalsobjective-module~progress-~653be762"), __webpack_require__.e("default~action-creation-action-creation-module~actions-actions-module"), __webpack_require__.e("default~action-date-action-date-module~actions-actions-module"), __webpack_require__.e("common"), __webpack_require__.e("actions-actions-module")]).then(__webpack_require__.bind(null,
        /*! ./actions/actions.module */
        "./src/app/actions/actions.module.ts")).then(function (m) {
          return m.ActionsPageModule;
        });
      }
    }, {
      path: 'goals',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | goals-goals-module */
        "goals-goals-module").then(__webpack_require__.bind(null,
        /*! ./goals/goals.module */
        "./src/app/goals/goals.module.ts")).then(function (m) {
          return m.GoalsPageModule;
        });
      }
    }, {
      path: 'objectives',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | objectives-objectives-module */
        "objectives-objectives-module").then(__webpack_require__.bind(null,
        /*! ./objectives/objectives.module */
        "./src/app/objectives/objectives.module.ts")).then(function (m) {
          return m.ObjectivesPageModule;
        });
      }
    }, {
      path: 'settings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | settings-settings-module */
        "settings-settings-module").then(__webpack_require__.bind(null,
        /*! ./settings/settings.module */
        "./src/app/settings/settings.module.ts")).then(function (m) {
          return m.SettingsPageModule;
        });
      }
    }, {
      path: 'logout',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | logout-logout-module */
        "logout-logout-module").then(__webpack_require__.bind(null,
        /*! ./logout/logout.module */
        "./src/app/logout/logout.module.ts")).then(function (m) {
          return m.LogoutPageModule;
        });
      }
    }, {
      path: 'categgories',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | categgories-categgories-module */
        "categgories-categgories-module").then(__webpack_require__.bind(null,
        /*! ./categgories/categgories.module */
        "./src/app/categgories/categgories.module.ts")).then(function (m) {
          return m.CateggoriesPageModule;
        });
      }
    }, {
      path: 'calendar',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | calendar-calendar-module */
        "calendar-calendar-module").then(__webpack_require__.bind(null,
        /*! ./calendar/calendar.module */
        "./src/app/calendar/calendar.module.ts")).then(function (m) {
          return m.CalendarPageModule;
        });
      }
    }, {
      path: 'progressmonitoring',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | progressmonitoring-progressmonitoring-module */
        "progressmonitoring-progressmonitoring-module").then(__webpack_require__.bind(null,
        /*! ./progressmonitoring/progressmonitoring.module */
        "./src/app/progressmonitoring/progressmonitoring.module.ts")).then(function (m) {
          return m.ProgressmonitoringPageModule;
        });
      }
    }, {
      path: 'category-modal',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./categgories/category-modal/category-modal.module */
        "./src/app/categgories/category-modal/category-modal.module.ts")).then(function (m) {
          return m.CategoryModalPageModule;
        });
      }
    }, {
      path: 'welcome',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | welcome-welcome-module */
        "welcome-welcome-module").then(__webpack_require__.bind(null,
        /*! ./welcome/welcome.module */
        "./src/app/welcome/welcome.module.ts")).then(function (m) {
          return m.WelcomePageModule;
        });
      }
    }, {
      path: 'goalsobjective',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | goalsobjective-goalsobjective-module */
        [__webpack_require__.e("default~actions-actions-module~compass-compass-module~goalsobjective-goalsobjective-module~progress-~653be762"), __webpack_require__.e("default~goalsobjective-goal-modal-goal-modal-module~goalsobjective-goalsobjective-module"), __webpack_require__.e("default~goalsobjective-goalsobjective-module~goalsobjective-objective-modal-objective-modal-module"), __webpack_require__.e("goalsobjective-goalsobjective-module")]).then(__webpack_require__.bind(null,
        /*! ./goalsobjective/goalsobjective.module */
        "./src/app/goalsobjective/goalsobjective.module.ts")).then(function (m) {
          return m.GoalsobjectivePageModule;
        });
      }
    }, {
      path: 'goal-modal',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | goalsobjective-goal-modal-goal-modal-module */
        "default~goalsobjective-goal-modal-goal-modal-module~goalsobjective-goalsobjective-module").then(__webpack_require__.bind(null,
        /*! ./goalsobjective/goal-modal/goal-modal.module */
        "./src/app/goalsobjective/goal-modal/goal-modal.module.ts")).then(function (m) {
          return m.GoalModalPageModule;
        });
      }
    }, {
      path: 'objective-modal',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | goalsobjective-objective-modal-objective-modal-module */
        "default~goalsobjective-goalsobjective-module~goalsobjective-objective-modal-objective-modal-module").then(__webpack_require__.bind(null,
        /*! ./goalsobjective/objective-modal/objective-modal.module */
        "./src/app/goalsobjective/objective-modal/objective-modal.module.ts")).then(function (m) {
          return m.ObjectiveModalPageModule;
        });
      }
    }, {
      path: 'action-creation',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | action-creation-action-creation-module */
        "default~action-creation-action-creation-module~actions-actions-module").then(__webpack_require__.bind(null,
        /*! ./action-creation/action-creation.module */
        "./src/app/action-creation/action-creation.module.ts")).then(function (m) {
          return m.ActionCreationPageModule;
        });
      }
    }, {
      path: 'search',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | search-search-module */
        "common").then(__webpack_require__.bind(null,
        /*! ./search/search.module */
        "./src/app/search/search.module.ts")).then(function (m) {
          return m.SearchPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | profile-profile-module */
        "profile-profile-module").then(__webpack_require__.bind(null,
        /*! ./profile/profile.module */
        "./src/app/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'guiding-principles',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | guiding-principles-guiding-principles-module */
        "guiding-principles-guiding-principles-module").then(__webpack_require__.bind(null,
        /*! ./guiding-principles/guiding-principles.module */
        "./src/app/guiding-principles/guiding-principles.module.ts")).then(function (m) {
          return m.GuidingPrinciplesPageModule;
        });
      }
    }, {
      path: 'compass',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | compass-compass-module */
        [__webpack_require__.e("default~actions-actions-module~compass-compass-module~goalsobjective-goalsobjective-module~progress-~653be762"), __webpack_require__.e("default~compass-compass-module~progress-tracker-progress-tracker-module"), __webpack_require__.e("compass-compass-module")]).then(__webpack_require__.bind(null,
        /*! ./compass/compass.module */
        "./src/app/compass/compass.module.ts")).then(function (m) {
          return m.CompassPageModule;
        });
      }
    }, {
      path: 'pulse',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pulse-pulse-module */
        "pulse-pulse-module").then(__webpack_require__.bind(null,
        /*! ./pulse/pulse.module */
        "./src/app/pulse/pulse.module.ts")).then(function (m) {
          return m.PulsePageModule;
        });
      }
    }, {
      path: 'progress-tracker',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | progress-tracker-progress-tracker-module */
        [__webpack_require__.e("default~actions-actions-module~compass-compass-module~goalsobjective-goalsobjective-module~progress-~653be762"), __webpack_require__.e("default~compass-compass-module~progress-tracker-progress-tracker-module"), __webpack_require__.e("progress-tracker-progress-tracker-module")]).then(__webpack_require__.bind(null,
        /*! ./progress-tracker/progress-tracker.module */
        "./src/app/progress-tracker/progress-tracker.module.ts")).then(function (m) {
          return m.ProgressTrackerPageModule;
        });
      }
    }, {
      path: 'forgot-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | forgot-password-forgot-password-module */
        "forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
        /*! ./forgot-password/forgot-password.module */
        "./src/app/forgot-password/forgot-password.module.ts")).then(function (m) {
          return m.ForgotPasswordPageModule;
        });
      }
    }, {
      path: 'change-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | change-password-change-password-module */
        "change-password-change-password-module").then(__webpack_require__.bind(null,
        /*! ./change-password/change-password.module */
        "./src/app/change-password/change-password.module.ts")).then(function (m) {
          return m.ChangePasswordPageModule;
        });
      }
    }, {
      path: 'action-date',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | action-date-action-date-module */
        "default~action-date-action-date-module~actions-actions-module").then(__webpack_require__.bind(null,
        /*! ./action-date/action-date.module */
        "./src/app/action-date/action-date.module.ts")).then(function (m) {
          return m.ActionDatePageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 0px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-end: 20px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.line {\n  border-bottom: 1px solid grey !important;\n}\n\n.custom-avatar {\n  height: 15vw;\n  width: 15vw;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  display: inline-block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.horizontalLine {\n  height: 1px;\n  width: 100px;\n  background: green;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx2aW5vZFxcT25lRHJpdmVcXERvY3VtZW50c1xcR29hbCBzaGFwZXJcXDEwLTA4LTIwMjBcXGdvYWwtc2hhcGVyLW1vYmlsZS1tYXN0ZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBOztFQUVFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyREFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxzREFBQTtBQ0hGOztBRE1BO0VBQ0UsK0JBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSwrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FETUE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FDSkY7O0FET0E7RUFDRSxpQ0FBQTtBQ0pGOztBRE1BO0VBQ0Usd0NBQUE7QUNIRjs7QURVQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDIwcHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubGluZXtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXkgIWltcG9ydGFudDtcbn1cblxuLy8gLmhpZGUtY2FyZCB7XG4vLyAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XG4vLyB9XG5cbi5jdXN0b20tYXZhdGFyIHtcbiAgaGVpZ2h0OiAxNXZ3O1xuICB3aWR0aDogMTV2dztcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5ob3Jpem9udGFsTGluZSB7XG4gIGhlaWdodDoxcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDpncmVlbjtcbiAgbWFyZ2luOiBhdXRvO1xufSIsImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmxpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWF2YXRhciB7XG4gIGhlaWdodDogMTV2dztcbiAgd2lkdGg6IDE1dnc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uaG9yaXpvbnRhbExpbmUge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_globals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/globals.service */
    "./src/app/services/globals.service.ts");
    /* harmony import */


    var _events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./events.service */
    "./src/app/events.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, alertController, splashScreen, statusBar, menuCtrl, storage, route, globals, events) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.alertController = alertController;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.route = route;
        this.globals = globals;
        this.events = events;
        this.selectedIndex = 0;
        this.appPages = [{
          title: 'Actions',
          url: '/actions',
          icon: 'mail',
          subtitle: 'Create and complete towards yours Goals'
        }, // {
        //   title: 'Goals',
        //   url: '/goals',
        //   icon: 'paper-plane'
        // },
        {
          title: 'Goals & Objectives',
          url: '/goalsobjective',
          icon: 'mail',
          subtitle: 'Set your targets'
        }, {
          title: 'Categories',
          url: '/categgories',
          icon: 'paper-plane',
          subtitle: 'Define your focus areas'
        }, {
          title: 'Guiding Principles',
          url: '/guiding-principles',
          icon: 'paper-plane',
          subtitle: 'Spot your North star'
        }, {
          title: 'Compass',
          url: '/compass',
          icon: 'paper-plane',
          subtitle: 'See where you are heading and course correct'
        }, {
          title: 'Pulse',
          url: '/pulse',
          icon: 'paper-plane',
          subtitle: 'Quick goal health check'
        }, {
          title: 'Progress Tracker',
          url: '/progress-tracker',
          icon: 'paper-plane',
          subtitle: 'See where you are heading and course correct'
        }, {
          title: 'Calendar',
          url: '/calendar',
          icon: 'paper-plane'
        }, // {
        //   title: 'Progress Monitoring',
        //   // url: '/progressmonitoring',
        //   icon: 'paper-plane'
        // },
        {
          title: 'Profile',
          url: '/profile',
          icon: 'paper-plane'
        }, {
          title: 'Logout',
          // url: '/logout',
          icon: 'paper-plane'
        }];
        this.displayName = '';
        this.username = '';
        this.profilephoto = '';
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault(); // let status bar overlay webview
            //this.statusBar.overlaysWebView(true);


            if (_this.platform.is('android')) {
              _this.statusBar.backgroundColorByHexString('#000000');

              _this.statusBar.styleLightContent();
            }

            _this.splashScreen.hide();

            _this.events.subscribe('user:created', function (data) {
              console.log(data.user.user.user_name);
              console.log(data.user.user.profile_photo);
              console.log('Welcome: Mr.', data.user.user.user_name);
              console.log('User Daetails');
              console.log(data.user);
              _this.username = data.user.user.user_name;
              _this.displayName = data.user.user.firstname + ' ' + data.user.user.lastname;

              if (data.user.user.profile_photo != null && data.user.user.profile_photo != '' && data.user.user.profile_photo != undefined) {
                console.log('Came here for profile 1');
                _this.profilephoto = data.user.user.profile_photo;
                console.log(_this.profilephoto);
              } else {
                console.log('Came here for profile 2');
                _this.profilephoto = "assets/icon/account.jpeg";
                console.log(_this.profilephoto);
              }
            });
          });
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          this.menuCtrl.close(); // this.menuCtrl.enable(false);
        }
      }, {
        key: "clickedItem",
        value: function clickedItem(p) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('Cliked item');
                    console.log(p);

                    if (p.title == 'Logout') {
                      this.presentAlertConfirm();
                    }

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Logout!',
                      message: 'Do you want to logout?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'yes',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this2.storage.remove('login');

                          _this2.storage.remove('userId');

                          _this2.storage.remove('enterprisedId');

                          _this2.route.navigateByUrl('/login');
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// const path = window.location.pathname.split('folder/')[1];
          // if (path !== undefined) {
          //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
          // }
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          this.menuCtrl.open(); // this.menuCtrl.enable(true);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_globals_service__WEBPACK_IMPORTED_MODULE_7__["GlobalsService"]
      }, {
        type: _events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_globals_service__WEBPACK_IMPORTED_MODULE_7__["GlobalsService"], _events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @mobiscroll/angular */
    "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _categgories_category_modal_category_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./categgories/category-modal/category-modal.module */
    "./src/app/categgories/category-modal/category-modal.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_api_services_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/api-services.service */
    "./src/app/services/api-services.service.ts");
    /* harmony import */


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _focus_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./focus.directive */
    "./src/app/focus.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _focus_directive__WEBPACK_IMPORTED_MODULE_19__["FocusDirective"]],
      entryComponents: [],
      imports: [_mobiscroll_angular__WEBPACK_IMPORTED_MODULE_1__["MbscModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _categgories_category_modal_category_modal_module__WEBPACK_IMPORTED_MODULE_11__["CategoryModalPageModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_17__["PipesModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], _services_api_services_service__WEBPACK_IMPORTED_MODULE_14__["ApiServicesService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_15__["NativeStorage"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_18__["Camera"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
      }],
      exports: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/categgories/category-modal/category-modal-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/categgories/category-modal/category-modal-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: CategoryModalPageRoutingModule */

  /***/
  function srcAppCateggoriesCategoryModalCategoryModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryModalPageRoutingModule", function () {
      return CategoryModalPageRoutingModule;
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


    var _category_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category-modal.page */
    "./src/app/categgories/category-modal/category-modal.page.ts");

    var routes = [{
      path: '',
      component: _category_modal_page__WEBPACK_IMPORTED_MODULE_3__["CategoryModalPage"]
    }];

    var CategoryModalPageRoutingModule = function CategoryModalPageRoutingModule() {
      _classCallCheck(this, CategoryModalPageRoutingModule);
    };

    CategoryModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoryModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/categgories/category-modal/category-modal.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/categgories/category-modal/category-modal.module.ts ***!
    \*********************************************************************/

  /*! exports provided: CategoryModalPageModule */

  /***/
  function srcAppCateggoriesCategoryModalCategoryModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryModalPageModule", function () {
      return CategoryModalPageModule;
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


    var _category_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./category-modal-routing.module */
    "./src/app/categgories/category-modal/category-modal-routing.module.ts");
    /* harmony import */


    var _category_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./category-modal.page */
    "./src/app/categgories/category-modal/category-modal.page.ts");

    var CategoryModalPageModule = function CategoryModalPageModule() {
      _classCallCheck(this, CategoryModalPageModule);
    };

    CategoryModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _category_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryModalPageRoutingModule"]],
      declarations: [_category_modal_page__WEBPACK_IMPORTED_MODULE_6__["CategoryModalPage"]]
    })], CategoryModalPageModule);
    /***/
  },

  /***/
  "./src/app/categgories/category-modal/category-modal.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/categgories/category-modal/category-modal.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCateggoriesCategoryModalCategoryModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".round {\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  height: 15px;\n  left: 0;\n  top: 0;\n  width: 15px;\n  position: relative;\n}\n\n.color1 {\n  --background:#7b7b7b;\n  --background-checked: #7b7b7b;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.color2 {\n  --background: #722fa0;\n  --background-checked: #722fa0;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.color3 {\n  --background: #ffc100;\n  --background-checked: #ffc100;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.color4 {\n  --background: #0671d1;\n  --background-checked: #0671d1;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.color5 {\n  --background: #00b4ef;\n  --background-checked: #00b4ef;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.color6 {\n  --background: #ed0c00;\n  --background-checked: #ed0c00;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.color7 {\n  --background: #fffe00;\n  --background-checked: #fffe00;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.color8 {\n  --background: #00b350;\n  --background-checked: #00b350;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.color9 {\n  --background: #a19e9b;\n  --background-checked: #a19e9b;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.color10 {\n  --background: #f38a0d;\n  --background-checked: #f38a0d;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.color11 {\n  --background: grey;\n  --background-checked: grey;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.color12 {\n  --background: grey;\n  --background-checked: grey;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.color13 {\n  --background: grey;\n  --background-checked: grey;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.color14 {\n  --background: grey;\n  --background-checked: grey;\n  --checkmark-color: white;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  /* increasing overall width not the check icon size */\n  --size:20px !important;\n}\n\n.offset {\n  margin-left: 3.166666667%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdnb3JpZXMvY2F0ZWdvcnktbW9kYWwvQzpcXFVzZXJzXFx2aW5vZFxcT25lRHJpdmVcXERvY3VtZW50c1xcR29hbCBzaGFwZXJcXDEwLTA4LTIwMjBcXGdvYWwtc2hhcGVyLW1vYmlsZS1tYXN0ZXIvc3JjXFxhcHBcXGNhdGVnZ29yaWVzXFxjYXRlZ29yeS1tb2RhbFxcY2F0ZWdvcnktbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9jYXRlZ2dvcmllcy9jYXRlZ29yeS1tb2RhbC9jYXRlZ29yeS1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0QscURBQUE7RUFDQyxzQkFBQTtBQ0NKOztBREdBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNELHFEQUFBO0VBQ0Msc0JBQUE7QUNBRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDRCxxREFBQTtFQUNDLHNCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0QscURBQUE7RUFDQyxzQkFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNELHFEQUFBO0VBQ0Msc0JBQUE7QUNHRjs7QUREQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDRCxxREFBQTtFQUNDLHNCQUFBO0FDSUY7O0FERkE7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0QscURBQUE7RUFDQyxzQkFBQTtBQ0tGOztBREhBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNELHFEQUFBO0VBQ0Msc0JBQUE7QUNNRjs7QURMQztFQUNDLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDRCxxREFBQTtFQUNDLHNCQUFBO0FDUUY7O0FEUEM7RUFDQyxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0QscURBQUE7RUFDQyxzQkFBQTtBQ1VGOztBRFRDO0VBQ0Msa0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNELHFEQUFBO0VBQ0Msc0JBQUE7QUNZRjs7QURYQztFQUNDLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDRCxxREFBQTtFQUNDLHNCQUFBO0FDY0Y7O0FEYkM7RUFDQyxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0QscURBQUE7RUFDQyxzQkFBQTtBQ2dCRjs7QURmQztFQUNDLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDRCxxREFBQTtFQUNDLHNCQUFBO0FDa0JGOztBRGZBO0VBQ0UseUJBQUE7QUNrQkYiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ2dvcmllcy9jYXRlZ29yeS1tb2RhbC9jYXRlZ29yeS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5yb3VuZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbi5jb2xvcjEge1xuICAgIC0tYmFja2dyb3VuZDojN2I3YjdiO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjN2I3YjdiO1xuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gICAvKiBpbmNyZWFzaW5nIG92ZXJhbGwgd2lkdGggbm90IHRoZSBjaGVjayBpY29uIHNpemUgKi9cbiAgICAtLXNpemU6MjBweCAhaW1wb3J0YW50O1xuICAgIC8vIGhlaWdodDogMzBweDtcbiAgICAvLyB3aWR0aDogMzBweDtcbn1cbi5jb2xvcjIge1xuICAtLWJhY2tncm91bmQ6ICM3MjJmYTA7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjNzIyZmEwO1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gLyogaW5jcmVhc2luZyBvdmVyYWxsIHdpZHRoIG5vdCB0aGUgY2hlY2sgaWNvbiBzaXplICovXG4gIC0tc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XG59XG4uY29sb3IzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZjMTAwO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmYzEwMDtcbiAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuIC8qIGluY3JlYXNpbmcgb3ZlcmFsbCB3aWR0aCBub3QgdGhlIGNoZWNrIGljb24gc2l6ZSAqL1xuICAtLXNpemU6MjBweCAhaW1wb3J0YW50O1xufVxuLmNvbG9yNCB7XG4gIC0tYmFja2dyb3VuZDogIzA2NzFkMTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMwNjcxZDE7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAvKiBpbmNyZWFzaW5nIG92ZXJhbGwgd2lkdGggbm90IHRoZSBjaGVjayBpY29uIHNpemUgKi9cbiAgLS1zaXplOjIwcHggIWltcG9ydGFudDtcbn1cbi5jb2xvcjUge1xuICAtLWJhY2tncm91bmQ6ICMwMGI0ZWY7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMDBiNGVmO1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gLyogaW5jcmVhc2luZyBvdmVyYWxsIHdpZHRoIG5vdCB0aGUgY2hlY2sgaWNvbiBzaXplICovXG4gIC0tc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XG59XG4uY29sb3I2IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWQwYzAwO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2VkMGMwMDtcbiAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuIC8qIGluY3JlYXNpbmcgb3ZlcmFsbCB3aWR0aCBub3QgdGhlIGNoZWNrIGljb24gc2l6ZSAqL1xuICAtLXNpemU6MjBweCAhaW1wb3J0YW50O1xufVxuLmNvbG9yNyB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmUwMDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZlMDA7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAvKiBpbmNyZWFzaW5nIG92ZXJhbGwgd2lkdGggbm90IHRoZSBjaGVjayBpY29uIHNpemUgKi9cbiAgLS1zaXplOjIwcHggIWltcG9ydGFudDtcbn1cbi5jb2xvcjgge1xuICAtLWJhY2tncm91bmQ6ICMwMGIzNTA7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMDBiMzUwO1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gLyogaW5jcmVhc2luZyBvdmVyYWxsIHdpZHRoIG5vdCB0aGUgY2hlY2sgaWNvbiBzaXplICovXG4gIC0tc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XG59LmNvbG9yOSB7XG4gIC0tYmFja2dyb3VuZDogI2ExOWU5YjtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNhMTllOWI7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAvKiBpbmNyZWFzaW5nIG92ZXJhbGwgd2lkdGggbm90IHRoZSBjaGVjayBpY29uIHNpemUgKi9cbiAgLS1zaXplOjIwcHggIWltcG9ydGFudDtcbn0uY29sb3IxMCB7XG4gIC0tYmFja2dyb3VuZDogI2YzOGEwZDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmMzhhMGQ7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAvKiBpbmNyZWFzaW5nIG92ZXJhbGwgd2lkdGggbm90IHRoZSBjaGVjayBpY29uIHNpemUgKi9cbiAgLS1zaXplOjIwcHggIWltcG9ydGFudDtcbn0uY29sb3IxMSB7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGdyZXk7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAvKiBpbmNyZWFzaW5nIG92ZXJhbGwgd2lkdGggbm90IHRoZSBjaGVjayBpY29uIHNpemUgKi9cbiAgLS1zaXplOjIwcHggIWltcG9ydGFudDtcbn0uY29sb3IxMiB7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGdyZXk7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAvKiBpbmNyZWFzaW5nIG92ZXJhbGwgd2lkdGggbm90IHRoZSBjaGVjayBpY29uIHNpemUgKi9cbiAgLS1zaXplOjIwcHggIWltcG9ydGFudDtcbn0uY29sb3IxMyB7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGdyZXk7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAvKiBpbmNyZWFzaW5nIG92ZXJhbGwgd2lkdGggbm90IHRoZSBjaGVjayBpY29uIHNpemUgKi9cbiAgLS1zaXplOjIwcHggIWltcG9ydGFudDtcbn0uY29sb3IxNCB7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGdyZXk7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAvKiBpbmNyZWFzaW5nIG92ZXJhbGwgd2lkdGggbm90IHRoZSBjaGVjayBpY29uIHNpemUgKi9cbiAgLS1zaXplOjIwcHggIWltcG9ydGFudDtcbn1cblxuLm9mZnNldHtcbiAgbWFyZ2luLWxlZnQ6My4xNjY2NjY2NjclXG59XG4gICIsIi5yb3VuZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb2xvcjEge1xuICAtLWJhY2tncm91bmQ6IzdiN2I3YjtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM3YjdiN2I7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLyogaW5jcmVhc2luZyBvdmVyYWxsIHdpZHRoIG5vdCB0aGUgY2hlY2sgaWNvbiBzaXplICovXG4gIC0tc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvcjIge1xuICAtLWJhY2tncm91bmQ6ICM3MjJmYTA7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjNzIyZmEwO1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC8qIGluY3JlYXNpbmcgb3ZlcmFsbCB3aWR0aCBub3QgdGhlIGNoZWNrIGljb24gc2l6ZSAqL1xuICAtLXNpemU6MjBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3IzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZjMTAwO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmYzEwMDtcbiAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAvKiBpbmNyZWFzaW5nIG92ZXJhbGwgd2lkdGggbm90IHRoZSBjaGVjayBpY29uIHNpemUgKi9cbiAgLS1zaXplOjIwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbG9yNCB7XG4gIC0tYmFja2dyb3VuZDogIzA2NzFkMTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMwNjcxZDE7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLyogaW5jcmVhc2luZyBvdmVyYWxsIHdpZHRoIG5vdCB0aGUgY2hlY2sgaWNvbiBzaXplICovXG4gIC0tc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvcjUge1xuICAtLWJhY2tncm91bmQ6ICMwMGI0ZWY7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMDBiNGVmO1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC8qIGluY3JlYXNpbmcgb3ZlcmFsbCB3aWR0aCBub3QgdGhlIGNoZWNrIGljb24gc2l6ZSAqL1xuICAtLXNpemU6MjBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3I2IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWQwYzAwO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2VkMGMwMDtcbiAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAvKiBpbmNyZWFzaW5nIG92ZXJhbGwgd2lkdGggbm90IHRoZSBjaGVjayBpY29uIHNpemUgKi9cbiAgLS1zaXplOjIwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbG9yNyB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmUwMDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZlMDA7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLyogaW5jcmVhc2luZyBvdmVyYWxsIHdpZHRoIG5vdCB0aGUgY2hlY2sgaWNvbiBzaXplICovXG4gIC0tc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvcjgge1xuICAtLWJhY2tncm91bmQ6ICMwMGIzNTA7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMDBiMzUwO1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC8qIGluY3JlYXNpbmcgb3ZlcmFsbCB3aWR0aCBub3QgdGhlIGNoZWNrIGljb24gc2l6ZSAqL1xuICAtLXNpemU6MjBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3I5IHtcbiAgLS1iYWNrZ3JvdW5kOiAjYTE5ZTliO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2ExOWU5YjtcbiAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAvKiBpbmNyZWFzaW5nIG92ZXJhbGwgd2lkdGggbm90IHRoZSBjaGVjayBpY29uIHNpemUgKi9cbiAgLS1zaXplOjIwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbG9yMTAge1xuICAtLWJhY2tncm91bmQ6ICNmMzhhMGQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZjM4YTBkO1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC8qIGluY3JlYXNpbmcgb3ZlcmFsbCB3aWR0aCBub3QgdGhlIGNoZWNrIGljb24gc2l6ZSAqL1xuICAtLXNpemU6MjBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3IxMSB7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGdyZXk7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLyogaW5jcmVhc2luZyBvdmVyYWxsIHdpZHRoIG5vdCB0aGUgY2hlY2sgaWNvbiBzaXplICovXG4gIC0tc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvcjEyIHtcbiAgLS1iYWNrZ3JvdW5kOiBncmV5O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogZ3JleTtcbiAgLS1jaGVja21hcmstY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAvKiBpbmNyZWFzaW5nIG92ZXJhbGwgd2lkdGggbm90IHRoZSBjaGVjayBpY29uIHNpemUgKi9cbiAgLS1zaXplOjIwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbG9yMTMge1xuICAtLWJhY2tncm91bmQ6IGdyZXk7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiBncmV5O1xuICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC8qIGluY3JlYXNpbmcgb3ZlcmFsbCB3aWR0aCBub3QgdGhlIGNoZWNrIGljb24gc2l6ZSAqL1xuICAtLXNpemU6MjBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3IxNCB7XG4gIC0tYmFja2dyb3VuZDogZ3JleTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGdyZXk7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLyogaW5jcmVhc2luZyBvdmVyYWxsIHdpZHRoIG5vdCB0aGUgY2hlY2sgaWNvbiBzaXplICovXG4gIC0tc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vZmZzZXQge1xuICBtYXJnaW4tbGVmdDogMy4xNjY2NjY2NjclO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/categgories/category-modal/category-modal.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/categgories/category-modal/category-modal.page.ts ***!
    \*******************************************************************/

  /*! exports provided: CategoryModalPage */

  /***/
  function srcAppCateggoriesCategoryModalCategoryModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryModalPage", function () {
      return CategoryModalPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/globals.service */
    "./src/app/services/globals.service.ts");
    /* harmony import */


    var src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api-services.service */
    "./src/app/services/api-services.service.ts");

    var CategoryModalPage = /*#__PURE__*/function () {
      function CategoryModalPage(navParams, modal, global, apiService) {
        _classCallCheck(this, CategoryModalPage);

        this.navParams = navParams;
        this.modal = modal;
        this.global = global;
        this.apiService = apiService;
        this.circleArray = [{
          'name': 'Miscellaneous',
          'color': 'color1',
          'checked': 'false',
          'passcolor': '#7b7b7b'
        }, {
          'name': 'Family',
          'color': 'color2',
          'checked': 'false',
          'passcolor': '#722fa0'
        }, {
          'name': 'Health',
          'color': 'color3',
          'checked': 'false',
          'passcolor': '#ffc100'
        }, {
          'name': 'Friends',
          'color': 'color4',
          'checked': 'false',
          'passcolor': '#0671d1'
        }, {
          'name': 'Personal Developement',
          'color': 'color5',
          'checked': 'false',
          'passcolor': '#00b4ef'
        }, {
          'name': 'Division Manager',
          'color': 'color6',
          'checked': 'false',
          'passcolor': '#ed0c00'
        }, {
          'name': 'Digital Program Lead',
          'color': 'color7',
          'checked': 'false',
          'passcolor': '#fffe00'
        }, {
          'name': 'Miscellaneous',
          'color': 'color8',
          'checked': 'false',
          'passcolor': '#00b350'
        }, {
          'name': 'Family',
          'color': 'color9',
          'checked': 'false',
          'passcolor': '#a19e9b'
        }, {
          'name': 'Health',
          'color': 'color10',
          'checked': 'false',
          'passcolor': '#f38a0d'
        }];
        this.passColor = '';
        this.categoryId = '';
        this.txtCatagoryName = '';
        this.txtCategoryDescription = '';
        this.filterList = [];
      }

      _createClass(CategoryModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.category = this.navParams.get('passCatagory');
          this.filterList = this.navParams.get('filterList');
          this.txtCatagoryName = this.category.name;
          this.txtCategoryDescription = this.category.description;
          this.passColor = this.category.color;
          this.categoryId = this.category.category_id;
          console.log(this.txtCatagoryName); // console.log(this.txtCategoryDescription);
          // console.log(this.passColor);
          // console.log(this.categoryId);

          console.log(this.filterList);

          for (var i = 0; i < this.filterList.length; i++) {
            if (this.filterList[i].toLowerCase() == this.category.name.toLowerCase()) {
              this.filterList.splice(i, 1);
            }
          }

          for (var i = 0; i < this.circleArray.length; i++) {
            if (this.circleArray[i].passcolor == this.passColor) {
              this.circleArray[i].checked = true;
              console.log(this.circleArray);
            }
          }
        }
      }, {
        key: "updateCategoryMethod",
        value: function updateCategoryMethod() {
          var _this3 = this;

          console.log(this.filterList);

          if (this.filterList.includes(this.txtCatagoryName)) {
            this.global.presentAlert('', 'Duplicate names are not allowed.', '');
          } else {
            var updateJson = {};
            updateJson["name"] = this.txtCatagoryName;
            updateJson["description"] = this.txtCategoryDescription;
            updateJson["color"] = this.passColor;
            updateJson["enterprise_id"] = this.global.enterprisedId;
            updateJson["user_id"] = this.global.userId;
            console.log(updateJson);
            this.global.showLoading();
            this.apiService.updateCategory(this.categoryId, updateJson).subscribe(function (result) {
              _this3.global.hideLoading();

              console.log(result.body);

              _this3.modal.dismiss();
            }, function (error) {
              _this3.global.hideLoading();

              console.log(error);
            });
          }
        }
      }, {
        key: "clickMethod",
        value: function clickMethod(item) {
          console.log(item);
          console.log(item.name);
          this.passColor = item.passcolor; // console.log(item.currentTarget.checked);

          for (var i = 0; i < this.circleArray.length; i++) {
            if (this.circleArray[i].name == item.name) {
              console.log(this.circleArray[i].name);
              console.log(this.circleArray[i].color);
              console.log(this.circleArray[i].passcolor); // this.passColor=this.circleArray[i].passcolor;
              // console.log(this.passColor);
              // this.circleArray[i].checked = true;
            } else {
              this.circleArray[i].checked = false;
            }
          }
        }
      }, {
        key: "closemodal",
        value: function closemodal(value) {
          console.log(value);

          if (value == "SAVE") {
            console.log("clicked save method");
            this.updateCategoryMethod();
          } else {
            console.log("close modal");
            this.modal.dismiss();
          }
        }
      }]);

      return CategoryModalPage;
    }();

    CategoryModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"]
      }, {
        type: src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"]
      }];
    };

    CategoryModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categgories/category-modal/category-modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-modal.page.scss */
      "./src/app/categgories/category-modal/category-modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_globals_service__WEBPACK_IMPORTED_MODULE_3__["GlobalsService"], src_app_services_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"]])], CategoryModalPage);
    /***/
  },

  /***/
  "./src/app/events.service.ts":
  /*!***********************************!*\
    !*** ./src/app/events.service.ts ***!
    \***********************************/

  /*! exports provided: EventsService */

  /***/
  function srcAppEventsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsService", function () {
      return EventsService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var EventsService = /*#__PURE__*/function () {
      function EventsService() {
        _classCallCheck(this, EventsService);

        this.channels = {};
      }
      /**
       * Subscribe to a topic and provide a single handler/observer.
       * @param topic The name of the topic to subscribe to.
       * @param observer The observer or callback function to listen when changes are published.
       *
       * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
       */


      _createClass(EventsService, [{
        key: "subscribe",
        value: function subscribe(topic, observer) {
          if (!this.channels[topic]) {
            this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          }

          return this.channels[topic].subscribe(observer);
        }
        /**
         * Publish some data to the subscribers of the given topic.
         * @param topic The name of the topic to emit data to.
         * @param data data in any format to pass on.
         */

      }, {
        key: "publish",
        value: function publish(topic, data) {
          var subject = this.channels[topic];

          if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
          }

          subject.next(data);
        }
        /**
         * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
         * destroy the observable of the topic using this method.
         * @param topic The name of the topic to destroy.
         */

      }, {
        key: "destroy",
        value: function destroy(topic) {
          var subject = this.channels[topic];

          if (!subject) {
            return;
          }

          subject.complete();
          delete this.channels[topic];
        }
      }]);

      return EventsService;
    }();

    EventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EventsService);
    /***/
  },

  /***/
  "./src/app/focus.directive.ts":
  /*!************************************!*\
    !*** ./src/app/focus.directive.ts ***!
    \************************************/

  /*! exports provided: FocusDirective */

  /***/
  function srcAppFocusDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FocusDirective", function () {
      return FocusDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FocusDirective = /*#__PURE__*/function () {
      function FocusDirective(host, el, zone, renderer) {
        _classCallCheck(this, FocusDirective);

        this.host = host;
        this.el = el;
        this.zone = zone;
        this.renderer = renderer;
      }

      _createClass(FocusDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this4 = this;

          this.zone.runOutsideAngular(function () {
            return setTimeout(function () {
              _this4.renderer.selectRootElement(_this4.el.nativeElement).focus();
            }, 0);
          });
        }
      }]);

      return FocusDirective;
    }();

    FocusDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]
      }];
    };

    FocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appFocus]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])], FocusDirective);
    /***/
  },

  /***/
  "./src/app/pipes/custom.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/custom.pipe.ts ***!
    \**************************************/

  /*! exports provided: UserExtractPipe */

  /***/
  function srcAppPipesCustomPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserExtractPipe", function () {
      return UserExtractPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserExtractPipe = /*#__PURE__*/function () {
      function UserExtractPipe() {
        _classCallCheck(this, UserExtractPipe);
      }

      _createClass(UserExtractPipe, [{
        key: "transform",
        // transform(items: any, filter: any): any {
        //     if (filter && Array.isArray(items)) {
        //         let filterKeys = Object.keys(filter);
        //         return items.filter((item) => {
        //             return filterKeys.some((keyName) => {
        //                 //var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
        //                 //return value.replace(re, "<mark>" + args + "</mark>");
        //                 //let searchValue = new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === '';
        //                 return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === '';
        //             });
        //         });
        //     } else {
        //         return items;
        //     }
        // }
        value: function transform(items, terms) {
          if (!items) return [];
          if (!terms) return items;
          terms = terms.toLowerCase();
          return items.filter(function (it) {
            return it.action.toLowerCase().includes(terms); // only filter country name
          });
        }
      }]);

      return UserExtractPipe;
    }();

    UserExtractPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'userExtract'
    })], UserExtractPipe);
    /***/
  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
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


    var _custom_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./custom.pipe */
    "./src/app/pipes/custom.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_custom_pipe__WEBPACK_IMPORTED_MODULE_2__["UserExtractPipe"]],
      imports: [],
      exports: [_custom_pipe__WEBPACK_IMPORTED_MODULE_2__["UserExtractPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/services/api-services.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/api-services.service.ts ***!
    \**************************************************/

  /*! exports provided: ApiServicesService */

  /***/
  function srcAppServicesApiServicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiServicesService", function () {
      return ApiServicesService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js"); // import { Storage } from '@ionic/storage';


    var ApiServicesService = /*#__PURE__*/function () {
      function ApiServicesService(http) {
        _classCallCheck(this, ApiServicesService);

        this.http = http;
        this.baseUrl = 'http://dev-goalshaper-server.azurewebsites.net';
      }
      /***** Login User *****/


      _createClass(ApiServicesService, [{
        key: "login",
        value: function login(objUser) {
          var URL = this.baseUrl + '/gs/auth/login';
          console.log(URL);
          return this.http.post(URL, objUser, {
            observe: 'response'
          });
        }
        /***** Change Password *****/

      }, {
        key: "changePassword",
        value: function changePassword(body) {
          var url = this.baseUrl + '/gs/user/changePassword';
          return this.http.post(url, body, {
            observe: 'response'
          });
        }
        /***** Forgot-Password *****/

      }, {
        key: "forgotpassword",
        value: function forgotpassword(body) {
          var URL = this.baseUrl + '/gs/user/forgotpassword/';
          console.log(URL);
          return this.http.get(URL + body, {
            observe: 'response'
          });
        }
        /***** Catagories *****/

      }, {
        key: "getCatagories",
        value: function getCatagories(userId, enterpriseId) {
          var URL = this.baseUrl + '/gs/actions/categories/' + userId + '/' + enterpriseId + '';
          console.log(URL);
          return this.http.get(URL, {
            observe: 'response'
          });
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(categoryId, jsonbody) {
          // http://dev-goalshaper-server.azurewebsites.net/gs/actions/categories/2
          var URL = this.baseUrl + '/gs/actions/categories/' + categoryId + '';
          console.log(URL);
          return this.http.put(URL, jsonbody, {
            observe: 'response'
          });
        }
        /***** Goals and Objectives *****/

      }, {
        key: "getAllGoalsObjectives",
        value: function getAllGoalsObjectives(userId, enterpriseId) {
          var URL = this.baseUrl + '/gs/actions/categories/' + userId + '/' + enterpriseId + '';
          console.log(URL);
          return this.http.get(URL, {
            observe: 'response'
          });
        }
      }, {
        key: "getGoals",
        value: function getGoals(userId, enterpriseId) {
          // https://dev-goalshaper-server.azurewebsites.net/gs/goals/all/5?userId=41
          var URL = this.baseUrl + '/gs/goals/all/' + enterpriseId + '?userId=' + userId + '';
          console.log(URL);
          return this.http.get(URL, {
            observe: 'response'
          });
        }
      }, {
        key: "getObjectives",
        value: function getObjectives(userId, enterpriseId) {
          // https://dev-goalshaper-server.azurewebsites.net/gs/objectives/all/5?userId=41
          var URL = this.baseUrl + '/gs/objectives/all/' + enterpriseId + '?userId=' + userId + '';
          console.log(URL);
          return this.http.get(URL, {
            observe: 'response'
          });
        }
        /* Goal Types */

      }, {
        key: "getGoalTypes",
        value: function getGoalTypes(enterpriseId) {
          // https://dev-goalshaper-server.azurewebsites.net/gs/goals/types/1
          var URL = this.baseUrl + '/gs/goals/types/' + enterpriseId + '';
          console.log(URL);
          return this.http.get(URL, {
            observe: 'response'
          });
        }
        /* Goal Levels */

      }, {
        key: "getGoalLevels",
        value: function getGoalLevels(enterpriseId) {
          // https://dev-goalshaper-server.azurewebsites.net/gs/goals/levels/1
          var URL = this.baseUrl + '/gs/goals/levels/' + enterpriseId + '';
          console.log(URL);
          return this.http.get(URL, {
            observe: 'response'
          });
        }
        /* Goal Creation */

      }, {
        key: "createGoal",
        value: function createGoal(objUser) {
          // https://dev-goalshaper-server.azurewebsites.net/gs/goals
          var URL = this.baseUrl + '/gs/goals';
          console.log(URL);
          return this.http.post(URL, objUser, {
            observe: 'response'
          });
        }
        /* Objective Creation */

      }, {
        key: "createObjective",
        value: function createObjective(objUser) {
          // https://dev-goalshaper-server.azurewebsites.net/gs/objectives
          var URL = this.baseUrl + '/gs/objectives';
          console.log(URL);
          return this.http.post(URL, objUser, {
            observe: 'response'
          });
        }
        /* Milestone Creation */

      }, {
        key: "createMilestones",
        value: function createMilestones(objUser) {
          console.log("called api"); // https://dev-goalshaper-server.azurewebsites.net/gs/goals/milestones

          var URL = this.baseUrl + '/gs/goals/milestones';
          console.log(URL);
          return this.http.post(URL, objUser, {
            observe: 'response'
          });
        }
        /* Goal Updation */

      }, {
        key: "updateGoal",
        value: function updateGoal(goalId, objUser) {
          // https://dev-goalshaper-server.azurewebsites.net/gs/goals/11111
          var URL = this.baseUrl + '/gs/goals/' + goalId + '';
          console.log(URL);
          return this.http.put(URL, objUser, {
            observe: 'response'
          });
        }
        /* Objective Updation */

      }, {
        key: "updateObjective",
        value: function updateObjective(objectiveId, objUser) {
          // https://dev-goalshaper-server.azurewebsites.net/gs/objectives/111
          var URL = this.baseUrl + '/gs/objectives/' + objectiveId + '';
          console.log(URL);
          return this.http.put(URL, objUser, {
            observe: 'response'
          });
        }
        /* Get Milestones */
        // getmilestones(enterpriseId,goalId):Observable<HttpResponse<any>> {
        //   let URL = this.baseUrl + '/gs/goals/goals/' + enterpriseId + '/' +goalId+ '';
        //   console.log(URL);
        //   return this.http.get<any>(URL, { observe: 'response' });
        // }
        // Update Milestones.

      }, {
        key: "updateMilestones",
        value: function updateMilestones(milestoneNum, objUser) {
          // https://dev-goalshaper-server.azurewebsites.net/gs/goals/milestones/111
          var URL = this.baseUrl + '/gs/goals/milestones/' + milestoneNum + '';
          console.log(URL);
          return this.http.put(URL, objUser, {
            observe: 'response'
          });
        } // Delete Goals

      }, {
        key: "deleteGoal",
        value: function deleteGoal(enterpriseId, goalId) {
          // https://dev-goalshaper-server.azurewebsites.net/gs/goals/1111/2222
          var URL = this.baseUrl + '/gs/goals/' + enterpriseId + '/' + goalId + '';
          console.log(URL);
          return this.http["delete"](URL, {
            observe: 'response'
          });
        }
      }, {
        key: "deleteMilestoneOfGoal",
        value: function deleteMilestoneOfGoal(enterpriseId, goalId, milestoneNum) {
          // https://dev-goalshaper-server.azurewebsites.net/gs/goals/milestone/11111/11111/111111
          var URL = this.baseUrl + '/gs/goals/milestone/' + enterpriseId + '/' + goalId + '/' + milestoneNum + '/';
          console.log(URL);
          return this.http["delete"](URL, {
            observe: 'response'
          });
        }
      }, {
        key: "deleteObjective",
        value: function deleteObjective(enterpriseId, objectiveId) {
          // https://dev-goalshaper-server.azurewebsites.net/gs/objectives/11111/1111
          var URL = this.baseUrl + '/gs/objectives/' + enterpriseId + '/' + objectiveId + '';
          console.log(URL);
          return this.http["delete"](URL, {
            observe: 'response'
          });
        } // Profile Update

      }, {
        key: "updateUserProfile",
        value: function updateUserProfile(userId, objUser) {
          var URL = this.baseUrl + '/gs/user/update/' + userId + '';
          console.log(URL);
          return this.http.put(URL, objUser, {
            observe: 'response'
          });
        } // Actions
        //  "getCategories":"/gs/actions/categories/{enterprise_id}/{user_id}",
        //  "getActions":"/gs/actions/{enterprise_id}/{user_id}/{category_id}",
        //  "getPriorities":"{enterprise_id}",
        //  "createActions":"/gs/actions",
        //  "updateActions":"/gs/actions/{action_id}",
        //  "deleteActions":"/gs/actions/{enterprise_id}/{action_id}",
        //    //Actions
        //    this.getCategoriesUrl=this.baseURL + this.apiConfig.actions.getCategories;
        //    this.getActionsUrl=this.baseURL + this.apiConfig.actions.getActions;
        //    this.getActionPrioritiesUrl = this.baseURL + this.apiConfig.actions.getPriorities;
        //    this.createActionsUrl = this.baseURL + this.apiConfig.actions.createActions;
        //    this.updateActionsUrl = this.baseURL + this.apiConfig.actions.updateActions;
        //    this.deleteACtionsUrl = this.baseURL + this.apiConfig.actions.deleteActions;
        // 1. Get Actions per category.

      }, {
        key: "getActions",
        value: function getActions(enterpriseId, userId, categoryId) {
          var URL = this.baseUrl + '/gs/actions/' + enterpriseId + '/' + userId + '/' + categoryId;
          console.log(URL);
          return this.http.get(URL, {
            observe: 'response'
          });
        } // 2. Create Actions

      }, {
        key: "createActions",
        value: function createActions(data) {
          var URL = this.baseUrl + '/gs/actions';
          console.log(data);
          console.log(URL);
          return this.http.post(URL, data, {
            observe: 'response'
          });
        } // 2. Update Actions

      }, {
        key: "updateActions",
        value: function updateActions(data, actionId) {
          var URL = this.baseUrl + '/gs/actions/' + actionId;
          console.log(data);
          console.log(URL);
          return this.http.put(URL, data, {
            observe: 'response'
          });
        } // 2. Delete Actions

      }, {
        key: "deleteActions",
        value: function deleteActions(enterpriseId, actionId) {
          var URL = this.baseUrl + '/gs/actions/' + enterpriseId + '/' + actionId;
          console.log(URL);
          return this.http["delete"](URL, {
            observe: 'response'
          });
        } // 1. Get Priorities.

      }, {
        key: "getPriorities",
        value: function getPriorities(enterpriseId) {
          var URL = this.baseUrl + '/gs/actions/priorities/' + enterpriseId;
          console.log(URL);
          return this.http.get(URL, {
            observe: 'response'
          });
        } // 1. Get Priorities.

      }, {
        key: "getMilestones",
        value: function getMilestones(enterpriseId, goalId) {
          var URL = this.baseUrl + '/gs/goals/milestones/' + enterpriseId + '/' + goalId;
          console.log(URL);
          return this.http.get(URL, {
            observe: 'response'
          });
        }
      }]);

      return ApiServicesService;
    }();

    ApiServicesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiServicesService);
    /***/
  },

  /***/
  "./src/app/services/auth-guard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/auth-guard.service.ts ***!
    \************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppServicesAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
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


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _globals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./globals.service */
    "./src/app/services/globals.service.ts");
    /* harmony import */


    var _events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../events.service */
    "./src/app/events.service.ts");

    var AuthGuardService = /*#__PURE__*/function () {
      function AuthGuardService(globals, events, platform, global, storage, router) {
        _classCallCheck(this, AuthGuardService);

        this.globals = globals;
        this.events = events;
        this.platform = platform;
        this.global = global;
        this.storage = storage;
        this.router = router;
      }

      _createClass(AuthGuardService, [{
        key: "canActivate",
        value: function canActivate(route) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.platform.ready().then(function () {});

                  case 2:
                    _context4.next = 4;
                    return this.storage.getItem('login').then(function (result) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this6 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!result) {
                                  _context3.next = 5;
                                  break;
                                }

                                _context3.next = 3;
                                return this.storage.getItem('getFullList').then(function (result) {
                                  if (result.goalInfo.length != 0 || result.objInfo.length != 0) {
                                    _this6.storage.getItem('userdeatils').then(function (data) {
                                      console.log('enterpriseid:', +data);
                                      _this6.global.enterprisedId = data.user.enterprise_id;
                                      _this6.global.userId = data.user.user_id;

                                      _this6.events.publish('user:created', {
                                        user: data
                                      });
                                    }, function (error) {
                                      console.log(error);
                                    });

                                    _this6.router.navigateByUrl('/goalsobjective');
                                  } else {
                                    _this6.router.navigateByUrl('/welcome');
                                  }
                                }, function (error) {
                                  _this6.router.navigateByUrl('/welcome');
                                });

                              case 3:
                                _context3.next = 6;
                                break;

                              case 5:
                                return _context3.abrupt("return", true);

                              case 6:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }, function (error) {
                      return true;
                    });

                  case 4:
                    return _context4.abrupt("return", true);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return AuthGuardService;
    }();

    AuthGuardService.ctorParameters = function () {
      return [{
        type: _globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"]
      }, {
        type: _events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"]
      }, {
        type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"], _events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _globals_service__WEBPACK_IMPORTED_MODULE_5__["GlobalsService"], _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/services/globals.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/globals.service.ts ***!
    \*********************************************/

  /*! exports provided: GlobalsService */

  /***/
  function srcAppServicesGlobalsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalsService", function () {
      return GlobalsService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var GlobalsService = /*#__PURE__*/function () {
      function GlobalsService(loadingController, alert, toast) {
        _classCallCheck(this, GlobalsService);

        this.loadingController = loadingController;
        this.alert = alert;
        this.toast = toast;
        this.enterprisedId = '';
        this.userId = '';
        this.goal_type_id_profsnal = '';
        this.goal_type_id_persnal = '';
      }

      _createClass(GlobalsService, [{
        key: "showLoading",
        value: function showLoading() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait...',
                      // duration: 2000
                      spinner: "lines",
                      translucent: true,
                      cssClass: 'custom-loader-class',
                      backdropDismiss: true
                    });

                  case 2:
                    this.loader = _context5.sent;
                    _context5.next = 5;
                    return this.loader.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "hideLoading",
        value: function hideLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var element;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingController.getTop();

                  case 2:
                    element = _context6.sent;

                    if (!element) {
                      _context6.next = 6;
                      break;
                    }

                    _context6.next = 6;
                    return this.loadingController.dismiss();

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(title, subtitle, message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alert.create({
                      cssClass: 'my-custom-class',
                      header: title,
                      subHeader: subtitle,
                      message: message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context7.sent;
                    _context7.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.alert.create({
                      cssClass: 'my-custom-class',
                      header: 'Confirm!',
                      message: 'Message <strong>text</strong>!!!',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Okay',
                        handler: function handler() {
                          console.log('Confirm Okay');
                        }
                      }]
                    });

                  case 2:
                    alert = _context8.sent;
                    _context8.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        } // async showLoading() {
        //   const loading = await this.loading.create({
        //     // message: 'Please wait...',
        //     // duration: 2000
        //     spinner:"lines",
        //     translucent: true,
        //     cssClass:'custom-loader-class',
        //     // backdropDismiss: true
        //   });
        //   await loading.present();
        // }
        // async hideLoading(){
        //   await this.loading.dismiss();
        // }

      }, {
        key: "presentToast",
        value: function presentToast(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var toast;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.toast.create({
                      message: msg,
                      duration: 2000
                    });

                  case 2:
                    toast = _context9.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return GlobalsService;
    }();

    GlobalsService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    GlobalsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], GlobalsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\vinod\OneDrive\Documents\Goal shaper\10-08-2020\goal-shaper-mobile-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
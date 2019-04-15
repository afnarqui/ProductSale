(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generic-class-generic-class-module"],{

/***/ "./src/app/theme/ui-elements/basic/generic-class/generic-class-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/generic-class/generic-class-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: GenericClassRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericClassRoutingModule", function() { return GenericClassRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _generic_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generic-class.component */ "./src/app/theme/ui-elements/basic/generic-class/generic-class.component.ts");




var routes = [
    {
        path: '',
        component: _generic_class_component__WEBPACK_IMPORTED_MODULE_3__["GenericClassComponent"],
        data: {
            title: 'Generic Class',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - generic class',
            status: true
        }
    }
];
var GenericClassRoutingModule = /** @class */ (function () {
    function GenericClassRoutingModule() {
    }
    GenericClassRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GenericClassRoutingModule);
    return GenericClassRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/generic-class/generic-class.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/generic-class/generic-class.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 col-xl-6\">\r\n    <!-- Margin card start -->\r\n    <app-card [cardClass]=\"'tab-card'\">\r\n      <div class=\"md-tabs\">\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"Margin\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Margin </h6>\r\n                <code placement=\"top\" ngbTooltip=\"margin-0\" ngbTooltip=\"margin-0\">.m-0</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-5\">.m-5</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-10\">.m-10</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-15\">.m-15</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-20\">.m-20</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-25\">.m-25</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-30\">.m-30</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-40\">.m-40</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-50\">.m-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Margin Top </h6>\r\n                <code placement=\"top\" ngbTooltip=\"margin-top-0\">.m-t-0</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-top-5\">.m-t-5</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-top-10\">.m-t-10</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-top-15\">.m-t-15</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-top-20\">.m-t-20</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-top-25\">.m-t-25</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-top-30\">.m-t-30</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-top-40\">.m-t-40</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-top-50\">.m-t-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Margin Bottom </h6>\r\n                <code placement=\"top\" ngbTooltip=\"margin-bottom-0\">.m-b-0</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-bottom-5\">.m-b-5</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-bottom-10\">.m-b-10</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-bottom-15\">.m-b-15</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-bottom-20\">.m-b-20</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-bottom-25\">.m-b-25</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-bottom-30\">.m-b-30</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-bottom-40\">.m-b-40</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-bottom-50\">.m-b-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Margin Left </h6>\r\n                <code placement=\"top\" ngbTooltip=\"margin-left-0\">.m-l-0</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-left-5\">.m-l-5</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-left-10\">.m-l-10</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-left-15\">.m-l-15</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-left-20\">.m-l-20</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-left-25\">.m-l-25</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-left-30\">.m-l-30</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-left-40\">.m-l-40</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-left-50\">.m-l-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Margin right </h6>\r\n                <code placement=\"top\" ngbTooltip=\"margin-right-0\">.m-r-0</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-right-5\">.m-r-5</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-right-10\">.m-r-10</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-right-15\">.m-r-15</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-right-20\">.m-r-20</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-right-25\">.m-r-25</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-right-30\">.m-r-30</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-right-40\">.m-r-40</code>\r\n                <code placement=\"top\" ngbTooltip=\"margin-right-50\">.m-r-50</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Padding\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Padding </h6>\r\n                <code placement=\"top\" ngbTooltip=\"padding-0\">.p-0</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-5\">.p-5</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-10\">.p-10</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-15\">.p-15</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-20\">.p-20</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-25\">.p-25</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-30\">.p-30</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-40\">.p-40</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-50\">.p-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Padding Top </h6>\r\n                <code placement=\"top\" ngbTooltip=\"padding-top-0\">.p-t-0</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-top-5\">.p-t-5</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-top-10\">.p-t-10</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-top-15\">.p-t-15</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-top-20\">.p-t-20</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-top-25\">.p-t-25</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-top-30\">.p-t-30</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-top-40\">.p-t-40</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-top-50\">.p-t-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Padding Bottom </h6>\r\n                <code placement=\"top\" ngbTooltip=\"padding-bottom-0\">.p-b-0</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-bottom-5\">.p-b-5</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-bottom-10\">.p-b-10</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-bottom-15\">.p-b-15</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-bottom-20\">.p-b-20</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-bottom-25\">.p-b-25</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-bottom-30\">.p-b-30</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-bottom-40\">.p-b-40</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-bottom-50\">.p-b-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Padding Left </h6>\r\n                <code placement=\"top\" ngbTooltip=\"padding-left-0\">.p-l-0</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-left-5\">.p-l-5</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-left-10\">.p-l-10</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-left-15\">.p-l-15</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-left-20\">.p-l-20</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-left-25\">.p-l-25</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-left-30\">.p-l-30</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-left-40\">.p-l-40</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-left-50\">.p-l-50</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Padding right </h6>\r\n                <code placement=\"top\" ngbTooltip=\"padding-right-0\">.p-r-0</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-right-5\">.p-r-5</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-right-10\">.p-r-10</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-right-15\">.p-r-15</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-right-20\">.p-r-20</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-right-25\">.p-r-25</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-right-30\">.p-r-30</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-right-40\">.p-r-40</code>\r\n                <code placement=\"top\" ngbTooltip=\"padding-right-50\">.p-r-50</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </app-card>\r\n    <!-- Margin card end -->\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-6\">\r\n    <!-- font & aligment card start -->\r\n    <app-card [cardClass]=\"'tab-card'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"md-tabs\">\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"Font\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Font-size </h6>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-12\">.f-12</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-14\">.f-14</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-16\">.f-16</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-18\">.f-18</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-20\">.f-20</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-24\">.f-24</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-26\">.f-26</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-28\">.f-28</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-30\">.f-30</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-35\">.f-35</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-40\">.f-40</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-45\">.f-45</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-52\">.f-52</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-size-64\">.f-64</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Font-Weight </h6>\r\n                <code placement=\"top\" ngbTooltip=\"font-weight-100\">.f-w-100</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-weight-300\">.f-w-300</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-weight-400\">.f-w-400</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-weight-600\">.f-w-600</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-weight-700\">.f-w-700</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-weight-900\">.f-w-900</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Font-Style </h6>\r\n                <code placement=\"top\" ngbTooltip=\"font-normal\">.f-s-normal</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-italic\">.f-s-italic</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-oblique\">.f-s-oblique</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-intial\">.f-s-intial</code>\r\n                <code placement=\"top\" ngbTooltip=\"font-inherit\">.f-s-inherit</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Alignment\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Text-align </h6>\r\n                <code placement=\"top\" ngbTooltip=\"Center-Text\">.text-center</code>\r\n                <code placement=\"top\" ngbTooltip=\"Left-Text\">.text-left</code>\r\n                <code placement=\"top\" ngbTooltip=\"Right-Text\">.text-right</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Text-transform </h6>\r\n                <code placement=\"top\" ngbTooltip=\"All Capital Text\">.text-uppercase</code>\r\n                <code placement=\"top\" ngbTooltip=\"Lower case Text\">.text-lowercase</code>\r\n                <code placement=\"top\" ngbTooltip=\"Capitalize Text\">.text-capitalize</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Text-decoration </h6>\r\n                <code placement=\"top\" ngbTooltip=\"Overline\">.text-overline</code>\r\n                <code placement=\"top\" ngbTooltip=\"Line-Throught Text\">.text-through</code>\r\n                <code placement=\"top\" ngbTooltip=\"Underline\">.text-underline</code>\r\n                <br>\r\n                <br>\r\n                <h6 class=\"sub-title\">Vertical-align </h6>\r\n                <code placement=\"top\" ngbTooltip=\"Baseline\">.baseline</code>\r\n                <code placement=\"top\" ngbTooltip=\"Sub\">.sub</code>\r\n                <code placement=\"top\" ngbTooltip=\"Super\">.super</code>\r\n                <code placement=\"top\" ngbTooltip=\"Top\">.top</code>\r\n                <code placement=\"top\" ngbTooltip=\"Text Top\">.text-top</code>\r\n                <code placement=\"top\" ngbTooltip=\"Middle\">.middle</code>\r\n                <code placement=\"top\" ngbTooltip=\"Bottom\">.bottom</code>\r\n                <code placement=\"top\" ngbTooltip=\"Text Bottom\">.text-bottom</code>\r\n                <code placement=\"top\" ngbTooltip=\"Initial\">.initial</code>\r\n                <code placement=\"top\" ngbTooltip=\"Inherit\">.inherit</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </app-card>\r\n    <!-- Font & aligment card end -->\r\n    <!-- Position, float and oveflow card start -->\r\n    <app-card [cardClass]=\"'tab-card'\">\r\n      <div class=\"md-tabs\">\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"Position\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Position </h6>\r\n                <code placement=\"top\" ngbTooltip=\"Static\">.pos-static</code>\r\n                <code placement=\"top\" ngbTooltip=\"Absolute\">.pos-absolute</code>\r\n                <code placement=\"top\" ngbTooltip=\"Relative\">.pos-relative</code>\r\n                <code placement=\"top\" ngbTooltip=\"Fixed\">.pos-fixed</code>\r\n                <code placement=\"top\" ngbTooltip=\"Intial\">.pos-intial</code>\r\n                <code placement=\"top\" ngbTooltip=\"Inherit\">.pos-inherit</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Float\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Float </h6>\r\n                <code placement=\"top\" ngbTooltip=\"FLoat-left\">.f-left</code>\r\n                <code placement=\"top\" ngbTooltip=\"Float-right\">.float-right</code>\r\n                <code placement=\"top\" ngbTooltip=\"Float-none\">.f-none</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Overflow\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Overflow </h6>\r\n                <code placement=\"top\" ngbTooltip=\"Overflow Hidden\">.o-hidden</code>\r\n                <code placement=\"top\" ngbTooltip=\"Overflow Auto\">.o-auto</code>\r\n                <code placement=\"top\" ngbTooltip=\"Overflow Visible\">.o-visible</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </app-card>\r\n    <!-- Position, float and oveflow card end -->\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <!-- background color and color start -->\r\n    <app-card [cardClass]=\"'tab-card'\">\r\n      <div class=\"md-tabs\">\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"BackGround-color\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Background color</h6>\r\n                <div class=\"bg-color-box color-default waves-effect waves-light\" placement=\"top\" ngbTooltip=\"color-default\"><span>.color-default</span></div>\r\n                <div class=\"bg-color-box color-primary waves-effect waves-light\" placement=\"top\" ngbTooltip=\"color-primary\"><span>.color-primary</span></div>\r\n                <div class=\"bg-color-box color-success waves-effect waves-light\" placement=\"top\" ngbTooltip=\"color-success\"><span>.color-success</span></div>\r\n                <div class=\"bg-color-box color-info waves-effect waves-light\" placement=\"top\" ngbTooltip=\"color-info\"><span>.color-info</span></div>\r\n                <div class=\"bg-color-box color-warning waves-effect waves-light\" placement=\"top\" ngbTooltip=\"color-warning\"><span>.color-warning</span></div>\r\n                <div class=\"bg-color-box color-danger waves-effect waves-light\" placement=\"top\" ngbTooltip=\"color-danger\"><span>.color-danger</span></div>\r\n                <div class=\"bg-color-box color-inverse waves-effect waves-light\" placement=\"top\" ngbTooltip=\"color-inverse\"><span>.color-inverse</span></div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Text-color\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\" placement=\"top\" ngbTooltip=\"sub-title\">Text color</h6>\r\n                <code class=\"text-default\" placement=\"top\" ngbTooltip=\"text-default\">.text-default</code>\r\n                <code class=\"text-primary\" placement=\"top\" ngbTooltip=\"text-primary\">.text-primary</code>\r\n                <code class=\"text-muted\" placement=\"top\" ngbTooltip=\"text-muted\">.text-muted</code>\r\n                <code class=\"text-success\" placement=\"top\" ngbTooltip=\"text-success\">.text-success</code>\r\n                <code class=\"text-info\" placement=\"top\" ngbTooltip=\"text-info\">.text-info</code>\r\n                <code class=\"text-warning\" placement=\"top\" ngbTooltip=\"text-warning\">.text-warning</code>\r\n                <code class=\"text-danger\" placement=\"top\" ngbTooltip=\"text-danger\">.text-danger</code>\r\n                <code class=\"text-inverse\" placement=\"top\" ngbTooltip=\"text-inverse\">.text-inverse</code>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </app-card>\r\n    <!-- background color and color end -->\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <!-- Image size card start -->\r\n    <app-card [cardClass]=\"'tab-card'\" [blockClass]=\"'generic-image-body'\">\r\n      <div class=\"md-tabs\">\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"Image size\">\r\n            <ng-template ngbTabContent>\r\n              <div [@fadeInOutTranslate] class=\"m-t-15\">\r\n                <h6 class=\"sub-title\">Image Size </h6>\r\n                <ul>\r\n                  <li>\r\n                    <code placement=\"top\" ngbTooltip=\"img-20\">.img-20</code>\r\n                    <img src=\"assets/images/avatar-4.jpg\" class=\"img-20\" alt=\"avatar-4.jpg\">\r\n                  </li>\r\n                  <li>\r\n                    <code placement=\"top\" ngbTooltip=\"img-30\">.img-30</code>\r\n                    <img src=\"assets/images/avatar-4.jpg\" class=\"img-30\" alt=\"avatar-4.jpg\">\r\n                  </li>\r\n                  <li>\r\n                    <code placement=\"top\" ngbTooltip=\"img-40\">.img-40</code>\r\n                    <img src=\"assets/images/avatar-4.jpg\" class=\"img-40\" alt=\"avatar-4.jpg\">\r\n                  </li>\r\n                  <li>\r\n                    <code placement=\"top\" ngbTooltip=\"img-50\">.img-50</code>\r\n                    <img src=\"assets/images/avatar-4.jpg\" class=\"img-50\" alt=\"avatar-4.jpg\">\r\n                  </li>\r\n                  <li>\r\n                    <code placement=\"top\" ngbTooltip=\"img-60\">.img-60</code>\r\n                    <img src=\"assets/images/avatar-4.jpg\" class=\"img-60\" alt=\"avatar-4.jpg\">\r\n                  </li>\r\n                  <li>\r\n                    <code placement=\"top\" ngbTooltip=\"img-70\">.img-70</code>\r\n                    <img src=\"assets/images/avatar-4.jpg\" class=\"img-70\" alt=\"avatar-4.jpg\">\r\n                  </li>\r\n                  <li>\r\n                    <code placement=\"top\" ngbTooltip=\"img-80\">.img-80</code>\r\n                    <img src=\"assets/images/avatar-4.jpg\" class=\"img-80\" alt=\"avatar-4.jpg\">\r\n                  </li>\r\n                  <li>\r\n                    <code placement=\"top\" ngbTooltip=\"img-90\">.img-90</code>\r\n                    <img src=\"assets/images/avatar-4.jpg\" class=\"img-90\" alt=\"avatar-4.jpg\">\r\n                  </li>\r\n                  <li>\r\n                    <code placement=\"top\" ngbTooltip=\"img-100\">.img-100</code>\r\n                    <img src=\"assets/images/avatar-4.jpg\" class=\"img-100\" alt=\"avatar-4.jpg\">\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </app-card>\r\n    <!-- Image size card start -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/generic-class/generic-class.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/generic-class/generic-class.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpLWVsZW1lbnRzL2Jhc2ljL2dlbmVyaWMtY2xhc3MvZ2VuZXJpYy1jbGFzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/generic-class/generic-class.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/generic-class/generic-class.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GenericClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericClassComponent", function() { return GenericClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var GenericClassComponent = /** @class */ (function () {
    function GenericClassComponent() {
    }
    GenericClassComponent.prototype.ngOnInit = function () {
    };
    GenericClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generic-class',
            template: __webpack_require__(/*! ./generic-class.component.html */ "./src/app/theme/ui-elements/basic/generic-class/generic-class.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOutTranslate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translate(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./generic-class.component.scss */ "./src/app/theme/ui-elements/basic/generic-class/generic-class.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GenericClassComponent);
    return GenericClassComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/generic-class/generic-class.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/generic-class/generic-class.module.ts ***!
  \*******************************************************************************/
/*! exports provided: GenericClassModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericClassModule", function() { return GenericClassModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _generic_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generic-class.component */ "./src/app/theme/ui-elements/basic/generic-class/generic-class.component.ts");
/* harmony import */ var _generic_class_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generic-class-routing.module */ "./src/app/theme/ui-elements/basic/generic-class/generic-class-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var GenericClassModule = /** @class */ (function () {
    function GenericClassModule() {
    }
    GenericClassModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _generic_class_routing_module__WEBPACK_IMPORTED_MODULE_4__["GenericClassRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_generic_class_component__WEBPACK_IMPORTED_MODULE_3__["GenericClassComponent"]]
        })
    ], GenericClassModule);
    return GenericClassModule;
}());



/***/ })

}]);
//# sourceMappingURL=generic-class-generic-class-module.js.map
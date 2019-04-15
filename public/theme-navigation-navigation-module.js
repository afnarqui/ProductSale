(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-navigation-navigation-module"],{

/***/ "./src/app/theme/navigation/navigation-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/navigation/navigation-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NavigationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationRoutingModule", function() { return NavigationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.component */ "./src/app/theme/navigation/navigation.component.ts");




var routes = [
    {
        path: '',
        component: _navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
        data: {
            title: 'variants of nav bar',
            icon: 'icon-layout-cta-right',
            caption: 'variants color of nav bar',
            status: true
        }
    }
];
var NavigationRoutingModule = /** @class */ (function () {
    function NavigationRoutingModule() {
    }
    NavigationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NavigationRoutingModule);
    return NavigationRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/navigation/navigation.component.html":
/*!************************************************************!*\
  !*** ./src/app/theme/navigation/navigation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body navbar-page\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- Custom Dark Colors card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Custom Colors ( Dark )</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <h4 class=\"sub-title\">\r\n            header-theme=\"theme1\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"theme1\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav1.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"theme2\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"theme2\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav2.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"theme3\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"theme3\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav3.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"theme4\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"theme4\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav4.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"theme5\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"theme5\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav5.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n          <h4 class=\"sub-title m-t-30\">\r\n            header-theme=\"theme6\"\r\n          </h4>\r\n          <p class=\"m-b-10\">Add <code>header-theme=\"theme6\"</code> attribute in <code>.pcoded-header</code> class</p>\r\n          <img src=\"assets/images/nav-bar/nav6.jpg\" class=\"img-fluid nav-img\" alt=\"\">\r\n        </div>\r\n      </div>\r\n      <!-- Custom Dark Colors card end -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/navigation/navigation.component.scss":
/*!************************************************************!*\
  !*** ./src/app/theme/navigation/navigation.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/navigation/navigation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/theme/navigation/navigation.component.ts ***!
  \**********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/theme/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/theme/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/theme/navigation/navigation.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/navigation/navigation.module.ts ***!
  \*******************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.component */ "./src/app/theme/navigation/navigation.component.ts");
/* harmony import */ var _navigation_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation-routing.module */ "./src/app/theme/navigation/navigation-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _navigation_routing_module__WEBPACK_IMPORTED_MODULE_4__["NavigationRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]]
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-navigation-navigation-module.js.map
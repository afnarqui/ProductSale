(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme-simple-page-simple-page-module"],{

/***/ "./src/app/theme/simple-page/simple-page-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/simple-page/simple-page-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SimplePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageRoutingModule", function() { return SimplePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _simple_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-page.component */ "./src/app/theme/simple-page/simple-page.component.ts");




var routes = [
    {
        path: '',
        component: _simple_page_component__WEBPACK_IMPORTED_MODULE_3__["SimplePageComponent"],
        data: {
            title: 'Sample Page',
            icon: 'icon-layout-sidebar-left',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
            status: true
        }
    }
];
var SimplePageRoutingModule = /** @class */ (function () {
    function SimplePageRoutingModule() {
    }
    SimplePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SimplePageRoutingModule);
    return SimplePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/theme/simple-page/simple-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/theme/simple-page/simple-page.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NpbXBsZS1wYWdlL3NpbXBsZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/simple-page/simple-page.component.ts ***!
  \************************************************************/
/*! exports provided: SimplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageComponent", function() { return SimplePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SimplePageComponent = /** @class */ (function () {
    function SimplePageComponent() {
    }
    SimplePageComponent.prototype.ngOnInit = function () {
    };
    SimplePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simple-page',
            template: __webpack_require__(/*! ./simple-page.component.html */ "./src/app/theme/simple-page/simple-page.component.html"),
            styles: [__webpack_require__(/*! ./simple-page.component.scss */ "./src/app/theme/simple-page/simple-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SimplePageComponent);
    return SimplePageComponent;
}());



/***/ }),

/***/ "./src/app/theme/simple-page/simple-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/theme/simple-page/simple-page.module.ts ***!
  \*********************************************************/
/*! exports provided: SimplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageModule", function() { return SimplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _simple_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-page.component */ "./src/app/theme/simple-page/simple-page.component.ts");
/* harmony import */ var _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-page-routing.module */ "./src/app/theme/simple-page/simple-page-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var SimplePageModule = /** @class */ (function () {
    function SimplePageModule() {
    }
    SimplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["SimplePageRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_simple_page_component__WEBPACK_IMPORTED_MODULE_3__["SimplePageComponent"]]
        })
    ], SimplePageModule);
    return SimplePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=theme-simple-page-simple-page-module.js.map
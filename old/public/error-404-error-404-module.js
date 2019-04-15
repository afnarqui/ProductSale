(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-404-error-404-module"],{

/***/ "./src/app/theme/maintenance/error/error-404/error-404-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-404/error-404-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: Error404RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404RoutingModule", function() { return Error404RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-404.component */ "./src/app/theme/maintenance/error/error-404/error-404.component.ts");




var routes = [
    {
        path: '',
        component: _error_404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"],
        data: {
            title: 'Error 404'
        }
    }
];
var Error404RoutingModule = /** @class */ (function () {
    function Error404RoutingModule() {
    }
    Error404RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Error404RoutingModule);
    return Error404RoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/maintenance/error/error-404/error-404.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-404/error-404.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-400\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"text-uppercase text-center\">\r\n          <h1>404</h1>\r\n          <h5>PAGE NOT FOUND !</h5>\r\n          <p class=\"text-muted\">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>\r\n          <a [routerLink]=\"['/dashboard/default']\" class=\"btn btn-primary btn-lg ripple\">Back to Home</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/maintenance/error/error-404/error-404.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-404/error-404.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21haW50ZW5hbmNlL2Vycm9yL2Vycm9yLTQwNC9lcnJvci00MDQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/maintenance/error/error-404/error-404.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-404/error-404.component.ts ***!
  \**************************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-404',
            template: __webpack_require__(/*! ./error-404.component.html */ "./src/app/theme/maintenance/error/error-404/error-404.component.html"),
            styles: [__webpack_require__(/*! ./error-404.component.scss */ "./src/app/theme/maintenance/error/error-404/error-404.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/theme/maintenance/error/error-404/error-404.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-404/error-404.module.ts ***!
  \***********************************************************************/
/*! exports provided: Error404Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Module", function() { return Error404Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_404_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-404-routing.module */ "./src/app/theme/maintenance/error/error-404/error-404-routing.module.ts");
/* harmony import */ var _error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-404.component */ "./src/app/theme/maintenance/error/error-404/error-404.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var Error404Module = /** @class */ (function () {
    function Error404Module() {
    }
    Error404Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _error_404_routing_module__WEBPACK_IMPORTED_MODULE_3__["Error404RoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_error_404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"]]
        })
    ], Error404Module);
    return Error404Module;
}());



/***/ })

}]);
//# sourceMappingURL=error-404-error-404-module.js.map
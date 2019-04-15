(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-403-error-403-module"],{

/***/ "./src/app/theme/maintenance/error/error-403/error-403-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-403/error-403-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: Error403RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error403RoutingModule", function() { return Error403RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_403_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-403.component */ "./src/app/theme/maintenance/error/error-403/error-403.component.ts");




var routes = [
    {
        path: '',
        component: _error_403_component__WEBPACK_IMPORTED_MODULE_3__["Error403Component"],
        data: {
            title: 'Error 403'
        }
    }
];
var Error403RoutingModule = /** @class */ (function () {
    function Error403RoutingModule() {
    }
    Error403RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Error403RoutingModule);
    return Error403RoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/maintenance/error/error-403/error-403.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-403/error-403.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-400\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"text-uppercase text-center\">\r\n          <h1>403</h1>\r\n          <h5>FORBIDDEN ERROR!</h5>\r\n          <p class=\"text-muted\">YOU DON'T HAVE PERMISSION TO ACCESS ON THIS SERVER.</p>\r\n          <a [routerLink]=\"['/dashboard/default']\" class=\"btn btn-primary btn-lg ripple\">Back to Home</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/maintenance/error/error-403/error-403.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-403/error-403.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21haW50ZW5hbmNlL2Vycm9yL2Vycm9yLTQwMy9lcnJvci00MDMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/maintenance/error/error-403/error-403.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-403/error-403.component.ts ***!
  \**************************************************************************/
/*! exports provided: Error403Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error403Component", function() { return Error403Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Error403Component = /** @class */ (function () {
    function Error403Component() {
    }
    Error403Component.prototype.ngOnInit = function () {
    };
    Error403Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-403',
            template: __webpack_require__(/*! ./error-403.component.html */ "./src/app/theme/maintenance/error/error-403/error-403.component.html"),
            styles: [__webpack_require__(/*! ./error-403.component.scss */ "./src/app/theme/maintenance/error/error-403/error-403.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Error403Component);
    return Error403Component;
}());



/***/ }),

/***/ "./src/app/theme/maintenance/error/error-403/error-403.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-403/error-403.module.ts ***!
  \***********************************************************************/
/*! exports provided: Error403Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error403Module", function() { return Error403Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_403_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-403-routing.module */ "./src/app/theme/maintenance/error/error-403/error-403-routing.module.ts");
/* harmony import */ var _error_403_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-403.component */ "./src/app/theme/maintenance/error/error-403/error-403.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var Error403Module = /** @class */ (function () {
    function Error403Module() {
    }
    Error403Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _error_403_routing_module__WEBPACK_IMPORTED_MODULE_3__["Error403RoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_error_403_component__WEBPACK_IMPORTED_MODULE_4__["Error403Component"]]
        })
    ], Error403Module);
    return Error403Module;
}());



/***/ })

}]);
//# sourceMappingURL=error-403-error-403-module.js.map
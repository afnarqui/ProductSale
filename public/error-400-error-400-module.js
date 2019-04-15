(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-400-error-400-module"],{

/***/ "./src/app/theme/maintenance/error/error-400/error-400-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-400/error-400-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: Error400RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error400RoutingModule", function() { return Error400RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_400_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-400.component */ "./src/app/theme/maintenance/error/error-400/error-400.component.ts");




var routes = [
    {
        path: '',
        component: _error_400_component__WEBPACK_IMPORTED_MODULE_3__["Error400Component"],
        data: {
            title: 'Error 400'
        }
    }
];
var Error400RoutingModule = /** @class */ (function () {
    function Error400RoutingModule() {
    }
    Error400RoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], Error400RoutingModule);
    return Error400RoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/maintenance/error/error-400/error-400.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-400/error-400.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-400\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"text-uppercase text-center\">\r\n          <h1>400</h1>\r\n          <h5>BAD CLIENT REQUEST !</h5>\r\n          <p class=\"text-muted\">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>\r\n          <a [routerLink]=\"['/dashboard/default']\" class=\"btn btn-primary btn-lg ripple\">Back to Home</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/maintenance/error/error-400/error-400.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-400/error-400.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL21haW50ZW5hbmNlL2Vycm9yL2Vycm9yLTQwMC9lcnJvci00MDAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/maintenance/error/error-400/error-400.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-400/error-400.component.ts ***!
  \**************************************************************************/
/*! exports provided: Error400Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error400Component", function() { return Error400Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Error400Component = /** @class */ (function () {
    function Error400Component() {
    }
    Error400Component.prototype.ngOnInit = function () {
    };
    Error400Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-400',
            template: __webpack_require__(/*! ./error-400.component.html */ "./src/app/theme/maintenance/error/error-400/error-400.component.html"),
            styles: [__webpack_require__(/*! ./error-400.component.scss */ "./src/app/theme/maintenance/error/error-400/error-400.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Error400Component);
    return Error400Component;
}());



/***/ }),

/***/ "./src/app/theme/maintenance/error/error-400/error-400.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/maintenance/error/error-400/error-400.module.ts ***!
  \***********************************************************************/
/*! exports provided: Error400Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error400Module", function() { return Error400Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_400_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-400-routing.module */ "./src/app/theme/maintenance/error/error-400/error-400-routing.module.ts");
/* harmony import */ var _error_400_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-400.component */ "./src/app/theme/maintenance/error/error-400/error-400.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var Error400Module = /** @class */ (function () {
    function Error400Module() {
    }
    Error400Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _error_400_routing_module__WEBPACK_IMPORTED_MODULE_3__["Error400RoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_error_400_component__WEBPACK_IMPORTED_MODULE_4__["Error400Component"]]
        })
    ], Error400Module);
    return Error400Module;
}());



/***/ })

}]);
//# sourceMappingURL=error-400-error-400-module.js.map
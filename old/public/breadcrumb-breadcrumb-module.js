(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["breadcrumb-breadcrumb-module"],{

/***/ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: BreadcrumbRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbRoutingModule", function() { return BreadcrumbRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb.component */ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.ts");




var routes = [
    {
        path: '',
        component: _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"],
        data: {
            title: 'Breadcrumbs',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - breadcrumb',
            status: true
        }
    }
];
var BreadcrumbRoutingModule = /** @class */ (function () {
    function BreadcrumbRoutingModule() {
    }
    BreadcrumbRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BreadcrumbRoutingModule);
    return BreadcrumbRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body breadcrumb-page\">\r\n  <!-- Simple Breadcrumb card start -->\r\n  <div class=\"card\">\r\n    <div class=\"card-block\">\r\n      <h5>Simple Breadcrumb</h5>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a></li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Simple Breadcrumb</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Simple Breadcrumb card start -->\r\n  <!-- Caption Breadcrumb card start -->\r\n  <div class=\"card\">\r\n    <div class=\"card-block caption-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Caption Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Caption Breadcrumb card end -->\r\n  <!-- Bottom Breadcrumb card start -->\r\n  <div class=\"card\">\r\n    <div class=\"card-block\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Bottom Breadcrumb</h5>\r\n      </div>\r\n      <div>\r\n        <ul class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Bottom Breadcrumb card end -->\r\n  <!-- Without-icon Breadcrumb card start -->\r\n  <div class=\"card\">\r\n    <div class=\"card-block caption-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Without Icon Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Home</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Without-icon Breadcrumb card start -->\r\n  <h4 class=\"m-b-30\">Color Varients</h4>\r\n  <!-- Primary-color Breadcrumb card start -->\r\n  <div class=\"card borderless-card\">\r\n    <div class=\"card-block primary-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Primary Color Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Primary-color Breadcrumb card end -->\r\n  <!-- Inverse-color Breadcrumb card start -->\r\n  <div class=\"card borderless-card\">\r\n    <div class=\"card-block inverse-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Inverse Color Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Inverse-color Breadcrumb card end -->\r\n  <!-- Danger-color Breadcrumb card start -->\r\n  <div class=\"card borderless-card\">\r\n    <div class=\"card-block danger-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Danger Color Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Danger-color Breadcrumb card end -->\r\n  <!-- Info-color Breadcrumb card start -->\r\n  <div class=\"card borderless-card\">\r\n    <div class=\"card-block info-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Info Color Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Info-color Breadcrumb card end -->\r\n  <!-- Warning-color Breadcrumb card start -->\r\n  <div class=\"card borderless-card\">\r\n    <div class=\"card-block warning-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Warning Color Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Warning-color Breadcrumb card end -->\r\n  <!-- Success-color Breadcrumb card start -->\r\n  <div class=\"card borderless-card\">\r\n    <div class=\"card-block success-breadcrumb\">\r\n      <div class=\"breadcrumb-header\">\r\n        <h5>Success Color Breadcrumb</h5>\r\n        <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>\r\n      </div>\r\n      <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"javascript:\">\r\n              <i class=\"icofont icofont-home\"></i>\r\n            </a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Breadcrumb</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\"><a href=\"javascript:\">Caption Breadcrumb</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Success-color Breadcrumb card end -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpLWVsZW1lbnRzL2Jhc2ljL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.scss"), __webpack_require__(/*! ../../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.module.ts ***!
  \*************************************************************************/
/*! exports provided: BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb.component */ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _breadcrumb_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb-routing.module */ "./src/app/theme/ui-elements/basic/breadcrumb/breadcrumb-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _breadcrumb_routing_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]]
        })
    ], BreadcrumbModule);
    return BreadcrumbModule;
}());



/***/ })

}]);
//# sourceMappingURL=breadcrumb-breadcrumb-module.js.map
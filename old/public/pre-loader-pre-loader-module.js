(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pre-loader-pre-loader-module"],{

/***/ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/pre-loader/pre-loader-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PreLoaderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreLoaderRoutingModule", function() { return PreLoaderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pre_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pre-loader.component */ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.ts");




var routes = [
    {
        path: '',
        component: _pre_loader_component__WEBPACK_IMPORTED_MODULE_3__["PreLoaderComponent"],
        data: {
            title: 'Pre-Loader',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - pre-loader',
            status: true
        }
    }
];
var PreLoaderRoutingModule = /** @class */ (function () {
    function PreLoaderRoutingModule() {
    }
    PreLoaderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PreLoaderRoutingModule);
    return PreLoaderRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- Loader style card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Loader Style</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader Style 1</div>\r\n              <p>Add class <code> preloader3</code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1\"></div>\r\n                <div class=\"circ2\"></div>\r\n                <div class=\"circ3\"></div>\r\n                <div class=\"circ4\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader Style 2(Using SVG)</div>\r\n              <p>Add id <code> loader2</code></p>\r\n              <div class=\"loader-block\">\r\n                <svg id=\"loader2\" viewBox=\"0 0 100 100\">\r\n                  <circle id=\"circle-loader2\" cx=\"50\" cy=\"50\" r=\"45\"></circle>\r\n                </svg>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <h6 class=\"sub-title\">Loader Style 3</h6>\r\n              <p>Add class <code> preloader4</code></p>\r\n              <div class=\"text-center loader-block\">\r\n                <div class=\"preloader4\">\r\n                  <div class=\"double-bounce1\"></div>\r\n                  <div class=\"double-bounce2\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <h6 class=\"sub-title\">Loader Style 4</h6>\r\n              <p>Add class <code> cell preloader5 </code></p>\r\n              <div class=\"cell preloader5 loader-block\">\r\n                <div class=\"circle-5 l\"></div>\r\n                <div class=\"circle-5 m\"></div>\r\n                <div class=\"circle-5 r\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <h6 class=\"sub-title\">loader animation-start</h6>\r\n              <p>Add class <code> cell preloader5 </code></p>\r\n              <div class=\"loader animation-start\">\r\n                <span class=\"circle delay-1 size-2\"></span>\r\n                <span class=\"circle delay-2 size-4\"></span>\r\n                <span class=\"circle delay-3 size-6\"></span>\r\n                <span class=\"circle delay-4 size-7\"></span>\r\n                <span class=\"circle delay-5 size-7\"></span>\r\n                <span class=\"circle delay-6 size-6\"></span>\r\n                <span class=\"circle delay-7 size-4\"></span>\r\n                <span class=\"circle delay-8 size-2\"></span>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <h6 class=\"sub-title\">Loader Style 6</h6>\r\n              <p>Add class <code> preloader6 </code></p>\r\n              <div class=\"loader-block\">\r\n                <div class=\"preloader6\">\r\n                  <hr>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Loader style card end -->\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- Loader color card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Loader color</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader default Style</div>\r\n              <p>Add class <code> loader-default </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-default\"></div>\r\n                <div class=\"circ2 loader-default\"></div>\r\n                <div class=\"circ3 loader-default\"></div>\r\n                <div class=\"circ4 loader-default\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader primary Style</div>\r\n              <p>Add class <code> loader-primary </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-primary\"></div>\r\n                <div class=\"circ2 loader-primary\"></div>\r\n                <div class=\"circ3 loader-primary\"></div>\r\n                <div class=\"circ4 loader-primary\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader success Style</div>\r\n              <p>Add class <code> loader-success </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-success\"></div>\r\n                <div class=\"circ2 loader-success\"></div>\r\n                <div class=\"circ3 loader-success\"></div>\r\n                <div class=\"circ4 loader-success\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader info Style</div>\r\n              <p>Add class <code> loader-info </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-info\"></div>\r\n                <div class=\"circ2 loader-info\"></div>\r\n                <div class=\"circ3 loader-info\"></div>\r\n                <div class=\"circ4 loader-info\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader warning Style</div>\r\n              <p>Add class <code> loader-warning </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-warning\"></div>\r\n                <div class=\"circ2 loader-warning\"></div>\r\n                <div class=\"circ3 loader-warning\"></div>\r\n                <div class=\"circ4 loader-warning\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader danger Style</div>\r\n              <p>Add class <code> loader-danger </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-danger\"></div>\r\n                <div class=\"circ2 loader-danger\"></div>\r\n                <div class=\"circ3 loader-danger\"></div>\r\n                <div class=\"circ4 loader-danger\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Loader color card end -->\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- Loader Size card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Loader Size</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader primary</div>\r\n              <p>Add class <code> loader-primary </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-primary\"></div>\r\n                <div class=\"circ2 loader-primary\"></div>\r\n                <div class=\"circ3 loader-primary\"></div>\r\n                <div class=\"circ4 loader-primary\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader medium</div>\r\n              <p>Add class <code> loader-md </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-primary loader-md\"></div>\r\n                <div class=\"circ2 loader-primary loader-md\"></div>\r\n                <div class=\"circ3 loader-primary loader-md\"></div>\r\n                <div class=\"circ4 loader-primary loader-md\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-2 col-md-4 col-sm-6\">\r\n              <div class=\"sub-title\">Loader large</div>\r\n              <p>Add class <code> loader-lg </code></p>\r\n              <div class=\"preloader3 loader-block\">\r\n                <div class=\"circ1 loader-primary loader-lg\"></div>\r\n                <div class=\"circ2 loader-primary loader-lg\"></div>\r\n                <div class=\"circ3 loader-primary loader-lg\"></div>\r\n                <div class=\"circ4 loader-primary loader-lg\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Loader Size card end -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpLWVsZW1lbnRzL2Jhc2ljL3ByZS1sb2FkZXIvcHJlLWxvYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.ts ***!
  \****************************************************************************/
/*! exports provided: PreLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreLoaderComponent", function() { return PreLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreLoaderComponent = /** @class */ (function () {
    function PreLoaderComponent() {
    }
    PreLoaderComponent.prototype.ngOnInit = function () {
    };
    PreLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pre-loader',
            template: __webpack_require__(/*! ./pre-loader.component.html */ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.html"),
            styles: [__webpack_require__(/*! ./pre-loader.component.scss */ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreLoaderComponent);
    return PreLoaderComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/pre-loader/pre-loader.module.ts ***!
  \*************************************************************************/
/*! exports provided: PreLoaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreLoaderModule", function() { return PreLoaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pre_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pre-loader.component */ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader.component.ts");
/* harmony import */ var _pre_loader_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pre-loader-routing.module */ "./src/app/theme/ui-elements/basic/pre-loader/pre-loader-routing.module.ts");





var PreLoaderModule = /** @class */ (function () {
    function PreLoaderModule() {
    }
    PreLoaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pre_loader_routing_module__WEBPACK_IMPORTED_MODULE_4__["PreLoaderRoutingModule"]
            ],
            declarations: [_pre_loader_component__WEBPACK_IMPORTED_MODULE_3__["PreLoaderComponent"]]
        })
    ], PreLoaderModule);
    return PreLoaderModule;
}());



/***/ })

}]);
//# sourceMappingURL=pre-loader-pre-loader-module.js.map
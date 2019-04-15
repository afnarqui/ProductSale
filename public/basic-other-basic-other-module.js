(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-other-basic-other-module"],{

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-other/basic-other-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicOtherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicOtherRoutingModule", function() { return BasicOtherRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_other_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-other.component */ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts");




var routes = [
    {
        path: '',
        component: _basic_other_component__WEBPACK_IMPORTED_MODULE_3__["BasicOtherComponent"],
        data: {
            title: 'Other',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - other',
            status: true
        }
    }
];
var BasicOtherRoutingModule = /** @class */ (function () {
    function BasicOtherRoutingModule() {
    }
    BasicOtherRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicOtherRoutingModule);
    return BasicOtherRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-other/basic-other.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5>Bootstrap card</h5>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"row\">\r\n          <!-- basic card start -->\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-block\">\r\n                <h5>Basic card</h5>\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- basic card end -->\r\n\r\n          <!-- card with header start -->\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <h5>This is header</h5>\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <h5>Card with header</h5>\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- card with header end -->\r\n\r\n          <!-- card with header, footer start -->\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\">\r\n                <h5>This is header</h5>\r\n              </div>\r\n              <div class=\"card-block\">\r\n                <h5>Card with header</h5>\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>\r\n              </div>\r\n              <div class=\"card-footer\">\r\n                <p class=\"m-b-0\"> my footer</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- card with header, footer end -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <h5>Color card</h5>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white bg-primary\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Primary card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white bg-secondary\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Secondary card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white bg-success\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Success card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white bg-danger\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Danger card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white bg-warning\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Warning card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white bg-info\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Info card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card bg-light\">\r\n              <div class=\"card-header text-primary\">Header</div>\r\n              <div class=\"card-body text-primary\">\r\n                <h5 class=\"card-title\">Light card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-xl-4\">\r\n            <div class=\"card text-white card-inverse\" style=\"border: 1px solid #fff\">\r\n              <div class=\"card-header\">Header</div>\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Dark card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 col-xl-6\">\r\n    <app-card [title]=\"'Default'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <ngb-pagination [collectionSize]=\"totalItems\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-6\">\r\n    <app-card [title]=\"'Disabled'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <ngb-pagination [collectionSize]=\"bigTotalItems\" [disabled]=\"true\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-6\">\r\n    <app-card [title]=\"'Pagination Size'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"sub-title m-t-15\">Large</div>\r\n      <div class=\"scrollmenu\">\r\n        <ngb-pagination [collectionSize]=\"bigTotalItems\" [maxSize]=\"maxSize\" size=\"lg\"></ngb-pagination>\r\n      </div>\r\n      <div class=\"sub-title m-t-15\">Medium</div>\r\n      <ngb-pagination [collectionSize]=\"bigTotalItems\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n      <div class=\"sub-title m-t-15\">Small</div>\r\n      <ngb-pagination [collectionSize]=\"bigTotalItems\" [maxSize]=\"maxSize\" size=\"sm\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-xl-6\">\r\n    <app-card [title]=\"'Pagination Advance'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = false</div>\r\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = true</div>\r\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n      <div class=\"sub-title m-t-15\">maxSize = 5, rotate = true, ellipses = false</div>\r\n      <ngb-pagination [collectionSize]=\"120\" [(page)]=\"pageAdvance\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-other/basic-other.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.scrollmenu {\n  overflow: auto;\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvdWktZWxlbWVudHMvYmFzaWMvYmFzaWMtb3RoZXIvRDpcXHBocGxhcmF2ZWxcXHdlYi9zcmNcXGFwcFxcdGhlbWVcXHVpLWVsZW1lbnRzXFxiYXNpY1xcYmFzaWMtb3RoZXJcXGJhc2ljLW90aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBYztFQUNkLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpLWVsZW1lbnRzL2Jhc2ljL2Jhc2ljLW90aGVyL2Jhc2ljLW90aGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnNjcm9sbG1lbnUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts ***!
  \******************************************************************************/
/*! exports provided: BasicOtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicOtherComponent", function() { return BasicOtherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicOtherComponent = /** @class */ (function () {
    function BasicOtherComponent() {
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.totalItems = 64;
        this.pageAdvance = 1;
    }
    BasicOtherComponent.prototype.ngOnInit = function () {
    };
    BasicOtherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-other',
            template: __webpack_require__(/*! ./basic-other.component.html */ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./basic-other.component.scss */ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicOtherComponent);
    return BasicOtherComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-other/basic-other.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-other/basic-other.module.ts ***!
  \***************************************************************************/
/*! exports provided: BasicOtherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicOtherModule", function() { return BasicOtherModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_other_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-other.component */ "./src/app/theme/ui-elements/basic/basic-other/basic-other.component.ts");
/* harmony import */ var _basic_other_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-other-routing.module */ "./src/app/theme/ui-elements/basic/basic-other/basic-other-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var BasicOtherModule = /** @class */ (function () {
    function BasicOtherModule() {
    }
    BasicOtherModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_other_routing_module__WEBPACK_IMPORTED_MODULE_4__["BasicOtherRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_basic_other_component__WEBPACK_IMPORTED_MODULE_3__["BasicOtherComponent"]]
        })
    ], BasicOtherModule);
    return BasicOtherModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-other-basic-other-module.js.map
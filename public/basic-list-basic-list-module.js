(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-list-basic-list-module"],{

/***/ "./src/app/theme/ui-elements/basic/basic-list/basic-list-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-list/basic-list-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: BasicListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicListRoutingModule", function() { return BasicListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-list.component */ "./src/app/theme/ui-elements/basic/basic-list/basic-list.component.ts");




var routes = [
    {
        path: '',
        component: _basic_list_component__WEBPACK_IMPORTED_MODULE_3__["BasicListComponent"],
        data: {
            title: 'List',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - list',
            status: true
        }
    }
];
var BasicListRoutingModule = /** @class */ (function () {
    function BasicListRoutingModule() {
    }
    BasicListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasicListRoutingModule);
    return BasicListRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-list/basic-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-list/basic-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- List view card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>List view</h5>\r\n\r\n        </div>\r\n        <div class=\"row card-block\">\r\n          <div class=\"col-md-12\">\r\n            <ul class=\"list-view\">\r\n              <li>\r\n                <div class=\"card list-view-media\">\r\n                  <div class=\"card-block\">\r\n                    <div class=\"media\">\r\n                      <a class=\"media-left ripple light\" href=\"javascript:\">\r\n                        <img class=\"media-object card-list-img\" src=\"assets/images/avatar-1.jpg\" alt=\"Generic placeholder image\">\r\n                      </a>\r\n                      <div class=\"media-body\">\r\n                        <div class=\"col-xs-12\">\r\n                          <h6 class=\"d-inline-block\">\r\n                            Heading</h6>\r\n                          <label class=\"label label-info\">Agent</label>\r\n                        </div>\r\n                        <div class=\"f-13 text-muted m-b-15\">\r\n                          Software Engineer\r\n                        </div>\r\n                        <p>Hi, This is my short intro text.\r\n                          Lorem ipsum is a dummy content sit\r\n                          dollar. You can copy and paste this\r\n                          dummy content from anywhere and to\r\n                          anywhere. Its all free and must be a\r\n                          good to folllow in prectice</p>\r\n                        <div class=\"m-t-15\">\r\n                          <button type=\"button\" data-toggle=\"tooltip\" title=\"Facebook\" class=\"btn btn-facebook btn-mini ripple light\">\r\n                            <span class=\"icofont icofont-social-facebook\"></span>\r\n                          </button>\r\n                          <button type=\"button\" data-toggle=\"tooltip\" title=\"Twitter\" class=\"btn btn-twitter btn-mini ripple light\">\r\n                            <span class=\"icofont icofont-social-twitter\"></span>\r\n                          </button>\r\n                          <button type=\"button\" data-toggle=\"tooltip\" title=\"Linkedin\" class=\"btn btn-linkedin btn-mini ripple light\">\r\n                            <span class=\"icofont icofont-brand-linkedin\"></span>\r\n                          </button>\r\n                          <button type=\"button\"  data-toggle=\"tooltip\" title=\"Drible\" class=\"btn btn-dribbble btn-mini ripple light\">\r\n                            <span class=\"icofont icofont-social-dribble\"></span>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"\">\r\n                <div class=\"card list-view-media\">\r\n                  <div class=\"card-block\">\r\n                    <div class=\"media\">\r\n                      <a class=\"media-left ripple light\" href=\"javascript:\">\r\n                        <img class=\"media-object card-list-img\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n                      </a>\r\n                      <div class=\"media-body\">\r\n                        <div>\r\n                          <h6 class=\"d-inline-block\">\r\n                            Heading</h6>\r\n                          <label class=\"label  label-info\">Accountant</label>\r\n                        </div>\r\n                        <div class=\"f-13 text-muted m-b-15\">\r\n                          Softwear Engineer\r\n                        </div>\r\n                        <p>Hi, This is my short intro text.\r\n                          Lorem ipsum is a dummy content sit\r\n                          dollar. You can copy and paste this\r\n                          dummy content from anywhere and to\r\n                          anywhere. Its all free and must be a\r\n                          good to folllow in prectice</p>\r\n                        <div class=\"m-t-15\">\r\n                          <button type=\"button\" data-toggle=\"tooltip\" title=\"Facebook\" class=\"btn btn-facebook btn-mini ripple light\">\r\n                            <span class=\"icofont icofont-social-facebook\"></span>\r\n                          </button>\r\n                          <button type=\"button\" data-toggle=\"tooltip\" title=\"Twitter\" class=\"btn btn-twitter btn-mini ripple light\">\r\n                            <span class=\"icofont icofont-social-twitter\"></span>\r\n                          </button>\r\n                          <button type=\"button\" data-toggle=\"tooltip\" title=\"Linkedin\" class=\"btn btn-linkedin btn-mini ripple light\">\r\n                            <span class=\"icofont icofont-brand-linkedin\"></span>\r\n                          </button>\r\n                          <button type=\"button\"  data-toggle=\"tooltip\" title=\"Drible\" class=\"btn btn-dribbble btn-mini ripple light\">\r\n                            <span class=\"icofont icofont-social-dribble\"></span>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li class=\"\">\r\n                <div class=\"card list-view-media\">\r\n                  <div class=\"card-block\">\r\n                    <div class=\"media\">\r\n                      <a class=\"media-left ripple light\" href=\"javascript:\">\r\n                        <img class=\"media-object card-list-img\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\r\n                      </a>\r\n                      <div class=\"media-body\">\r\n                        <div>\r\n                          <h6 class=\"d-inline-block\">\r\n                            Heading</h6>\r\n                          <label class=\"label  label-info\">Accountant</label>\r\n                        </div>\r\n                        <div class=\"f-13 text-muted m-b-15\">\r\n                          Softwear Engineer\r\n                        </div>\r\n                        <p>Hi, This is my short intro text.\r\n                          Lorem ipsum is a dummy content sit\r\n                          dollar. You can copy and paste this\r\n                          dummy content from anywhere and to\r\n                          anywhere. Its all free and must be a\r\n                          good to folllow in prectice</p>\r\n                        <div class=\"m-t-15\">\r\n                          <button type=\"button\" data-toggle=\"tooltip\" title=\"Facebook\" class=\"btn btn-facebook btn-mini ripple light\">\r\n                            <span class=\"icofont icofont-social-facebook\"></span>\r\n                          </button>\r\n                          <button type=\"button\" data-toggle=\"tooltip\" title=\"Twitter\" class=\"btn btn-twitter btn-mini ripple light\">\r\n                            <span class=\"icofont icofont-social-twitter\"></span>\r\n                          </button>\r\n                          <button type=\"button\" data-toggle=\"tooltip\" title=\"Linkedin\" class=\"btn btn-linkedin btn-mini ripple light\">\r\n                            <span class=\"icofont icofont-brand-linkedin\"></span>\r\n                          </button>\r\n                          <button type=\"button\"  data-toggle=\"tooltip\" title=\"Drible\" class=\"btn btn-dribbble btn-mini ripple light\">\r\n                            <span class=\"icofont icofont-social-dribble\"></span>\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- List view card end -->\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <!-- List type card start -->\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>List type</h5>\r\n        </div>\r\n        <div class=\"row card-block\">\r\n          <div class=\"col-md-12 col-lg-4\">\r\n            <h6 class=\"sub-title\">Text list</h6>\r\n            <ul class=\"basic-list\">\r\n              <li class=\"\">\r\n                <h6>Heading</h6>\r\n                <p>Laborum nihil aliquam nulla praesentium illo libero\r\n                  nihil at odio maxime.</p>\r\n              </li>\r\n              <li class=\"\">\r\n                <h6>Heading</h6>\r\n                <p>Laborum nihil aliquam nulla praesentium illo libero\r\n                  nihil at odio maxime.</p>\r\n              </li>\r\n              <li class=\"\">\r\n                <h6>Heading</h6>\r\n                <p>Laborum nihil aliquam nulla praesentium illo libero\r\n                  nihil at odio maxime.</p>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-md-12 col-lg-4\">\r\n            <h6 class=\"sub-title\">Text with Icon Lists</h6>\r\n            <ul class=\"basic-list list-icons\">\r\n              <li>\r\n                <i class=\"icofont icofont-speech-comments text-primary p-absolute text-center d-block f-30\"></i>\r\n                <h6>Heading</h6>\r\n                <p>Laborum nihil aliquam nulla praesentium illo libero\r\n                  nihil at odio maxime.</p>\r\n              </li>\r\n              <li>\r\n                <h6>Heading</h6>\r\n                <i class=\"icofont icofont-warning  text-primary p-absolute text-center d-block f-30\"></i>\r\n                <p>Laborum nihil aliquam nulla praesentium illo libero\r\n                  nihil at odio maxime.</p>\r\n              </li>\r\n              <li>\r\n                <h6>Heading</h6>\r\n                <i class=\"icofont icofont-bell-alt text-primary p-absolute text-center d-block f-30\"></i>\r\n                <p>Laborum nihil aliquam nulla praesentium illo libero\r\n                  nihil at odio maxime.</p>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-md-12 col-lg-4\">\r\n            <h6 class=\"sub-title\">Text with images Lists</h6>\r\n            <ul class=\"basic-list list-icons-img\">\r\n              <li>\r\n                <img src=\"assets/images/avatar-1.jpg\"\r\n                     class=\"img-fluid p-absolute d-block text-center\"\r\n                     alt=\"\">\r\n                <h6>Heading</h6>\r\n                <p>Laborum nihil aliquam nulla praesentium illo libero\r\n                  nihil at odio maxime.</p>\r\n              </li>\r\n              <li>\r\n                <h6>Heading</h6>\r\n                <img src=\"assets/images/avatar-2.jpg\"\r\n                     class=\"img-fluid p-absolute d-block text-center\"\r\n                     alt=\"\">\r\n                <p>Laborum nihil aliquam nulla praesentium illo libero\r\n                  nihil at odio maxime.</p>\r\n              </li>\r\n              <li>\r\n                <h6>Heading</h6>\r\n                <img src=\"assets/images/avatar-3.jpg\"\r\n                     class=\"img-fluid p-absolute d-block text-center\"\r\n                     alt=\"\">\r\n                <p>Laborum nihil aliquam nulla praesentium illo libero\r\n                  nihil at odio maxime.</p>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- List type card end -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-list/basic-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-list/basic-list.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpLWVsZW1lbnRzL2Jhc2ljL2Jhc2ljLWxpc3QvYmFzaWMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-list/basic-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-list/basic-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: BasicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicListComponent", function() { return BasicListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicListComponent = /** @class */ (function () {
    function BasicListComponent() {
    }
    BasicListComponent.prototype.ngOnInit = function () {
    };
    BasicListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-list',
            template: __webpack_require__(/*! ./basic-list.component.html */ "./src/app/theme/ui-elements/basic/basic-list/basic-list.component.html"),
            styles: [__webpack_require__(/*! ./basic-list.component.scss */ "./src/app/theme/ui-elements/basic/basic-list/basic-list.component.scss"), __webpack_require__(/*! ../../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicListComponent);
    return BasicListComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/basic-list/basic-list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/basic-list/basic-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: BasicListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicListModule", function() { return BasicListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _basic_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-list.component */ "./src/app/theme/ui-elements/basic/basic-list/basic-list.component.ts");
/* harmony import */ var _basic_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-list-routing.module */ "./src/app/theme/ui-elements/basic/basic-list/basic-list-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var BasicListModule = /** @class */ (function () {
    function BasicListModule() {
    }
    BasicListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basic_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["BasicListRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_basic_list_component__WEBPACK_IMPORTED_MODULE_3__["BasicListComponent"]]
        })
    ], BasicListModule);
    return BasicListModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-list-basic-list-module.js.map
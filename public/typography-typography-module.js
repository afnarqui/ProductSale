(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["typography-typography-module"],{

/***/ "./src/app/theme/ui-elements/basic/typography/typography-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/typography/typography-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TypographyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyRoutingModule", function() { return TypographyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typography.component */ "./src/app/theme/ui-elements/basic/typography/typography.component.ts");




var routes = [
    {
        path: '',
        component: _typography_component__WEBPACK_IMPORTED_MODULE_3__["TypographyComponent"],
        data: {
            title: 'Typography',
            icon: 'icon-layout-grid2-alt',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - typography',
            status: true
        }
    }
];
var TypographyRoutingModule = /** @class */ (function () {
    function TypographyRoutingModule() {
    }
    TypographyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TypographyRoutingModule);
    return TypographyRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/typography/typography.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/typography/typography.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Typography card start -->\r\n    <app-card [title]=\"'Typography'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'typography'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">Headings</h4>\r\n          <p>Use tags <code>h1 to h6</code> for get desire heading.</p>\r\n          <h1>This is a Heading 1</h1>\r\n          <h2>This is a Heading 2</h2>\r\n          <h3>This is a Heading 3</h3>\r\n          <h4>This is a Heading 4</h4>\r\n          <h5>This is a Heading 5</h5>\r\n          <h6>This is a Heading 6</h6>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">HEADINGS WITH SUBHEADING</h4>\r\n          <p>Use tags <code>h1 to h6</code> for get desire heading.</p>\r\n          <h1>This is a Heading 1<small>Sub-heading</small></h1>\r\n          <h2>This is a Heading 2<small>Sub-heading</small></h2>\r\n          <h3>This is a Heading 3<small>Sub-heading</small></h3>\r\n          <h4>This is a Heading 4<small>Sub-heading</small></h4>\r\n          <h5>This is a Heading 5<small>Sub-heading</small></h5>\r\n          <h6>This is a Heading 6<small>Sub-heading</small></h6>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Typography card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Text elements start -->\r\n    <app-card [title]=\"'Text Elements'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">Inline text elements</h4>\r\n          <p class=\"lead m-t-0\">Your title goes here</p>\r\n          <p>You can use the mark tag to\r\n            <mark>highlight</mark> text.\r\n          </p>\r\n          <p>\r\n            <del>This line of text is meant to be treated as deleted text.</del>\r\n          </p>\r\n          <p>\r\n            <ins>This line of text is meant to be treated as an addition to the document.</ins>\r\n          </p>\r\n          <p><strong>rendered as bold text</strong></p>\r\n          <p><em>rendered as italicized text</em></p>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">CONTEXTUAL TEXT COLORS</h4>\r\n          <p class=\"text-custom\">\r\n            Etiam porta sem malesuada magna mollis euismod.<code>text-custom</code>\r\n          </p>\r\n          <p class=\"text-pink\">\r\n            Donec ullamcorper nulla non metus auctor fringilla.<code>text-pink</code>\r\n          </p>\r\n          <p class=\"text-muted\">\r\n            Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.<code>text-muted</code>\r\n          </p>\r\n          <p class=\"text-primary\">\r\n            Nullam id dolor id nibh ultricies vehicula ut id elit.<code>text-primary</code>\r\n          </p>\r\n          <p class=\"text-success\">\r\n            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.<code>text-success</code>\r\n          </p>\r\n          <p class=\"text-info\">\r\n            Maecenas sed diam eget risus varius blandit sit amet non magna.<code>text-info</code>\r\n          </p>\r\n          <p class=\"text-warning\">\r\n            Etiam porta sem malesuada magna mollis euismod.<code>text-warning</code>\r\n          </p>\r\n          <p class=\"text-danger\">\r\n            Donec ullamcorper nulla non metus auctor fringilla.<code>text-danger</code>\r\n          </p>\r\n          <p class=\"text-dark\">\r\n            Nullam id dolor id nibh ultricies vehicula ut id elit.<code>text-dark</code>\r\n          </p>\r\n          <p class=\"text-purple m-b-0\">\r\n            Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.<code>text-purple</code>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Text elements end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- List Tag card start -->\r\n    <app-card [title]=\"'LIST TAG'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'list-tag'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">UNORDERED</h4>\r\n          <ul>\r\n            <li>Lorem ipsum dolor sit amet</li>\r\n            <li>Consectetur adipiscing elit</li>\r\n            <li>Integer molestie lorem at massa</li>\r\n            <li>Facilisis in pretium nisl aliquet</li>\r\n            <li>\r\n              Nulla volutpat aliquam velit\r\n              <ul>\r\n                <li>Phasellus iaculis neque</li>\r\n                <li>Purus sodales ultricies</li>\r\n                <li>Vestibulum laoreet porttitor sem</li>\r\n                <li>Ac tristique libero volutpat at</li>\r\n              </ul>\r\n            </li>\r\n            <li>Faucibus porta lacus fringilla vel</li>\r\n            <li>Aenean sit amet erat nunc</li>\r\n            <li>Eget porttitor lorem</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">ORDERED</h4>\r\n          <ol>\r\n            <li> Lorem ipsum dolor sit amet</li>\r\n            <li>Consectetur adipiscing elit</li>\r\n            <li>Integer molestie lorem at massa</li>\r\n            <li>Facilisis in pretium nisl aliquet</li>\r\n            <li>\r\n              Nulla volutpat aliquam velit\r\n              <ol>\r\n                <li>Phasellus iaculis neque</li>\r\n                <li>Purus sodales ultricies</li>\r\n                <li>Vestibulum laoreet porttitor sem</li>\r\n                <li>Ac tristique libero volutpat at</li>\r\n              </ol>\r\n            </li>\r\n            <li>Faucibus porta lacus fringilla vel</li>\r\n            <li>Aenean sit amet erat nunc</li>\r\n            <li>Eget porttitor lorem</li>\r\n          </ol>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-4\">\r\n          <h4 class=\"sub-title\">UNSTYLED</h4>\r\n          <div class=\"row col-sm-12\">\r\n            <ul class=\"list-unstyled\">\r\n              <li>Lorem ipsum dolor sit amet</li>\r\n              <li>Integer molestie lorem at massa</li>\r\n              <li>Phasellus iaculis neque</li>\r\n              <li>Faucibus porta lacus fringilla vel</li>\r\n              <li>Eget porttitor lorem</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"row col-sm-12\">\r\n            <div class=\"inline-order-list\">\r\n              <h4 class=\"sub-title\">Inline</h4>\r\n              <p class=\"text-muted\">\r\n                Place all list items on a single line with <code>\r\n                display: inline-block;</code>\r\n              </p>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <ul class=\"list-inline m-b-0\">\r\n                <li class=\"list-inline-item\">Lorem ipsum</li>\r\n                <li class=\"list-inline-item\">Phasellus iaculis</li>\r\n                <li class=\"list-inline-item\">Nulla volutpat</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- List Tag card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <!-- Other card start -->\r\n    <app-card [title]=\"'OTHER'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [blockClass]=\"'list-tag'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Fancy listing 1</h4>\r\n          <ul>\r\n            <li>\r\n              <i class=\"icofont icofont-bubble-right\"></i> Lorem ipsum dolor sit amet\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-bubble-right\"></i> Consectetur adipiscing elit\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-bubble-right\"></i> Integer molestie lorem at massa\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Fancy listing 2</h4>\r\n          <ul>\r\n            <li>\r\n              <i class=\"icofont icofont-double-right text-success\"></i> Lorem ipsum dolor sit amet\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-double-right text-success\"></i> Consectetur adipiscing elit\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-double-right text-success\"></i> Integer molestie lorem at massa\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Fancy listing 2</h4>\r\n          <ul>\r\n            <li>\r\n              <i class=\"icofont icofont-hand-right text-info\"></i> Lorem ipsum dolor sit amet\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-hand-right text-info\"></i> Consectetur adipiscing elit\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-hand-right text-info\"></i> Integer molestie lorem at massa\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-3\">\r\n          <h4 class=\"sub-title\">Fancy listing 2</h4>\r\n          <ul>\r\n            <li>\r\n              <i class=\"icofont icofont-stylish-right text-danger\"></i> Lorem ipsum dolor sit amet\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-stylish-right text-danger\"></i> Consectetur adipiscing elit\r\n            </li>\r\n            <li>\r\n              <i class=\"icofont icofont-stylish-right text-danger\"></i> Integer molestie lorem at massa\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n    <!-- Other card end -->\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'OTHER'\" [headerContent]=\"'Lorem ipsum dolor sit amet, consectetur adipisicing elit'\" [cardOptionBlock]=\"true\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">BLOCKQUOTES</h4>\r\n          <p class=\"text-muted m-b-30\">\r\n            Your awesome text goes here.\r\n          </p>\r\n          <blockquote class=\"blockquote\">\r\n            <p class=\"m-b-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer class=\"blockquote-footer\">Someone famous in\r\n              <cite title=\"Source Title\">Source Title</cite>\r\n            </footer>\r\n          </blockquote>\r\n          <p class=\"text-muted m-b-15 m-t-20\">\r\n            Add <code>\r\n            .blockquote-reverse</code> for a blockquote with right-aligned content.\r\n          </p>\r\n          <blockquote class=\"blockquote blockquote-reverse\">\r\n            <p class=\"m-b-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n            <footer class=\"blockquote-footer\">Someone famous in\r\n              <cite title=\"Source Title\">Source Title</cite>\r\n            </footer>\r\n          </blockquote>\r\n        </div>\r\n        <div class=\"col-sm-12 col-xl-6\">\r\n          <h4 class=\"sub-title\">HORIZONTAL DESCRIPTION</h4>\r\n          <dl class=\"dl-horizontal row\">\r\n            <dt class=\"col-sm-3\">Description lists</dt>\r\n            <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\r\n            <dt class=\"col-sm-3\">Euismod</dt>\r\n            <dd class=\"col-sm-9\">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\r\n            <dd class=\"col-sm-12 col-sm-offset-3\">Donec id elit non mi porta gravida at eget metus.</dd>\r\n            <dt class=\"col-sm-3\">Malesuada porta</dt>\r\n            <dd class=\"col-sm-9\">Etiam porta sem malesuada magna mollis euismod.</dd>\r\n            <dt class=\"col-sm-3 text-truncate\">Truncated term is truncated</dt>\r\n            <dd class=\"col-sm-9\">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\r\n          </dl>\r\n        </div>\r\n      </div>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/typography/typography.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/typography/typography.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3VpLWVsZW1lbnRzL2Jhc2ljL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/ui-elements/basic/typography/typography.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/typography/typography.component.ts ***!
  \****************************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/theme/ui-elements/basic/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/theme/ui-elements/basic/typography/typography.component.scss"), __webpack_require__(/*! ../../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/theme/ui-elements/basic/typography/typography.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/theme/ui-elements/basic/typography/typography.module.ts ***!
  \*************************************************************************/
/*! exports provided: TypographyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyModule", function() { return TypographyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typography.component */ "./src/app/theme/ui-elements/basic/typography/typography.component.ts");
/* harmony import */ var _typography_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography-routing.module */ "./src/app/theme/ui-elements/basic/typography/typography-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var TypographyModule = /** @class */ (function () {
    function TypographyModule() {
    }
    TypographyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _typography_routing_module__WEBPACK_IMPORTED_MODULE_4__["TypographyRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_typography_component__WEBPACK_IMPORTED_MODULE_3__["TypographyComponent"]]
        })
    ], TypographyModule);
    return TypographyModule;
}());



/***/ })

}]);
//# sourceMappingURL=typography-typography-module.js.map
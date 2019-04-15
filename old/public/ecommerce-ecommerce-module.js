(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecommerce-ecommerce-module"],{

/***/ "./src/app/theme/dashboard/ecommerce/ecommerce-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/dashboard/ecommerce/ecommerce-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: EcommerceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceRoutingModule", function() { return EcommerceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ecommerce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecommerce.component */ "./src/app/theme/dashboard/ecommerce/ecommerce.component.ts");




var routes = [
    {
        path: '',
        component: _ecommerce_component__WEBPACK_IMPORTED_MODULE_3__["EcommerceComponent"],
        data: {
            title: 'Ecommerce',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
var EcommerceRoutingModule = /** @class */ (function () {
    function EcommerceRoutingModule() {
    }
    EcommerceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EcommerceRoutingModule);
    return EcommerceRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/ecommerce/ecommerce.component.html":
/*!********************************************************************!*\
  !*** ./src/app/theme/dashboard/ecommerce/ecommerce.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <!-- seo analytics start -->\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h3>20500</h3>\r\n          <p class=\"text-muted\">Total Order</p>\r\n          <div id=\"seo-anlytics1\" style=\"height:50px\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h3>20500</h3>\r\n          <p class=\"text-muted\">Total Sales</p>\r\n          <div id=\"seo-anlytics2\" style=\"height:50px\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h3>28000</h3>\r\n          <p class=\"text-muted\">Order Return</p>\r\n          <div id=\"seo-anlytics3\" style=\"height:50px\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h3>59600</h3>\r\n          <p class=\"text-muted\">Total Stock</p>\r\n          <div id=\"seo-anlytics4\" style=\"height:50px\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- seo analytics end -->\r\n\r\n    <!-- Latest Order start -->\r\n    <div class=\"col-xl-4 col-sm-12\">\r\n      <div class=\"card o-hidden\">\r\n        <div class=\"card-block bg-c-green p-b-0\">\r\n          <div class=\"row text-white m-b-20\">\r\n            <div class=\"col-auto\">\r\n              <h4 class=\"m-b-5\">$654</h4>\r\n              <h6>+1.65(2.56%)</h6>\r\n            </div>\r\n            <div class=\"col text-right\">\r\n              <h6>Friday</h6>\r\n            </div>\r\n          </div>\r\n          <div id=\"sec-ecommerce-chart-line\" style=\"height:60px\"></div>\r\n          <div class=\"row justify-content-center m-t-20\">\r\n            <div class=\"col-8\">\r\n              <div id=\"sec-ecommerce-chart-bar\" style=\"height:100px\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <h4>$2654.00</h4>\r\n          <p class=\"text-muted\">Sales in Nov.</p>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <p class=\"text-muted m-b-5\">Market</p>\r\n              <h6>$1860.00</h6>\r\n            </div>\r\n            <div class=\"col\">\r\n              <p class=\"text-muted m-b-5\">Referral</p>\r\n              <h6>$500.00</h6>\r\n            </div>\r\n            <div class=\"col\">\r\n              <p class=\"text-muted m-b-5\">Affiliate</p>\r\n              <h6>$294.00</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-xl-8 col-sm-12\">\r\n      <app-card [title]=\"'Latest Order'\" [cardClass]=\"'latest-activity-card'\" [headerClass]=\"'borderless'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover table-borderless\">\r\n            <thead>\r\n            <tr>\r\n              <th>Customer</th>\r\n              <th>Order ID</th>\r\n              <th>Photo</th>\r\n              <th>Product</th>\r\n              <th>Quantity</th>\r\n              <th>Date</th>\r\n              <th>Status</th>\r\n              <th>Action</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td>John Deo</td>\r\n              <td>#81412</td>\r\n              <td><img src=\"assets/images/widget/PHONE1.jpg\" alt=\"\" class=\"img-fluid\"></td>\r\n              <td>Moto G5</td>\r\n              <td>10</td>\r\n              <td>17-2-2017</td>\r\n              <td><label class=\"label label-warning\">Pending</label></td>\r\n              <td><a href=\"javascript:\"><i class=\"icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green\"></i></a><a href=\"javascript:\"><i class=\"feather icon-trash-2 f-w-600 f-16 text-c-red\"></i></a></td>\r\n            </tr>\r\n            <tr>\r\n              <td>Jenny William</td>\r\n              <td>#68457</td>\r\n              <td><img src=\"assets/images/widget/PHONE2.jpg\" alt=\"\" class=\"img-fluid\"></td>\r\n              <td>iPhone 8</td>\r\n              <td>16</td>\r\n              <td>20-2-2017</td>\r\n              <td><label class=\"label label-primary\">Paid</label></td>\r\n              <td><a href=\"javascript:\"><i class=\"icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green\"></i></a><a href=\"javascript:\"><i class=\"feather icon-trash-2 f-w-600 f-16 text-c-red\"></i></a></td>\r\n            </tr>\r\n            <tr>\r\n              <td>Lori Moore</td>\r\n              <td>#45457</td>\r\n              <td><img src=\"assets/images/widget/PHONE3.jpg\" alt=\"\" class=\"img-fluid\"></td>\r\n              <td>Redmi 4</td>\r\n              <td>20</td>\r\n              <td>17-2-2017</td>\r\n              <td><label class=\"label label-success\">Success</label></td>\r\n              <td><a href=\"javascript:\"><i class=\"icon feather icon-edit f-w-600 f-16 m-r-15 text-c-green\"></i></a><a href=\"javascript:\"><i class=\"feather icon-trash-2 f-w-600 f-16 text-c-red\"></i></a></td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"text-right  m-r-20\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View all Orders</a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <!-- Latest Order end -->\r\n\r\n    <!-- order  start -->\r\n    <div class=\"col-md-12 col-xl-4\">\r\n      <div class=\"card bg-c-yellow order-card\">\r\n        <div class=\"card-block\">\r\n          <h6>Revenue</h6>\r\n          <h2>$42,562</h2>\r\n          <p class=\"m-b-0\">$5,032 <i class=\"feather icon-arrow-up m-l-10\"></i></p>\r\n          <i class=\"card-icon feather icon-filter\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card bg-c-blue order-card\">\r\n        <div class=\"card-block\">\r\n          <h6>Orders Received</h6>\r\n          <h2>486</h2>\r\n          <p class=\"m-b-0\">$5,032 <i class=\"feather icon-arrow-up m-l-10 m-r-10\"></i>$1,055 <i class=\"feather icon-arrow-down\"></i></p>\r\n          <i class=\"card-icon feather icon-users\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card bg-c-green order-card\">\r\n        <div class=\"card-block\">\r\n          <h6>Total Sales</h6>\r\n          <h2>1641</h2>\r\n          <p class=\"m-b-0\">$5,032 <i class=\"feather icon-arrow-down m-l-10 m-r-10\"></i>$1,055 <i class=\"feather icon-arrow-up\"></i></p>\r\n          <i class=\"card-icon feather icon-radio\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- order  end -->\r\n\r\n    <!-- Latest Customers start -->\r\n    <div class=\"col-xl-8 col-sm-12\">\r\n      <app-card [title]=\"'Customer Reviews'\" [cardClass]=\"'review-card'\" [headerClass]=\"'borderless'\">\r\n        <div class=\"review-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-auto p-r-0\">\r\n              <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius profile-img cust-img m-b-15\">\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6 class=\"m-b-15\">John Deo <span class=\"float-right f-13 text-muted\"> a week ago</span></h6>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star-on f-18 text-c-yellow\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star-on f-18 text-c-yellow\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star-on f-18 text-c-yellow\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star f-18 text-default\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star f-18 text-default\"></i></a>\r\n              <p class=\"m-t-15 m-b-15 text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>\r\n              <a href=\"javascript:\" class=\"m-r-30\"><i class=\"feather icon-thumbs-up m-r-15\"></i>Helpful?</a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-heart-on text-c-red m-r-15\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-edit\"></i></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-auto p-r-0\">\r\n              <img src=\"assets/images/avatar-4.jpg\" alt=\"user image\" class=\"img-radius profile-img cust-img m-b-15\">\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6 class=\"m-b-15\">Allina D’croze <span class=\"float-right f-13 text-muted\"> a week ago</span></h6>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star-on f-18 text-c-yellow\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star f-18 text-default\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star f-18 text-default\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star f-18 text-default\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-star f-18 text-default\"></i></a>\r\n              <p class=\"m-t-15 m-b-15 text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\r\n              <a href=\"javascript:\" class=\"m-r-30\"><i class=\"feather icon-thumbs-up m-r-15\"></i>Helpful?</a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-heart-on text-c-red m-r-15\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"feather icon-edit\"></i></a>\r\n              <blockquote class=\"blockquote m-t-15 m-b-0\">\r\n                <h6>Allina D’croze</h6>\r\n                <p class=\"m-b-0 text-muted\">Lorem Ipsum is simply dummy text of the industry.</p>\r\n              </blockquote>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-right  m-r-20\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View all Customer Reviews</a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-4 col-sm-12\">\r\n      <!-- Profit Visitor Start -->\r\n      <div class=\"card \">\r\n        <div class=\"card-block \">\r\n          <h2 class=\"text-center f-w-400 \">$45,567</h2>\r\n          <p class=\"text-center text-muted \">Monthly Profit</p>\r\n          <div id=\"monthlyprofit-1\" style=\"height:70px\"></div>\r\n          <div class=\"m-t-20\">\r\n            <div class=\"row \">\r\n              <div class=\"col-6 text-center \">\r\n                <h6 class=\"f-20 f-w-400\">$6,234</h6>\r\n                <p class=\"text-muted f-14 m-b-0\">Today</p>\r\n              </div>\r\n              <div class=\"col-6 text-center \">\r\n                <h6 class=\"f-20 f-w-400\">$4,387</h6>\r\n                <p class=\"text-muted f-14 m-b-0\">Yesterday</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card \">\r\n        <div class=\"card-block \">\r\n          <h2 class=\"text-center f-w-400 \">2,413</h2>\r\n          <p class=\"text-center text-muted \">Total Sales</p>\r\n          <div id=\"monthlyprofit-2\" style=\"height:70px\"></div>\r\n          <div class=\"m-t-20\">\r\n            <div class=\"row \">\r\n              <div class=\"col-6 text-center \">\r\n                <h6 class=\"f-20 f-w-400\">1578</h6>\r\n                <p class=\"text-muted f-14 m-b-0\">Today</p>\r\n              </div>\r\n              <div class=\"col-6 text-center \">\r\n                <h6 class=\"f-20 f-w-400\">1028</h6>\r\n                <p class=\"text-muted f-14 m-b-0\">Yesterday</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Latest Customers end -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/dashboard/ecommerce/ecommerce.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/theme/dashboard/ecommerce/ecommerce.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Rhc2hib2FyZC9lY29tbWVyY2UvZWNvbW1lcmNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/dashboard/ecommerce/ecommerce.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/dashboard/ecommerce/ecommerce.component.ts ***!
  \******************************************************************/
/*! exports provided: EcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function() { return EcommerceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_charts_float_jquery_flot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/charts/float/jquery.flot.js */ "./src/assets/charts/float/jquery.flot.js");
/* harmony import */ var _assets_charts_float_jquery_flot_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_float_jquery_flot_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_charts_float_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/charts/float/jquery.flot.categories.js */ "./src/assets/charts/float/jquery.flot.categories.js");
/* harmony import */ var _assets_charts_float_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_float_jquery_flot_categories_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_charts_float_curvedLines_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/charts/float/curvedLines.js */ "./src/assets/charts/float/curvedLines.js");
/* harmony import */ var _assets_charts_float_curvedLines_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_float_curvedLines_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_charts_float_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/charts/float/jquery.flot.tooltip.min.js */ "./src/assets/charts/float/jquery.flot.tooltip.min.js");
/* harmony import */ var _assets_charts_float_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_charts_float_jquery_flot_tooltip_min_js__WEBPACK_IMPORTED_MODULE_5__);






var EcommerceComponent = /** @class */ (function () {
    function EcommerceComponent() {
        this.chartOption = {
            legend: {
                show: false
            },
            series: {
                label: '',
                curvedLines: {
                    active: true,
                    nrSplinePoints: 20
                },
            },
            tooltip: {
                show: true,
                content: 'x : %x | y : %y'
            },
            grid: {
                hoverable: true,
                borderWidth: 0,
                labelMargin: 0,
                axisMargin: 0,
                minBorderMargin: 0,
            },
            yaxis: {
                min: 0,
                max: 30,
                color: 'transparent',
                font: {
                    size: 0,
                }
            },
            xaxis: {
                color: 'transparent',
                font: {
                    size: 0,
                }
            }
        };
    }
    EcommerceComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            $.plot($('#seo-anlytics1'), [{
                    data: [
                        [0, 10],
                        [1, 25],
                        [2, 15],
                        [3, 26],
                        [4, 15],
                        [5, 15],
                        [6, 20],
                        [7, 25],
                        [8, 20],
                        [9, 25],
                        [10, 10],
                        [11, 12],
                        [12, 27],
                        [13, 1],
                    ],
                    color: '#448aff',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#448aff'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#seo-anlytics2'), [{
                    data: [
                        [0, 10],
                        [1, 15],
                        [2, 25],
                        [3, 15],
                        [4, 26],
                        [5, 20],
                        [6, 15],
                        [7, 20],
                        [8, 25],
                        [9, 10],
                        [10, 25],
                        [11, 27],
                        [12, 12],
                        [13, 1],
                    ],
                    color: '#9ccc65',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#9ccc65'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#seo-anlytics3'), [{
                    data: [
                        [0, 10],
                        [1, 25],
                        [2, 15],
                        [3, 26],
                        [4, 15],
                        [5, 15],
                        [6, 20],
                        [7, 25],
                        [8, 20],
                        [9, 25],
                        [10, 10],
                        [11, 12],
                        [12, 27],
                        [13, 1],
                    ],
                    color: '#ff5252',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#ff5252'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#seo-anlytics4'), [{
                    data: [
                        [0, 10],
                        [1, 15],
                        [2, 25],
                        [3, 15],
                        [4, 26],
                        [5, 20],
                        [6, 15],
                        [7, 20],
                        [8, 25],
                        [9, 10],
                        [10, 25],
                        [11, 27],
                        [12, 12],
                        [13, 1],
                    ],
                    color: '#ffba57',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#ffba57'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#sec-ecommerce-chart-line'), [{
                    data: [
                        [0, 1],
                        [1, 27],
                        [2, 15],
                        [3, 25],
                        [4, 10],
                        [5, 20],
                        [6, 15],
                        [7, 25],
                        [8, 10],
                        [9, 25],
                        [10, 15],
                        [11, 27],
                        [12, 12],
                        [13, 1],
                    ],
                    color: '#fff',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 3,
                        fill: true,
                        fillColor: '#fff'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#sec-ecommerce-chart-bar'), [{
                    data: [
                        [0, 18],
                        [1, 10],
                        [2, 20],
                        [3, 10],
                        [4, 27],
                        [5, 15],
                        [6, 20],
                        [7, 24],
                        [8, 20],
                        [9, 16],
                        [10, 18],
                        [11, 10],
                        [12, 20],
                        [13, 10],
                        [14, 27],
                    ],
                    color: '#558B2F',
                    bars: {
                        show: true,
                        lineWidth: 1,
                        fill: true,
                        fillColor: {
                            colors: [{
                                    opacity: 1
                                }, {
                                    opacity: 1
                                }]
                        },
                        barWidth: 0.6,
                        align: 'center',
                        horizontal: false
                    },
                    points: {
                        show: false
                    },
                }], _this.chartOption);
            $.plot($('#monthlyprofit-1'), [{
                    data: [
                        [0, 10],
                        [1, 25],
                        [2, 15],
                        [3, 26],
                        [4, 15],
                        [5, 15],
                        [6, 20],
                        [7, 25],
                        [8, 20],
                        [9, 25],
                        [10, 10],
                        [11, 12],
                        [12, 27],
                        [13, 20],
                        [14, 25],
                        [15, 20],
                        [16, 25],
                        [17, 10],
                        [18, 12],
                        [19, 27],
                        [20, 1],
                    ],
                    color: '#448aff',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 2,
                        fill: true,
                        fillColor: '#448aff'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#monthlyprofit-2'), [{
                    data: [
                        [0, 10],
                        [1, 15],
                        [2, 25],
                        [3, 15],
                        [4, 26],
                        [5, 20],
                        [6, 15],
                        [7, 20],
                        [8, 25],
                        [9, 10],
                        [10, 25],
                        [11, 27],
                        [12, 12],
                        [13, 1],
                    ],
                    color: '#9ccc65',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 2
                    },
                    points: {
                        show: true,
                        radius: 2,
                        fill: true,
                        fillColor: '#9ccc65'
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
        }, 75);
    };
    EcommerceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ecommerce',
            template: __webpack_require__(/*! ./ecommerce.component.html */ "./src/app/theme/dashboard/ecommerce/ecommerce.component.html"),
            styles: [__webpack_require__(/*! ./ecommerce.component.scss */ "./src/app/theme/dashboard/ecommerce/ecommerce.component.scss"), __webpack_require__(/*! ../../../../assets/icon/icofont/css/icofont.scss */ "./src/assets/icon/icofont/css/icofont.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EcommerceComponent);
    return EcommerceComponent;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/ecommerce/ecommerce.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/dashboard/ecommerce/ecommerce.module.ts ***!
  \***************************************************************/
/*! exports provided: EcommerceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceModule", function() { return EcommerceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ecommerce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecommerce.component */ "./src/app/theme/dashboard/ecommerce/ecommerce.component.ts");
/* harmony import */ var _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ecommerce-routing.module */ "./src/app/theme/dashboard/ecommerce/ecommerce-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__);







var EcommerceModule = /** @class */ (function () {
    function EcommerceModule() {
    }
    EcommerceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_4__["EcommerceRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__["ChartModule"]
            ],
            declarations: [_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__["EcommerceComponent"]]
        })
    ], EcommerceModule);
    return EcommerceModule;
}());



/***/ })

}]);
//# sourceMappingURL=ecommerce-ecommerce-module.js.map
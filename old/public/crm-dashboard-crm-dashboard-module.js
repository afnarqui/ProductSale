(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crm-dashboard-crm-dashboard-module"],{

/***/ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/dashboard/crm-dashboard/crm-dashboard-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CrmDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmDashboardRoutingModule", function() { return CrmDashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crm_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crm-dashboard.component */ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _crm_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["CrmDashboardComponent"],
        data: {
            title: 'CRM',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
var CrmDashboardRoutingModule = /** @class */ (function () {
    function CrmDashboardRoutingModule() {
    }
    CrmDashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CrmDashboardRoutingModule);
    return CrmDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n    <!-- subscribe start -->\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block text-center\">\r\n          <i class=\"feather icon-mail text-c-blue d-block f-40\"></i>\r\n          <h4 class=\"m-t-20\"><span class=\"text-c-blue\">8.62k</span> Subscribers</h4>\r\n          <p class=\"m-b-20\">Your main list is growing</p>\r\n          <button class=\"btn btn-primary btn-sm btn-round\">Manage List</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block text-center\">\r\n          <i class=\"feather icon-file-text text-c-green d-block f-40\"></i>\r\n          <h4 class=\"m-t-20\"><span class=\"text-c-green\">+40</span> Post</h4>\r\n          <p class=\"m-b-20\">Your main list is Recent post</p>\r\n          <button class=\"btn btn-success btn-sm btn-round\">Check them out</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-xl-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block text-center\">\r\n          <i class=\"feather icon-users text-c-red d-block f-40\"></i>\r\n          <h4 class=\"m-t-20\">New Customers</h4>\r\n          <p class=\"m-b-20\">This is your current new Users</p>\r\n          <button class=\"btn btn-danger btn-sm btn-round\">Upgrade to VIP</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- subscribe end -->\r\n    <!-- income start -->\r\n    <div class=\"col-xl-4 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Total Leads</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p class=\"text-c-green f-w-500\"><i class=\"fa fa-caret-up m-r-15\"></i> 18% High than last month</p>\r\n          <div class=\"row\">\r\n            <div class=\"col-4 b-r-default\">\r\n              <p class=\"text-muted m-b-5\">Overall</p>\r\n              <h5>76.12%</h5>\r\n            </div>\r\n            <div class=\"col-4 b-r-default\">\r\n              <p class=\"text-muted m-b-5\">Monthly</p>\r\n              <h5>16.40%</h5>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Day</p>\r\n              <h5>4.56%</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"tot-lead\" style=\"height:150px\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Total Vendors</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p class=\"text-c-red f-w-500\"><i class=\"fa fa-caret-down m-r-15\"></i> 24% High than last month</p>\r\n          <div class=\"row\">\r\n            <div class=\"col-4 b-r-default\">\r\n              <p class=\"text-muted m-b-5\">Overall</p>\r\n              <h5>68.52%</h5>\r\n            </div>\r\n            <div class=\"col-4 b-r-default\">\r\n              <p class=\"text-muted m-b-5\">Monthly</p>\r\n              <h5>28.90%</h5>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Day</p>\r\n              <h5>13.50%</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"tot-vendor\" style=\"height:150px\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <h5>Invoice Generate</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p class=\"text-c-green f-w-500\"><i class=\"fa fa-caret-up m-r-15\"></i> 20% High than last month</p>\r\n          <div class=\"row\">\r\n            <div class=\"col-4 b-r-default\">\r\n              <p class=\"text-muted m-b-5\">Overall</p>\r\n              <h5>68.52%</h5>\r\n            </div>\r\n            <div class=\"col-4 b-r-default\">\r\n              <p class=\"text-muted m-b-5\">Monthly</p>\r\n              <h5>28.90%</h5>\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <p class=\"text-muted m-b-5\">Day</p>\r\n              <h5>13.50%</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div id=\"invoice-gen\" style=\"height:150px\"></div>\r\n      </div>\r\n    </div>\r\n    <!-- income end -->\r\n\r\n    <!-- Latest Activity, Feeds, Upcoming Deadlines start -->\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <app-card [title]=\"'Latest Activity'\" [cardClass]=\"'latest-activity-card'\">\r\n        <div class=\"latest-update-box\">\r\n          <div class=\"row p-t-20 p-b-30\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">just now</p>\r\n              <i class=\"fa fa-fighter-jet bg-c-blue update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>John Deo</h6>\r\n              <p class=\"text-muted m-b-15\">The trip was an amazing and a life changing experience!!</p>\r\n              <img src=\"assets/images/mega-menu/01.jpg\" alt=\"\" class=\"img-fluid img-100 m-r-15 m-b-10\">\r\n              <img src=\"assets/images/mega-menu/03.jpg\" alt=\"\" class=\"img-fluid img-100 m-r-15 m-b-10\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-b-30\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">5 min ago</p>\r\n              <i class=\"fa fa-file-text bg-c-blue update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>Administrator</h6>\r\n              <p class=\"text-muted m-b-0\">Free courses for all our customers at A1 Conference Room - 9:00 am tomorrow!</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-b-30\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">3 hours ago</p>\r\n              <i class=\"fa fa-map-marker bg-c-blue update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>Jeny William</h6>\r\n              <p class=\"text-muted m-b-15\">Happy Hour! Free drinks at <span class=\"text-c-blue\">Cafe-Bar all </span>day long!</p>\r\n              <agm-map [style.height]=\"'200px'\" [latitude]=\"21.6776887\" [longitude]=\"71.566261\" [zoom]=\"8\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\">\r\n                <agm-marker [latitude]=\"21.6776887\" [longitude]=\"71.566261\">\r\n                  <agm-info-window><span class=\"text-c-blue\">Cafe-Bar </span>- Nice Place</agm-info-window>\r\n                </agm-marker>\r\n              </agm-map>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-right\">\r\n          <a href=\"javascript:\" class=\" b-b-primary text-primary\">View all Activity</a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <app-card [title]=\"'Feeds'\" [cardClass]=\"'feed-card'\">\r\n        <div class=\"row m-b-30\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <i class=\"fa fa-bell bg-c-blue feed-icon\"></i>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6 class=\"m-b-5\">You have 3 pending tasks. <span class=\"text-muted float-right f-13\">Just Now</span></h6>\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-30\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <i class=\"fa fa-shopping-cart bg-c-red feed-icon\"></i>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6 class=\"m-b-5\">New order received <span class=\"text-muted float-right f-13\">Just Now</span></h6>\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-30\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <i class=\"fa fa-file-text bg-c-green feed-icon\"></i>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6 class=\"m-b-5\">You have 3 pending tasks. <span class=\"text-muted float-right f-13\">Just Now</span></h6>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View all Feeds</a>\r\n        </div>\r\n      </app-card>\r\n      <app-card [title]=\"'Upcoming Deadlines'\" [cardClass]=\"'feed-card'\">\r\n        <div class=\"row m-b-25\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <img src=\"assets/images/mega-menu/01.jpg\" alt=\"\" class=\"img-fluid img-50\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6 class=\"m-b-5\">New able - Redesign</h6>\r\n            <p class=\"text-c-red m-b-0\">2 Days Remaining</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-25\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <img src=\"assets/images/mega-menu/02.jpg\" alt=\"\" class=\"img-fluid img-50\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6 class=\"m-b-5\">New Admin Dashboard</h6>\r\n            <p class=\"text-c-red m-b-0\">Proposal in 6 Days</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-20\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <img src=\"assets/images/mega-menu/03.jpg\" alt=\"\" class=\"img-fluid img-50\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6 class=\"m-b-5\">Logo Design</h6>\r\n            <p class=\"text-c-green m-b-0\">10 Days Remaining</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View all Feeds</a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <!-- Latest Activity, Feeds, Upcoming Deadlines end -->\r\n\r\n    <!-- Client Map Start -->\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center m-l-0\">\r\n            <div class=\"col-auto\">\r\n              <i class=\"icon feather icon-users f-30 text-c-red\"></i>\r\n            </div>\r\n            <div class=\"col-auto\">\r\n              <h6 class=\"text-muted m-b-10\">Happy Customers</h6>\r\n              <h2 class=\"m-b-0\">5984</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card \">\r\n        <div class=\"card-block \">\r\n          <h2 class=\"text-center f-w-400 \">8,421</h2>\r\n          <p class=\"text-center text-muted \">Unique Visitors</p>\r\n          <div id=\"monthlyprofit-3\" style=\"height:30px\"></div>\r\n          <div class=\"m-t-5\">\r\n            <div class=\"row \">\r\n              <div class=\"col-6 text-center \">\r\n                <h6 class=\"f-20 f-w-400\">2,849</h6>\r\n                <p class=\"text-muted f-14 m-b-0\">Today</p>\r\n              </div>\r\n              <div class=\"col-6 text-center \">\r\n                <h6 class=\"f-20 f-w-400\">3,587</h6>\r\n                <p class=\"text-muted f-14 m-b-0\">Yesterday</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card client-map\">\r\n        <div class=\"card-block\">\r\n          <div class=\"client-detail\">\r\n            <div class=\"client-profile\">\r\n              <img src=\"assets/images/avatar-4.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"client-contain\">\r\n              <h5>Gregory Johnes</h5>\r\n              <a href=\"javascript:\" class=\"text-muted\">gregory@demo.com</a>\r\n              <p class=\"text-muted m-0 p-t-10\">Product Manager</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"\">\r\n            <div class=\"client-card-box\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6 text-center client-border p-10\">\r\n                  <p class=\"text-muted m-0\">Invites</p>\r\n                  <span class=\"text-c-red f-20 f-w-600\">845</span>\r\n                </div>\r\n                <div class=\"col-6 text-center p-10\">\r\n                  <p class=\"text-muted m-0\">Pending</p>\r\n                  <span class=\"text-c-red f-20 f-w-600\">02</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 client-border-card p-t-10\">\r\n                <p>Overall Activity</p>\r\n              </div>\r\n              <div id=\"client-map-2\" style=\"height:70px\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-xl-4\">\r\n      <div class=\"card client-map\">\r\n        <div class=\"card-block\">\r\n          <div class=\"client-detail\">\r\n            <div class=\"client-profile\">\r\n              <img src=\"assets/images/avatar-3.jpg\" alt=\"\">\r\n            </div>\r\n            <div class=\"client-contain\">\r\n              <h5>Gregory Johnes</h5>\r\n              <a href=\"javascript:\" class=\"text-muted\">gregory@demo.com</a>\r\n              <p class=\"text-muted m-0 p-t-10\">Product Manager</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"\">\r\n            <div class=\"client-card-box\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6 text-center client-border p-10\">\r\n                  <p class=\"text-muted m-0\">Invites</p>\r\n                  <span class=\"text-c-green f-20 f-w-600\">812</span>\r\n                </div>\r\n                <div class=\"col-6 text-center p-10\">\r\n                  <p class=\"text-muted m-0\">Pending</p>\r\n                  <span class=\"text-c-green f-20 f-w-600\">00</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-12 client-border-card p-t-10\">\r\n                <p>Overall Activity</p>\r\n              </div>\r\n              <div id=\"client-map-3\" style=\"height:70px\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Client Map End -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2Rhc2hib2FyZC9jcm0tZGFzaGJvYXJkL2NybS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: CrmDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmDashboardComponent", function() { return CrmDashboardComponent; });
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






var CrmDashboardComponent = /** @class */ (function () {
    function CrmDashboardComponent() {
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
    CrmDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            $.plot($('#monthlyprofit-3'), [{
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
                        [12, 20],
                        [13, 25],
                        [14, 10],
                        [15, 12],
                        [16, 27],
                        [17, 1],
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
            $.plot($('#client-map-2'), [{
                    data: [
                        [0, 0],
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
                        [15, 20],
                        [16, 10],
                        [17, 15],
                        [18, 12],
                        [19, 27],
                        [20, 20],
                        [21, 15],
                        [22, 0],
                    ],
                    color: '#ff5252',
                    lines: {
                        show: true,
                        fill: true,
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
            $.plot($('#client-map-3'), [{
                    data: [
                        [0, 2],
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
                        [14, 5],
                    ],
                    color: '#9ccc65',
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
                        barWidth: 0.5,
                        align: 'center',
                        horizontal: false
                    },
                    points: {
                        show: false
                    },
                }], _this.chartOption);
            $.plot($('#tot-lead'), [{
                    data: [
                        [0, 25],
                        [1, 15],
                        [2, 20],
                        [3, 27],
                        [4, 10],
                        [5, 20],
                        [6, 10],
                        [7, 26],
                        [8, 20],
                        [9, 10],
                        [10, 25],
                        [11, 27],
                        [12, 12],
                        [13, 26],
                    ],
                    color: '#448aff',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 3
                    },
                    points: {
                        show: false,
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#tot-vendor'), [{
                    data: [
                        [0, 25],
                        [1, 15],
                        [2, 25],
                        [3, 27],
                        [4, 10],
                        [5, 20],
                        [6, 15],
                        [7, 26],
                        [8, 20],
                        [9, 13],
                        [10, 25],
                        [11, 27],
                        [12, 12],
                        [13, 20],
                    ],
                    color: '#9ccc65',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 3
                    },
                    points: {
                        show: false,
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
            $.plot($('#invoice-gen'), [{
                    data: [
                        [0, 25],
                        [1, 30],
                        [2, 25],
                        [3, 27],
                        [4, 10],
                        [5, 20],
                        [6, 15],
                        [7, 26],
                        [8, 10],
                        [9, 13],
                        [10, 25],
                        [11, 27],
                        [12, 12],
                        [13, 27],
                    ],
                    color: '#ff5252',
                    lines: {
                        show: true,
                        fill: true,
                        lineWidth: 3
                    },
                    points: {
                        show: false,
                    },
                    curvedLines: {
                        apply: false,
                    }
                }], _this.chartOption);
        }, 75);
    };
    CrmDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crm-dashboard',
            template: __webpack_require__(/*! ./crm-dashboard.component.html */ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./crm-dashboard.component.scss */ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.scss"), __webpack_require__(/*! ../../../../assets/charts/radial/css/radial.scss */ "./src/assets/charts/radial/css/radial.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CrmDashboardComponent);
    return CrmDashboardComponent;
}());



/***/ }),

/***/ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/dashboard/crm-dashboard/crm-dashboard.module.ts ***!
  \***********************************************************************/
/*! exports provided: CrmDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmDashboardModule", function() { return CrmDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _crm_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crm-dashboard.component */ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard.component.ts");
/* harmony import */ var _crm_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crm-dashboard-routing.module */ "./src/app/theme/dashboard/crm-dashboard/crm-dashboard-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");








var CrmDashboardModule = /** @class */ (function () {
    function CrmDashboardModule() {
    }
    CrmDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _crm_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_4__["CrmDashboardRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__["ChartModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
            ],
            declarations: [_crm_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["CrmDashboardComponent"]]
        })
    ], CrmDashboardModule);
    return CrmDashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=crm-dashboard-crm-dashboard-module.js.map
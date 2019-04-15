(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statistic-statistic-module"],{

/***/ "./src/app/theme/widget/statistic/statistic-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/theme/widget/statistic/statistic-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: StatisticRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticRoutingModule", function() { return StatisticRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _statistic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistic.component */ "./src/app/theme/widget/statistic/statistic.component.ts");




var routes = [
    {
        path: '',
        component: _statistic_component__WEBPACK_IMPORTED_MODULE_3__["StatisticComponent"],
        data: {
            title: 'Widget Statistics',
            icon: 'icon-view-grid',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
var StatisticRoutingModule = /** @class */ (function () {
    function StatisticRoutingModule() {
    }
    StatisticRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StatisticRoutingModule);
    return StatisticRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/widget/statistic/statistic.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/theme/widget/statistic/statistic.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n\r\n    <!-- page statustic card start -->\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-8\">\r\n              <h4 class=\"text-c-yellow\">$30200</h4>\r\n              <h6 class=\"text-muted m-b-0\">All Earnings</h6>\r\n            </div>\r\n            <div class=\"col-4 text-right\">\r\n              <i class=\"feather icon-bar-chart-2 f-28\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-yellow\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-9\">\r\n              <p class=\"text-white m-b-0\">% change</p>\r\n            </div>\r\n            <div class=\"col-3 text-right\">\r\n              <i class=\"feather icon-trending-up text-white f-16\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-8\">\r\n              <h4 class=\"text-c-green\">290+</h4>\r\n              <h6 class=\"text-muted m-b-0\">Page Views</h6>\r\n            </div>\r\n            <div class=\"col-4 text-right\">\r\n              <i class=\"feather icon-file-text f-28\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-green\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-9\">\r\n              <p class=\"text-white m-b-0\">% change</p>\r\n            </div>\r\n            <div class=\"col-3 text-right\">\r\n              <i class=\"feather icon-trending-up text-white f-16\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-8\">\r\n              <h4 class=\"text-c-red\">145</h4>\r\n              <h6 class=\"text-muted m-b-0\">Task</h6>\r\n            </div>\r\n            <div class=\"col-4 text-right\">\r\n              <i class=\"feather icon-calendar f-28\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-red\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-9\">\r\n              <p class=\"text-white m-b-0\">% change</p>\r\n            </div>\r\n            <div class=\"col-3 text-right\">\r\n              <i class=\"feather icon-trending-down text-white f-16\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-8\">\r\n              <h4 class=\"text-c-blue\">500</h4>\r\n              <h6 class=\"text-muted m-b-0\">Downloads</h6>\r\n            </div>\r\n            <div class=\"col-4 text-right\">\r\n              <i class=\"feather icon-thumbs-down f-28\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-blue\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-9\">\r\n              <p class=\"text-white m-b-0\">% change</p>\r\n            </div>\r\n            <div class=\"col-3 text-right\">\r\n              <i class=\"feather icon-trending-down text-white f-16\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- page statustic card end -->\r\n\r\n    <!-- widget-statstic start -->\r\n    <div class=\"col-md-12 col-xl-4\">\r\n      <div class=\"card widget-statstic-card\">\r\n        <div class=\"card-header borderless\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Statistics</h5>\r\n            <p class=\"p-t-10 m-b-0 text-c-yellow\">Compared to last week</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"feather icon-sliders st-icon bg-c-yellow\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">5,456</h3>\r\n            <i class=\"feather icon-arrow-up f-30 text-c-green\"></i>\r\n            <span class=\"float-right bg-c-yellow\">23%</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card widget-statstic-card\">\r\n        <div class=\"card-header borderless\">\r\n          <div class=\"card-header-left\">\r\n            <h5>Unique Visitor</h5>\r\n            <p class=\"p-t-10 m-b-0 text-c-red\">55% From last 28 hours</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"feather icon-users st-icon bg-c-red txt-lite-color\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">3,874</h3>\r\n            <i class=\"feather icon-arrow-down text-c-red f-30 \"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card widget-statstic-card\">\r\n        <div class=\"card-header borderless\">\r\n          <div class=\"card-header-left\">\r\n            <h5>New Orders</h5>\r\n            <p class=\"p-t-10 m-b-0 text-c-blue\">54% From last month</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <i class=\"feather icon-shopping-cart st-icon bg-c-blue\"></i>\r\n          <div class=\"text-left\">\r\n            <h3 class=\"d-inline-block\">5,456</h3>\r\n            <i class=\"feather icon-arrow-up text-c-green f-30 \"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- widget-statstic end -->\r\n\r\n    <!-- order  start -->\r\n    <div class=\"col-md-12 col-xl-4\">\r\n      <div class=\"card bg-c-yellow order-card\">\r\n        <div class=\"card-block\">\r\n          <h6>Revenue</h6>\r\n          <h2>$42,562</h2>\r\n          <p class=\"m-b-0\">$5,032 <i class=\"feather icon-arrow-up m-l-10\"></i></p>\r\n          <i class=\"card-icon feather icon-filter\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card bg-c-blue order-card\">\r\n        <div class=\"card-block\">\r\n          <h6>Orders Received</h6>\r\n          <h2>486</h2>\r\n          <p class=\"m-b-0\">$5,032 <i class=\"feather icon-arrow-up m-l-10 m-r-10\"></i>$1,055 <i class=\"feather icon-arrow-down\"></i></p>\r\n          <i class=\"card-icon feather icon-users\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card bg-c-green order-card\">\r\n        <div class=\"card-block\">\r\n          <h6>Total Sales</h6>\r\n          <h2>1641</h2>\r\n          <p class=\"m-b-0\">$5,032 <i class=\"feather icon-arrow-down m-l-10 m-r-10\"></i>$1,055 <i class=\"feather icon-arrow-up\"></i></p>\r\n          <i class=\"card-icon feather icon-radio\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- order  end -->\r\n\r\n    <!-- subscribe start -->\r\n    <div class=\"col-md-12 col-xl-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block text-center\">\r\n          <i class=\"feather icon-mail text-c-blue d-block f-40\"></i>\r\n          <h4 class=\"m-t-20\"><span class=\"text-c-blue\">8.62k</span> Subscribers</h4>\r\n          <p class=\"m-b-20\">Your main list is growing</p>\r\n          <button class=\"btn btn-primary btn-sm btn-round\">Manage List</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block text-center\">\r\n          <i class=\"feather icon-twitter text-c-green d-block f-40\"></i>\r\n          <h4 class=\"m-t-20\"><span class=\"text-c-green\">+40</span> Followers</h4>\r\n          <p class=\"m-b-20\">Your main list is growing</p>\r\n          <button class=\"btn btn-success btn-sm btn-round\">Check them out</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block text-center\">\r\n          <i class=\"feather icon-briefcase text-c-red d-block f-40\"></i>\r\n          <h4 class=\"m-t-20\">Business Plan</h4>\r\n          <p class=\"m-b-20\">This is your current active plan</p>\r\n          <button class=\"btn btn-danger btn-sm btn-round\">Upgrade to VIP</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- subscribe end -->\r\n\r\n    <!-- statustic start -->\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card statustic-card\">\r\n        <div class=\"card-header borderless\">\r\n          <h5>Articles</h5>\r\n        </div>\r\n        <div class=\"card-block text-center\">\r\n          <span class=\"d-block text-c-blue f-36\">56</span>\r\n          <p class=\"m-b-0\">Total</p>\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar bg-c-blue\" style=\"width:56%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-blue\">\r\n          <h6 class=\"text-white m-b-0\">Draft: 22</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card statustic-card\">\r\n        <div class=\"card-header borderless\">\r\n          <h5>Categories</h5>\r\n        </div>\r\n        <div class=\"card-block text-center\">\r\n          <span class=\"d-block text-c-green f-36\">14</span>\r\n          <p class=\"m-b-0\">Total</p>\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar bg-c-green\" style=\"width:14%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-green\">\r\n          <h6 class=\"text-white m-b-0\">Used: 14</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card statustic-card\">\r\n        <div class=\"card-header borderless\">\r\n          <h5>Tickets</h5>\r\n        </div>\r\n        <div class=\"card-block text-center\">\r\n          <span class=\"d-block text-c-red f-36\">85</span>\r\n          <p class=\"m-b-0\">Total</p>\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar bg-c-red\" style=\"width:85%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-red\">\r\n          <h6 class=\"text-white m-b-0\">Closed Today: 85</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 col-xl-3\">\r\n      <div class=\"card statustic-card\">\r\n        <div class=\"card-header borderless\">\r\n          <h5>Forums</h5>\r\n        </div>\r\n        <div class=\"card-block text-center\">\r\n          <span class=\"d-block text-c-yellow f-36\">42</span>\r\n          <p class=\"m-b-0\">Total</p>\r\n          <div class=\"progress\">\r\n            <div class=\"progress-bar bg-c-yellow\" style=\"width:42%\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer bg-c-yellow\">\r\n          <h6 class=\"text-white m-b-0\">Unanswered: 42</h6>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- statustic end -->\r\n\r\n    <!-- customar project  start -->\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center m-l-0\">\r\n            <div class=\"col-auto\">\r\n              <i class=\"icon feather icon-book f-30 text-c-purple\"></i>\r\n            </div>\r\n            <div class=\"col-auto\">\r\n              <h6 class=\"text-muted m-b-10\">Tickets Answered</h6>\r\n              <h2 class=\"m-b-0\">379</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center m-l-0\">\r\n            <div class=\"col-auto\">\r\n              <i class=\"icon feather icon-navigation-2 f-30 text-c-green\"></i>\r\n            </div>\r\n            <div class=\"col-auto\">\r\n              <h6 class=\"text-muted m-b-10\">Projects Launched</h6>\r\n              <h2 class=\"m-b-0\">205</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center m-l-0\">\r\n            <div class=\"col-auto\">\r\n              <i class=\"icon feather icon-users f-30 text-c-red\"></i>\r\n            </div>\r\n            <div class=\"col-auto\">\r\n              <h6 class=\"text-muted m-b-10\">Happy Customers</h6>\r\n              <h2 class=\"m-b-0\">5984</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center m-l-0\">\r\n            <div class=\"col-auto\">\r\n              <i class=\"icon feather icon-award f-30 text-c-blue\"></i>\r\n            </div>\r\n            <div class=\"col-auto\">\r\n              <h6 class=\"text-muted m-b-10\">Unique Innovation</h6>\r\n              <h2 class=\"m-b-0\">325</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- customar project  end -->\r\n\r\n    <!-- social download  start -->\r\n    <div class=\"col-xl-4 col-md-6\">\r\n      <div class=\"card social-card bg-c-red\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-auto\">\r\n              <i class=\"feather icon-mail f-34 text-c-red social-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6 class=\"m-b-0\">Mail</h6>\r\n              <p>231.2w downloads</p>\r\n              <p class=\"m-b-0\">Lorem Ipsum is simply dummy text of the printing</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a href=\"javascript:\" class=\"download-icon\"><i class=\"feather icon-arrow-down\"></i></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-6\">\r\n      <div class=\"card social-card bg-c-blue\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-auto\">\r\n              <i class=\"feather icon-twitter f-34 text-c-blue social-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6 class=\"m-b-0\">Twitter</h6>\r\n              <p>231.2w downloads</p>\r\n              <p class=\"m-b-0\">Lorem Ipsum is simply dummy text of the printing</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a href=\"javascript:\" class=\"download-icon\"><i class=\"feather icon-arrow-down\"></i></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <div class=\"card social-card bg-c-green\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-auto\">\r\n              <i class=\"feather icon-instagram f-34 text-c-green social-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6 class=\"m-b-0\">Instagram</h6>\r\n              <p>231.2w downloads</p>\r\n              <p class=\"m-b-0\">Lorem Ipsum is simply dummy text of the printing</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <a href=\"javascript:\" class=\"download-icon\"><i class=\"feather icon-arrow-down\"></i></a>\r\n      </div>\r\n    </div>\r\n    <!-- social download  end -->\r\n\r\n    <!-- order-visitor start -->\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card text-center order-visitor-card\">\r\n        <div class=\"card-block\">\r\n          <h6 class=\"m-b-0\">Total Subscription</h6>\r\n          <h4 class=\"m-t-15 m-b-15\"><i class=\"icon feather icon-arrow-down m-r-15 text-c-red\"></i>7652</h4>\r\n          <p class=\"m-b-0\">48% From Last 24 Hours</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card text-center order-visitor-card\">\r\n        <div class=\"card-block\">\r\n          <h6 class=\"m-b-0\">Order Status</h6>\r\n          <h4 class=\"m-t-15 m-b-15\"><i class=\"icon feather icon-arrow-up m-r-15 text-c-green\"></i>6325</h4>\r\n          <p class=\"m-b-0\">36% From Last 6 Months</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card text-center order-visitor-card\">\r\n        <div class=\"card-block\">\r\n          <h6 class=\"m-b-0\">Unique Visitors</h6>\r\n          <h4 class=\"m-t-15 m-b-15\"><i class=\"icon feather icon-arrow-down m-r-15 text-c-red\"></i>652</h4>\r\n          <p class=\"m-b-0\">36% From Last 6 Months</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card text-center order-visitor-card\">\r\n        <div class=\"card-block\">\r\n          <h6 class=\"m-b-0\">Monthly Earnings</h6>\r\n          <h4 class=\"m-t-15 m-b-15\"><i class=\"icon feather icon-arrow-up m-r-15 text-c-green\"></i>5963</h4>\r\n          <p class=\"m-b-0\">36% From Last 6 Months</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- order-visitor end -->\r\n\r\n    <!-- visitors  start -->\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card bg-c-red text-white widget-visitor-card\">\r\n        <div class=\"card-block-small text-center\">\r\n          <h2>1,658</h2>\r\n          <h6>Daily user</h6>\r\n          <i class=\"feather icon-user\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card bg-c-blue text-white widget-visitor-card\">\r\n        <div class=\"card-block-small text-center\">\r\n          <h2>5,678</h2>\r\n          <h6>Daily Visitor</h6>\r\n          <i class=\"feather icon-file-text\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card bg-c-yellow text-white widget-visitor-card\">\r\n        <div class=\"card-block-small text-center\">\r\n          <h2>5,678</h2>\r\n          <h6>Last Month Visitor</h6>\r\n          <i class=\"feather icon-award\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- visitors  end -->\r\n\r\n    <!-- project  start -->\r\n    <div class=\"col-md-12 col-xl-6 \">\r\n      <div class=\"card app-design\">\r\n        <div class=\"card-block\">\r\n          <button class=\"btn btn-primary float-right\">Completed</button>\r\n          <h6 class=\"f-w-400 text-muted\">App Design And Development</h6>\r\n          <p class=\"text-c-blue f-w-400\">Android</p>\r\n          <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>\r\n          <div class=\"design-description d-inline-block m-r-40\">\r\n            <h3 class=\"f-w-400\">678</h3>\r\n            <p class=\"text-muted\">Question</p>\r\n          </div>\r\n          <div class=\"design-description d-inline-block\">\r\n            <h3 class=\"f-w-400\">1,452</h3>\r\n            <p class=\"text-muted\">Comments</p>\r\n          </div>\r\n          <div class=\"team-box p-b-20\">\r\n            <p class=\"d-inline-block m-r-20 f-w-400\">Team</p>\r\n            <div class=\"team-section d-inline-block\">\r\n              <a href=\"javascript: \"><img src=\"assets/images/avatar-2.jpg \" data-toggle=\"tooltip\" title=\"Josephin Doe\" alt=\" \"></a>\r\n              <a href=\"javascript: \"><img src=\"assets/images/avatar-3.jpg \" data-toggle=\"tooltip\" title=\"Lary Doe\" alt=\" \" class=\"m-l-5 \"></a>\r\n              <a href=\"javascript: \"><img src=\"assets/images/avatar-4.jpg \" data-toggle=\"tooltip\" title=\"Alia\" alt=\" \" class=\"m-l-5 \"></a>\r\n              <a href=\"javascript: \"><img src=\"assets/images/avatar-2.jpg \" data-toggle=\"tooltip\" title=\"Suzen\" alt=\" \" class=\"m-l-5 \"></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"progress-box\">\r\n            <p class=\"d-inline-block m-r-20 f-w-400\">Progress</p>\r\n            <div class=\"progress d-inline-block\">\r\n              <div class=\"progress-bar bg-c-blue\" style=\"width:78% \"><label>78%</label></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-xl-6 \">\r\n      <div class=\"card app-design\">\r\n        <div class=\"card-block\">\r\n          <button class=\"btn btn-success float-right\">Pending</button>\r\n          <h6 class=\"f-w-400 text-muted\">Landing Page Design</h6>\r\n          <p class=\"text-c-green f-w-400\">Webdesign</p>\r\n          <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>\r\n          <div class=\"design-description d-inline-block m-r-40\">\r\n            <h3 class=\"f-w-400\">271</h3>\r\n            <p class=\"text-muted\">Question</p>\r\n          </div>\r\n          <div class=\"design-description d-inline-block\">\r\n            <h3 class=\"f-w-400\">816</h3>\r\n            <p class=\"text-muted\">Comments</p>\r\n          </div>\r\n          <div class=\"team-box p-b-20\">\r\n            <p class=\"d-inline-block m-r-20 f-w-400\">Team</p>\r\n            <div class=\"team-section d-inline-block\">\r\n              <div class=\"team-section d-inline-block\">\r\n                <a href=\"javascript: \"><img src=\"assets/images/avatar-3.jpg \" data-toggle=\"tooltip\" title=\"Lary Doe\" alt=\" \" class=\"m-l-5 \"></a>\r\n                <a href=\"javascript: \"><img src=\"assets/images/avatar-4.jpg \" data-toggle=\"tooltip\" title=\"Alia\" alt=\" \" class=\"m-l-5 \"></a>\r\n                <a href=\"javascript: \"><img src=\"assets/images/avatar-2.jpg \" data-toggle=\"tooltip\" title=\"Josephin Doe\" alt=\" \"></a>\r\n                <a href=\"javascript: \"><img src=\"assets/images/avatar-3.jpg \" data-toggle=\"tooltip\" title=\"Suzen\" alt=\" \" class=\"m-l-5 \"></a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"progress-box\">\r\n            <p class=\"d-inline-block m-r-20 f-w-400\">Progress</p>\r\n            <div class=\"progress d-inline-block\">\r\n              <div class=\"progress-bar bg-c-green\" style=\"width:78% \"><label>78%</label></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- project  end -->\r\n\r\n    <!-- user start -->\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <div class=\"card user-card-full\">\r\n        <div class=\"row m-l-0 m-r-0\">\r\n          <div class=\"col-sm-4 bg-c-blue user-profile\">\r\n            <div class=\"card-block text-center text-white\">\r\n              <div class=\"m-b-25\">\r\n                <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n              </div>\r\n              <h6 class=\"f-w-600\">Jeny William</h6>\r\n              <p>Web Designer</p>\r\n              <a href=\"javascript:\" class=\"text-white\"><i class=\"feather icon-edit m-t-10 f-16\"></i></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"card-block\">\r\n              <h6 class=\"m-b-20 p-b-5 b-b-default f-w-600\">Information</h6>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <p class=\"m-b-10 f-w-600\">Email</p>\r\n                  <h6 class=\"text-primary\"><a href=\"mailto:someone@example.com?Subject=Hello%20again\" target=\"_top\">jeny@gmail.com</a> </h6>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <p class=\"m-b-10 f-w-600\">Phone</p>\r\n                  <h6 class=\"text-muted f-w-400\">0023-333-526136</h6>\r\n                </div>\r\n              </div>\r\n              <h6 class=\"m-b-20 m-t-50 p-b-5 b-b-default f-w-600\">Projects</h6>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <p class=\"m-b-10 f-w-600\">Recent</p>\r\n                  <h6 class=\"text-muted f-w-400\">Guruable Admin</h6>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <p class=\"m-b-10 f-w-600\">Most Viewed</p>\r\n                  <h6 class=\"text-muted f-w-400\">Able Pro Admin</h6>\r\n                </div>\r\n              </div>\r\n              <ul class=\"social-link list-unstyled m-t-50 m-b-20\">\r\n                <li><a href=\"javascript:\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"facebook\"><i class=\"feather icon-facebook facebook\" aria-hidden=\"true\"></i></a></li>\r\n                <li><a href=\"javascript:\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"twitter\"><i class=\"feather icon-twitter twitter\" aria-hidden=\"true\"></i></a></li>\r\n                <li><a href=\"javascript:\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\"instagram\"><i class=\"feather icon-instagram instagram\" aria-hidden=\"true\"></i></a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card user-card2\">\r\n        <div class=\"card-block text-center\">\r\n          <h6 class=\"m-b-15\">Project Risk</h6>\r\n          <div class=\"risk-rate\">\r\n            <span><b>5</b></span>\r\n          </div>\r\n          <h6 class=\"m-b-10 m-t-10\">Balanced</h6>\r\n          <a href=\"javascript:\" class=\"text-c-green b-b-success\">Change Your Risk</a>\r\n          <div class=\"row justify-content-center m-t-10 b-t-default m-l-0 m-r-0\">\r\n            <div class=\"col m-t-15 b-r-default\">\r\n              <h6 class=\"text-muted\">Nr</h6>\r\n              <h6>AWS 2455</h6>\r\n            </div>\r\n            <div class=\"col m-t-15\">\r\n              <h6 class=\"text-muted\">Created</h6>\r\n              <h6>30th Sep</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn btn-success btn-block\">Download Overall Report</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card wather-card\">\r\n        <div class=\"nature-card\">\r\n          <img src=\"assets/images/widget/wathernature.png\" alt=\"whether image\" class=\"img-fluid main-img\">\r\n          <img src=\"assets/images/widget/watherstar1.png\" alt=\"whether image\" class=\"snow1\">\r\n          <img src=\"assets/images/widget/watherstar2.png\" alt=\"whether image\" class=\"snow2\">\r\n          <img src=\"assets/images/widget/watherbottom.png\" alt=\"whether image\" class=\"bottom-img\">\r\n          <div class=\"nature-cont text-white\">\r\n            <h6>Snow</h6>\r\n            <h2>-10°</h2>\r\n            <h6>10:20 AM</h6>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row text-c-blue\">\r\n            <div class=\"col\">\r\n              <h6>Sunday</h6></div>\r\n            <div class=\"col text-right\">-10°<i class=\"fa fa-snowflake-o m-l-20\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"row m-t-10\">\r\n            <div class=\"col\">\r\n              <h6>Monday</h6></div>\r\n            <div class=\"col text-right\">8°<i class=\"fa fa-cloud m-l-20\"></i></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- user end -->\r\n\r\n    <!-- statustic with progressbar  start -->\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card statustic-progress-card\">\r\n        <div class=\"card-header borderless\">\r\n          <h5>Open Ticket</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n              <label class=\"label label-success\">35% <i class=\"m-l-10 feather icon-arrow-up\"></i></label>\r\n            </div>\r\n            <div class=\"col text-right\">\r\n              <h5 class=\"\">35</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"progress m-t-15\">\r\n            <div class=\"progress-bar bg-c-green\" style=\"width:35%\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card statustic-progress-card\">\r\n        <div class=\"card-header borderless\">\r\n          <h5>Open Ticket</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n              <label class=\"label bg-c-blue\">35% <i class=\"m-l-10 feather icon-arrow-up\"></i></label>\r\n            </div>\r\n            <div class=\"col text-right\">\r\n              <h5 class=\"\">28</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"progress m-t-15\">\r\n            <div class=\"progress-bar bg-c-blue\" style=\"width:28%\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card statustic-progress-card\">\r\n        <div class=\"card-header borderless\">\r\n          <h5>Open Ticket</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n              <label class=\"label label-danger\">35% <i class=\"m-l-10 feather icon-arrow-up\"></i></label>\r\n            </div>\r\n            <div class=\"col text-right\">\r\n              <h5 class=\"\">87</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"progress m-t-15\">\r\n            <div class=\"progress-bar bg-c-red\" style=\"width:87%\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <div class=\"card statustic-progress-card\">\r\n        <div class=\"card-header borderless\">\r\n          <h5>Open Ticket</h5>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n              <label class=\"label label-warning\">35% <i class=\"m-l-10 feather icon-arrow-up\"></i></label>\r\n            </div>\r\n            <div class=\"col text-right\">\r\n              <h5 class=\"\">32</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"progress m-t-15\">\r\n            <div class=\"progress-bar bg-c-yellow\" style=\"width:32%\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- statustic with progressbar  end -->\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/widget/statistic/statistic.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/theme/widget/statistic/statistic.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3dpZGdldC9zdGF0aXN0aWMvc3RhdGlzdGljLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/widget/statistic/statistic.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/theme/widget/statistic/statistic.component.ts ***!
  \***************************************************************/
/*! exports provided: StatisticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticComponent", function() { return StatisticComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatisticComponent = /** @class */ (function () {
    function StatisticComponent() {
    }
    StatisticComponent.prototype.ngOnInit = function () {
    };
    StatisticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistic',
            template: __webpack_require__(/*! ./statistic.component.html */ "./src/app/theme/widget/statistic/statistic.component.html"),
            styles: [__webpack_require__(/*! ./statistic.component.scss */ "./src/app/theme/widget/statistic/statistic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatisticComponent);
    return StatisticComponent;
}());



/***/ }),

/***/ "./src/app/theme/widget/statistic/statistic.module.ts":
/*!************************************************************!*\
  !*** ./src/app/theme/widget/statistic/statistic.module.ts ***!
  \************************************************************/
/*! exports provided: StatisticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticModule", function() { return StatisticModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _statistic_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistic-routing.module */ "./src/app/theme/widget/statistic/statistic-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _statistic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statistic.component */ "./src/app/theme/widget/statistic/statistic.component.ts");






var StatisticModule = /** @class */ (function () {
    function StatisticModule() {
    }
    StatisticModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _statistic_routing_module__WEBPACK_IMPORTED_MODULE_3__["StatisticRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_statistic_component__WEBPACK_IMPORTED_MODULE_5__["StatisticComponent"]]
        })
    ], StatisticModule);
    return StatisticModule;
}());



/***/ })

}]);
//# sourceMappingURL=statistic-statistic-module.js.map
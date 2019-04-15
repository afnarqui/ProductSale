(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-widget-data-widget-module"],{

/***/ "./src/app/theme/widget/data-widget/data-widget-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/theme/widget/data-widget/data-widget-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DataWidgetRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataWidgetRoutingModule", function() { return DataWidgetRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-widget.component */ "./src/app/theme/widget/data-widget/data-widget.component.ts");




var routes = [
    {
        path: '',
        component: _data_widget_component__WEBPACK_IMPORTED_MODULE_3__["DataWidgetComponent"],
        data: {
            title: 'Data Widget',
            icon: 'icon-view-grid',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];
var DataWidgetRoutingModule = /** @class */ (function () {
    function DataWidgetRoutingModule() {
    }
    DataWidgetRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DataWidgetRoutingModule);
    return DataWidgetRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/theme/widget/data-widget/data-widget.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-body\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <app-card [title]=\"'To Do List'\" [blockClass]=\"'widget-last-task'\">\r\n        <div class=\"to-do-list\">\r\n          <div class=\"checkbox-fade fade-in-default\">\r\n            <label class=\"check-task\">\r\n              <input type=\"checkbox\" value=\"\" appToDoListRead>\r\n              <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-default\"></i></span>\r\n              <span>Check your Email</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"float-right\">\r\n            <a href=\"javascript:\" class=\"delete_todolist\" appToDoListRemove><i class=\"fa fa-trash\"></i></a>\r\n          </div>\r\n        </div>\r\n        <div class=\"to-do-list\">\r\n          <div class=\"checkbox-fade fade-in-default\">\r\n            <label class=\"check-task done-task\">\r\n              <input type=\"checkbox\" value=\"\" checked appToDoListRead>\r\n              <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-default\"></i></span>\r\n              <span>Make YouTube Video</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"float-right\">\r\n            <a href=\"javascript:\" class=\"delete_todolist\" appToDoListRemove><i class=\"fa fa-trash\"></i></a>\r\n          </div>\r\n        </div>\r\n        <div class=\"to-do-list\">\r\n          <div class=\"checkbox-fade fade-in-default\">\r\n            <label class=\"check-task\">\r\n              <input type=\"checkbox\" value=\"\" appToDoListRead>\r\n              <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-default\"></i></span>\r\n              <span>Create Banner</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"float-right\">\r\n            <a href=\"javascript:\" class=\"delete_todolist\" appToDoListRemove><i class=\"fa fa-trash\"></i></a>\r\n          </div>\r\n        </div>\r\n        <div class=\"to-do-list\">\r\n          <div class=\"checkbox-fade fade-in-default\">\r\n            <label class=\"check-task\">\r\n              <input type=\"checkbox\" value=\"\" appToDoListRead>\r\n              <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-default\"></i></span>\r\n              <span>Upload Project</span>\r\n            </label>\r\n          </div>\r\n          <div class=\"float-right\">\r\n            <a href=\"javascript:\" class=\"delete_todolist\" appToDoListRemove><i class=\"fa fa-trash\"></i></a>\r\n          </div>\r\n        </div>\r\n        <div class=\"right-icon-control\">\r\n          <form class=\"form-material\" action=\"javascript:\">\r\n            <div class=\"form-group form-primary\">\r\n              <input type=\"text\" name=\"footer-email\" class=\"form-control\" required=\"\">\r\n              <span class=\"form-bar\"></span>\r\n              <label class=\"float-label\">Add Task</label>\r\n            </div>\r\n          </form>\r\n          <div class=\"form-icon \">\r\n            <button class=\"btn btn-primary btn-icon ripple light\">\r\n              <i class=\"fa fa-plus\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <app-card [title]=\"'My Projects'\" [blockClass]=\"'widget-last-task'\">\r\n        <p class=\"m-b-10\">New Dashboard <span class=\"float-right\">5 Mins ago</span></p>\r\n        <ul class=\"list-unstyled m-b-25\">\r\n          <li class=\"d-inline-block\"><img src=\"assets/images/avatar-5.jpg\" alt=\"user-image\" class=\"img-radius img-30 m-r-15\"></li>\r\n          <li class=\"d-inline-block\"><img src=\"assets/images/avatar-1.jpg\" alt=\"user-image\" class=\"img-radius img-30 m-r-15\"></li>\r\n        </ul>\r\n        <p class=\"m-b-10 \">Web Design <span class=\"float-right\">8 Mins ago</span></p>\r\n        <ul class=\"list-unstyled  m-b-25\">\r\n          <li class=\"d-inline-block\"><img src=\"assets/images/avatar-5.jpg\" alt=\"user-image\" class=\"img-radius img-30 m-r-15\"></li>\r\n          <li class=\"d-inline-block\"><img src=\"assets/images/avatar-2.jpg\" alt=\"user-image\" class=\"img-radius img-30 m-r-15\"></li>\r\n          <li class=\"d-inline-block\"><img src=\"assets/images/avatar-3.jpg\" alt=\"user-image\" class=\"img-radius img-30 m-r-15\"></li>\r\n        </ul>\r\n        <p class=\"m-b-10\">Android Design <span class=\"float-right\">12 Mins ago</span></p>\r\n        <ul class=\"list-unstyled\">\r\n          <li class=\"d-inline-block\"><img src=\"assets/images/avatar-4.jpg\" alt=\"user-image\" class=\"img-radius img-30 m-r-15\"></li>\r\n        </ul>\r\n        <div class=\"right-icon-control m-t-15\">\r\n          <form class=\"form-material\" action=\"javascript:\">\r\n            <div class=\"form-group form-primary\">\r\n              <input name=\"footer-email\" class=\"form-control\" required=\"\">\r\n              <span class=\"form-bar\"></span>\r\n              <label class=\"float-label\">Add Project</label>\r\n            </div>\r\n          </form>\r\n          <div class=\"form-icon \">\r\n            <button class=\"btn btn-primary btn-icon ripple light\">\r\n              <i class=\"fa fa-plus\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-3 col-md-6\">\r\n      <app-card [title]=\"'Traffic Sources'\" [cardClass]=\"'trafic-card'\">\r\n        <p class=\"m-b-10\">Direct <span class=\"float-right\"><i class=\"fa fa-caret-up m-r-10\"></i>25%</span></p>\r\n        <div class=\"progress blue\">\r\n          <div class=\"progress-bar bg-c-blue\" [style.width]=\"'75%'\"></div>\r\n        </div>\r\n        <p class=\"m-b-10 m-t-30\">Social <span class=\"float-right\"><i class=\"fa fa-caret-down m-r-10\"></i>58</span></p>\r\n        <div class=\"progress green\">\r\n          <div class=\"progress-bar bg-c-green\" [style.width]=\"'50%'\"></div>\r\n        </div>\r\n        <p class=\"m-b-10 m-t-30\">Referral <span class=\"float-right\"><i class=\"fa fa-caret-up m-r-10\"></i>20%</span></p>\r\n        <div class=\"progress red\">\r\n          <div class=\"progress-bar bg-c-red\" [style.width]=\"'20%'\"></div>\r\n        </div>\r\n        <p class=\"m-b-10 m-t-30\">Bounce <span class=\"float-right\"><i class=\"fa fa-caret-down m-r-10\"></i>580</span></p>\r\n        <div class=\"progress yellow\">\r\n          <div class=\"progress-bar bg-c-yellow\" [style.width]=\"'40%'\"></div>\r\n        </div>\r\n        <p class=\"m-b-10 m-t-30\">Internet <span class=\"float-right\"><i class=\"fa fa-caret-up m-r-10\"></i>70%</span></p>\r\n        <div class=\"progress purple\">\r\n          <div class=\"progress-bar bg-c-purple\" [style.width]=\"'90%'\"></div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <app-card [title]=\"'Projects'\" [cardClass]=\"'table-card'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover\">\r\n            <thead>\r\n            <tr>\r\n              <th>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-default\"></i></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                Assigned</th>\r\n              <th>Name</th>\r\n              <th>Due Date</th>\r\n              <th class=\"text-right\">Priority</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-default\"></i></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-4.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6>John Deo</h6>\r\n                    <p class=\"text-muted m-b-0\">Graphics Designer</p>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>Able Pro</td>\r\n              <td>Jun, 26</td>\r\n              <td class=\"text-right\"><label class=\"label label-danger\">Low</label></td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-default\"></i></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-5.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6>Jenifer Vintage</h6>\r\n                    <p class=\"text-muted m-b-0\">Web Designer</p>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>Able Pro</td>\r\n              <td>March, 31</td>\r\n              <td class=\"text-right\"><label class=\"label label-primary\">high</label></td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-default\"></i></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-3.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6>William Jem</h6>\r\n                    <p class=\"text-muted m-b-0\">Developer</p>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>Flatable</td>\r\n              <td>Aug, 02</td>\r\n              <td class=\"text-right\"><label class=\"label label-success\">medium</label></td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-default\"></i></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6>David Jones</h6>\r\n                    <p class=\"text-muted m-b-0\">Developer</p>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>Able Pro</td>\r\n              <td>Sep, 22</td>\r\n              <td class=\"text-right\"><label class=\"label label-primary\">high</label></td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"text-right m-r-20\">\r\n            <a href=\"javascript:\" class=\" b-b-primary text-primary\">View all Projects</a>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <app-card [title]=\"'Chat'\" [cardClass]=\"'chat-card'\">\r\n        <div class=\"row m-b-20 received-chat\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"msg\">\r\n              <p class=\"m-b-0\">Nice to meet you!</p>\r\n            </div>\r\n            <p class=\"text-muted m-b-0\"><i class=\"fa fa-clock-o m-r-10\"></i>10:20am</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-20 send-chat\">\r\n          <div class=\"col\">\r\n            <div class=\"msg\">\r\n              <p class=\"m-b-0\">Nice to meet you!</p>\r\n            </div>\r\n            <p class=\"text-muted m-b-0\"><i class=\"fa fa-clock-o m-r-10\"></i>10:20am</p>\r\n          </div>\r\n          <div class=\"col-auto p-l-0\">\r\n            <img src=\"assets/images/avatar-1.jpg\" alt=\"user image\" class=\"img-radius img-40\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-20 received-chat\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"msg\">\r\n              <p class=\"m-b-0\">Nice to meet you!</p>\r\n              <img src=\"assets/images/mega-menu/01.jpg\" alt=\"\">\r\n              <img src=\"assets/images/mega-menu/03.jpg\" alt=\"\">\r\n            </div>\r\n            <p class=\"text-muted m-b-0\"><i class=\"fa fa-clock-o m-r-10\"></i>10:20am</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"right-icon-control\">\r\n          <form class=\"form-material\" action=\"javascript:\">\r\n            <div class=\"form-group form-primary\">\r\n              <input type=\"text\" name=\"footer-email\" class=\"form-control\" required=\"\">\r\n              <span class=\"form-bar\"></span>\r\n              <label class=\"float-label\">Add Task</label>\r\n            </div>\r\n          </form>\r\n          <div class=\"form-icon \">\r\n            <button class=\"btn btn-primary btn-outline-primary btn-icon ripple light b-none\">\r\n              <i class=\"fa fa-send\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <app-card [title]=\"'Latest Updates'\" [cardClass]=\"'latest-update-card'\">\r\n        <div class=\"latest-update-box\">\r\n          <div class=\"row p-t-20 p-b-30\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">2 hrs ago</p>\r\n              <i class=\"fa fa-twitter bg-twitter update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>+ 1652 Followers</h6>\r\n              <p class=\"text-muted m-b-0\">You’re getting more and more followers, keep it up!</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-b-30\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">4 hrs ago</p>\r\n              <i class=\"fa fa-briefcase bg-c-red update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>+ 5 New Products were added!</h6>\r\n              <p class=\"text-muted m-b-0\">Congratulations!</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-b-30\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">1 day ago</p>\r\n              <i class=\"fa fa-check bg-c-green update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>Database backup completed!</h6>\r\n              <p class=\"text-muted m-b-0\">Download the <span class=\"text-c-blue\">latest backup</span>.</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-b-0\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">2 day ago</p>\r\n              <i class=\"fa fa-facebook bg-facebook update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>+2 Friend Requests</h6>\r\n              <p class=\"text-muted m-b-10\">This is great, keep it up!</p>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-hover\">\r\n                  <tr>\r\n                    <td class=\"b-none\">\r\n                      <a href=\"javascript:\" class=\"align-middle\">\r\n                        <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                        <div class=\"d-inline-block\">\r\n                          <h6>Jeny William</h6>\r\n                          <p class=\"text-muted m-b-0\">Graphic Designer</p>\r\n                        </div>\r\n                      </a>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"b-none\">\r\n                      <a href=\"javascript:\" class=\"align-middle\">\r\n                        <img src=\"assets/images/avatar-1.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                        <div class=\"d-inline-block\">\r\n                          <h6>John Deo</h6>\r\n                          <p class=\"text-muted m-b-0\">Web Designer</p>\r\n                        </div>\r\n                      </a>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View all Projects</a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <app-card [title]=\"'Recent Tickets'\" [cardClass]=\"'table-card'\" [blockClass]=\"'p-b-5'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover table-borderless\">\r\n            <thead>\r\n            <tr>\r\n              <th>Status</th>\r\n              <th>Subject</th>\r\n              <th>Department</th>\r\n              <th>Date</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td><label class=\"label label-success\">open</label></td>\r\n              <td>Website down for one week</td>\r\n              <td>Support</td>\r\n              <td>Today 2:00</td>\r\n            </tr>\r\n            <tr>\r\n              <td><label class=\"label label-primary\">progress</label></td>\r\n              <td>Loosing control on server</td>\r\n              <td>Support</td>\r\n              <td>Yesterday</td>\r\n            </tr>\r\n            <tr>\r\n              <td><label class=\"label label-danger\">closed</label></td>\r\n              <td>Authorizations keys</td>\r\n              <td>Support</td>\r\n              <td>27, Aug</td>\r\n            </tr>\r\n            <tr>\r\n              <td><label class=\"label label-success\">open</label></td>\r\n              <td>Restoring default settings</td>\r\n              <td>Support</td>\r\n              <td>Today 9:00</td>\r\n            </tr>\r\n            <tr>\r\n              <td><label class=\"label label-primary\">progress</label></td>\r\n              <td>Loosing control on server</td>\r\n              <td>Support</td>\r\n              <td>Yesterday</td>\r\n            </tr>\r\n            <tr>\r\n              <td><label class=\"label label-success\">open</label></td>\r\n              <td>Restoring default settings</td>\r\n              <td>Support</td>\r\n              <td>Today 9:00</td>\r\n            </tr>\r\n            <tr>\r\n              <td><label class=\"label label-success\">open</label></td>\r\n              <td>Restoring default settings</td>\r\n              <td>Support</td>\r\n              <td>Today 9:00</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <app-card [title]=\"'Application Sales'\" [cardClass]=\"'table-card'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover  table-borderless\">\r\n            <thead>\r\n            <tr>\r\n              <th>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" id=\"selectall1\"/>\r\n                      <span class=\"cr\">\r\n                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                Application</th>\r\n              <th>Sales</th>\r\n              <th>Change</th>\r\n              <th>Avg Price</th>\r\n              <th>Total</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" class=\"case1\" name=\"case1\" value=\"1\"/>\r\n                      <span class=\"cr\">\r\n                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <h6>Able Pro</h6>\r\n                  <p class=\"text-muted m-b-0\">Powerful Admin Theme</p>\r\n                </div>\r\n              </td>\r\n              <td>16,300</td>\r\n              <td>\r\n                <div id=\"app-sale1\" style=\"height:50px\"></div>\r\n              </td>\r\n              <td>$53</td>\r\n              <td class=\"text-c-blue\">$15,652</td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" class=\"case1\" name=\"case1\" value=\"2\"/>\r\n                      <span class=\"cr\">\r\n                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <h6>Photoshop</h6>\r\n                  <p class=\"text-muted m-b-0\">Design Software</p>\r\n                </div>\r\n              </td>\r\n              <td>26,421</td>\r\n              <td>\r\n                <div id=\"app-sale2\" style=\"height:50px\"></div>\r\n              </td>\r\n              <td>$35</td>\r\n              <td class=\"text-c-blue\">$18,785</td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" class=\"case1\" name=\"case1\" value=\"3\"/>\r\n                      <span class=\"cr\">\r\n                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <h6>Guruable</h6>\r\n                  <p class=\"text-muted m-b-0\">Best Admin Template</p>\r\n                </div>\r\n              </td>\r\n              <td>8,265</td>\r\n              <td>\r\n                <div id=\"app-sale3\" style=\"height:50px\"></div>\r\n              </td>\r\n              <td>$98</td>\r\n              <td class=\"text-c-blue\">$9,652</td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" class=\"case1\" name=\"case1\" value=\"4\"/>\r\n                      <span class=\"cr\">\r\n                        <i class=\"cr-icon feather icon-check f-w-600 txt-default\"></i>\r\n                      </span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <h6>Flatable</h6>\r\n                  <p class=\"text-muted m-b-0\">Admin App</p>\r\n                </div>\r\n              </td>\r\n              <td>10,652</td>\r\n              <td>\r\n                <div id=\"app-sale4\" style=\"height:50px\"></div>\r\n              </td>\r\n              <td>$20</td>\r\n              <td class=\"text-c-blue\">$7,856</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"text-center\">\r\n            <a href=\"javascript:\" class=\" b-b-primary text-primary\">View all Projects</a>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <app-card [title]=\"'Friends'\">\r\n        <div class=\"align-middle m-b-30\">\r\n          <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n          <div class=\"d-inline-block\">\r\n            <h6>David Jones</h6>\r\n            <p class=\"text-muted m-b-0\">Lorem Ipsum is dummy.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"align-middle m-b-30\">\r\n          <img src=\"assets/images/avatar-1.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n          <div class=\"d-inline-block\">\r\n            <h6>David Jones</h6>\r\n            <p class=\"text-muted m-b-0\">Lorem Ipsum is dummy.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"align-middle m-b-30\">\r\n          <img src=\"assets/images/avatar-3.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n          <div class=\"d-inline-block\">\r\n            <h6>David Jones</h6>\r\n            <p class=\"text-muted m-b-0\">Lorem Ipsum is dummy.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"align-middle m-b-30\">\r\n          <img src=\"assets/images/avatar-4.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n          <div class=\"d-inline-block\">\r\n            <h6>David Jones</h6>\r\n            <p class=\"text-muted m-b-0\">Lorem Ipsum is dummy.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"align-middle m-b-30\">\r\n          <img src=\"assets/images/avatar-5.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n          <div class=\"d-inline-block\">\r\n            <h6>David Jones</h6>\r\n            <p class=\"text-muted m-b-0\">Lorem Ipsum is dummy.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"align-middle m-b-10\">\r\n          <img src=\"assets/images/avatar-3.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n          <div class=\"d-inline-block\">\r\n            <h6>David Jones</h6>\r\n            <p class=\"text-muted m-b-0\">Lorem Ipsum is dummy.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View Friend List</a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <app-card [title]=\"'Active Tickets'\" [cardClass]=\"'table-card'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover table-borderless\">\r\n            <thead>\r\n            <tr>\r\n              <th>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-default\"></i></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                Due</th>\r\n              <th>User</th>\r\n              <th>Description</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-default\"></i></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle text-center\">\r\n                  <h6>12</h6>\r\n                  <p class=\"text-muted m-b-0\">hours</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-4.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6 class=\"text-muted m-b-0 m-t-15\">John Deo</h6>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <h6>[#1183] Workaround for OS X selects printing bug</h6>\r\n                  <p class=\"text-muted m-b-0\">Chrome fixed the bug several versions ago, thus rendering this...</p>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-default\"></i></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle text-center\">\r\n                  <h6>16</h6>\r\n                  <p class=\"text-muted m-b-0\">hours</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-1.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6 class=\"text-muted m-b-0 m-t-15\">Jems Win</h6>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <h6>[#1249] Vertically center carousel controls</h6>\r\n                  <p class=\"text-muted m-b-0\">Try any carousel control and reduce the screen width below...</p>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <div class=\"chk-option\">\r\n                  <div class=\"checkbox-fade fade-in-primary\">\r\n                    <label class=\"check-task\">\r\n                      <input type=\"checkbox\" value=\"\">\r\n                      <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-default\"></i></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-inline-block align-middle text-center\">\r\n                  <h6>40</h6>\r\n                  <p class=\"text-muted m-b-0\">hours</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius img-40 align-top m-r-15\">\r\n                  <div class=\"d-inline-block\">\r\n                    <h6 class=\"text-muted m-b-0 m-t-15\">Jeny Wiliiam</h6>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <div class=\"d-inline-block align-middle\">\r\n                  <h6>[#1254] Inaccurate small pagination height</h6>\r\n                  <p class=\"text-muted m-b-0\">The height of pagination elements is not consistent with...</p>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"text-right m-r-20\">\r\n            <a href=\"javascript:\" class=\" b-b-primary text-primary\">View all Projects</a>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <app-card [title]=\"'Latest Posts'\" [cardClass]=\"'latest-posts-card'\">\r\n        <div class=\"row m-b-25\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <img src=\"assets/images/mega-menu/01.jpg\" alt=\"user image\" class=\"latest-posts-img\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6>Up unpacked friendly</h6>\r\n            <p class=\"text-muted m-b-10\"><i class=\"fa fa-play-circle-o\"></i> Video | 14 minutes ago</p>\r\n            <p class=\"text-muted m-b-0\">Lorem Ipsum is simply dummy text of the.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-25\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <img src=\"assets/images/mega-menu/03.jpg\" alt=\"user image\" class=\"latest-posts-img\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6>Up unpacked friendly</h6>\r\n            <p class=\"text-muted m-b-10\"><i class=\"fa fa-play-circle-o\"></i> Video | 14 minutes ago</p>\r\n            <p class=\"text-muted m-b-0\">Lorem Ipsum is simply dummy text of the.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-20\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <img src=\"assets/images/mega-menu/03.jpg\" alt=\"user image\" class=\"latest-posts-img\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6>Up unpacked friendly</h6>\r\n            <p class=\"text-muted m-b-10\"><i class=\"fa fa-play-circle-o\"></i> Video | 14 minutes ago</p>\r\n            <p class=\"text-muted m-b-0\">Lorem Ipsum is simply dummy text of the.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View Friend List</a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <app-card [title]=\"'Tasks'\" [cardClass]=\"'task-card'\">\r\n        <ul class=\"list-unstyled task-list\">\r\n          <li>\r\n            <i class=\"fa fa-check task-icon bg-c-green\"></i>\r\n            <p class=\"m-b-5\">8:50</p>\r\n            <h6 class=\"text-muted\">Call to customer <span class=\"text-c-blue\">Jacob</span> and discuss the</h6>\r\n          </li>\r\n          <li>\r\n            <i class=\"task-icon bg-c-blue\"></i>\r\n            <p class=\"m-b-5\">Sat, 5 Mar</p>\r\n            <h6 class=\"text-muted\">Design mobile Application</h6>\r\n          </li>\r\n          <li>\r\n            <i class=\"task-icon bg-c-red\"></i>\r\n            <p class=\"m-b-5\">Sun, 17 Feb</p>\r\n            <h6 class=\"text-muted\"><span class=\"text-c-blue\">Jeny</span> assign you a task <span class=\"text-c-blue\">Mockup Design.</span></h6>\r\n          </li>\r\n          <li class=\"p-b-10\">\r\n            <i class=\"task-icon bg-c-blue\"></i>\r\n            <p class=\"m-b-5\">Sat, 29 Mar</p>\r\n            <h6 class=\"text-muted\">Design mobile Application</h6>\r\n          </li>\r\n        </ul>\r\n        <div class=\"text-center\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View Friend List</a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <app-card [title]=\"'Project Status'\" [cardClass]=\"'table-card'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover table-borderless\">\r\n            <thead>\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>Project</th>\r\n              <th>Status</th>\r\n              <th>Progress</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td>562</td>\r\n              <td>Able Pro Admin Theme</td>\r\n              <td><label class=\"label label-primary\">Developing</label></td>\r\n              <td>\r\n                <div [style.width]=\"'75px'\"><chart id=\"project-status1\" [type]=\"'pie'\" [data]=\"projectStatus1Data\" [options]=\"projectStatusOption\"></chart></div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>563</td>\r\n              <td>Flatable Template</td>\r\n              <td><label class=\"label label-success\">Design</label></td>\r\n              <td>\r\n                <div [style.width]=\"'75px'\"><chart id=\"project-status2\" [type]=\"'pie'\" [data]=\"projectStatus2Data\" [options]=\"projectStatusOption\"></chart></div>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>564</td>\r\n              <td>Able Pro Admin Panel</td>\r\n              <td><label class=\"label label-danger\">Testing</label></td>\r\n              <td>\r\n                <div [style.width]=\"'75px'\"><chart id=\"project-status3\" [type]=\"'pie'\" [data]=\"projectStatus3Data\" [options]=\"projectStatusOption\"></chart></div>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"text-right m-r-20\">\r\n            <a href=\"javascript:\" class=\" b-b-primary text-primary\">View all Projects</a>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-xl-8 col-md-12\">\r\n      <app-card [title]=\"'Latest Activity'\" [cardClass]=\"'latest-activity-card'\">\r\n        <div class=\"latest-update-box\">\r\n          <div class=\"row p-t-20 p-b-30\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">just now</p>\r\n              <i class=\"fa fa-fighter-jet bg-c-blue update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>John Deo</h6>\r\n              <p class=\"text-muted m-b-15\">The trip was an amazing and a life changing experience!!</p>\r\n              <img src=\"assets/images/mega-menu/01.jpg\" alt=\"\" class=\"img-fluid img-100 m-r-15 m-b-10\">\r\n              <img src=\"assets/images/mega-menu/03.jpg\" alt=\"\" class=\"img-fluid img-100 m-r-15 m-b-10\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-b-30\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">5 min ago</p>\r\n              <i class=\"fa fa-file-text bg-c-blue update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>Administrator</h6>\r\n              <p class=\"text-muted m-b-0\">Free courses for all our customers at A1 Conference Room - 9:00 am tomorrow!</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row p-b-30\">\r\n            <div class=\"col-auto text-right update-meta\">\r\n              <p class=\"text-muted m-b-0 d-inline\">3 hours ago</p>\r\n              <i class=\"fa fa-map-marker bg-c-blue update-icon\"></i>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6>Jeny William</h6>\r\n              <p class=\"text-muted m-b-15\">Happy Hour! Free drinks at <span class=\"text-c-blue\">Cafe-Bar all </span>day long!</p>\r\n              <agm-map [style.height]=\"'200px'\" [latitude]=\"21.6776887\" [longitude]=\"71.566261\" [zoom]=\"8\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\">\r\n                <agm-marker [latitude]=\"21.6776887\" [longitude]=\"71.566261\">\r\n                  <agm-info-window><span class=\"text-c-blue\">Cafe-Bar </span>- Nice Place</agm-info-window>\r\n                </agm-marker>\r\n              </agm-map>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-right\">\r\n          <a href=\"javascript:\" class=\" b-b-primary text-primary\">View all Activity</a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-4 col-md-12\">\r\n      <app-card [title]=\"'Feeds'\" [cardClass]=\"'feed-card'\">\r\n        <div class=\"row m-b-30\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <i class=\"fa fa-bell bg-c-blue feed-icon\"></i>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6 class=\"m-b-5\">You have 3 pending tasks. <span class=\"text-muted float-right f-13\">Just Now</span></h6>\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-30\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <i class=\"fa fa-shopping-cart bg-c-red feed-icon\"></i>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6 class=\"m-b-5\">New order received <span class=\"text-muted float-right f-13\">Just Now</span></h6>\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-30\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <i class=\"fa fa-file-text bg-c-green feed-icon\"></i>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6 class=\"m-b-5\">You have 3 pending tasks. <span class=\"text-muted float-right f-13\">Just Now</span></h6>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View all Feeds</a>\r\n        </div>\r\n      </app-card>\r\n      <app-card [title]=\"'Upcoming Deadlines'\" [cardClass]=\"'feed-card'\">\r\n        <div class=\"row m-b-25\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <img src=\"assets/images/mega-menu/01.jpg\" alt=\"\" class=\"img-fluid img-50\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6 class=\"m-b-5\">New able - Redesign</h6>\r\n            <p class=\"text-c-red m-b-0\">2 Days Remaining</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-25\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <img src=\"assets/images/mega-menu/02.jpg\" alt=\"\" class=\"img-fluid img-50\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6 class=\"m-b-5\">New Admin Dashboard</h6>\r\n            <p class=\"text-c-red m-b-0\">Proposal in 6 Days</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row m-b-20\">\r\n          <div class=\"col-auto p-r-0\">\r\n            <img src=\"assets/images/mega-menu/03.jpg\" alt=\"\" class=\"img-fluid img-50\">\r\n          </div>\r\n          <div class=\"col\">\r\n            <h6 class=\"m-b-5\">Logo Design</h6>\r\n            <p class=\"text-c-green m-b-0\">10 Days Remaining</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View all Feeds</a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <app-card [title]=\"'Global Sales by Top Locations'\" [cardClass]=\"'table-card'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover table-borderless\">\r\n            <thead>\r\n            <tr>\r\n              <th></th>\r\n              <th>Country</th>\r\n              <th>Sales</th>\r\n              <th class=\"text-right\">Average</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td><img src=\"assets/images/widget/GERMANY.jpg\" alt=\"\" class=\"img-fluid img-30\"></td>\r\n              <td>Germany</td>\r\n              <td>3,562</td>\r\n              <td class=\"text-right\">56.23%</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/widget/USA.jpg\" alt=\"\" class=\"img-fluid img-30\"></td>\r\n              <td>USA</td>\r\n              <td>2,650</td>\r\n              <td class=\"text-right\">25.23%</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/widget/AUSTRALIA.jpg\" alt=\"\" class=\"img-fluid img-30\"></td>\r\n              <td>Australia</td>\r\n              <td>956</td>\r\n              <td class=\"text-right\">12.45%</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/widget/UK.jpg\" alt=\"\" class=\"img-fluid img-30\"></td>\r\n              <td>United Kingdom</td>\r\n              <td>689</td>\r\n              <td class=\"text-right\">8.65%</td>\r\n            </tr>\r\n            <tr>\r\n              <td><img src=\"assets/images/widget/BRAZIL.jpg\" alt=\"\" class=\"img-fluid img-30\"></td>\r\n              <td>Brazil</td>\r\n              <td>560</td>\r\n              <td class=\"text-right\">3.56%</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"text-right  m-r-20\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View all Sales Locations </a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-xl-6 col-md-12\">\r\n      <app-card [title]=\"'Employee'\" [cardClass]=\"'table-card'\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-hover table-borderless\">\r\n            <thead>\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>Name</th>\r\n              <th>Salary</th>\r\n              <th>Country</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td>1</td>\r\n              <td>John Deo</td>\r\n              <td>$26,325</td>\r\n              <td>USA</td>\r\n            </tr>\r\n            <tr>\r\n              <td>2</td>\r\n              <td>Jeny William</td>\r\n              <td>$10,256</td>\r\n              <td>Canada</td>\r\n            </tr>\r\n            <tr>\r\n              <td>3</td>\r\n              <td>Anjelina Joli</td>\r\n              <td>$16,854</td>\r\n              <td>South Africa</td>\r\n            </tr>\r\n            <tr>\r\n              <td>4</td>\r\n              <td>Philip Morris</td>\r\n              <td>$31,564</td>\r\n              <td>Korea</td>\r\n            </tr>\r\n            <tr>\r\n              <td>5</td>\r\n              <td>Allesia Smith</td>\r\n              <td>$26,325</td>\r\n              <td>Neatherland</td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"text-right  m-r-20\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View all Employee</a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\">\r\n      <app-card [title]=\"'Customer Reviews'\" [cardClass]=\"'table-card review-card'\">\r\n        <div class=\"review-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-auto p-r-0\">\r\n              <img src=\"assets/images/avatar-2.jpg\" alt=\"user image\" class=\"img-radius profile-img cust-img m-b-15\">\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6 class=\"m-b-15\">John Deo <span class=\"float-right f-13 text-muted\"> a week ago</span></h6>\r\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n              <p class=\"m-t-15 m-b-15 text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a\r\n                galley of type and scrambled it to make a type specimen book.</p>\r\n              <a href=\"javascript:\" class=\"m-r-30\"><i class=\"fa fa-thumbs-up m-r-15\"></i>Helpful?</a>\r\n              <a href=\"javascript:\"><i class=\"fa fa-heart text-c-red m-r-15\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-auto p-r-0\">\r\n              <img src=\"assets/images/avatar-4.jpg\" alt=\"user image\" class=\"img-radius profile-img cust-img m-b-15\">\r\n            </div>\r\n            <div class=\"col\">\r\n              <h6 class=\"m-b-15\">Allina D’croze <span class=\"float-right f-13 text-muted\"> a week ago</span></h6>\r\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-c-yellow\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"fa fa-star f-18 text-default\"></i></a>\r\n              <p class=\"m-t-15 m-b-15 text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a\r\n                galley of type and scrambled it to make a type specimen book.</p>\r\n              <a href=\"javascript:\" class=\"m-r-30\"><i class=\"fa fa-thumbs-up m-r-15\"></i>Helpful?</a>\r\n              <a href=\"javascript:\"><i class=\"fa fa-heart text-c-red m-r-15\"></i></a>\r\n              <a href=\"javascript:\"><i class=\"fa fa-pencil-square-o\"></i></a>\r\n              <blockquote class=\"blockquote m-t-15 m-b-0\">\r\n                <h6>Allina D’croze</h6>\r\n                <p class=\"m-b-0 text-muted\">Lorem Ipsum is simply dummy text of the industry.</p>\r\n              </blockquote>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-right  m-r-20\">\r\n          <a href=\"javascript:\" class=\"b-b-primary text-primary\">View all Customer Reviews</a>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/theme/widget/data-widget/data-widget.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3dpZGdldC9kYXRhLXdpZGdldC9kYXRhLXdpZGdldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/theme/widget/data-widget/data-widget.component.ts ***!
  \*******************************************************************/
/*! exports provided: DataWidgetComponent, AppToDoListReadDirective, AppToDoListRemoveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataWidgetComponent", function() { return DataWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppToDoListReadDirective", function() { return AppToDoListReadDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppToDoListRemoveDirective", function() { return AppToDoListRemoveDirective; });
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






var DataWidgetComponent = /** @class */ (function () {
    function DataWidgetComponent() {
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
    DataWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.projectStatus1Data = {
                datasets: [{
                        data: [10, 20],
                        backgroundColor: ['#91baff', '#536dfe'],
                        label: 'Dataset 1'
                    }],
                labels: ['Red', 'Orange']
            };
            _this.projectStatus2Data = {
                datasets: [{
                        data: [10, 20],
                        backgroundColor: ['#11c15b', '#9dffc6'],
                        label: 'Dataset 1'
                    }],
                labels: ['Red', 'Orange']
            };
            _this.projectStatus3Data = {
                datasets: [{
                        data: [10, 20],
                        backgroundColor: ['#ff5252', '#ffa7a7'],
                        label: 'Dataset 1'
                    }],
                labels: ['Red', 'Orange']
            };
            _this.projectStatusOption = {
                title: {
                    display: !1,
                },
                tooltips: {
                    display: !1,
                },
                legend: {
                    display: !1,
                    labels: {
                        usePointStyle: !1
                    }
                },
                responsive: true,
            };
            $.plot($('#app-sale1'), [{
                    data: [
                        [0, 18],
                        [20, 10],
                        [35, 20],
                        [50, 10],
                        [65, 27],
                        [75, 15],
                        [90, 20],
                    ],
                    color: '#ff5252',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#app-sale2'), [{
                    data: [
                        [0, 10],
                        [20, 25],
                        [35, 27],
                        [50, 10],
                        [65, 20],
                        [75, 10],
                        [90, 18],
                    ],
                    color: '#448aff',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#app-sale3'), [{
                    data: [
                        [0, 18],
                        [20, 10],
                        [35, 20],
                        [50, 10],
                        [65, 27],
                        [75, 15],
                        [90, 20],
                    ],
                    color: '#ffba57',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
            $.plot($('#app-sale4'), [{
                    data: [
                        [0, 10],
                        [20, 25],
                        [35, 27],
                        [50, 10],
                        [65, 20],
                        [75, 10],
                        [90, 18],
                    ],
                    color: '#9ccc65',
                    lines: {
                        show: true,
                        fill: false,
                        lineWidth: 3
                    },
                    points: {
                        show: false
                    },
                    curvedLines: {
                        apply: true,
                    }
                }], _this.chartOption);
        }, 100);
    };
    DataWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-widget',
            template: __webpack_require__(/*! ./data-widget.component.html */ "./src/app/theme/widget/data-widget/data-widget.component.html"),
            styles: [__webpack_require__(/*! ./data-widget.component.scss */ "./src/app/theme/widget/data-widget/data-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataWidgetComponent);
    return DataWidgetComponent;
}());


var AppToDoListReadDirective = /** @class */ (function () {
    function AppToDoListReadDirective(el) {
        this.el = el;
    }
    AppToDoListReadDirective.prototype.onClick = function ($event) {
        (this.el.nativeElement.parentElement).classList.toggle('done-task');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppToDoListReadDirective.prototype, "onClick", null);
    AppToDoListReadDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appToDoListRead]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AppToDoListReadDirective);
    return AppToDoListReadDirective;
}());

var AppToDoListRemoveDirective = /** @class */ (function () {
    function AppToDoListRemoveDirective(el) {
        this.el = el;
    }
    AppToDoListRemoveDirective.prototype.onClick = function ($event) {
        (this.el.nativeElement.parentElement.parentElement).classList.add('d-none');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppToDoListRemoveDirective.prototype, "onClick", null);
    AppToDoListRemoveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appToDoListRemove]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AppToDoListRemoveDirective);
    return AppToDoListRemoveDirective;
}());



/***/ }),

/***/ "./src/app/theme/widget/data-widget/data-widget.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/widget/data-widget/data-widget.module.ts ***!
  \****************************************************************/
/*! exports provided: DataWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataWidgetModule", function() { return DataWidgetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _data_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-widget.component */ "./src/app/theme/widget/data-widget/data-widget.component.ts");
/* harmony import */ var _data_widget_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-widget-routing.module */ "./src/app/theme/widget/data-widget/data-widget-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");








var DataWidgetModule = /** @class */ (function () {
    function DataWidgetModule() {
    }
    DataWidgetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _data_widget_routing_module__WEBPACK_IMPORTED_MODULE_4__["DataWidgetRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_6__["ChartModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
            ],
            declarations: [
                _data_widget_component__WEBPACK_IMPORTED_MODULE_3__["AppToDoListReadDirective"],
                _data_widget_component__WEBPACK_IMPORTED_MODULE_3__["AppToDoListRemoveDirective"],
                _data_widget_component__WEBPACK_IMPORTED_MODULE_3__["DataWidgetComponent"]
            ]
        })
    ], DataWidgetModule);
    return DataWidgetModule;
}());



/***/ })

}]);
//# sourceMappingURL=data-widget-data-widget-module.js.map
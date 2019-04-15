(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-header-footer-reg-social-header-footer-reg-module"],{

/***/ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg-routing.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SocialHeaderFooterRegRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialHeaderFooterRegRoutingModule", function() { return SocialHeaderFooterRegRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _social_header_footer_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-header-footer-reg.component */ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.ts");




var routes = [
    {
        path: '',
        component: _social_header_footer_reg_component__WEBPACK_IMPORTED_MODULE_3__["SocialHeaderFooterRegComponent"],
        data: {
            title: 'Social Header & Footer Registration'
        }
    }
];
var SocialHeaderFooterRegRoutingModule = /** @class */ (function () {
    function SocialHeaderFooterRegRoutingModule() {
    }
    SocialHeaderFooterRegRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SocialHeaderFooterRegRoutingModule);
    return SocialHeaderFooterRegRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pcoded\" class=\"pcoded\"\r\n     [attr.nav-type]=\"navType\"\r\n     [attr.pcoded-device-type]=\"pcodedDeviceType\"\r\n     [attr.fream-type]=\"freamType\"\r\n     [attr.layout-type]=\"layoutType\"\r\n     (window:resize)=\"onResize($event)\"\r\n>\r\n  <div class=\"pcoded-overlay-box\"></div>\r\n  <div class=\"pcoded-container navbar-wrapper\">\r\n    <nav class=\"navbar header-navbar pcoded-header position-fixed\" style=\"top: 0\"  [attr.header-theme]=\"headerTheme\">\r\n      <div class=\"navbar-wrapper\">\r\n        <div class=\"navbar-logo\">\r\n          <a [routerLink]=\"['/dashboard/default/']\" class=\"ripple light\">\r\n            <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Able Pro 7\" />\r\n          </a>\r\n          <a href=\"javascript:\" class=\"mobile-options ripple light\" (click)=\"toggleHeaderNavRight()\">\r\n            <i class=\"feather icon-more-horizontal\"></i>\r\n          </a>\r\n        </div>\r\n        <div class=\"navbar-container container-fluid\">\r\n          <ul class=\"nav-left\">\r\n            <li class=\"ripple light\">\r\n              <div class=\"sidebar_toggle\"><a href=\"javascript:\"><i class=\"icon-menu\"></i></a></div>\r\n            </li>\r\n            <li class=\"header-search\">\r\n              <div id=\"main-search\" class=\"main-search morphsearch-search\">\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-prepend search-close\" (click)=\"searchOff()\"><i class=\"feather icon-x input-group-text\"></i></span>\r\n                  <input class=\"form-control\" [style.width]=\"searchWidthString\">\r\n                  <span class=\"input-group-append search-btn\" (click)=\"searchOn()\"><i class=\"feather icon-search input-group-text\"></i></span>\r\n                </div>\r\n              </div>\r\n            </li>\r\n            <li class=\"ripple light\" appToggleFullScreen>\r\n              <a href=\"javascript:\">\r\n                <i class=\"feather icon-maximize full-screen\"></i>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <ul [@mobileHeaderNavRight]=\"navRight\" [ngClass]=\"navRight\" class=\"nav-right\">\r\n            <li (clickOutside)=\"notificationOutsideClick('live')\" class=\"header-notification ripple light\" (click)=\"toggleLiveNotification()\">\r\n              <a href=\"javascript:\">\r\n                <i class=\"feather icon-bell\"></i>\r\n                <span class=\"badge bg-c-red\">5</span>\r\n              </a>\r\n              <ul [@notificationBottom]=\"liveNotification\" class=\"show-notification\" [ngClass]=\"liveNotificationClass\">\r\n                <li>\r\n                  <h6>Notifications</h6>\r\n                  <label class=\"label label-danger\">New</label>\r\n                </li>\r\n                <li class=\"ripple\">\r\n                  <div class=\"media\">\r\n                    <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n                      <h5 class=\"notification-user\">John Doe</h5>\r\n                      <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                      <span class=\"notification-time\">30 minutes ago</span>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"ripple\">\r\n                  <div class=\"media\">\r\n                    <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-4.jpg\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n                      <h5 class=\"notification-user\">Joseph William</h5>\r\n                      <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                      <span class=\"notification-time\">30 minutes ago</span>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n                <li class=\"ripple\">\r\n                  <div class=\"media\">\r\n                    <img class=\"d-flex align-self-center img-radius\" src=\"assets/images/avatar-3.jpg\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n                      <h5 class=\"notification-user\">Sara Soudein</h5>\r\n                      <p class=\"notification-msg\">Lorem ipsum dolor sit amet, consectetuer elit.</p>\r\n                      <span class=\"notification-time\">30 minutes ago</span>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li (clickOutside)=\"notificationOutsideClick('profile')\" class=\"user-profile header-notification ripple light\" (click)=\"toggleProfileNotification()\">\r\n              <a href=\"javascript:\">\r\n                <img src=\"assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n                <span>John Doe</span>\r\n                <i class=\"feather icon-chevron-down\"></i>\r\n              </a>\r\n              <ul [@notificationBottom]=\"profileNotification\" class=\"show-notification profile-notification\" [ngClass]=\"profileNotificationClass\">\r\n                <li class=\"ripple\">\r\n                  <a href=\"javascript:\">\r\n                    <i class=\"feather icon-settings\"></i> Settings\r\n                  </a>\r\n                </li>\r\n                <li class=\"ripple\">\r\n                  <a [routerLink]=\"['/user/profile/']\">\r\n                    <i class=\"feather icon-user\"></i> Profile\r\n                  </a>\r\n                </li>\r\n                <li class=\"ripple\">\r\n                  <a href=\"javascript:\">\r\n                    <i class=\"feather icon-mail\"></i> My Messages\r\n                  </a>\r\n                </li>\r\n                <li class=\"ripple\">\r\n                  <a [routerLink]=\"['/auth/lock-screen/']\" target=\"_blank\">\r\n                    <i class=\"feather icon-lock\"></i> Lock Screen\r\n                  </a>\r\n                </li>\r\n                <li class=\"ripple\">\r\n                  <a [routerLink]=\"['/auth/login/simple/']\" target=\"_blank\">\r\n                    <i class=\"feather icon-log-out\"></i> Logout\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n  <section class=\"login-block\">\r\n    <!-- Container-fluid starts -->\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <!-- Authentication card start -->\r\n          <form class=\"md-float-material form-material m-t-40 m-b-40\">\r\n            <div class=\"auth-box card\">\r\n              <div class=\"card-block\">\r\n                <div class=\"row m-b-20\">\r\n                  <div class=\"col-md-12\">\r\n                    <h3 class=\"text-center txt-primary\">Sign up</h3>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row m-b-20\">\r\n                  <div class=\"col-md-6\">\r\n                    <a href=\"javascript:\" class=\"btn btn-facebook m-b-20 btn-block ripple light\"><i class=\"fa fa-facebook\"></i>facebook</a>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <a href=\"javascript:\" class=\"btn btn-twitter m-b-0 btn-block ripple light\"><i class=\"fa fa-twitter\"></i>twitter</a>\r\n                  </div>\r\n                </div>\r\n                <p class=\"text-muted text-center p-b-5\">Sign up with your regular account</p>\r\n                <div class=\"form-group form-primary\">\r\n                  <input type=\"text\" name=\"user-name\" class=\"form-control\" required=\"\">\r\n                  <span class=\"form-bar\"></span>\r\n                  <label class=\"float-label\">Choose Username</label>\r\n                </div>\r\n                <div class=\"form-group form-primary\">\r\n                  <input type=\"text\" name=\"email\" class=\"form-control\" required=\"\">\r\n                  <span class=\"form-bar\"></span>\r\n                  <label class=\"float-label\">Your Email Address</label>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group form-primary\">\r\n                      <input type=\"password\" name=\"password\" class=\"form-control\" required=\"\">\r\n                      <span class=\"form-bar\"></span>\r\n                      <label class=\"float-label\">Password</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group form-primary\">\r\n                      <input type=\"password\" name=\"confirm-password\" class=\"form-control\" required=\"\">\r\n                      <span class=\"form-bar\"></span>\r\n                      <label class=\"float-label\">Confirm Password</label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row m-t-25 text-left\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"checkbox-fade fade-in-primary\">\r\n                      <label>\r\n                        <input type=\"checkbox\" value=\"\">\r\n                        <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                        <span class=\"text-inverse\">I read and accept <a href=\"javascript:\">Terms &amp; Conditions.</a></span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"checkbox-fade fade-in-primary\">\r\n                      <label>\r\n                        <input type=\"checkbox\" value=\"\">\r\n                        <span class=\"cr\"><i class=\"cr-icon fa fa-check txt-primary\"></i></span>\r\n                        <span class=\"text-inverse\">Send me the <a href=\"javascript:\">Newsletter</a> weekly.</span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row m-t-30\">\r\n                  <div class=\"col-md-12\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-md btn-block text-center m-b-20 ripple light\">Sign up now</button>\r\n                  </div>\r\n                </div>\r\n                <hr/>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-10\">\r\n                    <p class=\"text-inverse text-left m-b-0\">Thank you.</p>\r\n                    <p class=\"text-inverse text-left\"><a [routerLink]=\"['/dashboard/default']\"><b>Back to website</b></a></p>\r\n                  </div>\r\n                  <div class=\"col-md-2\">\r\n                    <img src=\"assets/images/auth/Logo-small-bottom.png\" alt=\"small-logo.png\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <!-- end of form -->\r\n        </div>\r\n        <!-- Authentication card end -->\r\n      </div>\r\n      <!-- end of row -->\r\n    </div>\r\n    <!-- end of container-fluid -->\r\n  </section>\r\n</div>\r\n<div class=\"footer\">\r\n  <p class=\"text-center m-b-0\">Copyright &copy; 2017 ABLE PRO 7 ADMIN , All rights reserved.</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2F1dGgvcmVnaXN0cmF0aW9uL3NvY2lhbC1oZWFkZXItZm9vdGVyLXJlZy9zb2NpYWwtaGVhZGVyLWZvb3Rlci1yZWcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: SocialHeaderFooterRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialHeaderFooterRegComponent", function() { return SocialHeaderFooterRegComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var SocialHeaderFooterRegComponent = /** @class */ (function () {
    function SocialHeaderFooterRegComponent() {
        this.navType = 'st2';
        this.themeLayout = 'vertical';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.pcodedDeviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.vnavigationView = 'view1';
        this.freamType = 'theme1';
        this.sidebarImg = 'false';
        this.sidebarImgType = 'img1';
        this.layoutType = 'light';
        this.headerTheme = 'theme1';
        this.liveNotification = 'an-off';
        this.profileNotification = 'an-off';
        this.searchWidth = 0;
        this.navRight = 'nav-on';
        this.windowWidth = window.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
    }
    SocialHeaderFooterRegComponent.prototype.ngOnInit = function () {
        document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
    };
    SocialHeaderFooterRegComponent.prototype.onResize = function (event) {
        this.windowWidth = event.target.innerWidth;
        this.setHeaderAttributes(this.windowWidth);
    };
    SocialHeaderFooterRegComponent.prototype.setHeaderAttributes = function (windowWidth) {
        if (windowWidth < 992) {
            this.navRight = 'nav-off';
        }
        else {
            this.navRight = 'nav-on';
        }
    };
    SocialHeaderFooterRegComponent.prototype.toggleHeaderNavRight = function () {
        this.navRight = this.navRight === 'nav-on' ? 'nav-off' : 'nav-on';
    };
    SocialHeaderFooterRegComponent.prototype.toggleLiveNotification = function () {
        if (this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
        this.liveNotification = this.liveNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.liveNotificationClass = this.liveNotification === 'an-animate' ? 'show' : '';
    };
    SocialHeaderFooterRegComponent.prototype.toggleProfileNotification = function () {
        if (this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        this.profileNotification = this.profileNotification === 'an-off' ? 'an-animate' : 'an-off';
        this.profileNotificationClass = this.profileNotification === 'an-animate' ? 'show' : '';
    };
    SocialHeaderFooterRegComponent.prototype.notificationOutsideClick = function (ele) {
        if (ele === 'live' && this.liveNotification === 'an-animate') {
            this.toggleLiveNotification();
        }
        else if (ele === 'profile' && this.profileNotification === 'an-animate') {
            this.toggleProfileNotification();
        }
    };
    SocialHeaderFooterRegComponent.prototype.searchOn = function () {
        var _this = this;
        document.querySelector('#main-search').classList.add('open');
        var searchInterval = setInterval(function () {
            if (_this.searchWidth >= 200) {
                clearInterval(searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth + 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    SocialHeaderFooterRegComponent.prototype.searchOff = function () {
        var _this = this;
        var searchInterval = setInterval(function () {
            if (_this.searchWidth <= 0) {
                document.querySelector('#main-search').classList.remove('open');
                clearInterval(searchInterval);
                return false;
            }
            _this.searchWidth = _this.searchWidth - 15;
            _this.searchWidthString = _this.searchWidth + 'px';
        }, 35);
    };
    SocialHeaderFooterRegComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-social-header-footer-reg',
            template: __webpack_require__(/*! ./social-header-footer-reg.component.html */ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('notificationBottom', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('an-off, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('an-animate', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        overflow: 'hidden',
                        height: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AUTO_STYLE"],
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('an-off <=> an-animate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('mobileHeaderNavRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('nav-off, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('nav-on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AUTO_STYLE"],
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('nav-off <=> nav-on', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./social-header-footer-reg.component.scss */ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocialHeaderFooterRegComponent);
    return SocialHeaderFooterRegComponent;
}());



/***/ }),

/***/ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SocialHeaderFooterRegModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialHeaderFooterRegModule", function() { return SocialHeaderFooterRegModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _social_header_footer_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-header-footer-reg.component */ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg.component.ts");
/* harmony import */ var _social_header_footer_reg_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social-header-footer-reg-routing.module */ "./src/app/theme/auth/registration/social-header-footer-reg/social-header-footer-reg-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var SocialHeaderFooterRegModule = /** @class */ (function () {
    function SocialHeaderFooterRegModule() {
    }
    SocialHeaderFooterRegModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _social_header_footer_reg_routing_module__WEBPACK_IMPORTED_MODULE_4__["SocialHeaderFooterRegRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [_social_header_footer_reg_component__WEBPACK_IMPORTED_MODULE_3__["SocialHeaderFooterRegComponent"]]
        })
    ], SocialHeaderFooterRegModule);
    return SocialHeaderFooterRegModule;
}());



/***/ })

}]);
//# sourceMappingURL=social-header-footer-reg-social-header-footer-reg-module.js.map
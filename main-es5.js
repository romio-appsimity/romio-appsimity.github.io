(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/romio/appsimity/smart/web/SMARTWeb/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "5Hns":
    /*!**********************************************************!*\
      !*** ./src/app/property-page/property-page.component.ts ***!
      \**********************************************************/

    /*! exports provided: PropertyPageComponent */

    /***/
    function Hns(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyPageComponent", function () {
        return PropertyPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var PropertyPageComponent = /*#__PURE__*/function () {
        function PropertyPageComponent(authService) {
          _classCallCheck(this, PropertyPageComponent);

          this.authService = authService;
        }

        _createClass(PropertyPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userName = this.authService.getUserName();
          }
        }]);

        return PropertyPageComponent;
      }();

      PropertyPageComponent.ɵfac = function PropertyPageComponent_Factory(t) {
        return new (t || PropertyPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      PropertyPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyPageComponent,
        selectors: [["app-property-page"]],
        decls: 231,
        vars: 3,
        consts: [[1, "bg-img"], [1, "bg-img1"], [1, "bg-img2-map"], [1, "container-fluid"], [1, "row"], [1, "col-md-12", "mx-auto", "d-inline-flex", "mt-4"], [1, "col-md-1"], ["id", "show", 1, "burger-menu"], ["src", "/assets/images/blue-menu.png"], [1, "col-md-10"], [1, "top-outer-map", "d-inline-flex"], [1, ""], [1, "form-group", "has-search-map", "has-search"], ["aria-label", ".form-select-lg example", 1, "form-select", "form-select-map", "form-select-lg"], ["selected", ""], ["value", "1"], ["value", "2"], [1, "fa", "fa-search", "form-control-feedback"], ["type", "text", "placeholder", "Search", 1, "form-control", "form-control-map"], [1, "mike-style"], ["aria-hidden", "true", 1, "fa", "fa-microphone"], [1, "sort-filter"], ["href", "#"], [1, "sale-outer"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs", "nav-tab-map"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#home", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-toggle", "tab", "href", "#profile", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], [1, "login-sign-map", "text-white", "float-right"], [1, "dropdown"], ["type", "button", "data-toggle", "dropdown", 1, "btn-user", "btn", "dropdown-toggle"], [1, "user-img"], [2, "color", "black"], ["src", "/assets/images/user2.png"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], ["href", "#", 1, "dropdown-item", "active"], [1, "row", "outer-map-list1", "mx-auto"], [1, "col-md-9"], [1, "google-map-sty1"], ["src", "/assets/images/05 GOOGLE STREET.png"], ["src", "/assets/images/165 satellite.png"], ["src", "/assets/images/171 draw area.png"], [1, "col-md-3"], [1, "row", "map-right-scroll"], [1, "col-lg-12", "col-md-12", "px-3"], [1, "outer-list"], [1, "outer-list1"], [1, "inner-list-style1"], ["src", "/assets/images/09-SHARE.png"], [1, "clear"], [1, "sale-div"], [1, "amout-div"], [1, "outer-list2"], [1, "outer-list2-inner", "d-inline-flex"], [1, "left-outer-list2"], ["href", ""], ["src", "/assets/images/white heart.png"], [1, "center-outer-list2"], [1, "right-outer-list2"], ["href", "", 1, "cart-a"], ["src", "/assets/images/cart.png", 1, "cart-img"], [1, "outer-list3"], ["src", "/assets/images/h1.jpg"], ["src", "/assets/images/h2.jpg"], [1, "outer-list4", "d-inline-flex"], [1, "col-md-7", "outer-list4-inner-lt", "px-0"], [1, "col-md-5", "outer-list4-inner-rt", "d-inline-flex", "px-0"], [1, "heart-text-style"], ["src", "/assets/images/33-VIEWS.png", 1, "heart-img-sty"], ["src", "/assets/images/Blue heart.png", 1, "heart-img-sty"], [1, "left-menu", "left-map-menu"], ["id", "hide", 1, "logo1", "logo-map", "mx-auto"], ["src", "/assets/images/SMART GEAR GREY1.png"], ["src", "/assets/images/close.png", 1, "close-style"], [1, "text-white", "mt-4"], ["src", "/assets/images/166 news.png"], ["src", "/assets/images/167 weather.png"], ["src", "/assets/images/168 horoscope.png"], ["src", "/assets/images/169 calendar.png"], ["src", "/assets/images/01a BUY WHITE.png"], ["src", "/assets/images/02a SALE WHITE.png"], ["src", "/assets/images/03a TENANT WHITE.png"], ["src", "/assets/images/04a LANDLORD WHITE.png"], ["src", "/assets/images/SMARKETPLACE GREY.png"]],
        template: function PropertyPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Listings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Listing1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Listing 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sort");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\xA0\xA0\xA0\xA0\xA0\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sale");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Rent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Map");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Account Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "115 Renner Avenue, Newark, NJ 07112");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "For Sale");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "$259,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "1 Fam | 2Bed | 2 Bath | 2500 Sq.ft.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Cost: $265,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Net: $235,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "24k");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "1890");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "115 Renner Avenue, Newark, NJ 07112");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "For Sale");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "$259,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "1 Fam | 2Bed | 2 Bath | 2500 Sq.ft.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Cost: $265,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Net: $235,000");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "24k");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "1890");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "img", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "ul", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "News");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Weather");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "img", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Horscope");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "img", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Calendar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "img", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Buy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Sell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "img", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Rent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "img", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Landlord");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "img", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 1, ctx.userName));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]],
        styles: ["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');\n\nbody[_ngcontent-%COMP%]{font-family: 'Open Sans', sans-serif; font-weight: 300;background: transparent; height:100%;}\nhtml[_ngcontent-%COMP%] { \n    background: url(/assets/images/Website-base-image.jpg) no-repeat top fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n  }\nhtml.sitemap1[_ngcontent-%COMP%]{ background: url(/assets/images/map1.png) no-repeat center fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;}\n.bg-img[_ngcontent-%COMP%] {\n    position: relative;min-height: 100%;\n}\n.bg-img1[_ngcontent-%COMP%] { min-height: calc(100vh - 70px);\n}\n#color-overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%; \n    height: 100%;\n    background-color:rgba(47,84,165,50%);\n    \n }\n.footer[_ngcontent-%COMP%]{z-index: 22;}\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color:#fff !important; padding:0px 12px;\n     font-size: 18px;\n }\n.row.footer-style[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n    text-align: center; height: 70px;\n  }\n.text-white[_ngcontent-%COMP%]{color:#fff;}\n.font-style[_ngcontent-%COMP%]{font-size:20px;text-transform:uppercase;}\n\n.logo[_ngcontent-%COMP%] {\n    width: 60%;\n    text-align: right;\n}\n.login-sign[_ngcontent-%COMP%]{   \n    width: 40%;\n    text-align: right;}\n.logo1[_ngcontent-%COMP%]{text-align: center;\n    background: #d1d2d4;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n    padding: 0px 7px;\n    height: 105px;    margin-bottom: 45px;\n}\n.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 2;\n    display: block;\n    width: 20px;\n    height: 20px;\n    line-height:67px;\n    text-align: center;\n    pointer-events: none;\n    color: #4e63bc;\n    left: 30px;\n}\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding-left:38px;\n}\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n     border: 2px solid #2f54a5;\n    padding-left: 37px;\n    background: rgba(209,210,212,0.8);\n    height: 66px;\n    color: #2f54a5;\n    font-size: 20px;\n    text-transform: uppercase;\n}\nul.list-sect[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 128px;\n    height:  128px;\n    display: inline-block;\n    border: 2px solid #2f54a5;\n    border-radius: 10px;\n    background: rgba(209,210,212,0.82);\n    margin:1px;\n}\nul.list-sect[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 5px 0px !important;\n    font-size: 13px;\n    text-align: center;    font-weight:500;\n}\nul.list-sect[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 5px;\n}\nul.list-sect[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-top: 40px;text-align: center;\n}\n.left-menu[_ngcontent-%COMP%] {\n    background:rgba(47,84,165,75%);\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 162px;\n    bottom: 0;box-shadow: 0px 5px 2px #a2a2a2;\n    min-height: 100%;\n    height: 100%;\n}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding: 0;}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    \n    padding-left: 14px;\n    padding-bottom:22px;\n}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;    font-size: 18px;\n}\n.appstore-link[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 40px;\n    bottom: 88px; width: 227px;    text-align: center;\n}\n.appstore-link[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding:0px 11px;\n}\n.app-st[_ngcontent-%COMP%] {\n    display: inline-flex;\n}\n.appstore-link[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-bottom-right-radius: 0px; border-top-right-radius: 0px;}\n.appstore-link[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]{border-bottom-left-radius: 0px; border-top-left-radius:0px; line-height:8px;}\n.mobile-web[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width:35%;\n}\n.app-st[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 98%;\n}\n.nav-link.active[_ngcontent-%COMP%]{border-bottom: 0px;color:#767676;}\n.text-btn[_ngcontent-%COMP%] {\n    background: #1858ae;\n    border: none;\n}\n.text-btn[_ngcontent-%COMP%]:hover{background:#2f54a5;}\n\n\n.country-flg[_ngcontent-%COMP%] {\n    text-align: center;\n    background: #eeeeee;\n    border-radius: 5px;\n}\n.country-flg.mx-auto.my-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 32px;\n    padding:4px 0px;\n    color: #000;\n    font-size: 10px;\n}\n\n\n.form-outer[_ngcontent-%COMP%] {\n    height: 447px;\n    background: #fff;\n    border: 1px solid #fff;\n    padding: 20px;\n    width: 75%;\n    margin: auto;\n    text-align: center;\n    position: relative;\n}\nform.form-outer[_ngcontent-%COMP%]   .form-style1[_ngcontent-%COMP%] {\n    border: 2px solid #2699fb; padding-left: 44px; height:48px; border-radius: .25rem;width:330px;outline:none;\n}\ninput.form-style1[_ngcontent-%COMP%]:focus-visible {\n    border-color: #2699fb !important;\n}\ninput.form-style1[_ngcontent-%COMP%]:active {\n    border-color: #2699fb !important;\n}\n.heading-signup[_ngcontent-%COMP%]{color:#2699fb;}\n.sky-btn[_ngcontent-%COMP%]{    \n    background: #2699fb;\n    font-size: 16px;\n    border: 0px; height: 40px;\n}\n.sky-btn-pad[_ngcontent-%COMP%]{ margin-top:160px; margin-bottom: 20px;}\n.text-form[_ngcontent-%COMP%]{\nfont-size: 14px; color:#919191;}\n.form-control-search[_ngcontent-%COMP%] {\n        position: absolute;\n        z-index: 2;\n        display: block;\n        width: 20px;\n        height: 20px;\n        line-height:45px;\n        text-align: center;\n        pointer-events: none;\n        color: #4e63bc;\n        left:8px;\n    }\n\n\n.text-form1[_ngcontent-%COMP%]{\n    font-size: 12px;\n    padding:10px 20px; color:#919191;}\ninput.form-control.form-style4[_ngcontent-%COMP%] {\n    border: 0px;\n    border-bottom: 1px solid #bfbfbf;\n    border-radius: 0;\n    color: #d1d2d4;\n    padding-left: 4px;\n}\nspan.form-control-search1[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 4px;\n    bottom: 6px;\n    color: #adadad;\n    font-size: 19px;\n}\n.form-outer[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n\n.form-group.form-group-style[_ngcontent-%COMP%]{display: flex;}\n.form-group.form-group-style[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: 0px;\n    border-bottom: 3px solid #2699fb;\n    border-radius: 0px;\n    margin: 0px 12px;\n    text-align: center;\n    font-size: 25px;\n}\n\n\n.form-ht-style[_ngcontent-%COMP%]{height: auto !important;}\n\n\n.tab-cont-img[_ngcontent-%COMP%]{padding: 20px;}\n.tab-cont-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 200px;}\np.scan-text[_ngcontent-%COMP%]{color:#2f54a5; font-size: 24px;font-weight: 700;}\nnav.scan-code-style[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n    border: none;\n}\nnav.scan-code-style[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color: #767676; cursor: pointer;}\nnav.scan-code-style[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{   border: none; color:#2f54a5;}\nnav.scan-code-style[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%], nav.scan-code-style[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], nav.scan-code-style[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover{   \n    font-size: 20px;\n    font-weight: 800;    \n    border: none;\n}\nform.form-outer[_ngcontent-%COMP%]   .form-style-login[_ngcontent-%COMP%] {\n    border: 2px solid #bfbfbf;\n    height: 48px;\n}\n.style-login-padd[_ngcontent-%COMP%] {padding-left: 38px;}\nspan.eye-style[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 12px;\n    top: 10px;\n    font-size: 20px;\n    color: #adadad;\n}\n.text-form2[_ngcontent-%COMP%]{font-size:18px; text-align:left;}\n.text-form2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#b4b4b5;}\n\n.btn-user[_ngcontent-%COMP%]{   \n    font-size: 22px;\n    color:#fff;\n    padding: 0px;\n}\n.btn-user.btn.focus[_ngcontent-%COMP%], .btn-user.btn[_ngcontent-%COMP%]:focus{box-shadow: none;}\n.btn-user[_ngcontent-%COMP%]:hover{color:#fff;}\n.user-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 30px;}\n.login-sign[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%] {\n    background: transparent;\n    color: #fff;    border: none;\n}\n.login-sign[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {color: #fff; padding:5px;}\n.login-sign[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{color:#fff; background-color: transparent;}\n.login-sign[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], .login-sign[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active{  background: transparent;}\n\n.footer-sec1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70px;\n    width: 70px;\n}\n.footer-sec1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;    padding: 0px 38px;\n}\n.footer-sec1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0px;\n}\n.footer-sec1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #2699fb;\n    font-weight: 800;\n    text-transform: uppercase;\n    font-size: 20px;\n}\n.has-search[_ngcontent-%COMP%]   .form-control-map[_ngcontent-%COMP%]{background: #fff; height:45px; padding-left: 140px; border: 1px solid #2699fb;width: 490px;}\nselect.form-select-map[_ngcontent-%COMP%]{\n    background: #2699fb;\n    color:#fff;\n    height:45px;\n    padding-left: 5px;\n    position: absolute;\n    text-transform: uppercase;\n    border-color: transparent;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\nselect.form-select-map[_ngcontent-%COMP%]:focus{border-color: transparent !important;}\n.has-search-map[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%]{padding-left: 81px; line-height:49px; font-size:21px; color: #2799fa;}\n.sort-filter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #2799fa;\n        font-weight: 500;\n        font-size: 18px;\n        text-decoration: underline;}\n.sort-filter[_ngcontent-%COMP%] {\n    text-align:right; padding-top: 5px; padding-left: 48px;\n}\n.sort-filter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n    padding-right:0px;\n}\n.sitemap1[_ngcontent-%COMP%]   .left-menu[_ngcontent-%COMP%]{background: rgb(38 153 251);}\n.footer-sec2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70px; width:568px;\n}\n.footer-sec1[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 0 auto; z-index:2;\n}\n.login-sign-map[_ngcontent-%COMP%]   .btn-user[_ngcontent-%COMP%]{color:#2799fa;}\n.login-sign-map.dropdown-item[_ngcontent-%COMP%]{color:#2799fa;}\n.login-sign-map.dropdown-item[_ngcontent-%COMP%]:hover{color:#2799fa;}\n.sale-outer[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n    border-bottom:0px !important; background: #2699fb;\n    color: #fff;\n    border-radius: 4px;height: 45px;\n}\n.sale-outer[_ngcontent-%COMP%] {margin: 0px -16px 0px 30px;\n    \n}\n.top-outer-map[_ngcontent-%COMP%]{\n    width: 100%;\n    position: relative;\n}\n.login-sign-map[_ngcontent-%COMP%] {\n    text-align: right;\n    position: absolute;\n    \n}\n.login-sign-map[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{right: 0px !important; left:-40px !important; float: right;}\n.sale-outer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%]{color:#2799fa; border: 1px solid #2699fb; border-radius: 4px;height: 45px;}\n.sale-outer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]{color:#fff;height: 45px;}\nhtml.sitemap2[_ngcontent-%COMP%] {background: transparent;}\n.sitemap2[_ngcontent-%COMP%]   .left-menu[_ngcontent-%COMP%]{background: rgb(38 153 251);}\n\n\n.outer-list1[_ngcontent-%COMP%] {\n    background: url(/assets/images/h1.jpg); position: relative;\n    width: 100%; height: 200px;background-position: center;\n}\n.outer-list21[_ngcontent-%COMP%] { background: url(/assets/images/h3.jpg);background-position: center;height: 200px;\n}\n.outer-list33[_ngcontent-%COMP%] { background: url(/assets/images/h4.jpg);background-position: center;height: 200px;\n}\n.outer-list5[_ngcontent-%COMP%]{ background: url(/assets/images/h5.jpg);background-position: center;height: 200px;\n}\n.outer-list44[_ngcontent-%COMP%] { background: url(/assets/images/h6.jpg);background-position: center;height: 200px;\n}\n.outer-list14[_ngcontent-%COMP%] { background: url(/assets/images/h7.jpg);background-position: center;height: 200px;\n}\n.inner-list-style1[_ngcontent-%COMP%] {\n    background: #eee;\n}\n.inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n}\n.outer-map-list[_ngcontent-%COMP%] {\n    padding:32px 0px 32px 150px;\n}\n.inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #2799fa;\n    font-weight: 700;\n    font-size: 12px;\n    display: inline-block;\n    position: absolute;\n}\n.inner-list-style1[_ngcontent-%COMP%] {\n    background: #e3e3e3;\n    width: 100%; \n    position: relative;\n    height: 45px;\n}\n.sale-div[_ngcontent-%COMP%] {\n    height: 30px;\n    background: rgba(16,192,125,0.8);\n    width: 120px;\n    padding: 5px 8px;\n}\n.inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n    right: 4px;\n    top: 10px;\n}\n.inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    top: 14px;\n    left: 3px;\n}\n.sale-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    color: #fff;\n    font-weight: 500;font-size: 14px;\n}\n.amout-div[_ngcontent-%COMP%] {\n    background: rgba(23,151,222,0.8);\n    width: 120px;\n    color: #fff;\n    padding: 4px 7px;\n    font-weight: 500; font-size: 14px;\n}\n.outer-list2-inner[_ngcontent-%COMP%] {\n    \n    background: #1797de;\n    width: 100%;\n    bottom: 0px;\n    font-size: 10px;\n    color: #fff;\n    align-items: center;\n}\n.outer-list2-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    padding: 1px;\n}\n.cart-img[_ngcontent-%COMP%] {\n    width: 28px !important;}\n.outer-list2-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        margin-bottom: 0px; padding-left: 2px;\n    }\n.outer-list2[_ngcontent-%COMP%] {\n        width: 100%;\n        position: relative;\n    }\n.outer-list3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n.outer-list3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        width: 25%; margin-bottom: 0;\n    }\n.outer-list4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 12px;\n        font-weight: 500;\n        padding-right: 7px;\n        color:#2699fb;\n    }\n.outer-list4-inner-lt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        color: #1797de;\n        font-weight: 700;\n        font-size: 12px;\n        padding-left: 10px;\n        margin-bottom: 1px;\n    }\n.outer-list4-inner-lt[_ngcontent-%COMP%] {\n        padding-top: 5px;\n    }\n.heart-img-sty[_ngcontent-%COMP%] {width:16px;}\nspan.heart-text-style[_ngcontent-%COMP%] {\n    font-size: 14px;\n    text-align: center; width: 50%;\n}\n.chat-img-sty[_ngcontent-%COMP%]{width:20px;}\n.outer-list4[_ngcontent-%COMP%] {\n        width: 100%; background: #e3e3e3; padding:2px;}\n.outer-list3[_ngcontent-%COMP%] {\n    width: 100%;\n    display: -webkit-inline-box;\n    overflow-x: scroll;\n}\n.outer-list3[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;}\n.outer-list3[_ngcontent-%COMP%] {\n        -ms-overflow-style: none;  \n        scrollbar-width: none;  \n      }\n.outer-list[_ngcontent-%COMP%] {\n    margin-bottom: 28px;\n}\nspan.mike-style[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 12px;\n    bottom:4px;\n    font-size: 24px;\n    color: #2699fb;\n}\n.form-group.has-search-map[_ngcontent-%COMP%] {\n    position: relative; margin-bottom: 0px;\n}\n\n.logo-map[_ngcontent-%COMP%] {border: 0px; background: #2f54a5;    margin-bottom: 45px;\n    \n}\n.margin-top-sty[_ngcontent-%COMP%]{margin-top: 18%;}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 34px;}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        padding-left: 9px;\n    }\n.right-side-detail[_ngcontent-%COMP%] {\n        position: absolute;\n        width: 210px;\n        right: 0;\n        top: 100px;\n        height: 720px;\n}\n\n.summry-text-style[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 11px;\n        text-align: justify;\n        font-weight: 600;    margin-bottom: 5px;\n    }\n.heading-style[_ngcontent-%COMP%] {\n        text-transform: uppercase;\n        font-size: 18px;\n        font-weight: 700;\n        color: #fff;\n        margin-bottom: 5px;    margin-top: 6px;\n    }\n.outer-inner-agent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 13px; margin-bottom: auto;\n    }\n.outer-inner-agent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        padding-right: 8px;\n    }\n.property-type-style[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 14px;\n        margin-bottom: auto;\n    }\n.summry-cale-style[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 12px;\n        margin-bottom: 5px; }\n.school-accordian[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:0px;background: transparent; color:#fff;}\n.school-accordian[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding:0px 0px 6px 0px;\n    border-bottom: 1px solid rgba(255,255,255,.4);margin-bottom: 10px;\n    background-color: transparent;}\n.school-accordian[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff; font-size: 14px; font-weight: 500;}\n.school-accordian[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 4px;\n    font-size: smaller;}\n\np.left-outer-list2[_ngcontent-%COMP%] {\n    width: 10%;\n    text-align: left;\n    padding-left: 5px;\n}\np.center-outer-list2[_ngcontent-%COMP%] {\n    width: 80%;\n    text-align: center;\n}\np.right-outer-list2[_ngcontent-%COMP%]:last-child {\n    width: 10%;\n    margin-right: 4px;\n}\n.page-style[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{border:0px !important;}\n.bg-img1-map[_ngcontent-%COMP%]{padding: 5px 0px 5px 50px;height:105px;\n    background: #e3e3e3;}\n.bg-img2-map[_ngcontent-%COMP%] {\n        padding: 5px 0px 5px 50px;\n        background:transparent; \n    }\n\n.right-side-map-img[_ngcontent-%COMP%] {\n        width: 100%; height: 675px;\n    }\n.burger-menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\n{\n    width: 45px;\n    padding-top: 5px;\n}\nimg.close-style[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 16px;\n    top: 10px;\n}\nul.google-map-sty1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    list-style: none; padding: 0px 10px;\n}\nul.google-map-sty1[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom: 10px;\n    left: 10%;\n    margin-left: -10px;}\nul.google-map-sty1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;}\n.outer-map-list1[_ngcontent-%COMP%] {\n        padding: 32px 0px 32px 22px;\n    }\n.row.map-right-scroll[_ngcontent-%COMP%] {\n        overflow-y: scroll;\n        height: 600px; }\n.map-right-scroll[_ngcontent-%COMP%]   .outer-list[_ngcontent-%COMP%]{margin-bottom: 15px; box-shadow: 1px 1px 3px 0px #1797de;}\n.row.map-right-scroll[_ngcontent-%COMP%] {\n    scrollbar-face-color: #367CD2;\n    scrollbar-shadow-color: #FFFFFF;\n    scrollbar-highlight-color: #FFFFFF;\n    scrollbar-3dlight-color: #FFFFFF;\n    scrollbar-darkshadow-color: #FFFFFF;\n    scrollbar-track-color: #FFFFFF;\n    scrollbar-arrow-color: #FFFFFF;\n  }\n\n.row.map-right-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 14px;\n  }\n\n.row.map-right-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    \n    border-radius: 1px;background: #fff; border:1px solid #2699fb;\n  }\n\n.row.map-right-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    border-radius: 1px;\n    background: rgba(38,153,253, 0.8);\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  }\n\n.outer-list-right[_ngcontent-%COMP%]{\n    width: 30%;\n    display: block;\n    height:500px;\n}\n.outer-left-banner[_ngcontent-%COMP%] {\n    width: 70%;\n}\n.outer-list-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;height: 125px;\n}\n.outer-list-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n}\n.outer-left-banner[_ngcontent-%COMP%]   .inner-list-style1[_ngcontent-%COMP%]{background: #2699fb;}\n.outer-left-banner[_ngcontent-%COMP%]   .inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color: #fff;}\n.outer-left-banner[_ngcontent-%COMP%]   .outer-list1[_ngcontent-%COMP%]{height: 500px;}\n.outer-left-banner[_ngcontent-%COMP%]   .outer-list2-inner[_ngcontent-%COMP%] {\n    position: absolute;\n    background: #1797de;\n    width: 100%;\n    bottom: 0px;\n    font-size: 16px;\n    color: #fff;\n    height: 52px;\n    align-items: center;\n    font-weight: 600;\n}\n.outer-left-banner[_ngcontent-%COMP%]   .outer-list2-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40px;\n    padding: 3px;\n}\n.sale-outer[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{\n    width: 72px;}\n.prop-detail-right[_ngcontent-%COMP%]{background: #2699fb; color:#fff;}\n.school-accordian.card[_ngcontent-%COMP%]{background: transparent;}\n.summary-map[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%; height: 300px;\n}\n.outer-inner-agent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color: #fff;}\n.danger-color-msg[_ngcontent-%COMP%]{\n    background: #f8d7da;\n}\n.login-sign[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.scan-login-input[_ngcontent-%COMP%]{\n    width: 363px !important;\n    border: 2px solid #bfbfbf !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHVGQUF1RjtBQUZ2Riw4RUFBOEU7QUFJOUUsS0FBSyxvQ0FBb0MsRUFBRSxnQkFBZ0IsQ0FBQyx1QkFBdUIsRUFBRSxXQUFXLENBQUM7QUFFakc7SUFDSSwwRUFBMEU7SUFJMUUsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7QUFDQSxlQUFlLCtEQUErRDtJQUk1RSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVksQ0FBQztBQUdqQjtJQUNJLGtCQUFrQixDQUFDLGdCQUFnQjtBQUN2QztBQUNBLFdBQVcsOEJBQThCO0FBQ3pDO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7Q0FDckI7QUFDQSxRQUFRLFdBQVcsQ0FBQztBQUNwQjtJQUNHLHFCQUFxQixFQUFFLGdCQUFnQjtLQUN0QyxlQUFlO0NBQ25CO0FBQ0E7SUFDRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQixFQUFFLFlBQVk7RUFDbEM7QUFFRixZQUFZLFVBQVUsQ0FBQztBQUN2QixZQUFZLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQztBQUlwRCw0QkFBNEI7QUFDNUI7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCLENBQUM7QUFDdEIsT0FBTyxrQkFBa0I7SUFDckIsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGFBQWEsS0FBSyxtQkFBbUI7QUFDekM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLFVBQVU7QUFD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QUF1QixDQUFDO0FBQy9DO0lBQ0ksV0FBVyxFQUFFLGFBQWE7QUFDOUI7QUFDQSw0QkFBNEIsV0FBVyxDQUFDO0FBRXhDO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InByb3BlcnR5LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbiBcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiBcbmJvZHl7Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyBmb250LXdlaWdodDogMzAwO2JhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBoZWlnaHQ6MTAwJTt9XG4gXG5odG1sIHsgXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL1dlYnNpdGUtYmFzZS1pbWFnZS5qcGcpIG5vLXJlcGVhdCB0b3AgZml4ZWQ7IFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgaHRtbC5zaXRlbWFwMXsgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL21hcDEucG5nKSBuby1yZXBlYXQgY2VudGVyIGZpeGVkOyBcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO31cbiBcbiBcbi5iZy1pbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTttaW4taGVpZ2h0OiAxMDAlO1xufSBcbi5iZy1pbWcxIHsgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xufSBcbiBcbiNjb2xvci1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNDcsODQsMTY1LDUwJSk7XG4gICAgLyogb3BhY2l0eTogMC42OyAqL1xuIH1cbiAuZm9vdGVye3otaW5kZXg6IDIyO31cbiAuZm9vdGVyICBhIHtcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7IHBhZGRpbmc6MHB4IDEycHg7XG4gICAgIGZvbnQtc2l6ZTogMThweDtcbiB9XG4gLnJvdy5mb290ZXItc3R5bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IGhlaWdodDogNzBweDtcbiAgfVxuIFxuLnRleHQtd2hpdGV7Y29sb3I6I2ZmZjt9XG4uZm9udC1zdHlsZXtmb250LXNpemU6MjBweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7fVxuIFxuIFxuIFxuLyp3ZWJzaXRlIGhvbWUgMSBodG1sIHN0YXJ0Ki9cbi5sb2dvIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmxvZ2luLXNpZ257ICAgXG4gICAgd2lkdGg6IDQwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDt9XG4ubG9nbzF7dGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNkMWQyZDQ7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAwcHggN3B4O1xuICAgIGhlaWdodDogMTA1cHg7ICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6NjdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6ICM0ZTYzYmM7XG4gICAgbGVmdDogMzBweDtcbn1cbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmctbGVmdDozOHB4O1xufVxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbCB7XG4gICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZjU0YTU7XG4gICAgcGFkZGluZy1sZWZ0OiAzN3B4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjA5LDIxMCwyMTIsMC44KTtcbiAgICBoZWlnaHQ6IDY2cHg7XG4gICAgY29sb3I6ICMyZjU0YTU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG51bC5saXN0LXNlY3QgbGkge1xuICAgIHdpZHRoOiAxMjhweDtcbiAgICBoZWlnaHQ6ICAxMjhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzJmNTRhNTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjA5LDIxMCwyMTIsMC44Mik7XG4gICAgbWFyZ2luOjFweDtcbn1cbnVsLmxpc3Qtc2VjdCBsaSBwIHtcbiAgICBwYWRkaW5nOiA1cHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgZm9udC13ZWlnaHQ6NTAwO1xufVxudWwubGlzdC1zZWN0IGxpIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4O1xufVxudWwubGlzdC1zZWN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxlZnQtbWVudSB7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDQ3LDg0LDE2NSw3NSUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTYycHg7XG4gICAgYm90dG9tOiAwO2JveC1zaGFkb3c6IDBweCA1cHggMnB4ICNhMmEyYTI7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ubGVmdC1tZW51IHVse3BhZGRpbmc6IDA7fVxuLmxlZnQtbWVudSB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAvKiBwYWRkaW5nOjE0cHg7ICovXG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOjIycHg7XG59XG4ubGVmdC1tZW51IHVsIGxpIGEge1xuICAgIGNvbG9yOiAjZmZmOyAgICBmb250LXNpemU6IDE4cHg7XG59XG4gXG4uYXBwc3RvcmUtbGluayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIGJvdHRvbTogODhweDsgd2lkdGg6IDIyN3B4OyAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXBwc3RvcmUtbGluayBpbnB1dCwgLmJ0biB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6MHB4IDExcHg7XG59XG4uYXBwLXN0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbiBcbi5hcHBzdG9yZS1saW5rIGlucHV0e2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7IGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7fVxuLmFwcHN0b3JlLWxpbmsgLmJ0bi10ZXh0e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDsgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czowcHg7IGxpbmUtaGVpZ2h0OjhweDt9XG4ubW9iaWxlLXdlYiBpbWcge1xuICAgIHdpZHRoOjM1JTtcbn1cbi5hcHAtc3QgYSBpbWcge1xuICAgIHdpZHRoOiA5OCU7XG59XG4ubmF2LWxpbmsuYWN0aXZle2JvcmRlci1ib3R0b206IDBweDtjb2xvcjojNzY3Njc2O31cbiBcbi50ZXh0LWJ0biB7XG4gICAgYmFja2dyb3VuZDogIzE4NThhZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4udGV4dC1idG46aG92ZXJ7YmFja2dyb3VuZDojMmY1NGE1O31cbiBcbi8qd2Vic2l0ZSBob21lIDEgaHRtbCBlbmQqL1xuIFxuIFxuIFxuLyp3ZWJzaXRlLWhvbWUyIHN0YXJ0Ki9cbi5jb3VudHJ5LWZsZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSAgICBcbi5jb3VudHJ5LWZsZy5teC1hdXRvLm15LWF1dG8gdWwgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzJweDtcbiAgICBwYWRkaW5nOjRweCAwcHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuLyp3ZWJzaXRlLWhvbWUyIGVuZCovXG4gXG4vKndlYnNpdGUtc2ludXAtMSBzdGFydCovXG4gXG4uZm9ybS1vdXRlciB7XG4gICAgaGVpZ2h0OiA0NDdweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuZm9ybS5mb3JtLW91dGVyIC5mb3JtLXN0eWxlMSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzI2OTlmYjsgcGFkZGluZy1sZWZ0OiA0NHB4OyBoZWlnaHQ6NDhweDsgYm9yZGVyLXJhZGl1czogLjI1cmVtO3dpZHRoOjMzMHB4O291dGxpbmU6bm9uZTtcbn1cbmlucHV0LmZvcm0tc3R5bGUxOmZvY3VzLXZpc2libGUge1xuICAgIGJvcmRlci1jb2xvcjogIzI2OTlmYiAhaW1wb3J0YW50O1xufVxuaW5wdXQuZm9ybS1zdHlsZTE6YWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6ICMyNjk5ZmIgIWltcG9ydGFudDtcbn1cbi5oZWFkaW5nLXNpZ251cHtjb2xvcjojMjY5OWZiO31cbi5za3ktYnRueyAgICBcbiAgICBiYWNrZ3JvdW5kOiAjMjY5OWZiO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXI6IDBweDsgaGVpZ2h0OiA0MHB4O1xufVxuLnNreS1idG4tcGFkeyBtYXJnaW4tdG9wOjE2MHB4OyBtYXJnaW4tYm90dG9tOiAyMHB4O31cbi50ZXh0LWZvcm17XG5mb250LXNpemU6IDE0cHg7IGNvbG9yOiM5MTkxOTE7fVxuLmZvcm0tY29udHJvbC1zZWFyY2gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDo0NXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjb2xvcjogIzRlNjNiYztcbiAgICAgICAgbGVmdDo4cHg7XG4gICAgfVxuLyp3ZWJzaXRlLXNpZ24gdXAgIGVuZCovXG4gXG4vKndlYnNpdGUtc2ludXAtNCBzdGFydCovXG4udGV4dC1mb3JtMXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzoxMHB4IDIwcHg7IGNvbG9yOiM5MTkxOTE7fVxuaW5wdXQuZm9ybS1jb250cm9sLmZvcm0tc3R5bGU0IHtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmZiZjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGNvbG9yOiAjZDFkMmQ0O1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xufVxuc3Bhbi5mb3JtLWNvbnRyb2wtc2VhcmNoMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA0cHg7XG4gICAgYm90dG9tOiA2cHg7XG4gICAgY29sb3I6ICNhZGFkYWQ7XG4gICAgZm9udC1zaXplOiAxOXB4O1xufVxuLmZvcm0tb3V0ZXIgLmZvcm0tZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiBcbi8qd2Vic2l0ZS1zaWdudXAtNCAgZW5kKi9cbiBcbi8qd2Vic2l0ZS1zaW51cC02IHN0YXJ0Ki9cbi5mb3JtLWdyb3VwLmZvcm0tZ3JvdXAtc3R5bGV7ZGlzcGxheTogZmxleDt9XG4uZm9ybS1ncm91cC5mb3JtLWdyb3VwLXN0eWxlIGlucHV0IHtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzI2OTlmYjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luOiAwcHggMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLyp3ZWJzaXRlLXNpbnVwLTYgZW5kKi9cbiBcbi8qd2Vic2l0ZS1zaW51cC04IHN0YXJ0Ki9cbi5mb3JtLWh0LXN0eWxle2hlaWdodDogYXV0byAhaW1wb3J0YW50O31cbi8qd2Vic2l0ZS1zaW51cC04IGVuZCovXG4gXG4vKndlYnNpdGUtbG9naW4qL1xuLnRhYi1jb250LWltZ3twYWRkaW5nOiAyMHB4O31cbi50YWItY29udC1pbWcgaW1ne3dpZHRoOiAyMDBweDt9XG5wLnNjYW4tdGV4dHtjb2xvcjojMmY1NGE1OyBmb250LXNpemU6IDI0cHg7Zm9udC13ZWlnaHQ6IDcwMDt9XG5uYXYuc2Nhbi1jb2RlLXN0eWxlIC5uYXYtdGFicyB7XG4gICAgYm9yZGVyOiBub25lO1xufVxubmF2LnNjYW4tY29kZS1zdHlsZSAubmF2LXRhYnMgLm5hdi1saW5re2NvbG9yOiAjNzY3Njc2OyBjdXJzb3I6IHBvaW50ZXI7fVxubmF2LnNjYW4tY29kZS1zdHlsZSAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZXsgICBib3JkZXI6IG5vbmU7IGNvbG9yOiMyZjU0YTU7fVxubmF2LnNjYW4tY29kZS1zdHlsZSAubmF2LXRhYnMsbmF2LnNjYW4tY29kZS1zdHlsZSAubmF2LWxpbmssIG5hdi5zY2FuLWNvZGUtc3R5bGUgLm5hdi1saW5rLmFjdGl2ZTpob3ZlcnsgICBcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDsgICAgXG4gICAgYm9yZGVyOiBub25lO1xufVxuZm9ybS5mb3JtLW91dGVyIC5mb3JtLXN0eWxlLWxvZ2luIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmZiZmJmO1xuICAgIGhlaWdodDogNDhweDtcbn1cbi5zdHlsZS1sb2dpbi1wYWRkIHtwYWRkaW5nLWxlZnQ6IDM4cHg7fVxuc3Bhbi5leWUtc3R5bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTJweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjYWRhZGFkO1xufVxuLnRleHQtZm9ybTJ7Zm9udC1zaXplOjE4cHg7IHRleHQtYWxpZ246bGVmdDt9XG4udGV4dC1mb3JtMiBhe2NvbG9yOiNiNGI0YjU7fVxuLyp3ZWJzaXRlLWxvZ2luIGVuZCovICBcbi5idG4tdXNlcnsgICBcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOiAwcHg7XG59ICAgIFxuLmJ0bi11c2VyLmJ0bi5mb2N1cywgLmJ0bi11c2VyLmJ0bjpmb2N1c3tib3gtc2hhZG93OiBub25lO31cbi5idG4tdXNlcjpob3Zlcntjb2xvcjojZmZmO31cbi51c2VyLWltZyBpbWd7d2lkdGg6IDMwcHg7fVxuLmxvZ2luLXNpZ24gLmRyb3Bkb3duLW1lbnUuc2hvdyB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmY7ICAgIGJvcmRlcjogbm9uZTtcbn1cbi5sb2dpbi1zaWduIC5kcm9wZG93bi1pdGVtIHtjb2xvcjogI2ZmZjsgcGFkZGluZzo1cHg7fVxuLmxvZ2luLXNpZ24gLmRyb3Bkb3duLWl0ZW06aG92ZXJ7Y29sb3I6I2ZmZjsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7fVxuLmxvZ2luLXNpZ24gLmRyb3Bkb3duLWl0ZW0uYWN0aXZlLCAubG9naW4tc2lnbiAuZHJvcGRvd24taXRlbTphY3RpdmV7ICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XG4gXG4vKm1hcCByZWFsdHkxKi9cbi5mb290ZXItc2VjMSB1bCBsaSBhIGltZyB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xufVxuLmZvb3Rlci1zZWMxIHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lOyAgICBwYWRkaW5nOiAwcHggMzhweDtcbn1cbi5mb290ZXItc2VjMSB1bCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uZm9vdGVyLXNlYzEgdWwgbGkgc3BhbiB7XG4gICAgY29sb3I6ICMyNjk5ZmI7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wtbWFwe2JhY2tncm91bmQ6ICNmZmY7IGhlaWdodDo0NXB4OyBwYWRkaW5nLWxlZnQ6IDE0MHB4OyBib3JkZXI6IDFweCBzb2xpZCAjMjY5OWZiO3dpZHRoOiA0OTBweDt9XG5zZWxlY3QuZm9ybS1zZWxlY3QtbWFwe1xuICAgIGJhY2tncm91bmQ6ICMyNjk5ZmI7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBoZWlnaHQ6NDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG59XG5zZWxlY3QuZm9ybS1zZWxlY3QtbWFwOmZvY3Vze2JvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDt9XG4uaGFzLXNlYXJjaC1tYXAgLmZvcm0tY29udHJvbC1mZWVkYmFja3twYWRkaW5nLWxlZnQ6IDgxcHg7IGxpbmUtaGVpZ2h0OjQ5cHg7IGZvbnQtc2l6ZToyMXB4OyBjb2xvcjogIzI3OTlmYTt9XG4uc29ydC1maWx0ZXIgYSB7XG4gICAgICAgIGNvbG9yOiAjMjc5OWZhO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO31cbi5zb3J0LWZpbHRlciB7XG4gICAgdGV4dC1hbGlnbjpyaWdodDsgcGFkZGluZy10b3A6IDVweDsgcGFkZGluZy1sZWZ0OiA0OHB4O1xufSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gXG4uc29ydC1maWx0ZXIgYTpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1yaWdodDowcHg7XG59XG4gXG4uc2l0ZW1hcDEgLmxlZnQtbWVudXtiYWNrZ3JvdW5kOiByZ2IoMzggMTUzIDI1MSk7fVxuLmZvb3Rlci1zZWMyIGEgaW1nIHtcbiAgICBoZWlnaHQ6IDcwcHg7IHdpZHRoOjU2OHB4O1xufVxuLmZvb3Rlci1zZWMxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87IHotaW5kZXg6Mjtcbn1cbi5sb2dpbi1zaWduLW1hcCAuYnRuLXVzZXJ7Y29sb3I6IzI3OTlmYTt9XG4ubG9naW4tc2lnbi1tYXAuZHJvcGRvd24taXRlbXtjb2xvcjojMjc5OWZhO31cbi5sb2dpbi1zaWduLW1hcC5kcm9wZG93bi1pdGVtOmhvdmVye2NvbG9yOiMyNzk5ZmE7fVxuLnNhbGUtb3V0ZXIgLm5hdi10YWJzIHtcbiAgICBib3JkZXItYm90dG9tOjBweCAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kOiAjMjY5OWZiO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtoZWlnaHQ6IDQ1cHg7XG59XG4uc2FsZS1vdXRlciB7bWFyZ2luOiAwcHggLTE2cHggMHB4IDMwcHg7XG4gICAgLyogbWFyZ2luOiAwcHggNjhweDsgKi9cbn1cbi50b3Atb3V0ZXItbWFwe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2dpbi1zaWduLW1hcCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIHJpZ2h0OiAtNjBweDsgKi9cbn1cbi5sb2dpbi1zaWduLW1hcCAuZHJvcGRvd24tbWVudXtyaWdodDogMHB4ICFpbXBvcnRhbnQ7IGxlZnQ6LTQwcHggIWltcG9ydGFudDsgZmxvYXQ6IHJpZ2h0O31cbi5zYWxlLW91dGVyIHVsIGxpIGEubmF2LWxpbmsuYWN0aXZle2NvbG9yOiMyNzk5ZmE7IGJvcmRlcjogMXB4IHNvbGlkICMyNjk5ZmI7IGJvcmRlci1yYWRpdXM6IDRweDtoZWlnaHQ6IDQ1cHg7fVxuLnNhbGUtb3V0ZXIgdWwgbGkgYS5uYXYtbGlua3tjb2xvcjojZmZmO2hlaWdodDogNDVweDt9XG4gXG5odG1sLnNpdGVtYXAyIHtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XG4uc2l0ZW1hcDIgLmxlZnQtbWVudXtiYWNrZ3JvdW5kOiByZ2IoMzggMTUzIDI1MSk7fVxuICAvKm1hcCByZWFsdHkxKi9cbiBcbiAvKm1hcCByZWFsdHkyKi9cbiAgLm91dGVyLWxpc3QxIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaDEuanBnKTsgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDIwMHB4O2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5vdXRlci1saXN0MjEgeyBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaDMuanBnKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7aGVpZ2h0OiAyMDBweDtcbn1cbi5vdXRlci1saXN0MzMgeyBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaDQuanBnKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7aGVpZ2h0OiAyMDBweDtcbn1cbi5vdXRlci1saXN0NXsgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2g1LmpwZyk7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2hlaWdodDogMjAwcHg7XG59XG4ub3V0ZXItbGlzdDQ0IHsgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2g2LmpwZyk7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2hlaWdodDogMjAwcHg7XG59XG4ub3V0ZXItbGlzdDE0IHsgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2g3LmpwZyk7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2hlaWdodDogMjAwcHg7XG59XG4uaW5uZXItbGlzdC1zdHlsZTEge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG59XG4uaW5uZXItbGlzdC1zdHlsZTEgcCBpbWcge1xuICAgIHdpZHRoOiAyMHB4O1xufVxuLm91dGVyLW1hcC1saXN0IHtcbiAgICBwYWRkaW5nOjMycHggMHB4IDMycHggMTUwcHg7XG59XG4uaW5uZXItbGlzdC1zdHlsZTEgcCB7XG4gICAgY29sb3I6ICMyNzk5ZmE7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5pbm5lci1saXN0LXN0eWxlMSB7XG4gICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNDVweDtcbn1cbi5zYWxlLWRpdiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsMTkyLDEyNSwwLjgpO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xufVxuLmlubmVyLWxpc3Qtc3R5bGUxIHA6bGFzdC1jaGlsZCB7XG4gICAgcmlnaHQ6IDRweDtcbiAgICB0b3A6IDEwcHg7XG59XG4uaW5uZXItbGlzdC1zdHlsZTEgcDpmaXJzdC1jaGlsZCB7XG4gICAgdG9wOiAxNHB4O1xuICAgIGxlZnQ6IDNweDtcbn1cbi5zYWxlLWRpdiBzcGFuIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7Zm9udC1zaXplOiAxNHB4O1xufVxuIFxuLmFtb3V0LWRpdiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMywxNTEsMjIyLDAuOCk7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDRweCA3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgZm9udC1zaXplOiAxNHB4O1xufVxuLm91dGVyLWxpc3QyLWlubmVyIHtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgYmFja2dyb3VuZDogIzE3OTdkZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vdXRlci1saXN0Mi1pbm5lciBwIGEgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBwYWRkaW5nOiAxcHg7XG59XG4uY2FydC1pbWcge1xuICAgIHdpZHRoOiAyOHB4ICFpbXBvcnRhbnQ7fVxuIFxuLm91dGVyLWxpc3QyLWlubmVyIHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7IHBhZGRpbmctbGVmdDogMnB4O1xuICAgIH1cbi5vdXRlci1saXN0MiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuLm91dGVyLWxpc3QzIHAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuLm91dGVyLWxpc3QzIHB7XG4gICAgICAgIHdpZHRoOiAyNSU7IG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuLm91dGVyLWxpc3Q0IHAge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcbiAgICAgICAgY29sb3I6IzI2OTlmYjtcbiAgICB9XG4ub3V0ZXItbGlzdDQtaW5uZXItbHQgcCB7XG4gICAgICAgIGNvbG9yOiAjMTc5N2RlO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgIH1cbiAgICAub3V0ZXItbGlzdDQtaW5uZXItbHQge1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIH1cbi5oZWFydC1pbWctc3R5IHt3aWR0aDoxNnB4O31cbnNwYW4uaGVhcnQtdGV4dC1zdHlsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDUwJTtcbn1cbi5jaGF0LWltZy1zdHl7d2lkdGg6MjBweDt9XG4ub3V0ZXItbGlzdDQge1xuICAgICAgICB3aWR0aDogMTAwJTsgYmFja2dyb3VuZDogI2UzZTNlMzsgcGFkZGluZzoycHg7fVxuLm91dGVyLWxpc3QzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuLm91dGVyLWxpc3QzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTt9XG4ub3V0ZXItbGlzdDMge1xuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXG4gICAgICB9XG4ub3V0ZXItbGlzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cbnNwYW4ubWlrZS1zdHlsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIGJvdHRvbTo0cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjMjY5OWZiO1xufVxuLmZvcm0tZ3JvdXAuaGFzLXNlYXJjaC1tYXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuIC8qIG1hcCByZWFsdHkyICovXG4gXG4gLmxvZ28tbWFwIHtib3JkZXI6IDBweDsgYmFja2dyb3VuZDogIzJmNTRhNTsgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMmY1NGE1O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMHB4IDdweDtcbiAgICBib3JkZXI6IDEuOHB4IHNvbGlkICNlYWVhZWI7ICovXG59XG4ubWFyZ2luLXRvcC1zdHl7bWFyZ2luLXRvcDogMTglO31cbi5sZWZ0LW1lbnUgdWwgbGkgaW1nIHtcbiAgICB3aWR0aDogMzRweDt9XG4gLmxlZnQtbWVudSB1bCBsaSBhIHNwYW4ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDlweDtcbiAgICB9XG4ucmlnaHQtc2lkZS1kZXRhaWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogNzIwcHg7XG59XG4vKiAucmlnaHQtc2lkZS1kZXRhaWwgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn0gKi9cbi5zdW1tcnktdGV4dC1zdHlsZSBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBmb250LXdlaWdodDogNjAwOyAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuLmhlYWRpbmctc3R5bGUge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7ICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG4ub3V0ZXItaW5uZXItYWdlbnQgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDsgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICB9XG4ub3V0ZXItaW5uZXItYWdlbnQgcCBzcGFuIGltZyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICB9XG4ucHJvcGVydHktdHlwZS1zdHlsZSBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIH1cbi5zdW1tcnktY2FsZS1zdHlsZSBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cbi5zY2hvb2wtYWNjb3JkaWFuIC5jYXJke2JvcmRlcjowcHg7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiNmZmY7fVxuLnNjaG9vbC1hY2NvcmRpYW4gLmNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOjBweCAwcHggNnB4IDBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuNCk7bWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDt9XG4uc2Nob29sLWFjY29yZGlhbiAuY2FyZC1oZWFkZXIgYXtjb2xvcjojZmZmOyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiA1MDA7fVxuLnNjaG9vbC1hY2NvcmRpYW4gLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjt9XG4gXG4vKiAubGVmdC1tZW51IHVsIGxpOmxhc3QtY2hpbGQgYSBpbWcge1xuICAgIHdpZHRoOiAxMDAlOyAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7ICAgIGxlZnQ6IDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWViO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7IHBhZGRpbmc6IDEwcHg7YmFja2dyb3VuZDojMmY1NGE1O1xufVxuLmxlZnQtbWFwLW1lbnUgdWwgbGk6bGFzdC1jaGlsZCBhIGltZ3tib3JkZXI6MHB4O30gKi9cbiBcbnAubGVmdC1vdXRlci1saXN0MiB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxucC5jZW50ZXItb3V0ZXItbGlzdDIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxucC5yaWdodC1vdXRlci1saXN0MjpsYXN0LWNoaWxkIHtcbiAgICB3aWR0aDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLnBhZ2Utc3R5bGUgLnBhZ2UtbGlua3tib3JkZXI6MHB4ICFpbXBvcnRhbnQ7fSBcbiAuYmctaW1nMS1tYXB7cGFkZGluZzogNXB4IDBweCA1cHggNTBweDtoZWlnaHQ6MTA1cHg7XG4gICAgYmFja2dyb3VuZDogI2UzZTNlMzt9XG4uYmctaW1nMi1tYXAge1xuICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyBcbiAgICB9XG4gXG4gXG4vKjE1IGFwcmlsKi9cbi5yaWdodC1zaWRlLW1hcC1pbWcge1xuICAgICAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiA2NzVweDtcbiAgICB9XG4uYnVyZ2VyLW1lbnUgaW1nXG57XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cbmltZy5jbG9zZS1zdHlsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIHRvcDogMTBweDtcbn1cbnVsLmdvb2dsZS1tYXAtc3R5MSBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7IHBhZGRpbmc6IDBweCAxMHB4O1xufVxudWwuZ29vZ2xlLW1hcC1zdHkxe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgbGVmdDogMTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDt9XG51bC5nb29nbGUtbWFwLXN0eTEgbGkgaW1nIHtcbiAgICB3aWR0aDogNjBweDt9XG4ub3V0ZXItbWFwLWxpc3QxIHtcbiAgICAgICAgcGFkZGluZzogMzJweCAwcHggMzJweCAyMnB4O1xuICAgIH1cbi5yb3cubWFwLXJpZ2h0LXNjcm9sbCB7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgaGVpZ2h0OiA2MDBweDsgfVxuLm1hcC1yaWdodC1zY3JvbGwgLm91dGVyLWxpc3R7bWFyZ2luLWJvdHRvbTogMTVweDsgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMHB4ICMxNzk3ZGU7fVxuIFxuLnJvdy5tYXAtcmlnaHQtc2Nyb2xsIHtcbiAgICBzY3JvbGxiYXItZmFjZS1jb2xvcjogIzM2N0NEMjtcbiAgICBzY3JvbGxiYXItc2hhZG93LWNvbG9yOiAjRkZGRkZGO1xuICAgIHNjcm9sbGJhci1oaWdobGlnaHQtY29sb3I6ICNGRkZGRkY7XG4gICAgc2Nyb2xsYmFyLTNkbGlnaHQtY29sb3I6ICNGRkZGRkY7XG4gICAgc2Nyb2xsYmFyLWRhcmtzaGFkb3ctY29sb3I6ICNGRkZGRkY7XG4gICAgc2Nyb2xsYmFyLXRyYWNrLWNvbG9yOiAjRkZGRkZGO1xuICAgIHNjcm9sbGJhci1hcnJvdy1jb2xvcjogI0ZGRkZGRjtcbiAgfVxuICBcbiAgLypzY3JvbGxiYXIqL1xuICAucm93Lm1hcC1yaWdodC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTRweDtcbiAgfVxuICBcbiAgLyogVHJhY2sgKi9cbiAgLnJvdy5tYXAtcmlnaHQtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLyogLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O2JhY2tncm91bmQ6ICNmZmY7IGJvcmRlcjoxcHggc29saWQgIzI2OTlmYjtcbiAgfVxuICBcbiAgLyogSGFuZGxlICovXG4gIC5yb3cubWFwLXJpZ2h0LXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM4LDE1MywyNTMsIDAuOCk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gIC8qIGRldGFpbCBzY3JlZW4qL1xuICAub3V0ZXItbGlzdC1yaWdodHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDo1MDBweDtcbn1cbi5vdXRlci1sZWZ0LWJhbm5lciB7XG4gICAgd2lkdGg6IDcwJTtcbn1cbi5vdXRlci1saXN0LXJpZ2h0IHAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtoZWlnaHQ6IDEyNXB4O1xufVxuLm91dGVyLWxpc3QtcmlnaHQgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLm91dGVyLWxlZnQtYmFubmVyIC5pbm5lci1saXN0LXN0eWxlMXtiYWNrZ3JvdW5kOiAjMjY5OWZiO31cbi5vdXRlci1sZWZ0LWJhbm5lciAuaW5uZXItbGlzdC1zdHlsZTEgcHtjb2xvcjogI2ZmZjt9XG4ub3V0ZXItbGVmdC1iYW5uZXIgLm91dGVyLWxpc3Qxe2hlaWdodDogNTAwcHg7fVxuLm91dGVyLWxlZnQtYmFubmVyIC5vdXRlci1saXN0Mi1pbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICMxNzk3ZGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogNTJweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ub3V0ZXItbGVmdC1iYW5uZXIgLm91dGVyLWxpc3QyLWlubmVyIHAgYSBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHBhZGRpbmc6IDNweDtcbn1cbi5zYWxlLW91dGVyIC5uYXYtdGFicyAubmF2LWl0ZW17XG4gICAgd2lkdGg6IDcycHg7fVxuIFxuLnByb3AtZGV0YWlsLXJpZ2h0e2JhY2tncm91bmQ6ICMyNjk5ZmI7IGNvbG9yOiNmZmY7fVxuLnNjaG9vbC1hY2NvcmRpYW4uY2FyZHtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XG4uc3VtbWFyeS1tYXAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAzMDBweDtcbn1cbi5vdXRlci1pbm5lci1hZ2VudCBwIHNwYW4gYXtjb2xvcjogI2ZmZjt9XG5cbi5kYW5nZXItY29sb3ItbXNne1xuICAgIGJhY2tncm91bmQ6ICNmOGQ3ZGE7XG59XG4ubG9naW4tc2lnbiBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2Nhbi1sb2dpbi1pbnB1dHtcbiAgICB3aWR0aDogMzYzcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYmZiZmJmICFpbXBvcnRhbnQ7XG59XG4gIl19 */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment, apiUrls */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "apiUrls", function () {
        return apiUrls;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      var apiUrls = {
        sendOtpURL: 'http://3.138.194.15:3535/bs/web/sendOTP',
        verifyOtpURL: 'http://3.138.194.15:3535/bs/web/verifyOTP',
        updateAccountURL: 'http://3.138.194.15:3535/bs/web/updateAccount',
        loginWithPasswordURL: 'http://3.138.194.15:3535/bs/web/loginWithPassword',
        getProfileInfoURL: 'http://3.138.194.15:3535/bs/getProfileInformation'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "EpET":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/apis.service.ts ***!
      \*************************************************/

    /*! exports provided: ApisService */

    /***/
    function EpET(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApisService", function () {
        return ApisService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "IYfF");

      var ApisService = /*#__PURE__*/function () {
        function ApisService(http, authService) {
          _classCallCheck(this, ApisService);

          this.http = http;
          this.authService = authService;
        }

        _createClass(ApisService, [{
          key: "sendOTPService",
          value: function sendOTPService(data) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["apiUrls"].sendOtpURL, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            });
          }
        }, {
          key: "verifyOTPService",
          value: function verifyOTPService(data) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["apiUrls"].verifyOtpURL, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            });
          }
        }, {
          key: "updateAccountService",
          value: function updateAccountService(data) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["apiUrls"].updateAccountURL, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'token': this.authService.getSignupToken()
              })
            });
          }
        }, {
          key: "loginWithPasswordService",
          value: function loginWithPasswordService(data) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["apiUrls"].loginWithPasswordURL, data, {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json'
              })
            });
          }
        }]);

        return ApisService;
      }();

      ApisService.ɵfac = function ApisService_Factory(t) {
        return new (t || ApisService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      ApisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ApisService,
        factory: ApisService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "F1my":
    /*!**************************************************!*\
      !*** ./src/app/home-page/home-page.component.ts ***!
      \**************************************************/

    /*! exports provided: HomePageComponent */

    /***/
    function F1my(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
        return HomePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_apis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/services/apis.service */
      "EpET");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-tel-input */
      "QSfX");
      /* harmony import */


      var ngx_countdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-countdown */
      "z+xu");

      var _c0 = ["otpbox1"];
      var _c1 = ["otpbox2"];
      var _c2 = ["otpbox3"];
      var _c3 = ["otpbox4"];

      function HomePageComponent_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Smart Real Estate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c4 = function _c4() {
        return {
          initialCountry: ""
        };
      };

      function HomePageComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SIGN UP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 50, 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("countryChange", function HomePageComponent_div_15_Template_input_countryChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onCountryChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter your number to receive a code for verification of your mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_15_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.sendOTP(_r6.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ng2TelInputOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
        }
      }

      var _c5 = function _c5() {
        return {
          leftTime: 30,
          format: "s"
        };
      };

      function HomePageComponent_div_16_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resend code in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "countdown", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("event", function HomePageComponent_div_16_div_14_Template_countdown_event_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r16.otpTimerEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c5));
        }
      }

      function HomePageComponent_div_16_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_16_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.resendOTP();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resend Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomePageComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 55, 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomePageComponent_div_16_Template_input_keyup_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.otpInputChg(2);
          })("ngModelChange", function HomePageComponent_div_16_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.otpValue1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 57, 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomePageComponent_div_16_Template_input_keyup_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.otpInputChg(3);
          })("ngModelChange", function HomePageComponent_div_16_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.otpValue2 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 59, 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomePageComponent_div_16_Template_input_keyup_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.otpInputChg(4);
          })("ngModelChange", function HomePageComponent_div_16_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r26.otpValue3 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 61, 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HomePageComponent_div_16_Template_input_keyup_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.otpInputChg(0);
          })("ngModelChange", function HomePageComponent_div_16_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.otpValue4 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomePageComponent_div_16_div_14_Template, 3, 2, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomePageComponent_div_16_button_15_Template, 2, 0, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Enter the code sent to you at ", ctx_r2.phn, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.otpValue1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.otpValue2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.otpValue3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.otpValue4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.btnResend);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.btnResend);
        }
      }

      var _c6 = function _c6(a0) {
        return {
          "danger-color-msg": a0
        };
      };

      function HomePageComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 68, 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomePageComponent_div_17_Template_form_ngSubmit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.onSubmit(_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Enter Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 70, 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 72, 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 74, 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_17_Template_i_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r36.eyeToggle("pass");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 78, 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_17_Template_i_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r37.eyeToggle("confpass");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Enter password should be at least 8 characters long and contain atleast one number, one capital letter, one lower case letter, one special character");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c6, _r30.touched && !_r30.valid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c6, _r31.touched && !_r31.valid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.passEye ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c6, _r32.touched && !_r32.valid));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.passEye ? "fa fa-eye-slash" : "fa fa-eye");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r3.confPassEye ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c6, _r33.touched && _r33.value !== _r32.value));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.confPassEye ? "fa fa-eye-slash" : "fa fa-eye");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r29.valid);
        }
      }

      function HomePageComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Verification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Check the email you entered to confirm your registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomePageComponent_div_19_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Scan code successfully");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HomePageComponent_div_19_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 94, 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("countryChange", function HomePageComponent_div_19_div_11_Template_input_countryChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r42.onCountryChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 96, 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_19_div_11_Template_i_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r44.eyeToggle("loginpass");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Forgot password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_19_div_11_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r45.loginWithPassword(_r40.value, _r41.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LOGIN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ng2TelInputOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r39.loginpass ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r39.loginpass ? "fa fa-eye-slash" : "fa fa-eye");
        }
      }

      var _c7 = function _c7(a0) {
        return {
          "active": a0
        };
      };

      function HomePageComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_19_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r46.qrAccLoginDivToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scan Code Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_div_19_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r48.qrAccLoginDivToggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Account Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomePageComponent_div_19_div_10_Template, 4, 0, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomePageComponent_div_19_div_11_Template, 14, 4, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c7, !ctx_r5.qrAccLogin));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c7, ctx_r5.qrAccLogin));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.qrAccLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.qrAccLogin);
        }
      }

      var HomePageComponent = /*#__PURE__*/function () {
        function HomePageComponent(apiService, authService, toastr, router) {
          _classCallCheck(this, HomePageComponent);

          this.apiService = apiService;
          this.authService = authService;
          this.toastr = toastr;
          this.router = router;
          this.btnResend = false;
          this.countryCode = '1';
          this.passEye = false;
          this.confPassEye = false;
          this.loginpass = false;
          this.qrAccLogin = true;
        }

        _createClass(HomePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.authService.isLoggedIn()) {
              this.router.navigate(['/home']);
            }

            this.viewToggle("default");
          }
        }, {
          key: "viewToggle",
          value: function viewToggle(view) {
            this.view_default = false;
            this.view_signup = false;
            this.view_otp = false;
            this.view_form = false;
            this.view_msg = false;
            this.view_login = false;

            switch (view) {
              case "default":
                {
                  this.view_default = true;
                  break;
                }

              case "signup":
                {
                  this.view_signup = true;
                  break;
                }

              case "otp":
                {
                  this.view_otp = true;
                  break;
                }

              case "form":
                {
                  this.view_form = true;
                  break;
                }

              case "msg":
                {
                  this.view_msg = true;
                  break;
                }

              case "login":
                {
                  this.view_login = true;
                  break;
                }
            }
          }
        }, {
          key: "otpTimerEvent",
          value: function otpTimerEvent(e) {
            if (e.action == "done") {
              this.btnResend = true;
            }
          } // onOtpChange(e){
          //   if(e.length === 4){
          //     this.viewToggle("form");
          //   }
          // }

        }, {
          key: "loginWithPassword",
          value: function loginWithPassword(phn, pwd) {
            var _this = this;

            this.phn = phn;
            this.pwd = pwd;
            var params = {
              'countryCode': this.countryCode,
              'mobileNumber': this.phn,
              'password': this.pwd
            };
            this.apiService.loginWithPasswordService(params).subscribe(function (res) {
              _this.toastr.success(res.msg);

              _this.authService.setToken(res.token);

              _this.authService.setUserName(res.data.name);

              _this.authService.setUserId(res.data._id);

              _this.authService.setUserProfileImg(res.data.profilePhoto);

              _this.router.navigate(['/home']);
            }, function (err) {
              _this.toastr.warning(err.error.msg);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            var _this2 = this;

            if (form.value.password === form.value.confirmpassword) {
              var params = {
                'type': 'signUpWithEmail',
                'name': form.value.name,
                'email': form.value.email,
                'password': form.value.password
              };
              this.apiService.updateAccountService(params).subscribe(function (res) {
                _this2.toastr.success('Account created successfully');

                _this2.authService.setToken(res.token);

                _this2.authService.setUserName(res.data.name);

                _this2.authService.setUserId(res.data._id);

                _this2.authService.setUserProfileImg(res.data.profilePhoto);

                _this2.authService.removeSignupOTP();

                _this2.authService.removeSignupToken();

                _this2.router.navigate(['/home']);
              }, function (err) {
                _this2.toastr.warning(err.error.msg);
              }); // this.viewToggle("msg");
            } else {
              this.toastr.warning('Wrong Confirm Password');
            }
          }
        }, {
          key: "sendOTP",
          value: function sendOTP(phn) {
            var _this3 = this;

            this.phn = phn;
            var params = {
              'countryCode': this.countryCode,
              'mobileNumber': this.phn
            };
            this.apiService.sendOTPService(params).subscribe(function (res) {
              if (res.already_registered) {
                _this3.toastr.warning(res.msg);

                _this3.viewToggle('login');
              } else {
                _this3.toastr.success(res.msg);

                _this3.authService.setSignupOTP(res.otp);

                _this3.viewToggle('otp');
              }
            }, function (err) {
              _this3.toastr.warning(err.error.msg);
            });
          }
        }, {
          key: "resendOTP",
          value: function resendOTP() {
            var _this4 = this;

            var params = {
              "countryCode": this.countryCode,
              "mobileNumber": this.phn
            };
            this.apiService.sendOTPService(params).subscribe(function (res) {
              if (res.already_registered) {
                _this4.toastr.warning(res.msg);

                _this4.viewToggle('login');
              } else {
                _this4.toastr.success(res.msg);

                _this4.authService.setSignupOTP(res.otp);

                _this4.otpValue1 = _this4.otpValue2 = _this4.otpValue3 = _this4.otpValue4 = '';
              }
            }, function (err) {
              _this4.toastr.warning(err.error.msg);
            });
          }
        }, {
          key: "verifyOTP",
          value: function verifyOTP() {
            var _this5 = this;

            var params = {
              "countryCode": this.countryCode,
              "mobileNumber": this.phn,
              "otp": "".concat(this.otpValue1).concat(this.otpValue2).concat(this.otpValue3).concat(this.otpValue4),
              "encryptedOTP": this.authService.getSignupOTP()
            };
            this.apiService.verifyOTPService(params).subscribe(function (res) {
              if (res.signup_completed) {
                _this5.toastr.warning(res.msg);

                _this5.viewToggle('login');
              } else {
                _this5.toastr.success('OTP verified successfully');

                _this5.authService.setSignupToken(res.token);

                _this5.viewToggle('form');
              }
            }, function (err) {
              _this5.toastr.warning(err.error.msg);
            });
          }
        }, {
          key: "onCountryChange",
          value: function onCountryChange(obj) {
            this.countryCode = obj.dialCode;
          }
        }, {
          key: "eyeToggle",
          value: function eyeToggle(elm) {
            if (elm === "pass") {
              this.passEye ? this.passEye = false : this.passEye = true;
            }

            if (elm === "confpass") {
              this.confPassEye ? this.confPassEye = false : this.confPassEye = true;
            }

            if (elm === "loginpass") {
              this.loginpass ? this.loginpass = false : this.loginpass = true;
            }
          }
        }, {
          key: "confEyePassToggle",
          value: function confEyePassToggle() {
            if (this.confPassEye) {
              this.confPassEye = false;
            } else {
              this.confPassEye = true;
            }
          }
        }, {
          key: "qrAccLoginDivToggle",
          value: function qrAccLoginDivToggle() {
            if (this.qrAccLogin) {
              this.qrAccLogin = false;
            } else {
              this.qrAccLogin = true;
            }
          }
        }, {
          key: "otpInputChg",
          value: function otpInputChg(b) {
            if (b == 2) {
              this.otpbox2.nativeElement.focus();
            } else if (b == 3) {
              this.otpbox3.nativeElement.focus();
            } else if (b == 4) {
              this.otpbox4.nativeElement.focus();
            }

            if (this.otpbox1.nativeElement.value && this.otpbox2.nativeElement.value && this.otpbox3.nativeElement.value && this.otpbox4.nativeElement.value) {
              this.verifyOTP();
            }
          }
        }]);

        return HomePageComponent;
      }();

      HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
        return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_apis_service__WEBPACK_IMPORTED_MODULE_1__["ApisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomePageComponent,
        selectors: [["app-home-page"]],
        viewQuery: function HomePageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.otpbox1 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.otpbox2 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.otpbox3 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.otpbox4 = _t.first);
          }
        },
        decls: 92,
        vars: 6,
        consts: [[1, "bg-img"], ["id", "color-overlay"], [1, "container"], [1, "bg-img1"], [1, "row"], [1, "col-md-12", "mx-auto", "d-inline-flex", "mt-4"], [1, "logo"], ["src", "/assets/images/SMART GREY1.png", 3, "click"], [1, "login-sign", "text-white", "float-right"], [1, "text-white", "p-3", "font-style", 3, "click"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "left-menu"], [1, "logo1", "mx-auto"], ["src", "/assets/images/SMART GEAR GREY.png"], [1, "text-white", "mt-4"], ["href", ""], ["src", "/assets/images/166 news.png"], ["src", "/assets/images/167 weather.png"], ["src", "/assets/images/168 horoscope.png"], ["src", "/assets/images/169 calendar.png"], ["src", "/assets/images/01a BUY WHITE.png"], ["src", "/assets/images/02a SALE WHITE.png"], ["src", "/assets/images/03a TENANT WHITE.png"], ["src", "/assets/images/04a LANDLORD WHITE.png"], [1, "appstore-link"], [1, "mobile-web", "mb-2"], ["src", "/assets/images/Smart App on phone.png"], [1, "app-st", "mb-2"], ["href", "https://apps.apple.com/us/app/apple-store/id375380948"], ["src", "/assets/images/apple play.png"], ["href", "https://play.google.com/store"], ["src", "/assets/images/google store.png"], [1, "form-group", "d-inline-flex"], ["type", "text", "id", "", "placeholder", "Enter phone", "name", "username", 1, "form-control", "w-50"], ["type", "submit", 1, "btn", "btn-primary", "text-btn"], [1, "row", "footer-style"], [1, "footer", "d-inline-flex", "mx-auto", "text-white"], ["href", "#"], [1, "col-md-6", "mx-auto", "mt-5"], [1, "form-group", "has-search"], [1, "fa", "fa-search", "form-control-feedback"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "col-md-6", "mx-auto"], [1, "list-sect"], ["src", "/assets/images/Smart Real Estate.png"], [1, "text-white", "p-2", "mx-auto"], [1, "form-outer"], [1, "mb-4", "heading-signup"], [1, "form-group"], ["type", "text", "ng2TelInput", "", 1, "form-style1", 3, "ng2TelInputOptions", "countryChange"], ["phnInput", ""], [1, "text-form", "m-4"], [1, "btn", "sky-btn", "sky-btn-pad", "btn-primary", "w-75", 3, "click"], [1, "form-group", "form-group-style"], ["maxlength", "1", "type", "text", "name", "otpValue1", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["otpbox1", ""], ["maxlength", "1", "type", "text", "name", "otpValue2", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["otpbox2", ""], ["maxlength", "1", "type", "text", "name", "otpValue3", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["otpbox3", ""], ["maxlength", "1", "type", "text", "name", "otpValue4", 1, "form-control", 3, "ngModel", "keyup", "ngModelChange"], ["otpbox4", ""], ["class", "text-form sky-btn-pad", 4, "ngIf"], ["type", "button", "class", "btn sky-btn sky-btn-pad btn-primary w-75", 3, "click", 4, "ngIf"], [1, "text-form", "sky-btn-pad"], [3, "config", "event"], ["type", "button", 1, "btn", "sky-btn", "sky-btn-pad", "btn-primary", "w-75", 3, "click"], [1, "form-outer", 3, "ngSubmit"], ["myForm", "ngForm"], ["type", "text", "required", "", "ngModel", "", "name", "name", "id", "name", "placeholder", "Full Name", 1, "form-control", "form-style4", 3, "ngClass"], ["name", "ngModel"], ["type", "text", "required", "", "ngModel", "", "name", "email", "id", "email", "placeholder", "Email", 1, "form-control", "form-style4", 3, "ngClass"], ["email", "ngModel"], ["required", "", "ngModel", "", "name", "password", "id", "password", "placeholder", "Enter password", 1, "form-control", "form-style4", 3, "type", "ngClass"], ["password", "ngModel"], [1, "form-control-search1"], ["aria-hidden", "true", 3, "ngClass", "click"], ["required", "", "ngModel", "", "name", "confirmpassword", "id", "confirmpassword", "placeholder", "Confirm password", 1, "form-control", "form-style4", 3, "type", "ngClass"], ["confirmpassword", "ngModel"], [1, "text-form1"], ["type", "submit", 1, "btn", "sky-btn", "btn-primary", "w-75", "mb-4", "mt-3", 3, "disabled"], [1, "form-outer", "form-ht-style"], [1, "scan-code-style"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "nav-home-tab", "data-toggle", "tab", "role", "tab", "aria-controls", "nav-home", "aria-selected", "true", 1, "nav-link", 3, "ngClass", "click"], ["id", "nav-profile-tab", "data-toggle", "tab", "role", "tab", "aria-controls", "nav-profile", "aria-selected", "false", 1, "nav-link", 3, "ngClass", "click"], ["id", "nav-tabContent", 1, "tab-content"], ["class", "tab-pane fade show active tab-cont-img", "id", "scan-code", "role", "tabpanel", "aria-labelledby", "nav-home-tab", 4, "ngIf"], ["class", "tab-pane fade show active mt-5", "id", "account-login", "role", "tabpanel", "aria-labelledby", "nav-profile-tab", 4, "ngIf"], ["id", "scan-code", "role", "tabpanel", "aria-labelledby", "nav-home-tab", 1, "tab-pane", "fade", "show", "active", "tab-cont-img"], ["src", "/assets/images/qr-code.png"], [1, "scan-text", "mt-5"], ["id", "account-login", "role", "tabpanel", "aria-labelledby", "nav-profile-tab", 1, "tab-pane", "fade", "show", "active", "mt-5"], ["type", "text", "ng2TelInput", "", 1, "form-style1", "scan-login-input", 3, "ng2TelInputOptions", "countryChange"], ["phnInput2", ""], ["id", "", "placeholder", "Password", "name", "password", 1, "form-control", "form-style-login", 3, "type"], ["pwdInput", ""], [1, "eye-style"], [1, "text-form2"], ["type", "submit", 1, "btn", "sky-btn", "btn-primary", "w-75", "mb-4", "mt-5", 3, "click"]],
        template: function HomePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_img_click_8_listener() {
              return ctx.viewToggle("default");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_10_listener() {
              return ctx.viewToggle("login");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_a_click_12_listener() {
              return ctx.viewToggle("signup");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SignUp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomePageComponent_span_14_Template, 13, 0, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomePageComponent_div_15_Template, 12, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomePageComponent_div_16_Template, 16, 7, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomePageComponent_div_17_Template, 26, 17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomePageComponent_div_18_Template, 7, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomePageComponent_div_19_Template, 12, 8, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "News");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Weather");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Horscope");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Calendar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Buy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Rent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Landlord");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Text me the link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Platform");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "English");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Copyright @ 2020-2021 Smart | All rights reserved");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Term of Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view_default);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view_signup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view_otp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view_form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view_msg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.view_login);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], ng2_tel_input__WEBPACK_IMPORTED_MODULE_7__["Ng2TelInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ngx_countdown__WEBPACK_IMPORTED_MODULE_8__["CountdownComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
        styles: ["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');\n\nbody[_ngcontent-%COMP%]{font-family: 'Open Sans', sans-serif; font-weight: 300;background: transparent; height:100%;}\nhtml[_ngcontent-%COMP%] { \n    background: url(/assets/images/Website-base-image.jpg) no-repeat top fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n  }\nhtml.sitemap1[_ngcontent-%COMP%]{ background: url(/assets/images/map1.png) no-repeat center fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;}\n.bg-img[_ngcontent-%COMP%] {\n    position: relative;min-height: 100%;\n}\n.bg-img1[_ngcontent-%COMP%] { min-height: calc(100vh - 70px);\n}\n#color-overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%; \n    height: 100%;\n    background-color:rgba(47,84,165,50%);\n    \n }\n.footer[_ngcontent-%COMP%]{z-index: 22;}\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color:#fff !important; padding:0px 12px;\n     font-size: 18px;\n }\n.row.footer-style[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n    text-align: center; height: 70px;\n  }\n.text-white[_ngcontent-%COMP%]{color:#fff;}\n.font-style[_ngcontent-%COMP%]{font-size:20px;text-transform:uppercase;}\n\n.logo[_ngcontent-%COMP%] {\n    width: 60%;\n    text-align: right;\n}\n.login-sign[_ngcontent-%COMP%]{   \n    width: 40%;\n    text-align: right;}\n.logo1[_ngcontent-%COMP%]{text-align: center;\n    background: #d1d2d4;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n    padding: 0px 7px;\n    height: 105px;    margin-bottom: 45px;\n}\n.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 2;\n    display: block;\n    width: 20px;\n    height: 20px;\n    line-height:67px;\n    text-align: center;\n    pointer-events: none;\n    color: #4e63bc;\n    left: 30px;\n}\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding-left:38px;\n}\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n     border: 2px solid #2f54a5;\n    padding-left: 37px;\n    background: rgba(209,210,212,0.8);\n    height: 66px;\n    color: #2f54a5;\n    font-size: 20px;\n    text-transform: uppercase;\n}\nul.list-sect[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 128px;\n    height:  128px;\n    display: inline-block;\n    border: 2px solid #2f54a5;\n    border-radius: 10px;\n    background: rgba(209,210,212,0.82);\n    margin:1px;\n}\nul.list-sect[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 5px 0px !important;\n    font-size: 13px;\n    text-align: center;    font-weight:500;\n}\nul.list-sect[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 5px;\n}\nul.list-sect[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-top: 40px;text-align: center;\n}\n.left-menu[_ngcontent-%COMP%] {\n    background:rgba(47,84,165,75%);\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 162px;\n    bottom: 0;box-shadow: 0px 5px 2px #a2a2a2;\n    min-height: 100%;\n    height: 100%;\n}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding: 0;}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    \n    padding-left: 14px;\n    padding-bottom:22px;\n}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;    font-size: 18px;\n}\n.appstore-link[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 40px;\n    bottom: 88px; width: 227px;    text-align: center;\n}\n.appstore-link[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding:0px 11px;\n}\n.app-st[_ngcontent-%COMP%] {\n    display: inline-flex;\n}\n.appstore-link[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-bottom-right-radius: 0px; border-top-right-radius: 0px;}\n.appstore-link[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]{border-bottom-left-radius: 0px; border-top-left-radius:0px; line-height:8px;}\n.mobile-web[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width:35%;\n}\n.app-st[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 98%;\n}\n.nav-link.active[_ngcontent-%COMP%]{border-bottom: 0px;color:#767676;}\n.text-btn[_ngcontent-%COMP%] {\n    background: #1858ae;\n    border: none;\n}\n.text-btn[_ngcontent-%COMP%]:hover{background:#2f54a5;}\n\n\n.country-flg[_ngcontent-%COMP%] {\n    text-align: center;\n    background: #eeeeee;\n    border-radius: 5px;\n}\n.country-flg.mx-auto.my-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 32px;\n    padding:4px 0px;\n    color: #000;\n    font-size: 10px;\n}\n\n\n.form-outer[_ngcontent-%COMP%] {\n    height: 447px;\n    background: #fff;\n    border: 1px solid #fff;\n    padding: 20px;\n    width: 75%;\n    margin: auto;\n    text-align: center;\n    position: relative;\n}\nform.form-outer[_ngcontent-%COMP%]   .form-style1[_ngcontent-%COMP%] {\n    border: 2px solid #2699fb; padding-left: 44px; height:48px; border-radius: .25rem;width:330px;outline:none;\n}\ninput.form-style1[_ngcontent-%COMP%]:focus-visible {\n    border-color: #2699fb !important;\n}\ninput.form-style1[_ngcontent-%COMP%]:active {\n    border-color: #2699fb !important;\n}\n.heading-signup[_ngcontent-%COMP%]{color:#2699fb;}\n.sky-btn[_ngcontent-%COMP%]{    \n    background: #2699fb;\n    font-size: 16px;\n    border: 0px; height: 40px;\n}\n.sky-btn-pad[_ngcontent-%COMP%]{ margin-top:160px; margin-bottom: 20px;}\n.text-form[_ngcontent-%COMP%]{\nfont-size: 14px; color:#919191;}\n.form-control-search[_ngcontent-%COMP%] {\n        position: absolute;\n        z-index: 2;\n        display: block;\n        width: 20px;\n        height: 20px;\n        line-height:45px;\n        text-align: center;\n        pointer-events: none;\n        color: #4e63bc;\n        left:8px;\n    }\n\n\n.text-form1[_ngcontent-%COMP%]{\n    font-size: 12px;\n    padding:10px 20px; color:#919191;}\ninput.form-control.form-style4[_ngcontent-%COMP%] {\n    border: 0px;\n    border-bottom: 1px solid #bfbfbf;\n    border-radius: 0;\n    color: #d1d2d4;\n    padding-left: 4px;\n}\nspan.form-control-search1[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 4px;\n    bottom: 6px;\n    color: #adadad;\n    font-size: 19px;\n}\n.form-outer[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n\n.form-group.form-group-style[_ngcontent-%COMP%]{display: flex;}\n.form-group.form-group-style[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: 0px;\n    border-bottom: 3px solid #2699fb;\n    border-radius: 0px;\n    margin: 0px 12px;\n    text-align: center;\n    font-size: 25px;\n}\n\n\n.form-ht-style[_ngcontent-%COMP%]{height: auto !important;}\n\n\n.tab-cont-img[_ngcontent-%COMP%]{padding: 20px;}\n.tab-cont-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 200px;}\np.scan-text[_ngcontent-%COMP%]{color:#2f54a5; font-size: 24px;font-weight: 700;}\nnav.scan-code-style[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n    border: none;\n}\nnav.scan-code-style[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color: #767676; cursor: pointer;}\nnav.scan-code-style[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{   border: none; color:#2f54a5;}\nnav.scan-code-style[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%], nav.scan-code-style[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], nav.scan-code-style[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover{   \n    font-size: 20px;\n    font-weight: 800;    \n    border: none;\n}\nform.form-outer[_ngcontent-%COMP%]   .form-style-login[_ngcontent-%COMP%] {\n    border: 2px solid #bfbfbf;\n    height: 48px;\n}\n.style-login-padd[_ngcontent-%COMP%] {padding-left: 38px;}\nspan.eye-style[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 12px;\n    top: 10px;\n    font-size: 20px;\n    color: #adadad;\n}\n.text-form2[_ngcontent-%COMP%]{font-size:18px; text-align:left;}\n.text-form2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#b4b4b5;}\n\n.btn-user[_ngcontent-%COMP%]{   \n    font-size: 22px;\n    color:#fff;\n    padding: 0px;\n}\n.btn-user.btn.focus[_ngcontent-%COMP%], .btn-user.btn[_ngcontent-%COMP%]:focus{box-shadow: none;}\n.btn-user[_ngcontent-%COMP%]:hover{color:#fff;}\n.user-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 30px;}\n.login-sign[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%] {\n    background: transparent;\n    color: #fff;    border: none;\n}\n.login-sign[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {color: #fff; padding:5px;}\n.login-sign[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{color:#fff; background-color: transparent;}\n.login-sign[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], .login-sign[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active{  background: transparent;}\n\n.footer-sec1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70px;\n    width: 70px;\n}\n.footer-sec1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;    padding: 0px 38px;\n}\n.footer-sec1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0px;\n}\n.footer-sec1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #2699fb;\n    font-weight: 800;\n    text-transform: uppercase;\n    font-size: 20px;\n}\n.has-search[_ngcontent-%COMP%]   .form-control-map[_ngcontent-%COMP%]{background: #fff; height:45px; padding-left: 140px; border: 1px solid #2699fb;width: 490px;}\nselect.form-select-map[_ngcontent-%COMP%]{\n    background: #2699fb;\n    color:#fff;\n    height:45px;\n    padding-left: 5px;\n    position: absolute;\n    text-transform: uppercase;\n    border-color: transparent;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\nselect.form-select-map[_ngcontent-%COMP%]:focus{border-color: transparent !important;}\n.has-search-map[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%]{padding-left: 81px; line-height:49px; font-size:21px; color: #2799fa;}\n.sort-filter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #2799fa;\n        font-weight: 500;\n        font-size: 18px;\n        text-decoration: underline;}\n.sort-filter[_ngcontent-%COMP%] {\n    text-align:right; padding-top: 5px; padding-left: 48px;\n}\n.sort-filter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n    padding-right:0px;\n}\n.sitemap1[_ngcontent-%COMP%]   .left-menu[_ngcontent-%COMP%]{background: rgb(38 153 251);}\n.footer-sec2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70px; width:568px;\n}\n.footer-sec1[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 0 auto; z-index:2;\n}\n.login-sign-map[_ngcontent-%COMP%]   .btn-user[_ngcontent-%COMP%]{color:#2799fa;}\n.login-sign-map.dropdown-item[_ngcontent-%COMP%]{color:#2799fa;}\n.login-sign-map.dropdown-item[_ngcontent-%COMP%]:hover{color:#2799fa;}\n.sale-outer[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n    border-bottom:0px !important; background: #2699fb;\n    color: #fff;\n    border-radius: 4px;height: 45px;\n}\n.sale-outer[_ngcontent-%COMP%] {margin: 0px -16px 0px 30px;\n    \n}\n.top-outer-map[_ngcontent-%COMP%]{\n    width: 100%;\n    position: relative;\n}\n.login-sign-map[_ngcontent-%COMP%] {\n    text-align: right;\n    position: absolute;\n    \n}\n.login-sign-map[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{right: 0px !important; left:-40px !important; float: right;}\n.sale-outer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%]{color:#2799fa; border: 1px solid #2699fb; border-radius: 4px;height: 45px;}\n.sale-outer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]{color:#fff;height: 45px;}\nhtml.sitemap2[_ngcontent-%COMP%] {background: transparent;}\n.sitemap2[_ngcontent-%COMP%]   .left-menu[_ngcontent-%COMP%]{background: rgb(38 153 251);}\n\n\n.outer-list1[_ngcontent-%COMP%] {\n    background: url(/assets/images/h1.jpg); position: relative;\n    width: 100%; height: 200px;background-position: center;\n}\n.outer-list21[_ngcontent-%COMP%] { background: url(/assets/images/h3.jpg);background-position: center;height: 200px;\n}\n.outer-list33[_ngcontent-%COMP%] { background: url(/assets/images/h4.jpg);background-position: center;height: 200px;\n}\n.outer-list5[_ngcontent-%COMP%]{ background: url(/assets/images/h5.jpg);background-position: center;height: 200px;\n}\n.outer-list44[_ngcontent-%COMP%] { background: url(/assets/images/h6.jpg);background-position: center;height: 200px;\n}\n.outer-list14[_ngcontent-%COMP%] { background: url(/assets/images/h7.jpg);background-position: center;height: 200px;\n}\n.inner-list-style1[_ngcontent-%COMP%] {\n    background: #eee;\n}\n.inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n}\n.outer-map-list[_ngcontent-%COMP%] {\n    padding:32px 0px 32px 150px;\n}\n.inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #2799fa;\n    font-weight: 700;\n    font-size: 12px;\n    display: inline-block;\n    position: absolute;\n}\n.inner-list-style1[_ngcontent-%COMP%] {\n    background: #e3e3e3;\n    width: 100%; \n    position: relative;\n    height: 45px;\n}\n.sale-div[_ngcontent-%COMP%] {\n    height: 30px;\n    background: rgba(16,192,125,0.8);\n    width: 120px;\n    padding: 5px 8px;\n}\n.inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n    right: 4px;\n    top: 10px;\n}\n.inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    top: 14px;\n    left: 3px;\n}\n.sale-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    color: #fff;\n    font-weight: 500;font-size: 14px;\n}\n.amout-div[_ngcontent-%COMP%] {\n    background: rgba(23,151,222,0.8);\n    width: 120px;\n    color: #fff;\n    padding: 4px 7px;\n    font-weight: 500; font-size: 14px;\n}\n.outer-list2-inner[_ngcontent-%COMP%] {\n    \n    background: #1797de;\n    width: 100%;\n    bottom: 0px;\n    font-size: 10px;\n    color: #fff;\n    align-items: center;\n}\n.outer-list2-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    padding: 1px;\n}\n.cart-img[_ngcontent-%COMP%] {\n    width: 28px !important;}\n.outer-list2-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        margin-bottom: 0px; padding-left: 2px;\n    }\n.outer-list2[_ngcontent-%COMP%] {\n        width: 100%;\n        position: relative;\n    }\n.outer-list3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n.outer-list3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        width: 25%; margin-bottom: 0;\n    }\n.outer-list4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 12px;\n        font-weight: 500;\n        padding-right: 7px;\n        color:#2699fb;\n    }\n.outer-list4-inner-lt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        color: #1797de;\n        font-weight: 700;\n        font-size: 12px;\n        padding-left: 10px;\n        margin-bottom: 1px;\n    }\n.outer-list4-inner-lt[_ngcontent-%COMP%] {\n        padding-top: 5px;\n    }\n.heart-img-sty[_ngcontent-%COMP%] {width:16px;}\nspan.heart-text-style[_ngcontent-%COMP%] {\n    font-size: 14px;\n    text-align: center; width: 50%;\n}\n.chat-img-sty[_ngcontent-%COMP%]{width:20px;}\n.outer-list4[_ngcontent-%COMP%] {\n        width: 100%; background: #e3e3e3; padding:2px;}\n.outer-list3[_ngcontent-%COMP%] {\n    width: 100%;\n    display: -webkit-inline-box;\n    overflow-x: scroll;\n}\n.outer-list3[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;}\n.outer-list3[_ngcontent-%COMP%] {\n        -ms-overflow-style: none;  \n        scrollbar-width: none;  \n      }\n.outer-list[_ngcontent-%COMP%] {\n    margin-bottom: 28px;\n}\nspan.mike-style[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 12px;\n    bottom:4px;\n    font-size: 24px;\n    color: #2699fb;\n}\n.form-group.has-search-map[_ngcontent-%COMP%] {\n    position: relative; margin-bottom: 0px;\n}\n\n.logo-map[_ngcontent-%COMP%] {border: 0px; background: #2f54a5;    margin-bottom: 45px;\n    \n}\n.margin-top-sty[_ngcontent-%COMP%]{margin-top: 18%;}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 34px;}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        padding-left: 9px;\n    }\n.right-side-detail[_ngcontent-%COMP%] {\n        position: absolute;\n        width: 210px;\n        right: 0;\n        top: 100px;\n        height: 720px;\n}\n\n.summry-text-style[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 11px;\n        text-align: justify;\n        font-weight: 600;    margin-bottom: 5px;\n    }\n.heading-style[_ngcontent-%COMP%] {\n        text-transform: uppercase;\n        font-size: 18px;\n        font-weight: 700;\n        color: #fff;\n        margin-bottom: 5px;    margin-top: 6px;\n    }\n.outer-inner-agent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 13px; margin-bottom: auto;\n    }\n.outer-inner-agent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        padding-right: 8px;\n    }\n.property-type-style[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 14px;\n        margin-bottom: auto;\n    }\n.summry-cale-style[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 12px;\n        margin-bottom: 5px; }\n.school-accordian[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:0px;background: transparent; color:#fff;}\n.school-accordian[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding:0px 0px 6px 0px;\n    border-bottom: 1px solid rgba(255,255,255,.4);margin-bottom: 10px;\n    background-color: transparent;}\n.school-accordian[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff; font-size: 14px; font-weight: 500;}\n.school-accordian[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 4px;\n    font-size: smaller;}\n\np.left-outer-list2[_ngcontent-%COMP%] {\n    width: 10%;\n    text-align: left;\n    padding-left: 5px;\n}\np.center-outer-list2[_ngcontent-%COMP%] {\n    width: 80%;\n    text-align: center;\n}\np.right-outer-list2[_ngcontent-%COMP%]:last-child {\n    width: 10%;\n    margin-right: 4px;\n}\n.page-style[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{border:0px !important;}\n.bg-img1-map[_ngcontent-%COMP%]{padding: 5px 0px 5px 50px;height:105px;\n    background: #e3e3e3;}\n.bg-img2-map[_ngcontent-%COMP%] {\n        padding: 5px 0px 5px 50px;\n        background:transparent; \n    }\n\n.right-side-map-img[_ngcontent-%COMP%] {\n        width: 100%; height: 675px;\n    }\n.burger-menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\n{\n    width: 45px;\n    padding-top: 5px;\n}\nimg.close-style[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 16px;\n    top: 10px;\n}\nul.google-map-sty1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    list-style: none; padding: 0px 10px;\n}\nul.google-map-sty1[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom: 10px;\n    left: 10%;\n    margin-left: -10px;}\nul.google-map-sty1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;}\n.outer-map-list1[_ngcontent-%COMP%] {\n        padding: 32px 0px 32px 22px;\n    }\n.row.map-right-scroll[_ngcontent-%COMP%] {\n        overflow-y: scroll;\n        height: 600px; }\n.map-right-scroll[_ngcontent-%COMP%]   .outer-list[_ngcontent-%COMP%]{margin-bottom: 15px; box-shadow: 1px 1px 3px 0px #1797de;}\n.row.map-right-scroll[_ngcontent-%COMP%] {\n    scrollbar-face-color: #367CD2;\n    scrollbar-shadow-color: #FFFFFF;\n    scrollbar-highlight-color: #FFFFFF;\n    scrollbar-3dlight-color: #FFFFFF;\n    scrollbar-darkshadow-color: #FFFFFF;\n    scrollbar-track-color: #FFFFFF;\n    scrollbar-arrow-color: #FFFFFF;\n  }\n\n.row.map-right-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 14px;\n  }\n\n.row.map-right-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    \n    border-radius: 1px;background: #fff; border:1px solid #2699fb;\n  }\n\n.row.map-right-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    border-radius: 1px;\n    background: rgba(38,153,253, 0.8);\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  }\n\n.outer-list-right[_ngcontent-%COMP%]{\n    width: 30%;\n    display: block;\n    height:500px;\n}\n.outer-left-banner[_ngcontent-%COMP%] {\n    width: 70%;\n}\n.outer-list-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;height: 125px;\n}\n.outer-list-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n}\n.outer-left-banner[_ngcontent-%COMP%]   .inner-list-style1[_ngcontent-%COMP%]{background: #2699fb;}\n.outer-left-banner[_ngcontent-%COMP%]   .inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color: #fff;}\n.outer-left-banner[_ngcontent-%COMP%]   .outer-list1[_ngcontent-%COMP%]{height: 500px;}\n.outer-left-banner[_ngcontent-%COMP%]   .outer-list2-inner[_ngcontent-%COMP%] {\n    position: absolute;\n    background: #1797de;\n    width: 100%;\n    bottom: 0px;\n    font-size: 16px;\n    color: #fff;\n    height: 52px;\n    align-items: center;\n    font-weight: 600;\n}\n.outer-left-banner[_ngcontent-%COMP%]   .outer-list2-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40px;\n    padding: 3px;\n}\n.sale-outer[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{\n    width: 72px;}\n.prop-detail-right[_ngcontent-%COMP%]{background: #2699fb; color:#fff;}\n.school-accordian.card[_ngcontent-%COMP%]{background: transparent;}\n.summary-map[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%; height: 300px;\n}\n.outer-inner-agent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color: #fff;}\n.danger-color-msg[_ngcontent-%COMP%]{\n    background: #f8d7da;\n}\n.login-sign[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.scan-login-input[_ngcontent-%COMP%]{\n    width: 363px !important;\n    border: 2px solid #bfbfbf !important;\n}\n/*# sourceMappingURL=data:application/json;base64,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LENBQUM7QUFDL0M7SUFDSSxXQUFXLEVBQUUsYUFBYTtBQUM5QjtBQUNBLDRCQUE0QixXQUFXLENBQUM7QUFFeEM7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4gXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gXG5ib2R5e2ZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgZm9udC13ZWlnaHQ6IDMwMDtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgaGVpZ2h0OjEwMCU7fVxuIFxuaHRtbCB7IFxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9XZWJzaXRlLWJhc2UtaW1hZ2UuanBnKSBuby1yZXBlYXQgdG9wIGZpeGVkOyBcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIGh0bWwuc2l0ZW1hcDF7IGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9tYXAxLnBuZykgbm8tcmVwZWF0IGNlbnRlciBmaXhlZDsgXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTt9XG4gXG4gXG4uYmctaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7bWluLWhlaWdodDogMTAwJTtcbn0gXG4uYmctaW1nMSB7IG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbn0gXG4gXG4jY29sb3Itb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ3LDg0LDE2NSw1MCUpO1xuICAgIC8qIG9wYWNpdHk6IDAuNjsgKi9cbiB9XG4gLmZvb3Rlcnt6LWluZGV4OiAyMjt9XG4gLmZvb3RlciAgYSB7XG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50OyBwYWRkaW5nOjBweCAxMnB4O1xuICAgICBmb250LXNpemU6IDE4cHg7XG4gfVxuIC5yb3cuZm9vdGVyLXN0eWxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBoZWlnaHQ6IDcwcHg7XG4gIH1cbiBcbi50ZXh0LXdoaXRle2NvbG9yOiNmZmY7fVxuLmZvbnQtc3R5bGV7Zm9udC1zaXplOjIwcHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO31cbiBcbiBcbiBcbi8qd2Vic2l0ZSBob21lIDEgaHRtbCBzdGFydCovXG4ubG9nbyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5sb2dpbi1zaWdueyAgIFxuICAgIHdpZHRoOiA0MCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7fVxuLmxvZ28xe3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZDFkMmQ0O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMHB4IDdweDtcbiAgICBoZWlnaHQ6IDEwNXB4OyAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OjY3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiAjNGU2M2JjO1xuICAgIGxlZnQ6IDMwcHg7XG59XG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nLWxlZnQ6MzhweDtcbn1cbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xuICAgICBib3JkZXI6IDJweCBzb2xpZCAjMmY1NGE1O1xuICAgIHBhZGRpbmctbGVmdDogMzdweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOSwyMTAsMjEyLDAuOCk7XG4gICAgaGVpZ2h0OiA2NnB4O1xuICAgIGNvbG9yOiAjMmY1NGE1O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxudWwubGlzdC1zZWN0IGxpIHtcbiAgICB3aWR0aDogMTI4cHg7XG4gICAgaGVpZ2h0OiAgMTI4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZjU0YTU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOSwyMTAsMjEyLDAuODIpO1xuICAgIG1hcmdpbjoxcHg7XG59XG51bC5saXN0LXNlY3QgbGkgcCB7XG4gICAgcGFkZGluZzogNXB4IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIGZvbnQtd2VpZ2h0OjUwMDtcbn1cbnVsLmxpc3Qtc2VjdCBsaSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbnVsLmxpc3Qtc2VjdCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O3RleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sZWZ0LW1lbnUge1xuICAgIGJhY2tncm91bmQ6cmdiYSg0Nyw4NCwxNjUsNzUlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDE2MnB4O1xuICAgIGJvdHRvbTogMDtib3gtc2hhZG93OiAwcHggNXB4IDJweCAjYTJhMmEyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmxlZnQtbWVudSB1bHtwYWRkaW5nOiAwO31cbi5sZWZ0LW1lbnUgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgLyogcGFkZGluZzoxNHB4OyAqL1xuICAgIHBhZGRpbmctbGVmdDogMTRweDtcbiAgICBwYWRkaW5nLWJvdHRvbToyMnB4O1xufVxuLmxlZnQtbWVudSB1bCBsaSBhIHtcbiAgICBjb2xvcjogI2ZmZjsgICAgZm9udC1zaXplOiAxOHB4O1xufVxuIFxuLmFwcHN0b3JlLWxpbmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNDBweDtcbiAgICBib3R0b206IDg4cHg7IHdpZHRoOiAyMjdweDsgICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFwcHN0b3JlLWxpbmsgaW5wdXQsIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOjBweCAxMXB4O1xufVxuLmFwcC1zdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4gXG4uYXBwc3RvcmUtbGluayBpbnB1dHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4OyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O31cbi5hcHBzdG9yZS1saW5rIC5idG4tdGV4dHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7IGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MHB4OyBsaW5lLWhlaWdodDo4cHg7fVxuLm1vYmlsZS13ZWIgaW1nIHtcbiAgICB3aWR0aDozNSU7XG59XG4uYXBwLXN0IGEgaW1nIHtcbiAgICB3aWR0aDogOTglO1xufVxuLm5hdi1saW5rLmFjdGl2ZXtib3JkZXItYm90dG9tOiAwcHg7Y29sb3I6Izc2NzY3Njt9XG4gXG4udGV4dC1idG4ge1xuICAgIGJhY2tncm91bmQ6ICMxODU4YWU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLnRleHQtYnRuOmhvdmVye2JhY2tncm91bmQ6IzJmNTRhNTt9XG4gXG4vKndlYnNpdGUgaG9tZSAxIGh0bWwgZW5kKi9cbiBcbiBcbiBcbi8qd2Vic2l0ZS1ob21lMiBzdGFydCovXG4uY291bnRyeS1mbGcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn0gICAgXG4uY291bnRyeS1mbGcubXgtYXV0by5teS1hdXRvIHVsIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgcGFkZGluZzo0cHggMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi8qd2Vic2l0ZS1ob21lMiBlbmQqL1xuIFxuLyp3ZWJzaXRlLXNpbnVwLTEgc3RhcnQqL1xuIFxuLmZvcm0tb3V0ZXIge1xuICAgIGhlaWdodDogNDQ3cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmZvcm0uZm9ybS1vdXRlciAuZm9ybS1zdHlsZTEge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNjk5ZmI7IHBhZGRpbmctbGVmdDogNDRweDsgaGVpZ2h0OjQ4cHg7IGJvcmRlci1yYWRpdXM6IC4yNXJlbTt3aWR0aDozMzBweDtvdXRsaW5lOm5vbmU7XG59XG5pbnB1dC5mb3JtLXN0eWxlMTpmb2N1cy12aXNpYmxlIHtcbiAgICBib3JkZXItY29sb3I6ICMyNjk5ZmIgIWltcG9ydGFudDtcbn1cbmlucHV0LmZvcm0tc3R5bGUxOmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjY5OWZiICFpbXBvcnRhbnQ7XG59XG4uaGVhZGluZy1zaWdudXB7Y29sb3I6IzI2OTlmYjt9XG4uc2t5LWJ0bnsgICAgXG4gICAgYmFja2dyb3VuZDogIzI2OTlmYjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyOiAwcHg7IGhlaWdodDogNDBweDtcbn1cbi5za3ktYnRuLXBhZHsgbWFyZ2luLXRvcDoxNjBweDsgbWFyZ2luLWJvdHRvbTogMjBweDt9XG4udGV4dC1mb3Jte1xuZm9udC1zaXplOiAxNHB4OyBjb2xvcjojOTE5MTkxO31cbi5mb3JtLWNvbnRyb2wtc2VhcmNoIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6NDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY29sb3I6ICM0ZTYzYmM7XG4gICAgICAgIGxlZnQ6OHB4O1xuICAgIH1cbi8qd2Vic2l0ZS1zaWduIHVwICBlbmQqL1xuIFxuLyp3ZWJzaXRlLXNpbnVwLTQgc3RhcnQqL1xuLnRleHQtZm9ybTF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6MTBweCAyMHB4OyBjb2xvcjojOTE5MTkxO31cbmlucHV0LmZvcm0tY29udHJvbC5mb3JtLXN0eWxlNCB7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJmYmY7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBjb2xvcjogI2QxZDJkNDtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbnNwYW4uZm9ybS1jb250cm9sLXNlYXJjaDEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNHB4O1xuICAgIGJvdHRvbTogNnB4O1xuICAgIGNvbG9yOiAjYWRhZGFkO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbn1cbi5mb3JtLW91dGVyIC5mb3JtLWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4gXG4vKndlYnNpdGUtc2lnbnVwLTQgIGVuZCovXG4gXG4vKndlYnNpdGUtc2ludXAtNiBzdGFydCovXG4uZm9ybS1ncm91cC5mb3JtLWdyb3VwLXN0eWxle2Rpc3BsYXk6IGZsZXg7fVxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1zdHlsZSBpbnB1dCB7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMyNjk5ZmI7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1hcmdpbjogMHB4IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cbi8qd2Vic2l0ZS1zaW51cC02IGVuZCovXG4gXG4vKndlYnNpdGUtc2ludXAtOCBzdGFydCovXG4uZm9ybS1odC1zdHlsZXtoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDt9XG4vKndlYnNpdGUtc2ludXAtOCBlbmQqL1xuIFxuLyp3ZWJzaXRlLWxvZ2luKi9cbi50YWItY29udC1pbWd7cGFkZGluZzogMjBweDt9XG4udGFiLWNvbnQtaW1nIGltZ3t3aWR0aDogMjAwcHg7fVxucC5zY2FuLXRleHR7Y29sb3I6IzJmNTRhNTsgZm9udC1zaXplOiAyNHB4O2ZvbnQtd2VpZ2h0OiA3MDA7fVxubmF2LnNjYW4tY29kZS1zdHlsZSAubmF2LXRhYnMge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbm5hdi5zY2FuLWNvZGUtc3R5bGUgLm5hdi10YWJzIC5uYXYtbGlua3tjb2xvcjogIzc2NzY3NjsgY3Vyc29yOiBwb2ludGVyO31cbm5hdi5zY2FuLWNvZGUtc3R5bGUgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7ICAgYm9yZGVyOiBub25lOyBjb2xvcjojMmY1NGE1O31cbm5hdi5zY2FuLWNvZGUtc3R5bGUgLm5hdi10YWJzLG5hdi5zY2FuLWNvZGUtc3R5bGUgLm5hdi1saW5rLCBuYXYuc2Nhbi1jb2RlLXN0eWxlIC5uYXYtbGluay5hY3RpdmU6aG92ZXJ7ICAgXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7ICAgIFxuICAgIGJvcmRlcjogbm9uZTtcbn1cbmZvcm0uZm9ybS1vdXRlciAuZm9ybS1zdHlsZS1sb2dpbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2JmYmZiZjtcbiAgICBoZWlnaHQ6IDQ4cHg7XG59XG4uc3R5bGUtbG9naW4tcGFkZCB7cGFkZGluZy1sZWZ0OiAzOHB4O31cbnNwYW4uZXllLXN0eWxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEycHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2FkYWRhZDtcbn1cbi50ZXh0LWZvcm0ye2ZvbnQtc2l6ZToxOHB4OyB0ZXh0LWFsaWduOmxlZnQ7fVxuLnRleHQtZm9ybTIgYXtjb2xvcjojYjRiNGI1O31cbi8qd2Vic2l0ZS1sb2dpbiBlbmQqLyAgXG4uYnRuLXVzZXJ7ICAgXG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzogMHB4O1xufSAgICBcbi5idG4tdXNlci5idG4uZm9jdXMsIC5idG4tdXNlci5idG46Zm9jdXN7Ym94LXNoYWRvdzogbm9uZTt9XG4uYnRuLXVzZXI6aG92ZXJ7Y29sb3I6I2ZmZjt9XG4udXNlci1pbWcgaW1ne3dpZHRoOiAzMHB4O31cbi5sb2dpbi1zaWduIC5kcm9wZG93bi1tZW51LnNob3cge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmZmOyAgICBib3JkZXI6IG5vbmU7XG59XG4ubG9naW4tc2lnbiAuZHJvcGRvd24taXRlbSB7Y29sb3I6ICNmZmY7IHBhZGRpbmc6NXB4O31cbi5sb2dpbi1zaWduIC5kcm9wZG93bi1pdGVtOmhvdmVye2NvbG9yOiNmZmY7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O31cbi5sb2dpbi1zaWduIC5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgLmxvZ2luLXNpZ24gLmRyb3Bkb3duLWl0ZW06YWN0aXZleyAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxuIFxuLyptYXAgcmVhbHR5MSovXG4uZm9vdGVyLXNlYzEgdWwgbGkgYSBpbWcge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbn1cbi5mb290ZXItc2VjMSB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTsgICAgcGFkZGluZzogMHB4IDM4cHg7XG59XG4uZm9vdGVyLXNlYzEgdWwge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLmZvb3Rlci1zZWMxIHVsIGxpIHNwYW4ge1xuICAgIGNvbG9yOiAjMjY5OWZiO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLW1hcHtiYWNrZ3JvdW5kOiAjZmZmOyBoZWlnaHQ6NDVweDsgcGFkZGluZy1sZWZ0OiAxNDBweDsgYm9yZGVyOiAxcHggc29saWQgIzI2OTlmYjt3aWR0aDogNDkwcHg7fVxuc2VsZWN0LmZvcm0tc2VsZWN0LW1hcHtcbiAgICBiYWNrZ3JvdW5kOiAjMjY5OWZiO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgaGVpZ2h0OjQ1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xufVxuc2VsZWN0LmZvcm0tc2VsZWN0LW1hcDpmb2N1c3tib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7fVxuLmhhcy1zZWFyY2gtbWFwIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7cGFkZGluZy1sZWZ0OiA4MXB4OyBsaW5lLWhlaWdodDo0OXB4OyBmb250LXNpemU6MjFweDsgY29sb3I6ICMyNzk5ZmE7fVxuLnNvcnQtZmlsdGVyIGEge1xuICAgICAgICBjb2xvcjogIzI3OTlmYTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XG4uc29ydC1maWx0ZXIge1xuICAgIHRleHQtYWxpZ246cmlnaHQ7IHBhZGRpbmctdG9wOiA1cHg7IHBhZGRpbmctbGVmdDogNDhweDtcbn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuIFxuLnNvcnQtZmlsdGVyIGE6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctcmlnaHQ6MHB4O1xufVxuIFxuLnNpdGVtYXAxIC5sZWZ0LW1lbnV7YmFja2dyb3VuZDogcmdiKDM4IDE1MyAyNTEpO31cbi5mb290ZXItc2VjMiBhIGltZyB7XG4gICAgaGVpZ2h0OiA3MHB4OyB3aWR0aDo1NjhweDtcbn1cbi5mb290ZXItc2VjMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvOyB6LWluZGV4OjI7XG59XG4ubG9naW4tc2lnbi1tYXAgLmJ0bi11c2Vye2NvbG9yOiMyNzk5ZmE7fVxuLmxvZ2luLXNpZ24tbWFwLmRyb3Bkb3duLWl0ZW17Y29sb3I6IzI3OTlmYTt9XG4ubG9naW4tc2lnbi1tYXAuZHJvcGRvd24taXRlbTpob3Zlcntjb2xvcjojMjc5OWZhO31cbi5zYWxlLW91dGVyIC5uYXYtdGFicyB7XG4gICAgYm9yZGVyLWJvdHRvbTowcHggIWltcG9ydGFudDsgYmFja2dyb3VuZDogIzI2OTlmYjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7aGVpZ2h0OiA0NXB4O1xufVxuLnNhbGUtb3V0ZXIge21hcmdpbjogMHB4IC0xNnB4IDBweCAzMHB4O1xuICAgIC8qIG1hcmdpbjogMHB4IDY4cHg7ICovXG59XG4udG9wLW91dGVyLW1hcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9naW4tc2lnbi1tYXAge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiByaWdodDogLTYwcHg7ICovXG59XG4ubG9naW4tc2lnbi1tYXAgLmRyb3Bkb3duLW1lbnV7cmlnaHQ6IDBweCAhaW1wb3J0YW50OyBsZWZ0Oi00MHB4ICFpbXBvcnRhbnQ7IGZsb2F0OiByaWdodDt9XG4uc2FsZS1vdXRlciB1bCBsaSBhLm5hdi1saW5rLmFjdGl2ZXtjb2xvcjojMjc5OWZhOyBib3JkZXI6IDFweCBzb2xpZCAjMjY5OWZiOyBib3JkZXItcmFkaXVzOiA0cHg7aGVpZ2h0OiA0NXB4O31cbi5zYWxlLW91dGVyIHVsIGxpIGEubmF2LWxpbmt7Y29sb3I6I2ZmZjtoZWlnaHQ6IDQ1cHg7fVxuIFxuaHRtbC5zaXRlbWFwMiB7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxuLnNpdGVtYXAyIC5sZWZ0LW1lbnV7YmFja2dyb3VuZDogcmdiKDM4IDE1MyAyNTEpO31cbiAgLyptYXAgcmVhbHR5MSovXG4gXG4gLyptYXAgcmVhbHR5MiovXG4gIC5vdXRlci1saXN0MSB7XG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2gxLmpwZyk7IHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAyMDBweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ub3V0ZXItbGlzdDIxIHsgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2gzLmpwZyk7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2hlaWdodDogMjAwcHg7XG59XG4ub3V0ZXItbGlzdDMzIHsgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2g0LmpwZyk7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2hlaWdodDogMjAwcHg7XG59XG4ub3V0ZXItbGlzdDV7IGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9oNS5qcGcpO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtoZWlnaHQ6IDIwMHB4O1xufVxuLm91dGVyLWxpc3Q0NCB7IGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9oNi5qcGcpO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtoZWlnaHQ6IDIwMHB4O1xufVxuLm91dGVyLWxpc3QxNCB7IGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9oNy5qcGcpO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtoZWlnaHQ6IDIwMHB4O1xufVxuLmlubmVyLWxpc3Qtc3R5bGUxIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuLmlubmVyLWxpc3Qtc3R5bGUxIHAgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbn1cbi5vdXRlci1tYXAtbGlzdCB7XG4gICAgcGFkZGluZzozMnB4IDBweCAzMnB4IDE1MHB4O1xufVxuLmlubmVyLWxpc3Qtc3R5bGUxIHAge1xuICAgIGNvbG9yOiAjMjc5OWZhO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaW5uZXItbGlzdC1zdHlsZTEge1xuICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG4uc2FsZS1kaXYge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE5MiwxMjUsMC44KTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbn1cbi5pbm5lci1saXN0LXN0eWxlMSBwOmxhc3QtY2hpbGQge1xuICAgIHJpZ2h0OiA0cHg7XG4gICAgdG9wOiAxMHB4O1xufVxuLmlubmVyLWxpc3Qtc3R5bGUxIHA6Zmlyc3QtY2hpbGQge1xuICAgIHRvcDogMTRweDtcbiAgICBsZWZ0OiAzcHg7XG59XG4uc2FsZS1kaXYgc3BhbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO2ZvbnQtc2l6ZTogMTRweDtcbn1cbiBcbi5hbW91dC1kaXYge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMsMTUxLDIyMiwwLjgpO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA0cHggN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IGZvbnQtc2l6ZTogMTRweDtcbn1cbi5vdXRlci1saXN0Mi1pbm5lciB7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICAgIGJhY2tncm91bmQ6ICMxNzk3ZGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub3V0ZXItbGlzdDItaW5uZXIgcCBhIGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgcGFkZGluZzogMXB4O1xufVxuLmNhcnQtaW1nIHtcbiAgICB3aWR0aDogMjhweCAhaW1wb3J0YW50O31cbiBcbi5vdXRlci1saXN0Mi1pbm5lciBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4OyBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICB9XG4ub3V0ZXItbGlzdDIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbi5vdXRlci1saXN0MyBwIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbi5vdXRlci1saXN0MyBwe1xuICAgICAgICB3aWR0aDogMjUlOyBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbi5vdXRlci1saXN0NCBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gICAgICAgIGNvbG9yOiMyNjk5ZmI7XG4gICAgfVxuLm91dGVyLWxpc3Q0LWlubmVyLWx0IHAge1xuICAgICAgICBjb2xvcjogIzE3OTdkZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgICB9XG4gICAgLm91dGVyLWxpc3Q0LWlubmVyLWx0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG4uaGVhcnQtaW1nLXN0eSB7d2lkdGg6MTZweDt9XG5zcGFuLmhlYXJ0LXRleHQtc3R5bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IHdpZHRoOiA1MCU7XG59XG4uY2hhdC1pbWctc3R5e3dpZHRoOjIwcHg7fVxuLm91dGVyLWxpc3Q0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6ICNlM2UzZTM7IHBhZGRpbmc6MnB4O31cbi5vdXRlci1saXN0MyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbi5vdXRlci1saXN0Mzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7fVxuLm91dGVyLWxpc3QzIHtcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xuICAgICAgfVxuLm91dGVyLWxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5zcGFuLm1pa2Utc3R5bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTJweDtcbiAgICBib3R0b206NHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzI2OTlmYjtcbn1cbi5mb3JtLWdyb3VwLmhhcy1zZWFyY2gtbWFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbi1ib3R0b206IDBweDtcbn1cbiAvKiBtYXAgcmVhbHR5MiAqL1xuIFxuIC5sb2dvLW1hcCB7Ym9yZGVyOiAwcHg7IGJhY2tncm91bmQ6ICMyZjU0YTU7ICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgLyogYmFja2dyb3VuZDogIzJmNTRhNTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDBweCA3cHg7XG4gICAgYm9yZGVyOiAxLjhweCBzb2xpZCAjZWFlYWViOyAqL1xufVxuLm1hcmdpbi10b3Atc3R5e21hcmdpbi10b3A6IDE4JTt9XG4ubGVmdC1tZW51IHVsIGxpIGltZyB7XG4gICAgd2lkdGg6IDM0cHg7fVxuIC5sZWZ0LW1lbnUgdWwgbGkgYSBzcGFuIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA5cHg7XG4gICAgfVxuLnJpZ2h0LXNpZGUtZGV0YWlsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDcyMHB4O1xufVxuLyogLnJpZ2h0LXNpZGUtZGV0YWlsIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59ICovXG4uc3VtbXJ5LXRleHQtc3R5bGUgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbi5oZWFkaW5nLXN0eWxlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OyAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxuLm91dGVyLWlubmVyLWFnZW50IHAge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7IG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgfVxuLm91dGVyLWlubmVyLWFnZW50IHAgc3BhbiBpbWcge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgfVxuLnByb3BlcnR5LXR5cGUtc3R5bGUgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICB9XG4uc3VtbXJ5LWNhbGUtc3R5bGUgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XG4uc2Nob29sLWFjY29yZGlhbiAuY2FyZHtib3JkZXI6MHB4O2JhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjojZmZmO31cbi5zY2hvb2wtYWNjb3JkaWFuIC5jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzowcHggMHB4IDZweCAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjQpO21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7fVxuLnNjaG9vbC1hY2NvcmRpYW4gLmNhcmQtaGVhZGVyIGF7Y29sb3I6I2ZmZjsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNTAwO31cbi5zY2hvb2wtYWNjb3JkaWFuIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7fVxuIFxuLyogLmxlZnQtbWVudSB1bCBsaTpsYXN0LWNoaWxkIGEgaW1nIHtcbiAgICB3aWR0aDogMTAwJTsgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4OyAgICBsZWZ0OiAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAxMHB4O2JhY2tncm91bmQ6IzJmNTRhNTtcbn1cbi5sZWZ0LW1hcC1tZW51IHVsIGxpOmxhc3QtY2hpbGQgYSBpbWd7Ym9yZGVyOjBweDt9ICovXG4gXG5wLmxlZnQtb3V0ZXItbGlzdDIge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbnAuY2VudGVyLW91dGVyLWxpc3QyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnAucmlnaHQtb3V0ZXItbGlzdDI6bGFzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5wYWdlLXN0eWxlIC5wYWdlLWxpbmt7Ym9yZGVyOjBweCAhaW1wb3J0YW50O30gXG4gLmJnLWltZzEtbWFwe3BhZGRpbmc6IDVweCAwcHggNXB4IDUwcHg7aGVpZ2h0OjEwNXB4O1xuICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7fVxuLmJnLWltZzItbWFwIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweCA1cHggNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgXG4gICAgfVxuIFxuIFxuLyoxNSBhcHJpbCovXG4ucmlnaHQtc2lkZS1tYXAtaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IGhlaWdodDogNjc1cHg7XG4gICAgfVxuLmJ1cmdlci1tZW51IGltZ1xue1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5pbWcuY2xvc2Utc3R5bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTZweDtcbiAgICB0b3A6IDEwcHg7XG59XG51bC5nb29nbGUtbWFwLXN0eTEgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaXN0LXN0eWxlOiBub25lOyBwYWRkaW5nOiAwcHggMTBweDtcbn1cbnVsLmdvb2dsZS1tYXAtc3R5MXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7fVxudWwuZ29vZ2xlLW1hcC1zdHkxIGxpIGltZyB7XG4gICAgd2lkdGg6IDYwcHg7fVxuLm91dGVyLW1hcC1saXN0MSB7XG4gICAgICAgIHBhZGRpbmc6IDMycHggMHB4IDMycHggMjJweDtcbiAgICB9XG4ucm93Lm1hcC1yaWdodC1zY3JvbGwge1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIGhlaWdodDogNjAwcHg7IH1cbi5tYXAtcmlnaHQtc2Nyb2xsIC5vdXRlci1saXN0e21hcmdpbi1ib3R0b206IDE1cHg7IGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDBweCAjMTc5N2RlO31cbiBcbi5yb3cubWFwLXJpZ2h0LXNjcm9sbCB7XG4gICAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICMzNjdDRDI7XG4gICAgc2Nyb2xsYmFyLXNoYWRvdy1jb2xvcjogI0ZGRkZGRjtcbiAgICBzY3JvbGxiYXItaGlnaGxpZ2h0LWNvbG9yOiAjRkZGRkZGO1xuICAgIHNjcm9sbGJhci0zZGxpZ2h0LWNvbG9yOiAjRkZGRkZGO1xuICAgIHNjcm9sbGJhci1kYXJrc2hhZG93LWNvbG9yOiAjRkZGRkZGO1xuICAgIHNjcm9sbGJhci10cmFjay1jb2xvcjogI0ZGRkZGRjtcbiAgICBzY3JvbGxiYXItYXJyb3ctY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgXG4gIC8qc2Nyb2xsYmFyKi9cbiAgLnJvdy5tYXAtcmlnaHQtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDE0cHg7XG4gIH1cbiAgXG4gIC8qIFRyYWNrICovXG4gIC5yb3cubWFwLXJpZ2h0LXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC8qIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6MXB4IHNvbGlkICMyNjk5ZmI7XG4gIH1cbiAgXG4gIC8qIEhhbmRsZSAqL1xuICAucm93Lm1hcC1yaWdodC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzOCwxNTMsMjUzLCAwLjgpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIFxuICAvKiBkZXRhaWwgc2NyZWVuKi9cbiAgLm91dGVyLWxpc3QtcmlnaHR7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6NTAwcHg7XG59XG4ub3V0ZXItbGVmdC1iYW5uZXIge1xuICAgIHdpZHRoOiA3MCU7XG59XG4ub3V0ZXItbGlzdC1yaWdodCBwIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7aGVpZ2h0OiAxMjVweDtcbn1cbi5vdXRlci1saXN0LXJpZ2h0IHAge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5vdXRlci1sZWZ0LWJhbm5lciAuaW5uZXItbGlzdC1zdHlsZTF7YmFja2dyb3VuZDogIzI2OTlmYjt9XG4ub3V0ZXItbGVmdC1iYW5uZXIgLmlubmVyLWxpc3Qtc3R5bGUxIHB7Y29sb3I6ICNmZmY7fVxuLm91dGVyLWxlZnQtYmFubmVyIC5vdXRlci1saXN0MXtoZWlnaHQ6IDUwMHB4O31cbi5vdXRlci1sZWZ0LWJhbm5lciAub3V0ZXItbGlzdDItaW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMTc5N2RlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLm91dGVyLWxlZnQtYmFubmVyIC5vdXRlci1saXN0Mi1pbm5lciBwIGEgaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiAzcHg7XG59XG4uc2FsZS1vdXRlciAubmF2LXRhYnMgLm5hdi1pdGVte1xuICAgIHdpZHRoOiA3MnB4O31cbiBcbi5wcm9wLWRldGFpbC1yaWdodHtiYWNrZ3JvdW5kOiAjMjY5OWZiOyBjb2xvcjojZmZmO31cbi5zY2hvb2wtYWNjb3JkaWFuLmNhcmR7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxuLnN1bW1hcnktbWFwIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMzAwcHg7XG59XG4ub3V0ZXItaW5uZXItYWdlbnQgcCBzcGFuIGF7Y29sb3I6ICNmZmY7fVxuXG4uZGFuZ2VyLWNvbG9yLW1zZ3tcbiAgICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xufVxuLmxvZ2luLXNpZ24gYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNjYW4tbG9naW4taW5wdXR7XG4gICAgd2lkdGg6IDM2M3B4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2JmYmZiZiAhaW1wb3J0YW50O1xufVxuICJdfQ== */"]
      });
      /***/
    },

    /***/
    "IYfF":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/auth.service.ts ***!
      \*************************************************/

    /*! exports provided: AuthService */

    /***/
    function IYfF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthService = /*#__PURE__*/function () {
        function AuthService() {
          _classCallCheck(this, AuthService);
        }

        _createClass(AuthService, [{
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return this.getToken() !== null;
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
          }
        }, {
          key: "setToken",
          value: function setToken(token) {
            localStorage.setItem('smartietoken', token);
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('smartietoken');
          }
        }, {
          key: "setUserName",
          value: function setUserName(name) {
            localStorage.setItem('smartieusername', name);
          }
        }, {
          key: "getUserName",
          value: function getUserName() {
            return localStorage.getItem('smartieusername');
          }
        }, {
          key: "setUserProfileImg",
          value: function setUserProfileImg(img) {
            localStorage.setItem('smartieuserprofileimg', img);
          }
        }, {
          key: "getUserProfileImg",
          value: function getUserProfileImg() {
            return localStorage.getItem('smartieuserprofileimg');
          }
        }, {
          key: "setUserId",
          value: function setUserId(_id) {
            localStorage.setItem('smartieuserid', _id);
          }
        }, {
          key: "getUserId",
          value: function getUserId() {
            return localStorage.getItem('smartieuserid');
          }
        }, {
          key: "setSignupOTP",
          value: function setSignupOTP(otp) {
            localStorage.setItem('smartiesignupotp', otp);
          }
        }, {
          key: "getSignupOTP",
          value: function getSignupOTP() {
            return localStorage.getItem('smartiesignupotp');
          }
        }, {
          key: "removeSignupOTP",
          value: function removeSignupOTP() {
            localStorage.removeItem('smartiesignupotp');
          }
        }, {
          key: "setSignupToken",
          value: function setSignupToken(token) {
            localStorage.setItem('smartiesignuptoken', token);
          }
        }, {
          key: "getSignupToken",
          value: function getSignupToken() {
            return localStorage.getItem('smartiesignuptoken');
          }
        }, {
          key: "removeSignupToken",
          value: function removeSignupToken() {
            localStorage.removeItem('smartiesignuptoken');
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)();
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "LjFu":
    /*!*********************************************!*\
      !*** ./src/app/shared/guards/auth.guard.ts ***!
      \*********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function LjFu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            if (this.authService.isLoggedIn()) {
              return true;
            } else {
              this.router.navigate(['']);
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'SMARTWeb';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 11,
        vars: 0,
        consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"], ["rel", "preconnect", "href", "https://fonts.gstatic.com"], ["href", "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,300&display=swap", "rel", "stylesheet"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Smart Project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["html[_ngcontent-%COMP%] { \n    background: url(/assets/images/Website-base-image.jpg) no-repeat top fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n  }\n  html.sitemap1[_ngcontent-%COMP%]{ background: url(/assets/images/map1.png) no-repeat center fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEVBQTBFO0lBSTFFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBQ0EsZUFBZSwrREFBK0Q7SUFJNUUsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZLENBQUMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHsgXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL1dlYnNpdGUtYmFzZS1pbWFnZS5qcGcpIG5vLXJlcGVhdCB0b3AgZml4ZWQ7IFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgaHRtbC5zaXRlbWFwMXsgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL21hcDEucG5nKSBuby1yZXBlYXQgY2VudGVyIGZpeGVkOyBcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO30iXX0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var ngx_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-countdown */
      "z+xu");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-otp-input */
      "9OaD");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home-page/home-page.component */
      "F1my");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./signup/signup.component */
      "rd1V");
      /* harmony import */


      var ng2_tel_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-tel-input */
      "QSfX");
      /* harmony import */


      var _property_page_property_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./property-page/property-page.component */
      "5Hns");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./landing-page/landing-page.component */
      "mSt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_1__["CountdownModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_2__["NgOtpInputModule"], ng2_tel_input__WEBPACK_IMPORTED_MODULE_9__["Ng2TelInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _property_page_property_page_component__WEBPACK_IMPORTED_MODULE_10__["PropertyPageComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_13__["LandingPageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_1__["CountdownModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_2__["NgOtpInputModule"], ng2_tel_input__WEBPACK_IMPORTED_MODULE_9__["Ng2TelInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"]]
        });
      })();
      /***/

    },

    /***/
    "mSt+":
    /*!********************************************************!*\
      !*** ./src/app/landing-page/landing-page.component.ts ***!
      \********************************************************/

    /*! exports provided: LandingPageComponent */

    /***/
    function mSt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
        return LandingPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "show": a0
        };
      };

      var _c1 = function _c1() {
        return ["/property"];
      };

      var LandingPageComponent = /*#__PURE__*/function () {
        function LandingPageComponent(authService, router) {
          _classCallCheck(this, LandingPageComponent);

          this.authService = authService;
          this.router = router;
          this.isShowMenu = false;
        }

        _createClass(LandingPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userName = this.authService.getUserName();
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            console.log('Function Calling');

            if (this.isShowMenu) {
              this.isShowMenu = false;
            } else {
              this.isShowMenu = true;
            }

            console.log(this.isShowMenu);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.router.navigate(['']);
          }
        }]);

        return LandingPageComponent;
      }();

      LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
        return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LandingPageComponent,
        selectors: [["app-landing-page"]],
        decls: 103,
        vars: 5,
        consts: [[1, "bg-img"], ["id", "color-overlay"], [1, "container"], [1, "bg-img1"], [1, "row"], [1, "col-md-12", "mx-auto", "d-inline-flex", "mt-4"], [1, "logo"], ["src", "/assets/images/SMART GREY1.png"], [1, "login-sign", "text-white", "float-right"], [1, "dropdown"], ["type", "button", "data-toggle", "dropdown", 1, "btn-user", "btn", "dropdown-toggle", 3, "click"], [1, "user-img"], ["src", "/assets/images/user1.png"], [1, "dropdown-menu", 2, "left", "389px !important", 3, "ngClass"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-item", "active", 3, "click"], [1, "col-md-6", "mx-auto", "mt-5"], [1, "form-group", "has-search"], [1, "fa", "fa-search", "form-control-feedback"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "col-md-6", "mx-auto"], [1, "list-sect"], [3, "routerLink"], ["src", "/assets/images/Smart Real Estate.png"], [1, "text-white", "p-2", "mx-auto"], [1, "left-menu"], [1, "logo1", "mx-auto"], ["src", "/assets/images/SMART GEAR GREY.png"], [1, "text-white", "mt-4"], ["href", ""], ["src", "/assets/images/166 news.png"], ["src", "/assets/images/167 weather.png"], ["src", "/assets/images/168 horoscope.png"], ["src", "/assets/images/169 calendar.png"], ["src", "/assets/images/01a BUY WHITE.png"], ["src", "/assets/images/02a SALE WHITE.png"], ["src", "/assets/images/03a TENANT WHITE.png"], ["src", "/assets/images/04a LANDLORD WHITE.png"], [1, "appstore-link"], [1, "mobile-web", "mb-2"], ["src", "/assets/images/Smart App on phone.png"], [1, "app-st", "mb-2"], ["href", "https://apps.apple.com/us/app/apple-store/id375380948"], ["src", "/assets/images/apple play.png"], ["href", "https://play.google.com/store"], ["src", "/assets/images/google store.png"], [1, "form-group", "d-inline-flex"], ["type", "text", "id", "", "placeholder", "Enter phone", "name", "username", 1, "form-control", "w-50"], ["type", "submit", 1, "btn", "btn-text", "btn-primary"], [1, "row", "footer-style"], [1, "footer", "d-inline-flex", "mx-auto", "text-white", "mt-4"], ["href", "#"]],
        template: function LandingPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_11_listener() {
              return ctx.toggleMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Account Settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingPageComponent_Template_a_click_17_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Log out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Smart Real Estate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "News");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Weather");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Horscope");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Calendar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Buy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Rent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Landlord");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Text me the link");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Platform");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "English");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Copyright @ 2020-2021 Smart | All rights reserved");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Term of Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.isShowMenu));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: ["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');\n\nbody[_ngcontent-%COMP%]{font-family: 'Open Sans', sans-serif; font-weight: 300;background: transparent; height:100%;}\nhtml[_ngcontent-%COMP%] { \n    background: url(/assets/images/Website-base-image.jpg) no-repeat top fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;\n  }\nhtml.sitemap1[_ngcontent-%COMP%]{ background: url(/assets/images/map1.png) no-repeat center fixed;\n    background-size: cover;\n    position: relative;\n    height: 100%;}\n.bg-img[_ngcontent-%COMP%] {\n    position: relative;min-height: 100%;\n}\n.bg-img1[_ngcontent-%COMP%] { min-height: calc(100vh - 70px);\n}\n#color-overlay[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%; \n    height: 100%;\n    background-color:rgba(47,84,165,50%);\n    \n }\n.footer[_ngcontent-%COMP%]{z-index: 22;}\n.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color:#fff !important; padding:0px 12px;\n     font-size: 18px;\n }\n.row.footer-style[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n    text-align: center; height: 70px;\n  }\n.text-white[_ngcontent-%COMP%]{color:#fff;}\n.font-style[_ngcontent-%COMP%]{font-size:20px;text-transform:uppercase;}\n\n.logo[_ngcontent-%COMP%] {\n    width: 60%;\n    text-align: right;\n}\n.login-sign[_ngcontent-%COMP%]{   \n    width: 40%;\n    text-align: right;}\n.logo1[_ngcontent-%COMP%]{text-align: center;\n    background: #d1d2d4;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n    padding: 0px 7px;\n    height: 105px;    margin-bottom: 45px;\n}\n.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 2;\n    display: block;\n    width: 20px;\n    height: 20px;\n    line-height:67px;\n    text-align: center;\n    pointer-events: none;\n    color: #4e63bc;\n    left: 30px;\n}\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding-left:38px;\n}\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n     border: 2px solid #2f54a5;\n    padding-left: 37px;\n    background: rgba(209,210,212,0.8);\n    height: 66px;\n    color: #2f54a5;\n    font-size: 20px;\n    text-transform: uppercase;\n}\nul.list-sect[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 128px;\n    height:  128px;\n    display: inline-block;\n    border: 2px solid #2f54a5;\n    border-radius: 10px;\n    background: rgba(209,210,212,0.82);\n    margin:1px;\n}\nul.list-sect[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 5px 0px !important;\n    font-size: 13px;\n    text-align: center;    font-weight:500;\n}\nul.list-sect[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 5px;\n}\nul.list-sect[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-top: 40px;text-align: center;\n}\n.left-menu[_ngcontent-%COMP%] {\n    background:rgba(47,84,165,75%);\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 162px;\n    bottom: 0;box-shadow: 0px 5px 2px #a2a2a2;\n    min-height: 100%;\n    height: 100%;\n}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding: 0;}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n    \n    padding-left: 14px;\n    padding-bottom:22px;\n}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fff;    font-size: 18px;\n}\n.appstore-link[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 40px;\n    bottom: 88px; width: 227px;    text-align: center;\n}\n.appstore-link[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding:0px 11px;\n}\n.app-st[_ngcontent-%COMP%] {\n    display: inline-flex;\n}\n.appstore-link[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-bottom-right-radius: 0px; border-top-right-radius: 0px;}\n.appstore-link[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%]{border-bottom-left-radius: 0px; border-top-left-radius:0px; line-height:8px;}\n.mobile-web[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width:35%;\n}\n.app-st[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 98%;\n}\n.nav-link.active[_ngcontent-%COMP%]{border-bottom: 0px;color:#767676;}\n.text-btn[_ngcontent-%COMP%] {\n    background: #1858ae;\n    border: none;\n}\n.text-btn[_ngcontent-%COMP%]:hover{background:#2f54a5;}\n\n\n.country-flg[_ngcontent-%COMP%] {\n    text-align: center;\n    background: #eeeeee;\n    border-radius: 5px;\n}\n.country-flg.mx-auto.my-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 32px;\n    padding:4px 0px;\n    color: #000;\n    font-size: 10px;\n}\n\n\n.form-outer[_ngcontent-%COMP%] {\n    height: 447px;\n    background: #fff;\n    border: 1px solid #fff;\n    padding: 20px;\n    width: 75%;\n    margin: auto;\n    text-align: center;\n    position: relative;\n}\nform.form-outer[_ngcontent-%COMP%]   .form-style1[_ngcontent-%COMP%] {\n    border: 2px solid #2699fb; padding-left: 44px; height:48px; border-radius: .25rem;width:330px;outline:none;\n}\ninput.form-style1[_ngcontent-%COMP%]:focus-visible {\n    border-color: #2699fb !important;\n}\ninput.form-style1[_ngcontent-%COMP%]:active {\n    border-color: #2699fb !important;\n}\n.heading-signup[_ngcontent-%COMP%]{color:#2699fb;}\n.sky-btn[_ngcontent-%COMP%]{    \n    background: #2699fb;\n    font-size: 16px;\n    border: 0px; height: 40px;\n}\n.sky-btn-pad[_ngcontent-%COMP%]{ margin-top:160px; margin-bottom: 20px;}\n.text-form[_ngcontent-%COMP%]{\nfont-size: 14px; color:#919191;}\n.form-control-search[_ngcontent-%COMP%] {\n        position: absolute;\n        z-index: 2;\n        display: block;\n        width: 20px;\n        height: 20px;\n        line-height:45px;\n        text-align: center;\n        pointer-events: none;\n        color: #4e63bc;\n        left:8px;\n    }\n\n\n.text-form1[_ngcontent-%COMP%]{\n    font-size: 12px;\n    padding:10px 20px; color:#919191;}\ninput.form-control.form-style4[_ngcontent-%COMP%] {\n    border: 0px;\n    border-bottom: 1px solid #bfbfbf;\n    border-radius: 0;\n    color: #d1d2d4;\n    padding-left: 4px;\n}\nspan.form-control-search1[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 4px;\n    bottom: 6px;\n    color: #adadad;\n    font-size: 19px;\n}\n.form-outer[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n\n.form-group.form-group-style[_ngcontent-%COMP%]{display: flex;}\n.form-group.form-group-style[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: 0px;\n    border-bottom: 3px solid #2699fb;\n    border-radius: 0px;\n    margin: 0px 12px;\n    text-align: center;\n    font-size: 25px;\n}\n\n\n.form-ht-style[_ngcontent-%COMP%]{height: auto !important;}\n\n\n.tab-cont-img[_ngcontent-%COMP%]{padding: 20px;}\n.tab-cont-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 200px;}\np.scan-text[_ngcontent-%COMP%]{color:#2f54a5; font-size: 24px;font-weight: 700;}\nnav.scan-code-style[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n    border: none;\n}\nnav.scan-code-style[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{color: #767676; cursor: pointer;}\nnav.scan-code-style[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{   border: none; color:#2f54a5;}\nnav.scan-code-style[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%], nav.scan-code-style[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], nav.scan-code-style[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]:hover{   \n    font-size: 20px;\n    font-weight: 800;    \n    border: none;\n}\nform.form-outer[_ngcontent-%COMP%]   .form-style-login[_ngcontent-%COMP%] {\n    border: 2px solid #bfbfbf;\n    height: 48px;\n}\n.style-login-padd[_ngcontent-%COMP%] {padding-left: 38px;}\nspan.eye-style[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 12px;\n    top: 10px;\n    font-size: 20px;\n    color: #adadad;\n}\n.text-form2[_ngcontent-%COMP%]{font-size:18px; text-align:left;}\n.text-form2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#b4b4b5;}\n\n.btn-user[_ngcontent-%COMP%]{   \n    font-size: 22px;\n    color:#fff;\n    padding: 0px;\n}\n.btn-user.btn.focus[_ngcontent-%COMP%], .btn-user.btn[_ngcontent-%COMP%]:focus{box-shadow: none;}\n.btn-user[_ngcontent-%COMP%]:hover{color:#fff;}\n.user-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width: 30px;}\n.login-sign[_ngcontent-%COMP%]   .dropdown-menu.show[_ngcontent-%COMP%] {\n    background: transparent;\n    color: #fff;    border: none;\n}\n.login-sign[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {color: #fff; padding:5px;}\n.login-sign[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{color:#fff; background-color: transparent;}\n.login-sign[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], .login-sign[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active{  background: transparent;}\n\n.footer-sec1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70px;\n    width: 70px;\n}\n.footer-sec1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;    padding: 0px 38px;\n}\n.footer-sec1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 0px;\n}\n.footer-sec1[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #2699fb;\n    font-weight: 800;\n    text-transform: uppercase;\n    font-size: 20px;\n}\n.has-search[_ngcontent-%COMP%]   .form-control-map[_ngcontent-%COMP%]{background: #fff; height:45px; padding-left: 140px; border: 1px solid #2699fb;width: 490px;}\nselect.form-select-map[_ngcontent-%COMP%]{\n    background: #2699fb;\n    color:#fff;\n    height:45px;\n    padding-left: 5px;\n    position: absolute;\n    text-transform: uppercase;\n    border-color: transparent;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\nselect.form-select-map[_ngcontent-%COMP%]:focus{border-color: transparent !important;}\n.has-search-map[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%]{padding-left: 81px; line-height:49px; font-size:21px; color: #2799fa;}\n.sort-filter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #2799fa;\n        font-weight: 500;\n        font-size: 18px;\n        text-decoration: underline;}\n.sort-filter[_ngcontent-%COMP%] {\n    text-align:right; padding-top: 5px; padding-left: 48px;\n}\n.sort-filter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n    padding-right:0px;\n}\n.sitemap1[_ngcontent-%COMP%]   .left-menu[_ngcontent-%COMP%]{background: rgb(38 153 251);}\n.footer-sec2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70px; width:568px;\n}\n.footer-sec1[_ngcontent-%COMP%] {\n    text-align: center;\n    margin: 0 auto; z-index:2;\n}\n.login-sign-map[_ngcontent-%COMP%]   .btn-user[_ngcontent-%COMP%]{color:#2799fa;}\n.login-sign-map.dropdown-item[_ngcontent-%COMP%]{color:#2799fa;}\n.login-sign-map.dropdown-item[_ngcontent-%COMP%]:hover{color:#2799fa;}\n.sale-outer[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%] {\n    border-bottom:0px !important; background: #2699fb;\n    color: #fff;\n    border-radius: 4px;height: 45px;\n}\n.sale-outer[_ngcontent-%COMP%] {margin: 0px -16px 0px 30px;\n    \n}\n.top-outer-map[_ngcontent-%COMP%]{\n    width: 100%;\n    position: relative;\n}\n.login-sign-map[_ngcontent-%COMP%] {\n    text-align: right;\n    position: absolute;\n    \n}\n.login-sign-map[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{right: 0px !important; left:-40px !important; float: right;}\n.sale-outer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.nav-link.active[_ngcontent-%COMP%]{color:#2799fa; border: 1px solid #2699fb; border-radius: 4px;height: 45px;}\n.sale-outer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%]{color:#fff;height: 45px;}\nhtml.sitemap2[_ngcontent-%COMP%] {background: transparent;}\n.sitemap2[_ngcontent-%COMP%]   .left-menu[_ngcontent-%COMP%]{background: rgb(38 153 251);}\n\n\n.outer-list1[_ngcontent-%COMP%] {\n    background: url(/assets/images/h1.jpg); position: relative;\n    width: 100%; height: 200px;background-position: center;\n}\n.outer-list21[_ngcontent-%COMP%] { background: url(/assets/images/h3.jpg);background-position: center;height: 200px;\n}\n.outer-list33[_ngcontent-%COMP%] { background: url(/assets/images/h4.jpg);background-position: center;height: 200px;\n}\n.outer-list5[_ngcontent-%COMP%]{ background: url(/assets/images/h5.jpg);background-position: center;height: 200px;\n}\n.outer-list44[_ngcontent-%COMP%] { background: url(/assets/images/h6.jpg);background-position: center;height: 200px;\n}\n.outer-list14[_ngcontent-%COMP%] { background: url(/assets/images/h7.jpg);background-position: center;height: 200px;\n}\n.inner-list-style1[_ngcontent-%COMP%] {\n    background: #eee;\n}\n.inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n}\n.outer-map-list[_ngcontent-%COMP%] {\n    padding:32px 0px 32px 150px;\n}\n.inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #2799fa;\n    font-weight: 700;\n    font-size: 12px;\n    display: inline-block;\n    position: absolute;\n}\n.inner-list-style1[_ngcontent-%COMP%] {\n    background: #e3e3e3;\n    width: 100%; \n    position: relative;\n    height: 45px;\n}\n.sale-div[_ngcontent-%COMP%] {\n    height: 30px;\n    background: rgba(16,192,125,0.8);\n    width: 120px;\n    padding: 5px 8px;\n}\n.inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n    right: 4px;\n    top: 10px;\n}\n.inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n    top: 14px;\n    left: 3px;\n}\n.sale-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    color: #fff;\n    font-weight: 500;font-size: 14px;\n}\n.amout-div[_ngcontent-%COMP%] {\n    background: rgba(23,151,222,0.8);\n    width: 120px;\n    color: #fff;\n    padding: 4px 7px;\n    font-weight: 500; font-size: 14px;\n}\n.outer-list2-inner[_ngcontent-%COMP%] {\n    \n    background: #1797de;\n    width: 100%;\n    bottom: 0px;\n    font-size: 10px;\n    color: #fff;\n    align-items: center;\n}\n.outer-list2-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20px;\n    padding: 1px;\n}\n.cart-img[_ngcontent-%COMP%] {\n    width: 28px !important;}\n.outer-list2-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        margin-bottom: 0px; padding-left: 2px;\n    }\n.outer-list2[_ngcontent-%COMP%] {\n        width: 100%;\n        position: relative;\n    }\n.outer-list3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n.outer-list3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n        width: 25%; margin-bottom: 0;\n    }\n.outer-list4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 12px;\n        font-weight: 500;\n        padding-right: 7px;\n        color:#2699fb;\n    }\n.outer-list4-inner-lt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        color: #1797de;\n        font-weight: 700;\n        font-size: 12px;\n        padding-left: 10px;\n        margin-bottom: 1px;\n    }\n.outer-list4-inner-lt[_ngcontent-%COMP%] {\n        padding-top: 5px;\n    }\n.heart-img-sty[_ngcontent-%COMP%] {width:16px;}\nspan.heart-text-style[_ngcontent-%COMP%] {\n    font-size: 14px;\n    text-align: center; width: 50%;\n}\n.chat-img-sty[_ngcontent-%COMP%]{width:20px;}\n.outer-list4[_ngcontent-%COMP%] {\n        width: 100%; background: #e3e3e3; padding:2px;}\n.outer-list3[_ngcontent-%COMP%] {\n    width: 100%;\n    display: -webkit-inline-box;\n    overflow-x: scroll;\n}\n.outer-list3[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;}\n.outer-list3[_ngcontent-%COMP%] {\n        -ms-overflow-style: none;  \n        scrollbar-width: none;  \n      }\n.outer-list[_ngcontent-%COMP%] {\n    margin-bottom: 28px;\n}\nspan.mike-style[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 12px;\n    bottom:4px;\n    font-size: 24px;\n    color: #2699fb;\n}\n.form-group.has-search-map[_ngcontent-%COMP%] {\n    position: relative; margin-bottom: 0px;\n}\n\n.logo-map[_ngcontent-%COMP%] {border: 0px; background: #2f54a5;    margin-bottom: 45px;\n    \n}\n.margin-top-sty[_ngcontent-%COMP%]{margin-top: 18%;}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 34px;}\n.left-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        padding-left: 9px;\n    }\n.right-side-detail[_ngcontent-%COMP%] {\n        position: absolute;\n        width: 210px;\n        right: 0;\n        top: 100px;\n        height: 720px;\n}\n\n.summry-text-style[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 11px;\n        text-align: justify;\n        font-weight: 600;    margin-bottom: 5px;\n    }\n.heading-style[_ngcontent-%COMP%] {\n        text-transform: uppercase;\n        font-size: 18px;\n        font-weight: 700;\n        color: #fff;\n        margin-bottom: 5px;    margin-top: 6px;\n    }\n.outer-inner-agent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 13px; margin-bottom: auto;\n    }\n.outer-inner-agent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        padding-right: 8px;\n    }\n.property-type-style[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 14px;\n        margin-bottom: auto;\n    }\n.summry-cale-style[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 12px;\n        margin-bottom: 5px; }\n.school-accordian[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:0px;background: transparent; color:#fff;}\n.school-accordian[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n    padding:0px 0px 6px 0px;\n    border-bottom: 1px solid rgba(255,255,255,.4);margin-bottom: 10px;\n    background-color: transparent;}\n.school-accordian[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff; font-size: 14px; font-weight: 500;}\n.school-accordian[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 4px;\n    font-size: smaller;}\n\np.left-outer-list2[_ngcontent-%COMP%] {\n    width: 10%;\n    text-align: left;\n    padding-left: 5px;\n}\np.center-outer-list2[_ngcontent-%COMP%] {\n    width: 80%;\n    text-align: center;\n}\np.right-outer-list2[_ngcontent-%COMP%]:last-child {\n    width: 10%;\n    margin-right: 4px;\n}\n.page-style[_ngcontent-%COMP%]   .page-link[_ngcontent-%COMP%]{border:0px !important;}\n.bg-img1-map[_ngcontent-%COMP%]{padding: 5px 0px 5px 50px;height:105px;\n    background: #e3e3e3;}\n.bg-img2-map[_ngcontent-%COMP%] {\n        padding: 5px 0px 5px 50px;\n        background:transparent; \n    }\n\n.right-side-map-img[_ngcontent-%COMP%] {\n        width: 100%; height: 675px;\n    }\n.burger-menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\n{\n    width: 45px;\n    padding-top: 5px;\n}\nimg.close-style[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 16px;\n    top: 10px;\n}\nul.google-map-sty1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    list-style: none; padding: 0px 10px;\n}\nul.google-map-sty1[_ngcontent-%COMP%]{\n    position: absolute;\n    bottom: 10px;\n    left: 10%;\n    margin-left: -10px;}\nul.google-map-sty1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;}\n.outer-map-list1[_ngcontent-%COMP%] {\n        padding: 32px 0px 32px 22px;\n    }\n.row.map-right-scroll[_ngcontent-%COMP%] {\n        overflow-y: scroll;\n        height: 600px; }\n.map-right-scroll[_ngcontent-%COMP%]   .outer-list[_ngcontent-%COMP%]{margin-bottom: 15px; box-shadow: 1px 1px 3px 0px #1797de;}\n.row.map-right-scroll[_ngcontent-%COMP%] {\n    scrollbar-face-color: #367CD2;\n    scrollbar-shadow-color: #FFFFFF;\n    scrollbar-highlight-color: #FFFFFF;\n    scrollbar-3dlight-color: #FFFFFF;\n    scrollbar-darkshadow-color: #FFFFFF;\n    scrollbar-track-color: #FFFFFF;\n    scrollbar-arrow-color: #FFFFFF;\n  }\n\n.row.map-right-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 14px;\n  }\n\n.row.map-right-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    \n    border-radius: 1px;background: #fff; border:1px solid #2699fb;\n  }\n\n.row.map-right-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    border-radius: 1px;\n    background: rgba(38,153,253, 0.8);\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n  }\n\n.outer-list-right[_ngcontent-%COMP%]{\n    width: 30%;\n    display: block;\n    height:500px;\n}\n.outer-left-banner[_ngcontent-%COMP%] {\n    width: 70%;\n}\n.outer-list-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;height: 125px;\n}\n.outer-list-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0px;\n}\n.outer-left-banner[_ngcontent-%COMP%]   .inner-list-style1[_ngcontent-%COMP%]{background: #2699fb;}\n.outer-left-banner[_ngcontent-%COMP%]   .inner-list-style1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color: #fff;}\n.outer-left-banner[_ngcontent-%COMP%]   .outer-list1[_ngcontent-%COMP%]{height: 500px;}\n.outer-left-banner[_ngcontent-%COMP%]   .outer-list2-inner[_ngcontent-%COMP%] {\n    position: absolute;\n    background: #1797de;\n    width: 100%;\n    bottom: 0px;\n    font-size: 16px;\n    color: #fff;\n    height: 52px;\n    align-items: center;\n    font-weight: 600;\n}\n.outer-left-banner[_ngcontent-%COMP%]   .outer-list2-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40px;\n    padding: 3px;\n}\n.sale-outer[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{\n    width: 72px;}\n.prop-detail-right[_ngcontent-%COMP%]{background: #2699fb; color:#fff;}\n.school-accordian.card[_ngcontent-%COMP%]{background: transparent;}\n.summary-map[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%; height: 300px;\n}\n.outer-inner-agent[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color: #fff;}\n.danger-color-msg[_ngcontent-%COMP%]{\n    background: #f8d7da;\n}\n.login-sign[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.scan-login-input[_ngcontent-%COMP%]{\n    width: 363px !important;\n    border: 2px solid #bfbfbf !important;\n}\n/*# sourceMappingURL=data:application/json;base64,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QXVCLENBQUM7QUFDL0M7SUFDSSxXQUFXLEVBQUUsYUFBYTtBQUM5QjtBQUNBLDRCQUE0QixXQUFXLENBQUM7QUFFeEM7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoibGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4gXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gXG5ib2R5e2ZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgZm9udC13ZWlnaHQ6IDMwMDtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgaGVpZ2h0OjEwMCU7fVxuIFxuaHRtbCB7IFxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9XZWJzaXRlLWJhc2UtaW1hZ2UuanBnKSBuby1yZXBlYXQgdG9wIGZpeGVkOyBcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIGh0bWwuc2l0ZW1hcDF7IGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9tYXAxLnBuZykgbm8tcmVwZWF0IGNlbnRlciBmaXhlZDsgXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTt9XG4gXG4gXG4uYmctaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7bWluLWhlaWdodDogMTAwJTtcbn0gXG4uYmctaW1nMSB7IG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcbn0gXG4gXG4jY29sb3Itb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDQ3LDg0LDE2NSw1MCUpO1xuICAgIC8qIG9wYWNpdHk6IDAuNjsgKi9cbiB9XG4gLmZvb3Rlcnt6LWluZGV4OiAyMjt9XG4gLmZvb3RlciAgYSB7XG4gICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50OyBwYWRkaW5nOjBweCAxMnB4O1xuICAgICBmb250LXNpemU6IDE4cHg7XG4gfVxuIC5yb3cuZm9vdGVyLXN0eWxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBoZWlnaHQ6IDcwcHg7XG4gIH1cbiBcbi50ZXh0LXdoaXRle2NvbG9yOiNmZmY7fVxuLmZvbnQtc3R5bGV7Zm9udC1zaXplOjIwcHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO31cbiBcbiBcbiBcbi8qd2Vic2l0ZSBob21lIDEgaHRtbCBzdGFydCovXG4ubG9nbyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5sb2dpbi1zaWdueyAgIFxuICAgIHdpZHRoOiA0MCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7fVxuLmxvZ28xe3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZDFkMmQ0O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMHB4IDdweDtcbiAgICBoZWlnaHQ6IDEwNXB4OyAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OjY3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGNvbG9yOiAjNGU2M2JjO1xuICAgIGxlZnQ6IDMwcHg7XG59XG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcbiAgICBwYWRkaW5nLWxlZnQ6MzhweDtcbn1cbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xuICAgICBib3JkZXI6IDJweCBzb2xpZCAjMmY1NGE1O1xuICAgIHBhZGRpbmctbGVmdDogMzdweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOSwyMTAsMjEyLDAuOCk7XG4gICAgaGVpZ2h0OiA2NnB4O1xuICAgIGNvbG9yOiAjMmY1NGE1O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxudWwubGlzdC1zZWN0IGxpIHtcbiAgICB3aWR0aDogMTI4cHg7XG4gICAgaGVpZ2h0OiAgMTI4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyZjU0YTU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOSwyMTAsMjEyLDAuODIpO1xuICAgIG1hcmdpbjoxcHg7XG59XG51bC5saXN0LXNlY3QgbGkgcCB7XG4gICAgcGFkZGluZzogNXB4IDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIGZvbnQtd2VpZ2h0OjUwMDtcbn1cbnVsLmxpc3Qtc2VjdCBsaSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbnVsLmxpc3Qtc2VjdCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O3RleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sZWZ0LW1lbnUge1xuICAgIGJhY2tncm91bmQ6cmdiYSg0Nyw4NCwxNjUsNzUlKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDE2MnB4O1xuICAgIGJvdHRvbTogMDtib3gtc2hhZG93OiAwcHggNXB4IDJweCAjYTJhMmEyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmxlZnQtbWVudSB1bHtwYWRkaW5nOiAwO31cbi5sZWZ0LW1lbnUgdWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgLyogcGFkZGluZzoxNHB4OyAqL1xuICAgIHBhZGRpbmctbGVmdDogMTRweDtcbiAgICBwYWRkaW5nLWJvdHRvbToyMnB4O1xufVxuLmxlZnQtbWVudSB1bCBsaSBhIHtcbiAgICBjb2xvcjogI2ZmZjsgICAgZm9udC1zaXplOiAxOHB4O1xufVxuIFxuLmFwcHN0b3JlLWxpbmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNDBweDtcbiAgICBib3R0b206IDg4cHg7IHdpZHRoOiAyMjdweDsgICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFwcHN0b3JlLWxpbmsgaW5wdXQsIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOjBweCAxMXB4O1xufVxuLmFwcC1zdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4gXG4uYXBwc3RvcmUtbGluayBpbnB1dHtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4OyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O31cbi5hcHBzdG9yZS1saW5rIC5idG4tdGV4dHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7IGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MHB4OyBsaW5lLWhlaWdodDo4cHg7fVxuLm1vYmlsZS13ZWIgaW1nIHtcbiAgICB3aWR0aDozNSU7XG59XG4uYXBwLXN0IGEgaW1nIHtcbiAgICB3aWR0aDogOTglO1xufVxuLm5hdi1saW5rLmFjdGl2ZXtib3JkZXItYm90dG9tOiAwcHg7Y29sb3I6Izc2NzY3Njt9XG4gXG4udGV4dC1idG4ge1xuICAgIGJhY2tncm91bmQ6ICMxODU4YWU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLnRleHQtYnRuOmhvdmVye2JhY2tncm91bmQ6IzJmNTRhNTt9XG4gXG4vKndlYnNpdGUgaG9tZSAxIGh0bWwgZW5kKi9cbiBcbiBcbiBcbi8qd2Vic2l0ZS1ob21lMiBzdGFydCovXG4uY291bnRyeS1mbGcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn0gICAgXG4uY291bnRyeS1mbGcubXgtYXV0by5teS1hdXRvIHVsIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgcGFkZGluZzo0cHggMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi8qd2Vic2l0ZS1ob21lMiBlbmQqL1xuIFxuLyp3ZWJzaXRlLXNpbnVwLTEgc3RhcnQqL1xuIFxuLmZvcm0tb3V0ZXIge1xuICAgIGhlaWdodDogNDQ3cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmZvcm0uZm9ybS1vdXRlciAuZm9ybS1zdHlsZTEge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyNjk5ZmI7IHBhZGRpbmctbGVmdDogNDRweDsgaGVpZ2h0OjQ4cHg7IGJvcmRlci1yYWRpdXM6IC4yNXJlbTt3aWR0aDozMzBweDtvdXRsaW5lOm5vbmU7XG59XG5pbnB1dC5mb3JtLXN0eWxlMTpmb2N1cy12aXNpYmxlIHtcbiAgICBib3JkZXItY29sb3I6ICMyNjk5ZmIgIWltcG9ydGFudDtcbn1cbmlucHV0LmZvcm0tc3R5bGUxOmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjY5OWZiICFpbXBvcnRhbnQ7XG59XG4uaGVhZGluZy1zaWdudXB7Y29sb3I6IzI2OTlmYjt9XG4uc2t5LWJ0bnsgICAgXG4gICAgYmFja2dyb3VuZDogIzI2OTlmYjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyOiAwcHg7IGhlaWdodDogNDBweDtcbn1cbi5za3ktYnRuLXBhZHsgbWFyZ2luLXRvcDoxNjBweDsgbWFyZ2luLWJvdHRvbTogMjBweDt9XG4udGV4dC1mb3Jte1xuZm9udC1zaXplOiAxNHB4OyBjb2xvcjojOTE5MTkxO31cbi5mb3JtLWNvbnRyb2wtc2VhcmNoIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6NDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY29sb3I6ICM0ZTYzYmM7XG4gICAgICAgIGxlZnQ6OHB4O1xuICAgIH1cbi8qd2Vic2l0ZS1zaWduIHVwICBlbmQqL1xuIFxuLyp3ZWJzaXRlLXNpbnVwLTQgc3RhcnQqL1xuLnRleHQtZm9ybTF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6MTBweCAyMHB4OyBjb2xvcjojOTE5MTkxO31cbmlucHV0LmZvcm0tY29udHJvbC5mb3JtLXN0eWxlNCB7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJmYmY7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBjb2xvcjogI2QxZDJkNDtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbnNwYW4uZm9ybS1jb250cm9sLXNlYXJjaDEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNHB4O1xuICAgIGJvdHRvbTogNnB4O1xuICAgIGNvbG9yOiAjYWRhZGFkO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbn1cbi5mb3JtLW91dGVyIC5mb3JtLWdyb3VwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4gXG4vKndlYnNpdGUtc2lnbnVwLTQgIGVuZCovXG4gXG4vKndlYnNpdGUtc2ludXAtNiBzdGFydCovXG4uZm9ybS1ncm91cC5mb3JtLWdyb3VwLXN0eWxle2Rpc3BsYXk6IGZsZXg7fVxuLmZvcm0tZ3JvdXAuZm9ybS1ncm91cC1zdHlsZSBpbnB1dCB7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMyNjk5ZmI7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1hcmdpbjogMHB4IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cbi8qd2Vic2l0ZS1zaW51cC02IGVuZCovXG4gXG4vKndlYnNpdGUtc2ludXAtOCBzdGFydCovXG4uZm9ybS1odC1zdHlsZXtoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDt9XG4vKndlYnNpdGUtc2ludXAtOCBlbmQqL1xuIFxuLyp3ZWJzaXRlLWxvZ2luKi9cbi50YWItY29udC1pbWd7cGFkZGluZzogMjBweDt9XG4udGFiLWNvbnQtaW1nIGltZ3t3aWR0aDogMjAwcHg7fVxucC5zY2FuLXRleHR7Y29sb3I6IzJmNTRhNTsgZm9udC1zaXplOiAyNHB4O2ZvbnQtd2VpZ2h0OiA3MDA7fVxubmF2LnNjYW4tY29kZS1zdHlsZSAubmF2LXRhYnMge1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbm5hdi5zY2FuLWNvZGUtc3R5bGUgLm5hdi10YWJzIC5uYXYtbGlua3tjb2xvcjogIzc2NzY3NjsgY3Vyc29yOiBwb2ludGVyO31cbm5hdi5zY2FuLWNvZGUtc3R5bGUgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7ICAgYm9yZGVyOiBub25lOyBjb2xvcjojMmY1NGE1O31cbm5hdi5zY2FuLWNvZGUtc3R5bGUgLm5hdi10YWJzLG5hdi5zY2FuLWNvZGUtc3R5bGUgLm5hdi1saW5rLCBuYXYuc2Nhbi1jb2RlLXN0eWxlIC5uYXYtbGluay5hY3RpdmU6aG92ZXJ7ICAgXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7ICAgIFxuICAgIGJvcmRlcjogbm9uZTtcbn1cbmZvcm0uZm9ybS1vdXRlciAuZm9ybS1zdHlsZS1sb2dpbiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2JmYmZiZjtcbiAgICBoZWlnaHQ6IDQ4cHg7XG59XG4uc3R5bGUtbG9naW4tcGFkZCB7cGFkZGluZy1sZWZ0OiAzOHB4O31cbnNwYW4uZXllLXN0eWxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEycHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2FkYWRhZDtcbn1cbi50ZXh0LWZvcm0ye2ZvbnQtc2l6ZToxOHB4OyB0ZXh0LWFsaWduOmxlZnQ7fVxuLnRleHQtZm9ybTIgYXtjb2xvcjojYjRiNGI1O31cbi8qd2Vic2l0ZS1sb2dpbiBlbmQqLyAgXG4uYnRuLXVzZXJ7ICAgXG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzogMHB4O1xufSAgICBcbi5idG4tdXNlci5idG4uZm9jdXMsIC5idG4tdXNlci5idG46Zm9jdXN7Ym94LXNoYWRvdzogbm9uZTt9XG4uYnRuLXVzZXI6aG92ZXJ7Y29sb3I6I2ZmZjt9XG4udXNlci1pbWcgaW1ne3dpZHRoOiAzMHB4O31cbi5sb2dpbi1zaWduIC5kcm9wZG93bi1tZW51LnNob3cge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjZmZmOyAgICBib3JkZXI6IG5vbmU7XG59XG4ubG9naW4tc2lnbiAuZHJvcGRvd24taXRlbSB7Y29sb3I6ICNmZmY7IHBhZGRpbmc6NXB4O31cbi5sb2dpbi1zaWduIC5kcm9wZG93bi1pdGVtOmhvdmVye2NvbG9yOiNmZmY7IGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O31cbi5sb2dpbi1zaWduIC5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgLmxvZ2luLXNpZ24gLmRyb3Bkb3duLWl0ZW06YWN0aXZleyAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxuIFxuLyptYXAgcmVhbHR5MSovXG4uZm9vdGVyLXNlYzEgdWwgbGkgYSBpbWcge1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbn1cbi5mb290ZXItc2VjMSB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTsgICAgcGFkZGluZzogMHB4IDM4cHg7XG59XG4uZm9vdGVyLXNlYzEgdWwge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLmZvb3Rlci1zZWMxIHVsIGxpIHNwYW4ge1xuICAgIGNvbG9yOiAjMjY5OWZiO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLW1hcHtiYWNrZ3JvdW5kOiAjZmZmOyBoZWlnaHQ6NDVweDsgcGFkZGluZy1sZWZ0OiAxNDBweDsgYm9yZGVyOiAxcHggc29saWQgIzI2OTlmYjt3aWR0aDogNDkwcHg7fVxuc2VsZWN0LmZvcm0tc2VsZWN0LW1hcHtcbiAgICBiYWNrZ3JvdW5kOiAjMjY5OWZiO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgaGVpZ2h0OjQ1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xufVxuc2VsZWN0LmZvcm0tc2VsZWN0LW1hcDpmb2N1c3tib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7fVxuLmhhcy1zZWFyY2gtbWFwIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2t7cGFkZGluZy1sZWZ0OiA4MXB4OyBsaW5lLWhlaWdodDo0OXB4OyBmb250LXNpemU6MjFweDsgY29sb3I6ICMyNzk5ZmE7fVxuLnNvcnQtZmlsdGVyIGEge1xuICAgICAgICBjb2xvcjogIzI3OTlmYTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTt9XG4uc29ydC1maWx0ZXIge1xuICAgIHRleHQtYWxpZ246cmlnaHQ7IHBhZGRpbmctdG9wOiA1cHg7IHBhZGRpbmctbGVmdDogNDhweDtcbn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuIFxuLnNvcnQtZmlsdGVyIGE6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctcmlnaHQ6MHB4O1xufVxuIFxuLnNpdGVtYXAxIC5sZWZ0LW1lbnV7YmFja2dyb3VuZDogcmdiKDM4IDE1MyAyNTEpO31cbi5mb290ZXItc2VjMiBhIGltZyB7XG4gICAgaGVpZ2h0OiA3MHB4OyB3aWR0aDo1NjhweDtcbn1cbi5mb290ZXItc2VjMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvOyB6LWluZGV4OjI7XG59XG4ubG9naW4tc2lnbi1tYXAgLmJ0bi11c2Vye2NvbG9yOiMyNzk5ZmE7fVxuLmxvZ2luLXNpZ24tbWFwLmRyb3Bkb3duLWl0ZW17Y29sb3I6IzI3OTlmYTt9XG4ubG9naW4tc2lnbi1tYXAuZHJvcGRvd24taXRlbTpob3Zlcntjb2xvcjojMjc5OWZhO31cbi5zYWxlLW91dGVyIC5uYXYtdGFicyB7XG4gICAgYm9yZGVyLWJvdHRvbTowcHggIWltcG9ydGFudDsgYmFja2dyb3VuZDogIzI2OTlmYjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7aGVpZ2h0OiA0NXB4O1xufVxuLnNhbGUtb3V0ZXIge21hcmdpbjogMHB4IC0xNnB4IDBweCAzMHB4O1xuICAgIC8qIG1hcmdpbjogMHB4IDY4cHg7ICovXG59XG4udG9wLW91dGVyLW1hcHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9naW4tc2lnbi1tYXAge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiByaWdodDogLTYwcHg7ICovXG59XG4ubG9naW4tc2lnbi1tYXAgLmRyb3Bkb3duLW1lbnV7cmlnaHQ6IDBweCAhaW1wb3J0YW50OyBsZWZ0Oi00MHB4ICFpbXBvcnRhbnQ7IGZsb2F0OiByaWdodDt9XG4uc2FsZS1vdXRlciB1bCBsaSBhLm5hdi1saW5rLmFjdGl2ZXtjb2xvcjojMjc5OWZhOyBib3JkZXI6IDFweCBzb2xpZCAjMjY5OWZiOyBib3JkZXItcmFkaXVzOiA0cHg7aGVpZ2h0OiA0NXB4O31cbi5zYWxlLW91dGVyIHVsIGxpIGEubmF2LWxpbmt7Y29sb3I6I2ZmZjtoZWlnaHQ6IDQ1cHg7fVxuIFxuaHRtbC5zaXRlbWFwMiB7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxuLnNpdGVtYXAyIC5sZWZ0LW1lbnV7YmFja2dyb3VuZDogcmdiKDM4IDE1MyAyNTEpO31cbiAgLyptYXAgcmVhbHR5MSovXG4gXG4gLyptYXAgcmVhbHR5MiovXG4gIC5vdXRlci1saXN0MSB7XG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2gxLmpwZyk7IHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAyMDBweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ub3V0ZXItbGlzdDIxIHsgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2gzLmpwZyk7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2hlaWdodDogMjAwcHg7XG59XG4ub3V0ZXItbGlzdDMzIHsgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1hZ2VzL2g0LmpwZyk7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2hlaWdodDogMjAwcHg7XG59XG4ub3V0ZXItbGlzdDV7IGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9oNS5qcGcpO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtoZWlnaHQ6IDIwMHB4O1xufVxuLm91dGVyLWxpc3Q0NCB7IGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9oNi5qcGcpO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtoZWlnaHQ6IDIwMHB4O1xufVxuLm91dGVyLWxpc3QxNCB7IGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9oNy5qcGcpO2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtoZWlnaHQ6IDIwMHB4O1xufVxuLmlubmVyLWxpc3Qtc3R5bGUxIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuLmlubmVyLWxpc3Qtc3R5bGUxIHAgaW1nIHtcbiAgICB3aWR0aDogMjBweDtcbn1cbi5vdXRlci1tYXAtbGlzdCB7XG4gICAgcGFkZGluZzozMnB4IDBweCAzMnB4IDE1MHB4O1xufVxuLmlubmVyLWxpc3Qtc3R5bGUxIHAge1xuICAgIGNvbG9yOiAjMjc5OWZhO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaW5uZXItbGlzdC1zdHlsZTEge1xuICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG4uc2FsZS1kaXYge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE5MiwxMjUsMC44KTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbn1cbi5pbm5lci1saXN0LXN0eWxlMSBwOmxhc3QtY2hpbGQge1xuICAgIHJpZ2h0OiA0cHg7XG4gICAgdG9wOiAxMHB4O1xufVxuLmlubmVyLWxpc3Qtc3R5bGUxIHA6Zmlyc3QtY2hpbGQge1xuICAgIHRvcDogMTRweDtcbiAgICBsZWZ0OiAzcHg7XG59XG4uc2FsZS1kaXYgc3BhbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogNTAwO2ZvbnQtc2l6ZTogMTRweDtcbn1cbiBcbi5hbW91dC1kaXYge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMsMTUxLDIyMiwwLjgpO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA0cHggN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IGZvbnQtc2l6ZTogMTRweDtcbn1cbi5vdXRlci1saXN0Mi1pbm5lciB7XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICAgIGJhY2tncm91bmQ6ICMxNzk3ZGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub3V0ZXItbGlzdDItaW5uZXIgcCBhIGltZyB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgcGFkZGluZzogMXB4O1xufVxuLmNhcnQtaW1nIHtcbiAgICB3aWR0aDogMjhweCAhaW1wb3J0YW50O31cbiBcbi5vdXRlci1saXN0Mi1pbm5lciBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4OyBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICB9XG4ub3V0ZXItbGlzdDIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbi5vdXRlci1saXN0MyBwIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbi5vdXRlci1saXN0MyBwe1xuICAgICAgICB3aWR0aDogMjUlOyBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbi5vdXRlci1saXN0NCBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gICAgICAgIGNvbG9yOiMyNjk5ZmI7XG4gICAgfVxuLm91dGVyLWxpc3Q0LWlubmVyLWx0IHAge1xuICAgICAgICBjb2xvcjogIzE3OTdkZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgICB9XG4gICAgLm91dGVyLWxpc3Q0LWlubmVyLWx0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG4uaGVhcnQtaW1nLXN0eSB7d2lkdGg6MTZweDt9XG5zcGFuLmhlYXJ0LXRleHQtc3R5bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IHdpZHRoOiA1MCU7XG59XG4uY2hhdC1pbWctc3R5e3dpZHRoOjIwcHg7fVxuLm91dGVyLWxpc3Q0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6ICNlM2UzZTM7IHBhZGRpbmc6MnB4O31cbi5vdXRlci1saXN0MyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbi5vdXRlci1saXN0Mzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7fVxuLm91dGVyLWxpc3QzIHtcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xuICAgICAgfVxuLm91dGVyLWxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG5zcGFuLm1pa2Utc3R5bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTJweDtcbiAgICBib3R0b206NHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzI2OTlmYjtcbn1cbi5mb3JtLWdyb3VwLmhhcy1zZWFyY2gtbWFwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbi1ib3R0b206IDBweDtcbn1cbiAvKiBtYXAgcmVhbHR5MiAqL1xuIFxuIC5sb2dvLW1hcCB7Ym9yZGVyOiAwcHg7IGJhY2tncm91bmQ6ICMyZjU0YTU7ICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgLyogYmFja2dyb3VuZDogIzJmNTRhNTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDBweCA3cHg7XG4gICAgYm9yZGVyOiAxLjhweCBzb2xpZCAjZWFlYWViOyAqL1xufVxuLm1hcmdpbi10b3Atc3R5e21hcmdpbi10b3A6IDE4JTt9XG4ubGVmdC1tZW51IHVsIGxpIGltZyB7XG4gICAgd2lkdGg6IDM0cHg7fVxuIC5sZWZ0LW1lbnUgdWwgbGkgYSBzcGFuIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA5cHg7XG4gICAgfVxuLnJpZ2h0LXNpZGUtZGV0YWlsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDcyMHB4O1xufVxuLyogLnJpZ2h0LXNpZGUtZGV0YWlsIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59ICovXG4uc3VtbXJ5LXRleHQtc3R5bGUgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbi5oZWFkaW5nLXN0eWxlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OyAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxuLm91dGVyLWlubmVyLWFnZW50IHAge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7IG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgfVxuLm91dGVyLWlubmVyLWFnZW50IHAgc3BhbiBpbWcge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgfVxuLnByb3BlcnR5LXR5cGUtc3R5bGUgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICB9XG4uc3VtbXJ5LWNhbGUtc3R5bGUgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XG4uc2Nob29sLWFjY29yZGlhbiAuY2FyZHtib3JkZXI6MHB4O2JhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjb2xvcjojZmZmO31cbi5zY2hvb2wtYWNjb3JkaWFuIC5jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzowcHggMHB4IDZweCAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjQpO21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7fVxuLnNjaG9vbC1hY2NvcmRpYW4gLmNhcmQtaGVhZGVyIGF7Y29sb3I6I2ZmZjsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNTAwO31cbi5zY2hvb2wtYWNjb3JkaWFuIC5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7fVxuIFxuLyogLmxlZnQtbWVudSB1bCBsaTpsYXN0LWNoaWxkIGEgaW1nIHtcbiAgICB3aWR0aDogMTAwJTsgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4OyAgICBsZWZ0OiAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAxMHB4O2JhY2tncm91bmQ6IzJmNTRhNTtcbn1cbi5sZWZ0LW1hcC1tZW51IHVsIGxpOmxhc3QtY2hpbGQgYSBpbWd7Ym9yZGVyOjBweDt9ICovXG4gXG5wLmxlZnQtb3V0ZXItbGlzdDIge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbnAuY2VudGVyLW91dGVyLWxpc3QyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnAucmlnaHQtb3V0ZXItbGlzdDI6bGFzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5wYWdlLXN0eWxlIC5wYWdlLWxpbmt7Ym9yZGVyOjBweCAhaW1wb3J0YW50O30gXG4gLmJnLWltZzEtbWFwe3BhZGRpbmc6IDVweCAwcHggNXB4IDUwcHg7aGVpZ2h0OjEwNXB4O1xuICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7fVxuLmJnLWltZzItbWFwIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDBweCA1cHggNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgXG4gICAgfVxuIFxuIFxuLyoxNSBhcHJpbCovXG4ucmlnaHQtc2lkZS1tYXAtaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IGhlaWdodDogNjc1cHg7XG4gICAgfVxuLmJ1cmdlci1tZW51IGltZ1xue1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5pbWcuY2xvc2Utc3R5bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTZweDtcbiAgICB0b3A6IDEwcHg7XG59XG51bC5nb29nbGUtbWFwLXN0eTEgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaXN0LXN0eWxlOiBub25lOyBwYWRkaW5nOiAwcHggMTBweDtcbn1cbnVsLmdvb2dsZS1tYXAtc3R5MXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7fVxudWwuZ29vZ2xlLW1hcC1zdHkxIGxpIGltZyB7XG4gICAgd2lkdGg6IDYwcHg7fVxuLm91dGVyLW1hcC1saXN0MSB7XG4gICAgICAgIHBhZGRpbmc6IDMycHggMHB4IDMycHggMjJweDtcbiAgICB9XG4ucm93Lm1hcC1yaWdodC1zY3JvbGwge1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIGhlaWdodDogNjAwcHg7IH1cbi5tYXAtcmlnaHQtc2Nyb2xsIC5vdXRlci1saXN0e21hcmdpbi1ib3R0b206IDE1cHg7IGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDBweCAjMTc5N2RlO31cbiBcbi5yb3cubWFwLXJpZ2h0LXNjcm9sbCB7XG4gICAgc2Nyb2xsYmFyLWZhY2UtY29sb3I6ICMzNjdDRDI7XG4gICAgc2Nyb2xsYmFyLXNoYWRvdy1jb2xvcjogI0ZGRkZGRjtcbiAgICBzY3JvbGxiYXItaGlnaGxpZ2h0LWNvbG9yOiAjRkZGRkZGO1xuICAgIHNjcm9sbGJhci0zZGxpZ2h0LWNvbG9yOiAjRkZGRkZGO1xuICAgIHNjcm9sbGJhci1kYXJrc2hhZG93LWNvbG9yOiAjRkZGRkZGO1xuICAgIHNjcm9sbGJhci10cmFjay1jb2xvcjogI0ZGRkZGRjtcbiAgICBzY3JvbGxiYXItYXJyb3ctY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgXG4gIC8qc2Nyb2xsYmFyKi9cbiAgLnJvdy5tYXAtcmlnaHQtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDE0cHg7XG4gIH1cbiAgXG4gIC8qIFRyYWNrICovXG4gIC5yb3cubWFwLXJpZ2h0LXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC8qIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6MXB4IHNvbGlkICMyNjk5ZmI7XG4gIH1cbiAgXG4gIC8qIEhhbmRsZSAqL1xuICAucm93Lm1hcC1yaWdodC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzOCwxNTMsMjUzLCAwLjgpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIFxuICAvKiBkZXRhaWwgc2NyZWVuKi9cbiAgLm91dGVyLWxpc3QtcmlnaHR7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6NTAwcHg7XG59XG4ub3V0ZXItbGVmdC1iYW5uZXIge1xuICAgIHdpZHRoOiA3MCU7XG59XG4ub3V0ZXItbGlzdC1yaWdodCBwIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7aGVpZ2h0OiAxMjVweDtcbn1cbi5vdXRlci1saXN0LXJpZ2h0IHAge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5vdXRlci1sZWZ0LWJhbm5lciAuaW5uZXItbGlzdC1zdHlsZTF7YmFja2dyb3VuZDogIzI2OTlmYjt9XG4ub3V0ZXItbGVmdC1iYW5uZXIgLmlubmVyLWxpc3Qtc3R5bGUxIHB7Y29sb3I6ICNmZmY7fVxuLm91dGVyLWxlZnQtYmFubmVyIC5vdXRlci1saXN0MXtoZWlnaHQ6IDUwMHB4O31cbi5vdXRlci1sZWZ0LWJhbm5lciAub3V0ZXItbGlzdDItaW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMTc5N2RlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDUycHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLm91dGVyLWxlZnQtYmFubmVyIC5vdXRlci1saXN0Mi1pbm5lciBwIGEgaW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiAzcHg7XG59XG4uc2FsZS1vdXRlciAubmF2LXRhYnMgLm5hdi1pdGVte1xuICAgIHdpZHRoOiA3MnB4O31cbiBcbi5wcm9wLWRldGFpbC1yaWdodHtiYWNrZ3JvdW5kOiAjMjY5OWZiOyBjb2xvcjojZmZmO31cbi5zY2hvb2wtYWNjb3JkaWFuLmNhcmR7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7fVxuLnN1bW1hcnktbWFwIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMzAwcHg7XG59XG4ub3V0ZXItaW5uZXItYWdlbnQgcCBzcGFuIGF7Y29sb3I6ICNmZmY7fVxuXG4uZGFuZ2VyLWNvbG9yLW1zZ3tcbiAgICBiYWNrZ3JvdW5kOiAjZjhkN2RhO1xufVxuLmxvZ2luLXNpZ24gYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNjYW4tbG9naW4taW5wdXR7XG4gICAgd2lkdGg6IDM2M3B4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2JmYmZiZiAhaW1wb3J0YW50O1xufVxuICJdfQ== */"]
      });
      /***/
    },

    /***/
    "rd1V":
    /*!********************************************!*\
      !*** ./src/app/signup/signup.component.ts ***!
      \********************************************/

    /*! exports provided: SignupComponent */

    /***/
    function rd1V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
        return SignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SignupComponent = /*#__PURE__*/function () {
        function SignupComponent() {
          _classCallCheck(this, SignupComponent);
        }

        _createClass(SignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SignupComponent;
      }();

      SignupComponent.ɵfac = function SignupComponent_Factory(t) {
        return new (t || SignupComponent)();
      };

      SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignupComponent,
        selectors: [["app-signup"]],
        decls: 2,
        vars: 0,
        template: function SignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "signup works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-page/home-page.component */
      "F1my");
      /* harmony import */


      var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./landing-page/landing-page.component */
      "mSt+");
      /* harmony import */


      var _property_page_property_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./property-page/property-page.component */
      "5Hns");
      /* harmony import */


      var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/guards/auth.guard */
      "LjFu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
      }, {
        path: 'home',
        component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }, {
        path: 'property',
        component: _property_page_property_page_component__WEBPACK_IMPORTED_MODULE_3__["PropertyPageComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
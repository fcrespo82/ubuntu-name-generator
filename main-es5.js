(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkubuntu_name_generator"] = self["webpackChunkubuntu_name_generator"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
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
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    6698:
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutComponent": function AboutComponent() {
          return (
            /* binding */
            _AboutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      1477);

      var _AboutComponent = /*#__PURE__*/_createClass(function _AboutComponent() {
        _classCallCheck(this, _AboutComponent);
      });

      _AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || _AboutComponent)();
      };

      _AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AboutComponent,
        selectors: [["app-about"]],
        decls: 16,
        vars: 0,
        consts: [[1, "row"], [1, "col-md-3"], [1, "col-md-6"], [1, "text-center"], ["href", "//twitter.com/fcrespo82", "target", "_blank"], ["href", "//github.com/fcrespo82", "target", "_blank"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aside", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Hi, my name is Fernando Crespo. I made this for fun and to learn Angular. I am a developer who likes everything about tech. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " If you wanna know more about me or anything that I do, head to my ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Twitter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "GitHub");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "aside", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      1477);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      9661);

      var _AppComponent = /*#__PURE__*/_createClass(function _AppComponent() {
        _classCallCheck(this, _AppComponent);
      });

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 13,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-ubuntu"], [1, "navbar-nav"], ["routerLink", "generator", "routerLinkActive", "active", 1, "nav-item", "nav-link"], ["routerLink", "about", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "text-center"], [1, "jumbotron", "jumbotron-fluid"], [1, "text-white", "display-4"], ["src", "/assets/cof_black_hex.png", "alt", "Ubuntu Logo", 1, "logo"], [1, "container-fluid"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Generator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ubuntu Name Generator ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        encapsulation: 2
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      4301);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      4919);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      9661);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      8870);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-sharebuttons/buttons */
      7852);
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./about/about.component */
      6698);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.routes */
      8693);
      /* harmony import */


      var _generator_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./generator/generator.component */
      3410);
      /* harmony import */


      var _photo_photo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./photo/photo.component */
      3004);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      1477);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2795);

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule(library) {
        _classCallCheck(this, _AppModule);

        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.fas, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.fab);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconLibrary));
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__.appRoutes, {
          relativeLinkResolution: 'legacy'
        }), ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_12__.ShareButtonsModule.withConfig()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _generator_generator_component__WEBPACK_IMPORTED_MODULE_3__.GeneratorComponent, _photo_photo_component__WEBPACK_IMPORTED_MODULE_4__.PhotoComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_12__.ShareButtonsModule]
        });
      })();
      /***/

    },

    /***/
    8693:
    /*!*******************************!*\
      !*** ./src/app/app.routes.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "appRoutes": function appRoutes() {
          return (
            /* binding */
            _appRoutes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./about/about.component */
      6698);
      /* harmony import */


      var _generator_generator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./generator/generator.component */
      3410);

      var _appRoutes = [{
        path: 'generator',
        component: _generator_generator_component__WEBPACK_IMPORTED_MODULE_1__.GeneratorComponent
      }, {
        path: 'generator/:adjective/:animal/:version',
        component: _generator_generator_component__WEBPACK_IMPORTED_MODULE_1__.GeneratorComponent
      }, {
        path: 'generator/:realVersion',
        component: _generator_generator_component__WEBPACK_IMPORTED_MODULE_1__.GeneratorComponent
      }, {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
      }, {
        path: '**',
        redirectTo: 'generator'
      }];
      /***/
    },

    /***/
    3410:
    /*!**************************************************!*\
      !*** ./src/app/generator/generator.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GeneratorComponent": function GeneratorComponent() {
          return (
            /* binding */
            _GeneratorComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../names */
      6304);
      /* harmony import */


      var _ubuntu_release_names_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../ubuntu-release-names.service */
      2053);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      1477);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      4301);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      9661);
      /* harmony import */


      var _photo_photo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../photo/photo.component */
      3004);
      /* harmony import */


      var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-sharebuttons/buttons */
      7852);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      93);

      var _c0 = function _c0(a1) {
        return ["/generator", a1];
      };

      function GeneratorComponent_a_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var name_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, name_r1.version));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", name_r1.version, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", name_r1.adjective, " ", name_r1.animal, "");
        }
      }

      var _c1 = function _c1() {
        return ["facebook", "twitter", "copy", "reddit", "whatsapp", "messenger", "telegram", "email"];
      };

      var _GeneratorComponent = /*#__PURE__*/function () {
        function _GeneratorComponent(client, activatedRoute, router, realUbuntuNames) {
          var _this = this;

          _classCallCheck(this, _GeneratorComponent);

          this.client = client;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.realUbuntuNames = realUbuntuNames;
          this.realUbuntuNames.getNamesCVS().subscribe(function (realNames) {
            _this.realNames = realNames;
          });
        }

        _createClass(_GeneratorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.image = 'https://via.placeholder.com/1000?text=Loading...';
            this.link = this.router.url;
            this.activatedRoute.params.subscribe(function (params) {
              if (!params.adjective && params.realVersion == undefined) {
                _this2.generateName();

                return;
              }

              if (params.realVersion) {
                _this2.realUbuntuNames.getNamesCVS().subscribe(function (realNames) {
                  _this2.realNames = realNames;

                  var real = _this2.realNames.filter(function (item) {
                    return item.version === params.realVersion;
                  });

                  _this2.adjective = real[0].adjective;
                  _this2.animal = real[0].animal;
                  _this2.ubuntuVersion = "".concat(real[0].version);
                  _this2.ubuntuName = "".concat(real[0].adjective, " ").concat(real[0].animal);
                  var googleUrl = "https://content.googleapis.com/customsearch/v1?q=Ubuntu%20Wallpaper$20".concat(_this2.ubuntuName, "&searchType=image&imgSize=large&num=1&cx=000894297801806964922%3Ax3hdmbt024e&key=AIzaSyC9hDu5kAJJfR8D1JkYafbh6nM8X5NwyGI");

                  _this2.client.get(googleUrl).toPromise().then(function (result) {
                    _this2.image = result.items[0].link;
                  })["catch"](function (err) {
                    if (err.status === 429) {
                      _this2.image = 'https://via.placeholder.com/1000?text=QUOTA+EXCEEDED';
                    } else {
                      _this2.image = 'https://via.placeholder.com/1000?text=NO+IMAGE';
                    }
                  });
                });
              } else {
                _this2.adjective = params.adjective;
                _this2.animal = params.animal;
                _this2.ubuntuVersion = "".concat(params.version);
                _this2.ubuntuName = "".concat(_this2.adjective, " ").concat(_this2.animal);
                _this2.image = 'https://via.placeholder.com/1000?text=Loading...';
                var googleUrl = "https://content.googleapis.com/customsearch/v1?q=".concat(_this2.animal, "%20animal&searchType=image&imgSize=large&num=1&cx=000894297801806964922%3Ax3hdmbt024e&key=AIzaSyC9hDu5kAJJfR8D1JkYafbh6nM8X5NwyGI");

                _this2.client.get(googleUrl).toPromise().then(function (result) {
                  _this2.image = result.items[0].link;
                })["catch"](function (err) {
                  if (err.status === 429) {
                    _this2.image = 'https://via.placeholder.com/1000?text=QUOTA+EXCEEDED';
                  } else {
                    _this2.image = 'https://via.placeholder.com/1000?text=NO+IMAGE';
                  }
                });
              }
            });
          }
        }, {
          key: "generateName",
          value: function generateName() {
            this.image = 'https://via.placeholder.com/1000?text=Loading...';
            var charCode = Math.round(Math.random() * 25);
            var alphabetLetter = 'abcdefghijklmnopqrstuvwxyz'[charCode];
            var chosenLetter = _names__WEBPACK_IMPORTED_MODULE_0__.ubuntu_names[alphabetLetter];
            var adjectives = chosenLetter.adjectives;
            var animals = chosenLetter.animals;
            var initial_year = chosenLetter.version.initial_year;
            var month = chosenLetter.version.month;
            var random_year = initial_year * (Math.round(Math.random() * 1) + 1);
            var chosenAdjectiveIndex = Math.round(Math.random() * (adjectives.length - 1));
            var chosenAnimalIndex = Math.round(Math.random() * (animals.length - 1));
            this.adjective = adjectives[chosenAdjectiveIndex];
            this.animal = animals[chosenAnimalIndex];
            this.ubuntuVersion = "".concat(random_year, ".").concat(this.pad2(month));
            this.ubuntuName = "".concat(this.adjective, " ").concat(this.animal);
            this.router.navigate(['/generator', this.adjective, this.animal, this.ubuntuVersion]);
          }
        }, {
          key: "pad2",
          value: function pad2(number) {
            return (number < 10 ? '0' : '') + number;
          }
        }]);

        return _GeneratorComponent;
      }();

      _GeneratorComponent.ɵfac = function GeneratorComponent_Factory(t) {
        return new (t || _GeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ubuntu_release_names_service__WEBPACK_IMPORTED_MODULE_1__.UbuntuReleaseNamesService));
      };

      _GeneratorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _GeneratorComponent,
        selectors: [["generator"]],
        decls: 24,
        vars: 13,
        consts: [["name", "twitter:card", "content", "summary"], ["property", "og:title", "content", "Ubuntu Name Generator"], ["property", "og:description", "content", "#ubuntuNameGenerator"], ["property", "og:image", 3, "content"], ["property", "og:url", 3, "content"], [1, "row"], [1, "col-md-3"], [3, "url", "title", "caption"], [1, "text-center", "col-md-6"], [1, "text-muted"], [1, "btn", "btn-primary", 3, "click"], [3, "include", "show", "size", "description"], [1, "list-group", "realNames"], ["class", "list-group-item list-group-item-action", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "list-group-item", "list-group-item-action", 3, "routerLink"]],
        template: function GeneratorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "meta", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "meta", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "meta", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "meta", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "aside", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "photo", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "main", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h3", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GeneratorComponent_Template_button_click_15_listener() {
              return ctx.generateName();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Generate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "share-buttons", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "aside", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Real Names:");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, GeneratorComponent_a_23_Template, 4, 6, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx.image);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("content", ctx.link);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("url", ctx.image)("title", ctx.animal)("caption", ctx.photographer);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ubuntuName);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ubuntuVersion);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("include", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c1))("show", 3)("size", -4)("description", "Look at this Ubuntu Name #ubuntuNameGenerator!");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.realNames);
          }
        },
        directives: [_photo_photo_component__WEBPACK_IMPORTED_MODULE_2__.PhotoComponent, ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_6__.ShareButtons, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive],
        encapsulation: 2
      });
      /***/
    },

    /***/
    6304:
    /*!**************************!*\
      !*** ./src/app/names.ts ***!
      \**************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ubuntu_names": function ubuntu_names() {
          return (
            /* binding */
            _ubuntu_names
          );
        }
        /* harmony export */

      });

      var _ubuntu_names = {
        "a": {
          "adjectives": ["Able", "Acute", "Adventurous", "Agile", "Aggravated", "Alcoholic", "Alliterating", "Amok", "Angelic", "Antsy", "Amazing", "Ambling", "Amenable", "Amicable", "Anarchic", "Annoying", "Antidisestablishmentarian", "Androgynous", "Archaic", "Arty", "Atomic", "Atrophying", "Awesome", "Aware", "Aztec", "Antlered"],
          "animals": ["Aal", "Aardvark", "Affenpinscher", "Agama", "Albatross", "Alebrije", "Alien", "Alligator", "Alpaca", "Amoeba", "Anemone", "Angelfish", "Anoa", "Ant", "Anteater", "Antelope", "Ape", "Arachnid", "Armadillo", "Asp", "Avocet", "Axolotl", "Aye Aye"],
          "version": {
            "initial_year": 17,
            "month": 10
          }
        },
        "b": {
          "adjectives": ["Ballsy", "Batty", "Barking", "Belching", "Bellicose", "Bewildered", "Blustering", "Boggling", "Boisterous", "Bonkers", "Bounding", "Brainy", "Brave", "Brazen", "Breezy", "Brilliant", "Bright", "Bumpy", "Busy"],
          "animals": ["Baboon", "Badger", "Barnacle", "Barracuda", "Bat", "Beagle", "Bear", "Beaver", "Bee", "Beetle", "Bison", "Bitch", "Bittern", "Blackbird", "Blowfish", "Bluejay", "Bobcat", "Bonobo", "Bothrop", "Bowerbird", "Buck", "Bull", "Bunny"],
          "version": {
            "initial_year": 18,
            "month": 4
          }
        },
        "c": {
          "adjectives": ["Calculating", "Callous", "Campy", "Canny", "Canonical", "Careful", "Cavalier", "Celebrating", "Charming", "Cheeky", "Cheerful", "Cheesy", "Chirping", "Chocolate", "Chronic", "Chummy", "Clever", "Clumsy", "Colonel", "Constipated", "Cool", "Courageous", "Crabby", "Crafty", "Cranky", "Crazy", "Crooked", "Cruising", "Cuddly", "Culpable", "Cunning", "Cute", "Curt", "Cosmic"],
          "animals": ["Camel", "Capybara", "Caracal", "Cardinal", "Caribou", "Cassowary", "Cat", "Caterpillar", "Centipede", "Chameleon", "Chapulín", "Cheetah", "Chickadee", "Chicken", "Chimp", "Chinchilla", "Chipmunk", "Chupacabra", "Coati", "Cobra", "Cockatoo", "Condor", "Cony", "Coot", "Cougar", "Cow", "Coyote", "Crab", "Crane", "Crocodile", "Crow", "Cuttlefish"],
          "version": {
            "initial_year": 18,
            "month": 10
          }
        },
        "d": {
          "adjectives": ["Dapper", "Dangerous", "Daring", "Dastardly", "Daunting", "Dazzling", "Defiant", "Diligent", "Disaffected", "Disorderly", "Dogmatic", "Dreamy", "Drowsy", "Durable", "Dutiful"],
          "animals": ["Deer", "Devil", "Dingo", "Diplodocus", "Dodo", "Doe", "Dog", "Dolphin", "Donkey", "Dormouse", "Dove", "Dragon", "Drake", "Dryad", "Duck", "Dugong", "Dungbeetle", "Dzo"],
          "version": {
            "initial_year": 19,
            "month": 4
          }
        },
        "e": {
          "adjectives": ["Eager", "Early", "Earnest", "Easy", "Eccentric", "Eclectic", "Edgy", "Eel", "Eerie", "Effervescent", "Electric", "Eminent", "Elegant", "Elite", "Eloquent", "Embraceable", "Enlightened", "Enoumous", "Ergonomic", "Erratic", "Euphoric", "Evangelizing", "Exquisite", "Extrovert", "Eked"],
          "animals": ["Eagle", "Eagle", "Earthworm", "Earwig", "Echidna", "Eel", "Eft", "Eland", "Elephant", "Elf", "Elk", "Emu", "Ermine", "Escargot", "Euglena", "Ewe"],
          "version": {
            "initial_year": 19,
            "month": 10
          }
        },
        "f": {
          "adjectives": ["Fair", "Fairies", "Fanatical", "Fantastic", "Farsighted", "Fast", "Fatuous", "Fecund", "Feisty", "Festive", "Ferocious", "Fierce", "Fiery", "Fishy", "Fitchew", "Flamboyant", "Flakey", "Flashy", "Flippant", "Flirty", "Fluent", "Flying", "Foxy", "Freaky", "Friendly", "Frisky", "Froody", "Fruity", "Functional", "Funky", "Furious", "Furry", "Fuzzy"],
          "animals": ["Falcon", "Fawn", "Feline", "Fenestrator", "Fenix", "Fennec", "Ferret", "Fieldmouse", "Finch", "Finfoot", "Firefly", "Fish", "Flamingo", "Flight", "Fly", "Foundling", "Fox", "Frog", "Fruitbat", "Fugu", "Furbolg"],
          "version": {
            "initial_year": 20,
            "month": 4
          }
        },
        "g": {
          "adjectives": ["Gaia", "Gallant", "Galloping", "Gallus", "Gargantuan", "Gelatinous", "Giddy", "Genderqueer", "Giggling", "Glad", "Gleaming", "Gnathonic", "Gnathal", "Gnomic", "Gnostic", "Gooey", "Glorious", "Goofy", "Gol", "Gorgeous", "Graceful", "Gracious", "Great", "Greedy", "Gregarious", "Grinning", "Gritty", "Grizzly", "Groovy", "Grumpy", "Gutsy"],
          "animals": ["Galah", "Gannet", "Gappu", "Gator", "Gazelle", "Gecko", "Gelding", "Gerbil", "Ghost", "Gibbon", "Giraffe", "Gnarwhal", "Gnat", "Gnu", "Goat", "Gobbler", "Goblin", "Goldfinch", "Goose", "Gopher", "Gorilla", "Goshawk", "Grebe", "Groundhog", "Grue", "Gryphon", "Guanaco", "Gull", "Guppy", "Gurk"],
          "version": {
            "initial_year": 20,
            "month": 10
          }
        },
        "h": {
          "adjectives": ["Hairy", "Happy", "Hardy", "Haughty", "Hazardous", "Helpful", "Helpless", "Hilarious", "Hippy", "Hoary", "Holy", "Hoopy", "Hopping", "Horned", "Horny", "Horrible", "Hot", "Howling", "Huge", "Humble", "Humourous", "Humpin", "Hungry", "Hyperactive"],
          "animals": ["Hamster", "Hare", "Harrier", "Hartebeest", "Hawk", "Hedgehog", "Heffalump", "Hen", "Heron", "Hippo(potamus)", "Hoopoe", "Hornet", "Horse", "Horus", "Hounddog", "Human", "Hummingbird", "Humpback", "Husky", "Hyena", "Hypnotoad"],
          "version": {
            "initial_year": 20,
            "month": 4
          }
        },
        "i": {
          "adjectives": ["Icky", "Icy", "Idyllic", "Iffy", "Igneous", "Ignited", "Illuminating", "Illustrious", "Immodest", "Immortal", "Impish", "Impressive", "Incendiary", "Incomparable", "Inconceivable", "Incontinent", "Incredible", "Incriminatory", "Indefatigable", "Indelible", "Industrious", "Inebriated", "Ineffable", "Inescapable", "Inestimable", "Inevitable", "Inexorable", "Infallible", "Inflammatory", "Inflationary", "Ingenious", "Ingratiating", "Initiatory", "Inky", "Innocent", "Innovatory", "Inquisitive", "Insanitary", "Insatiable", "Inscrutable", "Insightful", "Insolent", "Insouciant", "Inspirational", "Inspired", "Insurgent", "Intelligent", "Interagency", "Intercalary", "Intercessory", "Intercity", "Intermediary", "Interstellar", "Intervarsity", "Intimate", "Intimidated", "Intrepid", "Investigatory", "Irate", "Iridescent", "Irie", "Irksome", "Irrefutable", "Itchy"],
          "animals": ["Ibex", "Ibis", "Ichabodcraniosaurus", "Ichthyosaur", "Iguana", "Iguana", "Iguana", "Iguanodon", "Iguanosaurus", "Iliosuchus", "Ilokelesia", "Imp", "Impala", "Incisivosaurus", "Indosaurus", "Indosuchus", "Indri", "Ingenia", "Inkanyamba", "Inosaurus", "Insect", "Irritator", "Irukandji", "Isanosaurus", "Ischisaurus", "Ischyrosaurus", "Isisaurus", "Isopoda", "Issasaurus", "Itemirus", "Iuticosaurus", "Ivory"],
          "version": {
            "initial_year": 21,
            "month": 10
          }
        },
        "j": {
          "adjectives": ["Jabbering", "Jaded", "Jaundice", "Jaunty", "Jazzy", "Jealous", "Jiggly", "Jinchira", "Jittery", "Jiving", "Jocular", "Jocund", "Jodeling", "Jogging", "Jolly", "Jolted", "Jolty", "Jousting", "Jovial", "Joyous", "Jubilant", "Judicious", "Juggling", "Juicy", "Jumbled", "Jumping", "Jumpity", "Jumpy", "Jungle", "Jungly", "Jurassic", "Juvenile"],
          "animals": ["Jabberwock", "Jacana", "Jackal", "Jackalope", "Jackass", "Jackrabbit", "Jackrabbit", "Jaguar", "Javelina", "Jay", "Jaybird", "Jellyfish", "Jentink's", "Jerboa", "Joey", "Jubata", "Junco", "Junebug"],
          "version": {
            "initial_year": 22,
            "month": 4
          }
        },
        "k": {
          "adjectives": ["Kafkaesque", "Kaleidoscopic", "Kamikaze", "Kanny", "Karmic", "Katie", "Kayoed", "Keeking", "Keen", "Keepable", "Kempy", "Khaki", "Kick-ass", "Kicking", "Kicky", "Killer", "Kilted", "Kind", "Kindhearted", "Kinetic", "King-sized", "Kingly", "Kinky", "Kissable", "Kissy", "Kitschy", "Kleptomaniacal", "Klutzy", "Knavish", "Knightly", "Knobby", "Knotty", "Kooky", "Kurt", "Kvetching"],
          "animals": ["Kakapo", "Kalong", "Kangaroo", "Katydid", "Kea", "Kelpie", "Kestrel", "Kid", "Killdeer", "Kingfisher", "Kinkajou", "Kite", "Kitten", "Kittie", "Kittiwake", "Kittyhawk", "Kiwi", "Knight", "Koala", "Kodiak", "Kodkod", "Koi", "Kolibri", "Komodo", "Konqui", "Kookaburra", "Kouprey", "Kowari", "Kraut", "Krocodile", "Kudu"],
          "version": {
            "initial_year": 22,
            "month": 10
          }
        },
        "l": {
          "adjectives": ["Lampooning", "Languid", "Lascivious", "Laudable", "Laughable", "Laughing", "Lazy", "Leaky", "Leal", "Leaping", "Leapy", "Leftist", "Lethal", "Liberal", "Limp", "Lingual", "Listless", "Lithe", "Litigious", "Lively", "Lofty", "Lonely", "Longhorn", "Loopy", "Loquacious", "Lordly", "Lovely", "Lucid", "Lucky", "Lugubrious", "Luminiferous", "Luminous", "Lurid", "Luscious", "Lusty"],
          "animals": ["Labrador", "Ladybug", "Lagomorph", "Lamantin", "Lamb", "Lamprey", "Lapwing", "Lark", "Leafhopper", "Leech", "Lemming", "Lemur", "Leopard", "Leopon", "Liger", "Limpet", "Lion", "Lizard", "Llama", "Lobster", "Longhorn", "Loompa", "Loon", "Lorax", "Loris", "Louse", "lycaon", "Lynx"],
          "version": {
            "initial_year": 23,
            "month": 4
          }
        },
        "m": {
          "adjectives": ["Macular", "Mad", "Magical", "Magistical", "Magnanimous", "Magnetic", "Magnificent", "Maieutic", "Majestic", "Majim", "Majuscul", "Malapert", "Malicious", "Malodorous", "Malty", "Mammoth", "Mangy", "Manic", "Marauding", "Marvelous", "Massive", "Masterful", "Maudlin", "Maverick", "Mazarine", "Meandering", "Measured", "Meaty", "Melancholic", "Melic", "Melliferous", "Mellifluous", "Mellow", "Melodic", "Melodious", "Memorable", "Menacing", "Menstrual", "Mental", "Mercantile", "Mercenary", "Merciful", "Merciless", "Mercurial", "Meridian", "Merry", "Mesmeric", "Metallic", "Methodic", "Meticulous", "Metric", "Mettled", "Mickle", "Mighty", "Mild", "Militant", "Mindful", "Mini", "Minimalist", "Minty", "Miraculous", "Mischievous", "Misty", "Mobile", "Modest", "Modish", "Momentous", "Monadic", "Monastic", "Monty", "Moonlight", "Moral", "Mordant", "Moxious", "Murphy", "Muscled", "Mushy", "Musical", "Musky", "Muttering", "Myriad", "Mysterious", "Mystic", "Mystical", "Mythical"],
          "animals": ["Macaque", "Macaw", "Macropod", "Maggots", "Magpie", "Mallard", "Mammoth", "Man", "Manatee", "Mandrill", "Manta", "Mantis", "Mara", "Marlin", "Marmot", "Marsupilami", "Marten", "Mastiff", "Meadowlark", "Meerkat", "Millipede", "Mink", "Minnow", "Mobutu", "Mockingbird", "Mole", "Mollusk", "Molly", "Monal", "Monca", "Mongoose", "Monitor", "Monkey", "Moose", "Mosquito", "Moth", "Motmot", "Mouflon", "Mouse", "Mule", "Muskox", "Muskrat", "Mustang", "Mutt", "Myna"],
          "version": {
            "initial_year": 23,
            "month": 10
          }
        },
        "n": {
          "adjectives": ["Nano", "Nasty", "Natty", "Naughty", "Nauseous", "Necrotising", "Nefarious", "Nerdy", "Nested", "Neurotic", "Nifty", "Nimble", "Nippy", "Noble", "Nocturnal", "Nomadic", "Normal", "Normandic", "Nostalgic", "Novel", "Null", "Nutritious"],
          "animals": ["Naiad", "Narwhal", "Newt", "Nicholine", "Nightelf", "Nightingale", "Nightjar", "Ninf", "Numbat", "Nutria", "Nymph"],
          "version": {
            "initial_year": 24,
            "month": 4
          }
        },
        "o": {
          "adjectives": ["Obedient", "Oblivious", "Obnoxious", "Obsequious", "Observing", "Obstreperous", "Obtuse", "Obverse", "Obvious", "Occult", "Octal", "Octennial", "Odd", "Oily", "Okay", "Omnific", "Omniscient", "Oneiric", "Opportune", "Opportunistic", "Opulent", "Oral", "Orderly", "Ordinary", "Orgasmic", "Orgiastic", "Origamist", "Ornery", "Orthodox", "Orthogenic", "Oscillating", "Ostentatious"],
          "animals": ["Ocelot", "Octopus", "Okapi", "Oompa-loompa", "Opossum", "Orangutan", "Orc", "Orca", "Oriole", "Oryx", "Ostrich", "Otter", "Owl", "Ox", "Oyster"],
          "version": {
            "initial_year": 24,
            "month": 10
          }
        },
        "p": {
          "adjectives": ["Pacific", "Panacean", "Parabolic", "Paradisaic", "Paramount", "Passive", "Peachy", "Pedantic", "Perceptive", "Perennial", "Perky", "Persistent", "Persnickety", "Perverse", "Phantastic", "Phantom", "Phat", "Philantropic", "Philosophical", "Phlegmatic", "Phlegmatic", "Phobic", "Phooka", "Photogenic", "Pickled", "Pimping", "Pink", "Plastered", "Plastic", "Playful", "Plonky", "Plucky", "Plutonic", "Poetic", "Pointy", "Pokey", "Polished", "Polyplastic", "Posh", "Powerful", "Powersaver", "Pragmatic", "Prancing", "Precise", "Precocious", "Predatory", "Predictive", "Predominate", "Prestidigious", "Pretty", "Priapic", "Prickly", "Prideful", "Prissy", "Pristine", "Proactive", "Prolific", "Proud", "Prowly", "Prudent", "Psychedelic", "Psychic", "Pulchritudinous", "Purring", "Pyroclastic", "Pyromaniac", "Pyrotechnic"],
          "animals": ["Pademelon", "Panda", "Pangolin", "Panther", "Parakeet", "Parrot", "Partridge", "Peacock", "Peafowl", "Peccary", "Pegasus", "Pelican", "Penguin", "Pheasant", "Phoenix", "Pichi", "Pig", "Pigeon", "Piglet", "Pika", "Piraña", "Piranha", "Pitbull", "Pixi", "Platypus", "Polecat", "Pony", "Porcupine", "Porpoise", "Possum", "Primate", "Pronghorn", "Protozoa", "Puffin", "Puma", "Python"],
          "version": {
            "initial_year": 25,
            "month": 4
          }
        },
        "q": {
          "adjectives": ["Quaint", "Quaking", "Quantal", "Quantum", "Quarter", "Queer", "Querulous", "Quick", "Quiet", "Quintessential", "Quirky", "Quivering", "Quixotic"],
          "animals": ["Qantassaurus", "Quagga", "Quahog", "Quail", "Quetzal", "Quetzalcoatl", "Quokka", "Quoll"],
          "version": {
            "initial_year": 25,
            "month": 10
          }
        },
        "r": {
          "adjectives": ["Rabid", "Racey", "Racing", "Radiant", "Radical", "Rambunctious", "Rampant", "Rancid", "Randy", "Rapid", "Raring", "Rational", "Raucous", "Raunchy", "Reasonable", "Rebel", "Rebellious", "Rednosed", "Reminiscent", "Resonant", "Rhapsy", "Ribald", "Rich", "Risky", "Roasted", "Robust", "Rolly", "Rowdy", "Rugged", "Runcible", "Ruthless"],
          "animals": ["Rabbit", "Raccoon", "Raptor", "Raptor", "Rat", "Ratel", "Rattlesnake", "Raven", "Redbird", "Reindeer", "Rhea", "Rhino", "Ringtail", "Roach", "Roadrunner", "Robin", "Rook", "Rooster", "Rottweiler"],
          "version": {
            "initial_year": 26,
            "month": 4
          }
        },
        "s": {
          "adjectives": ["Saccate", "Saccharine", "Sagacious", "Sage", "Salivating", "Salubrious", "Sanguine", "Sarcastic", "Sardonic", "Sassy", "Saucy", "Scary", "Scrawny", "Screwy", "Secretive", "Selenographic", "Selenomorphic", "Sensual", "Sentimental", "Serendipitous", "Serious", "Servile", "Severe", "Sexy", "Sharp", "Shiny", "Shrewd", "Silly", "Skinny", "Slick", "Slim", "Slimmy", "Slinky", "Slippery", "Slippy", "Smelly", "Smiling", "Smitten", "Smooth", "Snappy", "Snazzy", "Sneaky", "Soaring", "Solid", "Sophisticated", "Sound", "Spastic", "Special", "Spectacular", "Speedy", "Spicy", "Spooky", "Spotty", "Sprightly", "Spunky", "Squidgy", "Squirly", "Stalwart", "Stealthy", "Stelene", "Steward", "Stocky", "Strapping", "Streetwise", "Stressful", "Striking", "Stunning", "Stupendous", "Sturdy", "Suave", "Suctorial", "Sudden", "Sultry", "Superstitious", "Surreptitious", "Swarthy"],
          "animals": ["Sabretooth", "Salamander", "Salmon", "Saola", "Sasquatch", "Satyr", "Scallop", "Scorpion", "Scorpionfish", "Scottie", "Seadonkey", "Seagull", "Seahorse", "Seal", "Serval", "Shark", "Sheep", "Shih-Tzu", "Shrew", "Silverfish", "Sitatunga", "Skunk", "Slippershell", "Sloth", "Snail", "Snake", "Snake", "Snapper", "Snapping-Turtle", "Snow-Leopard", "Spaniel", "Sparrow", "Spider", "Springbok", "Squid", "Squirrel", "Stallion", "Starfish", "Stingray", "Sukko", "Suricata", "Suricate", "Swallow", "Swan", "Swordfish"],
          "version": {
            "initial_year": 26,
            "month": 10
          }
        },
        "t": {
          "adjectives": ["Tabby", "Tactful", "Talented", "Tame", "Tantric", "Tangible", "Tangled", "Tanked", "Tasteful", "Tasty", "Taught", "Teachable", "Tedious", "Teeming", "Tempean", "Temperamental", "Temperate", "Tenable", "Tenacious", "Tender", "Terrific", "Thankful", "Therapeutic", "Thorough", "Thoughtful", "Thrashing", "Thrifty", "Thrilled", "Thrilling", "Thriving", "Ticklish", "Tidy", "Tight", "Timely", "Timeless", "Tiny", "Tipsy", "Tireless", "Tolerant", "Touching", "Tough", "Touted", "Trailblazing", "Tranquil", "Transgendered", "Transcendent", "Transcendental", "Transsexual", "Transparent", "Transpicuous", "Traumatized", "Traveled", "Treasured", "Tremendous", "Tretis", "Tricky", "Trim", "Trippy", "Triumphant", "True", "Truculent", "Trusted", "Trustful", "Trustworthy", "Trusty", "Truthful", "Twirling", "Tweaky", "Twitchy", "Tympanic"],
          "animals": ["Tahr", "Taipan", "Takahe", "Tamandua", "Tapir", "Tarantula", "Tarsier", "Tasmanian-Devil", "Tenrec", "Termite", "Terrapin", "Terrier", "Tiger", "Tigon", "Tigerfish", "Toad", "Tortoise", "Toucan", "Trogon", "Troll", "Trout", "Tuatara", "Turkey", "Turtle", "Tassie-Thylacine", "Tazzy-Thylacine", "Tesselated"],
          "version": {
            "initial_year": 27,
            "month": 4
          }
        },
        "u": {
          "adjectives": ["Ubuntu", "Ugly", "Ultimate", "Unadulterated", "Unapologetic", "Unassailable", "Unassuming", "Unbelievable", "Ultrarelativistic", "Unctuous", "Underrated", "Underrepresented", "Understanding", "Undulating", "Unplugged", "Unpretentious", "Unrated", "Unrepentant", "Unruly", "Untamed", "Untapped", "Uppity", "Undead", "Uproarious", "Ubiquitous", "Utopic"],
          "animals": ["Uakari", "Ubuntu", "Uglybird", "Utonagan", "Ungulate", "Unicorn", "Urchin", "Urial", "Urubu", "Urukai", "Uguisu", "Umbrian", "Uintathere"],
          "version": {
            "initial_year": 27,
            "month": 10
          }
        },
        "v": {
          "adjectives": ["Valiant", "Vast", "Veracious", "Versatile", "Veteran", "Vibrant", "Violent", "Viral", "Virtuoso", "Vitriolic", "Vivacious", "Vivid", "Vociferous", "Volatile", "Voluptuous", "Vomiting", "Voracious"],
          "animals": ["Veery", "Velociraptor", "Vervet", "Vicuña", "Viper", "Vixen", "Vizcacha", "Vole", "Vulture"],
          "version": {
            "initial_year": 28,
            "month": 4
          }
        },
        "w": {
          "adjectives": ["Wandering", "Warm", "Warty", "Western Tragopan", "Wild", "Wily", "Wimpy", "Windy", "Witty", "Wobbly", "Wonderful", "Woolly"],
          "animals": ["Wallaby", "Walrus", "Warthog", "Wasp", "Weasel", "Werewolf", "Weevil", "Whale", "Wildebeest", "Wolf", "Wolverine", "Wombat", "Woodchuck", "Woodpeck", "Worm", "Wren", "Weka"],
          "version": {
            "initial_year": 28,
            "month": 10
          }
        },
        "x": {
          "adjectives": ["Xanthic", "Xenodochial", "Xenolithic", "Xenophobic", "Xenial", "Xeric", "Xintillating", "Xiphoid", "Xylographic", "Xylophonic"],
          "animals": ["Xebu", "Xenarthra", "Xenomorph", "Xenoturbella", "Xenops", "Xerus", "Xiphias", "Xipho", "X-ray fish", "Xue Bao", "Xoloitzcuintle", "Xólotl"],
          "version": {
            "initial_year": 29,
            "month": 4
          }
        },
        "y": {
          "adjectives": ["Yakkity", "Yammering", "Yelping", "Yiffy", "Yippity", "Youthful", "Yummy", "Yodeling"],
          "animals": ["Yaffle", "Yak", "Yellowjacket", "Yeti"],
          "version": {
            "initial_year": 29,
            "month": 10
          }
        },
        "z": {
          "adjectives": ["Zany", "Zealous", "Zen", "Zesty", "Zippy", "Zooming", "Zarking"],
          "animals": ["Zealot", "Zebra", "Zebrafish", "Zebu", "Zorilla", "Zorse"],
          "version": {
            "initial_year": 30,
            "month": 4
          }
        }
      };
      /***/
    },

    /***/
    3004:
    /*!******************************************!*\
      !*** ./src/app/photo/photo.component.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PhotoComponent": function PhotoComponent() {
          return (
            /* binding */
            _PhotoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      1477);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      93);

      function PhotoComponent_figure_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figcaption", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.caption);
        }
      }

      var _PhotoComponent = /*#__PURE__*/_createClass(function _PhotoComponent() {
        _classCallCheck(this, _PhotoComponent);
      });

      _PhotoComponent.ɵfac = function PhotoComponent_Factory(t) {
        return new (t || _PhotoComponent)();
      };

      _PhotoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PhotoComponent,
        selectors: [["photo"]],
        inputs: {
          url: "url",
          title: "title",
          caption: "caption"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "figure w-100", 4, "ngIf"], [1, "figure", "w-100"], [1, "img-thumbnail", "w-100", 3, "src", "alt"], [1, "text-right", "figure-caption"]],
        template: function PhotoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhotoComponent_figure_0_Template, 4, 3, "figure", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url != "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        encapsulation: 2
      });
      /***/
    },

    /***/
    2053:
    /*!*************************************************!*\
      !*** ./src/app/ubuntu-release-names.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UbuntuReleaseNamesService": function UbuntuReleaseNamesService() {
          return (
            /* binding */
            _UbuntuReleaseNamesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      3927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      1477);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      4301);

      var _UbuntuReleaseNamesService = /*#__PURE__*/function () {
        function _UbuntuReleaseNamesService(http) {
          _classCallCheck(this, _UbuntuReleaseNamesService);

          this.http = http;
        }
        /**
         * getNamesCVS
        */


        _createClass(_UbuntuReleaseNamesService, [{
          key: "getNamesCVS",
          value: function getNamesCVS() {
            return this.http.get('https://debian.pages.debian.net/distro-info-data/ubuntu.csv', {
              responseType: 'text'
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(function (data) {
              var lines = data.split('\n');
              lines.splice(0, 1);
              lines.pop();
              var nameArray = lines.map(function (item) {
                var fields = item.split(',');
                var version = fields[0].replace('LTS', '').trim();
                var codename = fields[1];
                var adjective = codename.split(' ')[0];
                var animal = codename.split(' ')[1];
                return {
                  adjective: adjective,
                  animal: animal,
                  version: version
                };
              });
              nameArray.reverse();
              return nameArray;
            }));
          }
        }]);

        return _UbuntuReleaseNamesService;
      }();

      _UbuntuReleaseNamesService.ɵfac = function UbuntuReleaseNamesService_Factory(t) {
        return new (t || _UbuntuReleaseNamesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _UbuntuReleaseNamesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _UbuntuReleaseNamesService,
        factory: _UbuntuReleaseNamesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var _environment = {
        production: false
      };
      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      4919);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      1477);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map
(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-audit-approve-audit-approve-module-ngfactory"], {
    /***/
    "./src/app/modules/audit-home/modules/audit-approve/audit-approve-routing.module.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/audit-home/modules/audit-approve/audit-approve-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: AuditApproveRoutingModule */

    /***/
    function srcAppModulesAuditHomeModulesAuditApproveAuditApproveRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditApproveRoutingModule", function () {
        return AuditApproveRoutingModule;
      });
      /* harmony import */


      var _audit_approve_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./audit-approve.component */
      "./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.ts");

      var routes = [{
        path: "",
        component: _audit_approve_component__WEBPACK_IMPORTED_MODULE_0__["AuditApproveComponent"]
      }];

      var AuditApproveRoutingModule = function AuditApproveRoutingModule() {
        _classCallCheck(this, AuditApproveRoutingModule);
      };
      /***/

    },

    /***/
    "./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.ngfactory.js":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.ngfactory.js ***!
      \***********************************************************************************************/

    /*! exports provided: RenderType_AuditApproveComponent, View_AuditApproveComponent_0, View_AuditApproveComponent_Host_0, AuditApproveComponentNgFactory */

    /***/
    function srcAppModulesAuditHomeModulesAuditApproveAuditApproveComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_AuditApproveComponent", function () {
        return RenderType_AuditApproveComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AuditApproveComponent_0", function () {
        return View_AuditApproveComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_AuditApproveComponent_Host_0", function () {
        return View_AuditApproveComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditApproveComponentNgFactory", function () {
        return AuditApproveComponentNgFactory;
      });
      /* harmony import */


      var _audit_approve_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./audit-approve.component.scss.shim.ngstyle */
      "./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.scss.shim.ngstyle.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../node_modules/@angular/material/card/index.ngfactory */
      "./node_modules/@angular/material/card/index.ngfactory.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/fesm2015/card.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/fesm2015/animations.js");
      /* harmony import */


      var _node_modules_ng2_ckeditor_ng2_ckeditor_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../node_modules/ng2-ckeditor/ng2-ckeditor.ngfactory */
      "./node_modules/ng2-ckeditor/ng2-ckeditor.ngfactory.js");
      /* harmony import */


      var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-ckeditor */
      "./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _audit_approve_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./audit-approve.component */
      "./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.ts");
      /* harmony import */


      var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../shared/services/auth.service */
      "./src/app/shared/services/auth.service.ts");
      /* harmony import */


      var _shared_services_business_layer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../shared/services/business-layer.service */
      "./src/app/shared/services/business-layer.service.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_AuditApproveComponent = [_audit_approve_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_AuditApproveComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_AuditApproveComponent,
        data: {}
      });

      function View_AuditApproveComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 50, "mat-card", [["class", "example-card mat-card mat-focus-indicator"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 4, "mat-card-header", [["align-items:center", ""], ["class", "mat-card-header"], ["justify-content:center", ""]], null, null, null, _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Formulario"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 41, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 10, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "label", [["for", "exampleFormControlInput1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Nombre Empresa: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 4, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "label", [["for", "exampleFormControlInput1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Tipo de Negocio"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \xA0 \xA0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 4, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "label", [["for", "exampleFormControlInput1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Direcci\xF3n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](25, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \xA0 \xA0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 4, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "label", [["for", "exampleFormControlTextarea1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Requisitos"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](31, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" \xA0 \xA0 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 5, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "label", [["for", "exampleFormControlTextarea1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Propuesta"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 0, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "pre", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](38, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "label", [["for", "exampleFormControlTextarea1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Respuesta"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 7, "ckeditor", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
          var ad = true;
          var _co = _v.component;

          if ("ngModelChange" === en) {
            var pd_0 = (_co.ckeditorContent = $event) !== false;
            ad = pd_0 && ad;
          }

          return ad;
        }, _node_modules_ng2_ckeditor_ng2_ckeditor_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ɵa_0"], _node_modules_ng2_ckeditor_ng2_ckeditor_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ɵa"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 13287424, null, 2, ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
          toolbarButtons: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
          toolbarGroups: 1
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"], function (p0_0) {
          return [p0_0];
        }, [ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"]]], {
          model: [0, "model"]
        }, {
          update: "ngModelChange"
        }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, 0, 1, "mat-card-actions", [["class", "mat-card-actions"], ["style", "text-align:center"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null)], function (_ck, _v) {
          var _co = _v.component;
          var currVal_13 = _co.ckeditorContent;

          _ck(_v, 46, 0, currVal_13);
        }, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations";

          _ck(_v, 0, 0, currVal_0);

          var currVal_1 = _co.element.nombre;

          _ck(_v, 14, 0, currVal_1);

          var currVal_2 = _co.element.negocio;

          _ck(_v, 19, 0, currVal_2);

          var currVal_3 = _co.element.direccion;

          _ck(_v, 25, 0, currVal_3);

          var currVal_4 = _co.element.requisitos;

          _ck(_v, 31, 0, currVal_4);

          var currVal_5 = _co.element.propuesta;

          _ck(_v, 38, 0, currVal_5);

          var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassUntouched;

          var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassTouched;

          var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassPristine;

          var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassDirty;

          var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassValid;

          var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassInvalid;

          var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).ngClassPending;

          _ck(_v, 41, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12);

          var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).align === "end";

          _ck(_v, 49, 0, currVal_14);
        });
      }

      function View_AuditApproveComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-audit-approve", [], null, null, null, View_AuditApproveComponent_0, RenderType_AuditApproveComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _audit_approve_component__WEBPACK_IMPORTED_MODULE_8__["AuditApproveComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _shared_services_business_layer_service__WEBPACK_IMPORTED_MODULE_10__["BusinessLayerService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var AuditApproveComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-audit-approve", _audit_approve_component__WEBPACK_IMPORTED_MODULE_8__["AuditApproveComponent"], View_AuditApproveComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.scss.shim.ngstyle.js":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.scss.shim.ngstyle.js ***!
      \*******************************************************************************************************/

    /*! exports provided: styles */

    /***/
    function srcAppModulesAuditHomeModulesAuditApproveAuditApproveComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXVkaXQtaG9tZS9tb2R1bGVzL2F1ZGl0LWFwcHJvdmUvYXVkaXQtYXBwcm92ZS5jb21wb25lbnQuc2NzcyJ9 */"];
      /***/
    },

    /***/
    "./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: AuditApproveComponent */

    /***/
    function srcAppModulesAuditHomeModulesAuditApproveAuditApproveComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditApproveComponent", function () {
        return AuditApproveComponent;
      });

      var AuditApproveComponent = /*#__PURE__*/function () {
        function AuditApproveComponent(formBuilder, authService, b_Layer
        /*private formularioService: FormulariosService,
        private historialService: HistorialService*/
        ) {
          _classCallCheck(this, AuditApproveComponent);

          this.formBuilder = formBuilder;
          this.authService = authService;
          this.b_Layer = b_Layer;
          this.prueba = "prueba";
        }

        _createClass(AuditApproveComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.element = this.b_Layer.currentElent;
            console.log(this.element.nombre);
            /*this.formularioForm = this.formBuilder.group({
              nombre: ["", [Validators.required]],
              negocio: ["", [Validators.required]],
              direccion: ["", [Validators.required]],
              requisitos: ["", [Validators.required]],
              propuesta: ["", [Validators.required]],
              ownerId: "",
              estado: ""
            });
            this.historialForm = this.formBuilder.group({
              sucursal: "",
              negocio: "",
              estado: "",
              ownerId: ""
            });*/
          }
        }, {
          key: "onCreate",
          value: function onCreate() {
            /*console.log("Form group: ", this.formularioForm.value);
            this.formularioSubs = this.formularioService
              .addProduct({
                ...this.formularioForm.value,
                ownerId: this.authService.getUserId(),
                estado: "En Espera"
              })
              .subscribe(
                res => {
                  console.log("Resp: ", res);
                },
                err => {
                  console.log("Error de servidor");
                }
              );*/

            /*this.historialSubs = this.historialService
              .addProduct({
                sucursal: this.formularioForm.value.direccion,
                negocio: this.formularioForm.value.negocio,
                estado: "En Espera",
                ownerId: this.authService.getUserId()
              })
              .subscribe(
                res => {
                  console.log("Resp: ", res);
                },
                err => {
                  console.log("Error de servidor");
                }
              );*/
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.b_Layer.setCurrentElement(null); //this.formularioSubs ? this.formularioSubs.unsubscribe() : "";
            //this.historialSubs ? this.historialSubs.unsubscribe() : "";
          }
        }]);

        return AuditApproveComponent;
      }();
      /***/

    },

    /***/
    "./src/app/modules/audit-home/modules/audit-approve/audit-approve.module.ngfactory.js":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/audit-home/modules/audit-approve/audit-approve.module.ngfactory.js ***!
      \********************************************************************************************/

    /*! exports provided: AuditApproveModuleNgFactory */

    /***/
    function srcAppModulesAuditHomeModulesAuditApproveAuditApproveModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditApproveModuleNgFactory", function () {
        return AuditApproveModuleNgFactory;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _audit_approve_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./audit-approve.module */
      "./src/app/modules/audit-home/modules/audit-approve/audit-approve.module.ts");
      /* harmony import */


      var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../node_modules/@angular/router/router.ngfactory */
      "./node_modules/@angular/router/router.ngfactory.js");
      /* harmony import */


      var _audit_approve_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./audit-approve.component.ngfactory */
      "./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.ngfactory.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/observers */
      "./node_modules/@angular/cdk/fesm2015/observers.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _audit_approve_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./audit-approve-routing.module */
      "./src/app/modules/audit-home/modules/audit-approve/audit-approve-routing.module.ts");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "./node_modules/@angular/cdk/fesm2015/bidi.js");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "./node_modules/@angular/cdk/fesm2015/a11y.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/fesm2015/card.js");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "./node_modules/@angular/cdk/fesm2015/platform.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/fesm2015/button.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/fesm2015/form-field.js");
      /* harmony import */


      var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/cdk/text-field */
      "./node_modules/@angular/cdk/fesm2015/text-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/fesm2015/input.js");
      /* harmony import */


      var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng2-ckeditor */
      "./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js");
      /* harmony import */


      var _audit_approve_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./audit-approve.component */
      "./src/app/modules/audit-home/modules/audit-approve/audit-approve.component.ts");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var AuditApproveModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_audit_approve_module__WEBPACK_IMPORTED_MODULE_1__["AuditApproveModule"], [], function (_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _audit_approve_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AuditApproveComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _audit_approve_routing_module__WEBPACK_IMPORTED_MODULE_9__["AuditApproveRoutingModule"], _audit_approve_routing_module__WEBPACK_IMPORTED_MODULE_9__["AuditApproveRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MATERIAL_SANITY_CHECKS"]], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_16__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_16__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_ckeditor__WEBPACK_IMPORTED_MODULE_18__["CKEditorModule"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_18__["CKEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _audit_approve_module__WEBPACK_IMPORTED_MODULE_1__["AuditApproveModule"], _audit_approve_module__WEBPACK_IMPORTED_MODULE_1__["AuditApproveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_8__["ROUTES"], function () {
          return [[{
            path: "",
            component: _audit_approve_component__WEBPACK_IMPORTED_MODULE_19__["AuditApproveComponent"]
          }]];
        }, [])]);
      });
      /***/

    },

    /***/
    "./src/app/modules/audit-home/modules/audit-approve/audit-approve.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/audit-home/modules/audit-approve/audit-approve.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: AuditApproveModule */

    /***/
    function srcAppModulesAuditHomeModulesAuditApproveAuditApproveModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuditApproveModule", function () {
        return AuditApproveModule;
      });

      var AuditApproveModule = function AuditApproveModule() {
        _classCallCheck(this, AuditApproveModule);
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-audit-approve-audit-approve-module-ngfactory-es5.js.map
(function () {
  function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (self["webpackChunkubuntu_name_generator"] = self["webpackChunkubuntu_name_generator"] || []).push([["polyfills-es5"], {
    /***/
    99:
    /*!*********************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/src/webpack/es5-polyfills.js ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! core-js/es/symbol */
      1871);
      /* harmony import */


      var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! core-js/modules/es.function.bind */
      492);
      /* harmony import */


      var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! core-js/modules/es.function.name */
      1827);
      /* harmony import */


      var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var core_js_modules_es_function_has_instance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! core-js/modules/es.function.has-instance */
      4469);
      /* harmony import */


      var core_js_modules_es_function_has_instance__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_has_instance__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! core-js/modules/es.object.create */
      5983);
      /* harmony import */


      var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! core-js/modules/es.object.define-property */
      4404);
      /* harmony import */


      var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! core-js/modules/es.object.define-properties */
      8932);
      /* harmony import */


      var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! core-js/modules/es.object.get-own-property-descriptor */
      3229);
      /* harmony import */


      var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! core-js/modules/es.object.get-prototype-of */
      9525);
      /* harmony import */


      var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! core-js/modules/es.object.keys */
      6650);
      /* harmony import */


      var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var core_js_modules_es_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! core-js/modules/es.object.get-own-property-names */
      4018);
      /* harmony import */


      var core_js_modules_es_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! core-js/modules/es.object.freeze */
      6637);
      /* harmony import */


      var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var core_js_modules_es_object_seal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! core-js/modules/es.object.seal */
      9662);
      /* harmony import */


      var core_js_modules_es_object_seal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_seal__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var core_js_modules_es_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! core-js/modules/es.object.prevent-extensions */
      382);
      /* harmony import */


      var core_js_modules_es_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_prevent_extensions__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var core_js_modules_es_object_is_frozen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! core-js/modules/es.object.is-frozen */
      1295);
      /* harmony import */


      var core_js_modules_es_object_is_frozen__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_frozen__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var core_js_modules_es_object_is_sealed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! core-js/modules/es.object.is-sealed */
      1287);
      /* harmony import */


      var core_js_modules_es_object_is_sealed__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_sealed__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var core_js_modules_es_object_is_extensible__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! core-js/modules/es.object.is-extensible */
      4690);
      /* harmony import */


      var core_js_modules_es_object_is_extensible__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_extensible__WEBPACK_IMPORTED_MODULE_16__);
      /* harmony import */


      var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! core-js/modules/es.object.assign */
      6802);
      /* harmony import */


      var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_17__);
      /* harmony import */


      var core_js_modules_es_object_is__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! core-js/modules/es.object.is */
      3046);
      /* harmony import */


      var core_js_modules_es_object_is__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is__WEBPACK_IMPORTED_MODULE_18__);
      /* harmony import */


      var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! core-js/modules/es.object.set-prototype-of */
      6803);
      /* harmony import */


      var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_19__);
      /* harmony import */


      var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! core-js/modules/es.object.to-string */
      4405);
      /* harmony import */


      var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_20__);
      /* harmony import */


      var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! core-js/modules/es.object.entries */
      7673);
      /* harmony import */


      var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_21__);
      /* harmony import */


      var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! core-js/modules/es.object.values */
      2322);
      /* harmony import */


      var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_22__);
      /* harmony import */


      var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! core-js/modules/es.object.get-own-property-descriptors */
      7177);
      /* harmony import */


      var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_23__);
      /* harmony import */


      var core_js_modules_es_object_from_entries__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! core-js/modules/es.object.from-entries */
      6042);
      /* harmony import */


      var core_js_modules_es_object_from_entries__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_from_entries__WEBPACK_IMPORTED_MODULE_24__);
      /* harmony import */


      var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! core-js/modules/es.array.concat */
      596);
      /* harmony import */


      var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_25__);
      /* harmony import */


      var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! core-js/modules/es.array.is-array */
      9560);
      /* harmony import */


      var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_26__);
      /* harmony import */


      var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! core-js/modules/es.array.from */
      564);
      /* harmony import */


      var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_27__);
      /* harmony import */


      var core_js_modules_es_array_of__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! core-js/modules/es.array.of */
      721);
      /* harmony import */


      var core_js_modules_es_array_of__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_of__WEBPACK_IMPORTED_MODULE_28__);
      /* harmony import */


      var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! core-js/modules/es.array.join */
      6395);
      /* harmony import */


      var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_29__);
      /* harmony import */


      var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! core-js/modules/es.array.slice */
      2825);
      /* harmony import */


      var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_30__);
      /* harmony import */


      var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! core-js/modules/es.array.splice */
      746);
      /* harmony import */


      var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_31__);
      /* harmony import */


      var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! core-js/modules/es.array.sort */
      6011);
      /* harmony import */


      var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_32__);
      /* harmony import */


      var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! core-js/modules/es.array.for-each */
      9657);
      /* harmony import */


      var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_33__);
      /* harmony import */


      var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! core-js/modules/es.array.map */
      2526);
      /* harmony import */


      var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_34__);
      /* harmony import */


      var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! core-js/modules/es.array.filter */
      6487);
      /* harmony import */


      var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_35__);
      /* harmony import */


      var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! core-js/modules/es.array.some */
      6203);
      /* harmony import */


      var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_36__);
      /* harmony import */


      var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! core-js/modules/es.array.every */
      4693);
      /* harmony import */


      var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_37__);
      /* harmony import */


      var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! core-js/modules/es.array.reduce */
      176);
      /* harmony import */


      var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_38__);
      /* harmony import */


      var core_js_modules_es_array_reduce_right__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! core-js/modules/es.array.reduce-right */
      3548);
      /* harmony import */


      var core_js_modules_es_array_reduce_right__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_right__WEBPACK_IMPORTED_MODULE_39__);
      /* harmony import */


      var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! core-js/modules/es.array.index-of */
      3340);
      /* harmony import */


      var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_40__);
      /* harmony import */


      var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! core-js/modules/es.array.last-index-of */
      6280);
      /* harmony import */


      var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_41__);
      /* harmony import */


      var core_js_modules_es_array_copy_within__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! core-js/modules/es.array.copy-within */
      2877);
      /* harmony import */


      var core_js_modules_es_array_copy_within__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_copy_within__WEBPACK_IMPORTED_MODULE_42__);
      /* harmony import */


      var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! core-js/modules/es.array.fill */
      1970);
      /* harmony import */


      var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_43__);
      /* harmony import */


      var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! core-js/modules/es.array.find */
      8609);
      /* harmony import */


      var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_44__);
      /* harmony import */


      var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! core-js/modules/es.array.find-index */
      2480);
      /* harmony import */


      var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_45__);
      /* harmony import */


      var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! core-js/modules/es.array.iterator */
      9407);
      /* harmony import */


      var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_46__);
      /* harmony import */


      var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! core-js/modules/es.array.includes */
      465);
      /* harmony import */


      var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_47__);
      /* harmony import */


      var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! core-js/modules/es.array.flat */
      3196);
      /* harmony import */


      var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_48__);
      /* harmony import */


      var core_js_modules_es_array_flat_map__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! core-js/modules/es.array.flat-map */
      6976);
      /* harmony import */


      var core_js_modules_es_array_flat_map__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_map__WEBPACK_IMPORTED_MODULE_49__);
      /* harmony import */


      var core_js_modules_es_string_from_code_point__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! core-js/modules/es.string.from-code-point */
      9019);
      /* harmony import */


      var core_js_modules_es_string_from_code_point__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_from_code_point__WEBPACK_IMPORTED_MODULE_50__);
      /* harmony import */


      var core_js_modules_es_string_raw__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! core-js/modules/es.string.raw */
      2770);
      /* harmony import */


      var core_js_modules_es_string_raw__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_raw__WEBPACK_IMPORTED_MODULE_51__);
      /* harmony import */


      var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! core-js/modules/es.string.trim */
      1041);
      /* harmony import */


      var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_52__);
      /* harmony import */


      var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! core-js/modules/es.string.iterator */
      8780);
      /* harmony import */


      var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_53__);
      /* harmony import */


      var core_js_modules_es_string_code_point_at__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! core-js/modules/es.string.code-point-at */
      2713);
      /* harmony import */


      var core_js_modules_es_string_code_point_at__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_code_point_at__WEBPACK_IMPORTED_MODULE_54__);
      /* harmony import */


      var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! core-js/modules/es.string.ends-with */
      4460);
      /* harmony import */


      var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_55__);
      /* harmony import */


      var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! core-js/modules/es.string.includes */
      4657);
      /* harmony import */


      var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_56__);
      /* harmony import */


      var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! core-js/modules/es.string.repeat */
      3191);
      /* harmony import */


      var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_57__);
      /* harmony import */


      var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! core-js/modules/es.string.starts-with */
      9715);
      /* harmony import */


      var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_58__);
      /* harmony import */


      var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! core-js/modules/es.string.anchor */
      7694);
      /* harmony import */


      var core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor__WEBPACK_IMPORTED_MODULE_59__);
      /* harmony import */


      var core_js_modules_es_string_big__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! core-js/modules/es.string.big */
      4623);
      /* harmony import */


      var core_js_modules_es_string_big__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_big__WEBPACK_IMPORTED_MODULE_60__);
      /* harmony import */


      var core_js_modules_es_string_blink__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! core-js/modules/es.string.blink */
      2799);
      /* harmony import */


      var core_js_modules_es_string_blink__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_blink__WEBPACK_IMPORTED_MODULE_61__);
      /* harmony import */


      var core_js_modules_es_string_bold__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! core-js/modules/es.string.bold */
      976);
      /* harmony import */


      var core_js_modules_es_string_bold__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_bold__WEBPACK_IMPORTED_MODULE_62__);
      /* harmony import */


      var core_js_modules_es_string_fixed__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! core-js/modules/es.string.fixed */
      8491);
      /* harmony import */


      var core_js_modules_es_string_fixed__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_fixed__WEBPACK_IMPORTED_MODULE_63__);
      /* harmony import */


      var core_js_modules_es_string_fontcolor__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! core-js/modules/es.string.fontcolor */
      8937);
      /* harmony import */


      var core_js_modules_es_string_fontcolor__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_fontcolor__WEBPACK_IMPORTED_MODULE_64__);
      /* harmony import */


      var core_js_modules_es_string_fontsize__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! core-js/modules/es.string.fontsize */
      9273);
      /* harmony import */


      var core_js_modules_es_string_fontsize__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_fontsize__WEBPACK_IMPORTED_MODULE_65__);
      /* harmony import */


      var core_js_modules_es_string_italics__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! core-js/modules/es.string.italics */
      9783);
      /* harmony import */


      var core_js_modules_es_string_italics__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_italics__WEBPACK_IMPORTED_MODULE_66__);
      /* harmony import */


      var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! core-js/modules/es.string.link */
      895);
      /* harmony import */


      var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_67__);
      /* harmony import */


      var core_js_modules_es_string_small__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! core-js/modules/es.string.small */
      630);
      /* harmony import */


      var core_js_modules_es_string_small__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_small__WEBPACK_IMPORTED_MODULE_68__);
      /* harmony import */


      var core_js_modules_es_string_strike__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! core-js/modules/es.string.strike */
      4734);
      /* harmony import */


      var core_js_modules_es_string_strike__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_strike__WEBPACK_IMPORTED_MODULE_69__);
      /* harmony import */


      var core_js_modules_es_string_sub__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! core-js/modules/es.string.sub */
      4566);
      /* harmony import */


      var core_js_modules_es_string_sub__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_sub__WEBPACK_IMPORTED_MODULE_70__);
      /* harmony import */


      var core_js_modules_es_string_sup__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! core-js/modules/es.string.sup */
      83);
      /* harmony import */


      var core_js_modules_es_string_sup__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_sup__WEBPACK_IMPORTED_MODULE_71__);
      /* harmony import */


      var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! core-js/modules/es.string.match */
      8427);
      /* harmony import */


      var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_72__);
      /* harmony import */


      var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
      /*! core-js/modules/es.string.replace */
      3474);
      /* harmony import */


      var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_73__);
      /* harmony import */


      var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
      /*! core-js/modules/es.string.search */
      9286);
      /* harmony import */


      var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_74__);
      /* harmony import */


      var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
      /*! core-js/modules/es.string.split */
      3161);
      /* harmony import */


      var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_75__);
      /* harmony import */


      var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
      /*! core-js/modules/es.parse-int */
      840);
      /* harmony import */


      var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_76__);
      /* harmony import */


      var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
      /*! core-js/modules/es.parse-float */
      3646);
      /* harmony import */


      var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_77__);
      /* harmony import */


      var core_js_es_number__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
      /*! core-js/es/number */
      5367);
      /* harmony import */


      var core_js_es_number__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(core_js_es_number__WEBPACK_IMPORTED_MODULE_78__);
      /* harmony import */


      var core_js_es_math__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
      /*! core-js/es/math */
      7397);
      /* harmony import */


      var core_js_es_math__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(core_js_es_math__WEBPACK_IMPORTED_MODULE_79__);
      /* harmony import */


      var core_js_es_date__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
      /*! core-js/es/date */
      789);
      /* harmony import */


      var core_js_es_date__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(core_js_es_date__WEBPACK_IMPORTED_MODULE_80__);
      /* harmony import */


      var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
      /*! core-js/modules/es.regexp.constructor */
      8600);
      /* harmony import */


      var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_81__);
      /* harmony import */


      var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
      /*! core-js/modules/es.regexp.to-string */
      2514);
      /* harmony import */


      var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_82__);
      /* harmony import */


      var core_js_modules_es_regexp_flags__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
      /*! core-js/modules/es.regexp.flags */
      7332);
      /* harmony import */


      var core_js_modules_es_regexp_flags__WEBPACK_IMPORTED_MODULE_83___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_flags__WEBPACK_IMPORTED_MODULE_83__);
      /* harmony import */


      var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
      /*! core-js/modules/es.map */
      7732);
      /* harmony import */


      var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_84___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_84__);
      /* harmony import */


      var core_js_modules_es_weak_map__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
      /*! core-js/modules/es.weak-map */
      4053);
      /* harmony import */


      var core_js_modules_es_weak_map__WEBPACK_IMPORTED_MODULE_85___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map__WEBPACK_IMPORTED_MODULE_85__);
      /* harmony import */


      var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
      /*! core-js/modules/es.set */
      4118);
      /* harmony import */


      var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_86___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_86__);
      /* harmony import */


      var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
      /*! core-js/modules/web.dom-collections.for-each */
      7903);
      /* harmony import */


      var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_87___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_87__);
      /* harmony import */


      var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
      /*! core-js/modules/web.dom-collections.iterator */
      298);
      /* harmony import */


      var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_88___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_88__);
      /* harmony import */


      var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(
      /*! core-js/modules/es.promise */
      3400);
      /* harmony import */


      var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_89___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_89__);
      /* harmony import */


      var core_js_modules_es_json_to_string_tag__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(
      /*! core-js/modules/es.json.to-string-tag */
      3612);
      /* harmony import */


      var core_js_modules_es_json_to_string_tag__WEBPACK_IMPORTED_MODULE_90___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag__WEBPACK_IMPORTED_MODULE_90__);
      /* harmony import */


      var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(
      /*! regenerator-runtime/runtime */
      7106);
      /* harmony import */


      var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_91___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_91__);
      /* harmony import */


      var zone_js_plugins_zone_legacy__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(
      /*! zone.js/plugins/zone-legacy */
      9664);
      /* harmony import */


      var zone_js_plugins_zone_legacy__WEBPACK_IMPORTED_MODULE_92___default = /*#__PURE__*/__webpack_require__.n(zone_js_plugins_zone_legacy__WEBPACK_IMPORTED_MODULE_92__);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // ES2015 symbol capabilities
      // ES2015 function capabilities
      // ES2015 object capabilities
      // ES2015 array capabilities
      // ES2015 string capabilities
      // Zone.js

      /***/

    },

    /***/
    5364:
    /*!********************************************************************!*\
      !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "icon": function icon() {
          return (
            /* binding */
            _icon
          );
        },

        /* harmony export */
        "noAuto": function noAuto() {
          return (
            /* binding */
            _noAuto
          );
        },

        /* harmony export */
        "config": function config() {
          return (
            /* binding */
            _config2
          );
        },

        /* harmony export */
        "toHtml": function toHtml() {
          return (
            /* binding */
            _toHtml
          );
        },

        /* harmony export */
        "layer": function layer() {
          return (
            /* binding */
            _layer
          );
        },

        /* harmony export */
        "text": function text() {
          return (
            /* binding */
            _text
          );
        },

        /* harmony export */
        "counter": function counter() {
          return (
            /* binding */
            _counter
          );
        },

        /* harmony export */
        "library": function library() {
          return (
            /* binding */
            _library
          );
        },

        /* harmony export */
        "dom": function dom() {
          return (
            /* binding */
            _dom
          );
        },

        /* harmony export */
        "parse": function parse() {
          return (
            /* binding */
            _parse
          );
        },

        /* harmony export */
        "findIconDefinition": function findIconDefinition() {
          return (
            /* binding */
            _findIconDefinition
          );
        }
        /* harmony export */

      });
      /*!
       * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
       * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
       */


      function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);

          if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }

          ownKeys.forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        }

        return target;
      }

      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
      }

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        }
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
      }

      function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }

      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }

      var noop = function noop() {};

      var _WINDOW = {};
      var _DOCUMENT = {};
      var _MUTATION_OBSERVER = null;
      var _PERFORMANCE = {
        mark: noop,
        measure: noop
      };

      try {
        if (typeof window !== 'undefined') _WINDOW = window;
        if (typeof document !== 'undefined') _DOCUMENT = document;
        if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
        if (typeof performance !== 'undefined') _PERFORMANCE = performance;
      } catch (e) {}

      var _ref = _WINDOW.navigator || {},
          _ref$userAgent = _ref.userAgent,
          userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

      var WINDOW = _WINDOW;
      var DOCUMENT = _DOCUMENT;
      var MUTATION_OBSERVER = _MUTATION_OBSERVER;
      var PERFORMANCE = _PERFORMANCE;
      var IS_BROWSER = !!WINDOW.document;
      var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
      var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
      var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
      var UNITS_IN_GRID = 16;
      var DEFAULT_FAMILY_PREFIX = 'fa';
      var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
      var DATA_FA_I2SVG = 'data-fa-i2svg';
      var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
      var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
      var DATA_PREFIX = 'data-prefix';
      var DATA_ICON = 'data-icon';
      var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
      var MUTATION_APPROACH_ASYNC = 'async';
      var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];

      var PRODUCTION = function () {
        try {
          return "development" === 'production';
        } catch (e) {
          return false;
        }
      }();

      var PREFIX_TO_STYLE = {
        'fas': 'solid',
        'far': 'regular',
        'fal': 'light',
        'fad': 'duotone',
        'fab': 'brands',
        'fak': 'kit',
        'fa': 'solid'
      };
      var STYLE_TO_PREFIX = {
        'solid': 'fas',
        'regular': 'far',
        'light': 'fal',
        'duotone': 'fad',
        'brands': 'fab',
        'kit': 'fak'
      };
      var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
      var FONT_FAMILY_PATTERN = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

      var FONT_WEIGHT_TO_PREFIX = {
        '900': 'fas',
        '400': 'far',
        'normal': 'far',
        '300': 'fal'
      };
      var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
      var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
      var DUOTONE_CLASSES = {
        GROUP: 'group',
        SWAP_OPACITY: 'swap-opacity',
        PRIMARY: 'primary',
        SECONDARY: 'secondary'
      };
      var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
        return "".concat(n, "x");
      })).concat(oneToTwenty.map(function (n) {
        return "w-".concat(n);
      }));
      var initial = WINDOW.FontAwesomeConfig || {};

      function getAttrConfig(attr) {
        var element = DOCUMENT.querySelector('script[' + attr + ']');

        if (element) {
          return element.getAttribute(attr);
        }
      }

      function coerce(val) {
        // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
        // We'll assume that this is an indication that it should be toggled to true
        // For example <script data-search-pseudo-elements src="..."></script>
        if (val === '') return true;
        if (val === 'false') return false;
        if (val === 'true') return true;
        return val;
      }

      if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
        var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
        attrs.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              attr = _ref2[0],
              key = _ref2[1];

          var val = coerce(getAttrConfig(attr));

          if (val !== undefined && val !== null) {
            initial[key] = val;
          }
        });
      }

      var _default = {
        familyPrefix: DEFAULT_FAMILY_PREFIX,
        replacementClass: DEFAULT_REPLACEMENT_CLASS,
        autoReplaceSvg: true,
        autoAddCss: true,
        autoA11y: true,
        searchPseudoElements: false,
        observeMutations: true,
        mutateApproach: 'async',
        keepOriginalSource: true,
        measurePerformance: false,
        showMissingIcons: true
      };

      var _config = _objectSpread({}, _default, initial);

      if (!_config.autoReplaceSvg) _config.observeMutations = false;

      var _config2 = _objectSpread({}, _config);

      WINDOW.FontAwesomeConfig = _config2;
      var w = WINDOW || {};
      if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
      if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
      if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
      if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
      var namespace = w[NAMESPACE_IDENTIFIER];
      var functions = [];

      var listener = function listener() {
        DOCUMENT.removeEventListener('DOMContentLoaded', listener);
        loaded = 1;
        functions.map(function (fn) {
          return fn();
        });
      };

      var loaded = false;

      if (IS_DOM) {
        loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
        if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
      }

      function domready(fn) {
        if (!IS_DOM) return;
        loaded ? setTimeout(fn, 0) : functions.push(fn);
      }

      var PENDING = 'pending';
      var SETTLED = 'settled';
      var FULFILLED = 'fulfilled';
      var REJECTED = 'rejected';

      var NOOP = function NOOP() {};

      var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
      var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
      var asyncQueue = [];
      var asyncTimer;

      function asyncFlush() {
        // run promise callbacks
        for (var i = 0; i < asyncQueue.length; i++) {
          asyncQueue[i][0](asyncQueue[i][1]);
        } // reset async asyncQueue


        asyncQueue = [];
        asyncTimer = false;
      }

      function asyncCall(callback, arg) {
        asyncQueue.push([callback, arg]);

        if (!asyncTimer) {
          asyncTimer = true;
          asyncSetTimer(asyncFlush, 0);
        }
      }

      function invokeResolver(resolver, promise) {
        function resolvePromise(value) {
          resolve(promise, value);
        }

        function rejectPromise(reason) {
          reject(promise, reason);
        }

        try {
          resolver(resolvePromise, rejectPromise);
        } catch (e) {
          rejectPromise(e);
        }
      }

      function invokeCallback(subscriber) {
        var owner = subscriber.owner;
        var settled = owner._state;
        var value = owner._data;
        var callback = subscriber[settled];
        var promise = subscriber.then;

        if (typeof callback === 'function') {
          settled = FULFILLED;

          try {
            value = callback(value);
          } catch (e) {
            reject(promise, e);
          }
        }

        if (!handleThenable(promise, value)) {
          if (settled === FULFILLED) {
            resolve(promise, value);
          }

          if (settled === REJECTED) {
            reject(promise, value);
          }
        }
      }

      function handleThenable(promise, value) {
        var resolved;

        try {
          if (promise === value) {
            throw new TypeError('A promises callback cannot return that same promise.');
          }

          if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
            // then should be retrieved only once
            var then = value.then;

            if (typeof then === 'function') {
              then.call(value, function (val) {
                if (!resolved) {
                  resolved = true;

                  if (value === val) {
                    fulfill(promise, val);
                  } else {
                    resolve(promise, val);
                  }
                }
              }, function (reason) {
                if (!resolved) {
                  resolved = true;
                  reject(promise, reason);
                }
              });
              return true;
            }
          }
        } catch (e) {
          if (!resolved) {
            reject(promise, e);
          }

          return true;
        }

        return false;
      }

      function resolve(promise, value) {
        if (promise === value || !handleThenable(promise, value)) {
          fulfill(promise, value);
        }
      }

      function fulfill(promise, value) {
        if (promise._state === PENDING) {
          promise._state = SETTLED;
          promise._data = value;
          asyncCall(publishFulfillment, promise);
        }
      }

      function reject(promise, reason) {
        if (promise._state === PENDING) {
          promise._state = SETTLED;
          promise._data = reason;
          asyncCall(publishRejection, promise);
        }
      }

      function publish(promise) {
        promise._then = promise._then.forEach(invokeCallback);
      }

      function publishFulfillment(promise) {
        promise._state = FULFILLED;
        publish(promise);
      }

      function publishRejection(promise) {
        promise._state = REJECTED;
        publish(promise);

        if (!promise._handled && isNode) {
          global.process.emit('unhandledRejection', promise._data, promise);
        }
      }

      function notifyRejectionHandled(promise) {
        global.process.emit('rejectionHandled', promise);
      }
      /**
       * @class
       */


      function P(resolver) {
        if (typeof resolver !== 'function') {
          throw new TypeError('Promise resolver ' + resolver + ' is not a function');
        }

        if (this instanceof P === false) {
          throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
        }

        this._then = [];
        invokeResolver(resolver, this);
      }

      P.prototype = {
        constructor: P,
        _state: PENDING,
        _then: null,
        _data: undefined,
        _handled: false,
        then: function then(onFulfillment, onRejection) {
          var subscriber = {
            owner: this,
            then: new this.constructor(NOOP),
            fulfilled: onFulfillment,
            rejected: onRejection
          };

          if ((onRejection || onFulfillment) && !this._handled) {
            this._handled = true;

            if (this._state === REJECTED && isNode) {
              asyncCall(notifyRejectionHandled, this);
            }
          }

          if (this._state === FULFILLED || this._state === REJECTED) {
            // already resolved, call callback async
            asyncCall(invokeCallback, subscriber);
          } else {
            // subscribe
            this._then.push(subscriber);
          }

          return subscriber.then;
        },
        "catch": function _catch(onRejection) {
          return this.then(null, onRejection);
        }
      };

      P.all = function (promises) {
        if (!Array.isArray(promises)) {
          throw new TypeError('You must pass an array to Promise.all().');
        }

        return new P(function (resolve, reject) {
          var results = [];
          var remaining = 0;

          function resolver(index) {
            remaining++;
            return function (value) {
              results[index] = value;

              if (! --remaining) {
                resolve(results);
              }
            };
          }

          for (var i = 0, promise; i < promises.length; i++) {
            promise = promises[i];

            if (promise && typeof promise.then === 'function') {
              promise.then(resolver(i), reject);
            } else {
              results[i] = promise;
            }
          }

          if (!remaining) {
            resolve(results);
          }
        });
      };

      P.race = function (promises) {
        if (!Array.isArray(promises)) {
          throw new TypeError('You must pass an array to Promise.race().');
        }

        return new P(function (resolve, reject) {
          for (var i = 0, promise; i < promises.length; i++) {
            promise = promises[i];

            if (promise && typeof promise.then === 'function') {
              promise.then(resolve, reject);
            } else {
              resolve(promise);
            }
          }
        });
      };

      P.resolve = function (value) {
        if (value && _typeof(value) === 'object' && value.constructor === P) {
          return value;
        }

        return new P(function (resolve) {
          resolve(value);
        });
      };

      P.reject = function (reason) {
        return new P(function (resolve, reject) {
          reject(reason);
        });
      };

      var picked = typeof Promise === 'function' ? Promise : P;
      var d = UNITS_IN_GRID;
      var meaninglessTransform = {
        size: 16,
        x: 0,
        y: 0,
        rotate: 0,
        flipX: false,
        flipY: false
      };

      function isReserved(name) {
        return ~RESERVED_CLASSES.indexOf(name);
      }

      function insertCss(css) {
        if (!css || !IS_DOM) {
          return;
        }

        var style = DOCUMENT.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML = css;
        var headChildren = DOCUMENT.head.childNodes;
        var beforeChild = null;

        for (var i = headChildren.length - 1; i > -1; i--) {
          var child = headChildren[i];
          var tagName = (child.tagName || '').toUpperCase();

          if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
            beforeChild = child;
          }
        }

        DOCUMENT.head.insertBefore(style, beforeChild);
        return css;
      }

      var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

      function nextUniqueId() {
        var size = 12;
        var id = '';

        while (size-- > 0) {
          id += idPool[Math.random() * 62 | 0];
        }

        return id;
      }

      function toArray(obj) {
        var array = [];

        for (var i = (obj || []).length >>> 0; i--;) {
          array[i] = obj[i];
        }

        return array;
      }

      function classArray(node) {
        if (node.classList) {
          return toArray(node.classList);
        } else {
          return (node.getAttribute('class') || '').split(' ').filter(function (i) {
            return i;
          });
        }
      }

      function getIconName(familyPrefix, cls) {
        var parts = cls.split('-');
        var prefix = parts[0];
        var iconName = parts.slice(1).join('-');

        if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
          return iconName;
        } else {
          return null;
        }
      }

      function htmlEscape(str) {
        return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }

      function joinAttributes(attributes) {
        return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
          return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
        }, '').trim();
      }

      function joinStyles(styles) {
        return Object.keys(styles || {}).reduce(function (acc, styleName) {
          return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
        }, '');
      }

      function transformIsMeaningful(transform) {
        return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
      }

      function transformForSvg(_ref) {
        var transform = _ref.transform,
            containerWidth = _ref.containerWidth,
            iconWidth = _ref.iconWidth;
        var outer = {
          transform: "translate(".concat(containerWidth / 2, " 256)")
        };
        var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
        var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
        var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
        var inner = {
          transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
        };
        var path = {
          transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
        };
        return {
          outer: outer,
          inner: inner,
          path: path
        };
      }

      function transformForCss(_ref2) {
        var transform = _ref2.transform,
            _ref2$width = _ref2.width,
            width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
            _ref2$height = _ref2.height,
            height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
            _ref2$startCentered = _ref2.startCentered,
            startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
        var val = '';

        if (startCentered && IS_IE) {
          val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
        } else if (startCentered) {
          val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
        } else {
          val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
        }

        val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
        val += "rotate(".concat(transform.rotate, "deg) ");
        return val;
      }

      var ALL_SPACE = {
        x: 0,
        y: 0,
        width: '100%',
        height: '100%'
      };

      function fillBlack(_abstract) {
        var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (_abstract.attributes && (_abstract.attributes.fill || force)) {
          _abstract.attributes.fill = 'black';
        }

        return _abstract;
      }

      function deGroup(_abstract2) {
        if (_abstract2.tag === 'g') {
          return _abstract2.children;
        } else {
          return [_abstract2];
        }
      }

      function makeIconMasking(_ref) {
        var children = _ref.children,
            attributes = _ref.attributes,
            main = _ref.main,
            mask = _ref.mask,
            explicitMaskId = _ref.maskId,
            transform = _ref.transform;
        var mainWidth = main.width,
            mainPath = main.icon;
        var maskWidth = mask.width,
            maskPath = mask.icon;
        var trans = transformForSvg({
          transform: transform,
          containerWidth: maskWidth,
          iconWidth: mainWidth
        });
        var maskRect = {
          tag: 'rect',
          attributes: _objectSpread({}, ALL_SPACE, {
            fill: 'white'
          })
        };
        var maskInnerGroupChildrenMixin = mainPath.children ? {
          children: mainPath.children.map(fillBlack)
        } : {};
        var maskInnerGroup = {
          tag: 'g',
          attributes: _objectSpread({}, trans.inner),
          children: [fillBlack(_objectSpread({
            tag: mainPath.tag,
            attributes: _objectSpread({}, mainPath.attributes, trans.path)
          }, maskInnerGroupChildrenMixin))]
        };
        var maskOuterGroup = {
          tag: 'g',
          attributes: _objectSpread({}, trans.outer),
          children: [maskInnerGroup]
        };
        var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
        var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
        var maskTag = {
          tag: 'mask',
          attributes: _objectSpread({}, ALL_SPACE, {
            id: maskId,
            maskUnits: 'userSpaceOnUse',
            maskContentUnits: 'userSpaceOnUse'
          }),
          children: [maskRect, maskOuterGroup]
        };
        var defs = {
          tag: 'defs',
          children: [{
            tag: 'clipPath',
            attributes: {
              id: clipId
            },
            children: deGroup(maskPath)
          }, maskTag]
        };
        children.push(defs, {
          tag: 'rect',
          attributes: _objectSpread({
            fill: 'currentColor',
            'clip-path': "url(#".concat(clipId, ")"),
            mask: "url(#".concat(maskId, ")")
          }, ALL_SPACE)
        });
        return {
          children: children,
          attributes: attributes
        };
      }

      function makeIconStandard(_ref) {
        var children = _ref.children,
            attributes = _ref.attributes,
            main = _ref.main,
            transform = _ref.transform,
            styles = _ref.styles;
        var styleString = joinStyles(styles);

        if (styleString.length > 0) {
          attributes['style'] = styleString;
        }

        if (transformIsMeaningful(transform)) {
          var trans = transformForSvg({
            transform: transform,
            containerWidth: main.width,
            iconWidth: main.width
          });
          children.push({
            tag: 'g',
            attributes: _objectSpread({}, trans.outer),
            children: [{
              tag: 'g',
              attributes: _objectSpread({}, trans.inner),
              children: [{
                tag: main.icon.tag,
                children: main.icon.children,
                attributes: _objectSpread({}, main.icon.attributes, trans.path)
              }]
            }]
          });
        } else {
          children.push(main.icon);
        }

        return {
          children: children,
          attributes: attributes
        };
      }

      function asIcon(_ref) {
        var children = _ref.children,
            main = _ref.main,
            mask = _ref.mask,
            attributes = _ref.attributes,
            styles = _ref.styles,
            transform = _ref.transform;

        if (transformIsMeaningful(transform) && main.found && !mask.found) {
          var width = main.width,
              height = main.height;
          var offset = {
            x: width / height / 2,
            y: 0.5
          };
          attributes['style'] = joinStyles(_objectSpread({}, styles, {
            'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
          }));
        }

        return [{
          tag: 'svg',
          attributes: attributes,
          children: children
        }];
      }

      function asSymbol(_ref) {
        var prefix = _ref.prefix,
            iconName = _ref.iconName,
            children = _ref.children,
            attributes = _ref.attributes,
            symbol = _ref.symbol;
        var id = symbol === true ? "".concat(prefix, "-").concat(_config2.familyPrefix, "-").concat(iconName) : symbol;
        return [{
          tag: 'svg',
          attributes: {
            style: 'display: none;'
          },
          children: [{
            tag: 'symbol',
            attributes: _objectSpread({}, attributes, {
              id: id
            }),
            children: children
          }]
        }];
      }

      function makeInlineSvgAbstract(params) {
        var _params$icons = params.icons,
            main = _params$icons.main,
            mask = _params$icons.mask,
            prefix = params.prefix,
            iconName = params.iconName,
            transform = params.transform,
            symbol = params.symbol,
            title = params.title,
            maskId = params.maskId,
            titleId = params.titleId,
            extra = params.extra,
            _params$watchable = params.watchable,
            watchable = _params$watchable === void 0 ? false : _params$watchable;

        var _ref = mask.found ? mask : main,
            width = _ref.width,
            height = _ref.height;

        var isUploadedIcon = prefix === 'fak';
        var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
        var attrClass = [_config2.replacementClass, iconName ? "".concat(_config2.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
          return extra.classes.indexOf(c) === -1;
        }).filter(function (c) {
          return c !== '' || !!c;
        }).concat(extra.classes).join(' ');
        var content = {
          children: [],
          attributes: _objectSpread({}, extra.attributes, {
            'data-prefix': prefix,
            'data-icon': iconName,
            'class': attrClass,
            'role': extra.attributes.role || 'img',
            'xmlns': 'http://www.w3.org/2000/svg',
            'viewBox': "0 0 ".concat(width, " ").concat(height)
          })
        };
        var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
          width: "".concat(width / height * 16 * 0.0625, "em")
        } : {};

        if (watchable) {
          content.attributes[DATA_FA_I2SVG] = '';
        }

        if (title) content.children.push({
          tag: 'title',
          attributes: {
            id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
          },
          children: [title]
        });

        var args = _objectSpread({}, content, {
          prefix: prefix,
          iconName: iconName,
          main: main,
          mask: mask,
          maskId: maskId,
          transform: transform,
          symbol: symbol,
          styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
        });

        var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
            children = _ref2.children,
            attributes = _ref2.attributes;

        args.children = children;
        args.attributes = attributes;

        if (symbol) {
          return asSymbol(args);
        } else {
          return asIcon(args);
        }
      }

      function makeLayersTextAbstract(params) {
        var content = params.content,
            width = params.width,
            height = params.height,
            transform = params.transform,
            title = params.title,
            extra = params.extra,
            _params$watchable2 = params.watchable,
            watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

        var attributes = _objectSpread({}, extra.attributes, title ? {
          'title': title
        } : {}, {
          'class': extra.classes.join(' ')
        });

        if (watchable) {
          attributes[DATA_FA_I2SVG] = '';
        }

        var styles = _objectSpread({}, extra.styles);

        if (transformIsMeaningful(transform)) {
          styles['transform'] = transformForCss({
            transform: transform,
            startCentered: true,
            width: width,
            height: height
          });
          styles['-webkit-transform'] = styles['transform'];
        }

        var styleString = joinStyles(styles);

        if (styleString.length > 0) {
          attributes['style'] = styleString;
        }

        var val = [];
        val.push({
          tag: 'span',
          attributes: attributes,
          children: [content]
        });

        if (title) {
          val.push({
            tag: 'span',
            attributes: {
              "class": 'sr-only'
            },
            children: [title]
          });
        }

        return val;
      }

      function makeLayersCounterAbstract(params) {
        var content = params.content,
            title = params.title,
            extra = params.extra;

        var attributes = _objectSpread({}, extra.attributes, title ? {
          'title': title
        } : {}, {
          'class': extra.classes.join(' ')
        });

        var styleString = joinStyles(extra.styles);

        if (styleString.length > 0) {
          attributes['style'] = styleString;
        }

        var val = [];
        val.push({
          tag: 'span',
          attributes: attributes,
          children: [content]
        });

        if (title) {
          val.push({
            tag: 'span',
            attributes: {
              "class": 'sr-only'
            },
            children: [title]
          });
        }

        return val;
      }

      var noop$1 = function noop() {};

      var p = _config2.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
        mark: noop$1,
        measure: noop$1
      };
      var preamble = "FA \"5.15.4\"";

      var begin = function begin(name) {
        p.mark("".concat(preamble, " ").concat(name, " begins"));
        return function () {
          return end(name);
        };
      };

      var end = function end(name) {
        p.mark("".concat(preamble, " ").concat(name, " ends"));
        p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
      };

      var perf = {
        begin: begin,
        end: end
      };
      /**
       * Internal helper to bind a function known to have 4 arguments
       * to a given context.
       */

      var bindInternal4 = function bindInternal4(func, thisContext) {
        return function (a, b, c, d) {
          return func.call(thisContext, a, b, c, d);
        };
      };
      /**
       * # Reduce
       *
       * A fast object `.reduce()` implementation.
       *
       * @param  {Object}   subject      The object to reduce over.
       * @param  {Function} fn           The reducer function.
       * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
       * @param  {Object}   thisContext  The context for the reducer.
       * @return {mixed}                 The final result.
       */


      var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
        var keys = Object.keys(subject),
            length = keys.length,
            iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
            i,
            key,
            result;

        if (initialValue === undefined) {
          i = 1;
          result = subject[keys[0]];
        } else {
          i = 0;
          result = initialValue;
        }

        for (; i < length; i++) {
          key = keys[i];
          result = iterator(result, subject[key], key, subject);
        }

        return result;
      };

      function toHex(unicode) {
        var result = '';

        for (var i = 0; i < unicode.length; i++) {
          var hex = unicode.charCodeAt(i).toString(16);
          result += ('000' + hex).slice(-4);
        }

        return result;
      }

      function defineIcons(prefix, icons) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _params$skipHooks = params.skipHooks,
            skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
        var normalized = Object.keys(icons).reduce(function (acc, iconName) {
          var icon = icons[iconName];
          var expanded = !!icon.icon;

          if (expanded) {
            acc[icon.iconName] = icon.icon;
          } else {
            acc[iconName] = icon;
          }

          return acc;
        }, {});

        if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
          namespace.hooks.addPack(prefix, normalized);
        } else {
          namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
        }
        /**
         * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
         * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
         * for `fas` so we'll easy the upgrade process for our users by automatically defining
         * this as well.
         */


        if (prefix === 'fas') {
          defineIcons('fa', icons);
        }
      }

      var styles = namespace.styles,
          shims = namespace.shims;
      var _byUnicode = {};
      var _byLigature = {};
      var _byOldName = {};

      var build = function build() {
        var lookup = function lookup(reducer) {
          return reduce(styles, function (o, style, prefix) {
            o[prefix] = reduce(style, reducer, {});
            return o;
          }, {});
        };

        _byUnicode = lookup(function (acc, icon, iconName) {
          if (icon[3]) {
            acc[icon[3]] = iconName;
          }

          return acc;
        });
        _byLigature = lookup(function (acc, icon, iconName) {
          var ligatures = icon[2];
          acc[iconName] = iconName;
          ligatures.forEach(function (ligature) {
            acc[ligature] = iconName;
          });
          return acc;
        });
        var hasRegular = ('far' in styles);
        _byOldName = reduce(shims, function (acc, shim) {
          var oldName = shim[0];
          var prefix = shim[1];
          var iconName = shim[2];

          if (prefix === 'far' && !hasRegular) {
            prefix = 'fas';
          }

          acc[oldName] = {
            prefix: prefix,
            iconName: iconName
          };
          return acc;
        }, {});
      };

      build();

      function byUnicode(prefix, unicode) {
        return (_byUnicode[prefix] || {})[unicode];
      }

      function byLigature(prefix, ligature) {
        return (_byLigature[prefix] || {})[ligature];
      }

      function byOldName(name) {
        return _byOldName[name] || {
          prefix: null,
          iconName: null
        };
      }

      var styles$1 = namespace.styles;

      var emptyCanonicalIcon = function emptyCanonicalIcon() {
        return {
          prefix: null,
          iconName: null,
          rest: []
        };
      };

      function getCanonicalIcon(values) {
        return values.reduce(function (acc, cls) {
          var iconName = getIconName(_config2.familyPrefix, cls);

          if (styles$1[cls]) {
            acc.prefix = cls;
          } else if (_config2.autoFetchSvg && Object.keys(PREFIX_TO_STYLE).indexOf(cls) > -1) {
            acc.prefix = cls;
          } else if (iconName) {
            var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
            acc.iconName = shim.iconName || iconName;
            acc.prefix = shim.prefix || acc.prefix;
          } else if (cls !== _config2.replacementClass && cls.indexOf('fa-w-') !== 0) {
            acc.rest.push(cls);
          }

          return acc;
        }, emptyCanonicalIcon());
      }

      function iconFromMapping(mapping, prefix, iconName) {
        if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
          return {
            prefix: prefix,
            iconName: iconName,
            icon: mapping[prefix][iconName]
          };
        }
      }

      function _toHtml(abstractNodes) {
        var tag = abstractNodes.tag,
            _abstractNodes$attrib = abstractNodes.attributes,
            attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
            _abstractNodes$childr = abstractNodes.children,
            children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

        if (typeof abstractNodes === 'string') {
          return htmlEscape(abstractNodes);
        } else {
          return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(_toHtml).join(''), "</").concat(tag, ">");
        }
      }

      var noop$2 = function noop() {};

      function isWatched(node) {
        var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
        return typeof i2svg === 'string';
      }

      function getMutator() {
        if (_config2.autoReplaceSvg === true) {
          return mutators.replace;
        }

        var mutator = mutators[_config2.autoReplaceSvg];
        return mutator || mutators.replace;
      }

      var mutators = {
        replace: function replace(mutation) {
          var node = mutation[0];
          var _abstract3 = mutation[1];

          var newOuterHTML = _abstract3.map(function (a) {
            return _toHtml(a);
          }).join('\n');

          if (node.parentNode && node.outerHTML) {
            node.outerHTML = newOuterHTML + (_config2.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " Font Awesome fontawesome.com -->") : '');
          } else if (node.parentNode) {
            var newNode = document.createElement('span');
            node.parentNode.replaceChild(newNode, node);
            newNode.outerHTML = newOuterHTML;
          }
        },
        nest: function nest(mutation) {
          var node = mutation[0];
          var _abstract4 = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
          // Short-circuit to the standard replacement

          if (~classArray(node).indexOf(_config2.replacementClass)) {
            return mutators.replace(mutation);
          }

          var forSvg = new RegExp("".concat(_config2.familyPrefix, "-.*"));
          delete _abstract4[0].attributes.style;
          delete _abstract4[0].attributes.id;

          var splitClasses = _abstract4[0].attributes["class"].split(' ').reduce(function (acc, cls) {
            if (cls === _config2.replacementClass || cls.match(forSvg)) {
              acc.toSvg.push(cls);
            } else {
              acc.toNode.push(cls);
            }

            return acc;
          }, {
            toNode: [],
            toSvg: []
          });

          _abstract4[0].attributes["class"] = splitClasses.toSvg.join(' ');

          var newInnerHTML = _abstract4.map(function (a) {
            return _toHtml(a);
          }).join('\n');

          node.setAttribute('class', splitClasses.toNode.join(' '));
          node.setAttribute(DATA_FA_I2SVG, '');
          node.innerHTML = newInnerHTML;
        }
      };

      function performOperationSync(op) {
        op();
      }

      function perform(mutations, callback) {
        var callbackFunction = typeof callback === 'function' ? callback : noop$2;

        if (mutations.length === 0) {
          callbackFunction();
        } else {
          var frame = performOperationSync;

          if (_config2.mutateApproach === MUTATION_APPROACH_ASYNC) {
            frame = WINDOW.requestAnimationFrame || performOperationSync;
          }

          frame(function () {
            var mutator = getMutator();
            var mark = perf.begin('mutate');
            mutations.map(mutator);
            mark();
            callbackFunction();
          });
        }
      }

      var disabled = false;

      function disableObservation() {
        disabled = true;
      }

      function enableObservation() {
        disabled = false;
      }

      var mo = null;

      function observe(options) {
        if (!MUTATION_OBSERVER) {
          return;
        }

        if (!_config2.observeMutations) {
          return;
        }

        var treeCallback = options.treeCallback,
            nodeCallback = options.nodeCallback,
            pseudoElementsCallback = options.pseudoElementsCallback,
            _options$observeMutat = options.observeMutationsRoot,
            observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
        mo = new MUTATION_OBSERVER(function (objects) {
          if (disabled) return;
          toArray(objects).forEach(function (mutationRecord) {
            if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
              if (_config2.searchPseudoElements) {
                pseudoElementsCallback(mutationRecord.target);
              }

              treeCallback(mutationRecord.target);
            }

            if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && _config2.searchPseudoElements) {
              pseudoElementsCallback(mutationRecord.target.parentNode);
            }

            if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
              if (mutationRecord.attributeName === 'class') {
                var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
                    prefix = _getCanonicalIcon.prefix,
                    iconName = _getCanonicalIcon.iconName;

                if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
                if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
              } else {
                nodeCallback(mutationRecord.target);
              }
            }
          });
        });
        if (!IS_DOM) return;
        mo.observe(observeMutationsRoot, {
          childList: true,
          attributes: true,
          characterData: true,
          subtree: true
        });
      }

      function disconnect() {
        if (!mo) return;
        mo.disconnect();
      }

      function styleParser(node) {
        var style = node.getAttribute('style');
        var val = [];

        if (style) {
          val = style.split(';').reduce(function (acc, style) {
            var styles = style.split(':');
            var prop = styles[0];
            var value = styles.slice(1);

            if (prop && value.length > 0) {
              acc[prop] = value.join(':').trim();
            }

            return acc;
          }, {});
        }

        return val;
      }

      function classParser(node) {
        var existingPrefix = node.getAttribute('data-prefix');
        var existingIconName = node.getAttribute('data-icon');
        var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
        var val = getCanonicalIcon(classArray(node));

        if (existingPrefix && existingIconName) {
          val.prefix = existingPrefix;
          val.iconName = existingIconName;
        }

        if (val.prefix && innerText.length > 1) {
          val.iconName = byLigature(val.prefix, node.innerText);
        } else if (val.prefix && innerText.length === 1) {
          val.iconName = byUnicode(val.prefix, toHex(node.innerText));
        }

        return val;
      }

      var parseTransformString = function parseTransformString(transformString) {
        var transform = {
          size: 16,
          x: 0,
          y: 0,
          flipX: false,
          flipY: false,
          rotate: 0
        };

        if (!transformString) {
          return transform;
        } else {
          return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
            var parts = n.toLowerCase().split('-');
            var first = parts[0];
            var rest = parts.slice(1).join('-');

            if (first && rest === 'h') {
              acc.flipX = true;
              return acc;
            }

            if (first && rest === 'v') {
              acc.flipY = true;
              return acc;
            }

            rest = parseFloat(rest);

            if (isNaN(rest)) {
              return acc;
            }

            switch (first) {
              case 'grow':
                acc.size = acc.size + rest;
                break;

              case 'shrink':
                acc.size = acc.size - rest;
                break;

              case 'left':
                acc.x = acc.x - rest;
                break;

              case 'right':
                acc.x = acc.x + rest;
                break;

              case 'up':
                acc.y = acc.y - rest;
                break;

              case 'down':
                acc.y = acc.y + rest;
                break;

              case 'rotate':
                acc.rotate = acc.rotate + rest;
                break;
            }

            return acc;
          }, transform);
        }
      };

      function transformParser(node) {
        return parseTransformString(node.getAttribute('data-fa-transform'));
      }

      function symbolParser(node) {
        var symbol = node.getAttribute('data-fa-symbol');
        return symbol === null ? false : symbol === '' ? true : symbol;
      }

      function attributesParser(node) {
        var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
          if (acc.name !== 'class' && acc.name !== 'style') {
            acc[attr.name] = attr.value;
          }

          return acc;
        }, {});
        var title = node.getAttribute('title');
        var titleId = node.getAttribute('data-fa-title-id');

        if (_config2.autoA11y) {
          if (title) {
            extraAttributes['aria-labelledby'] = "".concat(_config2.replacementClass, "-title-").concat(titleId || nextUniqueId());
          } else {
            extraAttributes['aria-hidden'] = 'true';
            extraAttributes['focusable'] = 'false';
          }
        }

        return extraAttributes;
      }

      function maskParser(node) {
        var mask = node.getAttribute('data-fa-mask');

        if (!mask) {
          return emptyCanonicalIcon();
        } else {
          return getCanonicalIcon(mask.split(' ').map(function (i) {
            return i.trim();
          }));
        }
      }

      function blankMeta() {
        return {
          iconName: null,
          title: null,
          titleId: null,
          prefix: null,
          transform: meaninglessTransform,
          symbol: false,
          mask: null,
          maskId: null,
          extra: {
            classes: [],
            styles: {},
            attributes: {}
          }
        };
      }

      function parseMeta(node) {
        var _classParser = classParser(node),
            iconName = _classParser.iconName,
            prefix = _classParser.prefix,
            extraClasses = _classParser.rest;

        var extraStyles = styleParser(node);
        var transform = transformParser(node);
        var symbol = symbolParser(node);
        var extraAttributes = attributesParser(node);
        var mask = maskParser(node);
        return {
          iconName: iconName,
          title: node.getAttribute('title'),
          titleId: node.getAttribute('data-fa-title-id'),
          prefix: prefix,
          transform: transform,
          symbol: symbol,
          mask: mask,
          maskId: node.getAttribute('data-fa-mask-id'),
          extra: {
            classes: extraClasses,
            styles: extraStyles,
            attributes: extraAttributes
          }
        };
      }

      function MissingIcon(error) {
        this.name = 'MissingIcon';
        this.message = error || 'Icon unavailable';
        this.stack = new Error().stack;
      }

      MissingIcon.prototype = Object.create(Error.prototype);
      MissingIcon.prototype.constructor = MissingIcon;
      var FILL = {
        fill: 'currentColor'
      };
      var ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
      };
      var RING = {
        tag: 'path',
        attributes: _objectSpread({}, FILL, {
          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
      };

      var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
        attributeName: 'opacity'
      });

      var DOT = {
        tag: 'circle',
        attributes: _objectSpread({}, FILL, {
          cx: '256',
          cy: '364',
          r: '28'
        }),
        children: [{
          tag: 'animate',
          attributes: _objectSpread({}, ANIMATION_BASE, {
            attributeName: 'r',
            values: '28;14;28;28;14;28;'
          })
        }, {
          tag: 'animate',
          attributes: _objectSpread({}, OPACITY_ANIMATE, {
            values: '1;0;1;1;0;1;'
          })
        }]
      };
      var QUESTION = {
        tag: 'path',
        attributes: _objectSpread({}, FILL, {
          opacity: '1',
          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: [{
          tag: 'animate',
          attributes: _objectSpread({}, OPACITY_ANIMATE, {
            values: '1;0;0;0;0;1;'
          })
        }]
      };
      var EXCLAMATION = {
        tag: 'path',
        attributes: _objectSpread({}, FILL, {
          opacity: '0',
          d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
        }),
        children: [{
          tag: 'animate',
          attributes: _objectSpread({}, OPACITY_ANIMATE, {
            values: '0;0;1;1;0;0;'
          })
        }]
      };
      var missing = {
        tag: 'g',
        children: [RING, DOT, QUESTION, EXCLAMATION]
      };
      var styles$2 = namespace.styles;

      function asFoundIcon(icon) {
        var width = icon[0];
        var height = icon[1];

        var _icon$slice = icon.slice(4),
            _icon$slice2 = _slicedToArray(_icon$slice, 1),
            vectorData = _icon$slice2[0];

        var element = null;

        if (Array.isArray(vectorData)) {
          element = {
            tag: 'g',
            attributes: {
              "class": "".concat(_config2.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
            },
            children: [{
              tag: 'path',
              attributes: {
                "class": "".concat(_config2.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
                fill: 'currentColor',
                d: vectorData[0]
              }
            }, {
              tag: 'path',
              attributes: {
                "class": "".concat(_config2.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
                fill: 'currentColor',
                d: vectorData[1]
              }
            }]
          };
        } else {
          element = {
            tag: 'path',
            attributes: {
              fill: 'currentColor',
              d: vectorData
            }
          };
        }

        return {
          found: true,
          width: width,
          height: height,
          icon: element
        };
      }

      function findIcon(iconName, prefix) {
        return new picked(function (resolve, reject) {
          var val = {
            found: false,
            width: 512,
            height: 512,
            icon: missing
          };

          if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
            var icon = styles$2[prefix][iconName];
            return resolve(asFoundIcon(icon));
          }

          if (iconName && prefix && !_config2.showMissingIcons) {
            reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
          } else {
            resolve(val);
          }
        });
      }

      var styles$3 = namespace.styles;

      function generateSvgReplacementMutation(node, nodeMeta) {
        var iconName = nodeMeta.iconName,
            title = nodeMeta.title,
            titleId = nodeMeta.titleId,
            prefix = nodeMeta.prefix,
            transform = nodeMeta.transform,
            symbol = nodeMeta.symbol,
            mask = nodeMeta.mask,
            maskId = nodeMeta.maskId,
            extra = nodeMeta.extra;
        return new picked(function (resolve, reject) {
          picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                main = _ref2[0],
                mask = _ref2[1];

            resolve([node, makeInlineSvgAbstract({
              icons: {
                main: main,
                mask: mask
              },
              prefix: prefix,
              iconName: iconName,
              transform: transform,
              symbol: symbol,
              mask: mask,
              maskId: maskId,
              title: title,
              titleId: titleId,
              extra: extra,
              watchable: true
            })]);
          });
        });
      }

      function generateLayersText(node, nodeMeta) {
        var title = nodeMeta.title,
            transform = nodeMeta.transform,
            extra = nodeMeta.extra;
        var width = null;
        var height = null;

        if (IS_IE) {
          var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
          var boundingClientRect = node.getBoundingClientRect();
          width = boundingClientRect.width / computedFontSize;
          height = boundingClientRect.height / computedFontSize;
        }

        if (_config2.autoA11y && !title) {
          extra.attributes['aria-hidden'] = 'true';
        }

        return picked.resolve([node, makeLayersTextAbstract({
          content: node.innerHTML,
          width: width,
          height: height,
          transform: transform,
          title: title,
          extra: extra,
          watchable: true
        })]);
      }

      function generateMutation(node) {
        var nodeMeta = parseMeta(node);

        if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
          return generateLayersText(node, nodeMeta);
        } else {
          return generateSvgReplacementMutation(node, nodeMeta);
        }
      }

      function onTree(root) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!IS_DOM) return;
        var htmlClassList = DOCUMENT.documentElement.classList;

        var hclAdd = function hclAdd(suffix) {
          return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
        };

        var hclRemove = function hclRemove(suffix) {
          return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
        };

        var prefixes = _config2.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
        var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
          return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
        })).join(', ');

        if (prefixesDomQuery.length === 0) {
          return;
        }

        var candidates = [];

        try {
          candidates = toArray(root.querySelectorAll(prefixesDomQuery));
        } catch (e) {// noop
        }

        if (candidates.length > 0) {
          hclAdd('pending');
          hclRemove('complete');
        } else {
          return;
        }

        var mark = perf.begin('onTree');
        var mutations = candidates.reduce(function (acc, node) {
          try {
            var mutation = generateMutation(node);

            if (mutation) {
              acc.push(mutation);
            }
          } catch (e) {
            if (!PRODUCTION) {
              if (e instanceof MissingIcon) {
                console.error(e);
              }
            }
          }

          return acc;
        }, []);
        return new picked(function (resolve, reject) {
          picked.all(mutations).then(function (resolvedMutations) {
            perform(resolvedMutations, function () {
              hclAdd('active');
              hclAdd('complete');
              hclRemove('pending');
              if (typeof callback === 'function') callback();
              mark();
              resolve();
            });
          })["catch"](function () {
            mark();
            reject();
          });
        });
      }

      function onNode(node) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        generateMutation(node).then(function (mutation) {
          if (mutation) {
            perform([mutation], callback);
          }
        });
      }

      function replaceForPosition(node, position) {
        var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
        return new picked(function (resolve, reject) {
          if (node.getAttribute(pendingAttribute) !== null) {
            // This node is already being processed
            return resolve();
          }

          var children = toArray(node.children);
          var alreadyProcessedPseudoElement = children.filter(function (c) {
            return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
          })[0];
          var styles = WINDOW.getComputedStyle(node, position);
          var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
          var fontWeight = styles.getPropertyValue('font-weight');
          var content = styles.getPropertyValue('content');

          if (alreadyProcessedPseudoElement && !fontFamily) {
            // If we've already processed it but the current computed style does not result in a font-family,
            // that probably means that a class name that was previously present to make the icon has been
            // removed. So we now should delete the icon.
            node.removeChild(alreadyProcessedPseudoElement);
            return resolve();
          } else if (fontFamily && content !== 'none' && content !== '') {
            var _content = styles.getPropertyValue('content');

            var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
            var hexValue = toHex(_content.length === 3 ? _content.substr(1, 1) : _content);
            var iconName = byUnicode(prefix, hexValue);
            var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
            // already done so with the same prefix and iconName

            if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
              node.setAttribute(pendingAttribute, iconIdentifier);

              if (alreadyProcessedPseudoElement) {
                // Delete the old one, since we're replacing it with a new one
                node.removeChild(alreadyProcessedPseudoElement);
              }

              var meta = blankMeta();
              var extra = meta.extra;
              extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
              findIcon(iconName, prefix).then(function (main) {
                var _abstract5 = makeInlineSvgAbstract(_objectSpread({}, meta, {
                  icons: {
                    main: main,
                    mask: emptyCanonicalIcon()
                  },
                  prefix: prefix,
                  iconName: iconIdentifier,
                  extra: extra,
                  watchable: true
                }));

                var element = DOCUMENT.createElement('svg');

                if (position === ':before') {
                  node.insertBefore(element, node.firstChild);
                } else {
                  node.appendChild(element);
                }

                element.outerHTML = _abstract5.map(function (a) {
                  return _toHtml(a);
                }).join('\n');
                node.removeAttribute(pendingAttribute);
                resolve();
              })["catch"](reject);
            } else {
              resolve();
            }
          } else {
            resolve();
          }
        });
      }

      function replace(node) {
        return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
      }

      function processable(node) {
        return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
      }

      function searchPseudoElements(root) {
        if (!IS_DOM) return;
        return new picked(function (resolve, reject) {
          var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
          var end = perf.begin('searchPseudoElements');
          disableObservation();
          picked.all(operations).then(function () {
            end();
            enableObservation();
            resolve();
          })["catch"](function () {
            end();
            enableObservation();
            reject();
          });
        });
      }

      var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

      function css() {
        var dfp = DEFAULT_FAMILY_PREFIX;
        var drc = DEFAULT_REPLACEMENT_CLASS;
        var fp = _config2.familyPrefix;
        var rc = _config2.replacementClass;
        var s = baseStyles;

        if (fp !== dfp || rc !== drc) {
          var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
          var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
          var rPatt = new RegExp("\\.".concat(drc), 'g');
          s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
        }

        return s;
      }

      var Library = /*#__PURE__*/function () {
        function Library() {
          _classCallCheck(this, Library);

          this.definitions = {};
        }

        _createClass(Library, [{
          key: "add",
          value: function add() {
            var _this = this;

            for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
              definitions[_key] = arguments[_key];
            }

            var additions = definitions.reduce(this._pullDefinitions, {});
            Object.keys(additions).forEach(function (key) {
              _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
              defineIcons(key, additions[key]);
              build();
            });
          }
        }, {
          key: "reset",
          value: function reset() {
            this.definitions = {};
          }
        }, {
          key: "_pullDefinitions",
          value: function _pullDefinitions(additions, definition) {
            var normalized = definition.prefix && definition.iconName && definition.icon ? {
              0: definition
            } : definition;
            Object.keys(normalized).map(function (key) {
              var _normalized$key = normalized[key],
                  prefix = _normalized$key.prefix,
                  iconName = _normalized$key.iconName,
                  icon = _normalized$key.icon;
              if (!additions[prefix]) additions[prefix] = {};
              additions[prefix][iconName] = icon;
            });
            return additions;
          }
        }]);

        return Library;
      }();

      function ensureCss() {
        if (_config2.autoAddCss && !_cssInserted) {
          insertCss(css());
          _cssInserted = true;
        }
      }

      function apiObject(val, abstractCreator) {
        Object.defineProperty(val, 'abstract', {
          get: abstractCreator
        });
        Object.defineProperty(val, 'html', {
          get: function get() {
            return val["abstract"].map(function (a) {
              return _toHtml(a);
            });
          }
        });
        Object.defineProperty(val, 'node', {
          get: function get() {
            if (!IS_DOM) return;
            var container = DOCUMENT.createElement('div');
            container.innerHTML = val.html;
            return container.children;
          }
        });
        return val;
      }

      function _findIconDefinition(iconLookup) {
        var _iconLookup$prefix = iconLookup.prefix,
            prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
            iconName = iconLookup.iconName;
        if (!iconName) return;
        return iconFromMapping(_library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
      }

      function resolveIcons(next) {
        return function (maybeIconDefinition) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : _findIconDefinition(maybeIconDefinition || {});
          var mask = params.mask;

          if (mask) {
            mask = (mask || {}).icon ? mask : _findIconDefinition(mask || {});
          }

          return next(iconDefinition, _objectSpread({}, params, {
            mask: mask
          }));
        };
      }

      var _library = new Library();

      var _noAuto = function noAuto() {
        _config2.autoReplaceSvg = false;
        _config2.observeMutations = false;
        disconnect();
      };

      var _cssInserted = false;
      var _dom = {
        i2svg: function i2svg() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          if (IS_DOM) {
            ensureCss();
            var _params$node = params.node,
                node = _params$node === void 0 ? DOCUMENT : _params$node,
                _params$callback = params.callback,
                callback = _params$callback === void 0 ? function () {} : _params$callback;

            if (_config2.searchPseudoElements) {
              searchPseudoElements(node);
            }

            return onTree(node, callback);
          } else {
            return picked.reject('Operation requires a DOM of some kind.');
          }
        },
        css: css,
        insertCss: function insertCss$$1() {
          if (!_cssInserted) {
            insertCss(css());
            _cssInserted = true;
          }
        },
        watch: function watch() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
              observeMutationsRoot = params.observeMutationsRoot;

          if (_config2.autoReplaceSvg === false) {
            _config2.autoReplaceSvg = true;
          }

          _config2.observeMutations = true;
          domready(function () {
            autoReplace({
              autoReplaceSvgRoot: autoReplaceSvgRoot
            });
            observe({
              treeCallback: onTree,
              nodeCallback: onNode,
              pseudoElementsCallback: searchPseudoElements,
              observeMutationsRoot: observeMutationsRoot
            });
          });
        }
      };
      var _parse = {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      };

      var _icon = resolveIcons(function (iconDefinition) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$transform = params.transform,
            transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
            _params$symbol = params.symbol,
            symbol = _params$symbol === void 0 ? false : _params$symbol,
            _params$mask = params.mask,
            mask = _params$mask === void 0 ? null : _params$mask,
            _params$maskId = params.maskId,
            maskId = _params$maskId === void 0 ? null : _params$maskId,
            _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$titleId = params.titleId,
            titleId = _params$titleId === void 0 ? null : _params$titleId,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
        if (!iconDefinition) return;
        var prefix = iconDefinition.prefix,
            iconName = iconDefinition.iconName,
            icon = iconDefinition.icon;
        return apiObject(_objectSpread({
          type: 'icon'
        }, iconDefinition), function () {
          ensureCss();

          if (_config2.autoA11y) {
            if (title) {
              attributes['aria-labelledby'] = "".concat(_config2.replacementClass, "-title-").concat(titleId || nextUniqueId());
            } else {
              attributes['aria-hidden'] = 'true';
              attributes['focusable'] = 'false';
            }
          }

          return makeInlineSvgAbstract({
            icons: {
              main: asFoundIcon(icon),
              mask: mask ? asFoundIcon(mask.icon) : {
                found: false,
                width: null,
                height: null,
                icon: {}
              }
            },
            prefix: prefix,
            iconName: iconName,
            transform: _objectSpread({}, meaninglessTransform, transform),
            symbol: symbol,
            title: title,
            maskId: maskId,
            titleId: titleId,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: classes
            }
          });
        });
      });

      var _text = function text(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$transform2 = params.transform,
            transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
            _params$title2 = params.title,
            title = _params$title2 === void 0 ? null : _params$title2,
            _params$classes2 = params.classes,
            classes = _params$classes2 === void 0 ? [] : _params$classes2,
            _params$attributes2 = params.attributes,
            attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
            _params$styles2 = params.styles,
            styles = _params$styles2 === void 0 ? {} : _params$styles2;
        return apiObject({
          type: 'text',
          content: content
        }, function () {
          ensureCss();
          return makeLayersTextAbstract({
            content: content,
            transform: _objectSpread({}, meaninglessTransform, transform),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(_config2.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
            }
          });
        });
      };

      var _counter = function counter(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$title3 = params.title,
            title = _params$title3 === void 0 ? null : _params$title3,
            _params$classes3 = params.classes,
            classes = _params$classes3 === void 0 ? [] : _params$classes3,
            _params$attributes3 = params.attributes,
            attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
            _params$styles3 = params.styles,
            styles = _params$styles3 === void 0 ? {} : _params$styles3;
        return apiObject({
          type: 'counter',
          content: content
        }, function () {
          ensureCss();
          return makeLayersCounterAbstract({
            content: content.toString(),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(_config2.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
            }
          });
        });
      };

      var _layer = function layer(assembler) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$classes4 = params.classes,
            classes = _params$classes4 === void 0 ? [] : _params$classes4;
        return apiObject({
          type: 'layer'
        }, function () {
          ensureCss();
          var children = [];
          assembler(function (args) {
            Array.isArray(args) ? args.map(function (a) {
              children = children.concat(a["abstract"]);
            }) : children = children.concat(args["abstract"]);
          });
          return [{
            tag: 'span',
            attributes: {
              "class": ["".concat(_config2.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
            },
            children: children
          }];
        });
      };

      var api = {
        noAuto: _noAuto,
        config: _config2,
        dom: _dom,
        library: _library,
        parse: _parse,
        findIconDefinition: _findIconDefinition,
        icon: _icon,
        text: _text,
        counter: _counter,
        layer: _layer,
        toHtml: _toHtml
      };

      var autoReplace = function autoReplace() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var _params$autoReplaceSv = params.autoReplaceSvgRoot,
            autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
        if ((Object.keys(namespace.styles).length > 0 || _config2.autoFetchSvg) && IS_DOM && _config2.autoReplaceSvg) api.dom.i2svg({
          node: autoReplaceSvgRoot
        });
      };
      /***/

    },

    /***/
    3664:
    /*!************************************************************************!*\
      !*** ./node_modules/@fortawesome/free-brands-svg-icons/faFacebookF.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fab';
      var iconName = 'facebook-f';
      var width = 320;
      var height = 512;
      var ligatures = [];
      var unicode = 'f39e';
      var svgPathData = 'M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faFacebookF = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    7667:
    /*!********************************************************************************!*\
      !*** ./node_modules/@fortawesome/free-brands-svg-icons/faFacebookMessenger.js ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fab';
      var iconName = 'facebook-messenger';
      var width = 512;
      var height = 512;
      var ligatures = [];
      var unicode = 'f39f';
      var svgPathData = 'M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faFacebookMessenger = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    800:
    /*!**************************************************************************!*\
      !*** ./node_modules/@fortawesome/free-brands-svg-icons/faGooglePlusG.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fab';
      var iconName = 'google-plus-g';
      var width = 640;
      var height = 512;
      var ligatures = [];
      var unicode = 'f0d5';
      var svgPathData = 'M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faGooglePlusG = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    9538:
    /*!*************************************************************************!*\
      !*** ./node_modules/@fortawesome/free-brands-svg-icons/faLinkedinIn.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fab';
      var iconName = 'linkedin-in';
      var width = 448;
      var height = 512;
      var ligatures = [];
      var unicode = 'f0e1';
      var svgPathData = 'M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faLinkedinIn = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    3170:
    /*!*************************************************************************!*\
      !*** ./node_modules/@fortawesome/free-brands-svg-icons/faPinterestP.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fab';
      var iconName = 'pinterest-p';
      var width = 384;
      var height = 512;
      var ligatures = [];
      var unicode = 'f231';
      var svgPathData = 'M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faPinterestP = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    8472:
    /*!**************************************************************************!*\
      !*** ./node_modules/@fortawesome/free-brands-svg-icons/faRedditAlien.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fab';
      var iconName = 'reddit-alien';
      var width = 512;
      var height = 512;
      var ligatures = [];
      var unicode = 'f281';
      var svgPathData = 'M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faRedditAlien = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    2131:
    /*!**************************************************************************!*\
      !*** ./node_modules/@fortawesome/free-brands-svg-icons/faStumbleupon.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fab';
      var iconName = 'stumbleupon';
      var width = 512;
      var height = 512;
      var ligatures = [];
      var unicode = 'f1a4';
      var svgPathData = 'M502.9 266v69.7c0 62.1-50.3 112.4-112.4 112.4-61.8 0-112.4-49.8-112.4-111.3v-70.2l34.3 16 51.1-15.2V338c0 14.7 12 26.5 26.7 26.5S417 352.7 417 338v-72h85.9zm-224.7-58.2l34.3 16 51.1-15.2V173c0-60.5-51.1-109-112.1-109-60.8 0-112.1 48.2-112.1 108.2v162.4c0 14.9-12 26.7-26.7 26.7S86 349.5 86 334.6V266H0v69.7C0 397.7 50.3 448 112.4 448c61.6 0 112.4-49.5 112.4-110.8V176.9c0-14.7 12-26.7 26.7-26.7s26.7 12 26.7 26.7v30.9z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faStumbleupon = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    8998:
    /*!****************************************************************************!*\
      !*** ./node_modules/@fortawesome/free-brands-svg-icons/faTelegramPlane.js ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fab';
      var iconName = 'telegram-plane';
      var width = 448;
      var height = 512;
      var ligatures = [];
      var unicode = 'f3fe';
      var svgPathData = 'M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faTelegramPlane = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    5781:
    /*!*********************************************************************!*\
      !*** ./node_modules/@fortawesome/free-brands-svg-icons/faTumblr.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fab';
      var iconName = 'tumblr';
      var width = 320;
      var height = 512;
      var ligatures = [];
      var unicode = 'f173';
      var svgPathData = 'M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faTumblr = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    1958:
    /*!**********************************************************************!*\
      !*** ./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fab';
      var iconName = 'twitter';
      var width = 512;
      var height = 512;
      var ligatures = [];
      var unicode = 'f099';
      var svgPathData = 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faTwitter = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    8974:
    /*!*****************************************************************!*\
      !*** ./node_modules/@fortawesome/free-brands-svg-icons/faVk.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fab';
      var iconName = 'vk';
      var width = 576;
      var height = 512;
      var ligatures = [];
      var unicode = 'f189';
      var svgPathData = 'M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faVk = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    8900:
    /*!***********************************************************************!*\
      !*** ./node_modules/@fortawesome/free-brands-svg-icons/faWhatsapp.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fab';
      var iconName = 'whatsapp';
      var width = 448;
      var height = 512;
      var ligatures = [];
      var unicode = 'f232';
      var svgPathData = 'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faWhatsapp = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    4025:
    /*!*******************************************************************!*\
      !*** ./node_modules/@fortawesome/free-brands-svg-icons/faXing.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fab';
      var iconName = 'xing';
      var width = 384;
      var height = 512;
      var ligatures = [];
      var unicode = 'f168';
      var svgPathData = 'M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2l44.7 77.5zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faXing = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    4630:
    /*!*******************************************************************!*\
      !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fas';
      var iconName = 'check';
      var width = 512;
      var height = 512;
      var ligatures = [];
      var unicode = 'f00c';
      var svgPathData = 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faCheck = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    8573:
    /*!************************************************************************!*\
      !*** ./node_modules/@fortawesome/free-solid-svg-icons/faCommentAlt.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fas';
      var iconName = 'comment-alt';
      var width = 512;
      var height = 512;
      var ligatures = [];
      var unicode = 'f27a';
      var svgPathData = 'M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faCommentAlt = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    4909:
    /*!***********************************************************************!*\
      !*** ./node_modules/@fortawesome/free-solid-svg-icons/faEllipsisH.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fas';
      var iconName = 'ellipsis-h';
      var width = 512;
      var height = 512;
      var ligatures = [];
      var unicode = 'f141';
      var svgPathData = 'M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faEllipsisH = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    3383:
    /*!**********************************************************************!*\
      !*** ./node_modules/@fortawesome/free-solid-svg-icons/faEnvelope.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fas';
      var iconName = 'envelope';
      var width = 512;
      var height = 512;
      var ligatures = [];
      var unicode = 'f0e0';
      var svgPathData = 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faEnvelope = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    1190:
    /*!*************************************************************************!*\
      !*** ./node_modules/@fortawesome/free-solid-svg-icons/faExclamation.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fas';
      var iconName = 'exclamation';
      var width = 192;
      var height = 512;
      var ligatures = [];
      var unicode = 'f12a';
      var svgPathData = 'M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faExclamation = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    8134:
    /*!******************************************************************!*\
      !*** ./node_modules/@fortawesome/free-solid-svg-icons/faLink.js ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fas';
      var iconName = 'link';
      var width = 512;
      var height = 512;
      var ligatures = [];
      var unicode = 'f0c1';
      var svgPathData = 'M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faLink = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    4767:
    /*!*******************************************************************!*\
      !*** ./node_modules/@fortawesome/free-solid-svg-icons/faMinus.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fas';
      var iconName = 'minus';
      var width = 448;
      var height = 512;
      var ligatures = [];
      var unicode = 'f068';
      var svgPathData = 'M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faMinus = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    8570:
    /*!*******************************************************************!*\
      !*** ./node_modules/@fortawesome/free-solid-svg-icons/faPrint.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var prefix = 'fas';
      var iconName = 'print';
      var width = 512;
      var height = 512;
      var ligatures = [];
      var unicode = 'f02f';
      var svgPathData = 'M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z';
      exports.definition = {
        prefix: prefix,
        iconName: iconName,
        icon: [width, height, ligatures, unicode, svgPathData]
      };
      exports.faPrint = exports.definition;
      exports.prefix = prefix;
      exports.iconName = iconName;
      exports.width = width;
      exports.height = height;
      exports.ligatures = ligatures;
      exports.unicode = unicode;
      exports.svgPathData = svgPathData;
      /***/
    },

    /***/
    7106:
    /*!*****************************************************!*\
      !*** ./node_modules/regenerator-runtime/runtime.js ***!
      \*****************************************************/

    /***/
    function _(module) {
      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var runtime = function (exports) {
        "use strict";

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined; // More compressible than void 0.

        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        function define(obj, key, value) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return obj[key];
        }

        try {
          // IE 8 has a broken Object.defineProperty that only works on DOM objects.
          define({}, "");
        } catch (err) {
          define = function define(obj, key, value) {
            return obj[key] = value;
          };
        }

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.

          generator._invoke = makeInvokeMethod(innerFn, self, context);
          return generator;
        }

        exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.

        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.

        var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.

        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.


        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = GeneratorFunctionPrototype;
        define(Gp, "constructor", GeneratorFunctionPrototype);
        define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
        GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.

        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }

        exports.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };

        exports.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
          }

          genFun.prototype = Object.create(Gp);
          return genFun;
        }; // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.


        exports.awrap = function (arg) {
          return {
            __await: arg
          };
        };

        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);

            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;

              if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                return PromiseImpl.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                });
              }

              return PromiseImpl.resolve(value).then(function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration.
                result.value = unwrapped;
                resolve(result);
              }, function (error) {
                // If a rejected Promise was yielded, throw the rejection back
                // into the async generator function so it can be handled there.
                return invoke("throw", error, resolve, reject);
              });
            }
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          } // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).


          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);
        define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
          return this;
        });
        exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.

        exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0) PromiseImpl = Promise;
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
          return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
        };

        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }

            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              } // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              var delegate = context.delegate;

              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);

                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === "next") {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }

              state = GenStateExecuting;
              var record = tryCatch(innerFn, self, context);

              if (record.type === "normal") {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted; // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.

                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        } // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.


        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];

          if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;

            if (context.method === "throw") {
              // Note: ["return"] must be used for ES3 parsing compatibility.
              if (delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);

                if (context.method === "throw") {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
                }
              }

              context.method = "throw";
              context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }

            return ContinueSentinel;
          }

          var record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          var info = record.arg;

          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

            context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.

            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          } // The delegate iterator is finished, so forget it and continue with
          // the outer generator.


          context.delegate = null;
          return ContinueSentinel;
        } // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.


        defineIteratorMethods(Gp);
        define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.

        define(Gp, iteratorSymbol, function () {
          return this;
        });
        define(Gp, "toString", function () {
          return "[object Generator]";
        });

        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{
            tryLoc: "root"
          }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        exports.keys = function (object) {
          var keys = [];

          for (var key in object) {
            keys.push(key);
          }

          keys.reverse(); // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.

          return function next() {
            while (keys.length) {
              var key = keys.pop();

              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            } // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.


            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];

            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === "function") {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              var i = -1,
                  next = function next() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next.value = iterable[i];
                    next.done = false;
                    return next;
                  }
                }

                next.value = undefined;
                next.done = true;
                return next;
              };

              return next.next = next;
            }
          } // Return an iterator with no values.


          return {
            next: doneResult
          };
        }

        exports.values = values;

        function doneResult() {
          return {
            value: undefined,
            done: true
          };
        }

        Context.prototype = {
          constructor: Context,
          reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0; // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.

            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined;
                }
              }
            }
          },
          stop: function stop() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;

            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },
          dispatchException: function dispatchException(exception) {
            if (this.done) {
              throw exception;
            }

            var context = this;

            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = "next";
                context.arg = undefined;
              }

              return !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === "root") {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },
          complete: function complete(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }

            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },
          finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function _catch(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;

                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }

                return thrown;
              }
            } // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.


            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };

            if (this.method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined;
            }

            return ContinueSentinel;
          }
        }; // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.

        return exports;
      }( // If this script is executing as a CommonJS module, use module.exports
      // as the regeneratorRuntime namespace. Otherwise create a new empty
      // object. Either way, the resulting object will be used to initialize
      // the regeneratorRuntime variable at the top of this file.
      true ? module.exports : 0);

      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, in modern engines
        // we can explicitly access globalThis. In older engines we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        if (typeof globalThis === "object") {
          globalThis.regeneratorRuntime = runtime;
        } else {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      }
      /***/

    },

    /***/
    9664:
    /*!******************************************************!*\
      !*** ./node_modules/zone.js/fesm2015/zone-legacy.js ***!
      \******************************************************/

    /***/
    function _() {
      "use strict";
      /**
       * @license Angular v14.2.0-next.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /*
       * This is necessary for Chrome and Chrome mobile, to enable
       * things like redefining `createdCallback` on an element.
       */

      var zoneSymbol;

      var _defineProperty;

      var _getOwnPropertyDescriptor;

      var _create;

      var unconfigurablesKey;

      function propertyPatch() {
        zoneSymbol = Zone.__symbol__;
        _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
        _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;
        _create = Object.create;
        unconfigurablesKey = zoneSymbol('unconfigurables');

        Object.defineProperty = function (obj, prop, desc) {
          if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
          }

          var originalConfigurableFlag = desc.configurable;

          if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
          }

          return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
        };

        Object.defineProperties = function (obj, props) {
          Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
          });

          var _iterator = _createForOfIteratorHelper(Object.getOwnPropertySymbols(props)),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var sym = _step.value;
              var desc = Object.getOwnPropertyDescriptor(props, sym); // Since `Object.getOwnPropertySymbols` returns *all* symbols,
              // including non-enumerable ones, retrieve property descriptor and check
              // enumerability there. Proceed with the rewrite only when a property is
              // enumerable to make the logic consistent with the way regular
              // properties are retrieved (via `Object.keys`, which respects
              // `enumerable: false` flag). More information:
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#retrieval

              if (desc === null || desc === void 0 ? void 0 : desc.enumerable) {
                Object.defineProperty(obj, sym, props[sym]);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return obj;
        };

        Object.create = function (proto, propertiesObject) {
          if (typeof propertiesObject === 'object' && !Object.isFrozen(propertiesObject)) {
            Object.keys(propertiesObject).forEach(function (prop) {
              propertiesObject[prop] = rewriteDescriptor(proto, prop, propertiesObject[prop]);
            });
          }

          return _create(proto, propertiesObject);
        };

        Object.getOwnPropertyDescriptor = function (obj, prop) {
          var desc = _getOwnPropertyDescriptor(obj, prop);

          if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
          }

          return desc;
        };
      }

      function _redefineProperty(obj, prop, desc) {
        var originalConfigurableFlag = desc.configurable;
        desc = rewriteDescriptor(obj, prop, desc);
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
      }

      function isUnconfigurable(obj, prop) {
        return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
      }

      function rewriteDescriptor(obj, prop, desc) {
        // issue-927, if the desc is frozen, don't try to change the desc
        if (!Object.isFrozen(desc)) {
          desc.configurable = true;
        }

        if (!desc.configurable) {
          // issue-927, if the obj is frozen, don't try to set the desc to obj
          if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, {
              writable: true,
              value: {}
            });
          }

          if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
          }
        }

        return desc;
      }

      function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
        try {
          return _defineProperty(obj, prop, desc);
        } catch (error) {
          if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(),
            // let's retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
              delete desc.configurable;
            } else {
              desc.configurable = originalConfigurableFlag;
            }

            try {
              return _defineProperty(obj, prop, desc);
            } catch (error) {
              var swallowError = false;

              if (prop === 'createdCallback' || prop === 'attachedCallback' || prop === 'detachedCallback' || prop === 'attributeChangedCallback') {
                // We only swallow the error in registerElement patch
                // this is the work around since some applications
                // fail if we throw the error
                swallowError = true;
              }

              if (!swallowError) {
                throw error;
              } // TODO: @JiaLiPassion, Some application such as `registerElement` patch
              // still need to swallow the error, in the future after these applications
              // are updated, the following logic can be removed.


              var descJson = null;

              try {
                descJson = JSON.stringify(desc);
              } catch (error) {
                descJson = desc.toString();
              }

              console.log("Attempting to configure '".concat(prop, "' with descriptor '").concat(descJson, "' on object '").concat(obj, "' and got error, giving up: ").concat(error));
            }
          } else {
            throw error;
          }
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function eventTargetLegacyPatch(_global, api) {
        var _api$getGlobalObjects = api.getGlobalObjects(),
            eventNames = _api$getGlobalObjects.eventNames,
            globalSources = _api$getGlobalObjects.globalSources,
            zoneSymbolEventNames = _api$getGlobalObjects.zoneSymbolEventNames,
            TRUE_STR = _api$getGlobalObjects.TRUE_STR,
            FALSE_STR = _api$getGlobalObjects.FALSE_STR,
            ZONE_SYMBOL_PREFIX = _api$getGlobalObjects.ZONE_SYMBOL_PREFIX;

        var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
        var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'.split(',');
        var EVENT_TARGET = 'EventTarget';
        var apis = [];
        var isWtf = _global['wtf'];
        var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');

        if (isWtf) {
          // Workaround for: https://github.com/google/tracing-framework/issues/555
          apis = WTF_ISSUE_555_ARRAY.map(function (v) {
            return 'HTML' + v + 'Element';
          }).concat(NO_EVENT_TARGET);
        } else if (_global[EVENT_TARGET]) {
          apis.push(EVENT_TARGET);
        } else {
          // Note: EventTarget is not available in all browsers,
          // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
          apis = NO_EVENT_TARGET;
        }

        var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
        var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
        var ieOrEdge = api.isIEOrEdge();
        var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
        var FUNCTION_WRAPPER = '[object FunctionWrapper]';
        var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
        var pointerEventsMap = {
          'MSPointerCancel': 'pointercancel',
          'MSPointerDown': 'pointerdown',
          'MSPointerEnter': 'pointerenter',
          'MSPointerHover': 'pointerhover',
          'MSPointerLeave': 'pointerleave',
          'MSPointerMove': 'pointermove',
          'MSPointerOut': 'pointerout',
          'MSPointerOver': 'pointerover',
          'MSPointerUp': 'pointerup'
        }; //  predefine all __zone_symbol__ + eventName + true/false string

        for (var i = 0; i < eventNames.length; i++) {
          var eventName = eventNames[i];
          var falseEventName = eventName + FALSE_STR;
          var trueEventName = eventName + TRUE_STR;
          var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
          var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
          zoneSymbolEventNames[eventName] = {};
          zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
          zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        } //  predefine all task.source string


        for (var _i2 = 0; _i2 < WTF_ISSUE_555_ARRAY.length; _i2++) {
          var target = WTF_ISSUE_555_ARRAY[_i2];
          var targets = globalSources[target] = {};

          for (var j = 0; j < eventNames.length; j++) {
            var _eventName = eventNames[j];
            targets[_eventName] = target + ADD_EVENT_LISTENER_SOURCE + _eventName;
          }
        }

        var checkIEAndCrossContext = function checkIEAndCrossContext(nativeDelegate, delegate, target, args) {
          if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
              try {
                var testString = delegate.toString();

                if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
                  nativeDelegate.apply(target, args);
                  return false;
                }
              } catch (error) {
                nativeDelegate.apply(target, args);
                return false;
              }
            } else {
              var _testString = delegate.toString();

              if (_testString === FUNCTION_WRAPPER || _testString == BROWSER_TOOLS) {
                nativeDelegate.apply(target, args);
                return false;
              }
            }
          } else if (isEnableCrossContextCheck) {
            try {
              delegate.toString();
            } catch (error) {
              nativeDelegate.apply(target, args);
              return false;
            }
          }

          return true;
        };

        var apiTypes = [];

        for (var _i3 = 0; _i3 < apis.length; _i3++) {
          var type = _global[apis[_i3]];
          apiTypes.push(type && type.prototype);
        } // vh is validateHandler to check event handler
        // is valid or not(for security check)


        api.patchEventTarget(_global, api, apiTypes, {
          vh: checkIEAndCrossContext,
          transferEventName: function transferEventName(eventName) {
            var pointerEventName = pointerEventsMap[eventName];
            return pointerEventName || eventName;
          }
        });
        Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
        return true;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // we have to patch the instance since the proto is non-configurable


      function apply(api, _global) {
        var _api$getGlobalObjects2 = api.getGlobalObjects(),
            ADD_EVENT_LISTENER_STR = _api$getGlobalObjects2.ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR = _api$getGlobalObjects2.REMOVE_EVENT_LISTENER_STR;

        var WS = _global.WebSocket; // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
        // On older Chrome, no need since EventTarget was already patched

        if (!_global.EventTarget) {
          api.patchEventTarget(_global, api, [WS.prototype]);
        }

        _global.WebSocket = function (x, y) {
          var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
          var proxySocket;
          var proxySocketProto; // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance

          var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');

          if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = api.ObjectCreate(socket); // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method

            proxySocketProto = socket;
            [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
              proxySocket[propName] = function () {
                var args = api.ArraySlice.call(arguments);

                if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                  var eventName = args.length > 0 ? args[0] : undefined;

                  if (eventName) {
                    var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);

                    socket[propertySymbol] = proxySocket[propertySymbol];
                  }
                }

                return socket[propName].apply(socket, args);
              };
            });
          } else {
            // we can patch the real socket
            proxySocket = socket;
          }

          api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
          return proxySocket;
        };

        var globalWebSocket = _global['WebSocket'];

        for (var prop in WS) {
          globalWebSocket[prop] = WS[prop];
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function propertyDescriptorLegacyPatch(api, _global) {
        var _api$getGlobalObjects3 = api.getGlobalObjects(),
            isNode = _api$getGlobalObjects3.isNode,
            isMix = _api$getGlobalObjects3.isMix;

        if (isNode && !isMix) {
          return;
        }

        if (!canPatchViaPropertyDescriptor(api, _global)) {
          var supportsWebSocket = typeof WebSocket !== 'undefined'; // Safari, Android browsers (Jelly Bean)

          patchViaCapturingAllTheEvents(api);
          api.patchClass('XMLHttpRequest');

          if (supportsWebSocket) {
            apply(api, _global);
          }

          Zone[api.symbol('patchEvents')] = true;
        }
      }

      function canPatchViaPropertyDescriptor(api, _global) {
        var _api$getGlobalObjects4 = api.getGlobalObjects(),
            isBrowser = _api$getGlobalObjects4.isBrowser,
            isMix = _api$getGlobalObjects4.isMix;

        if ((isBrowser || isMix) && !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') && typeof Element !== 'undefined') {
          // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
          // IDL interface attributes are not configurable
          var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
          if (desc && !desc.configurable) return false; // try to use onclick to detect whether we can patch via propertyDescriptor
          // because XMLHttpRequest is not available in service worker

          if (desc) {
            api.ObjectDefineProperty(Element.prototype, 'onclick', {
              enumerable: true,
              configurable: true,
              get: function get() {
                return true;
              }
            });
            var div = document.createElement('div');
            var result = !!div.onclick;
            api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
            return result;
          }
        }

        var XMLHttpRequest = _global['XMLHttpRequest'];

        if (!XMLHttpRequest) {
          // XMLHttpRequest is not available in service worker
          return false;
        }

        var ON_READY_STATE_CHANGE = 'onreadystatechange';
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE); // add enumerable and configurable here because in opera
        // by default XMLHttpRequest.prototype.onreadystatechange is undefined
        // without adding enumerable and configurable will cause onreadystatechange
        // non-configurable
        // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
        // we should set a real desc instead a fake one

        if (xhrDesc) {
          api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function get() {
              return true;
            }
          });
          var req = new XMLHttpRequest();

          var _result = !!req.onreadystatechange; // restore original desc


          api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
          return _result;
        } else {
          var SYMBOL_FAKE_ONREADYSTATECHANGE = api.symbol('fake');
          api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
            enumerable: true,
            configurable: true,
            get: function get() {
              return this[SYMBOL_FAKE_ONREADYSTATECHANGE];
            },
            set: function set(value) {
              this[SYMBOL_FAKE_ONREADYSTATECHANGE] = value;
            }
          });

          var _req = new XMLHttpRequest();

          var detectFunc = function detectFunc() {};

          _req.onreadystatechange = detectFunc;

          var _result2 = _req[SYMBOL_FAKE_ONREADYSTATECHANGE] === detectFunc;

          _req.onreadystatechange = null;
          return _result2;
        }
      }

      var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
      var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
      var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
      var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
      var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
      var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
      var formEventNames = ['autocomplete', 'autocompleteerror'];
      var detailEventNames = ['toggle'];
      var eventNames = [].concat(globalEventHandlersEventNames, webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames); // Whenever any eventListener fires, we check the eventListener target and all parents
      // for `onwhatever` properties and replace them with zone-bound functions
      // - Chrome (for now)

      function patchViaCapturingAllTheEvents(api) {
        var unboundKey = api.symbol('unbound');

        var _loop = function _loop(i) {
          var property = eventNames[i];
          var onproperty = 'on' + property;
          self.addEventListener(property, function (event) {
            var elt = event.target,
                bound,
                source;

            if (elt) {
              source = elt.constructor['name'] + '.' + onproperty;
            } else {
              source = 'unknown.' + onproperty;
            }

            while (elt) {
              if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                bound = api.wrapWithCurrentZone(elt[onproperty], source);
                bound[unboundKey] = elt[onproperty];
                elt[onproperty] = bound;
              }

              elt = elt.parentElement;
            }
          }, true);
        };

        for (var i = 0; i < eventNames.length; i++) {
          _loop(i);
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function registerElementPatch(_global, api) {
        var _api$getGlobalObjects5 = api.getGlobalObjects(),
            isBrowser = _api$getGlobalObjects5.isBrowser,
            isMix = _api$getGlobalObjects5.isMix;

        if (!isBrowser && !isMix || !('registerElement' in _global.document)) {
          return;
        }

        var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      (function (_global) {
        var symbolPrefix = _global['__Zone_symbol_prefix'] || '__zone_symbol__';

        function __symbol__(name) {
          return symbolPrefix + name;
        }

        _global[__symbol__('legacyPatch')] = function () {
          var Zone = _global['Zone'];

          Zone.__load_patch('defineProperty', function (global, Zone, api) {
            api._redefineProperty = _redefineProperty;
            propertyPatch();
          });

          Zone.__load_patch('registerElement', function (global, Zone, api) {
            registerElementPatch(global, api);
          });

          Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
            eventTargetLegacyPatch(global, api);
            propertyDescriptorLegacyPatch(api, global);
          });
        };
      })(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
      /***/

    },

    /***/
    7761:
    /*!***********************************************!*\
      !*** ./node_modules/zone.js/fesm2015/zone.js ***!
      \***********************************************/

    /***/
    function _() {
      "use strict";
      /**
       * @license Angular v14.2.0-next.0
       * (c) 2010-2022 Google LLC. https://angular.io/
       * License: MIT
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      (function (global) {
        var performance = global['performance'];

        function mark(name) {
          performance && performance['mark'] && performance['mark'](name);
        }

        function performanceMeasure(name, label) {
          performance && performance['measure'] && performance['measure'](name, label);
        }

        mark('Zone'); // Initialize before it's accessed below.
        // __Zone_symbol_prefix global can be used to override the default zone
        // symbol prefix with a custom one if needed.

        var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

        function __symbol__(name) {
          return symbolPrefix + name;
        }

        var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

        if (global['Zone']) {
          // if global['Zone'] already exists (maybe zone.js was already loaded or
          // some other lib also registered a global object named Zone), we may need
          // to throw an error, but sometimes user may not want this error.
          // For example,
          // we have two web pages, page1 includes zone.js, page2 doesn't.
          // and the 1st time user load page1 and page2, everything work fine,
          // but when user load page2 again, error occurs because global['Zone'] already exists.
          // so we add a flag to let user choose whether to throw this error or not.
          // By default, if existing Zone is from zone.js, we will not throw the error.
          if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
          } else {
            return global['Zone'];
          }
        }

        var Zone = /*#__PURE__*/function () {
          function Zone(parent, zoneSpec) {
            _classCallCheck2(this, Zone);

            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
          }

          _createClass2(Zone, [{
            key: "parent",
            get: function get() {
              return this._parent;
            }
          }, {
            key: "name",
            get: function get() {
              return this._name;
            }
          }, {
            key: "get",
            value: function get(key) {
              var zone = this.getZoneWith(key);
              if (zone) return zone._properties[key];
            }
          }, {
            key: "getZoneWith",
            value: function getZoneWith(key) {
              var current = this;

              while (current) {
                if (current._properties.hasOwnProperty(key)) {
                  return current;
                }

                current = current._parent;
              }

              return null;
            }
          }, {
            key: "fork",
            value: function fork(zoneSpec) {
              if (!zoneSpec) throw new Error('ZoneSpec required!');
              return this._zoneDelegate.fork(this, zoneSpec);
            }
          }, {
            key: "wrap",
            value: function wrap(callback, source) {
              if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
              }

              var _callback = this._zoneDelegate.intercept(this, callback, source);

              var zone = this;
              return function () {
                return zone.runGuarded(_callback, this, arguments, source);
              };
            }
          }, {
            key: "run",
            value: function run(callback, applyThis, applyArgs, source) {
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runGuarded",
            value: function runGuarded(callback) {
              var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
              var source = arguments.length > 3 ? arguments[3] : undefined;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                try {
                  return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runTask",
            value: function runTask(task, applyThis, applyArgs) {
              if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
              } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
              // will run in notScheduled(canceled) state, we should not try to
              // run such kind of task but just return


              if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
              }

              var reEntryGuard = task.state != running;
              reEntryGuard && task._transitionTo(running, scheduled);
              task.runCount++;
              var previousTask = _currentTask;
              _currentTask = task;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                  task.cancelFn = undefined;
                }

                try {
                  return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                  if (task.type == eventTask || task.data && task.data.isPeriodic) {
                    reEntryGuard && task._transitionTo(scheduled, running);
                  } else {
                    task.runCount = 0;

                    this._updateTaskCount(task, -1);

                    reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                  }
                }

                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
              }
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(task) {
              if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;

                while (newZone) {
                  if (newZone === task.zone) {
                    throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                  }

                  newZone = newZone.parent;
                }
              }

              task._transitionTo(scheduling, notScheduled);

              var zoneDelegates = [];
              task._zoneDelegates = zoneDelegates;
              task._zone = this;

              try {
                task = this._zoneDelegate.scheduleTask(this, task);
              } catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
              }

              if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
              }

              return task;
            }
          }, {
            key: "scheduleMicroTask",
            value: function scheduleMicroTask(source, callback, data, customSchedule) {
              return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            }
          }, {
            key: "scheduleMacroTask",
            value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "scheduleEventTask",
            value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(task) {
              if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

              task._transitionTo(canceling, scheduled, running);

              try {
                this._zoneDelegate.cancelTask(this, task);
              } catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);

                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              this._updateTaskCount(task, -1);

              task._transitionTo(notScheduled, canceling);

              task.runCount = 0;
              return task;
            }
          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(task, count) {
              var zoneDelegates = task._zoneDelegates;

              if (count == -1) {
                task._zoneDelegates = null;
              }

              for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
              }
            }
          }], [{
            key: "assertZonePatched",
            value: function assertZonePatched() {
              if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
              }
            }
          }, {
            key: "root",
            get: function get() {
              var zone = Zone.current;

              while (zone.parent) {
                zone = zone.parent;
              }

              return zone;
            }
          }, {
            key: "current",
            get: function get() {
              return _currentZoneFrame.zone;
            }
          }, {
            key: "currentTask",
            get: function get() {
              return _currentTask;
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "__load_patch",
            value: function __load_patch(name, fn) {
              var ignoreDuplicate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

              if (patches.hasOwnProperty(name)) {
                // `checkDuplicate` option is defined from global variable
                // so it works for all modules.
                // `ignoreDuplicate` can work for the specified module
                if (!ignoreDuplicate && checkDuplicate) {
                  throw Error('Already loaded patch: ' + name);
                }
              } else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
              }
            }
          }]);

          return Zone;
        }(); // tslint:disable-next-line:require-internal-with-underscore


        Zone.__symbol__ = __symbol__;
        var DELEGATE_ZS = {
          name: '',
          onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
          },
          onScheduleTask: function onScheduleTask(delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
          },
          onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
          },
          onCancelTask: function onCancelTask(delegate, _, target, task) {
            return delegate.cancelTask(target, task);
          }
        };

        var _ZoneDelegate = /*#__PURE__*/function () {
          function _ZoneDelegate(zone, parentDelegate, zoneSpec) {
            _classCallCheck2(this, _ZoneDelegate);

            this._taskCounts = {
              'microTask': 0,
              'macroTask': 0,
              'eventTask': 0
            };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

            if (zoneSpecHasTask || parentHasTask) {
              // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
              // a case all task related interceptors must go through this ZD. We can't short circuit it.
              this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
              this._hasTaskDlgt = parentDelegate;
              this._hasTaskDlgtOwner = this;
              this._hasTaskCurrZone = zone;

              if (!zoneSpec.onScheduleTask) {
                this._scheduleTaskZS = DELEGATE_ZS;
                this._scheduleTaskDlgt = parentDelegate;
                this._scheduleTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onInvokeTask) {
                this._invokeTaskZS = DELEGATE_ZS;
                this._invokeTaskDlgt = parentDelegate;
                this._invokeTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onCancelTask) {
                this._cancelTaskZS = DELEGATE_ZS;
                this._cancelTaskDlgt = parentDelegate;
                this._cancelTaskCurrZone = this.zone;
              }
            }
          }

          _createClass2(_ZoneDelegate, [{
            key: "fork",
            value: function fork(targetZone, zoneSpec) {
              return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
            }
          }, {
            key: "intercept",
            value: function intercept(targetZone, callback, source) {
              return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
            }
          }, {
            key: "invoke",
            value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
              return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "handleError",
            value: function handleError(targetZone, error) {
              return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(targetZone, task) {
              var returnTask = task;

              if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                  returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                } // clang-format off


                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

                if (!returnTask) returnTask = task;
              } else {
                if (task.scheduleFn) {
                  task.scheduleFn(task);
                } else if (task.type == microTask) {
                  scheduleMicroTask(task);
                } else {
                  throw new Error('Task is missing scheduleFn.');
                }
              }

              return returnTask;
            }
          }, {
            key: "invokeTask",
            value: function invokeTask(targetZone, task, applyThis, applyArgs) {
              return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(targetZone, task) {
              var value;

              if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
              } else {
                if (!task.cancelFn) {
                  throw Error('Task is not cancelable');
                }

                value = task.cancelFn(task);
              }

              return value;
            }
          }, {
            key: "hasTask",
            value: function hasTask(targetZone, isEmpty) {
              // hasTask should not throw error so other ZoneDelegate
              // can still trigger hasTask callback
              try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
              } catch (err) {
                this.handleError(targetZone, err);
              }
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(type, count) {
              var counts = this._taskCounts;
              var prev = counts[type];
              var next = counts[type] = prev + count;

              if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
              }

              if (prev == 0 || next == 0) {
                var isEmpty = {
                  microTask: counts['microTask'] > 0,
                  macroTask: counts['macroTask'] > 0,
                  eventTask: counts['eventTask'] > 0,
                  change: type
                };
                this.hasTask(this.zone, isEmpty);
              }
            }
          }]);

          return _ZoneDelegate;
        }();

        var ZoneTask = /*#__PURE__*/function () {
          function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            _classCallCheck2(this, ZoneTask);

            // tslint:disable-next-line:require-internal-with-underscore
            this._zone = null;
            this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

            this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;

            if (!callback) {
              throw new Error('callback is not defined');
            }

            this.callback = callback;
            var self = this; // TODO: @JiaLiPassion options should have interface

            if (type === eventTask && options && options.useG) {
              this.invoke = ZoneTask.invokeTask;
            } else {
              this.invoke = function () {
                return ZoneTask.invokeTask.call(global, self, this, arguments);
              };
            }
          }

          _createClass2(ZoneTask, [{
            key: "zone",
            get: function get() {
              return this._zone;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state;
            }
          }, {
            key: "cancelScheduleRequest",
            value: function cancelScheduleRequest() {
              this._transitionTo(notScheduled, scheduling);
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_transitionTo",
            value: function _transitionTo(toState, fromState1, fromState2) {
              if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;

                if (toState == notScheduled) {
                  this._zoneDelegates = null;
                }
              } else {
                throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
              }
            }
          }, {
            key: "toString",
            value: function toString() {
              if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
              } else {
                return Object.prototype.toString.call(this);
              }
            } // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)

          }, {
            key: "toJSON",
            value: function toJSON() {
              return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
              };
            }
          }], [{
            key: "invokeTask",
            value: function invokeTask(task, target, args) {
              if (!task) {
                task = this;
              }

              _numberOfNestedTaskFrames++;

              try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
              } finally {
                if (_numberOfNestedTaskFrames == 1) {
                  drainMicroTaskQueue();
                }

                _numberOfNestedTaskFrames--;
              }
            }
          }]);

          return ZoneTask;
        }(); //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var symbolSetTimeout = __symbol__('setTimeout');

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var _microTaskQueue = [];
        var _isDrainingMicrotaskQueue = false;
        var nativeMicroTaskQueuePromise;

        function nativeScheduleMicroTask(func) {
          if (!nativeMicroTaskQueuePromise) {
            if (global[symbolPromise]) {
              nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
            }
          }

          if (nativeMicroTaskQueuePromise) {
            var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

            if (!nativeThen) {
              // native Promise is not patchable, we need to use `then` directly
              // issue 1078
              nativeThen = nativeMicroTaskQueuePromise['then'];
            }

            nativeThen.call(nativeMicroTaskQueuePromise, func);
          } else {
            global[symbolSetTimeout](func, 0);
          }
        }

        function scheduleMicroTask(task) {
          // if we are not running in any task, and there has not been anything scheduled
          // we must bootstrap the initial task creation by manually scheduling the drain
          if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            nativeScheduleMicroTask(drainMicroTaskQueue);
          }

          task && _microTaskQueue.push(task);
        }

        function drainMicroTaskQueue() {
          if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;

            while (_microTaskQueue.length) {
              var queue = _microTaskQueue;
              _microTaskQueue = [];

              for (var i = 0; i < queue.length; i++) {
                var task = queue[i];

                try {
                  task.zone.runTask(task, null, null);
                } catch (error) {
                  _api.onUnhandledError(error);
                }
              }
            }

            _api.microtaskDrainDone();

            _isDrainingMicrotaskQueue = false;
          }
        } //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var NO_ZONE = {
          name: 'NO ZONE'
        };
        var notScheduled = 'notScheduled',
            scheduling = 'scheduling',
            scheduled = 'scheduled',
            running = 'running',
            canceling = 'canceling',
            unknown = 'unknown';
        var microTask = 'microTask',
            macroTask = 'macroTask',
            eventTask = 'eventTask';
        var patches = {};
        var _api = {
          symbol: __symbol__,
          currentZoneFrame: function currentZoneFrame() {
            return _currentZoneFrame;
          },
          onUnhandledError: noop,
          microtaskDrainDone: noop,
          scheduleMicroTask: scheduleMicroTask,
          showUncaughtError: function showUncaughtError() {
            return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
          },
          patchEventTarget: function patchEventTarget() {
            return [];
          },
          patchOnProperties: noop,
          patchMethod: function patchMethod() {
            return noop;
          },
          bindArguments: function bindArguments() {
            return [];
          },
          patchThen: function patchThen() {
            return noop;
          },
          patchMacroTask: function patchMacroTask() {
            return noop;
          },
          patchEventPrototype: function patchEventPrototype() {
            return noop;
          },
          isIEOrEdge: function isIEOrEdge() {
            return false;
          },
          getGlobalObjects: function getGlobalObjects() {
            return undefined;
          },
          ObjectDefineProperty: function ObjectDefineProperty() {
            return noop;
          },
          ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
            return undefined;
          },
          ObjectCreate: function ObjectCreate() {
            return undefined;
          },
          ArraySlice: function ArraySlice() {
            return [];
          },
          patchClass: function patchClass() {
            return noop;
          },
          wrapWithCurrentZone: function wrapWithCurrentZone() {
            return noop;
          },
          filterProperties: function filterProperties() {
            return [];
          },
          attachOriginToPatched: function attachOriginToPatched() {
            return noop;
          },
          _redefineProperty: function _redefineProperty() {
            return noop;
          },
          patchCallbacks: function patchCallbacks() {
            return noop;
          },
          nativeScheduleMicroTask: nativeScheduleMicroTask
        };
        var _currentZoneFrame = {
          parent: null,
          zone: new Zone(null, null)
        };
        var _currentTask = null;
        var _numberOfNestedTaskFrames = 0;

        function noop() {}

        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
      })(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Suppress closure compiler errors about unknown 'Zone' variable
       * @fileoverview
       * @suppress {undefinedVars,globalThis,missingRequire}
       */
      /// <reference types="node"/>
      // issue #989, to reduce bundle size, use short name

      /** Object.getOwnPropertyDescriptor */


      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      /** Object.defineProperty */

      var ObjectDefineProperty = Object.defineProperty;
      /** Object.getPrototypeOf */

      var ObjectGetPrototypeOf = Object.getPrototypeOf;
      /** Object.create */

      var ObjectCreate = Object.create;
      /** Array.prototype.slice */

      var ArraySlice = Array.prototype.slice;
      /** addEventListener string const */

      var ADD_EVENT_LISTENER_STR = 'addEventListener';
      /** removeEventListener string const */

      var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
      /** zoneSymbol addEventListener */

      var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
      /** zoneSymbol removeEventListener */


      var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
      /** true string const */


      var TRUE_STR = 'true';
      /** false string const */

      var FALSE_STR = 'false';
      /** Zone symbol prefix string const. */

      var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

      function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
      }

      function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
      }

      var zoneSymbol = Zone.__symbol__;
      var isWindowExists = typeof window !== 'undefined';
      var internalWindow = isWindowExists ? window : undefined;

      var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

      var REMOVE_ATTRIBUTE = 'removeAttribute';

      function bindArguments(args, source) {
        for (var i = args.length - 1; i >= 0; i--) {
          if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
          }
        }

        return args;
      }

      function patchPrototype(prototype, fnNames) {
        var source = prototype.constructor['name'];

        var _loop2 = function _loop2(i) {
          var name = fnNames[i];
          var delegate = prototype[name];

          if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

            if (!isPropertyWritable(prototypeDesc)) {
              return "continue";
            }

            prototype[name] = function (delegate) {
              var patched = function patched() {
                return delegate.apply(this, bindArguments(arguments, source + '.' + name));
              };

              attachOriginToPatched(patched, delegate);
              return patched;
            }(delegate);
          }
        };

        for (var i = 0; i < fnNames.length; i++) {
          var _ret = _loop2(i);

          if (_ret === "continue") continue;
        }
      }

      function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
          return true;
        }

        if (propertyDesc.writable === false) {
          return false;
        }

        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
      }

      var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
      var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
      // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
      var zoneSymbolEventNames$1 = {};

      var wrapFn = function wrapFn(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        }

        var eventNameSymbol = zoneSymbolEventNames$1[event.type];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
        }

        var target = this || event.target || _global;
        var listener = target[eventNameSymbol];
        var result;

        if (isBrowser && target === internalWindow && event.type === 'error') {
          // window.onerror have different signature
          // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
          // and onerror callback will prevent default when callback return true
          var errorEvent = event;
          result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

          if (result === true) {
            event.preventDefault();
          }
        } else {
          result = listener && listener.apply(this, arguments);

          if (result != undefined && !result) {
            event.preventDefault();
          }
        }

        return result;
      };

      function patchProperty(obj, prop, prototype) {
        var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

        if (!desc && prototype) {
          // when patch window object, use prototype to check prop exist or not
          var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

          if (prototypeDesc) {
            desc = {
              enumerable: true,
              configurable: true
            };
          }
        } // if the descriptor not exists or is not configurable
        // just return


        if (!desc || !desc.configurable) {
          return;
        }

        var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
          return;
        } // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified


        delete desc.writable;
        delete desc.value;
        var originalDescGet = desc.get;
        var originalDescSet = desc.set; // slice(2) cuz 'onclick' -> 'click', etc

        var eventName = prop.slice(2);
        var eventNameSymbol = zoneSymbolEventNames$1[eventName];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
        }

        desc.set = function (newValue) {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return;
          }

          var previousValue = target[eventNameSymbol];

          if (typeof previousValue === 'function') {
            target.removeEventListener(eventName, wrapFn);
          } // issue #978, when onload handler was added before loading zone.js
          // we should remove it with originalDescSet


          originalDescSet && originalDescSet.call(target, null);
          target[eventNameSymbol] = newValue;

          if (typeof newValue === 'function') {
            target.addEventListener(eventName, wrapFn, false);
          }
        }; // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null


        desc.get = function () {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return null;
          }

          var listener = target[eventNameSymbol];

          if (listener) {
            return listener;
          } else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet.call(this);

            if (value) {
              desc.set.call(this, value);

              if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                target.removeAttribute(prop);
              }

              return value;
            }
          }

          return null;
        };

        ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
      }

      function patchOnProperties(obj, properties, prototype) {
        if (properties) {
          for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
          }
        } else {
          var onProperties = [];

          for (var prop in obj) {
            if (prop.slice(0, 2) == 'on') {
              onProperties.push(prop);
            }
          }

          for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
          }
        }
      }

      var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

      function patchClass(className) {
        var OriginalClass = _global[className];
        if (!OriginalClass) return; // keep original class in global

        _global[zoneSymbol(className)] = OriginalClass;

        _global[className] = function () {
          var a = bindArguments(arguments, className);

          switch (a.length) {
            case 0:
              this[originalInstanceKey] = new OriginalClass();
              break;

            case 1:
              this[originalInstanceKey] = new OriginalClass(a[0]);
              break;

            case 2:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
              break;

            case 3:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
              break;

            case 4:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
              break;

            default:
              throw new Error('Arg list too long.');
          }
        }; // attach original delegate to patched function


        attachOriginToPatched(_global[className], OriginalClass);
        var instance = new OriginalClass(function () {});
        var prop;

        for (prop in instance) {
          // https://bugs.webkit.org/show_bug.cgi?id=44721
          if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

          (function (prop) {
            if (typeof instance[prop] === 'function') {
              _global[className].prototype[prop] = function () {
                return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
              };
            } else {
              ObjectDefineProperty(_global[className].prototype, prop, {
                set: function set(fn) {
                  if (typeof fn === 'function') {
                    this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                    // use it in Function.prototype.toString to return
                    // the native one.

                    attachOriginToPatched(this[originalInstanceKey][prop], fn);
                  } else {
                    this[originalInstanceKey][prop] = fn;
                  }
                },
                get: function get() {
                  return this[originalInstanceKey][prop];
                }
              });
            }
          })(prop);
        }

        for (prop in OriginalClass) {
          if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
          }
        }
      }

      function patchMethod(target, name, patchFn) {
        var proto = target;

        while (proto && !proto.hasOwnProperty(name)) {
          proto = ObjectGetPrototypeOf(proto);
        }

        if (!proto && target[name]) {
          // somehow we did not find it, but we can see it. This happens on IE for Window properties.
          proto = target;
        }

        var delegateName = zoneSymbol(name);
        var delegate = null;

        if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
          delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
          // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

          var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

          if (isPropertyWritable(desc)) {
            var patchDelegate = patchFn(delegate, delegateName, name);

            proto[name] = function () {
              return patchDelegate(this, arguments);
            };

            attachOriginToPatched(proto[name], delegate);
          }
        }

        return delegate;
      } // TODO: @JiaLiPassion, support cancel task later if necessary


      function patchMacroTask(obj, funcName, metaCreator) {
        var setNative = null;

        function scheduleTask(task) {
          var data = task.data;

          data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
          };

          setNative.apply(data.target, data.args);
          return task;
        }

        setNative = patchMethod(obj, funcName, function (delegate) {
          return function (self, args) {
            var meta = metaCreator(self, args);

            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
              return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            } else {
              // cause an error by calling it directly.
              return delegate.apply(self, args);
            }
          };
        });
      }

      function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
      }

      var isDetectedIEOrEdge = false;
      var ieOrEdge = false;

      function isIE() {
        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
          }
        } catch (error) {}

        return false;
      }

      function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
          return ieOrEdge;
        }

        isDetectedIEOrEdge = true;

        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
          }
        } catch (error) {}

        return ieOrEdge;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
        var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ObjectDefineProperty = Object.defineProperty;

        function readableObjectToString(obj) {
          if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
          }

          return obj ? obj.toString() : Object.prototype.toString.call(obj);
        }

        var __symbol__ = api.symbol;
        var _uncaughtPromiseErrors = [];
        var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var creationTrace = '__creationTrace__';

        api.onUnhandledError = function (e) {
          if (api.showUncaughtError()) {
            var rejection = e && e.rejection;

            if (rejection) {
              console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            } else {
              console.error(e);
            }
          }
        };

        api.microtaskDrainDone = function () {
          var _loop3 = function _loop3() {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

            try {
              uncaughtPromiseError.zone.runGuarded(function () {
                if (uncaughtPromiseError.throwOriginal) {
                  throw uncaughtPromiseError.rejection;
                }

                throw uncaughtPromiseError;
              });
            } catch (error) {
              handleUnhandledRejection(error);
            }
          };

          while (_uncaughtPromiseErrors.length) {
            _loop3();
          }
        };

        var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

        function handleUnhandledRejection(e) {
          api.onUnhandledError(e);

          try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

            if (typeof handler === 'function') {
              handler.call(this, e);
            }
          } catch (err) {}
        }

        function isThenable(value) {
          return value && value.then;
        }

        function forwardResolution(value) {
          return value;
        }

        function forwardRejection(rejection) {
          return ZoneAwarePromise.reject(rejection);
        }

        var symbolState = __symbol__('state');

        var symbolValue = __symbol__('value');

        var symbolFinally = __symbol__('finally');

        var symbolParentPromiseValue = __symbol__('parentPromiseValue');

        var symbolParentPromiseState = __symbol__('parentPromiseState');

        var source = 'Promise.then';
        var UNRESOLVED = null;
        var RESOLVED = true;
        var REJECTED = false;
        var REJECTED_NO_CATCH = 0;

        function makeResolver(promise, state) {
          return function (v) {
            try {
              resolvePromise(promise, state, v);
            } catch (err) {
              resolvePromise(promise, false, err);
            } // Do not return value or you will break the Promise spec.

          };
        }

        var once = function once() {
          var wasCalled = false;
          return function wrapper(wrappedFunction) {
            return function () {
              if (wasCalled) {
                return;
              }

              wasCalled = true;
              wrappedFunction.apply(null, arguments);
            };
          };
        };

        var TYPE_ERROR = 'Promise resolved with itself';

        var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


        function resolvePromise(promise, state, value) {
          var onceWrapper = once();

          if (promise === value) {
            throw new TypeError(TYPE_ERROR);
          }

          if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;

            try {
              if (typeof value === 'object' || typeof value === 'function') {
                then = value && value.then;
              }
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
              return promise;
            } // if (value instanceof ZoneAwarePromise) {


            if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
              clearRejectedNoCatch(value);
              resolvePromise(promise, value[symbolState], value[symbolValue]);
            } else if (state !== REJECTED && typeof then === 'function') {
              try {
                then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
              } catch (err) {
                onceWrapper(function () {
                  resolvePromise(promise, false, err);
                })();
              }
            } else {
              promise[symbolState] = state;
              var queue = promise[symbolValue];
              promise[symbolValue] = value;

              if (promise[symbolFinally] === symbolFinally) {
                // the promise is generated by Promise.prototype.finally
                if (state === RESOLVED) {
                  // the state is resolved, should ignore the value
                  // and use parent promise value
                  promise[symbolState] = promise[symbolParentPromiseState];
                  promise[symbolValue] = promise[symbolParentPromiseValue];
                }
              } // record task information in value when error occurs, so we can
              // do some additional work such as render longStackTrace


              if (state === REJECTED && value instanceof Error) {
                // check if longStackTraceZone is here
                var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

                if (trace) {
                  // only keep the long stack trace into error when in longStackTraceZone
                  ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: trace
                  });
                }
              }

              for (var i = 0; i < queue.length;) {
                scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
              }

              if (queue.length == 0 && state == REJECTED) {
                promise[symbolState] = REJECTED_NO_CATCH;
                var uncaughtPromiseError = value;

                try {
                  // Here we throws a new Error to print more readable error log
                  // and if the value is not an error, zone.js builds an `Error`
                  // Object here to attach the stack information.
                  throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
                } catch (err) {
                  uncaughtPromiseError = err;
                }

                if (isDisableWrappingUncaughtPromiseRejection) {
                  // If disable wrapping uncaught promise reject
                  // use the value instead of wrapping it.
                  uncaughtPromiseError.throwOriginal = true;
                }

                uncaughtPromiseError.rejection = value;
                uncaughtPromiseError.promise = promise;
                uncaughtPromiseError.zone = Zone.current;
                uncaughtPromiseError.task = Zone.currentTask;

                _uncaughtPromiseErrors.push(uncaughtPromiseError);

                api.scheduleMicroTask(); // to make sure that it is running
              }
            }
          } // Resolving an already resolved promise is a noop.


          return promise;
        }

        var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

        function clearRejectedNoCatch(promise) {
          if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
              var handler = Zone[REJECTION_HANDLED_HANDLER];

              if (handler && typeof handler === 'function') {
                handler.call(this, {
                  rejection: promise[symbolValue],
                  promise: promise
                });
              }
            } catch (err) {}

            promise[symbolState] = REJECTED;

            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
              if (promise === _uncaughtPromiseErrors[i].promise) {
                _uncaughtPromiseErrors.splice(i, 1);
              }
            }
          }
        }

        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
          clearRejectedNoCatch(promise);
          var promiseState = promise[symbolState];
          var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
          zone.scheduleMicroTask(source, function () {
            try {
              var parentPromiseValue = promise[symbolValue];
              var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

              if (isFinallyPromise) {
                // if the promise is generated from finally call, keep parent promise's state and value
                chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                chainPromise[symbolParentPromiseState] = promiseState;
              } // should not pass value to finally callback


              var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
              resolvePromise(chainPromise, true, value);
            } catch (error) {
              // if error occurs, should always return this error
              resolvePromise(chainPromise, false, error);
            }
          }, chainPromise);
        }

        var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

        var noop = function noop() {};

        var AggregateError = global.AggregateError;

        var ZoneAwarePromise = /*#__PURE__*/function (_Symbol$toStringTag, _Symbol$species) {
          function ZoneAwarePromise(executor) {
            _classCallCheck2(this, ZoneAwarePromise);

            var promise = this;

            if (!(promise instanceof ZoneAwarePromise)) {
              throw new Error('Must be an instanceof Promise.');
            }

            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;

            try {
              var onceWrapper = once();
              executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
            } catch (error) {
              resolvePromise(promise, false, error);
            }
          }

          _createClass2(ZoneAwarePromise, [{
            key: _Symbol$toStringTag,
            get: function get() {
              return 'Promise';
            }
          }, {
            key: _Symbol$species,
            get: function get() {
              return ZoneAwarePromise;
            }
          }, {
            key: "then",
            value: function then(onFulfilled, onRejected) {
              var _a; // We must read `Symbol.species` safely because `this` may be anything. For instance, `this`
              // may be an object without a prototype (created through `Object.create(null)`); thus
              // `this.constructor` will be undefined. One of the use cases is SystemJS creating
              // prototype-less objects (modules) via `Object.create(null)`. The SystemJS creates an empty
              // object and copies promise properties into that object (within the `getOrCreateLoad`
              // function). The zone.js then checks if the resolved value has the `then` method and invokes
              // it with the `value` context. Otherwise, this will throw an error: `TypeError: Cannot read
              // properties of undefined (reading 'Symbol(Symbol.species)')`.


              var C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = this.constructor || ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
              }

              return chainPromise;
            }
          }, {
            key: "catch",
            value: function _catch(onRejected) {
              return this.then(null, onRejected);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              var _a; // See comment on the call to `then` about why thee `Symbol.species` is safely accessed.


              var C = (_a = this.constructor) === null || _a === void 0 ? void 0 : _a[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              chainPromise[symbolFinally] = symbolFinally;
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
              }

              return chainPromise;
            }
          }], [{
            key: "toString",
            value: function toString() {
              return ZONE_AWARE_PROMISE_TO_STRING;
            }
          }, {
            key: "resolve",
            value: function resolve(value) {
              return resolvePromise(new this(null), RESOLVED, value);
            }
          }, {
            key: "reject",
            value: function reject(error) {
              return resolvePromise(new this(null), REJECTED, error);
            }
          }, {
            key: "any",
            value: function any(values) {
              if (!values || typeof values[Symbol.iterator] !== 'function') {
                return Promise.reject(new AggregateError([], 'All promises were rejected'));
              }

              var promises = [];
              var count = 0;

              try {
                var _iterator2 = _createForOfIteratorHelper(values),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var v = _step2.value;
                    count++;
                    promises.push(ZoneAwarePromise.resolve(v));
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              } catch (err) {
                return Promise.reject(new AggregateError([], 'All promises were rejected'));
              }

              if (count === 0) {
                return Promise.reject(new AggregateError([], 'All promises were rejected'));
              }

              var finished = false;
              var errors = [];
              return new ZoneAwarePromise(function (resolve, reject) {
                for (var i = 0; i < promises.length; i++) {
                  promises[i].then(function (v) {
                    if (finished) {
                      return;
                    }

                    finished = true;
                    resolve(v);
                  }, function (err) {
                    errors.push(err);
                    count--;

                    if (count === 0) {
                      finished = true;
                      reject(new AggregateError(errors, 'All promises were rejected'));
                    }
                  });
                }
              });
            }
          }, {
            key: "race",
            value: function race(values) {
              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              });

              function onResolve(value) {
                resolve(value);
              }

              function onReject(error) {
                reject(error);
              }

              var _iterator3 = _createForOfIteratorHelper(values),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var value = _step3.value;

                  if (!isThenable(value)) {
                    value = this.resolve(value);
                  }

                  value.then(onResolve, onReject);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              return promise;
            }
          }, {
            key: "all",
            value: function all(values) {
              return ZoneAwarePromise.allWithCallback(values);
            }
          }, {
            key: "allSettled",
            value: function allSettled(values) {
              var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
              return P.allWithCallback(values, {
                thenCallback: function thenCallback(value) {
                  return {
                    status: 'fulfilled',
                    value: value
                  };
                },
                errorCallback: function errorCallback(err) {
                  return {
                    status: 'rejected',
                    reason: err
                  };
                }
              });
            }
          }, {
            key: "allWithCallback",
            value: function allWithCallback(values, callback) {
              var _this2 = this;

              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

              var unresolvedCount = 2;
              var valueIndex = 0;
              var resolvedValues = [];

              var _iterator4 = _createForOfIteratorHelper(values),
                  _step4;

              try {
                var _loop4 = function _loop4() {
                  var value = _step4.value;

                  if (!isThenable(value)) {
                    value = _this2.resolve(value);
                  }

                  var curValueIndex = valueIndex;

                  try {
                    value.then(function (value) {
                      resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                      unresolvedCount--;

                      if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                      }
                    }, function (err) {
                      if (!callback) {
                        reject(err);
                      } else {
                        resolvedValues[curValueIndex] = callback.errorCallback(err);
                        unresolvedCount--;

                        if (unresolvedCount === 0) {
                          resolve(resolvedValues);
                        }
                      }
                    });
                  } catch (thenErr) {
                    reject(thenErr);
                  }

                  unresolvedCount++;
                  valueIndex++;
                };

                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  _loop4();
                } // Make the unresolvedCount zero-based again.

              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              unresolvedCount -= 2;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }

              return promise;
            }
          }]);

          return ZoneAwarePromise;
        }(Symbol.toStringTag, Symbol.species); // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.


        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        var NativePromise = global[symbolPromise] = global['Promise'];
        global['Promise'] = ZoneAwarePromise;

        var symbolThenPatched = __symbol__('thenPatched');

        function patchThen(Ctor) {
          var proto = Ctor.prototype;
          var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

          if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
          }

          var originalThen = proto.then; // Keep a reference to the original method.

          proto[symbolThen] = originalThen;

          Ctor.prototype.then = function (onResolve, onReject) {
            var _this3 = this;

            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
              originalThen.call(_this3, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
          };

          Ctor[symbolThenPatched] = true;
        }

        api.patchThen = patchThen;

        function zoneify(fn) {
          return function (self, args) {
            var resultPromise = fn.apply(self, args);

            if (resultPromise instanceof ZoneAwarePromise) {
              return resultPromise;
            }

            var ctor = resultPromise.constructor;

            if (!ctor[symbolThenPatched]) {
              patchThen(ctor);
            }

            return resultPromise;
          };
        }

        if (NativePromise) {
          patchThen(NativePromise);
          patchMethod(global, 'fetch', function (delegate) {
            return zoneify(delegate);
          });
        } // This is not part of public API, but it is useful for tests, so we expose it.


        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // override Function.prototype.toString to make zone.js patched function
      // look like native function


      Zone.__load_patch('toString', function (global) {
        // patch Func.prototype.toString to let them look like native
        var originalFunctionToString = Function.prototype.toString;
        var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
        var PROMISE_SYMBOL = zoneSymbol('Promise');
        var ERROR_SYMBOL = zoneSymbol('Error');

        var newFunctionToString = function toString() {
          if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

            if (originalDelegate) {
              if (typeof originalDelegate === 'function') {
                return originalFunctionToString.call(originalDelegate);
              } else {
                return Object.prototype.toString.call(originalDelegate);
              }
            }

            if (this === Promise) {
              var nativePromise = global[PROMISE_SYMBOL];

              if (nativePromise) {
                return originalFunctionToString.call(nativePromise);
              }
            }

            if (this === Error) {
              var nativeError = global[ERROR_SYMBOL];

              if (nativeError) {
                return originalFunctionToString.call(nativeError);
              }
            }
          }

          return originalFunctionToString.call(this);
        };

        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

        var originalObjectToString = Object.prototype.toString;
        var PROMISE_OBJECT_TO_STRING = '[object Promise]';

        Object.prototype.toString = function () {
          if (typeof Promise === 'function' && this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
          }

          return originalObjectToString.call(this);
        };
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var passiveSupported = false;

      if (typeof window !== 'undefined') {
        try {
          var options = Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
            }
          }); // Note: We pass the `options` object as the event handler too. This is not compatible with the
          // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
          // without an actual handler.

          window.addEventListener('test', options, options);
          window.removeEventListener('test', options, options);
        } catch (err) {
          passiveSupported = false;
        }
      } // an identifier to tell ZoneTask do not create a new invoke closure


      var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
      };
      var zoneSymbolEventNames = {};
      var globalSources = {};
      var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
      var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

      function prepareEventNames(eventName, eventNameToString) {
        var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
        var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
      }

      function patchEventTarget(_global, api, apis, patchOptions) {
        var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
        var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
        var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
        var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
        var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
        var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        var PREPEND_EVENT_LISTENER = 'prependListener';
        var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

        var invokeTask = function invokeTask(task, target, event) {
          // for better performance, check isRemoved which is set
          // by removeEventListener
          if (task.isRemoved) {
            return;
          }

          var delegate = task.callback;

          if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) {
              return delegate.handleEvent(event);
            };

            task.originalDelegate = delegate;
          } // invoke static task.invoke
          // need to try/catch error here, otherwise, the error in one event listener
          // will break the executions of the other event listeners. Also error will
          // not remove the event listener when `once` options is true.


          var error;

          try {
            task.invoke(task, target, [event]);
          } catch (err) {
            error = err;
          }

          var options = task.options;

          if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

            target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
          }

          return error;
        };

        function globalCallback(context, event, isCapture) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = context || event.target || _global;
          var tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];

          if (tasks) {
            var errors = []; // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke

            if (tasks.length === 1) {
              var err = invokeTask(tasks[0], target, event);
              err && errors.push(err);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                var _err = invokeTask(copyTasks[i], target, event);

                _err && errors.push(_err);
              }
            } // Since there is only one error, we don't need to schedule microTask
            // to throw the error.


            if (errors.length === 1) {
              throw errors[0];
            } else {
              var _loop5 = function _loop5(_i4) {
                var err = errors[_i4];
                api.nativeScheduleMicroTask(function () {
                  throw err;
                });
              };

              for (var _i4 = 0; _i4 < errors.length; _i4++) {
                _loop5(_i4);
              }
            }
          }
        } // global shared zoneAwareCallback to handle all event callback with capture = false


        var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
          return globalCallback(this, event, false);
        }; // global shared zoneAwareCallback to handle all event callback with capture = true


        var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
          return globalCallback(this, event, true);
        };

        function patchEventTargetMethods(obj, patchOptions) {
          if (!obj) {
            return false;
          }

          var useGlobalCallback = true;

          if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
          }

          var validateHandler = patchOptions && patchOptions.vh;
          var checkDuplicate = true;

          if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
          }

          var returnTarget = false;

          if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
          }

          var proto = obj;

          while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
          }

          if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
          }

          if (!proto) {
            return false;
          }

          if (proto[zoneSymbolAddEventListener]) {
            return false;
          }

          var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
          // so we do not need to create a new object just for pass some data

          var taskData = {};
          var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
          var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
          var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
          var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
          var nativePrependEventListener;

          if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
          }
          /**
           * This util function will build an option object with passive option
           * to handle all possible input from the user.
           */


          function buildEventListenerOptions(options, passive) {
            if (!passiveSupported && typeof options === 'object' && options) {
              // doesn't support passive but user want to pass an object as options.
              // this will not work on some old browser, so we just pass a boolean
              // as useCapture parameter
              return !!options.capture;
            }

            if (!passiveSupported || !passive) {
              return options;
            }

            if (typeof options === 'boolean') {
              return {
                capture: options,
                passive: true
              };
            }

            if (!options) {
              return {
                passive: true
              };
            }

            if (typeof options === 'object' && options.passive !== false) {
              return Object.assign(Object.assign({}, options), {
                passive: true
              });
            }

            return options;
          }

          var customScheduleGlobal = function customScheduleGlobal(task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
              return;
            }

            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
          };

          var customCancelGlobal = function customCancelGlobal(task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
              var symbolEventNames = zoneSymbolEventNames[task.eventName];
              var symbolEventName;

              if (symbolEventNames) {
                symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
              }

              var existingTasks = symbolEventName && task.target[symbolEventName];

              if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                  var existingTask = existingTasks[i];

                  if (existingTask === task) {
                    existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                    task.isRemoved = true;

                    if (existingTasks.length === 0) {
                      // all tasks for the eventName + capture have gone,
                      // remove globalZoneAwareCallback and remove the task cache from target
                      task.allRemoved = true;
                      task.target[symbolEventName] = null;
                    }

                    break;
                  }
                }
              }
            } // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return


            if (!task.allRemoved) {
              return;
            }

            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
          };

          var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customSchedulePrepend = function customSchedulePrepend(task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customCancelNonGlobal = function customCancelNonGlobal(task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
          };

          var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
          var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

          var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
            var typeOfDelegate = typeof delegate;
            return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
          };

          var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
          var unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];

          var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

          var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
            var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
            return function () {
              var target = this || _global;
              var eventName = arguments[0];

              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var delegate = arguments[1];

              if (!delegate) {
                return nativeListener.apply(this, arguments);
              }

              if (isNode && eventName === 'uncaughtException') {
                // don't patch uncaughtException of nodejs to prevent endless loop
                return nativeListener.apply(this, arguments);
              } // don't create the bind delegate function for handleEvent
              // case here to improve addEventListener performance
              // we will create the bind delegate when invoke


              var isHandleEvent = false;

              if (typeof delegate !== 'function') {
                if (!delegate.handleEvent) {
                  return nativeListener.apply(this, arguments);
                }

                isHandleEvent = true;
              }

              if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                return;
              }

              var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
              var options = buildEventListenerOptions(arguments[2], passive);

              if (unpatchedEvents) {
                // check unpatched list
                for (var i = 0; i < unpatchedEvents.length; i++) {
                  if (eventName === unpatchedEvents[i]) {
                    if (passive) {
                      return nativeListener.call(target, eventName, delegate, options);
                    } else {
                      return nativeListener.apply(this, arguments);
                    }
                  }
                }
              }

              var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
              var once = options && typeof options === 'object' ? options.once : false;
              var zone = Zone.current;
              var symbolEventNames = zoneSymbolEventNames[eventName];

              if (!symbolEventNames) {
                prepareEventNames(eventName, eventNameToString);
                symbolEventNames = zoneSymbolEventNames[eventName];
              }

              var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
              var existingTasks = target[symbolEventName];
              var isExisting = false;

              if (existingTasks) {
                // already have task registered
                isExisting = true;

                if (checkDuplicate) {
                  for (var _i5 = 0; _i5 < existingTasks.length; _i5++) {
                    if (compare(existingTasks[_i5], delegate)) {
                      // same callback, same capture, same event name, just return
                      return;
                    }
                  }
                }
              } else {
                existingTasks = target[symbolEventName] = [];
              }

              var source;
              var constructorName = target.constructor['name'];
              var targetSource = globalSources[constructorName];

              if (targetSource) {
                source = targetSource[eventName];
              }

              if (!source) {
                source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
              } // do not create a new object as task.data to pass those things
              // just use the global shared one


              taskData.options = options;

              if (once) {
                // if addEventListener with once options, we don't pass it to
                // native addEventListener, instead we keep the once setting
                // and handle ourselves.
                taskData.options.once = false;
              }

              taskData.target = target;
              taskData.capture = capture;
              taskData.eventName = eventName;
              taskData.isExisting = isExisting;
              var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

              if (data) {
                data.taskData = taskData;
              }

              var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
              // issue, https://github.com/angular/angular/issues/20442

              taskData.target = null; // need to clear up taskData because it is a global object

              if (data) {
                data.taskData = null;
              } // have to save those information to task in case
              // application may call task.zone.cancelTask() directly


              if (once) {
                options.once = true;
              }

              if (!(!passiveSupported && typeof task.options === 'boolean')) {
                // if not support passive, and we pass an option object
                // to addEventListener, we should save the options to task
                task.options = options;
              }

              task.target = target;
              task.capture = capture;
              task.eventName = eventName;

              if (isHandleEvent) {
                // save original delegate for compare to check duplicate
                task.originalDelegate = delegate;
              }

              if (!prepend) {
                existingTasks.push(task);
              } else {
                existingTasks.unshift(task);
              }

              if (returnTarget) {
                return target;
              }
            };
          };

          proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

          if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
          }

          proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var options = arguments[2];
            var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
            var delegate = arguments[1];

            if (!delegate) {
              return nativeRemoveEventListener.apply(this, arguments);
            }

            if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
              return;
            }

            var symbolEventNames = zoneSymbolEventNames[eventName];
            var symbolEventName;

            if (symbolEventNames) {
              symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = symbolEventName && target[symbolEventName];

            if (existingTasks) {
              for (var i = 0; i < existingTasks.length; i++) {
                var existingTask = existingTasks[i];

                if (compare(existingTask, delegate)) {
                  existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                  existingTask.isRemoved = true;

                  if (existingTasks.length === 0) {
                    // all tasks for the eventName + capture have gone,
                    // remove globalZoneAwareCallback and remove the task cache from target
                    existingTask.allRemoved = true;
                    target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                    // such as target.onclick = function() {}, so we need to clear this internal
                    // property too if all delegates all removed

                    if (typeof eventName === 'string') {
                      var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                      target[onPropertySymbol] = null;
                    }
                  }

                  existingTask.zone.cancelTask(existingTask);

                  if (returnTarget) {
                    return target;
                  }

                  return;
                }
              }
            } // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.


            return nativeRemoveEventListener.apply(this, arguments);
          };

          proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

            for (var i = 0; i < tasks.length; i++) {
              var task = tasks[i];
              var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              listeners.push(delegate);
            }

            return listeners;
          };

          proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (!eventName) {
              var keys = Object.keys(target);

              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
                // used for monitoring the removeListener call,
                // so just keep removeListener eventListener until
                // all other eventListeners are removed

                if (evtName && evtName !== 'removeListener') {
                  this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                }
              } // remove removeListener listener finally


              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            } else {
              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var symbolEventNames = zoneSymbolEventNames[eventName];

              if (symbolEventNames) {
                var symbolEventName = symbolEventNames[FALSE_STR];
                var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                var tasks = target[symbolEventName];
                var captureTasks = target[symbolCaptureEventName];

                if (tasks) {
                  var removeTasks = tasks.slice();

                  for (var _i6 = 0; _i6 < removeTasks.length; _i6++) {
                    var task = removeTasks[_i6];
                    var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                  }
                }

                if (captureTasks) {
                  var _removeTasks = captureTasks.slice();

                  for (var _i7 = 0; _i7 < _removeTasks.length; _i7++) {
                    var _task = _removeTasks[_i7];

                    var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                    this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                  }
                }
              }
            }

            if (returnTarget) {
              return this;
            }
          }; // for native toString patch


          attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
          attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

          if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
          }

          if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
          }

          return true;
        }

        var results = [];

        for (var i = 0; i < apis.length; i++) {
          results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }

        return results;
      }

      function findEventTasks(target, eventName) {
        if (!eventName) {
          var foundTasks = [];

          for (var prop in target) {
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1];

            if (evtName && (!eventName || evtName === eventName)) {
              var tasks = target[prop];

              if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                  foundTasks.push(tasks[i]);
                }
              }
            }
          }

          return foundTasks;
        }

        var symbolEventName = zoneSymbolEventNames[eventName];

        if (!symbolEventName) {
          prepareEventNames(eventName);
          symbolEventName = zoneSymbolEventNames[eventName];
        }

        var captureFalseTasks = target[symbolEventName[FALSE_STR]];
        var captureTrueTasks = target[symbolEventName[TRUE_STR]];

        if (!captureFalseTasks) {
          return captureTrueTasks ? captureTrueTasks.slice() : [];
        } else {
          return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
        }
      }

      function patchEventPrototype(global, api) {
        var Event = global['Event'];

        if (Event && Event.prototype) {
          api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
            return function (self, args) {
              self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
              // in case in some hybrid application, some part of
              // application will be controlled by zone, some are not

              delegate && delegate.apply(self, args);
            };
          });
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCallbacks(api, target, targetName, method, callbacks) {
        var symbol = Zone.__symbol__(method);

        if (target[symbol]) {
          return;
        }

        var nativeDelegate = target[symbol] = target[method];

        target[method] = function (name, opts, options) {
          if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
              var source = "".concat(targetName, ".").concat(method, "::") + callback;
              var prototype = opts.prototype; // Note: the `patchCallbacks` is used for patching the `document.registerElement` and
              // `customElements.define`. We explicitly wrap the patching code into try-catch since
              // callbacks may be already patched by other web components frameworks (e.g. LWC), and they
              // make those properties non-writable. This means that patching callback will throw an error
              // `cannot assign to read-only property`. See this code as an example:
              // https://github.com/salesforce/lwc/blob/master/packages/@lwc/engine-core/src/framework/base-bridge-element.ts#L180-L186
              // We don't want to stop the application rendering if we couldn't patch some
              // callback, e.g. `attributeChangedCallback`.

              try {
                if (prototype.hasOwnProperty(callback)) {
                  var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

                  if (descriptor && descriptor.value) {
                    descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                    api._redefineProperty(opts.prototype, callback, descriptor);
                  } else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                  }
                } else if (prototype[callback]) {
                  prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
              } catch (_a) {// Note: we leave the catch block empty since there's no way to handle the error related
                // to non-writable property.
              }
            });
          }

          return nativeDelegate.call(target, name, opts, options);
        };

        api.attachOriginToPatched(target[method], nativeDelegate);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
          return onProperties;
        }

        var tip = ignoreProperties.filter(function (ip) {
          return ip.target === target;
        });

        if (!tip || tip.length === 0) {
          return onProperties;
        }

        var targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(function (op) {
          return targetIgnoreProperties.indexOf(op) === -1;
        });
      }

      function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
          return;
        }

        var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        patchOnProperties(target, filteredProperties, prototype);
      }
      /**
       * Get all event name properties which the event name startsWith `on`
       * from the target object itself, inherited properties are not considered.
       */


      function getOnEventNames(target) {
        return Object.getOwnPropertyNames(target).filter(function (name) {
          return name.startsWith('on') && name.length > 2;
        }).map(function (name) {
          return name.substring(2);
        });
      }

      function propertyDescriptorPatch(api, _global) {
        if (isNode && !isMix) {
          return;
        }

        if (Zone[api.symbol('patchEvents')]) {
          // events are already been patched by legacy patch.
          return;
        }

        var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

        var patchTargets = [];

        if (isBrowser) {
          var _internalWindow = window;
          patchTargets = patchTargets.concat(['Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement', 'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker']);
          var ignoreErrorProperties = isIE() ? [{
            target: _internalWindow,
            ignoreProperties: ['error']
          }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
          // so we need to pass WindowPrototype to check onProp exist or not

          patchFilteredProperties(_internalWindow, getOnEventNames(_internalWindow), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
        }

        patchTargets = patchTargets.concat(['XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest', 'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket']);

        for (var i = 0; i < patchTargets.length; i++) {
          var target = _global[patchTargets[i]];
          target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('util', function (global, Zone, api) {
        // Collect native event names by looking at properties
        // on the global namespace, e.g. 'onclick'.
        var eventNames = getOnEventNames(global);
        api.patchOnProperties = patchOnProperties;
        api.patchMethod = patchMethod;
        api.bindArguments = bindArguments;
        api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.

        var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

        var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

        if (global[SYMBOL_UNPATCHED_EVENTS]) {
          global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }

        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
          Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
        }

        api.patchEventPrototype = patchEventPrototype;
        api.patchEventTarget = patchEventTarget;
        api.isIEOrEdge = isIEOrEdge;
        api.ObjectDefineProperty = ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = ObjectCreate;
        api.ArraySlice = ArraySlice;
        api.patchClass = patchClass;
        api.wrapWithCurrentZone = wrapWithCurrentZone;
        api.filterProperties = filterProperties;
        api.attachOriginToPatched = attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = patchCallbacks;

        api.getGlobalObjects = function () {
          return {
            globalSources: globalSources,
            zoneSymbolEventNames: zoneSymbolEventNames,
            eventNames: eventNames,
            isBrowser: isBrowser,
            isMix: isMix,
            isNode: isNode,
            TRUE_STR: TRUE_STR,
            FALSE_STR: FALSE_STR,
            ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
            ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
          };
        };
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var taskSymbol = zoneSymbol('zoneTask');

      function patchTimer(window, setName, cancelName, nameSuffix) {
        var setNative = null;
        var clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        var tasksByHandleId = {};

        function scheduleTask(task) {
          var data = task.data;

          data.args[0] = function () {
            return task.invoke.apply(this, arguments);
          };

          data.handleId = setNative.apply(window, data.args);
          return task;
        }

        function clearTask(task) {
          return clearNative.call(window, task.data.handleId);
        }

        setNative = patchMethod(window, setName, function (delegate) {
          return function (self, args) {
            if (typeof args[0] === 'function') {
              var _options = {
                isPeriodic: nameSuffix === 'Interval',
                delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
                args: args
              };
              var callback = args[0];

              args[0] = function timer() {
                try {
                  return callback.apply(this, arguments);
                } finally {
                  // issue-934, task will be cancelled
                  // even it is a periodic task such as
                  // setInterval
                  // https://github.com/angular/angular/issues/40387
                  // Cleanup tasksByHandleId should be handled before scheduleTask
                  // Since some zoneSpec may intercept and doesn't trigger
                  // scheduleFn(scheduleTask) provided here.
                  if (!_options.isPeriodic) {
                    if (typeof _options.handleId === 'number') {
                      // in non-nodejs env, we remove timerId
                      // from local cache
                      delete tasksByHandleId[_options.handleId];
                    } else if (_options.handleId) {
                      // Node returns complex objects as handleIds
                      // we remove task reference from timer object
                      _options.handleId[taskSymbol] = null;
                    }
                  }
                }
              };

              var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

              if (!task) {
                return task;
              } // Node.js must additionally support the ref and unref functions.


              var handle = task.data.handleId;

              if (typeof handle === 'number') {
                // for non nodejs env, we save handleId: task
                // mapping in local cache for clearTimeout
                tasksByHandleId[handle] = task;
              } else if (handle) {
                // for nodejs env, we save task
                // reference in timerId Object for clearTimeout
                handle[taskSymbol] = task;
              } // check whether handle is null, because some polyfill or browser
              // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


              if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
                task.ref = handle.ref.bind(handle);
                task.unref = handle.unref.bind(handle);
              }

              if (typeof handle === 'number' || handle) {
                return handle;
              }

              return task;
            } else {
              // cause an error by calling it directly.
              return delegate.apply(window, args);
            }
          };
        });
        clearNative = patchMethod(window, cancelName, function (delegate) {
          return function (self, args) {
            var id = args[0];
            var task;

            if (typeof id === 'number') {
              // non nodejs env.
              task = tasksByHandleId[id];
            } else {
              // nodejs env.
              task = id && id[taskSymbol]; // other environments.

              if (!task) {
                task = id;
              }
            }

            if (task && typeof task.type === 'string') {
              if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                if (typeof id === 'number') {
                  delete tasksByHandleId[id];
                } else if (id) {
                  id[taskSymbol] = null;
                } // Do not cancel already canceled functions


                task.zone.cancelTask(task);
              }
            } else {
              // cause an error by calling it directly.
              delegate.apply(window, args);
            }
          };
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCustomElements(_global, api) {
        var _api$getGlobalObjects6 = api.getGlobalObjects(),
            isBrowser = _api$getGlobalObjects6.isBrowser,
            isMix = _api$getGlobalObjects6.isMix;

        if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
          return;
        }

        var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
          // EventTarget is already patched.
          return;
        }

        var _api$getGlobalObjects7 = api.getGlobalObjects(),
            eventNames = _api$getGlobalObjects7.eventNames,
            zoneSymbolEventNames = _api$getGlobalObjects7.zoneSymbolEventNames,
            TRUE_STR = _api$getGlobalObjects7.TRUE_STR,
            FALSE_STR = _api$getGlobalObjects7.FALSE_STR,
            ZONE_SYMBOL_PREFIX = _api$getGlobalObjects7.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


        for (var i = 0; i < eventNames.length; i++) {
          var eventName = eventNames[i];
          var falseEventName = eventName + FALSE_STR;
          var trueEventName = eventName + TRUE_STR;
          var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
          var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
          zoneSymbolEventNames[eventName] = {};
          zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
          zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }

        var EVENT_TARGET = _global['EventTarget'];

        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
          return;
        }

        api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
      }

      function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('legacy', function (global) {
        var legacyPatch = global[Zone.__symbol__('legacyPatch')];

        if (legacyPatch) {
          legacyPatch();
        }
      });

      Zone.__load_patch('queueMicrotask', function (global, Zone, api) {
        api.patchMethod(global, 'queueMicrotask', function (delegate) {
          return function (self, args) {
            Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
          };
        });
      });

      Zone.__load_patch('timers', function (global) {
        var set = 'set';
        var clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
      });

      Zone.__load_patch('requestAnimationFrame', function (global) {
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
      });

      Zone.__load_patch('blocking', function (global, Zone) {
        var blockingMethods = ['alert', 'prompt', 'confirm'];

        for (var i = 0; i < blockingMethods.length; i++) {
          var name = blockingMethods[i];
          patchMethod(global, name, function (delegate, symbol, name) {
            return function (s, args) {
              return Zone.current.run(delegate, global, args, name);
            };
          });
        }
      });

      Zone.__load_patch('EventTarget', function (global, Zone, api) {
        patchEvent(global, api);
        eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

        var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
          api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
        }
      });

      Zone.__load_patch('MutationObserver', function (global, Zone, api) {
        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
      });

      Zone.__load_patch('IntersectionObserver', function (global, Zone, api) {
        patchClass('IntersectionObserver');
      });

      Zone.__load_patch('FileReader', function (global, Zone, api) {
        patchClass('FileReader');
      });

      Zone.__load_patch('on_property', function (global, Zone, api) {
        propertyDescriptorPatch(api, global);
      });

      Zone.__load_patch('customElements', function (global, Zone, api) {
        patchCustomElements(global, api);
      });

      Zone.__load_patch('XHR', function (global, Zone) {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        var XHR_TASK = zoneSymbol('xhrTask');
        var XHR_SYNC = zoneSymbol('xhrSync');
        var XHR_LISTENER = zoneSymbol('xhrListener');
        var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        var XHR_URL = zoneSymbol('xhrURL');
        var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

        function patchXHR(window) {
          var XMLHttpRequest = window['XMLHttpRequest'];

          if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
          }

          var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

          function findPendingTask(target) {
            return target[XHR_TASK];
          }

          var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

          if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

            if (XMLHttpRequestEventTarget) {
              var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
              oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
          }

          var READY_STATE_CHANGE = 'readystatechange';
          var SCHEDULED = 'scheduled';

          function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

            var listener = target[XHR_LISTENER];

            if (!oriAddListener) {
              oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }

            if (listener) {
              oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }

            var newListener = target[XHR_LISTENER] = function () {
              if (target.readyState === target.DONE) {
                // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                // readyState=4 multiple times, so we need to check task state here
                if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                  // check whether the xhr has registered onload listener
                  // if that is the case, the task should invoke after all
                  // onload listeners finish.
                  // Also if the request failed without response (status = 0), the load event handler
                  // will not be triggered, in that case, we should also invoke the placeholder callback
                  // to close the XMLHttpRequest::send macroTask.
                  // https://github.com/angular/angular/issues/38795
                  var loadTasks = target[Zone.__symbol__('loadfalse')];

                  if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                    var oriInvoke = task.invoke;

                    task.invoke = function () {
                      // need to load the tasks again, because in other
                      // load listener, they may remove themselves
                      var loadTasks = target[Zone.__symbol__('loadfalse')];

                      for (var i = 0; i < loadTasks.length; i++) {
                        if (loadTasks[i] === task) {
                          loadTasks.splice(i, 1);
                        }
                      }

                      if (!data.aborted && task.state === SCHEDULED) {
                        oriInvoke.call(task);
                      }
                    };

                    loadTasks.push(task);
                  } else {
                    task.invoke();
                  }
                } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                  // error occurs when xhr.send()
                  target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                }
              }
            };

            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];

            if (!storedTask) {
              target[XHR_TASK] = task;
            }

            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
          }

          function placeholderCallback() {}

          function clearTask(task) {
            var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.

            data.aborted = true;
            return abortNative.apply(data.target, data.args);
          }

          var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
            return function (self, args) {
              self[XHR_SYNC] = args[2] == false;
              self[XHR_URL] = args[1];
              return openNative.apply(self, args);
            };
          });
          var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
          var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
          var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
          var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
            return function (self, args) {
              if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
              }

              if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
              } else {
                var _options2 = {
                  target: self,
                  url: self[XHR_URL],
                  isPeriodic: false,
                  args: args,
                  aborted: false
                };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                  // xhr request throw error when send
                  // we should invoke task instead of leaving a scheduled
                  // pending macroTask
                  task.invoke();
                }
              }
            };
          });
          var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
            return function (self, args) {
              var task = findPendingTask(self);

              if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || task.data && task.data.aborted) {
                  return;
                }

                task.zone.cancelTask(task);
              } else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
              } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
              // task
              // to cancel. Do nothing.

            };
          });
        }
      });

      Zone.__load_patch('geolocation', function (global) {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
          patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
      });

      Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
          return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
              // windows has added unhandledrejection event listener
              // trigger the event listener
              var PromiseRejectionEvent = global['PromiseRejectionEvent'];

              if (PromiseRejectionEvent) {
                var evt = new PromiseRejectionEvent(evtName, {
                  promise: e.promise,
                  reason: e.rejection
                });
                eventTask.invoke(evt);
              }
            });
          };
        }

        if (global['PromiseRejectionEvent']) {
          Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
          Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
        }
      });
      /***/

    },

    /***/
    8856:
    /*!**********************!*\
      !*** ./src/icons.ts ***!
      \**********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _fortawesome_fontawes;

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/fontawesome-svg-core */
      5364);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons/faFacebookF */
      3664);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons/faTwitter */
      1958);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons/faRedditAlien */
      8472);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons/faLinkedinIn */
      9538);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons/faGooglePlusG */
      800);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons/faTumblr */
      5781);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons/faPinterestP */
      3170);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons/faWhatsapp */
      8900);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons/faVk */
      8974);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons/faFacebookMessenger */
      7667);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons/faTelegramPlane */
      8998);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons_faStumbleupon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons/faStumbleupon */
      2131);
      /* harmony import */


      var _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons/faXing */
      4025);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons/faCommentAlt */
      8573);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons/faMinus */
      4767);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons/faEllipsisH */
      4909);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons/faLink */
      8134);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons/faExclamation */
      1190);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons/faPrint */
      8570);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons/faCheck */
      4630);
      /* harmony import */


      var _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons/faEnvelope */
      3383);

      var icons = [_fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__.faFacebookF, _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__.faTwitter, _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_3__.faLinkedinIn, _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_4__.faGooglePlusG, _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_5__.faPinterestP, _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_6__.faRedditAlien, _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_7__.faTumblr, _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__.faWhatsapp, _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__.faVk, _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__.faFacebookMessenger, _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__.faTelegramPlane, _fortawesome_free_brands_svg_icons_faStumbleupon__WEBPACK_IMPORTED_MODULE_12__.faStumbleupon, _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__.faXing, _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_14__.faCommentAlt, _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_15__.faEnvelope, _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_16__.faCheck, _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_17__.faPrint, _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_18__.faExclamation, _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_19__.faLink, _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_20__.faEllipsisH, _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_21__.faMinus];

      (_fortawesome_fontawes = _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.library).add.apply(_fortawesome_fontawes, icons);
      /***/

    },

    /***/
    7435:
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js */
      7761);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./icons */
      8856);
      /**
       * Required to support Web Animations `@angular/platform-browser/animations`.
       * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
       **/
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /**
       * By default, zone.js will patch all possible macroTask and DomEvents
       * user can disable parts of macroTask/DomEvents patch by setting following flags
       */
      // (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
      // (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
      // (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames

      /*
      * in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
      * with the following flag, it will bypass `zone.js` patch for IE/Edge
      */
      // (window as any).__Zone_enable_cross_context_check = true;

      /***************************************************************************************************
       * Zone JS is required by default for Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /***/

    },

    /***/
    789:
    /*!******************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/es/date/index.js ***!
      \******************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      __webpack_require__(
      /*! ../../modules/es.date.get-year */
      9707);

      __webpack_require__(
      /*! ../../modules/es.date.now */
      8704);

      __webpack_require__(
      /*! ../../modules/es.date.set-year */
      1304);

      __webpack_require__(
      /*! ../../modules/es.date.to-gmt-string */
      7564);

      __webpack_require__(
      /*! ../../modules/es.date.to-iso-string */
      843);

      __webpack_require__(
      /*! ../../modules/es.date.to-json */
      6951);

      __webpack_require__(
      /*! ../../modules/es.date.to-string */
      9075);

      __webpack_require__(
      /*! ../../modules/es.date.to-primitive */
      7201);

      var path = __webpack_require__(
      /*! ../../internals/path */
      3675);

      module.exports = path.Date;
      /***/
    },

    /***/
    7397:
    /*!******************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/es/math/index.js ***!
      \******************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      __webpack_require__(
      /*! ../../modules/es.math.acosh */
      3491);

      __webpack_require__(
      /*! ../../modules/es.math.asinh */
      5110);

      __webpack_require__(
      /*! ../../modules/es.math.atanh */
      4266);

      __webpack_require__(
      /*! ../../modules/es.math.cbrt */
      9353);

      __webpack_require__(
      /*! ../../modules/es.math.clz32 */
      122);

      __webpack_require__(
      /*! ../../modules/es.math.cosh */
      8733);

      __webpack_require__(
      /*! ../../modules/es.math.expm1 */
      8910);

      __webpack_require__(
      /*! ../../modules/es.math.fround */
      2783);

      __webpack_require__(
      /*! ../../modules/es.math.hypot */
      9739);

      __webpack_require__(
      /*! ../../modules/es.math.imul */
      9002);

      __webpack_require__(
      /*! ../../modules/es.math.log10 */
      9544);

      __webpack_require__(
      /*! ../../modules/es.math.log1p */
      2395);

      __webpack_require__(
      /*! ../../modules/es.math.log2 */
      6681);

      __webpack_require__(
      /*! ../../modules/es.math.sign */
      4961);

      __webpack_require__(
      /*! ../../modules/es.math.sinh */
      8092);

      __webpack_require__(
      /*! ../../modules/es.math.tanh */
      2394);

      __webpack_require__(
      /*! ../../modules/es.math.to-string-tag */
      3296);

      __webpack_require__(
      /*! ../../modules/es.math.trunc */
      3773);

      var path = __webpack_require__(
      /*! ../../internals/path */
      3675);

      module.exports = path.Math;
      /***/
    },

    /***/
    5367:
    /*!********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/es/number/index.js ***!
      \********************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      __webpack_require__(
      /*! ../../modules/es.number.constructor */
      4200);

      __webpack_require__(
      /*! ../../modules/es.number.epsilon */
      4898);

      __webpack_require__(
      /*! ../../modules/es.number.is-finite */
      4815);

      __webpack_require__(
      /*! ../../modules/es.number.is-integer */
      3871);

      __webpack_require__(
      /*! ../../modules/es.number.is-nan */
      3342);

      __webpack_require__(
      /*! ../../modules/es.number.is-safe-integer */
      5304);

      __webpack_require__(
      /*! ../../modules/es.number.max-safe-integer */
      5964);

      __webpack_require__(
      /*! ../../modules/es.number.min-safe-integer */
      7671);

      __webpack_require__(
      /*! ../../modules/es.number.parse-float */
      1998);

      __webpack_require__(
      /*! ../../modules/es.number.parse-int */
      7902);

      __webpack_require__(
      /*! ../../modules/es.number.to-fixed */
      3741);

      __webpack_require__(
      /*! ../../modules/es.number.to-precision */
      1246);

      var path = __webpack_require__(
      /*! ../../internals/path */
      3675);

      module.exports = path.Number;
      /***/
    },

    /***/
    1871:
    /*!********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/es/symbol/index.js ***!
      \********************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      __webpack_require__(
      /*! ../../modules/es.array.concat */
      596);

      __webpack_require__(
      /*! ../../modules/es.object.to-string */
      4405);

      __webpack_require__(
      /*! ../../modules/es.symbol */
      5235);

      __webpack_require__(
      /*! ../../modules/es.symbol.async-iterator */
      9747);

      __webpack_require__(
      /*! ../../modules/es.symbol.description */
      3754);

      __webpack_require__(
      /*! ../../modules/es.symbol.has-instance */
      9172);

      __webpack_require__(
      /*! ../../modules/es.symbol.is-concat-spreadable */
      6946);

      __webpack_require__(
      /*! ../../modules/es.symbol.iterator */
      5221);

      __webpack_require__(
      /*! ../../modules/es.symbol.match */
      7974);

      __webpack_require__(
      /*! ../../modules/es.symbol.match-all */
      395);

      __webpack_require__(
      /*! ../../modules/es.symbol.replace */
      9550);

      __webpack_require__(
      /*! ../../modules/es.symbol.search */
      6394);

      __webpack_require__(
      /*! ../../modules/es.symbol.species */
      1897);

      __webpack_require__(
      /*! ../../modules/es.symbol.split */
      6065);

      __webpack_require__(
      /*! ../../modules/es.symbol.to-primitive */
      7228);

      __webpack_require__(
      /*! ../../modules/es.symbol.to-string-tag */
      3495);

      __webpack_require__(
      /*! ../../modules/es.symbol.unscopables */
      5497);

      __webpack_require__(
      /*! ../../modules/es.json.to-string-tag */
      3612);

      __webpack_require__(
      /*! ../../modules/es.math.to-string-tag */
      3296);

      __webpack_require__(
      /*! ../../modules/es.reflect.to-string-tag */
      6101);

      var path = __webpack_require__(
      /*! ../../internals/path */
      3675);

      module.exports = path.Symbol;
      /***/
    },

    /***/
    171:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/a-function.js ***!
      \*************************************************************************************************/

    /***/
    function _(module) {
      module.exports = function (it) {
        if (typeof it != 'function') {
          throw TypeError(String(it) + ' is not a function');
        }

        return it;
      };
      /***/

    },

    /***/
    8290:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/a-possible-prototype.js ***!
      \***********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      module.exports = function (it) {
        if (!isObject(it) && it !== null) {
          throw TypeError("Can't set " + String(it) + ' as a prototype');
        }

        return it;
      };
      /***/

    },

    /***/
    9507:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/add-to-unscopables.js ***!
      \*********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var create = __webpack_require__(
      /*! ../internals/object-create */
      7593);

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      480);

      var UNSCOPABLES = wellKnownSymbol('unscopables');
      var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
      // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      if (ArrayPrototype[UNSCOPABLES] == undefined) {
        definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
          configurable: true,
          value: create(null)
        });
      } // add a key to Array.prototype[@@unscopables]


      module.exports = function (key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
      };
      /***/

    },

    /***/
    4478:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/advance-string-index.js ***!
      \***********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var charAt = __webpack_require__(
      /*! ../internals/string-multibyte */
      1663).charAt; // `AdvanceStringIndex` abstract operation
      // https://tc39.es/ecma262/#sec-advancestringindex


      module.exports = function (S, index, unicode) {
        return index + (unicode ? charAt(S, index).length : 1);
      };
      /***/

    },

    /***/
    133:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/an-instance.js ***!
      \**************************************************************************************************/

    /***/
    function _(module) {
      module.exports = function (it, Constructor, name) {
        if (!(it instanceof Constructor)) {
          throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
        }

        return it;
      };
      /***/

    },

    /***/
    9499:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/an-object.js ***!
      \************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      module.exports = function (it) {
        if (!isObject(it)) {
          throw TypeError(String(it) + ' is not an object');
        }

        return it;
      };
      /***/

    },

    /***/
    2122:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-copy-within.js ***!
      \********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var toAbsoluteIndex = __webpack_require__(
      /*! ../internals/to-absolute-index */
      9625);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var min = Math.min; // `Array.prototype.copyWithin` method implementation
      // https://tc39.es/ecma262/#sec-array.prototype.copywithin
      // eslint-disable-next-line es/no-array-prototype-copywithin -- safe

      module.exports = [].copyWithin || function copyWithin(target
      /* = 0 */
      , start
      /* = 0, end = @length */
      ) {
        var O = toObject(this);
        var len = toLength(O.length);
        var to = toAbsoluteIndex(target, len);
        var from = toAbsoluteIndex(start, len);
        var end = arguments.length > 2 ? arguments[2] : undefined;
        var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
        var inc = 1;

        if (from < to && to < from + count) {
          inc = -1;
          from += count - 1;
          to += count - 1;
        }

        while (count-- > 0) {
          if (from in O) O[to] = O[from];else delete O[to];
          to += inc;
          from += inc;
        }

        return O;
      };
      /***/

    },

    /***/
    9091:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-fill.js ***!
      \*************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var toAbsoluteIndex = __webpack_require__(
      /*! ../internals/to-absolute-index */
      9625);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806); // `Array.prototype.fill` method implementation
      // https://tc39.es/ecma262/#sec-array.prototype.fill


      module.exports = function fill(value
      /* , start = 0, end = @length */
      ) {
        var O = toObject(this);
        var length = toLength(O.length);
        var argumentsLength = arguments.length;
        var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
        var end = argumentsLength > 2 ? arguments[2] : undefined;
        var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

        while (endPos > index) {
          O[index++] = value;
        }

        return O;
      };
      /***/

    },

    /***/
    8367:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-for-each.js ***!
      \*****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $forEach = __webpack_require__(
      /*! ../internals/array-iteration */
      7354).forEach;

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      2130);

      var STRICT_METHOD = arrayMethodIsStrict('forEach'); // `Array.prototype.forEach` method implementation
      // https://tc39.es/ecma262/#sec-array.prototype.foreach

      module.exports = !STRICT_METHOD ? function forEach(callbackfn
      /* , thisArg */
      ) {
        return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
      } : [].forEach;
      /***/
    },

    /***/
    8646:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-from.js ***!
      \*************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      7907);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var callWithSafeIterationClosing = __webpack_require__(
      /*! ../internals/call-with-safe-iteration-closing */
      1345);

      var isArrayIteratorMethod = __webpack_require__(
      /*! ../internals/is-array-iterator-method */
      8250);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      2966);

      var getIteratorMethod = __webpack_require__(
      /*! ../internals/get-iterator-method */
      572); // `Array.from` method implementation
      // https://tc39.es/ecma262/#sec-array.from


      module.exports = function from(arrayLike
      /* , mapfn = undefined, thisArg = undefined */
      ) {
        var O = toObject(arrayLike);
        var C = typeof this == 'function' ? this : Array;
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iteratorMethod = getIteratorMethod(O);
        var index = 0;
        var length, result, step, iterator, next, value;
        if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

        if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
          iterator = iteratorMethod.call(O);
          next = iterator.next;
          result = new C();

          for (; !(step = next.call(iterator)).done; index++) {
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
            createProperty(result, index, value);
          }
        } else {
          length = toLength(O.length);
          result = new C(length);

          for (; length > index; index++) {
            value = mapping ? mapfn(O[index], index) : O[index];
            createProperty(result, index, value);
          }
        }

        result.length = index;
        return result;
      };
      /***/

    },

    /***/
    9835:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-includes.js ***!
      \*****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      6076);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var toAbsoluteIndex = __webpack_require__(
      /*! ../internals/to-absolute-index */
      9625); // `Array.prototype.{ indexOf, includes }` methods implementation


      var createMethod = function createMethod(IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value; // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare -- NaN check

          if (IS_INCLUDES && el != el) while (length > index) {
            value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

            if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
          } else for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
          }
          return !IS_INCLUDES && -1;
        };
      };

      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
      /***/
    },

    /***/
    7354:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-iteration.js ***!
      \******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      7907);

      var IndexedObject = __webpack_require__(
      /*! ../internals/indexed-object */
      3418);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var arraySpeciesCreate = __webpack_require__(
      /*! ../internals/array-species-create */
      3784);

      var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

      var createMethod = function createMethod(TYPE) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var IS_FILTER_REJECT = TYPE == 7;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function ($this, callbackfn, that, specificCreate) {
          var O = toObject($this);
          var self = IndexedObject(O);
          var boundFunction = bind(callbackfn, that, 3);
          var length = toLength(self.length);
          var index = 0;
          var create = specificCreate || arraySpeciesCreate;
          var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
          var value, result;

          for (; length > index; index++) {
            if (NO_HOLES || index in self) {
              value = self[index];
              result = boundFunction(value, index, O);

              if (TYPE) {
                if (IS_MAP) target[index] = result; // map
                else if (result) switch (TYPE) {
                  case 3:
                    return true;
                  // some

                  case 5:
                    return value;
                  // find

                  case 6:
                    return index;
                  // findIndex

                  case 2:
                    push.call(target, value);
                  // filter
                } else switch (TYPE) {
                  case 4:
                    return false;
                  // every

                  case 7:
                    push.call(target, value);
                  // filterReject
                }
              }
            }
          }

          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };

      module.exports = {
        // `Array.prototype.forEach` method
        // https://tc39.es/ecma262/#sec-array.prototype.foreach
        forEach: createMethod(0),
        // `Array.prototype.map` method
        // https://tc39.es/ecma262/#sec-array.prototype.map
        map: createMethod(1),
        // `Array.prototype.filter` method
        // https://tc39.es/ecma262/#sec-array.prototype.filter
        filter: createMethod(2),
        // `Array.prototype.some` method
        // https://tc39.es/ecma262/#sec-array.prototype.some
        some: createMethod(3),
        // `Array.prototype.every` method
        // https://tc39.es/ecma262/#sec-array.prototype.every
        every: createMethod(4),
        // `Array.prototype.find` method
        // https://tc39.es/ecma262/#sec-array.prototype.find
        find: createMethod(5),
        // `Array.prototype.findIndex` method
        // https://tc39.es/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod(6),
        // `Array.prototype.filterReject` method
        // https://github.com/tc39/proposal-array-filtering
        filterReject: createMethod(7)
      };
      /***/
    },

    /***/
    5722:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-last-index-of.js ***!
      \**********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";
      /* eslint-disable es/no-array-prototype-lastindexof -- safe */

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      6076);

      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      4497);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      2130);

      var min = Math.min;
      var $lastIndexOf = [].lastIndexOf;
      var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
      var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf');
      var FORCED = NEGATIVE_ZERO || !STRICT_METHOD; // `Array.prototype.lastIndexOf` method implementation
      // https://tc39.es/ecma262/#sec-array.prototype.lastindexof

      module.exports = FORCED ? function lastIndexOf(searchElement
      /* , fromIndex = @[*-1] */
      ) {
        // convert -0 to +0
        if (NEGATIVE_ZERO) return $lastIndexOf.apply(this, arguments) || 0;
        var O = toIndexedObject(this);
        var length = toLength(O.length);
        var index = length - 1;
        if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
        if (index < 0) index = length + index;

        for (; index >= 0; index--) {
          if (index in O && O[index] === searchElement) return index || 0;
        }

        return -1;
      } : $lastIndexOf;
      /***/
    },

    /***/
    7795:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-method-has-species-support.js ***!
      \***********************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var V8_VERSION = __webpack_require__(
      /*! ../internals/engine-v8-version */
      8630);

      var SPECIES = wellKnownSymbol('species');

      module.exports = function (METHOD_NAME) {
        // We can't use this feature detection in V8 since it causes
        // deoptimization and serious performance degradation
        // https://github.com/zloirock/core-js/issues/677
        return V8_VERSION >= 51 || !fails(function () {
          var array = [];
          var constructor = array.constructor = {};

          constructor[SPECIES] = function () {
            return {
              foo: 1
            };
          };

          return array[METHOD_NAME](Boolean).foo !== 1;
        });
      };
      /***/

    },

    /***/
    2130:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-method-is-strict.js ***!
      \*************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      module.exports = function (METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails(function () {
          // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
          method.call(null, argument || function () {
            throw 1;
          }, 1);
        });
      };
      /***/

    },

    /***/
    1922:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-reduce.js ***!
      \***************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      171);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var IndexedObject = __webpack_require__(
      /*! ../internals/indexed-object */
      3418);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806); // `Array.prototype.{ reduce, reduceRight }` methods implementation


      var createMethod = function createMethod(IS_RIGHT) {
        return function (that, callbackfn, argumentsLength, memo) {
          aFunction(callbackfn);
          var O = toObject(that);
          var self = IndexedObject(O);
          var length = toLength(O.length);
          var index = IS_RIGHT ? length - 1 : 0;
          var i = IS_RIGHT ? -1 : 1;
          if (argumentsLength < 2) while (true) {
            if (index in self) {
              memo = self[index];
              index += i;
              break;
            }

            index += i;

            if (IS_RIGHT ? index < 0 : length <= index) {
              throw TypeError('Reduce of empty array with no initial value');
            }
          }

          for (; IS_RIGHT ? index >= 0 : length > index; index += i) {
            if (index in self) {
              memo = callbackfn(memo, self[index], index, O);
            }
          }

          return memo;
        };
      };

      module.exports = {
        // `Array.prototype.reduce` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduce
        left: createMethod(false),
        // `Array.prototype.reduceRight` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduceright
        right: createMethod(true)
      };
      /***/
    },

    /***/
    6756:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-sort.js ***!
      \*************************************************************************************************/

    /***/
    function _(module) {
      // TODO: use something more complex like timsort?
      var floor = Math.floor;

      var mergeSort = function mergeSort(array, comparefn) {
        var length = array.length;
        var middle = floor(length / 2);
        return length < 8 ? insertionSort(array, comparefn) : merge(mergeSort(array.slice(0, middle), comparefn), mergeSort(array.slice(middle), comparefn), comparefn);
      };

      var insertionSort = function insertionSort(array, comparefn) {
        var length = array.length;
        var i = 1;
        var element, j;

        while (i < length) {
          j = i;
          element = array[i];

          while (j && comparefn(array[j - 1], element) > 0) {
            array[j] = array[--j];
          }

          if (j !== i++) array[j] = element;
        }

        return array;
      };

      var merge = function merge(left, right, comparefn) {
        var llength = left.length;
        var rlength = right.length;
        var lindex = 0;
        var rindex = 0;
        var result = [];

        while (lindex < llength || rindex < rlength) {
          if (lindex < llength && rindex < rlength) {
            result.push(comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]);
          } else {
            result.push(lindex < llength ? left[lindex++] : right[rindex++]);
          }
        }

        return result;
      };

      module.exports = mergeSort;
      /***/
    },

    /***/
    5724:
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-species-constructor.js ***!
      \****************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var isArray = __webpack_require__(
      /*! ../internals/is-array */
      1147);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var SPECIES = wellKnownSymbol('species'); // a part of `ArraySpeciesCreate` abstract operation
      // https://tc39.es/ecma262/#sec-arrayspeciescreate

      module.exports = function (originalArray) {
        var C;

        if (isArray(originalArray)) {
          C = originalArray.constructor; // cross-realm fallback

          if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
          }
        }

        return C === undefined ? Array : C;
      };
      /***/

    },

    /***/
    3784:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-species-create.js ***!
      \***********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var arraySpeciesConstructor = __webpack_require__(
      /*! ../internals/array-species-constructor */
      5724); // `ArraySpeciesCreate` abstract operation
      // https://tc39.es/ecma262/#sec-arrayspeciescreate


      module.exports = function (originalArray, length) {
        return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
      };
      /***/

    },

    /***/
    1345:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
      \***********************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var iteratorClose = __webpack_require__(
      /*! ../internals/iterator-close */
      5718); // call something on iterator step with safe closing on error


      module.exports = function (iterator, fn, value, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (error) {
          iteratorClose(iterator);
          throw error;
        }
      };
      /***/

    },

    /***/
    4533:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/check-correctness-of-iteration.js ***!
      \*********************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var ITERATOR = wellKnownSymbol('iterator');
      var SAFE_CLOSING = false;

      try {
        var called = 0;
        var iteratorWithReturn = {
          next: function next() {
            return {
              done: !!called++
            };
          },
          'return': function _return() {
            SAFE_CLOSING = true;
          }
        };

        iteratorWithReturn[ITERATOR] = function () {
          return this;
        }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


        Array.from(iteratorWithReturn, function () {
          throw 2;
        });
      } catch (error) {
        /* empty */
      }

      module.exports = function (exec, SKIP_CLOSING) {
        if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
        var ITERATION_SUPPORT = false;

        try {
          var object = {};

          object[ITERATOR] = function () {
            return {
              next: function next() {
                return {
                  done: ITERATION_SUPPORT = true
                };
              }
            };
          };

          exec(object);
        } catch (error) {
          /* empty */
        }

        return ITERATION_SUPPORT;
      };
      /***/

    },

    /***/
    164:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/classof-raw.js ***!
      \**************************************************************************************************/

    /***/
    function _(module) {
      var toString = {}.toString;

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };
      /***/

    },

    /***/
    3324:
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/classof.js ***!
      \**********************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var TO_STRING_TAG_SUPPORT = __webpack_require__(
      /*! ../internals/to-string-tag-support */
      9584);

      var classofRaw = __webpack_require__(
      /*! ../internals/classof-raw */
      164);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

      var CORRECT_ARGUMENTS = classofRaw(function () {
        return arguments;
      }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

      var tryGet = function tryGet(it, key) {
        try {
          return it[key];
        } catch (error) {
          /* empty */
        }
      }; // getting tag from ES6+ `Object.prototype.toString`


      module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
        var O, tag, result;
        return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
        : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
        : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
        : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
      };
      /***/
    },

    /***/
    6342:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/collection-strong.js ***!
      \********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      480).f;

      var create = __webpack_require__(
      /*! ../internals/object-create */
      7593);

      var redefineAll = __webpack_require__(
      /*! ../internals/redefine-all */
      4151);

      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      7907);

      var anInstance = __webpack_require__(
      /*! ../internals/an-instance */
      133);

      var iterate = __webpack_require__(
      /*! ../internals/iterate */
      3598);

      var defineIterator = __webpack_require__(
      /*! ../internals/define-iterator */
      8020);

      var setSpecies = __webpack_require__(
      /*! ../internals/set-species */
      6481);

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var fastKey = __webpack_require__(
      /*! ../internals/internal-metadata */
      4860).fastKey;

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      8593);

      var setInternalState = InternalStateModule.set;
      var internalStateGetterFor = InternalStateModule.getterFor;
      module.exports = {
        getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
          var C = wrapper(function (that, iterable) {
            anInstance(that, C, CONSTRUCTOR_NAME);
            setInternalState(that, {
              type: CONSTRUCTOR_NAME,
              index: create(null),
              first: undefined,
              last: undefined,
              size: 0
            });
            if (!DESCRIPTORS) that.size = 0;
            if (iterable != undefined) iterate(iterable, that[ADDER], {
              that: that,
              AS_ENTRIES: IS_MAP
            });
          });
          var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

          var define = function define(that, key, value) {
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            var previous, index; // change existing entry

            if (entry) {
              entry.value = value; // create new entry
            } else {
              state.last = entry = {
                index: index = fastKey(key, true),
                key: key,
                value: value,
                previous: previous = state.last,
                next: undefined,
                removed: false
              };
              if (!state.first) state.first = entry;
              if (previous) previous.next = entry;
              if (DESCRIPTORS) state.size++;else that.size++; // add to index

              if (index !== 'F') state.index[index] = entry;
            }

            return that;
          };

          var getEntry = function getEntry(that, key) {
            var state = getInternalState(that); // fast case

            var index = fastKey(key);
            var entry;
            if (index !== 'F') return state.index[index]; // frozen object case

            for (entry = state.first; entry; entry = entry.next) {
              if (entry.key == key) return entry;
            }
          };

          redefineAll(C.prototype, {
            // `{ Map, Set }.prototype.clear()` methods
            // https://tc39.es/ecma262/#sec-map.prototype.clear
            // https://tc39.es/ecma262/#sec-set.prototype.clear
            clear: function clear() {
              var that = this;
              var state = getInternalState(that);
              var data = state.index;
              var entry = state.first;

              while (entry) {
                entry.removed = true;
                if (entry.previous) entry.previous = entry.previous.next = undefined;
                delete data[entry.index];
                entry = entry.next;
              }

              state.first = state.last = undefined;
              if (DESCRIPTORS) state.size = 0;else that.size = 0;
            },
            // `{ Map, Set }.prototype.delete(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.delete
            // https://tc39.es/ecma262/#sec-set.prototype.delete
            'delete': function _delete(key) {
              var that = this;
              var state = getInternalState(that);
              var entry = getEntry(that, key);

              if (entry) {
                var next = entry.next;
                var prev = entry.previous;
                delete state.index[entry.index];
                entry.removed = true;
                if (prev) prev.next = next;
                if (next) next.previous = prev;
                if (state.first == entry) state.first = next;
                if (state.last == entry) state.last = prev;
                if (DESCRIPTORS) state.size--;else that.size--;
              }

              return !!entry;
            },
            // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.foreach
            // https://tc39.es/ecma262/#sec-set.prototype.foreach
            forEach: function forEach(callbackfn
            /* , that = undefined */
            ) {
              var state = getInternalState(this);
              var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
              var entry;

              while (entry = entry ? entry.next : state.first) {
                boundFunction(entry.value, entry.key, this); // revert to the last existing entry

                while (entry && entry.removed) {
                  entry = entry.previous;
                }
              }
            },
            // `{ Map, Set}.prototype.has(key)` methods
            // https://tc39.es/ecma262/#sec-map.prototype.has
            // https://tc39.es/ecma262/#sec-set.prototype.has
            has: function has(key) {
              return !!getEntry(this, key);
            }
          });
          redefineAll(C.prototype, IS_MAP ? {
            // `Map.prototype.get(key)` method
            // https://tc39.es/ecma262/#sec-map.prototype.get
            get: function get(key) {
              var entry = getEntry(this, key);
              return entry && entry.value;
            },
            // `Map.prototype.set(key, value)` method
            // https://tc39.es/ecma262/#sec-map.prototype.set
            set: function set(key, value) {
              return define(this, key === 0 ? 0 : key, value);
            }
          } : {
            // `Set.prototype.add(value)` method
            // https://tc39.es/ecma262/#sec-set.prototype.add
            add: function add(value) {
              return define(this, value = value === 0 ? 0 : value, value);
            }
          });
          if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
            get: function get() {
              return getInternalState(this).size;
            }
          });
          return C;
        },
        setStrong: function setStrong(C, CONSTRUCTOR_NAME, IS_MAP) {
          var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
          var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
          var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
          // https://tc39.es/ecma262/#sec-map.prototype.entries
          // https://tc39.es/ecma262/#sec-map.prototype.keys
          // https://tc39.es/ecma262/#sec-map.prototype.values
          // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
          // https://tc39.es/ecma262/#sec-set.prototype.entries
          // https://tc39.es/ecma262/#sec-set.prototype.keys
          // https://tc39.es/ecma262/#sec-set.prototype.values
          // https://tc39.es/ecma262/#sec-set.prototype-@@iterator

          defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
            setInternalState(this, {
              type: ITERATOR_NAME,
              target: iterated,
              state: getInternalCollectionState(iterated),
              kind: kind,
              last: undefined
            });
          }, function () {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var entry = state.last; // revert to the last existing entry

            while (entry && entry.removed) {
              entry = entry.previous;
            } // get next entry


            if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
              // or finish the iteration
              state.target = undefined;
              return {
                value: undefined,
                done: true
              };
            } // return step by kind


            if (kind == 'keys') return {
              value: entry.key,
              done: false
            };
            if (kind == 'values') return {
              value: entry.value,
              done: false
            };
            return {
              value: [entry.key, entry.value],
              done: false
            };
          }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // `{ Map, Set }.prototype[@@species]` accessors
          // https://tc39.es/ecma262/#sec-get-map-@@species
          // https://tc39.es/ecma262/#sec-get-set-@@species

          setSpecies(CONSTRUCTOR_NAME);
        }
      };
      /***/
    },

    /***/
    2050:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/collection-weak.js ***!
      \******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var redefineAll = __webpack_require__(
      /*! ../internals/redefine-all */
      4151);

      var getWeakData = __webpack_require__(
      /*! ../internals/internal-metadata */
      4860).getWeakData;

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var anInstance = __webpack_require__(
      /*! ../internals/an-instance */
      133);

      var iterate = __webpack_require__(
      /*! ../internals/iterate */
      3598);

      var ArrayIterationModule = __webpack_require__(
      /*! ../internals/array-iteration */
      7354);

      var $has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      8593);

      var setInternalState = InternalStateModule.set;
      var internalStateGetterFor = InternalStateModule.getterFor;
      var find = ArrayIterationModule.find;
      var findIndex = ArrayIterationModule.findIndex;
      var id = 0; // fallback for uncaught frozen keys

      var uncaughtFrozenStore = function uncaughtFrozenStore(store) {
        return store.frozen || (store.frozen = new UncaughtFrozenStore());
      };

      var UncaughtFrozenStore = function UncaughtFrozenStore() {
        this.entries = [];
      };

      var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
        return find(store.entries, function (it) {
          return it[0] === key;
        });
      };

      UncaughtFrozenStore.prototype = {
        get: function get(key) {
          var entry = findUncaughtFrozen(this, key);
          if (entry) return entry[1];
        },
        has: function has(key) {
          return !!findUncaughtFrozen(this, key);
        },
        set: function set(key, value) {
          var entry = findUncaughtFrozen(this, key);
          if (entry) entry[1] = value;else this.entries.push([key, value]);
        },
        'delete': function _delete(key) {
          var index = findIndex(this.entries, function (it) {
            return it[0] === key;
          });
          if (~index) this.entries.splice(index, 1);
          return !!~index;
        }
      };
      module.exports = {
        getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
          var C = wrapper(function (that, iterable) {
            anInstance(that, C, CONSTRUCTOR_NAME);
            setInternalState(that, {
              type: CONSTRUCTOR_NAME,
              id: id++,
              frozen: undefined
            });
            if (iterable != undefined) iterate(iterable, that[ADDER], {
              that: that,
              AS_ENTRIES: IS_MAP
            });
          });
          var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

          var define = function define(that, key, value) {
            var state = getInternalState(that);
            var data = getWeakData(anObject(key), true);
            if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
            return that;
          };

          redefineAll(C.prototype, {
            // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
            // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
            // https://tc39.es/ecma262/#sec-weakset.prototype.delete
            'delete': function _delete(key) {
              var state = getInternalState(this);
              if (!isObject(key)) return false;
              var data = getWeakData(key);
              if (data === true) return uncaughtFrozenStore(state)['delete'](key);
              return data && $has(data, state.id) && delete data[state.id];
            },
            // `{ WeakMap, WeakSet }.prototype.has(key)` methods
            // https://tc39.es/ecma262/#sec-weakmap.prototype.has
            // https://tc39.es/ecma262/#sec-weakset.prototype.has
            has: function has(key) {
              var state = getInternalState(this);
              if (!isObject(key)) return false;
              var data = getWeakData(key);
              if (data === true) return uncaughtFrozenStore(state).has(key);
              return data && $has(data, state.id);
            }
          });
          redefineAll(C.prototype, IS_MAP ? {
            // `WeakMap.prototype.get(key)` method
            // https://tc39.es/ecma262/#sec-weakmap.prototype.get
            get: function get(key) {
              var state = getInternalState(this);

              if (isObject(key)) {
                var data = getWeakData(key);
                if (data === true) return uncaughtFrozenStore(state).get(key);
                return data ? data[state.id] : undefined;
              }
            },
            // `WeakMap.prototype.set(key, value)` method
            // https://tc39.es/ecma262/#sec-weakmap.prototype.set
            set: function set(key, value) {
              return define(this, key, value);
            }
          } : {
            // `WeakSet.prototype.add(value)` method
            // https://tc39.es/ecma262/#sec-weakset.prototype.add
            add: function add(value) {
              return define(this, value, true);
            }
          });
          return C;
        }
      };
      /***/
    },

    /***/
    3731:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/collection.js ***!
      \*************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var isForced = __webpack_require__(
      /*! ../internals/is-forced */
      2263);

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      1415);

      var InternalMetadataModule = __webpack_require__(
      /*! ../internals/internal-metadata */
      4860);

      var iterate = __webpack_require__(
      /*! ../internals/iterate */
      3598);

      var anInstance = __webpack_require__(
      /*! ../internals/an-instance */
      133);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var checkCorrectnessOfIteration = __webpack_require__(
      /*! ../internals/check-correctness-of-iteration */
      4533);

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      489);

      var inheritIfRequired = __webpack_require__(
      /*! ../internals/inherit-if-required */
      4939);

      module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
        var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
        var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
        var ADDER = IS_MAP ? 'set' : 'add';
        var NativeConstructor = global[CONSTRUCTOR_NAME];
        var NativePrototype = NativeConstructor && NativeConstructor.prototype;
        var Constructor = NativeConstructor;
        var exported = {};

        var fixMethod = function fixMethod(KEY) {
          var nativeMethod = NativePrototype[KEY];
          redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
            nativeMethod.call(this, value === 0 ? 0 : value);
            return this;
          } : KEY == 'delete' ? function (key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
          } : KEY == 'get' ? function get(key) {
            return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
          } : KEY == 'has' ? function has(key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
          } : function set(key, value) {
            nativeMethod.call(this, key === 0 ? 0 : key, value);
            return this;
          });
        };

        var REPLACE = isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
          new NativeConstructor().entries().next();
        })));

        if (REPLACE) {
          // create collection constructor
          Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
          InternalMetadataModule.enable();
        } else if (isForced(CONSTRUCTOR_NAME, true)) {
          var instance = new Constructor(); // early implementations not supports chaining

          var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

          var THROWS_ON_PRIMITIVES = fails(function () {
            instance.has(1);
          }); // most early implementations doesn't supports iterables, most modern - not close it correctly
          // eslint-disable-next-line no-new -- required for testing

          var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
            new NativeConstructor(iterable);
          }); // for early implementations -0 and +0 not the same

          var BUGGY_ZERO = !IS_WEAK && fails(function () {
            // V8 ~ Chromium 42- fails only with 5+ elements
            var $instance = new NativeConstructor();
            var index = 5;

            while (index--) {
              $instance[ADDER](index, index);
            }

            return !$instance.has(-0);
          });

          if (!ACCEPT_ITERABLES) {
            Constructor = wrapper(function (dummy, iterable) {
              anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
              var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
              if (iterable != undefined) iterate(iterable, that[ADDER], {
                that: that,
                AS_ENTRIES: IS_MAP
              });
              return that;
            });
            Constructor.prototype = NativePrototype;
            NativePrototype.constructor = Constructor;
          }

          if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod('delete');
            fixMethod('has');
            IS_MAP && fixMethod('get');
          }

          if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

          if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
        }

        exported[CONSTRUCTOR_NAME] = Constructor;
        $({
          global: true,
          forced: Constructor != NativeConstructor
        }, exported);
        setToStringTag(Constructor, CONSTRUCTOR_NAME);
        if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
        return Constructor;
      };
      /***/

    },

    /***/
    6107:
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/copy-constructor-properties.js ***!
      \******************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var ownKeys = __webpack_require__(
      /*! ../internals/own-keys */
      3670);

      var getOwnPropertyDescriptorModule = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      1867);

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      480);

      module.exports = function (target, source) {
        var keys = ownKeys(source);
        var defineProperty = definePropertyModule.f;
        var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };
      /***/

    },

    /***/
    2013:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/correct-is-regexp-logic.js ***!
      \**************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var MATCH = wellKnownSymbol('match');

      module.exports = function (METHOD_NAME) {
        var regexp = /./;

        try {
          '/./'[METHOD_NAME](regexp);
        } catch (error1) {
          try {
            regexp[MATCH] = false;
            return '/./'[METHOD_NAME](regexp);
          } catch (error2) {
            /* empty */
          }
        }

        return false;
      };
      /***/

    },

    /***/
    8175:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/correct-prototype-getter.js ***!
      \***************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      module.exports = !fails(function () {
        function F() {
          /* empty */
        }

        F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

        return Object.getPrototypeOf(new F()) !== F.prototype;
      });
      /***/
    },

    /***/
    7772:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/create-html.js ***!
      \**************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var quot = /"/g; // `CreateHTML` abstract operation
      // https://tc39.es/ecma262/#sec-createhtml

      module.exports = function (string, tag, attribute, value) {
        var S = toString(requireObjectCoercible(string));
        var p1 = '<' + tag;
        if (attribute !== '') p1 += ' ' + attribute + '="' + toString(value).replace(quot, '&quot;') + '"';
        return p1 + '>' + S + '</' + tag + '>';
      };
      /***/

    },

    /***/
    2984:
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/create-iterator-constructor.js ***!
      \******************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var IteratorPrototype = __webpack_require__(
      /*! ../internals/iterators-core */
      349).IteratorPrototype;

      var create = __webpack_require__(
      /*! ../internals/object-create */
      7593);

      var createPropertyDescriptor = __webpack_require__(
      /*! ../internals/create-property-descriptor */
      4652);

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      489);

      var Iterators = __webpack_require__(
      /*! ../internals/iterators */
      8802);

      var returnThis = function returnThis() {
        return this;
      };

      module.exports = function (IteratorConstructor, NAME, next) {
        var TO_STRING_TAG = NAME + ' Iterator';
        IteratorConstructor.prototype = create(IteratorPrototype, {
          next: createPropertyDescriptor(1, next)
        });
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
        Iterators[TO_STRING_TAG] = returnThis;
        return IteratorConstructor;
      };
      /***/

    },

    /***/
    7176:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/create-non-enumerable-property.js ***!
      \*********************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      480);

      var createPropertyDescriptor = __webpack_require__(
      /*! ../internals/create-property-descriptor */
      4652);

      module.exports = DESCRIPTORS ? function (object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };
      /***/
    },

    /***/
    4652:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/create-property-descriptor.js ***!
      \*****************************************************************************************************************/

    /***/
    function _(module) {
      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };
      /***/

    },

    /***/
    2966:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/create-property.js ***!
      \******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var toPropertyKey = __webpack_require__(
      /*! ../internals/to-property-key */
      2552);

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      480);

      var createPropertyDescriptor = __webpack_require__(
      /*! ../internals/create-property-descriptor */
      4652);

      module.exports = function (object, key, value) {
        var propertyKey = toPropertyKey(key);
        if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
      };
      /***/

    },

    /***/
    8601:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/date-to-iso-string.js ***!
      \*********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var padStart = __webpack_require__(
      /*! ../internals/string-pad */
      1432).start;

      var abs = Math.abs;
      var DatePrototype = Date.prototype;
      var getTime = DatePrototype.getTime;
      var nativeDateToISOString = DatePrototype.toISOString; // `Date.prototype.toISOString` method implementation
      // https://tc39.es/ecma262/#sec-date.prototype.toisostring
      // PhantomJS / old WebKit fails here:

      module.exports = fails(function () {
        return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
      }) || !fails(function () {
        nativeDateToISOString.call(new Date(NaN));
      }) ? function toISOString() {
        if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
        var date = this;
        var year = date.getUTCFullYear();
        var milliseconds = date.getUTCMilliseconds();
        var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
        return sign + padStart(abs(year), sign ? 6 : 4, 0) + '-' + padStart(date.getUTCMonth() + 1, 2, 0) + '-' + padStart(date.getUTCDate(), 2, 0) + 'T' + padStart(date.getUTCHours(), 2, 0) + ':' + padStart(date.getUTCMinutes(), 2, 0) + ':' + padStart(date.getUTCSeconds(), 2, 0) + '.' + padStart(milliseconds, 3, 0) + 'Z';
      } : nativeDateToISOString;
      /***/
    },

    /***/
    123:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/date-to-primitive.js ***!
      \********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var ordinaryToPrimitive = __webpack_require__(
      /*! ../internals/ordinary-to-primitive */
      3252); // `Date.prototype[@@toPrimitive](hint)` method implementation
      // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive


      module.exports = function (hint) {
        anObject(this);
        if (hint === 'string' || hint === 'default') hint = 'string';else if (hint !== 'number') throw TypeError('Incorrect hint');
        return ordinaryToPrimitive(this, hint);
      };
      /***/

    },

    /***/
    8020:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/define-iterator.js ***!
      \******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createIteratorConstructor = __webpack_require__(
      /*! ../internals/create-iterator-constructor */
      2984);

      var getPrototypeOf = __webpack_require__(
      /*! ../internals/object-get-prototype-of */
      9515);

      var setPrototypeOf = __webpack_require__(
      /*! ../internals/object-set-prototype-of */
      2060);

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      489);

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      7176);

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      1415);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      3712);

      var Iterators = __webpack_require__(
      /*! ../internals/iterators */
      8802);

      var IteratorsCore = __webpack_require__(
      /*! ../internals/iterators-core */
      349);

      var IteratorPrototype = IteratorsCore.IteratorPrototype;
      var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
      var ITERATOR = wellKnownSymbol('iterator');
      var KEYS = 'keys';
      var VALUES = 'values';
      var ENTRIES = 'entries';

      var returnThis = function returnThis() {
        return this;
      };

      module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);

        var getIterationMethod = function getIterationMethod(KIND) {
          if (KIND === DEFAULT && defaultIterator) return defaultIterator;
          if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

          switch (KIND) {
            case KEYS:
              return function keys() {
                return new IteratorConstructor(this, KIND);
              };

            case VALUES:
              return function values() {
                return new IteratorConstructor(this, KIND);
              };

            case ENTRIES:
              return function entries() {
                return new IteratorConstructor(this, KIND);
              };
          }

          return function () {
            return new IteratorConstructor(this);
          };
        };

        var TO_STRING_TAG = NAME + ' Iterator';
        var INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
        var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
        var CurrentIteratorPrototype, methods, KEY; // fix native

        if (anyNativeIterator) {
          CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

          if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
              if (setPrototypeOf) {
                setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
              } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
                createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
              }
            } // Set @@toStringTag to native iterators


            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
          }
        } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


        if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
          INCORRECT_VALUES_NAME = true;

          defaultIterator = function values() {
            return nativeIterator.call(this);
          };
        } // define iterator


        if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
          createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
        }

        Iterators[NAME] = defaultIterator; // export additional methods

        if (DEFAULT) {
          methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          };
          if (FORCED) for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
              redefine(IterablePrototype, KEY, methods[KEY]);
            }
          } else $({
            target: NAME,
            proto: true,
            forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
          }, methods);
        }

        return methods;
      };
      /***/

    },

    /***/
    8970:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/define-well-known-symbol.js ***!
      \***************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var path = __webpack_require__(
      /*! ../internals/path */
      3675);

      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var wrappedWellKnownSymbolModule = __webpack_require__(
      /*! ../internals/well-known-symbol-wrapped */
      144);

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      480).f;

      module.exports = function (NAME) {
        var Symbol = path.Symbol || (path.Symbol = {});
        if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
          value: wrappedWellKnownSymbolModule.f(NAME)
        });
      };
      /***/

    },

    /***/
    6223:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/descriptors.js ***!
      \**************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912); // Detect IE8's incomplete defineProperty implementation


      module.exports = !fails(function () {
        // eslint-disable-next-line es/no-object-defineproperty -- required for testing
        return Object.defineProperty({}, 1, {
          get: function get() {
            return 7;
          }
        })[1] != 7;
      });
      /***/
    },

    /***/
    5349:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/document-create-element.js ***!
      \**************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var document = global.document; // typeof document.createElement is 'object' in old IE

      var EXISTS = isObject(document) && isObject(document.createElement);

      module.exports = function (it) {
        return EXISTS ? document.createElement(it) : {};
      };
      /***/

    },

    /***/
    4763:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/dom-iterables.js ***!
      \****************************************************************************************************/

    /***/
    function _(module) {
      // iterable DOM collections
      // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
      module.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
      /***/
    },

    /***/
    7029:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/engine-ff-version.js ***!
      \********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var userAgent = __webpack_require__(
      /*! ../internals/engine-user-agent */
      3322);

      var firefox = userAgent.match(/firefox\/(\d+)/i);
      module.exports = !!firefox && +firefox[1];
      /***/
    },

    /***/
    2830:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/engine-is-browser.js ***!
      \********************************************************************************************************/

    /***/
    function _(module) {
      module.exports = typeof window == 'object';
      /***/
    },

    /***/
    5188:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/engine-is-ie-or-edge.js ***!
      \***********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var UA = __webpack_require__(
      /*! ../internals/engine-user-agent */
      3322);

      module.exports = /MSIE|Trident/.test(UA);
      /***/
    },

    /***/
    4968:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/engine-is-ios.js ***!
      \****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var userAgent = __webpack_require__(
      /*! ../internals/engine-user-agent */
      3322);

      module.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(userAgent);
      /***/
    },

    /***/
    1951:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/engine-is-node.js ***!
      \*****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var classof = __webpack_require__(
      /*! ../internals/classof-raw */
      164);

      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      module.exports = classof(global.process) == 'process';
      /***/
    },

    /***/
    9342:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/engine-is-webos-webkit.js ***!
      \*************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var userAgent = __webpack_require__(
      /*! ../internals/engine-user-agent */
      3322);

      module.exports = /web0s(?!.*chrome)/i.test(userAgent);
      /***/
    },

    /***/
    3322:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/engine-user-agent.js ***!
      \********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      3077);

      module.exports = getBuiltIn('navigator', 'userAgent') || '';
      /***/
    },

    /***/
    8630:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/engine-v8-version.js ***!
      \********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var userAgent = __webpack_require__(
      /*! ../internals/engine-user-agent */
      3322);

      var process = global.process;
      var Deno = global.Deno;
      var versions = process && process.versions || Deno && Deno.version;
      var v8 = versions && versions.v8;
      var match, version;

      if (v8) {
        match = v8.split('.');
        version = match[0] < 4 ? 1 : match[0] + match[1];
      } else if (userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);

        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match) version = match[1];
        }
      }

      module.exports = version && +version;
      /***/
    },

    /***/
    629:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/engine-webkit-version.js ***!
      \************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var userAgent = __webpack_require__(
      /*! ../internals/engine-user-agent */
      3322);

      var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
      module.exports = !!webkit && +webkit[1];
      /***/
    },

    /***/
    3423:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/enum-bug-keys.js ***!
      \****************************************************************************************************/

    /***/
    function _(module) {
      // IE8- don't enum bug keys
      module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
      /***/
    },

    /***/
    8301:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/export.js ***!
      \*********************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var getOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      1867).f;

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      7176);

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      1415);

      var setGlobal = __webpack_require__(
      /*! ../internals/set-global */
      3753);

      var copyConstructorProperties = __webpack_require__(
      /*! ../internals/copy-constructor-properties */
      6107);

      var isForced = __webpack_require__(
      /*! ../internals/is-forced */
      2263);
      /*
        options.target      - name of the target object
        options.global      - target is the global object
        options.stat        - export as static methods of target
        options.proto       - export as prototype methods of target
        options.real        - real prototype method for the `pure` version
        options.forced      - export even if the native feature is available
        options.bind        - bind methods to the target, required for the `pure` version
        options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
        options.unsafe      - use the simple assignment of property instead of delete + defineProperty
        options.sham        - add a flag to not completely full polyfills
        options.enumerable  - export as enumerable property
        options.noTargetGet - prevent calling a getter on target
      */


      module.exports = function (options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;

        if (GLOBAL) {
          target = global;
        } else if (STATIC) {
          target = global[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global[TARGET] || {}).prototype;
        }

        if (target) for (key in source) {
          sourceProperty = source[key];

          if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else targetProperty = target[key];

          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

          if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty === typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          } // add a flag to not completely full polyfills


          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, 'sham', true);
          } // extend global


          redefine(target, key, sourceProperty, options);
        }
      };
      /***/

    },

    /***/
    7912:
    /*!********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/fails.js ***!
      \********************************************************************************************/

    /***/
    function _(module) {
      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
      /***/

    },

    /***/
    4875:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
      \*************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict"; // TODO: Remove from `core-js@4` since it's moved to entry points

      __webpack_require__(
      /*! ../modules/es.regexp.exec */
      1027);

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      1415);

      var regexpExec = __webpack_require__(
      /*! ../internals/regexp-exec */
      6193);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      7176);

      var SPECIES = wellKnownSymbol('species');
      var RegExpPrototype = RegExp.prototype;

      module.exports = function (KEY, exec, FORCED, SHAM) {
        var SYMBOL = wellKnownSymbol(KEY);
        var DELEGATES_TO_SYMBOL = !fails(function () {
          // String methods call symbol-named RegEp methods
          var O = {};

          O[SYMBOL] = function () {
            return 7;
          };

          return ''[KEY](O) != 7;
        });
        var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
          // Symbol-named RegExp methods call .exec
          var execCalled = false;
          var re = /a/;

          if (KEY === 'split') {
            // We can't use real regex here since it causes deoptimization
            // and serious performance degradation in V8
            // https://github.com/zloirock/core-js/issues/306
            re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.

            re.constructor = {};

            re.constructor[SPECIES] = function () {
              return re;
            };

            re.flags = '';
            re[SYMBOL] = /./[SYMBOL];
          }

          re.exec = function () {
            execCalled = true;
            return null;
          };

          re[SYMBOL]('');
          return !execCalled;
        });

        if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
          var nativeRegExpMethod = /./[SYMBOL];
          var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
            var $exec = regexp.exec;

            if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
              if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return {
                  done: true,
                  value: nativeRegExpMethod.call(regexp, str, arg2)
                };
              }

              return {
                done: true,
                value: nativeMethod.call(str, regexp, arg2)
              };
            }

            return {
              done: false
            };
          });
          redefine(String.prototype, KEY, methods[0]);
          redefine(RegExpPrototype, SYMBOL, methods[1]);
        }

        if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
      };
      /***/

    },

    /***/
    3022:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/flatten-into-array.js ***!
      \*********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var isArray = __webpack_require__(
      /*! ../internals/is-array */
      1147);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      7907); // `FlattenIntoArray` abstract operation
      // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray


      var flattenIntoArray = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
        var targetIndex = start;
        var sourceIndex = 0;
        var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
        var element;

        while (sourceIndex < sourceLen) {
          if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

            if (depth > 0 && isArray(element)) {
              targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
            } else {
              if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
              target[targetIndex] = element;
            }

            targetIndex++;
          }

          sourceIndex++;
        }

        return targetIndex;
      };

      module.exports = flattenIntoArray;
      /***/
    },

    /***/
    2477:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/freezing.js ***!
      \***********************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      module.exports = !fails(function () {
        // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
        return Object.isExtensible(Object.preventExtensions({}));
      });
      /***/
    },

    /***/
    7907:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/function-bind-context.js ***!
      \************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      171); // optional / simple context binding


      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;

        switch (length) {
          case 0:
            return function () {
              return fn.call(that);
            };

          case 1:
            return function (a) {
              return fn.call(that, a);
            };

          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };

          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }

        return function () {
          return fn.apply(that, arguments);
        };
      };
      /***/

    },

    /***/
    4422:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/function-bind.js ***!
      \****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      171);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var slice = [].slice;
      var factories = {};

      var construct = function construct(C, argsLength, args) {
        if (!(argsLength in factories)) {
          for (var list = [], i = 0; i < argsLength; i++) {
            list[i] = 'a[' + i + ']';
          } // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only


          factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
        }

        return factories[argsLength](C, args);
      }; // `Function.prototype.bind` method implementation
      // https://tc39.es/ecma262/#sec-function.prototype.bind


      module.exports = Function.bind || function bind(that
      /* , ...args */
      ) {
        var fn = aFunction(this);
        var partArgs = slice.call(arguments, 1);

        var boundFunction = function bound() {
          var args = partArgs.concat(slice.call(arguments));
          return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
        };

        if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
        return boundFunction;
      };
      /***/

    },

    /***/
    3077:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/get-built-in.js ***!
      \***************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var aFunction = function aFunction(variable) {
        return typeof variable == 'function' ? variable : undefined;
      };

      module.exports = function (namespace, method) {
        return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
      };
      /***/

    },

    /***/
    572:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/get-iterator-method.js ***!
      \**********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var classof = __webpack_require__(
      /*! ../internals/classof */
      3324);

      var Iterators = __webpack_require__(
      /*! ../internals/iterators */
      8802);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var ITERATOR = wellKnownSymbol('iterator');

      module.exports = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
      };
      /***/

    },

    /***/
    5327:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/get-substitution.js ***!
      \*******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var floor = Math.floor;
      var replace = ''.replace;
      var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
      var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // `GetSubstitution` abstract operation
      // https://tc39.es/ecma262/#sec-getsubstitution

      module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length;
        var m = captures.length;
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

        if (namedCaptures !== undefined) {
          namedCaptures = toObject(namedCaptures);
          symbols = SUBSTITUTION_SYMBOLS;
        }

        return replace.call(replacement, symbols, function (match, ch) {
          var capture;

          switch (ch.charAt(0)) {
            case '$':
              return '$';

            case '&':
              return matched;

            case '`':
              return str.slice(0, position);

            case "'":
              return str.slice(tailPos);

            case '<':
              capture = namedCaptures[ch.slice(1, -1)];
              break;

            default:
              // \d\d?
              var n = +ch;
              if (n === 0) return match;

              if (n > m) {
                var f = floor(n / 10);
                if (f === 0) return match;
                if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                return match;
              }

              capture = captures[n - 1];
          }

          return capture === undefined ? '' : capture;
        });
      };
      /***/

    },

    /***/
    1492:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/global.js ***!
      \*********************************************************************************************/

    /***/
    function _(module) {
      var check = function check(it) {
        return it && it.Math == Math && it;
      }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


      module.exports = // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func -- fallback
      function () {
        return this;
      }() || Function('return this')();
      /***/

    },

    /***/
    9594:
    /*!******************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/has.js ***!
      \******************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var hasOwnProperty = {}.hasOwnProperty;

      module.exports = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty.call(toObject(it), key);
      };
      /***/

    },

    /***/
    7452:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/hidden-keys.js ***!
      \**************************************************************************************************/

    /***/
    function _(module) {
      module.exports = {};
      /***/
    },

    /***/
    7365:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/host-report-errors.js ***!
      \*********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      module.exports = function (a, b) {
        var console = global.console;

        if (console && console.error) {
          arguments.length === 1 ? console.error(a) : console.error(a, b);
        }
      };
      /***/

    },

    /***/
    3111:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/html.js ***!
      \*******************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      3077);

      module.exports = getBuiltIn('document', 'documentElement');
      /***/
    },

    /***/
    3113:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/ie8-dom-define.js ***!
      \*****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var createElement = __webpack_require__(
      /*! ../internals/document-create-element */
      5349); // Thank's IE8 for his funny defineProperty


      module.exports = !DESCRIPTORS && !fails(function () {
        // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
        return Object.defineProperty(createElement('div'), 'a', {
          get: function get() {
            return 7;
          }
        }).a != 7;
      });
      /***/
    },

    /***/
    3418:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/indexed-object.js ***!
      \*****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var classof = __webpack_require__(
      /*! ../internals/classof-raw */
      164);

      var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

      module.exports = fails(function () {
        // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
        // eslint-disable-next-line no-prototype-builtins -- safe
        return !Object('z').propertyIsEnumerable(0);
      }) ? function (it) {
        return classof(it) == 'String' ? split.call(it, '') : Object(it);
      } : Object;
      /***/
    },

    /***/
    4939:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/inherit-if-required.js ***!
      \**********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var setPrototypeOf = __webpack_require__(
      /*! ../internals/object-set-prototype-of */
      2060); // makes subclassing work correct for wrapped built-ins


      module.exports = function ($this, dummy, Wrapper) {
        var NewTarget, NewTargetPrototype;
        if ( // it can work only with native `setPrototypeOf`
        setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
        return $this;
      };
      /***/

    },

    /***/
    172:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/inspect-source.js ***!
      \*****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var store = __webpack_require__(
      /*! ../internals/shared-store */
      2117);

      var functionToString = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

      if (typeof store.inspectSource != 'function') {
        store.inspectSource = function (it) {
          return functionToString.call(it);
        };
      }

      module.exports = store.inspectSource;
      /***/
    },

    /***/
    4860:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/internal-metadata.js ***!
      \********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var hiddenKeys = __webpack_require__(
      /*! ../internals/hidden-keys */
      7452);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      480).f;

      var getOwnPropertyNamesModule = __webpack_require__(
      /*! ../internals/object-get-own-property-names */
      9740);

      var getOwnPropertyNamesExternalModule = __webpack_require__(
      /*! ../internals/object-get-own-property-names-external */
      863);

      var uid = __webpack_require__(
      /*! ../internals/uid */
      1103);

      var FREEZING = __webpack_require__(
      /*! ../internals/freezing */
      2477);

      var REQUIRED = false;
      var METADATA = uid('meta');
      var id = 0; // eslint-disable-next-line es/no-object-isextensible -- safe

      var isExtensible = Object.isExtensible || function () {
        return true;
      };

      var setMetadata = function setMetadata(it) {
        defineProperty(it, METADATA, {
          value: {
            objectID: 'O' + id++,
            // object ID
            weakData: {} // weak collections IDs

          }
        });
      };

      var fastKey = function fastKey(it, create) {
        // return a primitive with prefix
        if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

        if (!has(it, METADATA)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return 'F'; // not necessary to add metadata

          if (!create) return 'E'; // add missing metadata

          setMetadata(it); // return object ID
        }

        return it[METADATA].objectID;
      };

      var getWeakData = function getWeakData(it, create) {
        if (!has(it, METADATA)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return true; // not necessary to add metadata

          if (!create) return false; // add missing metadata

          setMetadata(it); // return the store of weak collections IDs
        }

        return it[METADATA].weakData;
      }; // add metadata on freeze-family methods calling


      var onFreeze = function onFreeze(it) {
        if (FREEZING && REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
        return it;
      };

      var enable = function enable() {
        meta.enable = function () {
          /* empty */
        };

        REQUIRED = true;
        var getOwnPropertyNames = getOwnPropertyNamesModule.f;
        var splice = [].splice;
        var test = {};
        test[METADATA] = 1; // prevent exposing of metadata key

        if (getOwnPropertyNames(test).length) {
          getOwnPropertyNamesModule.f = function (it) {
            var result = getOwnPropertyNames(it);

            for (var i = 0, length = result.length; i < length; i++) {
              if (result[i] === METADATA) {
                splice.call(result, i, 1);
                break;
              }
            }

            return result;
          };

          $({
            target: 'Object',
            stat: true,
            forced: true
          }, {
            getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
          });
        }
      };

      var meta = module.exports = {
        enable: enable,
        fastKey: fastKey,
        getWeakData: getWeakData,
        onFreeze: onFreeze
      };
      hiddenKeys[METADATA] = true;
      /***/
    },

    /***/
    8593:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/internal-state.js ***!
      \*****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var NATIVE_WEAK_MAP = __webpack_require__(
      /*! ../internals/native-weak-map */
      9780);

      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      7176);

      var objectHas = __webpack_require__(
      /*! ../internals/has */
      9594);

      var shared = __webpack_require__(
      /*! ../internals/shared-store */
      2117);

      var sharedKey = __webpack_require__(
      /*! ../internals/shared-key */
      6857);

      var hiddenKeys = __webpack_require__(
      /*! ../internals/hidden-keys */
      7452);

      var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
      var WeakMap = global.WeakMap;
      var set, get, has;

      var enforce = function enforce(it) {
        return has(it) ? get(it) : set(it, {});
      };

      var getterFor = function getterFor(TYPE) {
        return function (it) {
          var state;

          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw TypeError('Incompatible receiver, ' + TYPE + ' required');
          }

          return state;
        };
      };

      if (NATIVE_WEAK_MAP || shared.state) {
        var store = shared.state || (shared.state = new WeakMap());
        var wmget = store.get;
        var wmhas = store.has;
        var wmset = store.set;

        set = function set(it, metadata) {
          if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          wmset.call(store, it, metadata);
          return metadata;
        };

        get = function get(it) {
          return wmget.call(store, it) || {};
        };

        has = function has(it) {
          return wmhas.call(store, it);
        };
      } else {
        var STATE = sharedKey('state');
        hiddenKeys[STATE] = true;

        set = function set(it, metadata) {
          if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };

        get = function get(it) {
          return objectHas(it, STATE) ? it[STATE] : {};
        };

        has = function has(it) {
          return objectHas(it, STATE);
        };
      }

      module.exports = {
        set: set,
        get: get,
        has: has,
        enforce: enforce,
        getterFor: getterFor
      };
      /***/
    },

    /***/
    8250:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/is-array-iterator-method.js ***!
      \***************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var Iterators = __webpack_require__(
      /*! ../internals/iterators */
      8802);

      var ITERATOR = wellKnownSymbol('iterator');
      var ArrayPrototype = Array.prototype; // check on default Array iterator

      module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };
      /***/

    },

    /***/
    1147:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/is-array.js ***!
      \***********************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var classof = __webpack_require__(
      /*! ../internals/classof-raw */
      164); // `IsArray` abstract operation
      // https://tc39.es/ecma262/#sec-isarray
      // eslint-disable-next-line es/no-array-isarray -- safe


      module.exports = Array.isArray || function isArray(arg) {
        return classof(arg) == 'Array';
      };
      /***/

    },

    /***/
    2263:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/is-forced.js ***!
      \************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var replacement = /#|\.prototype\./;

      var isForced = function isForced(feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
      };

      var normalize = isForced.normalize = function (string) {
        return String(string).replace(replacement, '.').toLowerCase();
      };

      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = 'N';
      var POLYFILL = isForced.POLYFILL = 'P';
      module.exports = isForced;
      /***/
    },

    /***/
    2181:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/is-integer.js ***!
      \*************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var floor = Math.floor; // `Number.isInteger` method implementation
      // https://tc39.es/ecma262/#sec-number.isinteger

      module.exports = function isInteger(it) {
        return !isObject(it) && isFinite(it) && floor(it) === it;
      };
      /***/

    },

    /***/
    6743:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/is-object.js ***!
      \************************************************************************************************/

    /***/
    function _(module) {
      module.exports = function (it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
      /***/

    },

    /***/
    3712:
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/is-pure.js ***!
      \**********************************************************************************************/

    /***/
    function _(module) {
      module.exports = false;
      /***/
    },

    /***/
    4715:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/is-regexp.js ***!
      \************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var classof = __webpack_require__(
      /*! ../internals/classof-raw */
      164);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
      // https://tc39.es/ecma262/#sec-isregexp

      module.exports = function (it) {
        var isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
      };
      /***/

    },

    /***/
    3071:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/is-symbol.js ***!
      \************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      3077);

      var USE_SYMBOL_AS_UID = __webpack_require__(
      /*! ../internals/use-symbol-as-uid */
      486);

      module.exports = USE_SYMBOL_AS_UID ? function (it) {
        return typeof it == 'symbol';
      } : function (it) {
        var $Symbol = getBuiltIn('Symbol');
        return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
      };
      /***/
    },

    /***/
    3598:
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/iterate.js ***!
      \**********************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var isArrayIteratorMethod = __webpack_require__(
      /*! ../internals/is-array-iterator-method */
      8250);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      7907);

      var getIteratorMethod = __webpack_require__(
      /*! ../internals/get-iterator-method */
      572);

      var iteratorClose = __webpack_require__(
      /*! ../internals/iterator-close */
      5718);

      var Result = function Result(stopped, result) {
        this.stopped = stopped;
        this.result = result;
      };

      module.exports = function (iterable, unboundFunction, options) {
        var that = options && options.that;
        var AS_ENTRIES = !!(options && options.AS_ENTRIES);
        var IS_ITERATOR = !!(options && options.IS_ITERATOR);
        var INTERRUPTED = !!(options && options.INTERRUPTED);
        var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
        var iterator, iterFn, index, length, result, next, step;

        var stop = function stop(condition) {
          if (iterator) iteratorClose(iterator);
          return new Result(true, condition);
        };

        var callFn = function callFn(value) {
          if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
          }

          return INTERRUPTED ? fn(value, stop) : fn(value);
        };

        if (IS_ITERATOR) {
          iterator = iterable;
        } else {
          iterFn = getIteratorMethod(iterable);
          if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

          if (isArrayIteratorMethod(iterFn)) {
            for (index = 0, length = toLength(iterable.length); length > index; index++) {
              result = callFn(iterable[index]);
              if (result && result instanceof Result) return result;
            }

            return new Result(false);
          }

          iterator = iterFn.call(iterable);
        }

        next = iterator.next;

        while (!(step = next.call(iterator)).done) {
          try {
            result = callFn(step.value);
          } catch (error) {
            iteratorClose(iterator);
            throw error;
          }

          if (typeof result == 'object' && result && result instanceof Result) return result;
        }

        return new Result(false);
      };
      /***/

    },

    /***/
    5718:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/iterator-close.js ***!
      \*****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      module.exports = function (iterator) {
        var returnMethod = iterator['return'];

        if (returnMethod !== undefined) {
          return anObject(returnMethod.call(iterator)).value;
        }
      };
      /***/

    },

    /***/
    349:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/iterators-core.js ***!
      \*****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var getPrototypeOf = __webpack_require__(
      /*! ../internals/object-get-prototype-of */
      9515);

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      7176);

      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      3712);

      var ITERATOR = wellKnownSymbol('iterator');
      var BUGGY_SAFARI_ITERATORS = false;

      var returnThis = function returnThis() {
        return this;
      }; // `%IteratorPrototype%` object
      // https://tc39.es/ecma262/#sec-%iteratorprototype%-object


      var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
      /* eslint-disable es/no-array-prototype-keys -- safe */

      if ([].keys) {
        arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

        if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }

      var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
        var test = {}; // FF44- legacy iterators case

        return IteratorPrototype[ITERATOR].call(test) !== test;
      });
      if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {}; // `%IteratorPrototype%[@@iterator]()` method
      // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

      if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
        createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
      }

      module.exports = {
        IteratorPrototype: IteratorPrototype,
        BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
      };
      /***/
    },

    /***/
    8802:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/iterators.js ***!
      \************************************************************************************************/

    /***/
    function _(module) {
      module.exports = {};
      /***/
    },

    /***/
    7251:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/math-expm1.js ***!
      \*************************************************************************************************/

    /***/
    function _(module) {
      // eslint-disable-next-line es/no-math-expm1 -- safe
      var $expm1 = Math.expm1;
      var exp = Math.exp; // `Math.expm1` method implementation
      // https://tc39.es/ecma262/#sec-math.expm1

      module.exports = !$expm1 // Old FF bug
      || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
      || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
        return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
      } : $expm1;
      /***/
    },

    /***/
    9930:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/math-fround.js ***!
      \**************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var sign = __webpack_require__(
      /*! ../internals/math-sign */
      4900);

      var abs = Math.abs;
      var pow = Math.pow;
      var EPSILON = pow(2, -52);
      var EPSILON32 = pow(2, -23);
      var MAX32 = pow(2, 127) * (2 - EPSILON32);
      var MIN32 = pow(2, -126);

      var roundTiesToEven = function roundTiesToEven(n) {
        return n + 1 / EPSILON - 1 / EPSILON;
      }; // `Math.fround` method implementation
      // https://tc39.es/ecma262/#sec-math.fround
      // eslint-disable-next-line es/no-math-fround -- safe


      module.exports = Math.fround || function fround(x) {
        var $abs = abs(x);
        var $sign = sign(x);
        var a, result;
        if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
        a = (1 + EPSILON32 / EPSILON) * $abs;
        result = a - (a - $abs); // eslint-disable-next-line no-self-compare -- NaN check

        if (result > MAX32 || result != result) return $sign * Infinity;
        return $sign * result;
      };
      /***/

    },

    /***/
    3572:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/math-log1p.js ***!
      \*************************************************************************************************/

    /***/
    function _(module) {
      var log = Math.log; // `Math.log1p` method implementation
      // https://tc39.es/ecma262/#sec-math.log1p
      // eslint-disable-next-line es/no-math-log1p -- safe

      module.exports = Math.log1p || function log1p(x) {
        return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
      };
      /***/

    },

    /***/
    4900:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/math-sign.js ***!
      \************************************************************************************************/

    /***/
    function _(module) {
      // `Math.sign` method implementation
      // https://tc39.es/ecma262/#sec-math.sign
      // eslint-disable-next-line es/no-math-sign -- safe
      module.exports = Math.sign || function sign(x) {
        // eslint-disable-next-line no-self-compare -- NaN check
        return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
      };
      /***/

    },

    /***/
    5669:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/microtask.js ***!
      \************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var getOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      1867).f;

      var macrotask = __webpack_require__(
      /*! ../internals/task */
      918).set;

      var IS_IOS = __webpack_require__(
      /*! ../internals/engine-is-ios */
      4968);

      var IS_WEBOS_WEBKIT = __webpack_require__(
      /*! ../internals/engine-is-webos-webkit */
      9342);

      var IS_NODE = __webpack_require__(
      /*! ../internals/engine-is-node */
      1951);

      var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
      var document = global.document;
      var process = global.process;
      var Promise = global.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

      var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
      var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
      var flush, head, last, notify, toggle, node, promise, then; // modern engines have queueMicrotask method

      if (!queueMicrotask) {
        flush = function flush() {
          var parent, fn;
          if (IS_NODE && (parent = process.domain)) parent.exit();

          while (head) {
            fn = head.fn;
            head = head.next;

            try {
              fn();
            } catch (error) {
              if (head) notify();else last = undefined;
              throw error;
            }
          }

          last = undefined;
          if (parent) parent.enter();
        }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
        // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898


        if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
          toggle = true;
          node = document.createTextNode('');
          new MutationObserver(flush).observe(node, {
            characterData: true
          });

          notify = function notify() {
            node.data = toggle = !toggle;
          }; // environments with maybe non-completely correct, but existent Promise

        } else if (Promise && Promise.resolve) {
          // Promise.resolve without an argument throws an error in LG WebOS 2
          promise = Promise.resolve(undefined); // workaround of WebKit ~ iOS Safari 10.1 bug

          promise.constructor = Promise;
          then = promise.then;

          notify = function notify() {
            then.call(promise, flush);
          }; // Node.js without promises

        } else if (IS_NODE) {
          notify = function notify() {
            process.nextTick(flush);
          }; // for other environments - macrotask based on:
          // - setImmediate
          // - MessageChannel
          // - window.postMessag
          // - onreadystatechange
          // - setTimeout

        } else {
          notify = function notify() {
            // strange IE + webpack dev server bug - use .call(global)
            macrotask.call(global, flush);
          };
        }
      }

      module.exports = queueMicrotask || function (fn) {
        var task = {
          fn: fn,
          next: undefined
        };
        if (last) last.next = task;

        if (!head) {
          head = task;
          notify();
        }

        last = task;
      };
      /***/

    },

    /***/
    8591:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/native-promise-constructor.js ***!
      \*****************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      module.exports = global.Promise;
      /***/
    },

    /***/
    3391:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/native-symbol.js ***!
      \****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      /* eslint-disable es/no-symbol -- required for testing */
      var V8_VERSION = __webpack_require__(
      /*! ../internals/engine-v8-version */
      8630);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912); // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


      module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
        var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
        // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

        return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
      /***/
    },

    /***/
    9780:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/native-weak-map.js ***!
      \******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var inspectSource = __webpack_require__(
      /*! ../internals/inspect-source */
      172);

      var WeakMap = global.WeakMap;
      module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));
      /***/
    },

    /***/
    4495:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/new-promise-capability.js ***!
      \*************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      171);

      var PromiseCapability = function PromiseCapability(C) {
        var resolve, reject;
        this.promise = new C(function ($$resolve, $$reject) {
          if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aFunction(resolve);
        this.reject = aFunction(reject);
      }; // `NewPromiseCapability` abstract operation
      // https://tc39.es/ecma262/#sec-newpromisecapability


      module.exports.f = function (C) {
        return new PromiseCapability(C);
      };
      /***/

    },

    /***/
    7258:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/not-a-regexp.js ***!
      \***************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var isRegExp = __webpack_require__(
      /*! ../internals/is-regexp */
      4715);

      module.exports = function (it) {
        if (isRegExp(it)) {
          throw TypeError("The method doesn't accept regular expressions");
        }

        return it;
      };
      /***/

    },

    /***/
    6152:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/number-is-finite.js ***!
      \*******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var globalIsFinite = global.isFinite; // `Number.isFinite` method
      // https://tc39.es/ecma262/#sec-number.isfinite
      // eslint-disable-next-line es/no-number-isfinite -- safe

      module.exports = Number.isFinite || function isFinite(it) {
        return typeof it == 'number' && globalIsFinite(it);
      };
      /***/

    },

    /***/
    8671:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/number-parse-float.js ***!
      \*********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var trim = __webpack_require__(
      /*! ../internals/string-trim */
      5940).trim;

      var whitespaces = __webpack_require__(
      /*! ../internals/whitespaces */
      9760);

      var $parseFloat = global.parseFloat;
      var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity; // `parseFloat` method
      // https://tc39.es/ecma262/#sec-parsefloat-string

      module.exports = FORCED ? function parseFloat(string) {
        var trimmedString = trim(toString(string));
        var result = $parseFloat(trimmedString);
        return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
      } : $parseFloat;
      /***/
    },

    /***/
    5281:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/number-parse-int.js ***!
      \*******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var trim = __webpack_require__(
      /*! ../internals/string-trim */
      5940).trim;

      var whitespaces = __webpack_require__(
      /*! ../internals/whitespaces */
      9760);

      var $parseInt = global.parseInt;
      var hex = /^[+-]?0[Xx]/;
      var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22; // `parseInt` method
      // https://tc39.es/ecma262/#sec-parseint-string-radix

      module.exports = FORCED ? function parseInt(string, radix) {
        var S = trim(toString(string));
        return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
      } : $parseInt;
      /***/
    },

    /***/
    1235:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-assign.js ***!
      \****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var objectKeys = __webpack_require__(
      /*! ../internals/object-keys */
      2087);

      var getOwnPropertySymbolsModule = __webpack_require__(
      /*! ../internals/object-get-own-property-symbols */
      9800);

      var propertyIsEnumerableModule = __webpack_require__(
      /*! ../internals/object-property-is-enumerable */
      8833);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var IndexedObject = __webpack_require__(
      /*! ../internals/indexed-object */
      3418); // eslint-disable-next-line es/no-object-assign -- safe


      var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

      var defineProperty = Object.defineProperty; // `Object.assign` method
      // https://tc39.es/ecma262/#sec-object.assign

      module.exports = !$assign || fails(function () {
        // should have correct order of operations (Edge bug)
        if (DESCRIPTORS && $assign({
          b: 1
        }, $assign(defineProperty({}, 'a', {
          enumerable: true,
          get: function get() {
            defineProperty(this, 'b', {
              value: 3,
              enumerable: false
            });
          }
        }), {
          b: 2
        })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

        var A = {};
        var B = {}; // eslint-disable-next-line es/no-symbol -- safe

        var symbol = Symbol();
        var alphabet = 'abcdefghijklmnopqrst';
        A[symbol] = 7;
        alphabet.split('').forEach(function (chr) {
          B[chr] = chr;
        });
        return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
      }) ? function assign(target, source) {
        // eslint-disable-line no-unused-vars -- required for `.length`
        var T = toObject(target);
        var argumentsLength = arguments.length;
        var index = 1;
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        var propertyIsEnumerable = propertyIsEnumerableModule.f;

        while (argumentsLength > index) {
          var S = IndexedObject(arguments[index++]);
          var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
          var length = keys.length;
          var j = 0;
          var key;

          while (length > j) {
            key = keys[j++];
            if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
          }
        }

        return T;
      } : $assign;
      /***/
    },

    /***/
    7593:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-create.js ***!
      \****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      /* global ActiveXObject -- old IE, WSH */
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var defineProperties = __webpack_require__(
      /*! ../internals/object-define-properties */
      6624);

      var enumBugKeys = __webpack_require__(
      /*! ../internals/enum-bug-keys */
      3423);

      var hiddenKeys = __webpack_require__(
      /*! ../internals/hidden-keys */
      7452);

      var html = __webpack_require__(
      /*! ../internals/html */
      3111);

      var documentCreateElement = __webpack_require__(
      /*! ../internals/document-create-element */
      5349);

      var sharedKey = __webpack_require__(
      /*! ../internals/shared-key */
      6857);

      var GT = '>';
      var LT = '<';
      var PROTOTYPE = 'prototype';
      var SCRIPT = 'script';
      var IE_PROTO = sharedKey('IE_PROTO');

      var EmptyConstructor = function EmptyConstructor() {
        /* empty */
      };

      var scriptTag = function scriptTag(content) {
        return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
      }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


      var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
        activeXDocument.write(scriptTag(''));
        activeXDocument.close();
        var temp = activeXDocument.parentWindow.Object;
        activeXDocument = null; // avoid memory leak

        return temp;
      }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


      var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = documentCreateElement('iframe');
        var JS = 'java' + SCRIPT + ':';
        var iframeDocument;

        if (iframe.style) {
          iframe.style.display = 'none';
          html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

          iframe.src = String(JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag('document.F=Object'));
          iframeDocument.close();
          return iframeDocument.F;
        }
      }; // Check for document.domain and active x support
      // No need to use active x approach when document.domain is not set
      // see https://github.com/es-shims/es5-shim/issues/150
      // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
      // avoid IE GC bug


      var activeXDocument;

      var _NullProtoObject = function NullProtoObject() {
        try {
          activeXDocument = new ActiveXObject('htmlfile');
        } catch (error) {
          /* ignore */
        }

        _NullProtoObject = document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : // old IE
        NullProtoObjectViaIFrame() || NullProtoObjectViaActiveX(activeXDocument); // WSH

        var length = enumBugKeys.length;

        while (length--) {
          delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        }

        return _NullProtoObject();
      };

      hiddenKeys[IE_PROTO] = true; // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create

      module.exports = Object.create || function create(O, Properties) {
        var result;

        if (O !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

          result[IE_PROTO] = O;
        } else result = _NullProtoObject();

        return Properties === undefined ? result : defineProperties(result, Properties);
      };
      /***/

    },

    /***/
    6624:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-define-properties.js ***!
      \***************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      480);

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var objectKeys = __webpack_require__(
      /*! ../internals/object-keys */
      2087); // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties
      // eslint-disable-next-line es/no-object-defineproperties -- safe


      module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;

        while (length > index) {
          definePropertyModule.f(O, key = keys[index++], Properties[key]);
        }

        return O;
      };
      /***/
    },

    /***/
    480:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-define-property.js ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var IE8_DOM_DEFINE = __webpack_require__(
      /*! ../internals/ie8-dom-define */
      3113);

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var toPropertyKey = __webpack_require__(
      /*! ../internals/to-property-key */
      2552); // eslint-disable-next-line es/no-object-defineproperty -- safe


      var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty

      exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPropertyKey(P);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
          /* empty */
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
      /***/
    },

    /***/
    1867:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var propertyIsEnumerableModule = __webpack_require__(
      /*! ../internals/object-property-is-enumerable */
      8833);

      var createPropertyDescriptor = __webpack_require__(
      /*! ../internals/create-property-descriptor */
      4652);

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      6076);

      var toPropertyKey = __webpack_require__(
      /*! ../internals/to-property-key */
      2552);

      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var IE8_DOM_DEFINE = __webpack_require__(
      /*! ../internals/ie8-dom-define */
      3113); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPropertyKey(P);
        if (IE8_DOM_DEFINE) try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
          /* empty */
        }
        if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
      };
      /***/
    },

    /***/
    863:
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-get-own-property-names-external.js ***!
      \*****************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      /* eslint-disable es/no-object-getownpropertynames -- safe */
      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      6076);

      var $getOwnPropertyNames = __webpack_require__(
      /*! ../internals/object-get-own-property-names */
      9740).f;

      var toString = {}.toString;
      var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

      var getWindowNames = function getWindowNames(it) {
        try {
          return $getOwnPropertyNames(it);
        } catch (error) {
          return windowNames.slice();
        }
      }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


      module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
      };
      /***/

    },

    /***/
    9740:
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-get-own-property-names.js ***!
      \********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      var internalObjectKeys = __webpack_require__(
      /*! ../internals/object-keys-internal */
      6406);

      var enumBugKeys = __webpack_require__(
      /*! ../internals/enum-bug-keys */
      3423);

      var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames
      // eslint-disable-next-line es/no-object-getownpropertynames -- safe

      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return internalObjectKeys(O, hiddenKeys);
      };
      /***/

    },

    /***/
    9800:
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
      \**********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
      exports.f = Object.getOwnPropertySymbols;
      /***/
    },

    /***/
    9515:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-get-prototype-of.js ***!
      \**************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var sharedKey = __webpack_require__(
      /*! ../internals/shared-key */
      6857);

      var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
      /*! ../internals/correct-prototype-getter */
      8175);

      var IE_PROTO = sharedKey('IE_PROTO');
      var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
      // https://tc39.es/ecma262/#sec-object.getprototypeof
      // eslint-disable-next-line es/no-object-getprototypeof -- safe

      module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
        O = toObject(O);
        if (has(O, IE_PROTO)) return O[IE_PROTO];

        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
          return O.constructor.prototype;
        }

        return O instanceof Object ? ObjectPrototype : null;
      };
      /***/
    },

    /***/
    6406:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-keys-internal.js ***!
      \***********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      6076);

      var indexOf = __webpack_require__(
      /*! ../internals/array-includes */
      9835).indexOf;

      var hiddenKeys = __webpack_require__(
      /*! ../internals/hidden-keys */
      7452);

      module.exports = function (object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;

        for (key in O) {
          !has(hiddenKeys, key) && has(O, key) && result.push(key);
        } // Don't enum bug & hidden keys


        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~indexOf(result, key) || result.push(key);
          }
        }

        return result;
      };
      /***/

    },

    /***/
    2087:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-keys.js ***!
      \**************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var internalObjectKeys = __webpack_require__(
      /*! ../internals/object-keys-internal */
      6406);

      var enumBugKeys = __webpack_require__(
      /*! ../internals/enum-bug-keys */
      3423); // `Object.keys` method
      // https://tc39.es/ecma262/#sec-object.keys
      // eslint-disable-next-line es/no-object-keys -- safe


      module.exports = Object.keys || function keys(O) {
        return internalObjectKeys(O, enumBugKeys);
      };
      /***/

    },

    /***/
    8833:
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-property-is-enumerable.js ***!
      \********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports) {
      "use strict";

      var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
        1: 2
      }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
      // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
      /***/
    },

    /***/
    2060:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-set-prototype-of.js ***!
      \**************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      /* eslint-disable no-proto -- safe */
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var aPossiblePrototype = __webpack_require__(
      /*! ../internals/a-possible-prototype */
      8290); // `Object.setPrototypeOf` method
      // https://tc39.es/ecma262/#sec-object.setprototypeof
      // Works with __proto__ only. Old v8 can't work with null proto objects.
      // eslint-disable-next-line es/no-object-setprototypeof -- safe


      module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;

        try {
          // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
          setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
          setter.call(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) {
          /* empty */
        }

        return function setPrototypeOf(O, proto) {
          anObject(O);
          aPossiblePrototype(proto);
          if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
          return O;
        };
      }() : undefined);
      /***/
    },

    /***/
    1421:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-to-array.js ***!
      \******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var objectKeys = __webpack_require__(
      /*! ../internals/object-keys */
      2087);

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      6076);

      var propertyIsEnumerable = __webpack_require__(
      /*! ../internals/object-property-is-enumerable */
      8833).f; // `Object.{ entries, values }` methods implementation


      var createMethod = function createMethod(TO_ENTRIES) {
        return function (it) {
          var O = toIndexedObject(it);
          var keys = objectKeys(O);
          var length = keys.length;
          var i = 0;
          var result = [];
          var key;

          while (length > i) {
            key = keys[i++];

            if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
              result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
            }
          }

          return result;
        };
      };

      module.exports = {
        // `Object.entries` method
        // https://tc39.es/ecma262/#sec-object.entries
        entries: createMethod(true),
        // `Object.values` method
        // https://tc39.es/ecma262/#sec-object.values
        values: createMethod(false)
      };
      /***/
    },

    /***/
    9051:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-to-string.js ***!
      \*******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var TO_STRING_TAG_SUPPORT = __webpack_require__(
      /*! ../internals/to-string-tag-support */
      9584);

      var classof = __webpack_require__(
      /*! ../internals/classof */
      3324); // `Object.prototype.toString` method implementation
      // https://tc39.es/ecma262/#sec-object.prototype.tostring


      module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
        return '[object ' + classof(this) + ']';
      };
      /***/
    },

    /***/
    3252:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/ordinary-to-primitive.js ***!
      \************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743); // `OrdinaryToPrimitive` abstract operation
      // https://tc39.es/ecma262/#sec-ordinarytoprimitive


      module.exports = function (input, pref) {
        var fn, val;
        if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
        if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
        if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
      /***/

    },

    /***/
    3670:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/own-keys.js ***!
      \***********************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      3077);

      var getOwnPropertyNamesModule = __webpack_require__(
      /*! ../internals/object-get-own-property-names */
      9740);

      var getOwnPropertySymbolsModule = __webpack_require__(
      /*! ../internals/object-get-own-property-symbols */
      9800);

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499); // all object keys, includes non-enumerable and symbols


      module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
        var keys = getOwnPropertyNamesModule.f(anObject(it));
        var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
      };
      /***/

    },

    /***/
    3675:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/path.js ***!
      \*******************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      module.exports = global;
      /***/
    },

    /***/
    5280:
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/perform.js ***!
      \**********************************************************************************************/

    /***/
    function _(module) {
      module.exports = function (exec) {
        try {
          return {
            error: false,
            value: exec()
          };
        } catch (error) {
          return {
            error: true,
            value: error
          };
        }
      };
      /***/

    },

    /***/
    7967:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/promise-resolve.js ***!
      \******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var newPromiseCapability = __webpack_require__(
      /*! ../internals/new-promise-capability */
      4495);

      module.exports = function (C, x) {
        anObject(C);
        if (isObject(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };
      /***/

    },

    /***/
    4151:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/redefine-all.js ***!
      \***************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      1415);

      module.exports = function (target, src, options) {
        for (var key in src) {
          redefine(target, key, src[key], options);
        }

        return target;
      };
      /***/

    },

    /***/
    1415:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/redefine.js ***!
      \***********************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      7176);

      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var setGlobal = __webpack_require__(
      /*! ../internals/set-global */
      3753);

      var inspectSource = __webpack_require__(
      /*! ../internals/inspect-source */
      172);

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      8593);

      var getInternalState = InternalStateModule.get;
      var enforceInternalState = InternalStateModule.enforce;
      var TEMPLATE = String(String).split('String');
      (module.exports = function (O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var state;

        if (typeof value == 'function') {
          if (typeof key == 'string' && !has(value, 'name')) {
            createNonEnumerableProperty(value, 'name', key);
          }

          state = enforceInternalState(value);

          if (!state.source) {
            state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
          }
        }

        if (O === global) {
          if (simple) O[key] = value;else setGlobal(key, value);
          return;
        } else if (!unsafe) {
          delete O[key];
        } else if (!noTargetGet && O[key]) {
          simple = true;
        }

        if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, 'toString', function toString() {
        return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
      });
      /***/
    },

    /***/
    1714:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/regexp-exec-abstract.js ***!
      \***********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var classof = __webpack_require__(
      /*! ./classof-raw */
      164);

      var regexpExec = __webpack_require__(
      /*! ./regexp-exec */
      6193); // `RegExpExec` abstract operation
      // https://tc39.es/ecma262/#sec-regexpexec


      module.exports = function (R, S) {
        var exec = R.exec;

        if (typeof exec === 'function') {
          var result = exec.call(R, S);

          if (typeof result !== 'object') {
            throw TypeError('RegExp exec method returned something other than an Object or null');
          }

          return result;
        }

        if (classof(R) !== 'RegExp') {
          throw TypeError('RegExp#exec called on incompatible receiver');
        }

        return regexpExec.call(R, S);
      };
      /***/

    },

    /***/
    6193:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/regexp-exec.js ***!
      \**************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";
      /* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

      /* eslint-disable regexp/no-useless-quantifier -- testing */

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var regexpFlags = __webpack_require__(
      /*! ../internals/regexp-flags */
      4276);

      var stickyHelpers = __webpack_require__(
      /*! ../internals/regexp-sticky-helpers */
      3085);

      var shared = __webpack_require__(
      /*! ../internals/shared */
      8174);

      var create = __webpack_require__(
      /*! ../internals/object-create */
      7593);

      var getInternalState = __webpack_require__(
      /*! ../internals/internal-state */
      8593).get;

      var UNSUPPORTED_DOT_ALL = __webpack_require__(
      /*! ../internals/regexp-unsupported-dot-all */
      936);

      var UNSUPPORTED_NCG = __webpack_require__(
      /*! ../internals/regexp-unsupported-ncg */
      6180);

      var nativeExec = RegExp.prototype.exec;
      var nativeReplace = shared('native-string-replace', String.prototype.replace);
      var patchedExec = nativeExec;

      var UPDATES_LAST_INDEX_WRONG = function () {
        var re1 = /a/;
        var re2 = /b*/g;
        nativeExec.call(re1, 'a');
        nativeExec.call(re2, 'a');
        return re1.lastIndex !== 0 || re2.lastIndex !== 0;
      }();

      var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

      var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
      var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

      if (PATCH) {
        // eslint-disable-next-line max-statements -- TODO
        patchedExec = function exec(string) {
          var re = this;
          var state = getInternalState(re);
          var str = toString(string);
          var raw = state.raw;
          var result, reCopy, lastIndex, match, i, object, group;

          if (raw) {
            raw.lastIndex = re.lastIndex;
            result = patchedExec.call(raw, str);
            re.lastIndex = raw.lastIndex;
            return result;
          }

          var groups = state.groups;
          var sticky = UNSUPPORTED_Y && re.sticky;
          var flags = regexpFlags.call(re);
          var source = re.source;
          var charsAdded = 0;
          var strCopy = str;

          if (sticky) {
            flags = flags.replace('y', '');

            if (flags.indexOf('g') === -1) {
              flags += 'g';
            }

            strCopy = str.slice(re.lastIndex); // Support anchored sticky behavior.

            if (re.lastIndex > 0 && (!re.multiline || re.multiline && str.charAt(re.lastIndex - 1) !== '\n')) {
              source = '(?: ' + source + ')';
              strCopy = ' ' + strCopy;
              charsAdded++;
            } // ^(? + rx + ) is needed, in combination with some str slicing, to
            // simulate the 'y' flag.


            reCopy = new RegExp('^(?:' + source + ')', flags);
          }

          if (NPCG_INCLUDED) {
            reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
          }

          if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
          match = nativeExec.call(sticky ? reCopy : re, strCopy);

          if (sticky) {
            if (match) {
              match.input = match.input.slice(charsAdded);
              match[0] = match[0].slice(charsAdded);
              match.index = re.lastIndex;
              re.lastIndex += match[0].length;
            } else re.lastIndex = 0;
          } else if (UPDATES_LAST_INDEX_WRONG && match) {
            re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
          }

          if (NPCG_INCLUDED && match && match.length > 1) {
            // Fix browsers whose `exec` methods don't consistently return `undefined`
            // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
            nativeReplace.call(match[0], reCopy, function () {
              for (i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === undefined) match[i] = undefined;
              }
            });
          }

          if (match && groups) {
            match.groups = object = create(null);

            for (i = 0; i < groups.length; i++) {
              group = groups[i];
              object[group[0]] = match[group[1]];
            }
          }

          return match;
        };
      }

      module.exports = patchedExec;
      /***/
    },

    /***/
    4276:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/regexp-flags.js ***!
      \***************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499); // `RegExp.prototype.flags` getter implementation
      // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


      module.exports = function () {
        var that = anObject(this);
        var result = '';
        if (that.global) result += 'g';
        if (that.ignoreCase) result += 'i';
        if (that.multiline) result += 'm';
        if (that.dotAll) result += 's';
        if (that.unicode) result += 'u';
        if (that.sticky) result += 'y';
        return result;
      };
      /***/

    },

    /***/
    3085:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/regexp-sticky-helpers.js ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912); // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,


      var RE = function RE(s, f) {
        return RegExp(s, f);
      };

      exports.UNSUPPORTED_Y = fails(function () {
        var re = RE('a', 'y');
        re.lastIndex = 2;
        return re.exec('abcd') != null;
      });
      exports.BROKEN_CARET = fails(function () {
        // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
        var re = RE('^r', 'gy');
        re.lastIndex = 2;
        return re.exec('str') != null;
      });
      /***/
    },

    /***/
    936:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
      \*****************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ./fails */
      7912);

      module.exports = fails(function () {
        // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
        var re = RegExp('.', (typeof '').charAt(0));
        return !(re.dotAll && re.exec('\n') && re.flags === 's');
      });
      /***/
    },

    /***/
    6180:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
      \*************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ./fails */
      7912);

      module.exports = fails(function () {
        // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
        var re = RegExp('(?<a>b)', (typeof '').charAt(5));
        return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
      });
      /***/
    },

    /***/
    9486:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/require-object-coercible.js ***!
      \***************************************************************************************************************/

    /***/
    function _(module) {
      // `RequireObjectCoercible` abstract operation
      // https://tc39.es/ecma262/#sec-requireobjectcoercible
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on " + it);
        return it;
      };
      /***/

    },

    /***/
    3471:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/same-value.js ***!
      \*************************************************************************************************/

    /***/
    function _(module) {
      // `SameValue` abstract operation
      // https://tc39.es/ecma262/#sec-samevalue
      // eslint-disable-next-line es/no-object-is -- safe
      module.exports = Object.is || function is(x, y) {
        // eslint-disable-next-line no-self-compare -- NaN check
        return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
      };
      /***/

    },

    /***/
    3753:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/set-global.js ***!
      \*************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      module.exports = function (key, value) {
        try {
          // eslint-disable-next-line es/no-object-defineproperty -- safe
          Object.defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
          });
        } catch (error) {
          global[key] = value;
        }

        return value;
      };
      /***/

    },

    /***/
    6481:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/set-species.js ***!
      \**************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      3077);

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      480);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var SPECIES = wellKnownSymbol('species');

      module.exports = function (CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        var defineProperty = definePropertyModule.f;

        if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
          defineProperty(Constructor, SPECIES, {
            configurable: true,
            get: function get() {
              return this;
            }
          });
        }
      };
      /***/

    },

    /***/
    489:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/set-to-string-tag.js ***!
      \********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      480).f;

      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var TO_STRING_TAG = wellKnownSymbol('toStringTag');

      module.exports = function (it, TAG, STATIC) {
        if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
          defineProperty(it, TO_STRING_TAG, {
            configurable: true,
            value: TAG
          });
        }
      };
      /***/

    },

    /***/
    6857:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/shared-key.js ***!
      \*************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var shared = __webpack_require__(
      /*! ../internals/shared */
      8174);

      var uid = __webpack_require__(
      /*! ../internals/uid */
      1103);

      var keys = shared('keys');

      module.exports = function (key) {
        return keys[key] || (keys[key] = uid(key));
      };
      /***/

    },

    /***/
    2117:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/shared-store.js ***!
      \***************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var setGlobal = __webpack_require__(
      /*! ../internals/set-global */
      3753);

      var SHARED = '__core-js_shared__';
      var store = global[SHARED] || setGlobal(SHARED, {});
      module.exports = store;
      /***/
    },

    /***/
    8174:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/shared.js ***!
      \*********************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      3712);

      var store = __webpack_require__(
      /*! ../internals/shared-store */
      2117);

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })('versions', []).push({
        version: '3.16.0',
        mode: IS_PURE ? 'pure' : 'global',
        copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
      });
      /***/
    },

    /***/
    6795:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/species-constructor.js ***!
      \**********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      171);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
      // https://tc39.es/ecma262/#sec-speciesconstructor

      module.exports = function (O, defaultConstructor) {
        var C = anObject(O).constructor;
        var S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
      };
      /***/

    },

    /***/
    2304:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/string-html-forced.js ***!
      \*********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912); // check the existence of a method, lowercase
      // of a tag and escaping quotes in arguments


      module.exports = function (METHOD_NAME) {
        return fails(function () {
          var test = ''[METHOD_NAME]('"');
          return test !== test.toLowerCase() || test.split('"').length > 3;
        });
      };
      /***/

    },

    /***/
    1663:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/string-multibyte.js ***!
      \*******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      4497);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486); // `String.prototype.codePointAt` methods implementation


      var createMethod = function createMethod(CONVERT_TO_STRING) {
        return function ($this, pos) {
          var S = toString(requireObjectCoercible($this));
          var position = toInteger(pos);
          var size = S.length;
          var first, second;
          if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
          first = S.charCodeAt(position);
          return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
        };
      };

      module.exports = {
        // `String.prototype.codePointAt` method
        // https://tc39.es/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod(true)
      };
      /***/
    },

    /***/
    1432:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/string-pad.js ***!
      \*************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      // https://github.com/tc39/proposal-string-pad-start-end
      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var repeat = __webpack_require__(
      /*! ../internals/string-repeat */
      3680);

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486);

      var ceil = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

      var createMethod = function createMethod(IS_END) {
        return function ($this, maxLength, fillString) {
          var S = toString(requireObjectCoercible($this));
          var stringLength = S.length;
          var fillStr = fillString === undefined ? ' ' : toString(fillString);
          var intMaxLength = toLength(maxLength);
          var fillLen, stringFiller;
          if (intMaxLength <= stringLength || fillStr == '') return S;
          fillLen = intMaxLength - stringLength;
          stringFiller = repeat.call(fillStr, ceil(fillLen / fillStr.length));
          if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
          return IS_END ? S + stringFiller : stringFiller + S;
        };
      };

      module.exports = {
        // `String.prototype.padStart` method
        // https://tc39.es/ecma262/#sec-string.prototype.padstart
        start: createMethod(false),
        // `String.prototype.padEnd` method
        // https://tc39.es/ecma262/#sec-string.prototype.padend
        end: createMethod(true)
      };
      /***/
    },

    /***/
    3680:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/string-repeat.js ***!
      \****************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      4497);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486); // `String.prototype.repeat` method implementation
      // https://tc39.es/ecma262/#sec-string.prototype.repeat


      module.exports = function repeat(count) {
        var str = toString(requireObjectCoercible(this));
        var result = '';
        var n = toInteger(count);
        if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

        for (; n > 0; (n >>>= 1) && (str += str)) {
          if (n & 1) result += str;
        }

        return result;
      };
      /***/

    },

    /***/
    332:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/string-trim-forced.js ***!
      \*********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var whitespaces = __webpack_require__(
      /*! ../internals/whitespaces */
      9760);

      var non = "\u200B\x85\u180E"; // check that a method works with the correct list
      // of whitespaces and has a correct name

      module.exports = function (METHOD_NAME) {
        return fails(function () {
          return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
        });
      };
      /***/

    },

    /***/
    5940:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/string-trim.js ***!
      \**************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var whitespaces = __webpack_require__(
      /*! ../internals/whitespaces */
      9760);

      var whitespace = '[' + whitespaces + ']';
      var ltrim = RegExp('^' + whitespace + whitespace + '*');
      var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

      var createMethod = function createMethod(TYPE) {
        return function ($this) {
          var string = toString(requireObjectCoercible($this));
          if (TYPE & 1) string = string.replace(ltrim, '');
          if (TYPE & 2) string = string.replace(rtrim, '');
          return string;
        };
      };

      module.exports = {
        // `String.prototype.{ trimLeft, trimStart }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimstart
        start: createMethod(1),
        // `String.prototype.{ trimRight, trimEnd }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimend
        end: createMethod(2),
        // `String.prototype.trim` method
        // https://tc39.es/ecma262/#sec-string.prototype.trim
        trim: createMethod(3)
      };
      /***/
    },

    /***/
    918:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/task.js ***!
      \*******************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var bind = __webpack_require__(
      /*! ../internals/function-bind-context */
      7907);

      var html = __webpack_require__(
      /*! ../internals/html */
      3111);

      var createElement = __webpack_require__(
      /*! ../internals/document-create-element */
      5349);

      var IS_IOS = __webpack_require__(
      /*! ../internals/engine-is-ios */
      4968);

      var IS_NODE = __webpack_require__(
      /*! ../internals/engine-is-node */
      1951);

      var set = global.setImmediate;
      var clear = global.clearImmediate;
      var process = global.process;
      var MessageChannel = global.MessageChannel;
      var Dispatch = global.Dispatch;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = 'onreadystatechange';
      var location, defer, channel, port;

      try {
        // Deno throws a ReferenceError on `location` access without `--location` flag
        location = global.location;
      } catch (error) {
        /* empty */
      }

      var run = function run(id) {
        // eslint-disable-next-line no-prototype-builtins -- safe
        if (queue.hasOwnProperty(id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };

      var runner = function runner(id) {
        return function () {
          run(id);
        };
      };

      var listener = function listener(event) {
        run(event.data);
      };

      var post = function post(id) {
        // old engines have not location.origin
        global.postMessage(String(id), location.protocol + '//' + location.host);
      }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


      if (!set || !clear) {
        set = function setImmediate(fn) {
          var args = [];
          var argumentsLength = arguments.length;
          var i = 1;

          while (argumentsLength > i) {
            args.push(arguments[i++]);
          }

          queue[++counter] = function () {
            // eslint-disable-next-line no-new-func -- spec requirement
            (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
          };

          defer(counter);
          return counter;
        };

        clear = function clearImmediate(id) {
          delete queue[id];
        }; // Node.js 0.8-


        if (IS_NODE) {
          defer = function defer(id) {
            process.nextTick(runner(id));
          }; // Sphere (JS game engine) Dispatch API

        } else if (Dispatch && Dispatch.now) {
          defer = function defer(id) {
            Dispatch.now(runner(id));
          }; // Browsers with MessageChannel, includes WebWorkers
          // except iOS - https://github.com/zloirock/core-js/issues/624

        } else if (MessageChannel && !IS_IOS) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = bind(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
          // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && location && location.protocol !== 'file:' && !fails(post)) {
          defer = post;
          global.addEventListener('message', listener, false); // IE8-
        } else if (ONREADYSTATECHANGE in createElement('script')) {
          defer = function defer(id) {
            html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
              html.removeChild(this);
              run(id);
            };
          }; // Rest old browsers

        } else {
          defer = function defer(id) {
            setTimeout(runner(id), 0);
          };
        }
      }

      module.exports = {
        set: set,
        clear: clear
      };
      /***/
    },

    /***/
    4654:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/this-number-value.js ***!
      \********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var classof = __webpack_require__(
      /*! ../internals/classof-raw */
      164); // `thisNumberValue` abstract operation
      // https://tc39.es/ecma262/#sec-thisnumbervalue


      module.exports = function (value) {
        if (typeof value != 'number' && classof(value) != 'Number') {
          throw TypeError('Incorrect invocation');
        }

        return +value;
      };
      /***/

    },

    /***/
    9625:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-absolute-index.js ***!
      \********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      4497);

      var max = Math.max;
      var min = Math.min; // Helper for a popular repeating case of the spec:
      // Let integer be ? ToInteger(index).
      // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

      module.exports = function (index, length) {
        var integer = toInteger(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
      /***/

    },

    /***/
    6076:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-indexed-object.js ***!
      \********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      // toObject with fallback for non-array-like ES3 strings
      var IndexedObject = __webpack_require__(
      /*! ../internals/indexed-object */
      3418);

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486);

      module.exports = function (it) {
        return IndexedObject(requireObjectCoercible(it));
      };
      /***/

    },

    /***/
    4497:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-integer.js ***!
      \*************************************************************************************************/

    /***/
    function _(module) {
      var ceil = Math.ceil;
      var floor = Math.floor; // `ToInteger` abstract operation
      // https://tc39.es/ecma262/#sec-tointeger

      module.exports = function (argument) {
        return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
      };
      /***/

    },

    /***/
    8806:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-length.js ***!
      \************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      4497);

      var min = Math.min; // `ToLength` abstract operation
      // https://tc39.es/ecma262/#sec-tolength

      module.exports = function (argument) {
        return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
      };
      /***/

    },

    /***/
    2767:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-object.js ***!
      \************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486); // `ToObject` abstract operation
      // https://tc39.es/ecma262/#sec-toobject


      module.exports = function (argument) {
        return Object(requireObjectCoercible(argument));
      };
      /***/

    },

    /***/
    8673:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-primitive.js ***!
      \***************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var isSymbol = __webpack_require__(
      /*! ../internals/is-symbol */
      3071);

      var ordinaryToPrimitive = __webpack_require__(
      /*! ../internals/ordinary-to-primitive */
      3252);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var TO_PRIMITIVE = wellKnownSymbol('toPrimitive'); // `ToPrimitive` abstract operation
      // https://tc39.es/ecma262/#sec-toprimitive

      module.exports = function (input, pref) {
        if (!isObject(input) || isSymbol(input)) return input;
        var exoticToPrim = input[TO_PRIMITIVE];
        var result;

        if (exoticToPrim !== undefined) {
          if (pref === undefined) pref = 'default';
          result = exoticToPrim.call(input, pref);
          if (!isObject(result) || isSymbol(result)) return result;
          throw TypeError("Can't convert object to primitive value");
        }

        if (pref === undefined) pref = 'number';
        return ordinaryToPrimitive(input, pref);
      };
      /***/

    },

    /***/
    2552:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-property-key.js ***!
      \******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var toPrimitive = __webpack_require__(
      /*! ../internals/to-primitive */
      8673);

      var isSymbol = __webpack_require__(
      /*! ../internals/is-symbol */
      3071); // `ToPropertyKey` abstract operation
      // https://tc39.es/ecma262/#sec-topropertykey


      module.exports = function (argument) {
        var key = toPrimitive(argument, 'string');
        return isSymbol(key) ? key : String(key);
      };
      /***/

    },

    /***/
    9584:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-string-tag-support.js ***!
      \************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var TO_STRING_TAG = wellKnownSymbol('toStringTag');
      var test = {};
      test[TO_STRING_TAG] = 'z';
      module.exports = String(test) === '[object z]';
      /***/
    },

    /***/
    7517:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-string.js ***!
      \************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var isSymbol = __webpack_require__(
      /*! ../internals/is-symbol */
      3071);

      module.exports = function (argument) {
        if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a string');
        return String(argument);
      };
      /***/

    },

    /***/
    1103:
    /*!******************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/uid.js ***!
      \******************************************************************************************/

    /***/
    function _(module) {
      var id = 0;
      var postfix = Math.random();

      module.exports = function (key) {
        return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
      };
      /***/

    },

    /***/
    486:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/use-symbol-as-uid.js ***!
      \********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      /* eslint-disable es/no-symbol -- required for testing */
      var NATIVE_SYMBOL = __webpack_require__(
      /*! ../internals/native-symbol */
      3391);

      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';
      /***/
    },

    /***/
    144:
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, exports, __webpack_require__) {
      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      exports.f = wellKnownSymbol;
      /***/
    },

    /***/
    2622:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/well-known-symbol.js ***!
      \********************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var shared = __webpack_require__(
      /*! ../internals/shared */
      8174);

      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var uid = __webpack_require__(
      /*! ../internals/uid */
      1103);

      var NATIVE_SYMBOL = __webpack_require__(
      /*! ../internals/native-symbol */
      3391);

      var USE_SYMBOL_AS_UID = __webpack_require__(
      /*! ../internals/use-symbol-as-uid */
      486);

      var WellKnownSymbolsStore = shared('wks');
      var Symbol = global.Symbol;
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

      module.exports = function (name) {
        if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
          if (NATIVE_SYMBOL && has(Symbol, name)) {
            WellKnownSymbolsStore[name] = Symbol[name];
          } else {
            WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
          }
        }

        return WellKnownSymbolsStore[name];
      };
      /***/

    },

    /***/
    9760:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/whitespaces.js ***!
      \**************************************************************************************************/

    /***/
    function _(module) {
      // a string of all valid unicode whitespaces
      module.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002" + "\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
      /***/
    },

    /***/
    596:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.concat.js ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var isArray = __webpack_require__(
      /*! ../internals/is-array */
      1147);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      2966);

      var arraySpeciesCreate = __webpack_require__(
      /*! ../internals/array-species-create */
      3784);

      var arrayMethodHasSpeciesSupport = __webpack_require__(
      /*! ../internals/array-method-has-species-support */
      7795);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var V8_VERSION = __webpack_require__(
      /*! ../internals/engine-v8-version */
      8630);

      var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
      var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
      var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
      // deoptimization and serious performance degradation
      // https://github.com/zloirock/core-js/issues/679

      var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
      });
      var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

      var isConcatSpreadable = function isConcatSpreadable(O) {
        if (!isObject(O)) return false;
        var spreadable = O[IS_CONCAT_SPREADABLE];
        return spreadable !== undefined ? !!spreadable : isArray(O);
      };

      var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
      // https://tc39.es/ecma262/#sec-array.prototype.concat
      // with adding support of @@isConcatSpreadable and @@species

      $({
        target: 'Array',
        proto: true,
        forced: FORCED
      }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        concat: function concat(arg) {
          var O = toObject(this);
          var A = arraySpeciesCreate(O, 0);
          var n = 0;
          var i, k, length, len, E;

          for (i = -1, length = arguments.length; i < length; i++) {
            E = i === -1 ? O : arguments[i];

            if (isConcatSpreadable(E)) {
              len = toLength(E.length);
              if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

              for (k = 0; k < len; k++, n++) {
                if (k in E) createProperty(A, n, E[k]);
              }
            } else {
              if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              createProperty(A, n++, E);
            }
          }

          A.length = n;
          return A;
        }
      });
      /***/
    },

    /***/
    2877:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.copy-within.js ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var copyWithin = __webpack_require__(
      /*! ../internals/array-copy-within */
      2122);

      var addToUnscopables = __webpack_require__(
      /*! ../internals/add-to-unscopables */
      9507); // `Array.prototype.copyWithin` method
      // https://tc39.es/ecma262/#sec-array.prototype.copywithin


      $({
        target: 'Array',
        proto: true
      }, {
        copyWithin: copyWithin
      }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables('copyWithin');
      /***/
    },

    /***/
    4693:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.every.js ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var $every = __webpack_require__(
      /*! ../internals/array-iteration */
      7354).every;

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      2130);

      var STRICT_METHOD = arrayMethodIsStrict('every'); // `Array.prototype.every` method
      // https://tc39.es/ecma262/#sec-array.prototype.every

      $({
        target: 'Array',
        proto: true,
        forced: !STRICT_METHOD
      }, {
        every: function every(callbackfn
        /* , thisArg */
        ) {
          return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    1970:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.fill.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fill = __webpack_require__(
      /*! ../internals/array-fill */
      9091);

      var addToUnscopables = __webpack_require__(
      /*! ../internals/add-to-unscopables */
      9507); // `Array.prototype.fill` method
      // https://tc39.es/ecma262/#sec-array.prototype.fill


      $({
        target: 'Array',
        proto: true
      }, {
        fill: fill
      }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables('fill');
      /***/
    },

    /***/
    6487:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.filter.js ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var $filter = __webpack_require__(
      /*! ../internals/array-iteration */
      7354).filter;

      var arrayMethodHasSpeciesSupport = __webpack_require__(
      /*! ../internals/array-method-has-species-support */
      7795);

      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // `Array.prototype.filter` method
      // https://tc39.es/ecma262/#sec-array.prototype.filter
      // with adding support of @@species

      $({
        target: 'Array',
        proto: true,
        forced: !HAS_SPECIES_SUPPORT
      }, {
        filter: function filter(callbackfn
        /* , thisArg */
        ) {
          return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    2480:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.find-index.js ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var $findIndex = __webpack_require__(
      /*! ../internals/array-iteration */
      7354).findIndex;

      var addToUnscopables = __webpack_require__(
      /*! ../internals/add-to-unscopables */
      9507);

      var FIND_INDEX = 'findIndex';
      var SKIPS_HOLES = true; // Shouldn't skip holes

      if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
        SKIPS_HOLES = false;
      }); // `Array.prototype.findIndex` method
      // https://tc39.es/ecma262/#sec-array.prototype.findindex

      $({
        target: 'Array',
        proto: true,
        forced: SKIPS_HOLES
      }, {
        findIndex: function findIndex(callbackfn
        /* , that = undefined */
        ) {
          return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables(FIND_INDEX);
      /***/
    },

    /***/
    8609:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.find.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var $find = __webpack_require__(
      /*! ../internals/array-iteration */
      7354).find;

      var addToUnscopables = __webpack_require__(
      /*! ../internals/add-to-unscopables */
      9507);

      var FIND = 'find';
      var SKIPS_HOLES = true; // Shouldn't skip holes

      if (FIND in []) Array(1)[FIND](function () {
        SKIPS_HOLES = false;
      }); // `Array.prototype.find` method
      // https://tc39.es/ecma262/#sec-array.prototype.find

      $({
        target: 'Array',
        proto: true,
        forced: SKIPS_HOLES
      }, {
        find: function find(callbackfn
        /* , that = undefined */
        ) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables(FIND);
      /***/
    },

    /***/
    6976:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.flat-map.js ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var flattenIntoArray = __webpack_require__(
      /*! ../internals/flatten-into-array */
      3022);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      171);

      var arraySpeciesCreate = __webpack_require__(
      /*! ../internals/array-species-create */
      3784); // `Array.prototype.flatMap` method
      // https://tc39.es/ecma262/#sec-array.prototype.flatmap


      $({
        target: 'Array',
        proto: true
      }, {
        flatMap: function flatMap(callbackfn
        /* , thisArg */
        ) {
          var O = toObject(this);
          var sourceLen = toLength(O.length);
          var A;
          aFunction(callbackfn);
          A = arraySpeciesCreate(O, 0);
          A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          return A;
        }
      });
      /***/
    },

    /***/
    3196:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.flat.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var flattenIntoArray = __webpack_require__(
      /*! ../internals/flatten-into-array */
      3022);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      4497);

      var arraySpeciesCreate = __webpack_require__(
      /*! ../internals/array-species-create */
      3784); // `Array.prototype.flat` method
      // https://tc39.es/ecma262/#sec-array.prototype.flat


      $({
        target: 'Array',
        proto: true
      }, {
        flat: function flat() {
          var depthArg = arguments.length ? arguments[0] : undefined;
          var O = toObject(this);
          var sourceLen = toLength(O.length);
          var A = arraySpeciesCreate(O, 0);
          A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
          return A;
        }
      });
      /***/
    },

    /***/
    9657:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.for-each.js ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var forEach = __webpack_require__(
      /*! ../internals/array-for-each */
      8367); // `Array.prototype.forEach` method
      // https://tc39.es/ecma262/#sec-array.prototype.foreach
      // eslint-disable-next-line es/no-array-prototype-foreach -- safe


      $({
        target: 'Array',
        proto: true,
        forced: [].forEach != forEach
      }, {
        forEach: forEach
      });
      /***/
    },

    /***/
    564:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.from.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var from = __webpack_require__(
      /*! ../internals/array-from */
      8646);

      var checkCorrectnessOfIteration = __webpack_require__(
      /*! ../internals/check-correctness-of-iteration */
      4533);

      var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
        // eslint-disable-next-line es/no-array-from -- required for testing
        Array.from(iterable);
      }); // `Array.from` method
      // https://tc39.es/ecma262/#sec-array.from

      $({
        target: 'Array',
        stat: true,
        forced: INCORRECT_ITERATION
      }, {
        from: from
      });
      /***/
    },

    /***/
    465:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.includes.js ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var $includes = __webpack_require__(
      /*! ../internals/array-includes */
      9835).includes;

      var addToUnscopables = __webpack_require__(
      /*! ../internals/add-to-unscopables */
      9507); // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes


      $({
        target: 'Array',
        proto: true
      }, {
        includes: function includes(el
        /* , fromIndex = 0 */
        ) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
        }
      }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables('includes');
      /***/
    },

    /***/
    3340:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.index-of.js ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";
      /* eslint-disable es/no-array-prototype-indexof -- required for testing */

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var $indexOf = __webpack_require__(
      /*! ../internals/array-includes */
      9835).indexOf;

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      2130);

      var nativeIndexOf = [].indexOf;
      var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
      var STRICT_METHOD = arrayMethodIsStrict('indexOf'); // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof

      $({
        target: 'Array',
        proto: true,
        forced: NEGATIVE_ZERO || !STRICT_METHOD
      }, {
        indexOf: function indexOf(searchElement
        /* , fromIndex = 0 */
        ) {
          return NEGATIVE_ZERO // convert -0 to +0
          ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    9560:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.is-array.js ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var isArray = __webpack_require__(
      /*! ../internals/is-array */
      1147); // `Array.isArray` method
      // https://tc39.es/ecma262/#sec-array.isarray


      $({
        target: 'Array',
        stat: true
      }, {
        isArray: isArray
      });
      /***/
    },

    /***/
    9407:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.iterator.js ***!
      \******************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      6076);

      var addToUnscopables = __webpack_require__(
      /*! ../internals/add-to-unscopables */
      9507);

      var Iterators = __webpack_require__(
      /*! ../internals/iterators */
      8802);

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      8593);

      var defineIterator = __webpack_require__(
      /*! ../internals/define-iterator */
      8020);

      var ARRAY_ITERATOR = 'Array Iterator';
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
      // https://tc39.es/ecma262/#sec-array.prototype.entries
      // `Array.prototype.keys` method
      // https://tc39.es/ecma262/#sec-array.prototype.keys
      // `Array.prototype.values` method
      // https://tc39.es/ecma262/#sec-array.prototype.values
      // `Array.prototype[@@iterator]` method
      // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
      // `CreateArrayIterator` internal method
      // https://tc39.es/ecma262/#sec-createarrayiterator

      module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
        setInternalState(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated),
          // target
          index: 0,
          // next index
          kind: kind // kind

        }); // `%ArrayIteratorPrototype%.next` method
        // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
      }, function () {
        var state = getInternalState(this);
        var target = state.target;
        var kind = state.kind;
        var index = state.index++;

        if (!target || index >= target.length) {
          state.target = undefined;
          return {
            value: undefined,
            done: true
          };
        }

        if (kind == 'keys') return {
          value: index,
          done: false
        };
        if (kind == 'values') return {
          value: target[index],
          done: false
        };
        return {
          value: [index, target[index]],
          done: false
        };
      }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
      // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
      // https://tc39.es/ecma262/#sec-createmappedargumentsobject

      Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');
      /***/
    },

    /***/
    6395:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.join.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var IndexedObject = __webpack_require__(
      /*! ../internals/indexed-object */
      3418);

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      6076);

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      2130);

      var nativeJoin = [].join;
      var ES3_STRINGS = IndexedObject != Object;
      var STRICT_METHOD = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
      // https://tc39.es/ecma262/#sec-array.prototype.join

      $({
        target: 'Array',
        proto: true,
        forced: ES3_STRINGS || !STRICT_METHOD
      }, {
        join: function join(separator) {
          return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
        }
      });
      /***/
    },

    /***/
    6280:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.last-index-of.js ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var lastIndexOf = __webpack_require__(
      /*! ../internals/array-last-index-of */
      5722); // `Array.prototype.lastIndexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
      // eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing


      $({
        target: 'Array',
        proto: true,
        forced: lastIndexOf !== [].lastIndexOf
      }, {
        lastIndexOf: lastIndexOf
      });
      /***/
    },

    /***/
    2526:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.map.js ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var $map = __webpack_require__(
      /*! ../internals/array-iteration */
      7354).map;

      var arrayMethodHasSpeciesSupport = __webpack_require__(
      /*! ../internals/array-method-has-species-support */
      7795);

      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
      // https://tc39.es/ecma262/#sec-array.prototype.map
      // with adding support of @@species

      $({
        target: 'Array',
        proto: true,
        forced: !HAS_SPECIES_SUPPORT
      }, {
        map: function map(callbackfn
        /* , thisArg */
        ) {
          return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    721:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.of.js ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      2966);

      var ISNT_GENERIC = fails(function () {
        function F() {
          /* empty */
        } // eslint-disable-next-line es/no-array-of -- required for testing


        return !(Array.of.call(F) instanceof F);
      }); // `Array.of` method
      // https://tc39.es/ecma262/#sec-array.of
      // WebKit Array.of isn't generic

      $({
        target: 'Array',
        stat: true,
        forced: ISNT_GENERIC
      }, {
        of: function of() {
          var index = 0;
          var argumentsLength = arguments.length;
          var result = new (typeof this == 'function' ? this : Array)(argumentsLength);

          while (argumentsLength > index) {
            createProperty(result, index, arguments[index++]);
          }

          result.length = argumentsLength;
          return result;
        }
      });
      /***/
    },

    /***/
    3548:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.reduce-right.js ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var $reduceRight = __webpack_require__(
      /*! ../internals/array-reduce */
      1922).right;

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      2130);

      var CHROME_VERSION = __webpack_require__(
      /*! ../internals/engine-v8-version */
      8630);

      var IS_NODE = __webpack_require__(
      /*! ../internals/engine-is-node */
      1951);

      var STRICT_METHOD = arrayMethodIsStrict('reduceRight'); // Chrome 80-82 has a critical bug
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

      var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83; // `Array.prototype.reduceRight` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduceright

      $({
        target: 'Array',
        proto: true,
        forced: !STRICT_METHOD || CHROME_BUG
      }, {
        reduceRight: function reduceRight(callbackfn
        /* , initialValue */
        ) {
          return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    176:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.reduce.js ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var $reduce = __webpack_require__(
      /*! ../internals/array-reduce */
      1922).left;

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      2130);

      var CHROME_VERSION = __webpack_require__(
      /*! ../internals/engine-v8-version */
      8630);

      var IS_NODE = __webpack_require__(
      /*! ../internals/engine-is-node */
      1951);

      var STRICT_METHOD = arrayMethodIsStrict('reduce'); // Chrome 80-82 has a critical bug
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

      var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83; // `Array.prototype.reduce` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduce

      $({
        target: 'Array',
        proto: true,
        forced: !STRICT_METHOD || CHROME_BUG
      }, {
        reduce: function reduce(callbackfn
        /* , initialValue */
        ) {
          return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    2825:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.slice.js ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var isArray = __webpack_require__(
      /*! ../internals/is-array */
      1147);

      var toAbsoluteIndex = __webpack_require__(
      /*! ../internals/to-absolute-index */
      9625);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      6076);

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      2966);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var arrayMethodHasSpeciesSupport = __webpack_require__(
      /*! ../internals/array-method-has-species-support */
      7795);

      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
      var SPECIES = wellKnownSymbol('species');
      var nativeSlice = [].slice;
      var max = Math.max; // `Array.prototype.slice` method
      // https://tc39.es/ecma262/#sec-array.prototype.slice
      // fallback for not array-like ES3 strings and DOM objects

      $({
        target: 'Array',
        proto: true,
        forced: !HAS_SPECIES_SUPPORT
      }, {
        slice: function slice(start, end) {
          var O = toIndexedObject(this);
          var length = toLength(O.length);
          var k = toAbsoluteIndex(start, length);
          var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

          var Constructor, result, n;

          if (isArray(O)) {
            Constructor = O.constructor; // cross-realm fallback

            if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
              Constructor = undefined;
            } else if (isObject(Constructor)) {
              Constructor = Constructor[SPECIES];
              if (Constructor === null) Constructor = undefined;
            }

            if (Constructor === Array || Constructor === undefined) {
              return nativeSlice.call(O, k, fin);
            }
          }

          result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));

          for (n = 0; k < fin; k++, n++) {
            if (k in O) createProperty(result, n, O[k]);
          }

          result.length = n;
          return result;
        }
      });
      /***/
    },

    /***/
    6203:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.some.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var $some = __webpack_require__(
      /*! ../internals/array-iteration */
      7354).some;

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      2130);

      var STRICT_METHOD = arrayMethodIsStrict('some'); // `Array.prototype.some` method
      // https://tc39.es/ecma262/#sec-array.prototype.some

      $({
        target: 'Array',
        proto: true,
        forced: !STRICT_METHOD
      }, {
        some: function some(callbackfn
        /* , thisArg */
        ) {
          return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    6011:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.sort.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      171);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var internalSort = __webpack_require__(
      /*! ../internals/array-sort */
      6756);

      var arrayMethodIsStrict = __webpack_require__(
      /*! ../internals/array-method-is-strict */
      2130);

      var FF = __webpack_require__(
      /*! ../internals/engine-ff-version */
      7029);

      var IE_OR_EDGE = __webpack_require__(
      /*! ../internals/engine-is-ie-or-edge */
      5188);

      var V8 = __webpack_require__(
      /*! ../internals/engine-v8-version */
      8630);

      var WEBKIT = __webpack_require__(
      /*! ../internals/engine-webkit-version */
      629);

      var test = [];
      var nativeSort = test.sort; // IE8-

      var FAILS_ON_UNDEFINED = fails(function () {
        test.sort(undefined);
      }); // V8 bug

      var FAILS_ON_NULL = fails(function () {
        test.sort(null);
      }); // Old WebKit

      var STRICT_METHOD = arrayMethodIsStrict('sort');
      var STABLE_SORT = !fails(function () {
        // feature detection can be too slow, so check engines versions
        if (V8) return V8 < 70;
        if (FF && FF > 3) return;
        if (IE_OR_EDGE) return true;
        if (WEBKIT) return WEBKIT < 603;
        var result = '';
        var code, chr, value, index; // generate an array with more 512 elements (Chakra and old V8 fails only in this case)

        for (code = 65; code < 76; code++) {
          chr = String.fromCharCode(code);

          switch (code) {
            case 66:
            case 69:
            case 70:
            case 72:
              value = 3;
              break;

            case 68:
            case 71:
              value = 4;
              break;

            default:
              value = 2;
          }

          for (index = 0; index < 47; index++) {
            test.push({
              k: chr + index,
              v: value
            });
          }
        }

        test.sort(function (a, b) {
          return b.v - a.v;
        });

        for (index = 0; index < test.length; index++) {
          chr = test[index].k.charAt(0);
          if (result.charAt(result.length - 1) !== chr) result += chr;
        }

        return result !== 'DGBEFHACIJK';
      });
      var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

      var getSortCompare = function getSortCompare(comparefn) {
        return function (x, y) {
          if (y === undefined) return -1;
          if (x === undefined) return 1;
          if (comparefn !== undefined) return +comparefn(x, y) || 0;
          return toString(x) > toString(y) ? 1 : -1;
        };
      }; // `Array.prototype.sort` method
      // https://tc39.es/ecma262/#sec-array.prototype.sort


      $({
        target: 'Array',
        proto: true,
        forced: FORCED
      }, {
        sort: function sort(comparefn) {
          if (comparefn !== undefined) aFunction(comparefn);
          var array = toObject(this);
          if (STABLE_SORT) return comparefn === undefined ? nativeSort.call(array) : nativeSort.call(array, comparefn);
          var items = [];
          var arrayLength = toLength(array.length);
          var itemsLength, index;

          for (index = 0; index < arrayLength; index++) {
            if (index in array) items.push(array[index]);
          }

          items = internalSort(items, getSortCompare(comparefn));
          itemsLength = items.length;
          index = 0;

          while (index < itemsLength) {
            array[index] = items[index++];
          }

          while (index < arrayLength) {
            delete array[index++];
          }

          return array;
        }
      });
      /***/
    },

    /***/
    746:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.array.splice.js ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var toAbsoluteIndex = __webpack_require__(
      /*! ../internals/to-absolute-index */
      9625);

      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      4497);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var arraySpeciesCreate = __webpack_require__(
      /*! ../internals/array-species-create */
      3784);

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      2966);

      var arrayMethodHasSpeciesSupport = __webpack_require__(
      /*! ../internals/array-method-has-species-support */
      7795);

      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
      var max = Math.max;
      var min = Math.min;
      var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
      var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
      // https://tc39.es/ecma262/#sec-array.prototype.splice
      // with adding support of @@species

      $({
        target: 'Array',
        proto: true,
        forced: !HAS_SPECIES_SUPPORT
      }, {
        splice: function splice(start, deleteCount
        /* , ...items */
        ) {
          var O = toObject(this);
          var len = toLength(O.length);
          var actualStart = toAbsoluteIndex(start, len);
          var argumentsLength = arguments.length;
          var insertCount, actualDeleteCount, A, k, from, to;

          if (argumentsLength === 0) {
            insertCount = actualDeleteCount = 0;
          } else if (argumentsLength === 1) {
            insertCount = 0;
            actualDeleteCount = len - actualStart;
          } else {
            insertCount = argumentsLength - 2;
            actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
          }

          if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
            throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
          }

          A = arraySpeciesCreate(O, actualDeleteCount);

          for (k = 0; k < actualDeleteCount; k++) {
            from = actualStart + k;
            if (from in O) createProperty(A, k, O[from]);
          }

          A.length = actualDeleteCount;

          if (insertCount < actualDeleteCount) {
            for (k = actualStart; k < len - actualDeleteCount; k++) {
              from = k + actualDeleteCount;
              to = k + insertCount;
              if (from in O) O[to] = O[from];else delete O[to];
            }

            for (k = len; k > len - actualDeleteCount + insertCount; k--) {
              delete O[k - 1];
            }
          } else if (insertCount > actualDeleteCount) {
            for (k = len - actualDeleteCount; k > actualStart; k--) {
              from = k + actualDeleteCount - 1;
              to = k + insertCount - 1;
              if (from in O) O[to] = O[from];else delete O[to];
            }
          }

          for (k = 0; k < insertCount; k++) {
            O[k + actualStart] = arguments[k + 2];
          }

          O.length = len - actualDeleteCount + insertCount;
          return A;
        }
      });
      /***/
    },

    /***/
    9707:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.date.get-year.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var FORCED = fails(function () {
        return new Date(16e11).getYear() !== 120;
      });
      var getFullYear = Date.prototype.getFullYear; // `Date.prototype.getYear` method
      // https://tc39.es/ecma262/#sec-date.prototype.getyear

      $({
        target: 'Date',
        proto: true,
        forced: FORCED
      }, {
        getYear: function getYear() {
          return getFullYear.call(this) - 1900;
        }
      });
      /***/
    },

    /***/
    8704:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.date.now.js ***!
      \************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301); // `Date.now` method
      // https://tc39.es/ecma262/#sec-date.now


      $({
        target: 'Date',
        stat: true
      }, {
        now: function now() {
          return new Date().getTime();
        }
      });
      /***/
    },

    /***/
    1304:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.date.set-year.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      4497);

      var getTime = Date.prototype.getTime;
      var setFullYear = Date.prototype.setFullYear; // `Date.prototype.setYear` method
      // https://tc39.es/ecma262/#sec-date.prototype.setyear

      $({
        target: 'Date',
        proto: true
      }, {
        setYear: function setYear(year) {
          // validate
          getTime.call(this);
          var yi = toInteger(year);
          var yyyy = 0 <= yi && yi <= 99 ? yi + 1900 : yi;
          return setFullYear.call(this, yyyy);
        }
      });
      /***/
    },

    /***/
    7564:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.date.to-gmt-string.js ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301); // `Date.prototype.toGMTString` method
      // https://tc39.es/ecma262/#sec-date.prototype.togmtstring


      $({
        target: 'Date',
        proto: true
      }, {
        toGMTString: Date.prototype.toUTCString
      });
      /***/
    },

    /***/
    843:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.date.to-iso-string.js ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var toISOString = __webpack_require__(
      /*! ../internals/date-to-iso-string */
      8601); // `Date.prototype.toISOString` method
      // https://tc39.es/ecma262/#sec-date.prototype.toisostring
      // PhantomJS / old WebKit has a broken implementations


      $({
        target: 'Date',
        proto: true,
        forced: Date.prototype.toISOString !== toISOString
      }, {
        toISOString: toISOString
      });
      /***/
    },

    /***/
    6951:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.date.to-json.js ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var toPrimitive = __webpack_require__(
      /*! ../internals/to-primitive */
      8673);

      var FORCED = fails(function () {
        return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
          toISOString: function toISOString() {
            return 1;
          }
        }) !== 1;
      }); // `Date.prototype.toJSON` method
      // https://tc39.es/ecma262/#sec-date.prototype.tojson

      $({
        target: 'Date',
        proto: true,
        forced: FORCED
      }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        toJSON: function toJSON(key) {
          var O = toObject(this);
          var pv = toPrimitive(O, 'number');
          return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
        }
      });
      /***/
    },

    /***/
    7201:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.date.to-primitive.js ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      7176);

      var dateToPrimitive = __webpack_require__(
      /*! ../internals/date-to-primitive */
      123);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
      var DatePrototype = Date.prototype; // `Date.prototype[@@toPrimitive]` method
      // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive

      if (!(TO_PRIMITIVE in DatePrototype)) {
        createNonEnumerableProperty(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
      }
      /***/

    },

    /***/
    9075:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.date.to-string.js ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      1415);

      var DatePrototype = Date.prototype;
      var INVALID_DATE = 'Invalid Date';
      var TO_STRING = 'toString';
      var nativeDateToString = DatePrototype[TO_STRING];
      var getTime = DatePrototype.getTime; // `Date.prototype.toString` method
      // https://tc39.es/ecma262/#sec-date.prototype.tostring

      if (String(new Date(NaN)) != INVALID_DATE) {
        redefine(DatePrototype, TO_STRING, function toString() {
          var value = getTime.call(this); // eslint-disable-next-line no-self-compare -- NaN check

          return value === value ? nativeDateToString.call(this) : INVALID_DATE;
        });
      }
      /***/

    },

    /***/
    492:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.function.bind.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var bind = __webpack_require__(
      /*! ../internals/function-bind */
      4422); // `Function.prototype.bind` method
      // https://tc39.es/ecma262/#sec-function.prototype.bind


      $({
        target: 'Function',
        proto: true
      }, {
        bind: bind
      });
      /***/
    },

    /***/
    4469:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.function.has-instance.js ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      480);

      var getPrototypeOf = __webpack_require__(
      /*! ../internals/object-get-prototype-of */
      9515);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var HAS_INSTANCE = wellKnownSymbol('hasInstance');
      var FunctionPrototype = Function.prototype; // `Function.prototype[@@hasInstance]` method
      // https://tc39.es/ecma262/#sec-function.prototype-@@hasinstance

      if (!(HAS_INSTANCE in FunctionPrototype)) {
        definePropertyModule.f(FunctionPrototype, HAS_INSTANCE, {
          value: function value(O) {
            if (typeof this != 'function' || !isObject(O)) return false;
            if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

            while (O = getPrototypeOf(O)) {
              if (this.prototype === O) return true;
            }

            return false;
          }
        });
      }
      /***/

    },

    /***/
    1827:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.function.name.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      480).f;

      var FunctionPrototype = Function.prototype;
      var FunctionPrototypeToString = FunctionPrototype.toString;
      var nameRE = /^\s*function ([^ (]*)/;
      var NAME = 'name'; // Function instances `.name` property
      // https://tc39.es/ecma262/#sec-function-instances-name

      if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
        defineProperty(FunctionPrototype, NAME, {
          configurable: true,
          get: function get() {
            try {
              return FunctionPrototypeToString.call(this).match(nameRE)[1];
            } catch (error) {
              return '';
            }
          }
        });
      }
      /***/

    },

    /***/
    3612:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.json.to-string-tag.js ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      489); // JSON[@@toStringTag] property
      // https://tc39.es/ecma262/#sec-json-@@tostringtag


      setToStringTag(global.JSON, 'JSON', true);
      /***/
    },

    /***/
    7732:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.map.js ***!
      \*******************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var collection = __webpack_require__(
      /*! ../internals/collection */
      3731);

      var collectionStrong = __webpack_require__(
      /*! ../internals/collection-strong */
      6342); // `Map` constructor
      // https://tc39.es/ecma262/#sec-map-objects


      module.exports = collection('Map', function (init) {
        return function Map() {
          return init(this, arguments.length ? arguments[0] : undefined);
        };
      }, collectionStrong);
      /***/
    },

    /***/
    3491:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.acosh.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var log1p = __webpack_require__(
      /*! ../internals/math-log1p */
      3572); // eslint-disable-next-line es/no-math-acosh -- required for testing


      var $acosh = Math.acosh;
      var log = Math.log;
      var sqrt = Math.sqrt;
      var LN2 = Math.LN2;
      var FORCED = !$acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
      || Math.floor($acosh(Number.MAX_VALUE)) != 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
      || $acosh(Infinity) != Infinity; // `Math.acosh` method
      // https://tc39.es/ecma262/#sec-math.acosh

      $({
        target: 'Math',
        stat: true,
        forced: FORCED
      }, {
        acosh: function acosh(x) {
          return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? log(x) + LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
        }
      });
      /***/
    },

    /***/
    5110:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.asinh.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301); // eslint-disable-next-line es/no-math-asinh -- required for testing


      var $asinh = Math.asinh;
      var log = Math.log;
      var sqrt = Math.sqrt;

      function asinh(x) {
        return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
      } // `Math.asinh` method
      // https://tc39.es/ecma262/#sec-math.asinh
      // Tor Browser bug: Math.asinh(0) -> -0


      $({
        target: 'Math',
        stat: true,
        forced: !($asinh && 1 / $asinh(0) > 0)
      }, {
        asinh: asinh
      });
      /***/
    },

    /***/
    4266:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.atanh.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301); // eslint-disable-next-line es/no-math-atanh -- required for testing


      var $atanh = Math.atanh;
      var log = Math.log; // `Math.atanh` method
      // https://tc39.es/ecma262/#sec-math.atanh
      // Tor Browser bug: Math.atanh(-0) -> 0

      $({
        target: 'Math',
        stat: true,
        forced: !($atanh && 1 / $atanh(-0) < 0)
      }, {
        atanh: function atanh(x) {
          return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
        }
      });
      /***/
    },

    /***/
    9353:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.cbrt.js ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var sign = __webpack_require__(
      /*! ../internals/math-sign */
      4900);

      var abs = Math.abs;
      var pow = Math.pow; // `Math.cbrt` method
      // https://tc39.es/ecma262/#sec-math.cbrt

      $({
        target: 'Math',
        stat: true
      }, {
        cbrt: function cbrt(x) {
          return sign(x = +x) * pow(abs(x), 1 / 3);
        }
      });
      /***/
    },

    /***/
    122:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.clz32.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var floor = Math.floor;
      var log = Math.log;
      var LOG2E = Math.LOG2E; // `Math.clz32` method
      // https://tc39.es/ecma262/#sec-math.clz32

      $({
        target: 'Math',
        stat: true
      }, {
        clz32: function clz32(x) {
          return (x >>>= 0) ? 31 - floor(log(x + 0.5) * LOG2E) : 32;
        }
      });
      /***/
    },

    /***/
    8733:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.cosh.js ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var expm1 = __webpack_require__(
      /*! ../internals/math-expm1 */
      7251); // eslint-disable-next-line es/no-math-cosh -- required for testing


      var $cosh = Math.cosh;
      var abs = Math.abs;
      var E = Math.E; // `Math.cosh` method
      // https://tc39.es/ecma262/#sec-math.cosh

      $({
        target: 'Math',
        stat: true,
        forced: !$cosh || $cosh(710) === Infinity
      }, {
        cosh: function cosh(x) {
          var t = expm1(abs(x) - 1) + 1;
          return (t + 1 / (t * E * E)) * (E / 2);
        }
      });
      /***/
    },

    /***/
    8910:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.expm1.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var expm1 = __webpack_require__(
      /*! ../internals/math-expm1 */
      7251); // `Math.expm1` method
      // https://tc39.es/ecma262/#sec-math.expm1
      // eslint-disable-next-line es/no-math-expm1 -- required for testing


      $({
        target: 'Math',
        stat: true,
        forced: expm1 != Math.expm1
      }, {
        expm1: expm1
      });
      /***/
    },

    /***/
    2783:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.fround.js ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fround = __webpack_require__(
      /*! ../internals/math-fround */
      9930); // `Math.fround` method
      // https://tc39.es/ecma262/#sec-math.fround


      $({
        target: 'Math',
        stat: true
      }, {
        fround: fround
      });
      /***/
    },

    /***/
    9739:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.hypot.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301); // eslint-disable-next-line es/no-math-hypot -- required for testing


      var $hypot = Math.hypot;
      var abs = Math.abs;
      var sqrt = Math.sqrt; // Chrome 77 bug
      // https://bugs.chromium.org/p/v8/issues/detail?id=9546

      var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity; // `Math.hypot` method
      // https://tc39.es/ecma262/#sec-math.hypot

      $({
        target: 'Math',
        stat: true,
        forced: BUGGY
      }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        hypot: function hypot(value1, value2) {
          var sum = 0;
          var i = 0;
          var aLen = arguments.length;
          var larg = 0;
          var arg, div;

          while (i < aLen) {
            arg = abs(arguments[i++]);

            if (larg < arg) {
              div = larg / arg;
              sum = sum * div * div + 1;
              larg = arg;
            } else if (arg > 0) {
              div = arg / larg;
              sum += div * div;
            } else sum += arg;
          }

          return larg === Infinity ? Infinity : larg * sqrt(sum);
        }
      });
      /***/
    },

    /***/
    9002:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.imul.js ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912); // eslint-disable-next-line es/no-math-imul -- required for testing


      var $imul = Math.imul;
      var FORCED = fails(function () {
        return $imul(0xFFFFFFFF, 5) != -5 || $imul.length != 2;
      }); // `Math.imul` method
      // https://tc39.es/ecma262/#sec-math.imul
      // some WebKit versions fails with big numbers, some has wrong arity

      $({
        target: 'Math',
        stat: true,
        forced: FORCED
      }, {
        imul: function imul(x, y) {
          var UINT16 = 0xFFFF;
          var xn = +x;
          var yn = +y;
          var xl = UINT16 & xn;
          var yl = UINT16 & yn;
          return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
        }
      });
      /***/
    },

    /***/
    9544:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.log10.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var log = Math.log;
      var LOG10E = Math.LOG10E; // `Math.log10` method
      // https://tc39.es/ecma262/#sec-math.log10

      $({
        target: 'Math',
        stat: true
      }, {
        log10: function log10(x) {
          return log(x) * LOG10E;
        }
      });
      /***/
    },

    /***/
    2395:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.log1p.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var log1p = __webpack_require__(
      /*! ../internals/math-log1p */
      3572); // `Math.log1p` method
      // https://tc39.es/ecma262/#sec-math.log1p


      $({
        target: 'Math',
        stat: true
      }, {
        log1p: log1p
      });
      /***/
    },

    /***/
    6681:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.log2.js ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var log = Math.log;
      var LN2 = Math.LN2; // `Math.log2` method
      // https://tc39.es/ecma262/#sec-math.log2

      $({
        target: 'Math',
        stat: true
      }, {
        log2: function log2(x) {
          return log(x) / LN2;
        }
      });
      /***/
    },

    /***/
    4961:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.sign.js ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var sign = __webpack_require__(
      /*! ../internals/math-sign */
      4900); // `Math.sign` method
      // https://tc39.es/ecma262/#sec-math.sign


      $({
        target: 'Math',
        stat: true
      }, {
        sign: sign
      });
      /***/
    },

    /***/
    8092:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.sinh.js ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var expm1 = __webpack_require__(
      /*! ../internals/math-expm1 */
      7251);

      var abs = Math.abs;
      var exp = Math.exp;
      var E = Math.E;
      var FORCED = fails(function () {
        // eslint-disable-next-line es/no-math-sinh -- required for testing
        return Math.sinh(-2e-17) != -2e-17;
      }); // `Math.sinh` method
      // https://tc39.es/ecma262/#sec-math.sinh
      // V8 near Chromium 38 has a problem with very small numbers

      $({
        target: 'Math',
        stat: true,
        forced: FORCED
      }, {
        sinh: function sinh(x) {
          return abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
        }
      });
      /***/
    },

    /***/
    2394:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.tanh.js ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var expm1 = __webpack_require__(
      /*! ../internals/math-expm1 */
      7251);

      var exp = Math.exp; // `Math.tanh` method
      // https://tc39.es/ecma262/#sec-math.tanh

      $({
        target: 'Math',
        stat: true
      }, {
        tanh: function tanh(x) {
          var a = expm1(x = +x);
          var b = expm1(-x);
          return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
        }
      });
      /***/
    },

    /***/
    3296:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.to-string-tag.js ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      489); // Math[@@toStringTag] property
      // https://tc39.es/ecma262/#sec-math-@@tostringtag


      setToStringTag(Math, 'Math', true);
      /***/
    },

    /***/
    3773:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.math.trunc.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var ceil = Math.ceil;
      var floor = Math.floor; // `Math.trunc` method
      // https://tc39.es/ecma262/#sec-math.trunc

      $({
        target: 'Math',
        stat: true
      }, {
        trunc: function trunc(it) {
          return (it > 0 ? floor : ceil)(it);
        }
      });
      /***/
    },

    /***/
    4200:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.number.constructor.js ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var isForced = __webpack_require__(
      /*! ../internals/is-forced */
      2263);

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      1415);

      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var classof = __webpack_require__(
      /*! ../internals/classof-raw */
      164);

      var inheritIfRequired = __webpack_require__(
      /*! ../internals/inherit-if-required */
      4939);

      var isSymbol = __webpack_require__(
      /*! ../internals/is-symbol */
      3071);

      var toPrimitive = __webpack_require__(
      /*! ../internals/to-primitive */
      8673);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var create = __webpack_require__(
      /*! ../internals/object-create */
      7593);

      var getOwnPropertyNames = __webpack_require__(
      /*! ../internals/object-get-own-property-names */
      9740).f;

      var getOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      1867).f;

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      480).f;

      var trim = __webpack_require__(
      /*! ../internals/string-trim */
      5940).trim;

      var NUMBER = 'Number';
      var NativeNumber = global[NUMBER];
      var NumberPrototype = NativeNumber.prototype; // Opera ~12 has broken Object#toString

      var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER; // `ToNumber` abstract operation
      // https://tc39.es/ecma262/#sec-tonumber

      var toNumber = function toNumber(argument) {
        if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a number');
        var it = toPrimitive(argument, 'number');
        var first, third, radix, maxCode, digits, length, index, code;

        if (typeof it == 'string' && it.length > 2) {
          it = trim(it);
          first = it.charCodeAt(0);

          if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
          } else if (first === 48) {
            switch (it.charCodeAt(1)) {
              case 66:
              case 98:
                radix = 2;
                maxCode = 49;
                break;
              // fast equal of /^0b[01]+$/i

              case 79:
              case 111:
                radix = 8;
                maxCode = 55;
                break;
              // fast equal of /^0o[0-7]+$/i

              default:
                return +it;
            }

            digits = it.slice(2);
            length = digits.length;

            for (index = 0; index < length; index++) {
              code = digits.charCodeAt(index); // parseInt parses a string to a first unavailable symbol
              // but ToNumber should return NaN if a string contains unavailable symbols

              if (code < 48 || code > maxCode) return NaN;
            }

            return parseInt(digits, radix);
          }
        }

        return +it;
      }; // `Number` constructor
      // https://tc39.es/ecma262/#sec-number-constructor


      if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
        var NumberWrapper = function Number(value) {
          var it = arguments.length < 1 ? 0 : value;
          var dummy = this;
          return dummy instanceof NumberWrapper // check on 1..constructor(foo) case
          && (BROKEN_CLASSOF ? fails(function () {
            NumberPrototype.valueOf.call(dummy);
          }) : classof(dummy) != NUMBER) ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
        };

        for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : ( // ES3:
        'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
        'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' + // ESNext
        'fromString,range').split(','), j = 0, key; keys.length > j; j++) {
          if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
            defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
          }
        }

        NumberWrapper.prototype = NumberPrototype;
        NumberPrototype.constructor = NumberWrapper;
        redefine(global, NUMBER, NumberWrapper);
      }
      /***/

    },

    /***/
    4898:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.number.epsilon.js ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301); // `Number.EPSILON` constant
      // https://tc39.es/ecma262/#sec-number.epsilon


      $({
        target: 'Number',
        stat: true
      }, {
        EPSILON: Math.pow(2, -52)
      });
      /***/
    },

    /***/
    4815:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.number.is-finite.js ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var numberIsFinite = __webpack_require__(
      /*! ../internals/number-is-finite */
      6152); // `Number.isFinite` method
      // https://tc39.es/ecma262/#sec-number.isfinite


      $({
        target: 'Number',
        stat: true
      }, {
        isFinite: numberIsFinite
      });
      /***/
    },

    /***/
    3871:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.number.is-integer.js ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var isInteger = __webpack_require__(
      /*! ../internals/is-integer */
      2181); // `Number.isInteger` method
      // https://tc39.es/ecma262/#sec-number.isinteger


      $({
        target: 'Number',
        stat: true
      }, {
        isInteger: isInteger
      });
      /***/
    },

    /***/
    3342:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.number.is-nan.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301); // `Number.isNaN` method
      // https://tc39.es/ecma262/#sec-number.isnan


      $({
        target: 'Number',
        stat: true
      }, {
        isNaN: function isNaN(number) {
          // eslint-disable-next-line no-self-compare -- NaN check
          return number != number;
        }
      });
      /***/
    },

    /***/
    5304:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.number.is-safe-integer.js ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var isInteger = __webpack_require__(
      /*! ../internals/is-integer */
      2181);

      var abs = Math.abs; // `Number.isSafeInteger` method
      // https://tc39.es/ecma262/#sec-number.issafeinteger

      $({
        target: 'Number',
        stat: true
      }, {
        isSafeInteger: function isSafeInteger(number) {
          return isInteger(number) && abs(number) <= 0x1FFFFFFFFFFFFF;
        }
      });
      /***/
    },

    /***/
    5964:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.number.max-safe-integer.js ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301); // `Number.MAX_SAFE_INTEGER` constant
      // https://tc39.es/ecma262/#sec-number.max_safe_integer


      $({
        target: 'Number',
        stat: true
      }, {
        MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
      });
      /***/
    },

    /***/
    7671:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.number.min-safe-integer.js ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301); // `Number.MIN_SAFE_INTEGER` constant
      // https://tc39.es/ecma262/#sec-number.min_safe_integer


      $({
        target: 'Number',
        stat: true
      }, {
        MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF
      });
      /***/
    },

    /***/
    1998:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.number.parse-float.js ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var parseFloat = __webpack_require__(
      /*! ../internals/number-parse-float */
      8671); // `Number.parseFloat` method
      // https://tc39.es/ecma262/#sec-number.parseFloat
      // eslint-disable-next-line es/no-number-parsefloat -- required for testing


      $({
        target: 'Number',
        stat: true,
        forced: Number.parseFloat != parseFloat
      }, {
        parseFloat: parseFloat
      });
      /***/
    },

    /***/
    7902:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.number.parse-int.js ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var parseInt = __webpack_require__(
      /*! ../internals/number-parse-int */
      5281); // `Number.parseInt` method
      // https://tc39.es/ecma262/#sec-number.parseint
      // eslint-disable-next-line es/no-number-parseint -- required for testing


      $({
        target: 'Number',
        stat: true,
        forced: Number.parseInt != parseInt
      }, {
        parseInt: parseInt
      });
      /***/
    },

    /***/
    3741:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.number.to-fixed.js ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      4497);

      var thisNumberValue = __webpack_require__(
      /*! ../internals/this-number-value */
      4654);

      var repeat = __webpack_require__(
      /*! ../internals/string-repeat */
      3680);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var nativeToFixed = 1.0.toFixed;
      var floor = Math.floor;

      var pow = function pow(x, n, acc) {
        return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
      };

      var log = function log(x) {
        var n = 0;
        var x2 = x;

        while (x2 >= 4096) {
          n += 12;
          x2 /= 4096;
        }

        while (x2 >= 2) {
          n += 1;
          x2 /= 2;
        }

        return n;
      };

      var multiply = function multiply(data, n, c) {
        var index = -1;
        var c2 = c;

        while (++index < 6) {
          c2 += n * data[index];
          data[index] = c2 % 1e7;
          c2 = floor(c2 / 1e7);
        }
      };

      var divide = function divide(data, n) {
        var index = 6;
        var c = 0;

        while (--index >= 0) {
          c += data[index];
          data[index] = floor(c / n);
          c = c % n * 1e7;
        }
      };

      var dataToString = function dataToString(data) {
        var index = 6;
        var s = '';

        while (--index >= 0) {
          if (s !== '' || index === 0 || data[index] !== 0) {
            var t = String(data[index]);
            s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
          }
        }

        return s;
      };

      var FORCED = nativeToFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !fails(function () {
        // V8 ~ Android 4.3-
        nativeToFixed.call({});
      }); // `Number.prototype.toFixed` method
      // https://tc39.es/ecma262/#sec-number.prototype.tofixed

      $({
        target: 'Number',
        proto: true,
        forced: FORCED
      }, {
        toFixed: function toFixed(fractionDigits) {
          var number = thisNumberValue(this);
          var fractDigits = toInteger(fractionDigits);
          var data = [0, 0, 0, 0, 0, 0];
          var sign = '';
          var result = '0';
          var e, z, j, k;
          if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare -- NaN check

          if (number != number) return 'NaN';
          if (number <= -1e21 || number >= 1e21) return String(number);

          if (number < 0) {
            sign = '-';
            number = -number;
          }

          if (number > 1e-21) {
            e = log(number * pow(2, 69, 1)) - 69;
            z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
            z *= 0x10000000000000;
            e = 52 - e;

            if (e > 0) {
              multiply(data, 0, z);
              j = fractDigits;

              while (j >= 7) {
                multiply(data, 1e7, 0);
                j -= 7;
              }

              multiply(data, pow(10, j, 1), 0);
              j = e - 1;

              while (j >= 23) {
                divide(data, 1 << 23);
                j -= 23;
              }

              divide(data, 1 << j);
              multiply(data, 1, 1);
              divide(data, 2);
              result = dataToString(data);
            } else {
              multiply(data, 0, z);
              multiply(data, 1 << -e, 0);
              result = dataToString(data) + repeat.call('0', fractDigits);
            }
          }

          if (fractDigits > 0) {
            k = result.length;
            result = sign + (k <= fractDigits ? '0.' + repeat.call('0', fractDigits - k) + result : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
          } else {
            result = sign + result;
          }

          return result;
        }
      });
      /***/
    },

    /***/
    1246:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.number.to-precision.js ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var thisNumberValue = __webpack_require__(
      /*! ../internals/this-number-value */
      4654);

      var nativeToPrecision = 1.0.toPrecision;
      var FORCED = fails(function () {
        // IE7-
        return nativeToPrecision.call(1, undefined) !== '1';
      }) || !fails(function () {
        // V8 ~ Android 4.3-
        nativeToPrecision.call({});
      }); // `Number.prototype.toPrecision` method
      // https://tc39.es/ecma262/#sec-number.prototype.toprecision

      $({
        target: 'Number',
        proto: true,
        forced: FORCED
      }, {
        toPrecision: function toPrecision(precision) {
          return precision === undefined ? nativeToPrecision.call(thisNumberValue(this)) : nativeToPrecision.call(thisNumberValue(this), precision);
        }
      });
      /***/
    },

    /***/
    6802:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.assign.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var assign = __webpack_require__(
      /*! ../internals/object-assign */
      1235); // `Object.assign` method
      // https://tc39.es/ecma262/#sec-object.assign
      // eslint-disable-next-line es/no-object-assign -- required for testing


      $({
        target: 'Object',
        stat: true,
        forced: Object.assign !== assign
      }, {
        assign: assign
      });
      /***/
    },

    /***/
    5983:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.create.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var create = __webpack_require__(
      /*! ../internals/object-create */
      7593); // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create


      $({
        target: 'Object',
        stat: true,
        sham: !DESCRIPTORS
      }, {
        create: create
      });
      /***/
    },

    /***/
    8932:
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.define-properties.js ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var defineProperties = __webpack_require__(
      /*! ../internals/object-define-properties */
      6624); // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties


      $({
        target: 'Object',
        stat: true,
        forced: !DESCRIPTORS,
        sham: !DESCRIPTORS
      }, {
        defineProperties: defineProperties
      });
      /***/
    },

    /***/
    4404:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.define-property.js ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var objectDefinePropertyModile = __webpack_require__(
      /*! ../internals/object-define-property */
      480); // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty


      $({
        target: 'Object',
        stat: true,
        forced: !DESCRIPTORS,
        sham: !DESCRIPTORS
      }, {
        defineProperty: objectDefinePropertyModile.f
      });
      /***/
    },

    /***/
    7673:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.entries.js ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var $entries = __webpack_require__(
      /*! ../internals/object-to-array */
      1421).entries; // `Object.entries` method
      // https://tc39.es/ecma262/#sec-object.entries


      $({
        target: 'Object',
        stat: true
      }, {
        entries: function entries(O) {
          return $entries(O);
        }
      });
      /***/
    },

    /***/
    6637:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.freeze.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var FREEZING = __webpack_require__(
      /*! ../internals/freezing */
      2477);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var onFreeze = __webpack_require__(
      /*! ../internals/internal-metadata */
      4860).onFreeze; // eslint-disable-next-line es/no-object-freeze -- safe


      var $freeze = Object.freeze;
      var FAILS_ON_PRIMITIVES = fails(function () {
        $freeze(1);
      }); // `Object.freeze` method
      // https://tc39.es/ecma262/#sec-object.freeze

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES,
        sham: !FREEZING
      }, {
        freeze: function freeze(it) {
          return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
        }
      });
      /***/
    },

    /***/
    6042:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.from-entries.js ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var iterate = __webpack_require__(
      /*! ../internals/iterate */
      3598);

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      2966); // `Object.fromEntries` method
      // https://github.com/tc39/proposal-object-from-entries


      $({
        target: 'Object',
        stat: true
      }, {
        fromEntries: function fromEntries(iterable) {
          var obj = {};
          iterate(iterable, function (k, v) {
            createProperty(obj, k, v);
          }, {
            AS_ENTRIES: true
          });
          return obj;
        }
      });
      /***/
    },

    /***/
    3229:
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
      \**************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      6076);

      var nativeGetOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      1867).f;

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var FAILS_ON_PRIMITIVES = fails(function () {
        nativeGetOwnPropertyDescriptor(1);
      });
      var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES; // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

      $({
        target: 'Object',
        stat: true,
        forced: FORCED,
        sham: !DESCRIPTORS
      }, {
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
          return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
        }
      });
      /***/
    },

    /***/
    7177:
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var ownKeys = __webpack_require__(
      /*! ../internals/own-keys */
      3670);

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      6076);

      var getOwnPropertyDescriptorModule = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      1867);

      var createProperty = __webpack_require__(
      /*! ../internals/create-property */
      2966); // `Object.getOwnPropertyDescriptors` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors


      $({
        target: 'Object',
        stat: true,
        sham: !DESCRIPTORS
      }, {
        getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
          var O = toIndexedObject(object);
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          var keys = ownKeys(O);
          var result = {};
          var index = 0;
          var key, descriptor;

          while (keys.length > index) {
            descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
            if (descriptor !== undefined) createProperty(result, key, descriptor);
          }

          return result;
        }
      });
      /***/
    },

    /***/
    4018:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.get-own-property-names.js ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var getOwnPropertyNames = __webpack_require__(
      /*! ../internals/object-get-own-property-names-external */
      863).f; // eslint-disable-next-line es/no-object-getownpropertynames -- required for testing


      var FAILS_ON_PRIMITIVES = fails(function () {
        return !Object.getOwnPropertyNames(1);
      }); // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES
      }, {
        getOwnPropertyNames: getOwnPropertyNames
      });
      /***/
    },

    /***/
    9525:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.get-prototype-of.js ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var nativeGetPrototypeOf = __webpack_require__(
      /*! ../internals/object-get-prototype-of */
      9515);

      var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
      /*! ../internals/correct-prototype-getter */
      8175);

      var FAILS_ON_PRIMITIVES = fails(function () {
        nativeGetPrototypeOf(1);
      }); // `Object.getPrototypeOf` method
      // https://tc39.es/ecma262/#sec-object.getprototypeof

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES,
        sham: !CORRECT_PROTOTYPE_GETTER
      }, {
        getPrototypeOf: function getPrototypeOf(it) {
          return nativeGetPrototypeOf(toObject(it));
        }
      });
      /***/
    },

    /***/
    4690:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.is-extensible.js ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743); // eslint-disable-next-line es/no-object-isextensible -- safe


      var $isExtensible = Object.isExtensible;
      var FAILS_ON_PRIMITIVES = fails(function () {
        $isExtensible(1);
      }); // `Object.isExtensible` method
      // https://tc39.es/ecma262/#sec-object.isextensible

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES
      }, {
        isExtensible: function isExtensible(it) {
          return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
        }
      });
      /***/
    },

    /***/
    1295:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.is-frozen.js ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743); // eslint-disable-next-line es/no-object-isfrozen -- safe


      var $isFrozen = Object.isFrozen;
      var FAILS_ON_PRIMITIVES = fails(function () {
        $isFrozen(1);
      }); // `Object.isFrozen` method
      // https://tc39.es/ecma262/#sec-object.isfrozen

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES
      }, {
        isFrozen: function isFrozen(it) {
          return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
        }
      });
      /***/
    },

    /***/
    1287:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.is-sealed.js ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743); // eslint-disable-next-line es/no-object-issealed -- safe


      var $isSealed = Object.isSealed;
      var FAILS_ON_PRIMITIVES = fails(function () {
        $isSealed(1);
      }); // `Object.isSealed` method
      // https://tc39.es/ecma262/#sec-object.issealed

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES
      }, {
        isSealed: function isSealed(it) {
          return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
        }
      });
      /***/
    },

    /***/
    3046:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.is.js ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var is = __webpack_require__(
      /*! ../internals/same-value */
      3471); // `Object.is` method
      // https://tc39.es/ecma262/#sec-object.is


      $({
        target: 'Object',
        stat: true
      }, {
        is: is
      });
      /***/
    },

    /***/
    6650:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.keys.js ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var nativeKeys = __webpack_require__(
      /*! ../internals/object-keys */
      2087);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var FAILS_ON_PRIMITIVES = fails(function () {
        nativeKeys(1);
      }); // `Object.keys` method
      // https://tc39.es/ecma262/#sec-object.keys

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES
      }, {
        keys: function keys(it) {
          return nativeKeys(toObject(it));
        }
      });
      /***/
    },

    /***/
    382:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.prevent-extensions.js ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var onFreeze = __webpack_require__(
      /*! ../internals/internal-metadata */
      4860).onFreeze;

      var FREEZING = __webpack_require__(
      /*! ../internals/freezing */
      2477);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912); // eslint-disable-next-line es/no-object-preventextensions -- safe


      var $preventExtensions = Object.preventExtensions;
      var FAILS_ON_PRIMITIVES = fails(function () {
        $preventExtensions(1);
      }); // `Object.preventExtensions` method
      // https://tc39.es/ecma262/#sec-object.preventextensions

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES,
        sham: !FREEZING
      }, {
        preventExtensions: function preventExtensions(it) {
          return $preventExtensions && isObject(it) ? $preventExtensions(onFreeze(it)) : it;
        }
      });
      /***/
    },

    /***/
    9662:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.seal.js ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var onFreeze = __webpack_require__(
      /*! ../internals/internal-metadata */
      4860).onFreeze;

      var FREEZING = __webpack_require__(
      /*! ../internals/freezing */
      2477);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912); // eslint-disable-next-line es/no-object-seal -- safe


      var $seal = Object.seal;
      var FAILS_ON_PRIMITIVES = fails(function () {
        $seal(1);
      }); // `Object.seal` method
      // https://tc39.es/ecma262/#sec-object.seal

      $({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES,
        sham: !FREEZING
      }, {
        seal: function seal(it) {
          return $seal && isObject(it) ? $seal(onFreeze(it)) : it;
        }
      });
      /***/
    },

    /***/
    6803:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.set-prototype-of.js ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var setPrototypeOf = __webpack_require__(
      /*! ../internals/object-set-prototype-of */
      2060); // `Object.setPrototypeOf` method
      // https://tc39.es/ecma262/#sec-object.setprototypeof


      $({
        target: 'Object',
        stat: true
      }, {
        setPrototypeOf: setPrototypeOf
      });
      /***/
    },

    /***/
    4405:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.to-string.js ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var TO_STRING_TAG_SUPPORT = __webpack_require__(
      /*! ../internals/to-string-tag-support */
      9584);

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      1415);

      var toString = __webpack_require__(
      /*! ../internals/object-to-string */
      9051); // `Object.prototype.toString` method
      // https://tc39.es/ecma262/#sec-object.prototype.tostring


      if (!TO_STRING_TAG_SUPPORT) {
        redefine(Object.prototype, 'toString', toString, {
          unsafe: true
        });
      }
      /***/

    },

    /***/
    2322:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.object.values.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var $values = __webpack_require__(
      /*! ../internals/object-to-array */
      1421).values; // `Object.values` method
      // https://tc39.es/ecma262/#sec-object.values


      $({
        target: 'Object',
        stat: true
      }, {
        values: function values(O) {
          return $values(O);
        }
      });
      /***/
    },

    /***/
    3646:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.parse-float.js ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var parseFloatImplementation = __webpack_require__(
      /*! ../internals/number-parse-float */
      8671); // `parseFloat` method
      // https://tc39.es/ecma262/#sec-parsefloat-string


      $({
        global: true,
        forced: parseFloat != parseFloatImplementation
      }, {
        parseFloat: parseFloatImplementation
      });
      /***/
    },

    /***/
    840:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.parse-int.js ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var parseIntImplementation = __webpack_require__(
      /*! ../internals/number-parse-int */
      5281); // `parseInt` method
      // https://tc39.es/ecma262/#sec-parseint-string-radix


      $({
        global: true,
        forced: parseInt != parseIntImplementation
      }, {
        parseInt: parseIntImplementation
      });
      /***/
    },

    /***/
    3400:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.promise.js ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      3712);

      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      3077);

      var NativePromise = __webpack_require__(
      /*! ../internals/native-promise-constructor */
      8591);

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      1415);

      var redefineAll = __webpack_require__(
      /*! ../internals/redefine-all */
      4151);

      var setPrototypeOf = __webpack_require__(
      /*! ../internals/object-set-prototype-of */
      2060);

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      489);

      var setSpecies = __webpack_require__(
      /*! ../internals/set-species */
      6481);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var aFunction = __webpack_require__(
      /*! ../internals/a-function */
      171);

      var anInstance = __webpack_require__(
      /*! ../internals/an-instance */
      133);

      var inspectSource = __webpack_require__(
      /*! ../internals/inspect-source */
      172);

      var iterate = __webpack_require__(
      /*! ../internals/iterate */
      3598);

      var checkCorrectnessOfIteration = __webpack_require__(
      /*! ../internals/check-correctness-of-iteration */
      4533);

      var speciesConstructor = __webpack_require__(
      /*! ../internals/species-constructor */
      6795);

      var task = __webpack_require__(
      /*! ../internals/task */
      918).set;

      var microtask = __webpack_require__(
      /*! ../internals/microtask */
      5669);

      var promiseResolve = __webpack_require__(
      /*! ../internals/promise-resolve */
      7967);

      var hostReportErrors = __webpack_require__(
      /*! ../internals/host-report-errors */
      7365);

      var newPromiseCapabilityModule = __webpack_require__(
      /*! ../internals/new-promise-capability */
      4495);

      var perform = __webpack_require__(
      /*! ../internals/perform */
      5280);

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      8593);

      var isForced = __webpack_require__(
      /*! ../internals/is-forced */
      2263);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var IS_BROWSER = __webpack_require__(
      /*! ../internals/engine-is-browser */
      2830);

      var IS_NODE = __webpack_require__(
      /*! ../internals/engine-is-node */
      1951);

      var V8_VERSION = __webpack_require__(
      /*! ../internals/engine-v8-version */
      8630);

      var SPECIES = wellKnownSymbol('species');
      var PROMISE = 'Promise';
      var getInternalState = InternalStateModule.get;
      var setInternalState = InternalStateModule.set;
      var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
      var NativePromisePrototype = NativePromise && NativePromise.prototype;
      var PromiseConstructor = NativePromise;
      var PromiseConstructorPrototype = NativePromisePrototype;
      var TypeError = global.TypeError;
      var document = global.document;
      var process = global.process;
      var newPromiseCapability = newPromiseCapabilityModule.f;
      var newGenericPromiseCapability = newPromiseCapability;
      var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
      var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
      var UNHANDLED_REJECTION = 'unhandledrejection';
      var REJECTION_HANDLED = 'rejectionhandled';
      var PENDING = 0;
      var FULFILLED = 1;
      var REJECTED = 2;
      var HANDLED = 1;
      var UNHANDLED = 2;
      var SUBCLASSING = false;
      var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
      var FORCED = isForced(PROMISE, function () {
        var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
        var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor); // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
        // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
        // We can't detect it synchronously, so just check versions

        if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true; // We need Promise#finally in the pure version for preventing prototype pollution

        if (IS_PURE && !PromiseConstructorPrototype['finally']) return true; // We can't use @@species feature detection in V8 since it causes
        // deoptimization and performance degradation
        // https://github.com/zloirock/core-js/issues/679

        if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false; // Detect correctness of subclassing with @@species support

        var promise = new PromiseConstructor(function (resolve) {
          resolve(1);
        });

        var FakePromise = function FakePromise(exec) {
          exec(function () {
            /* empty */
          }, function () {
            /* empty */
          });
        };

        var constructor = promise.constructor = {};
        constructor[SPECIES] = FakePromise;
        SUBCLASSING = promise.then(function () {
          /* empty */
        }) instanceof FakePromise;
        if (!SUBCLASSING) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

        return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
      });
      var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
        PromiseConstructor.all(iterable)['catch'](function () {
          /* empty */
        });
      }); // helpers

      var isThenable = function isThenable(it) {
        var then;
        return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
      };

      var notify = function notify(state, isReject) {
        if (state.notified) return;
        state.notified = true;
        var chain = state.reactions;
        microtask(function () {
          var value = state.value;
          var ok = state.state == FULFILLED;
          var index = 0; // variable length - can't use forEach

          while (chain.length > index) {
            var reaction = chain[index++];
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;

            try {
              if (handler) {
                if (!ok) {
                  if (state.rejection === UNHANDLED) onHandleUnhandled(state);
                  state.rejection = HANDLED;
                }

                if (handler === true) result = value;else {
                  if (domain) domain.enter();
                  result = handler(value); // can throw

                  if (domain) {
                    domain.exit();
                    exited = true;
                  }
                }

                if (result === reaction.promise) {
                  reject(TypeError('Promise-chain cycle'));
                } else if (then = isThenable(result)) {
                  then.call(result, resolve, reject);
                } else resolve(result);
              } else reject(value);
            } catch (error) {
              if (domain && !exited) domain.exit();
              reject(error);
            }
          }

          state.reactions = [];
          state.notified = false;
          if (isReject && !state.rejection) onUnhandled(state);
        });
      };

      var dispatchEvent = function dispatchEvent(name, promise, reason) {
        var event, handler;

        if (DISPATCH_EVENT) {
          event = document.createEvent('Event');
          event.promise = promise;
          event.reason = reason;
          event.initEvent(name, false, true);
          global.dispatchEvent(event);
        } else event = {
          promise: promise,
          reason: reason
        };

        if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
      };

      var onUnhandled = function onUnhandled(state) {
        task.call(global, function () {
          var promise = state.facade;
          var value = state.value;
          var IS_UNHANDLED = isUnhandled(state);
          var result;

          if (IS_UNHANDLED) {
            result = perform(function () {
              if (IS_NODE) {
                process.emit('unhandledRejection', value, promise);
              } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
            }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

            state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
          }
        });
      };

      var isUnhandled = function isUnhandled(state) {
        return state.rejection !== HANDLED && !state.parent;
      };

      var onHandleUnhandled = function onHandleUnhandled(state) {
        task.call(global, function () {
          var promise = state.facade;

          if (IS_NODE) {
            process.emit('rejectionHandled', promise);
          } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
        });
      };

      var bind = function bind(fn, state, unwrap) {
        return function (value) {
          fn(state, value, unwrap);
        };
      };

      var internalReject = function internalReject(state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        state.value = value;
        state.state = REJECTED;
        notify(state, true);
      };

      var internalResolve = function internalResolve(state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;

        try {
          if (state.facade === value) throw TypeError("Promise can't be resolved itself");
          var then = isThenable(value);

          if (then) {
            microtask(function () {
              var wrapper = {
                done: false
              };

              try {
                then.call(value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
              } catch (error) {
                internalReject(wrapper, error, state);
              }
            });
          } else {
            state.value = value;
            state.state = FULFILLED;
            notify(state, false);
          }
        } catch (error) {
          internalReject({
            done: false
          }, error, state);
        }
      }; // constructor polyfill


      if (FORCED) {
        // 25.4.3.1 Promise(executor)
        PromiseConstructor = function Promise(executor) {
          anInstance(this, PromiseConstructor, PROMISE);
          aFunction(executor);
          Internal.call(this);
          var state = getInternalState(this);

          try {
            executor(bind(internalResolve, state), bind(internalReject, state));
          } catch (error) {
            internalReject(state, error);
          }
        };

        PromiseConstructorPrototype = PromiseConstructor.prototype; // eslint-disable-next-line no-unused-vars -- required for `.length`

        Internal = function Promise(executor) {
          setInternalState(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: [],
            rejection: false,
            state: PENDING,
            value: undefined
          });
        };

        Internal.prototype = redefineAll(PromiseConstructorPrototype, {
          // `Promise.prototype.then` method
          // https://tc39.es/ecma262/#sec-promise.prototype.then
          then: function then(onFulfilled, onRejected) {
            var state = getInternalPromiseState(this);
            var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
            reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected == 'function' && onRejected;
            reaction.domain = IS_NODE ? process.domain : undefined;
            state.parent = true;
            state.reactions.push(reaction);
            if (state.state != PENDING) notify(state, false);
            return reaction.promise;
          },
          // `Promise.prototype.catch` method
          // https://tc39.es/ecma262/#sec-promise.prototype.catch
          'catch': function _catch(onRejected) {
            return this.then(undefined, onRejected);
          }
        });

        OwnPromiseCapability = function OwnPromiseCapability() {
          var promise = new Internal();
          var state = getInternalState(promise);
          this.promise = promise;
          this.resolve = bind(internalResolve, state);
          this.reject = bind(internalReject, state);
        };

        newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
          return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
        };

        if (!IS_PURE && typeof NativePromise == 'function' && NativePromisePrototype !== Object.prototype) {
          nativeThen = NativePromisePrototype.then;

          if (!SUBCLASSING) {
            // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
            redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
              var that = this;
              return new PromiseConstructor(function (resolve, reject) {
                nativeThen.call(that, resolve, reject);
              }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
            }, {
              unsafe: true
            }); // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`

            redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], {
              unsafe: true
            });
          } // make `.constructor === Promise` work for native promise-based APIs


          try {
            delete NativePromisePrototype.constructor;
          } catch (error) {
            /* empty */
          } // make `instanceof Promise` work for native promise-based APIs


          if (setPrototypeOf) {
            setPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
          }
        }
      }

      $({
        global: true,
        wrap: true,
        forced: FORCED
      }, {
        Promise: PromiseConstructor
      });
      setToStringTag(PromiseConstructor, PROMISE, false, true);
      setSpecies(PROMISE);
      PromiseWrapper = getBuiltIn(PROMISE); // statics

      $({
        target: PROMISE,
        stat: true,
        forced: FORCED
      }, {
        // `Promise.reject` method
        // https://tc39.es/ecma262/#sec-promise.reject
        reject: function reject(r) {
          var capability = newPromiseCapability(this);
          capability.reject.call(undefined, r);
          return capability.promise;
        }
      });
      $({
        target: PROMISE,
        stat: true,
        forced: IS_PURE || FORCED
      }, {
        // `Promise.resolve` method
        // https://tc39.es/ecma262/#sec-promise.resolve
        resolve: function resolve(x) {
          return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
        }
      });
      $({
        target: PROMISE,
        stat: true,
        forced: INCORRECT_ITERATION
      }, {
        // `Promise.all` method
        // https://tc39.es/ecma262/#sec-promise.all
        all: function all(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = perform(function () {
            var $promiseResolve = aFunction(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate(iterable, function (promise) {
              var index = counter++;
              var alreadyCalled = false;
              values.push(undefined);
              remaining++;
              $promiseResolve.call(C, promise).then(function (value) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.error) reject(result.value);
          return capability.promise;
        },
        // `Promise.race` method
        // https://tc39.es/ecma262/#sec-promise.race
        race: function race(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var reject = capability.reject;
          var result = perform(function () {
            var $promiseResolve = aFunction(C.resolve);
            iterate(iterable, function (promise) {
              $promiseResolve.call(C, promise).then(capability.resolve, reject);
            });
          });
          if (result.error) reject(result.value);
          return capability.promise;
        }
      });
      /***/
    },

    /***/
    6101:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.reflect.to-string-tag.js ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      489);

      $({
        global: true
      }, {
        Reflect: {}
      }); // Reflect[@@toStringTag] property
      // https://tc39.es/ecma262/#sec-reflect-@@tostringtag

      setToStringTag(global.Reflect, 'Reflect', true);
      /***/
    },

    /***/
    8600:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.regexp.constructor.js ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var isForced = __webpack_require__(
      /*! ../internals/is-forced */
      2263);

      var inheritIfRequired = __webpack_require__(
      /*! ../internals/inherit-if-required */
      4939);

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      7176);

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      480).f;

      var getOwnPropertyNames = __webpack_require__(
      /*! ../internals/object-get-own-property-names */
      9740).f;

      var isRegExp = __webpack_require__(
      /*! ../internals/is-regexp */
      4715);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var getFlags = __webpack_require__(
      /*! ../internals/regexp-flags */
      4276);

      var stickyHelpers = __webpack_require__(
      /*! ../internals/regexp-sticky-helpers */
      3085);

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      1415);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var enforceInternalState = __webpack_require__(
      /*! ../internals/internal-state */
      8593).enforce;

      var setSpecies = __webpack_require__(
      /*! ../internals/set-species */
      6481);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var UNSUPPORTED_DOT_ALL = __webpack_require__(
      /*! ../internals/regexp-unsupported-dot-all */
      936);

      var UNSUPPORTED_NCG = __webpack_require__(
      /*! ../internals/regexp-unsupported-ncg */
      6180);

      var MATCH = wellKnownSymbol('match');
      var NativeRegExp = global.RegExp;
      var RegExpPrototype = NativeRegExp.prototype; // TODO: Use only propper RegExpIdentifierName

      var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
      var re1 = /a/g;
      var re2 = /a/g; // "new" should create a new object, old webkit bug

      var CORRECT_NEW = new NativeRegExp(re1) !== re1;
      var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
      var BASE_FORCED = DESCRIPTORS && (!CORRECT_NEW || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
        re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

        return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
      }));

      var handleDotAll = function handleDotAll(string) {
        var length = string.length;
        var index = 0;
        var result = '';
        var brackets = false;
        var chr;

        for (; index <= length; index++) {
          chr = string.charAt(index);

          if (chr === '\\') {
            result += chr + string.charAt(++index);
            continue;
          }

          if (!brackets && chr === '.') {
            result += '[\\s\\S]';
          } else {
            if (chr === '[') {
              brackets = true;
            } else if (chr === ']') {
              brackets = false;
            }

            result += chr;
          }
        }

        return result;
      };

      var handleNCG = function handleNCG(string) {
        var length = string.length;
        var index = 0;
        var result = '';
        var named = [];
        var names = {};
        var brackets = false;
        var ncg = false;
        var groupid = 0;
        var groupname = '';
        var chr;

        for (; index <= length; index++) {
          chr = string.charAt(index);

          if (chr === '\\') {
            chr = chr + string.charAt(++index);
          } else if (chr === ']') {
            brackets = false;
          } else if (!brackets) switch (true) {
            case chr === '[':
              brackets = true;
              break;

            case chr === '(':
              if (IS_NCG.test(string.slice(index + 1))) {
                index += 2;
                ncg = true;
              }

              result += chr;
              groupid++;
              continue;

            case chr === '>' && ncg:
              if (groupname === '' || has(names, groupname)) {
                throw new SyntaxError('Invalid capture group name');
              }

              names[groupname] = true;
              named.push([groupname, groupid]);
              ncg = false;
              groupname = '';
              continue;
          }

          if (ncg) groupname += chr;else result += chr;
        }

        return [result, named];
      }; // `RegExp` constructor
      // https://tc39.es/ecma262/#sec-regexp-constructor


      if (isForced('RegExp', BASE_FORCED)) {
        var RegExpWrapper = function RegExp(pattern, flags) {
          var thisIsRegExp = this instanceof RegExpWrapper;
          var patternIsRegExp = isRegExp(pattern);
          var flagsAreUndefined = flags === undefined;
          var groups = [];
          var rawPattern = pattern;
          var rawFlags, dotAll, sticky, handled, result, state;

          if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
            return pattern;
          }

          if (patternIsRegExp || pattern instanceof RegExpWrapper) {
            pattern = pattern.source;
            if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags.call(rawPattern);
          }

          pattern = pattern === undefined ? '' : toString(pattern);
          flags = flags === undefined ? '' : toString(flags);
          rawPattern = pattern;

          if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
            dotAll = !!flags && flags.indexOf('s') > -1;
            if (dotAll) flags = flags.replace(/s/g, '');
          }

          rawFlags = flags;

          if (UNSUPPORTED_Y && 'sticky' in re1) {
            sticky = !!flags && flags.indexOf('y') > -1;
            if (sticky) flags = flags.replace(/y/g, '');
          }

          if (UNSUPPORTED_NCG) {
            handled = handleNCG(pattern);
            pattern = handled[0];
            groups = handled[1];
          }

          result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

          if (dotAll || sticky || groups.length) {
            state = enforceInternalState(result);

            if (dotAll) {
              state.dotAll = true;
              state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
            }

            if (sticky) state.sticky = true;
            if (groups.length) state.groups = groups;
          }

          if (pattern !== rawPattern) try {
            // fails in old engines, but we have no alternatives for unsupported regex syntax
            createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
          } catch (error) {
            /* empty */
          }
          return result;
        };

        var proxy = function proxy(key) {
          key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
            configurable: true,
            get: function get() {
              return NativeRegExp[key];
            },
            set: function set(it) {
              NativeRegExp[key] = it;
            }
          });
        };

        for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
          proxy(keys[index++]);
        }

        RegExpPrototype.constructor = RegExpWrapper;
        RegExpWrapper.prototype = RegExpPrototype;
        redefine(global, 'RegExp', RegExpWrapper);
      } // https://tc39.es/ecma262/#sec-get-regexp-@@species


      setSpecies('RegExp');
      /***/
    },

    /***/
    1027:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.regexp.exec.js ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var exec = __webpack_require__(
      /*! ../internals/regexp-exec */
      6193); // `RegExp.prototype.exec` method
      // https://tc39.es/ecma262/#sec-regexp.prototype.exec


      $({
        target: 'RegExp',
        proto: true,
        forced: /./.exec !== exec
      }, {
        exec: exec
      });
      /***/
    },

    /***/
    7332:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.regexp.flags.js ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var objectDefinePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      480);

      var regExpFlags = __webpack_require__(
      /*! ../internals/regexp-flags */
      4276);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var FORCED = DESCRIPTORS && fails(function () {
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        return Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call({
          dotAll: true,
          sticky: true
        }) !== 'sy';
      }); // `RegExp.prototype.flags` getter
      // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

      if (FORCED) objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
        configurable: true,
        get: regExpFlags
      });
      /***/
    },

    /***/
    2514:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.regexp.to-string.js ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      1415);

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var $toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var flags = __webpack_require__(
      /*! ../internals/regexp-flags */
      4276);

      var TO_STRING = 'toString';
      var RegExpPrototype = RegExp.prototype;
      var nativeToString = RegExpPrototype[TO_STRING];
      var NOT_GENERIC = fails(function () {
        return nativeToString.call({
          source: 'a',
          flags: 'b'
        }) != '/a/b';
      }); // FF44- RegExp#toString has a wrong name

      var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
      // https://tc39.es/ecma262/#sec-regexp.prototype.tostring

      if (NOT_GENERIC || INCORRECT_NAME) {
        redefine(RegExp.prototype, TO_STRING, function toString() {
          var R = anObject(this);
          var p = $toString(R.source);
          var rf = R.flags;
          var f = $toString(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
          return '/' + p + '/' + f;
        }, {
          unsafe: true
        });
      }
      /***/

    },

    /***/
    4118:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.set.js ***!
      \*******************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var collection = __webpack_require__(
      /*! ../internals/collection */
      3731);

      var collectionStrong = __webpack_require__(
      /*! ../internals/collection-strong */
      6342); // `Set` constructor
      // https://tc39.es/ecma262/#sec-set-objects


      module.exports = collection('Set', function (init) {
        return function Set() {
          return init(this, arguments.length ? arguments[0] : undefined);
        };
      }, collectionStrong);
      /***/
    },

    /***/
    7694:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.anchor.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      7772);

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      2304); // `String.prototype.anchor` method
      // https://tc39.es/ecma262/#sec-string.prototype.anchor


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('anchor')
      }, {
        anchor: function anchor(name) {
          return createHTML(this, 'a', 'name', name);
        }
      });
      /***/
    },

    /***/
    4623:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.big.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      7772);

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      2304); // `String.prototype.big` method
      // https://tc39.es/ecma262/#sec-string.prototype.big


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('big')
      }, {
        big: function big() {
          return createHTML(this, 'big', '', '');
        }
      });
      /***/
    },

    /***/
    2799:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.blink.js ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      7772);

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      2304); // `String.prototype.blink` method
      // https://tc39.es/ecma262/#sec-string.prototype.blink


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('blink')
      }, {
        blink: function blink() {
          return createHTML(this, 'blink', '', '');
        }
      });
      /***/
    },

    /***/
    976:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.bold.js ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      7772);

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      2304); // `String.prototype.bold` method
      // https://tc39.es/ecma262/#sec-string.prototype.bold


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('bold')
      }, {
        bold: function bold() {
          return createHTML(this, 'b', '', '');
        }
      });
      /***/
    },

    /***/
    2713:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.code-point-at.js ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var codeAt = __webpack_require__(
      /*! ../internals/string-multibyte */
      1663).codeAt; // `String.prototype.codePointAt` method
      // https://tc39.es/ecma262/#sec-string.prototype.codepointat


      $({
        target: 'String',
        proto: true
      }, {
        codePointAt: function codePointAt(pos) {
          return codeAt(this, pos);
        }
      });
      /***/
    },

    /***/
    4460:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.ends-with.js ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var getOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      1867).f;

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var notARegExp = __webpack_require__(
      /*! ../internals/not-a-regexp */
      7258);

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486);

      var correctIsRegExpLogic = __webpack_require__(
      /*! ../internals/correct-is-regexp-logic */
      2013);

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      3712); // eslint-disable-next-line es/no-string-prototype-endswith -- safe


      var $endsWith = ''.endsWith;
      var min = Math.min;
      var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('endsWith'); // https://github.com/zloirock/core-js/pull/702

      var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
        var descriptor = getOwnPropertyDescriptor(String.prototype, 'endsWith');
        return descriptor && !descriptor.writable;
      }(); // `String.prototype.endsWith` method
      // https://tc39.es/ecma262/#sec-string.prototype.endswith

      $({
        target: 'String',
        proto: true,
        forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
      }, {
        endsWith: function endsWith(searchString
        /* , endPosition = @length */
        ) {
          var that = toString(requireObjectCoercible(this));
          notARegExp(searchString);
          var endPosition = arguments.length > 1 ? arguments[1] : undefined;
          var len = toLength(that.length);
          var end = endPosition === undefined ? len : min(toLength(endPosition), len);
          var search = toString(searchString);
          return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
        }
      });
      /***/
    },

    /***/
    8491:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.fixed.js ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      7772);

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      2304); // `String.prototype.fixed` method
      // https://tc39.es/ecma262/#sec-string.prototype.fixed


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('fixed')
      }, {
        fixed: function fixed() {
          return createHTML(this, 'tt', '', '');
        }
      });
      /***/
    },

    /***/
    8937:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.fontcolor.js ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      7772);

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      2304); // `String.prototype.fontcolor` method
      // https://tc39.es/ecma262/#sec-string.prototype.fontcolor


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('fontcolor')
      }, {
        fontcolor: function fontcolor(color) {
          return createHTML(this, 'font', 'color', color);
        }
      });
      /***/
    },

    /***/
    9273:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.fontsize.js ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      7772);

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      2304); // `String.prototype.fontsize` method
      // https://tc39.es/ecma262/#sec-string.prototype.fontsize


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('fontsize')
      }, {
        fontsize: function fontsize(size) {
          return createHTML(this, 'font', 'size', size);
        }
      });
      /***/
    },

    /***/
    9019:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.from-code-point.js ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var toAbsoluteIndex = __webpack_require__(
      /*! ../internals/to-absolute-index */
      9625);

      var fromCharCode = String.fromCharCode; // eslint-disable-next-line es/no-string-fromcodepoint -- required for testing

      var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

      var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1; // `String.fromCodePoint` method
      // https://tc39.es/ecma262/#sec-string.fromcodepoint

      $({
        target: 'String',
        stat: true,
        forced: INCORRECT_LENGTH
      }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        fromCodePoint: function fromCodePoint(x) {
          var elements = [];
          var length = arguments.length;
          var i = 0;
          var code;

          while (length > i) {
            code = +arguments[i++];
            if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw RangeError(code + ' is not a valid code point');
            elements.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00));
          }

          return elements.join('');
        }
      });
      /***/
    },

    /***/
    4657:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.includes.js ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var notARegExp = __webpack_require__(
      /*! ../internals/not-a-regexp */
      7258);

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var correctIsRegExpLogic = __webpack_require__(
      /*! ../internals/correct-is-regexp-logic */
      2013); // `String.prototype.includes` method
      // https://tc39.es/ecma262/#sec-string.prototype.includes


      $({
        target: 'String',
        proto: true,
        forced: !correctIsRegExpLogic('includes')
      }, {
        includes: function includes(searchString
        /* , position = 0 */
        ) {
          return !!~toString(requireObjectCoercible(this)).indexOf(toString(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
        }
      });
      /***/
    },

    /***/
    9783:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.italics.js ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      7772);

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      2304); // `String.prototype.italics` method
      // https://tc39.es/ecma262/#sec-string.prototype.italics


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('italics')
      }, {
        italics: function italics() {
          return createHTML(this, 'i', '', '');
        }
      });
      /***/
    },

    /***/
    8780:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.iterator.js ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var charAt = __webpack_require__(
      /*! ../internals/string-multibyte */
      1663).charAt;

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      8593);

      var defineIterator = __webpack_require__(
      /*! ../internals/define-iterator */
      8020);

      var STRING_ITERATOR = 'String Iterator';
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
      // https://tc39.es/ecma262/#sec-string.prototype-@@iterator

      defineIterator(String, 'String', function (iterated) {
        setInternalState(this, {
          type: STRING_ITERATOR,
          string: toString(iterated),
          index: 0
        }); // `%StringIteratorPrototype%.next` method
        // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
      }, function next() {
        var state = getInternalState(this);
        var string = state.string;
        var index = state.index;
        var point;
        if (index >= string.length) return {
          value: undefined,
          done: true
        };
        point = charAt(string, index);
        state.index += point.length;
        return {
          value: point,
          done: false
        };
      });
      /***/
    },

    /***/
    895:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.link.js ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      7772);

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      2304); // `String.prototype.link` method
      // https://tc39.es/ecma262/#sec-string.prototype.link


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('link')
      }, {
        link: function link(url) {
          return createHTML(this, 'a', 'href', url);
        }
      });
      /***/
    },

    /***/
    8427:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.match.js ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var fixRegExpWellKnownSymbolLogic = __webpack_require__(
      /*! ../internals/fix-regexp-well-known-symbol-logic */
      4875);

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486);

      var advanceStringIndex = __webpack_require__(
      /*! ../internals/advance-string-index */
      4478);

      var regExpExec = __webpack_require__(
      /*! ../internals/regexp-exec-abstract */
      1714); // @@match logic


      fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
        return [// `String.prototype.match` method
        // https://tc39.es/ecma262/#sec-string.prototype.match
        function match(regexp) {
          var O = requireObjectCoercible(this);
          var matcher = regexp == undefined ? undefined : regexp[MATCH];
          return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](toString(O));
        }, // `RegExp.prototype[@@match]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
        function (string) {
          var rx = anObject(this);
          var S = toString(string);
          var res = maybeCallNative(nativeMatch, rx, S);
          if (res.done) return res.value;
          if (!rx.global) return regExpExec(rx, S);
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
          var A = [];
          var n = 0;
          var result;

          while ((result = regExpExec(rx, S)) !== null) {
            var matchStr = toString(result[0]);
            A[n] = matchStr;
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            n++;
          }

          return n === 0 ? null : A;
        }];
      });
      /***/
    },

    /***/
    2770:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.raw.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      6076);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517); // `String.raw` method
      // https://tc39.es/ecma262/#sec-string.raw


      $({
        target: 'String',
        stat: true
      }, {
        raw: function raw(template) {
          var rawTemplate = toIndexedObject(template.raw);
          var literalSegments = toLength(rawTemplate.length);
          var argumentsLength = arguments.length;
          var elements = [];
          var i = 0;

          while (literalSegments > i) {
            elements.push(toString(rawTemplate[i++]));
            if (i < argumentsLength) elements.push(toString(arguments[i]));
          }

          return elements.join('');
        }
      });
      /***/
    },

    /***/
    3191:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.repeat.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var repeat = __webpack_require__(
      /*! ../internals/string-repeat */
      3680); // `String.prototype.repeat` method
      // https://tc39.es/ecma262/#sec-string.prototype.repeat


      $({
        target: 'String',
        proto: true
      }, {
        repeat: repeat
      });
      /***/
    },

    /***/
    3474:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.replace.js ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var fixRegExpWellKnownSymbolLogic = __webpack_require__(
      /*! ../internals/fix-regexp-well-known-symbol-logic */
      4875);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var toInteger = __webpack_require__(
      /*! ../internals/to-integer */
      4497);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486);

      var advanceStringIndex = __webpack_require__(
      /*! ../internals/advance-string-index */
      4478);

      var getSubstitution = __webpack_require__(
      /*! ../internals/get-substitution */
      5327);

      var regExpExec = __webpack_require__(
      /*! ../internals/regexp-exec-abstract */
      1714);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var REPLACE = wellKnownSymbol('replace');
      var max = Math.max;
      var min = Math.min;

      var maybeToString = function maybeToString(it) {
        return it === undefined ? it : String(it);
      }; // IE <= 11 replaces $0 with the whole match, as if it was $&
      // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0


      var REPLACE_KEEPS_$0 = function () {
        // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
        return 'a'.replace(/./, '$0') === '$0';
      }(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string


      var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
        if (/./[REPLACE]) {
          return /./[REPLACE]('a', '$0') === '';
        }

        return false;
      }();

      var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
        var re = /./;

        re.exec = function () {
          var result = [];
          result.groups = {
            a: '7'
          };
          return result;
        };

        return ''.replace(re, '$<a>') !== '7';
      }); // @@replace logic

      fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
        var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
        return [// `String.prototype.replace` method
        // https://tc39.es/ecma262/#sec-string.prototype.replace
        function replace(searchValue, replaceValue) {
          var O = requireObjectCoercible(this);
          var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
          return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(toString(O), searchValue, replaceValue);
        }, // `RegExp.prototype[@@replace]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
        function (string, replaceValue) {
          var rx = anObject(this);
          var S = toString(string);

          if (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 && replaceValue.indexOf('$<') === -1) {
            var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
            if (res.done) return res.value;
          }

          var functionalReplace = typeof replaceValue === 'function';
          if (!functionalReplace) replaceValue = toString(replaceValue);
          var global = rx.global;

          if (global) {
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
          }

          var results = [];

          while (true) {
            var result = regExpExec(rx, S);
            if (result === null) break;
            results.push(result);
            if (!global) break;
            var matchStr = toString(result[0]);
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          }

          var accumulatedResult = '';
          var nextSourcePosition = 0;

          for (var i = 0; i < results.length; i++) {
            result = results[i];
            var matched = toString(result[0]);
            var position = max(min(toInteger(result.index), S.length), 0);
            var captures = []; // NOTE: This is equivalent to
            //   captures = result.slice(1).map(maybeToString)
            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

            for (var j = 1; j < result.length; j++) {
              captures.push(maybeToString(result[j]));
            }

            var namedCaptures = result.groups;

            if (functionalReplace) {
              var replacerArgs = [matched].concat(captures, position, S);
              if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
              var replacement = toString(replaceValue.apply(undefined, replacerArgs));
            } else {
              replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
            }

            if (position >= nextSourcePosition) {
              accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
              nextSourcePosition = position + matched.length;
            }
          }

          return accumulatedResult + S.slice(nextSourcePosition);
        }];
      }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
      /***/
    },

    /***/
    9286:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.search.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var fixRegExpWellKnownSymbolLogic = __webpack_require__(
      /*! ../internals/fix-regexp-well-known-symbol-logic */
      4875);

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486);

      var sameValue = __webpack_require__(
      /*! ../internals/same-value */
      3471);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var regExpExec = __webpack_require__(
      /*! ../internals/regexp-exec-abstract */
      1714); // @@search logic


      fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
        return [// `String.prototype.search` method
        // https://tc39.es/ecma262/#sec-string.prototype.search
        function search(regexp) {
          var O = requireObjectCoercible(this);
          var searcher = regexp == undefined ? undefined : regexp[SEARCH];
          return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
        }, // `RegExp.prototype[@@search]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
        function (string) {
          var rx = anObject(this);
          var S = toString(string);
          var res = maybeCallNative(nativeSearch, rx, S);
          if (res.done) return res.value;
          var previousLastIndex = rx.lastIndex;
          if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
          var result = regExpExec(rx, S);
          if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
          return result === null ? -1 : result.index;
        }];
      });
      /***/
    },

    /***/
    630:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.small.js ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      7772);

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      2304); // `String.prototype.small` method
      // https://tc39.es/ecma262/#sec-string.prototype.small


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('small')
      }, {
        small: function small() {
          return createHTML(this, 'small', '', '');
        }
      });
      /***/
    },

    /***/
    3161:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.split.js ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var fixRegExpWellKnownSymbolLogic = __webpack_require__(
      /*! ../internals/fix-regexp-well-known-symbol-logic */
      4875);

      var isRegExp = __webpack_require__(
      /*! ../internals/is-regexp */
      4715);

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486);

      var speciesConstructor = __webpack_require__(
      /*! ../internals/species-constructor */
      6795);

      var advanceStringIndex = __webpack_require__(
      /*! ../internals/advance-string-index */
      4478);

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var callRegExpExec = __webpack_require__(
      /*! ../internals/regexp-exec-abstract */
      1714);

      var regexpExec = __webpack_require__(
      /*! ../internals/regexp-exec */
      6193);

      var stickyHelpers = __webpack_require__(
      /*! ../internals/regexp-sticky-helpers */
      3085);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
      var arrayPush = [].push;
      var min = Math.min;
      var MAX_UINT32 = 0xFFFFFFFF; // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
      // Weex JS has frozen built-in prototypes, so use try / catch wrapper

      var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
        // eslint-disable-next-line regexp/no-empty-group -- required for testing
        var re = /(?:)/;
        var originalExec = re.exec;

        re.exec = function () {
          return originalExec.apply(this, arguments);
        };

        var result = 'ab'.split(re);
        return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
      }); // @@split logic

      fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
        var internalSplit;

        if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
        'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
        '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
          // based on es5-shim implementation, need to rework it
          internalSplit = function internalSplit(separator, limit) {
            var string = toString(requireObjectCoercible(this));
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

            if (!isRegExp(separator)) {
              return nativeSplit.call(string, separator, lim);
            }

            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
            var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

            var separatorCopy = new RegExp(separator.source, flags + 'g');
            var match, lastIndex, lastLength;

            while (match = regexpExec.call(separatorCopy, string)) {
              lastIndex = separatorCopy.lastIndex;

              if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= lim) break;
              }

              if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
            }

            if (lastLastIndex === string.length) {
              if (lastLength || !separatorCopy.test('')) output.push('');
            } else output.push(string.slice(lastLastIndex));

            return output.length > lim ? output.slice(0, lim) : output;
          }; // Chakra, V8

        } else if ('0'.split(undefined, 0).length) {
          internalSplit = function internalSplit(separator, limit) {
            return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
          };
        } else internalSplit = nativeSplit;

        return [// `String.prototype.split` method
        // https://tc39.es/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
          var O = requireObjectCoercible(this);
          var splitter = separator == undefined ? undefined : separator[SPLIT];
          return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(toString(O), separator, limit);
        }, // `RegExp.prototype[@@split]` method
        // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function (string, limit) {
          var rx = anObject(this);
          var S = toString(string);
          var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
          if (res.done) return res.value;
          var C = speciesConstructor(rx, RegExp);
          var unicodeMatching = rx.unicode;
          var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
          // simulate the 'y' flag.

          var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
          var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
          if (lim === 0) return [];
          if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
          var p = 0;
          var q = 0;
          var A = [];

          while (q < S.length) {
            splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
            var z = callRegExpExec(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
            var e;

            if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
              q = advanceStringIndex(S, q, unicodeMatching);
            } else {
              A.push(S.slice(p, q));
              if (A.length === lim) return A;

              for (var i = 1; i <= z.length - 1; i++) {
                A.push(z[i]);
                if (A.length === lim) return A;
              }

              q = p = e;
            }
          }

          A.push(S.slice(p));
          return A;
        }];
      }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);
      /***/
    },

    /***/
    9715:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.starts-with.js ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var getOwnPropertyDescriptor = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      1867).f;

      var toLength = __webpack_require__(
      /*! ../internals/to-length */
      8806);

      var toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var notARegExp = __webpack_require__(
      /*! ../internals/not-a-regexp */
      7258);

      var requireObjectCoercible = __webpack_require__(
      /*! ../internals/require-object-coercible */
      9486);

      var correctIsRegExpLogic = __webpack_require__(
      /*! ../internals/correct-is-regexp-logic */
      2013);

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      3712); // eslint-disable-next-line es/no-string-prototype-startswith -- safe


      var $startsWith = ''.startsWith;
      var min = Math.min;
      var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith'); // https://github.com/zloirock/core-js/pull/702

      var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
        var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
        return descriptor && !descriptor.writable;
      }(); // `String.prototype.startsWith` method
      // https://tc39.es/ecma262/#sec-string.prototype.startswith

      $({
        target: 'String',
        proto: true,
        forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
      }, {
        startsWith: function startsWith(searchString
        /* , position = 0 */
        ) {
          var that = toString(requireObjectCoercible(this));
          notARegExp(searchString);
          var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
          var search = toString(searchString);
          return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
        }
      });
      /***/
    },

    /***/
    4734:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.strike.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      7772);

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      2304); // `String.prototype.strike` method
      // https://tc39.es/ecma262/#sec-string.prototype.strike


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('strike')
      }, {
        strike: function strike() {
          return createHTML(this, 'strike', '', '');
        }
      });
      /***/
    },

    /***/
    4566:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.sub.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      7772);

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      2304); // `String.prototype.sub` method
      // https://tc39.es/ecma262/#sec-string.prototype.sub


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('sub')
      }, {
        sub: function sub() {
          return createHTML(this, 'sub', '', '');
        }
      });
      /***/
    },

    /***/
    83:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.sup.js ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var createHTML = __webpack_require__(
      /*! ../internals/create-html */
      7772);

      var forcedStringHTMLMethod = __webpack_require__(
      /*! ../internals/string-html-forced */
      2304); // `String.prototype.sup` method
      // https://tc39.es/ecma262/#sec-string.prototype.sup


      $({
        target: 'String',
        proto: true,
        forced: forcedStringHTMLMethod('sup')
      }, {
        sup: function sup() {
          return createHTML(this, 'sup', '', '');
        }
      });
      /***/
    },

    /***/
    1041:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.string.trim.js ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var $trim = __webpack_require__(
      /*! ../internals/string-trim */
      5940).trim;

      var forcedStringTrimMethod = __webpack_require__(
      /*! ../internals/string-trim-forced */
      332); // `String.prototype.trim` method
      // https://tc39.es/ecma262/#sec-string.prototype.trim


      $({
        target: 'String',
        proto: true,
        forced: forcedStringTrimMethod('trim')
      }, {
        trim: function trim() {
          return $trim(this);
        }
      });
      /***/
    },

    /***/
    9747:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.async-iterator.js ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970); // `Symbol.asyncIterator` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.asynciterator


      defineWellKnownSymbol('asyncIterator');
      /***/
    },

    /***/
    3754:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.description.js ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict"; // `Symbol.prototype.description` getter
      // https://tc39.es/ecma262/#sec-symbol.prototype.description

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var defineProperty = __webpack_require__(
      /*! ../internals/object-define-property */
      480).f;

      var copyConstructorProperties = __webpack_require__(
      /*! ../internals/copy-constructor-properties */
      6107);

      var NativeSymbol = global.Symbol;

      if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
      NativeSymbol().description !== undefined)) {
        var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

        var SymbolWrapper = function Symbol() {
          var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
          var result = this instanceof SymbolWrapper ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
          : description === undefined ? NativeSymbol() : NativeSymbol(description);
          if (description === '') EmptyStringDescriptionStore[result] = true;
          return result;
        };

        copyConstructorProperties(SymbolWrapper, NativeSymbol);
        var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
        symbolPrototype.constructor = SymbolWrapper;
        var symbolToString = symbolPrototype.toString;

        var _native = String(NativeSymbol('test')) == 'Symbol(test)';

        var regexp = /^Symbol\((.*)\)[^)]+$/;
        defineProperty(symbolPrototype, 'description', {
          configurable: true,
          get: function description() {
            var symbol = isObject(this) ? this.valueOf() : this;
            var string = symbolToString.call(symbol);
            if (has(EmptyStringDescriptionStore, symbol)) return '';
            var desc = _native ? string.slice(7, -1) : string.replace(regexp, '$1');
            return desc === '' ? undefined : desc;
          }
        });
        $({
          global: true,
          forced: true
        }, {
          Symbol: SymbolWrapper
        });
      }
      /***/

    },

    /***/
    9172:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.has-instance.js ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970); // `Symbol.hasInstance` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.hasinstance


      defineWellKnownSymbol('hasInstance');
      /***/
    },

    /***/
    6946:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.is-concat-spreadable.js ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970); // `Symbol.isConcatSpreadable` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.isconcatspreadable


      defineWellKnownSymbol('isConcatSpreadable');
      /***/
    },

    /***/
    5221:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.iterator.js ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970); // `Symbol.iterator` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.iterator


      defineWellKnownSymbol('iterator');
      /***/
    },

    /***/
    5235:
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.js ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var $ = __webpack_require__(
      /*! ../internals/export */
      8301);

      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var getBuiltIn = __webpack_require__(
      /*! ../internals/get-built-in */
      3077);

      var IS_PURE = __webpack_require__(
      /*! ../internals/is-pure */
      3712);

      var DESCRIPTORS = __webpack_require__(
      /*! ../internals/descriptors */
      6223);

      var NATIVE_SYMBOL = __webpack_require__(
      /*! ../internals/native-symbol */
      3391);

      var fails = __webpack_require__(
      /*! ../internals/fails */
      7912);

      var has = __webpack_require__(
      /*! ../internals/has */
      9594);

      var isArray = __webpack_require__(
      /*! ../internals/is-array */
      1147);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var isSymbol = __webpack_require__(
      /*! ../internals/is-symbol */
      3071);

      var anObject = __webpack_require__(
      /*! ../internals/an-object */
      9499);

      var toObject = __webpack_require__(
      /*! ../internals/to-object */
      2767);

      var toIndexedObject = __webpack_require__(
      /*! ../internals/to-indexed-object */
      6076);

      var toPropertyKey = __webpack_require__(
      /*! ../internals/to-property-key */
      2552);

      var $toString = __webpack_require__(
      /*! ../internals/to-string */
      7517);

      var createPropertyDescriptor = __webpack_require__(
      /*! ../internals/create-property-descriptor */
      4652);

      var nativeObjectCreate = __webpack_require__(
      /*! ../internals/object-create */
      7593);

      var objectKeys = __webpack_require__(
      /*! ../internals/object-keys */
      2087);

      var getOwnPropertyNamesModule = __webpack_require__(
      /*! ../internals/object-get-own-property-names */
      9740);

      var getOwnPropertyNamesExternal = __webpack_require__(
      /*! ../internals/object-get-own-property-names-external */
      863);

      var getOwnPropertySymbolsModule = __webpack_require__(
      /*! ../internals/object-get-own-property-symbols */
      9800);

      var getOwnPropertyDescriptorModule = __webpack_require__(
      /*! ../internals/object-get-own-property-descriptor */
      1867);

      var definePropertyModule = __webpack_require__(
      /*! ../internals/object-define-property */
      480);

      var propertyIsEnumerableModule = __webpack_require__(
      /*! ../internals/object-property-is-enumerable */
      8833);

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      7176);

      var redefine = __webpack_require__(
      /*! ../internals/redefine */
      1415);

      var shared = __webpack_require__(
      /*! ../internals/shared */
      8174);

      var sharedKey = __webpack_require__(
      /*! ../internals/shared-key */
      6857);

      var hiddenKeys = __webpack_require__(
      /*! ../internals/hidden-keys */
      7452);

      var uid = __webpack_require__(
      /*! ../internals/uid */
      1103);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var wrappedWellKnownSymbolModule = __webpack_require__(
      /*! ../internals/well-known-symbol-wrapped */
      144);

      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970);

      var setToStringTag = __webpack_require__(
      /*! ../internals/set-to-string-tag */
      489);

      var InternalStateModule = __webpack_require__(
      /*! ../internals/internal-state */
      8593);

      var $forEach = __webpack_require__(
      /*! ../internals/array-iteration */
      7354).forEach;

      var HIDDEN = sharedKey('hidden');
      var SYMBOL = 'Symbol';
      var PROTOTYPE = 'prototype';
      var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(SYMBOL);
      var ObjectPrototype = Object[PROTOTYPE];
      var $Symbol = global.Symbol;
      var $stringify = getBuiltIn('JSON', 'stringify');
      var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      var nativeDefineProperty = definePropertyModule.f;
      var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
      var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
      var AllSymbols = shared('symbols');
      var ObjectPrototypeSymbols = shared('op-symbols');
      var StringToSymbolRegistry = shared('string-to-symbol-registry');
      var SymbolToStringRegistry = shared('symbol-to-string-registry');
      var WellKnownSymbolsStore = shared('wks');
      var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

      var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

      var setSymbolDescriptor = DESCRIPTORS && fails(function () {
        return nativeObjectCreate(nativeDefineProperty({}, 'a', {
          get: function get() {
            return nativeDefineProperty(this, 'a', {
              value: 7
            }).a;
          }
        })).a != 7;
      }) ? function (O, P, Attributes) {
        var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
        if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
        nativeDefineProperty(O, P, Attributes);

        if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
          nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
        }
      } : nativeDefineProperty;

      var wrap = function wrap(tag, description) {
        var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
        setInternalState(symbol, {
          type: SYMBOL,
          tag: tag,
          description: description
        });
        if (!DESCRIPTORS) symbol.description = description;
        return symbol;
      };

      var $defineProperty = function defineProperty(O, P, Attributes) {
        if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
        anObject(O);
        var key = toPropertyKey(P);
        anObject(Attributes);

        if (has(AllSymbols, key)) {
          if (!Attributes.enumerable) {
            if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
            O[HIDDEN][key] = true;
          } else {
            if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
            Attributes = nativeObjectCreate(Attributes, {
              enumerable: createPropertyDescriptor(0, false)
            });
          }

          return setSymbolDescriptor(O, key, Attributes);
        }

        return nativeDefineProperty(O, key, Attributes);
      };

      var $defineProperties = function defineProperties(O, Properties) {
        anObject(O);
        var properties = toIndexedObject(Properties);
        var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
        $forEach(keys, function (key) {
          if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
        });
        return O;
      };

      var $create = function create(O, Properties) {
        return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
      };

      var $propertyIsEnumerable = function propertyIsEnumerable(V) {
        var P = toPropertyKey(V);
        var enumerable = nativePropertyIsEnumerable.call(this, P);
        if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
        return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
      };

      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
        var it = toIndexedObject(O);
        var key = toPropertyKey(P);
        if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
        var descriptor = nativeGetOwnPropertyDescriptor(it, key);

        if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
          descriptor.enumerable = true;
        }

        return descriptor;
      };

      var $getOwnPropertyNames = function getOwnPropertyNames(O) {
        var names = nativeGetOwnPropertyNames(toIndexedObject(O));
        var result = [];
        $forEach(names, function (key) {
          if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
        });
        return result;
      };

      var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
        var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
        var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
        var result = [];
        $forEach(names, function (key) {
          if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
            result.push(AllSymbols[key]);
          }
        });
        return result;
      }; // `Symbol` constructor
      // https://tc39.es/ecma262/#sec-symbol-constructor


      if (!NATIVE_SYMBOL) {
        $Symbol = function Symbol() {
          if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
          var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
          var tag = uid(description);

          var setter = function setter(value) {
            if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
          };

          if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
            configurable: true,
            set: setter
          });
          return wrap(tag, description);
        };

        redefine($Symbol[PROTOTYPE], 'toString', function toString() {
          return getInternalState(this).tag;
        });
        redefine($Symbol, 'withoutSetter', function (description) {
          return wrap(uid(description), description);
        });
        propertyIsEnumerableModule.f = $propertyIsEnumerable;
        definePropertyModule.f = $defineProperty;
        getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
        getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
        getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

        wrappedWellKnownSymbolModule.f = function (name) {
          return wrap(wellKnownSymbol(name), name);
        };

        if (DESCRIPTORS) {
          // https://github.com/tc39/proposal-Symbol-description
          nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
            configurable: true,
            get: function description() {
              return getInternalState(this).description;
            }
          });

          if (!IS_PURE) {
            redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
              unsafe: true
            });
          }
        }
      }

      $({
        global: true,
        wrap: true,
        forced: !NATIVE_SYMBOL,
        sham: !NATIVE_SYMBOL
      }, {
        Symbol: $Symbol
      });
      $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
        defineWellKnownSymbol(name);
      });
      $({
        target: SYMBOL,
        stat: true,
        forced: !NATIVE_SYMBOL
      }, {
        // `Symbol.for` method
        // https://tc39.es/ecma262/#sec-symbol.for
        'for': function _for(key) {
          var string = $toString(key);
          if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
          var symbol = $Symbol(string);
          StringToSymbolRegistry[string] = symbol;
          SymbolToStringRegistry[symbol] = string;
          return symbol;
        },
        // `Symbol.keyFor` method
        // https://tc39.es/ecma262/#sec-symbol.keyfor
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
          if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
        },
        useSetter: function useSetter() {
          USE_SETTER = true;
        },
        useSimple: function useSimple() {
          USE_SETTER = false;
        }
      });
      $({
        target: 'Object',
        stat: true,
        forced: !NATIVE_SYMBOL,
        sham: !DESCRIPTORS
      }, {
        // `Object.create` method
        // https://tc39.es/ecma262/#sec-object.create
        create: $create,
        // `Object.defineProperty` method
        // https://tc39.es/ecma262/#sec-object.defineproperty
        defineProperty: $defineProperty,
        // `Object.defineProperties` method
        // https://tc39.es/ecma262/#sec-object.defineproperties
        defineProperties: $defineProperties,
        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor
      });
      $({
        target: 'Object',
        stat: true,
        forced: !NATIVE_SYMBOL
      }, {
        // `Object.getOwnPropertyNames` method
        // https://tc39.es/ecma262/#sec-object.getownpropertynames
        getOwnPropertyNames: $getOwnPropertyNames,
        // `Object.getOwnPropertySymbols` method
        // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
        getOwnPropertySymbols: $getOwnPropertySymbols
      }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
      // https://bugs.chromium.org/p/v8/issues/detail?id=3443

      $({
        target: 'Object',
        stat: true,
        forced: fails(function () {
          getOwnPropertySymbolsModule.f(1);
        })
      }, {
        getOwnPropertySymbols: function getOwnPropertySymbols(it) {
          return getOwnPropertySymbolsModule.f(toObject(it));
        }
      }); // `JSON.stringify` method behavior with symbols
      // https://tc39.es/ecma262/#sec-json.stringify

      if ($stringify) {
        var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
          var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

          return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
          || $stringify({
            a: symbol
          }) != '{}' // V8 throws on boxed symbols
          || $stringify(Object(symbol)) != '{}';
        });
        $({
          target: 'JSON',
          stat: true,
          forced: FORCED_JSON_STRINGIFY
        }, {
          // eslint-disable-next-line no-unused-vars -- required for `.length`
          stringify: function stringify(it, replacer, space) {
            var args = [it];
            var index = 1;
            var $replacer;

            while (arguments.length > index) {
              args.push(arguments[index++]);
            }

            $replacer = replacer;
            if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

            if (!isArray(replacer)) replacer = function replacer(key, value) {
              if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
              if (!isSymbol(value)) return value;
            };
            args[1] = replacer;
            return $stringify.apply(null, args);
          }
        });
      } // `Symbol.prototype[@@toPrimitive]` method
      // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


      if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
        createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
      } // `Symbol.prototype[@@toStringTag]` property
      // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


      setToStringTag($Symbol, SYMBOL);
      hiddenKeys[HIDDEN] = true;
      /***/
    },

    /***/
    395:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.match-all.js ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970); // `Symbol.matchAll` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.matchall


      defineWellKnownSymbol('matchAll');
      /***/
    },

    /***/
    7974:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.match.js ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970); // `Symbol.match` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.match


      defineWellKnownSymbol('match');
      /***/
    },

    /***/
    9550:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.replace.js ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970); // `Symbol.replace` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.replace


      defineWellKnownSymbol('replace');
      /***/
    },

    /***/
    6394:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.search.js ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970); // `Symbol.search` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.search


      defineWellKnownSymbol('search');
      /***/
    },

    /***/
    1897:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.species.js ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970); // `Symbol.species` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.species


      defineWellKnownSymbol('species');
      /***/
    },

    /***/
    6065:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.split.js ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970); // `Symbol.split` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.split


      defineWellKnownSymbol('split');
      /***/
    },

    /***/
    7228:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.to-primitive.js ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970); // `Symbol.toPrimitive` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.toprimitive


      defineWellKnownSymbol('toPrimitive');
      /***/
    },

    /***/
    3495:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.to-string-tag.js ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970); // `Symbol.toStringTag` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.tostringtag


      defineWellKnownSymbol('toStringTag');
      /***/
    },

    /***/
    5497:
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.symbol.unscopables.js ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var defineWellKnownSymbol = __webpack_require__(
      /*! ../internals/define-well-known-symbol */
      8970); // `Symbol.unscopables` well-known symbol
      // https://tc39.es/ecma262/#sec-symbol.unscopables


      defineWellKnownSymbol('unscopables');
      /***/
    },

    /***/
    4053:
    /*!************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.weak-map.js ***!
      \************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      "use strict";

      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var redefineAll = __webpack_require__(
      /*! ../internals/redefine-all */
      4151);

      var InternalMetadataModule = __webpack_require__(
      /*! ../internals/internal-metadata */
      4860);

      var collection = __webpack_require__(
      /*! ../internals/collection */
      3731);

      var collectionWeak = __webpack_require__(
      /*! ../internals/collection-weak */
      2050);

      var isObject = __webpack_require__(
      /*! ../internals/is-object */
      6743);

      var enforceIternalState = __webpack_require__(
      /*! ../internals/internal-state */
      8593).enforce;

      var NATIVE_WEAK_MAP = __webpack_require__(
      /*! ../internals/native-weak-map */
      9780);

      var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global; // eslint-disable-next-line es/no-object-isextensible -- safe

      var isExtensible = Object.isExtensible;
      var InternalWeakMap;

      var wrapper = function wrapper(init) {
        return function WeakMap() {
          return init(this, arguments.length ? arguments[0] : undefined);
        };
      }; // `WeakMap` constructor
      // https://tc39.es/ecma262/#sec-weakmap-constructor


      var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak); // IE11 WeakMap frozen keys fix
      // We can't use feature detection because it crash some old IE builds
      // https://github.com/zloirock/core-js/issues/485

      if (NATIVE_WEAK_MAP && IS_IE11) {
        InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
        InternalMetadataModule.enable();
        var WeakMapPrototype = $WeakMap.prototype;
        var nativeDelete = WeakMapPrototype['delete'];
        var nativeHas = WeakMapPrototype.has;
        var nativeGet = WeakMapPrototype.get;
        var nativeSet = WeakMapPrototype.set;
        redefineAll(WeakMapPrototype, {
          'delete': function _delete(key) {
            if (isObject(key) && !isExtensible(key)) {
              var state = enforceIternalState(this);
              if (!state.frozen) state.frozen = new InternalWeakMap();
              return nativeDelete.call(this, key) || state.frozen['delete'](key);
            }

            return nativeDelete.call(this, key);
          },
          has: function has(key) {
            if (isObject(key) && !isExtensible(key)) {
              var state = enforceIternalState(this);
              if (!state.frozen) state.frozen = new InternalWeakMap();
              return nativeHas.call(this, key) || state.frozen.has(key);
            }

            return nativeHas.call(this, key);
          },
          get: function get(key) {
            if (isObject(key) && !isExtensible(key)) {
              var state = enforceIternalState(this);
              if (!state.frozen) state.frozen = new InternalWeakMap();
              return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
            }

            return nativeGet.call(this, key);
          },
          set: function set(key, value) {
            if (isObject(key) && !isExtensible(key)) {
              var state = enforceIternalState(this);
              if (!state.frozen) state.frozen = new InternalWeakMap();
              nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
            } else nativeSet.call(this, key, value);

            return this;
          }
        });
      }
      /***/

    },

    /***/
    7903:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/web.dom-collections.for-each.js ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var DOMIterables = __webpack_require__(
      /*! ../internals/dom-iterables */
      4763);

      var forEach = __webpack_require__(
      /*! ../internals/array-for-each */
      8367);

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      7176);

      for (var COLLECTION_NAME in DOMIterables) {
        var Collection = global[COLLECTION_NAME];
        var CollectionPrototype = Collection && Collection.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

        if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
          createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
        } catch (error) {
          CollectionPrototype.forEach = forEach;
        }
      }
      /***/

    },

    /***/
    298:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {
      var global = __webpack_require__(
      /*! ../internals/global */
      1492);

      var DOMIterables = __webpack_require__(
      /*! ../internals/dom-iterables */
      4763);

      var ArrayIteratorMethods = __webpack_require__(
      /*! ../modules/es.array.iterator */
      9407);

      var createNonEnumerableProperty = __webpack_require__(
      /*! ../internals/create-non-enumerable-property */
      7176);

      var wellKnownSymbol = __webpack_require__(
      /*! ../internals/well-known-symbol */
      2622);

      var ITERATOR = wellKnownSymbol('iterator');
      var TO_STRING_TAG = wellKnownSymbol('toStringTag');
      var ArrayValues = ArrayIteratorMethods.values;

      for (var COLLECTION_NAME in DOMIterables) {
        var Collection = global[COLLECTION_NAME];
        var CollectionPrototype = Collection && Collection.prototype;

        if (CollectionPrototype) {
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
            createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
          } catch (error) {
            CollectionPrototype[ITERATOR] = ArrayValues;
          }

          if (!CollectionPrototype[TO_STRING_TAG]) {
            createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
          }

          if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
              createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
            } catch (error) {
              CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
            }
          }
        }
      }
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


    var __webpack_exports__ = (__webpack_exec__(99), __webpack_exec__(7435));
    /******/

  }]);
})();
//# sourceMappingURL=polyfills-es5.js.map
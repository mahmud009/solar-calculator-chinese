webpackHotUpdate_N_E("pages/index",{

/***/ "./module/Calculator/index.js":
/*!************************************!*\
  !*** ./module/Calculator/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calculator; });
/* harmony import */ var E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _CalculationForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CalculationForm */ "./module/Calculator/CalculationForm.js");
/* harmony import */ var _Plan__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Plan */ "./module/Calculator/Plan.js");
/* harmony import */ var _InfoContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InfoContent */ "./module/Calculator/InfoContent.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");






var _jsxFileName = "E:\\client-projects\\solar-calculator-chinese\\module\\Calculator\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var validationSchema = yup__WEBPACK_IMPORTED_MODULE_8__["object"]().shape({
  totalAmount: yup__WEBPACK_IMPORTED_MODULE_8__["number"]().moreThan(1, "Please insert a valid amount").positive("Please insert a valid amount").typeError("Please insert a valid amount"),
  systemSize: yup__WEBPACK_IMPORTED_MODULE_8__["number"]().moreThan(1, "Please insert a valid size").positive("Please insert a valid size").typeError("Please insert a valid size"),
  efficiency: yup__WEBPACK_IMPORTED_MODULE_8__["number"]().moreThan(1, "Please insert a valid efficiency").positive("Please insert a valid efficiency").typeError("Please insert a valid efficiency"),
  energyCost: yup__WEBPACK_IMPORTED_MODULE_8__["number"]().moreThan(0, "Please insert a valid energy cost").positive("Please insert a valid energy cost").typeError("Please insert a valid energy cost"),
  yearlyIncreasing: yup__WEBPACK_IMPORTED_MODULE_8__["number"]().moreThan(0, "Please insert a valid yearly increasing").positive("Please insert a valid yearly increasing").typeError("Please insert a valid yearly increasing"),
  environmentEfficiency: yup__WEBPACK_IMPORTED_MODULE_8__["number"]().moreThan(0, "Please insert a valid environment efficiency").positive("Please insert a valid yearly environment efficiency").typeError("Please insert a valid yearly environment efficiency")
});
function Calculator() {
  _s();

  var _this = this;

  var classes = useStyles();
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  var sm = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["useMediaQuery"])(theme.breakpoints.down("sm"));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      selectedMonths = _useState[0],
      setSelectedMonths = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([12, 24, 36, 48, 60]),
      months = _useState2[0];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      results = _useState3[0],
      setResults = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      isSubmitted = _useState4[0],
      setIsSubmitted = _useState4[1];

  var initialValues = {
    totalAmount: "",
    systemSize: "",
    efficiency: "",
    energyCost: "0.18",
    yearlyIncreasing: "3",
    environmentEfficiency: "100"
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = Object(E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(values) {
      return E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsSubmitted(true);
              generateResults();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"])({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit
  });
  var values = formik.values,
      resetForm = formik.resetForm;

  var handleMonthSelection = function handleMonthSelection(month) {
    var isExists = selectedMonths.indexOf(month) >= 0 ? true : false;

    if (!isExists) {
      setSelectedMonths([].concat(Object(E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(selectedMonths), [month]));
    } else {
      var index = selectedMonths.indexOf(month);
      setSelectedMonths(selectedMonths.filter(function (item) {
        return item !== month;
      }));
    }
  };

  var resetFields = function resetFields() {
    setIsSubmitted(false);
    resetForm();
  }; // Calculation functions


  function calculatePayment(_ref2) {
    var values = _ref2.values,
        month = _ref2.month;
    var totalAmount = values.totalAmount;
    var yearCount = month / 12;
    var factor = new Map([[12, 1.03], [24, 1.03], [36, 1.09], [48, 1.07], [60, 1.15], [72, 1.1]]);
    var totalCost = (totalAmount * factor.get(month) + (month === 24 ? 200 : 0)).toFixed(2);
    var perWeek = (totalCost / 52 / yearCount).toFixed(2);
    return {
      totalCost: totalCost,
      perWeek: perWeek
    };
  }

  function calculateSavings(_ref3) {
    var values = _ref3.values,
        month = _ref3.month;
    var yearCount = month / 12;
    var weeks = 52;
    var totalWeeks = yearCount * weeks;
    var systemSize = values.systemSize,
        efficiency = values.efficiency,
        energyCost = values.energyCost,
        yearlyIncreasing = values.yearlyIncreasing,
        environmentEfficiency = values.environmentEfficiency; // let energyCost = 0.25;

    var dailyAverage = 3.9; // Old calculation method
    // let perWeek = ((systemSize * 0.18 * 7 * 3.9 * efficiency) / 100).toFixed(2);
    // let totalCost = (perWeek * weeks * yearCount).toFixed(2);
    // New calculation

    var dailyCost = systemSize * dailyAverage * energyCost * efficiency / 100;
    var totalCost = dailyCost * 365 * environmentEfficiency / 100;
    var perWeek = (totalCost / weeks).toFixed(2); // For chart usage

    var twoYearCost = totalCost + totalCost * yearlyIncreasing / 100;
    var threeYearCost = twoYearCost + twoYearCost * yearlyIncreasing / 100;
    var fourYearCost = threeYearCost + threeYearCost * yearlyIncreasing / 100;
    var fiveYearCost = fourYearCost + fourYearCost * yearlyIncreasing / 100;
    var sixYearCost = fiveYearCost + fiveYearCost * yearlyIncreasing / 100;
    var costs = new Map([[1, totalCost.toFixed(2)], [2, twoYearCost.toFixed(2)], [3, threeYearCost.toFixed(2)], [4, fourYearCost.toFixed(2)], [5, fiveYearCost.toFixed(2)], [6, sixYearCost.toFixed(2)]]); // for column usage

    var twoYearSavings = totalCost + totalCost * yearlyIncreasing / 100 + totalCost;
    var threeYearSavings = twoYearSavings + twoYearSavings * yearlyIncreasing / 100 + totalCost;
    var fourYearSavings = threeYearSavings + threeYearSavings * yearlyIncreasing / 100 + totalCost;
    var fiveYearSavings = fourYearSavings + fourYearSavings * yearlyIncreasing / 100 + totalCost;
    var sixYearSavings = fiveYearSavings + fiveYearSavings * yearlyIncreasing / 100 + totalCost;
    var savings = new Map([[1, totalCost.toFixed(2)], [2, twoYearSavings.toFixed(2)], [3, threeYearSavings.toFixed(2)], [4, fourYearSavings.toFixed(2)], [5, fiveYearSavings.toFixed(2)], [6, sixYearSavings.toFixed(2)]]);
    return {
      perWeek: perWeek,
      totalCost: costs.get(yearCount),
      yearlySavings: savings.get(yearCount),
      firstYearSavings: totalCost.toFixed(2),
      perWeekNew: (savings.get(yearCount) / yearCount / 52).toFixed(2)
    };
  }

  function generateChartData(monthSelected) {
    var appMonths = Object(E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(months);

    var index = appMonths.indexOf(monthSelected) + 1;
    var resultMonths = appMonths.slice(0, index);
    var charAnnualCosts = [];
    var chartSavings = [];

    var _iterator = _createForOfIteratorHelper(resultMonths),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var month = _step.value;
        var payment = calculatePayment({
          values: values,
          month: monthSelected
        }).totalCost / (monthSelected / 12);
        var savings = calculateSavings({
          values: values,
          month: month
        }).totalCost;
        charAnnualCosts.push(payment);
        chartSavings.push(savings);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var chartLabels = resultMonths.map(function (month, index) {
      var monthsLength = resultMonths.length;
      var resultIndex = index + 1; // if (monthsLength === resultIndex) {
      //   return `${month}   (month)`;
      // } else {
      //   return month;
      // }

      return [month, "个月"];
    });
    var extra = new Map([[12, [600]], [24, [600, 800]], [36, [600, 800, 1000]], [48, [600, 800, 1000, 1200]], [60, [600, 800, 1000, 1200, 1400]], [72, [600, 800, 1000, 1200, 1400, 1600]]]);
    return {
      chartLabels: chartLabels,
      charAnnualCosts: charAnnualCosts,
      chartSavings: chartSavings,
      chartExtra: extra.get(monthSelected)
    };
  }

  function generateResults() {
    var results = [];
    selectedMonths.forEach(function (month) {
      var chartData = generateChartData(month);
      var result = {
        month: month,
        payment: calculatePayment({
          values: values,
          month: month
        }),
        savings: calculateSavings({
          values: values,
          month: month
        }),
        chartData: chartData
      };
      results.push(result);
    });
    setResults(results);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isSubmitted) {
      generateResults();
    } else {
      setIsSubmitted(false);
    }
  }, [isSubmitted, selectedMonths]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      mt: 4,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        container: true,
        justify: "center",
        spacing: 6,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
          item: true,
          xs: 12,
          lg: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
            variant: "outlined",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
              p: 3,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_CalculationForm__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({}, {
                formik: formik,
                resetFields: resetFields,
                selectedMonths: selectedMonths
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
          item: true,
          xs: 12,
          lg: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
            variant: "outlined",
            className: classes.infoCard,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_InfoContent__WEBPACK_IMPORTED_MODULE_11__["default"], _objectSpread({}, {
              values: values,
              months: months,
              selectedMonths: selectedMonths,
              handleMonthSelection: handleMonthSelection
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
          item: true,
          xs: 12,
          children: isSubmitted && results.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
              p: sm ? 2 : 4,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                container: true,
                spacing: 4,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                  item: true,
                  xs: 12,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
                    textAlign: "center",
                    mt: 1,
                    mb: 2,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
                      variant: "h1",
                      className: classes.resultTitle,
                      children: "\u592A\u9633\u662F\u4E00\u9879\u9AD8\u6027\u80FD\u7684\u6295\u8D44"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 287,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 285,
                  columnNumber: 21
                }, this), results.map(function (result) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                    item: true,
                    lg: 6,
                    xs: 12,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Plan__WEBPACK_IMPORTED_MODULE_10__["default"], _objectSpread({}, {
                      result: result,
                      selectedMonths: selectedMonths
                    }), void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 297,
                      columnNumber: 25
                    }, _this)
                  }, Object(uuid__WEBPACK_IMPORTED_MODULE_12__["v4"])(), false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 23
                  }, _this);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 284,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 261,
    columnNumber: 5
  }, this);
}

_s(Calculator, "/Dw/7nZNOgMU2SZORchPUUvjBIA=", false, function () {
  return [useStyles, _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_6__["useMediaQuery"], formik__WEBPACK_IMPORTED_MODULE_7__["useFormik"]];
});

_c = Calculator;
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    resultTitle: {
      fontFamily: "Noto Sans SC",
      fontSize: 48,
      letterSpacing: "0.01em",
      fontWeight: 700
    },
    infoCard: {
      height: "100%"
    }
  };
});

var _c;

$RefreshReg$(_c, "Calculator");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlL0NhbGN1bGF0b3IvaW5kZXguanMiXSwibmFtZXMiOlsidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInNoYXBlIiwidG90YWxBbW91bnQiLCJtb3JlVGhhbiIsInBvc2l0aXZlIiwidHlwZUVycm9yIiwic3lzdGVtU2l6ZSIsImVmZmljaWVuY3kiLCJlbmVyZ3lDb3N0IiwieWVhcmx5SW5jcmVhc2luZyIsImVudmlyb25tZW50RWZmaWNpZW5jeSIsIkNhbGN1bGF0b3IiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidGhlbWUiLCJ1c2VUaGVtZSIsInNtIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsInVzZVN0YXRlIiwic2VsZWN0ZWRNb250aHMiLCJzZXRTZWxlY3RlZE1vbnRocyIsIm1vbnRocyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaXNTdWJtaXR0ZWQiLCJzZXRJc1N1Ym1pdHRlZCIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImdlbmVyYXRlUmVzdWx0cyIsImZvcm1payIsInVzZUZvcm1payIsInJlc2V0Rm9ybSIsImhhbmRsZU1vbnRoU2VsZWN0aW9uIiwibW9udGgiLCJpc0V4aXN0cyIsImluZGV4T2YiLCJpbmRleCIsImZpbHRlciIsIml0ZW0iLCJyZXNldEZpZWxkcyIsImNhbGN1bGF0ZVBheW1lbnQiLCJ5ZWFyQ291bnQiLCJmYWN0b3IiLCJNYXAiLCJ0b3RhbENvc3QiLCJnZXQiLCJ0b0ZpeGVkIiwicGVyV2VlayIsImNhbGN1bGF0ZVNhdmluZ3MiLCJ3ZWVrcyIsInRvdGFsV2Vla3MiLCJkYWlseUF2ZXJhZ2UiLCJkYWlseUNvc3QiLCJ0d29ZZWFyQ29zdCIsInRocmVlWWVhckNvc3QiLCJmb3VyWWVhckNvc3QiLCJmaXZlWWVhckNvc3QiLCJzaXhZZWFyQ29zdCIsImNvc3RzIiwidHdvWWVhclNhdmluZ3MiLCJ0aHJlZVllYXJTYXZpbmdzIiwiZm91clllYXJTYXZpbmdzIiwiZml2ZVllYXJTYXZpbmdzIiwic2l4WWVhclNhdmluZ3MiLCJzYXZpbmdzIiwieWVhcmx5U2F2aW5ncyIsImZpcnN0WWVhclNhdmluZ3MiLCJwZXJXZWVrTmV3IiwiZ2VuZXJhdGVDaGFydERhdGEiLCJtb250aFNlbGVjdGVkIiwiYXBwTW9udGhzIiwicmVzdWx0TW9udGhzIiwic2xpY2UiLCJjaGFyQW5udWFsQ29zdHMiLCJjaGFydFNhdmluZ3MiLCJwYXltZW50IiwicHVzaCIsImNoYXJ0TGFiZWxzIiwibWFwIiwibW9udGhzTGVuZ3RoIiwibGVuZ3RoIiwicmVzdWx0SW5kZXgiLCJleHRyYSIsImNoYXJ0RXh0cmEiLCJmb3JFYWNoIiwiY2hhcnREYXRhIiwicmVzdWx0IiwidXNlRWZmZWN0IiwiaW5mb0NhcmQiLCJyZXN1bHRUaXRsZSIsInV1aWQiLCJtYWtlU3R5bGVzIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQywwQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQzFDQyxhQUFXLEVBQUVGLDBDQUFBLEdBQ1ZHLFFBRFUsQ0FDRCxDQURDLEVBQ0UsOEJBREYsRUFFVkMsUUFGVSxDQUVELDhCQUZDLEVBR1ZDLFNBSFUsQ0FHQSw4QkFIQSxDQUQ2QjtBQUsxQ0MsWUFBVSxFQUFFTiwwQ0FBQSxHQUNURyxRQURTLENBQ0EsQ0FEQSxFQUNHLDRCQURILEVBRVRDLFFBRlMsQ0FFQSw0QkFGQSxFQUdUQyxTQUhTLENBR0MsNEJBSEQsQ0FMOEI7QUFTMUNFLFlBQVUsRUFBRVAsMENBQUEsR0FDVEcsUUFEUyxDQUNBLENBREEsRUFDRyxrQ0FESCxFQUVUQyxRQUZTLENBRUEsa0NBRkEs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MkNBQ0UscUVBQUMsOENBQUQsb0JBQVU7QUFBRUEsNEJBQU0sRUFBTkEsTUFBRjtBQUFVcEUsb0NBQWMsRUFBZEE7QUFBVixxQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBQVd3RSxnREFBSSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRFc7QUFBQSxpQkFBWixDQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlERDs7R0F0UXVCbEYsVTtVQUNORSxTLEVBQ0ZFLDBELEVBQ0hFLCtELEVBb0JJZ0IsZ0Q7OztLQXZCT3RCLFU7QUF3UXhCLElBQU1FLFNBQVMsR0FBR2lGLG9FQUFVLENBQUMsVUFBQ2hGLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDOEUsZUFBVyxFQUFFO0FBQ1hHLGdCQUFVLEVBQUUsY0FERDtBQUVYQyxjQUFRLEVBQUUsRUFGQztBQUdYQyxtQkFBYSxFQUFFLFFBSEo7QUFJWEMsZ0JBQVUsRUFBRTtBQUpELEtBRDBCO0FBT3ZDUCxZQUFRLEVBQUU7QUFDUlEsWUFBTSxFQUFFO0FBREE7QUFQNkIsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWFjMmE4MjQzODBkY2MwNzliZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgQm94LFxyXG4gIEdyaWQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBQYXBlcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIHVzZU1lZGlhUXVlcnksXHJcbiAgdXNlVGhlbWUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IENhbGN1bGF0aW9uRm9ybSBmcm9tIFwiLi9DYWxjdWxhdGlvbkZvcm1cIjtcclxuaW1wb3J0IFBsYW4gZnJvbSBcIi4vUGxhblwiO1xyXG5pbXBvcnQgSW5mb0NvbnRlbnQgZnJvbSBcIi4vSW5mb0NvbnRlbnRcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25zT3V0bGluZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG5jb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICB0b3RhbEFtb3VudDogWXVwLm51bWJlcigpXHJcbiAgICAubW9yZVRoYW4oMSwgXCJQbGVhc2UgaW5zZXJ0IGEgdmFsaWQgYW1vdW50XCIpXHJcbiAgICAucG9zaXRpdmUoXCJQbGVhc2UgaW5zZXJ0IGEgdmFsaWQgYW1vdW50XCIpXHJcbiAgICAudHlwZUVycm9yKFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIGFtb3VudFwiKSxcclxuICBzeXN0ZW1TaXplOiBZdXAubnVtYmVyKClcclxuICAgIC5tb3JlVGhhbigxLCBcIlBsZWFzZSBpbnNlcnQgYSB2YWxpZCBzaXplXCIpXHJcbiAgICAucG9zaXRpdmUoXCJQbGVhc2UgaW5zZXJ0IGEgdmFsaWQgc2l6ZVwiKVxyXG4gICAgLnR5cGVFcnJvcihcIlBsZWFzZSBpbnNlcnQgYSB2YWxpZCBzaXplXCIpLFxyXG4gIGVmZmljaWVuY3k6IFl1cC5udW1iZXIoKVxyXG4gICAgLm1vcmVUaGFuKDEsIFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIGVmZmljaWVuY3lcIilcclxuICAgIC5wb3NpdGl2ZShcIlBsZWFzZSBpbnNlcnQgYSB2YWxpZCBlZmZpY2llbmN5XCIpXHJcbiAgICAudHlwZUVycm9yKFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIGVmZmljaWVuY3lcIiksXHJcbiAgZW5lcmd5Q29zdDogWXVwLm51bWJlcigpXHJcbiAgICAubW9yZVRoYW4oMCwgXCJQbGVhc2UgaW5zZXJ0IGEgdmFsaWQgZW5lcmd5IGNvc3RcIilcclxuICAgIC5wb3NpdGl2ZShcIlBsZWFzZSBpbnNlcnQgYSB2YWxpZCBlbmVyZ3kgY29zdFwiKVxyXG4gICAgLnR5cGVFcnJvcihcIlBsZWFzZSBpbnNlcnQgYSB2YWxpZCBlbmVyZ3kgY29zdFwiKSxcclxuICB5ZWFybHlJbmNyZWFzaW5nOiBZdXAubnVtYmVyKClcclxuICAgIC5tb3JlVGhhbigwLCBcIlBsZWFzZSBpbnNlcnQgYSB2YWxpZCB5ZWFybHkgaW5jcmVhc2luZ1wiKVxyXG4gICAgLnBvc2l0aXZlKFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIHllYXJseSBpbmNyZWFzaW5nXCIpXHJcbiAgICAudHlwZUVycm9yKFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIHllYXJseSBpbmNyZWFzaW5nXCIpLFxyXG4gIGVudmlyb25tZW50RWZmaWNpZW5jeTogWXVwLm51bWJlcigpXHJcbiAgICAubW9yZVRoYW4oMCwgXCJQbGVhc2UgaW5zZXJ0IGEgdmFsaWQgZW52aXJvbm1lbnQgZWZmaWNpZW5jeVwiKVxyXG4gICAgLnBvc2l0aXZlKFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIHllYXJseSBlbnZpcm9ubWVudCBlZmZpY2llbmN5XCIpXHJcbiAgICAudHlwZUVycm9yKFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIHllYXJseSBlbnZpcm9ubWVudCBlZmZpY2llbmN5XCIpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbGN1bGF0b3IoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBzbSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcclxuICBjb25zdCBbc2VsZWN0ZWRNb250aHMsIHNldFNlbGVjdGVkTW9udGhzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbW9udGhzXSA9IHVzZVN0YXRlKFsxMiwgMjQsIDM2LCA0OCwgNjBdKTtcclxuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzU3VibWl0dGVkLCBzZXRJc1N1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGxldCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgdG90YWxBbW91bnQ6IFwiXCIsXHJcbiAgICBzeXN0ZW1TaXplOiBcIlwiLFxyXG4gICAgZWZmaWNpZW5jeTogXCJcIixcclxuICAgIGVuZXJneUNvc3Q6IFwiMC4xOFwiLFxyXG4gICAgeWVhcmx5SW5jcmVhc2luZzogXCIzXCIsXHJcbiAgICBlbnZpcm9ubWVudEVmZmljaWVuY3k6IFwiMTAwXCIsXHJcbiAgfTtcclxuXHJcbiAgbGV0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgc2V0SXNTdWJtaXR0ZWQodHJ1ZSk7XHJcbiAgICBnZW5lcmF0ZVJlc3VsdHMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xyXG4gICAgaW5pdGlhbFZhbHVlcyxcclxuICAgIHZhbGlkYXRpb25TY2hlbWEsXHJcbiAgICBvblN1Ym1pdCxcclxuICB9KTtcclxuICBjb25zdCB7IHZhbHVlcywgcmVzZXRGb3JtIH0gPSBmb3JtaWs7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vbnRoU2VsZWN0aW9uID0gKG1vbnRoKSA9PiB7XHJcbiAgICBsZXQgaXNFeGlzdHMgPSBzZWxlY3RlZE1vbnRocy5pbmRleE9mKG1vbnRoKSA+PSAwID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgIGlmICghaXNFeGlzdHMpIHtcclxuICAgICAgc2V0U2VsZWN0ZWRNb250aHMoWy4uLnNlbGVjdGVkTW9udGhzLCBtb250aF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGluZGV4ID0gc2VsZWN0ZWRNb250aHMuaW5kZXhPZihtb250aCk7XHJcbiAgICAgIHNldFNlbGVjdGVkTW9udGhzKHNlbGVjdGVkTW9udGhzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gbW9udGgpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByZXNldEZpZWxkcyA9ICgpID0+IHtcclxuICAgIHNldElzU3VibWl0dGVkKGZhbHNlKTtcclxuICAgIHJlc2V0Rm9ybSgpO1xyXG4gIH07XHJcblxyXG4gIC8vIENhbGN1bGF0aW9uIGZ1bmN0aW9uc1xyXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZVBheW1lbnQoeyB2YWx1ZXMsIG1vbnRoIH0pIHtcclxuICAgIGxldCB7IHRvdGFsQW1vdW50IH0gPSB2YWx1ZXM7XHJcbiAgICBsZXQgeWVhckNvdW50ID0gbW9udGggLyAxMjtcclxuICAgIGxldCBmYWN0b3IgPSBuZXcgTWFwKFtcclxuICAgICAgWzEyLCAxLjAzXSxcclxuICAgICAgWzI0LCAxLjAzXSxcclxuICAgICAgWzM2LCAxLjA5XSxcclxuICAgICAgWzQ4LCAxLjA3XSxcclxuICAgICAgWzYwLCAxLjE1XSxcclxuICAgICAgWzcyLCAxLjFdLFxyXG4gICAgXSk7XHJcblxyXG4gICAgbGV0IHRvdGFsQ29zdCA9IChcclxuICAgICAgdG90YWxBbW91bnQgKiBmYWN0b3IuZ2V0KG1vbnRoKSArXHJcbiAgICAgIChtb250aCA9PT0gMjQgPyAyMDAgOiAwKVxyXG4gICAgKS50b0ZpeGVkKDIpO1xyXG4gICAgbGV0IHBlcldlZWsgPSAodG90YWxDb3N0IC8gNTIgLyB5ZWFyQ291bnQpLnRvRml4ZWQoMik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdG90YWxDb3N0LFxyXG4gICAgICBwZXJXZWVrLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZVNhdmluZ3MoeyB2YWx1ZXMsIG1vbnRoIH0pIHtcclxuICAgIGxldCB5ZWFyQ291bnQgPSBtb250aCAvIDEyO1xyXG4gICAgbGV0IHdlZWtzID0gNTI7XHJcbiAgICBsZXQgdG90YWxXZWVrcyA9IHllYXJDb3VudCAqIHdlZWtzO1xyXG4gICAgbGV0IHtcclxuICAgICAgc3lzdGVtU2l6ZSxcclxuICAgICAgZWZmaWNpZW5jeSxcclxuICAgICAgZW5lcmd5Q29zdCxcclxuICAgICAgeWVhcmx5SW5jcmVhc2luZyxcclxuICAgICAgZW52aXJvbm1lbnRFZmZpY2llbmN5LFxyXG4gICAgfSA9IHZhbHVlcztcclxuICAgIC8vIGxldCBlbmVyZ3lDb3N0ID0gMC4yNTtcclxuICAgIGxldCBkYWlseUF2ZXJhZ2UgPSAzLjk7XHJcblxyXG4gICAgLy8gT2xkIGNhbGN1bGF0aW9uIG1ldGhvZFxyXG4gICAgLy8gbGV0IHBlcldlZWsgPSAoKHN5c3RlbVNpemUgKiAwLjE4ICogNyAqIDMuOSAqIGVmZmljaWVuY3kpIC8gMTAwKS50b0ZpeGVkKDIpO1xyXG4gICAgLy8gbGV0IHRvdGFsQ29zdCA9IChwZXJXZWVrICogd2Vla3MgKiB5ZWFyQ291bnQpLnRvRml4ZWQoMik7XHJcblxyXG4gICAgLy8gTmV3IGNhbGN1bGF0aW9uXHJcbiAgICBsZXQgZGFpbHlDb3N0ID0gKHN5c3RlbVNpemUgKiBkYWlseUF2ZXJhZ2UgKiBlbmVyZ3lDb3N0ICogZWZmaWNpZW5jeSkgLyAxMDA7XHJcbiAgICBsZXQgdG90YWxDb3N0ID0gKGRhaWx5Q29zdCAqIDM2NSAqIGVudmlyb25tZW50RWZmaWNpZW5jeSkgLyAxMDA7XHJcbiAgICBsZXQgcGVyV2VlayA9ICh0b3RhbENvc3QgLyB3ZWVrcykudG9GaXhlZCgyKTtcclxuXHJcbiAgICAvLyBGb3IgY2hhcnQgdXNhZ2VcclxuICAgIGxldCB0d29ZZWFyQ29zdCA9IHRvdGFsQ29zdCArICh0b3RhbENvc3QgKiB5ZWFybHlJbmNyZWFzaW5nKSAvIDEwMDtcclxuICAgIGxldCB0aHJlZVllYXJDb3N0ID0gdHdvWWVhckNvc3QgKyAodHdvWWVhckNvc3QgKiB5ZWFybHlJbmNyZWFzaW5nKSAvIDEwMDtcclxuICAgIGxldCBmb3VyWWVhckNvc3QgPSB0aHJlZVllYXJDb3N0ICsgKHRocmVlWWVhckNvc3QgKiB5ZWFybHlJbmNyZWFzaW5nKSAvIDEwMDtcclxuICAgIGxldCBmaXZlWWVhckNvc3QgPSBmb3VyWWVhckNvc3QgKyAoZm91clllYXJDb3N0ICogeWVhcmx5SW5jcmVhc2luZykgLyAxMDA7XHJcbiAgICBsZXQgc2l4WWVhckNvc3QgPSBmaXZlWWVhckNvc3QgKyAoZml2ZVllYXJDb3N0ICogeWVhcmx5SW5jcmVhc2luZykgLyAxMDA7XHJcblxyXG4gICAgbGV0IGNvc3RzID0gbmV3IE1hcChbXHJcbiAgICAgIFsxLCB0b3RhbENvc3QudG9GaXhlZCgyKV0sXHJcbiAgICAgIFsyLCB0d29ZZWFyQ29zdC50b0ZpeGVkKDIpXSxcclxuICAgICAgWzMsIHRocmVlWWVhckNvc3QudG9GaXhlZCgyKV0sXHJcbiAgICAgIFs0LCBmb3VyWWVhckNvc3QudG9GaXhlZCgyKV0sXHJcbiAgICAgIFs1LCBmaXZlWWVhckNvc3QudG9GaXhlZCgyKV0sXHJcbiAgICAgIFs2LCBzaXhZZWFyQ29zdC50b0ZpeGVkKDIpXSxcclxuICAgIF0pO1xyXG5cclxuICAgIC8vIGZvciBjb2x1bW4gdXNhZ2VcclxuICAgIGxldCB0d29ZZWFyU2F2aW5ncyA9XHJcbiAgICAgIHRvdGFsQ29zdCArICh0b3RhbENvc3QgKiB5ZWFybHlJbmNyZWFzaW5nKSAvIDEwMCArIHRvdGFsQ29zdDtcclxuICAgIGxldCB0aHJlZVllYXJTYXZpbmdzID1cclxuICAgICAgdHdvWWVhclNhdmluZ3MgKyAodHdvWWVhclNhdmluZ3MgKiB5ZWFybHlJbmNyZWFzaW5nKSAvIDEwMCArIHRvdGFsQ29zdDtcclxuICAgIGxldCBmb3VyWWVhclNhdmluZ3MgPVxyXG4gICAgICB0aHJlZVllYXJTYXZpbmdzICtcclxuICAgICAgKHRocmVlWWVhclNhdmluZ3MgKiB5ZWFybHlJbmNyZWFzaW5nKSAvIDEwMCArXHJcbiAgICAgIHRvdGFsQ29zdDtcclxuICAgIGxldCBmaXZlWWVhclNhdmluZ3MgPVxyXG4gICAgICBmb3VyWWVhclNhdmluZ3MgKyAoZm91clllYXJTYXZpbmdzICogeWVhcmx5SW5jcmVhc2luZykgLyAxMDAgKyB0b3RhbENvc3Q7XHJcbiAgICBsZXQgc2l4WWVhclNhdmluZ3MgPVxyXG4gICAgICBmaXZlWWVhclNhdmluZ3MgKyAoZml2ZVllYXJTYXZpbmdzICogeWVhcmx5SW5jcmVhc2luZykgLyAxMDAgKyB0b3RhbENvc3Q7XHJcblxyXG4gICAgbGV0IHNhdmluZ3MgPSBuZXcgTWFwKFtcclxuICAgICAgWzEsIHRvdGFsQ29zdC50b0ZpeGVkKDIpXSxcclxuICAgICAgWzIsIHR3b1llYXJTYXZpbmdzLnRvRml4ZWQoMildLFxyXG4gICAgICBbMywgdGhyZWVZZWFyU2F2aW5ncy50b0ZpeGVkKDIpXSxcclxuICAgICAgWzQsIGZvdXJZZWFyU2F2aW5ncy50b0ZpeGVkKDIpXSxcclxuICAgICAgWzUsIGZpdmVZZWFyU2F2aW5ncy50b0ZpeGVkKDIpXSxcclxuICAgICAgWzYsIHNpeFllYXJTYXZpbmdzLnRvRml4ZWQoMildLFxyXG4gICAgXSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGVyV2VlayxcclxuICAgICAgdG90YWxDb3N0OiBjb3N0cy5nZXQoeWVhckNvdW50KSxcclxuICAgICAgeWVhcmx5U2F2aW5nczogc2F2aW5ncy5nZXQoeWVhckNvdW50KSxcclxuICAgICAgZmlyc3RZZWFyU2F2aW5nczogdG90YWxDb3N0LnRvRml4ZWQoMiksXHJcbiAgICAgIHBlcldlZWtOZXc6IChzYXZpbmdzLmdldCh5ZWFyQ291bnQpIC8geWVhckNvdW50IC8gNTIpLnRvRml4ZWQoMiksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2VuZXJhdGVDaGFydERhdGEobW9udGhTZWxlY3RlZCkge1xyXG4gICAgbGV0IGFwcE1vbnRocyA9IFsuLi5tb250aHNdO1xyXG5cclxuICAgIGxldCBpbmRleCA9IGFwcE1vbnRocy5pbmRleE9mKG1vbnRoU2VsZWN0ZWQpICsgMTtcclxuICAgIGxldCByZXN1bHRNb250aHMgPSBhcHBNb250aHMuc2xpY2UoMCwgaW5kZXgpO1xyXG5cclxuICAgIGxldCBjaGFyQW5udWFsQ29zdHMgPSBbXTtcclxuICAgIGxldCBjaGFydFNhdmluZ3MgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBtb250aCBvZiByZXN1bHRNb250aHMpIHtcclxuICAgICAgbGV0IHBheW1lbnQgPVxyXG4gICAgICAgIGNhbGN1bGF0ZVBheW1lbnQoeyB2YWx1ZXMsIG1vbnRoOiBtb250aFNlbGVjdGVkIH0pLnRvdGFsQ29zdCAvXHJcbiAgICAgICAgKG1vbnRoU2VsZWN0ZWQgLyAxMik7XHJcblxyXG4gICAgICBsZXQgc2F2aW5ncyA9IGNhbGN1bGF0ZVNhdmluZ3MoeyB2YWx1ZXMsIG1vbnRoIH0pLnRvdGFsQ29zdDtcclxuICAgICAgY2hhckFubnVhbENvc3RzLnB1c2gocGF5bWVudCk7XHJcbiAgICAgIGNoYXJ0U2F2aW5ncy5wdXNoKHNhdmluZ3MpO1xyXG4gICAgfVxyXG4gICAgbGV0IGNoYXJ0TGFiZWxzID0gcmVzdWx0TW9udGhzLm1hcCgobW9udGgsIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBtb250aHNMZW5ndGggPSByZXN1bHRNb250aHMubGVuZ3RoO1xyXG4gICAgICBsZXQgcmVzdWx0SW5kZXggPSBpbmRleCArIDE7XHJcblxyXG4gICAgICAvLyBpZiAobW9udGhzTGVuZ3RoID09PSByZXN1bHRJbmRleCkge1xyXG4gICAgICAvLyAgIHJldHVybiBgJHttb250aH0gICAobW9udGgpYDtcclxuICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgLy8gICByZXR1cm4gbW9udGg7XHJcbiAgICAgIC8vIH1cclxuICAgICAgcmV0dXJuIFttb250aCwgXCLkuKrmnIhcIl07XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgZXh0cmEgPSBuZXcgTWFwKFtcclxuICAgICAgWzEyLCBbNjAwXV0sXHJcbiAgICAgIFsyNCwgWzYwMCwgODAwXV0sXHJcbiAgICAgIFszNiwgWzYwMCwgODAwLCAxMDAwXV0sXHJcbiAgICAgIFs0OCwgWzYwMCwgODAwLCAxMDAwLCAxMjAwXV0sXHJcbiAgICAgIFs2MCwgWzYwMCwgODAwLCAxMDAwLCAxMjAwLCAxNDAwXV0sXHJcbiAgICAgIFs3MiwgWzYwMCwgODAwLCAxMDAwLCAxMjAwLCAxNDAwLCAxNjAwXV0sXHJcbiAgICBdKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjaGFydExhYmVscyxcclxuICAgICAgY2hhckFubnVhbENvc3RzLFxyXG4gICAgICBjaGFydFNhdmluZ3MsXHJcbiAgICAgIGNoYXJ0RXh0cmE6IGV4dHJhLmdldChtb250aFNlbGVjdGVkKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZW5lcmF0ZVJlc3VsdHMoKSB7XHJcbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xyXG5cclxuICAgIHNlbGVjdGVkTW9udGhzLmZvckVhY2goKG1vbnRoKSA9PiB7XHJcbiAgICAgIGxldCBjaGFydERhdGEgPSBnZW5lcmF0ZUNoYXJ0RGF0YShtb250aCk7XHJcbiAgICAgIGxldCByZXN1bHQgPSB7XHJcbiAgICAgICAgbW9udGgsXHJcbiAgICAgICAgcGF5bWVudDogY2FsY3VsYXRlUGF5bWVudCh7IHZhbHVlcywgbW9udGggfSksXHJcbiAgICAgICAgc2F2aW5nczogY2FsY3VsYXRlU2F2aW5ncyh7IHZhbHVlcywgbW9udGggfSksXHJcbiAgICAgICAgY2hhcnREYXRhLFxyXG4gICAgICB9O1xyXG4gICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuICAgIH0pO1xyXG4gICAgc2V0UmVzdWx0cyhyZXN1bHRzKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNTdWJtaXR0ZWQpIHtcclxuICAgICAgZ2VuZXJhdGVSZXN1bHRzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJc1N1Ym1pdHRlZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzU3VibWl0dGVkLCBzZWxlY3RlZE1vbnRoc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEJveCBtdD17NH0+XHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICAgIDxQYXBlciB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICA8Qm94IHA9ezN9PlxyXG4gICAgICAgICAgICAgICAgPENhbGN1bGF0aW9uRm9ybSB7Li4ueyBmb3JtaWssIHJlc2V0RmllbGRzLCBzZWxlY3RlZE1vbnRocyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICAgIDxQYXBlciB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5mb0NhcmR9PlxyXG4gICAgICAgICAgICAgIDxJbmZvQ29udGVudFxyXG4gICAgICAgICAgICAgICAgey4uLnsgdmFsdWVzLCBtb250aHMsIHNlbGVjdGVkTW9udGhzLCBoYW5kbGVNb250aFNlbGVjdGlvbiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICB7aXNTdWJtaXR0ZWQgJiYgcmVzdWx0cy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICA8UGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHA9e3NtID8gMiA6IDR9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD17MX0gbWI9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJlc3VsdFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg5aSq6Ziz5piv5LiA6aG56auY5oCn6IO955qE5oqV6LWEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICB7cmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQga2V5PXt1dWlkKCl9IGl0ZW0gbGc9ezZ9IHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGFuIHsuLi57IHJlc3VsdCwgc2VsZWN0ZWRNb250aHMgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcmVzdWx0VGl0bGU6IHtcclxuICAgIGZvbnRGYW1pbHk6IFwiTm90byBTYW5zIFNDXCIsXHJcbiAgICBmb250U2l6ZTogNDgsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMDFlbVwiLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbiAgaW5mb0NhcmQ6IHtcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgfSxcclxufSkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
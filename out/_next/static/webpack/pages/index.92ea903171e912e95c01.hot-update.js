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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([12, 24, 36, 48, 60, 72]),
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

_s(Calculator, "qXmuw4HNi3r0Ot1IFiQHW8MpE28=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlL0NhbGN1bGF0b3IvaW5kZXguanMiXSwibmFtZXMiOlsidmFsaWRhdGlvblNjaGVtYSIsIll1cCIsInNoYXBlIiwidG90YWxBbW91bnQiLCJtb3JlVGhhbiIsInBvc2l0aXZlIiwidHlwZUVycm9yIiwic3lzdGVtU2l6ZSIsImVmZmljaWVuY3kiLCJlbmVyZ3lDb3N0IiwieWVhcmx5SW5jcmVhc2luZyIsImVudmlyb25tZW50RWZmaWNpZW5jeSIsIkNhbGN1bGF0b3IiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidGhlbWUiLCJ1c2VUaGVtZSIsInNtIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsInVzZVN0YXRlIiwic2VsZWN0ZWRNb250aHMiLCJzZXRTZWxlY3RlZE1vbnRocyIsIm1vbnRocyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaXNTdWJtaXR0ZWQiLCJzZXRJc1N1Ym1pdHRlZCIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImdlbmVyYXRlUmVzdWx0cyIsImZvcm1payIsInVzZUZvcm1payIsInJlc2V0Rm9ybSIsImhhbmRsZU1vbnRoU2VsZWN0aW9uIiwibW9udGgiLCJpc0V4aXN0cyIsImluZGV4T2YiLCJpbmRleCIsImZpbHRlciIsIml0ZW0iLCJyZXNldEZpZWxkcyIsImNhbGN1bGF0ZVBheW1lbnQiLCJ5ZWFyQ291bnQiLCJmYWN0b3IiLCJNYXAiLCJ0b3RhbENvc3QiLCJnZXQiLCJ0b0ZpeGVkIiwicGVyV2VlayIsImNhbGN1bGF0ZVNhdmluZ3MiLCJ3ZWVrcyIsInRvdGFsV2Vla3MiLCJkYWlseUF2ZXJhZ2UiLCJkYWlseUNvc3QiLCJ0d29ZZWFyQ29zdCIsInRocmVlWWVhckNvc3QiLCJmb3VyWWVhckNvc3QiLCJmaXZlWWVhckNvc3QiLCJzaXhZZWFyQ29zdCIsImNvc3RzIiwidHdvWWVhclNhdmluZ3MiLCJ0aHJlZVllYXJTYXZpbmdzIiwiZm91clllYXJTYXZpbmdzIiwiZml2ZVllYXJTYXZpbmdzIiwic2l4WWVhclNhdmluZ3MiLCJzYXZpbmdzIiwieWVhcmx5U2F2aW5ncyIsImZpcnN0WWVhclNhdmluZ3MiLCJwZXJXZWVrTmV3IiwiZ2VuZXJhdGVDaGFydERhdGEiLCJtb250aFNlbGVjdGVkIiwiYXBwTW9udGhzIiwicmVzdWx0TW9udGhzIiwic2xpY2UiLCJjaGFyQW5udWFsQ29zdHMiLCJjaGFydFNhdmluZ3MiLCJwYXltZW50IiwicHVzaCIsImNoYXJ0TGFiZWxzIiwibWFwIiwibW9udGhzTGVuZ3RoIiwibGVuZ3RoIiwicmVzdWx0SW5kZXgiLCJleHRyYSIsImNoYXJ0RXh0cmEiLCJmb3JFYWNoIiwiY2hhcnREYXRhIiwicmVzdWx0IiwidXNlRWZmZWN0IiwiaW5mb0NhcmQiLCJyZXN1bHRUaXRsZSIsInV1aWQiLCJtYWtlU3R5bGVzIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQywwQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQzFDQyxhQUFXLEVBQUVGLDBDQUFBLEdBQ1ZHLFFBRFUsQ0FDRCxDQURDLEVBQ0UsOEJBREYsRUFFVkMsUUFGVSxDQUVELDhCQUZDLEVBR1ZDLFNBSFUsQ0FHQSw4QkFIQSxDQUQ2QjtBQUsxQ0MsWUFBVSxFQUFFTiwwQ0FBQSxHQUNURyxRQURTLENBQ0EsQ0FEQSxFQUNHLDRCQURILEVBRVRDLFFBRlMsQ0FFQSw0QkFGQSxFQUdUQyxTQUhTLENBR0MsNEJBSEQsQ0FMOEI7QUFTMUNFLFlBQVUsRUFBRVAsMENBQUEsR0FDVEcsUUFEUyxDQUNBLENBREEsRUFDRyxrQ0FESCxFQUVUQyxRQUZTLENBRUEsa0NBRkEs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LEVBQW5DO0FBQUEsMkNBQ0UscUVBQUMsOENBQUQsb0JBQVU7QUFBRUEsNEJBQU0sRUFBTkEsTUFBRjtBQUFVcEUsb0NBQWMsRUFBZEE7QUFBVixxQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBQVd3RSxnREFBSSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRFc7QUFBQSxpQkFBWixDQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlERDs7R0F0UXVCbEYsVTtVQUNORSxTLEVBQ0ZFLDBELEVBQ0hFLCtELEVBb0JJZ0IsZ0Q7OztLQXZCT3RCLFU7QUF3UXhCLElBQU1FLFNBQVMsR0FBR2lGLG9FQUFVLENBQUMsVUFBQ2hGLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDOEUsZUFBVyxFQUFFO0FBQ1hHLGdCQUFVLEVBQUUsY0FERDtBQUVYQyxjQUFRLEVBQUUsRUFGQztBQUdYQyxtQkFBYSxFQUFFLFFBSEo7QUFJWEMsZ0JBQVUsRUFBRTtBQUpELEtBRDBCO0FBT3ZDUCxZQUFRLEVBQUU7QUFDUlEsWUFBTSxFQUFFO0FBREE7QUFQNkIsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTJlYTkwMzE3MWU5MTJlOTVjMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgQm94LFxyXG4gIEdyaWQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBQYXBlcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIHVzZU1lZGlhUXVlcnksXHJcbiAgdXNlVGhlbWUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IENhbGN1bGF0aW9uRm9ybSBmcm9tIFwiLi9DYWxjdWxhdGlvbkZvcm1cIjtcclxuaW1wb3J0IFBsYW4gZnJvbSBcIi4vUGxhblwiO1xyXG5pbXBvcnQgSW5mb0NvbnRlbnQgZnJvbSBcIi4vSW5mb0NvbnRlbnRcIjtcclxuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gXCJ1dWlkXCI7XHJcbmltcG9ydCB7IENvbGxlY3Rpb25zT3V0bGluZWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG5jb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICB0b3RhbEFtb3VudDogWXVwLm51bWJlcigpXHJcbiAgICAubW9yZVRoYW4oMSwgXCJQbGVhc2UgaW5zZXJ0IGEgdmFsaWQgYW1vdW50XCIpXHJcbiAgICAucG9zaXRpdmUoXCJQbGVhc2UgaW5zZXJ0IGEgdmFsaWQgYW1vdW50XCIpXHJcbiAgICAudHlwZUVycm9yKFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIGFtb3VudFwiKSxcclxuICBzeXN0ZW1TaXplOiBZdXAubnVtYmVyKClcclxuICAgIC5tb3JlVGhhbigxLCBcIlBsZWFzZSBpbnNlcnQgYSB2YWxpZCBzaXplXCIpXHJcbiAgICAucG9zaXRpdmUoXCJQbGVhc2UgaW5zZXJ0IGEgdmFsaWQgc2l6ZVwiKVxyXG4gICAgLnR5cGVFcnJvcihcIlBsZWFzZSBpbnNlcnQgYSB2YWxpZCBzaXplXCIpLFxyXG4gIGVmZmljaWVuY3k6IFl1cC5udW1iZXIoKVxyXG4gICAgLm1vcmVUaGFuKDEsIFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIGVmZmljaWVuY3lcIilcclxuICAgIC5wb3NpdGl2ZShcIlBsZWFzZSBpbnNlcnQgYSB2YWxpZCBlZmZpY2llbmN5XCIpXHJcbiAgICAudHlwZUVycm9yKFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIGVmZmljaWVuY3lcIiksXHJcbiAgZW5lcmd5Q29zdDogWXVwLm51bWJlcigpXHJcbiAgICAubW9yZVRoYW4oMCwgXCJQbGVhc2UgaW5zZXJ0IGEgdmFsaWQgZW5lcmd5IGNvc3RcIilcclxuICAgIC5wb3NpdGl2ZShcIlBsZWFzZSBpbnNlcnQgYSB2YWxpZCBlbmVyZ3kgY29zdFwiKVxyXG4gICAgLnR5cGVFcnJvcihcIlBsZWFzZSBpbnNlcnQgYSB2YWxpZCBlbmVyZ3kgY29zdFwiKSxcclxuICB5ZWFybHlJbmNyZWFzaW5nOiBZdXAubnVtYmVyKClcclxuICAgIC5tb3JlVGhhbigwLCBcIlBsZWFzZSBpbnNlcnQgYSB2YWxpZCB5ZWFybHkgaW5jcmVhc2luZ1wiKVxyXG4gICAgLnBvc2l0aXZlKFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIHllYXJseSBpbmNyZWFzaW5nXCIpXHJcbiAgICAudHlwZUVycm9yKFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIHllYXJseSBpbmNyZWFzaW5nXCIpLFxyXG4gIGVudmlyb25tZW50RWZmaWNpZW5jeTogWXVwLm51bWJlcigpXHJcbiAgICAubW9yZVRoYW4oMCwgXCJQbGVhc2UgaW5zZXJ0IGEgdmFsaWQgZW52aXJvbm1lbnQgZWZmaWNpZW5jeVwiKVxyXG4gICAgLnBvc2l0aXZlKFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIHllYXJseSBlbnZpcm9ubWVudCBlZmZpY2llbmN5XCIpXHJcbiAgICAudHlwZUVycm9yKFwiUGxlYXNlIGluc2VydCBhIHZhbGlkIHllYXJseSBlbnZpcm9ubWVudCBlZmZpY2llbmN5XCIpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbGN1bGF0b3IoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBzbSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcclxuICBjb25zdCBbc2VsZWN0ZWRNb250aHMsIHNldFNlbGVjdGVkTW9udGhzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbW9udGhzXSA9IHVzZVN0YXRlKFsxMiwgMjQsIDM2LCA0OCwgNjAsIDcyXSk7XHJcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc1N1Ym1pdHRlZCwgc2V0SXNTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBsZXQgaW5pdGlhbFZhbHVlcyA9IHtcclxuICAgIHRvdGFsQW1vdW50OiBcIlwiLFxyXG4gICAgc3lzdGVtU2l6ZTogXCJcIixcclxuICAgIGVmZmljaWVuY3k6IFwiXCIsXHJcbiAgICBlbmVyZ3lDb3N0OiBcIjAuMThcIixcclxuICAgIHllYXJseUluY3JlYXNpbmc6IFwiM1wiLFxyXG4gICAgZW52aXJvbm1lbnRFZmZpY2llbmN5OiBcIjEwMFwiLFxyXG4gIH07XHJcblxyXG4gIGxldCBvblN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIHNldElzU3VibWl0dGVkKHRydWUpO1xyXG4gICAgZ2VuZXJhdGVSZXN1bHRzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcclxuICAgIGluaXRpYWxWYWx1ZXMsXHJcbiAgICB2YWxpZGF0aW9uU2NoZW1hLFxyXG4gICAgb25TdWJtaXQsXHJcbiAgfSk7XHJcbiAgY29uc3QgeyB2YWx1ZXMsIHJlc2V0Rm9ybSB9ID0gZm9ybWlrO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb250aFNlbGVjdGlvbiA9IChtb250aCkgPT4ge1xyXG4gICAgbGV0IGlzRXhpc3RzID0gc2VsZWN0ZWRNb250aHMuaW5kZXhPZihtb250aCkgPj0gMCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICBpZiAoIWlzRXhpc3RzKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkTW9udGhzKFsuLi5zZWxlY3RlZE1vbnRocywgbW9udGhdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBpbmRleCA9IHNlbGVjdGVkTW9udGhzLmluZGV4T2YobW9udGgpO1xyXG4gICAgICBzZXRTZWxlY3RlZE1vbnRocyhzZWxlY3RlZE1vbnRocy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IG1vbnRoKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXRGaWVsZHMgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1N1Ym1pdHRlZChmYWxzZSk7XHJcbiAgICByZXNldEZvcm0oKTtcclxuICB9O1xyXG5cclxuICAvLyBDYWxjdWxhdGlvbiBmdW5jdGlvbnNcclxuICBmdW5jdGlvbiBjYWxjdWxhdGVQYXltZW50KHsgdmFsdWVzLCBtb250aCB9KSB7XHJcbiAgICBsZXQgeyB0b3RhbEFtb3VudCB9ID0gdmFsdWVzO1xyXG4gICAgbGV0IHllYXJDb3VudCA9IG1vbnRoIC8gMTI7XHJcbiAgICBsZXQgZmFjdG9yID0gbmV3IE1hcChbXHJcbiAgICAgIFsxMiwgMS4wM10sXHJcbiAgICAgIFsyNCwgMS4wM10sXHJcbiAgICAgIFszNiwgMS4wOV0sXHJcbiAgICAgIFs0OCwgMS4wN10sXHJcbiAgICAgIFs2MCwgMS4xNV0sXHJcbiAgICAgIFs3MiwgMS4xXSxcclxuICAgIF0pO1xyXG5cclxuICAgIGxldCB0b3RhbENvc3QgPSAoXHJcbiAgICAgIHRvdGFsQW1vdW50ICogZmFjdG9yLmdldChtb250aCkgK1xyXG4gICAgICAobW9udGggPT09IDI0ID8gMjAwIDogMClcclxuICAgICkudG9GaXhlZCgyKTtcclxuICAgIGxldCBwZXJXZWVrID0gKHRvdGFsQ29zdCAvIDUyIC8geWVhckNvdW50KS50b0ZpeGVkKDIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvdGFsQ29zdCxcclxuICAgICAgcGVyV2VlayxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYWxjdWxhdGVTYXZpbmdzKHsgdmFsdWVzLCBtb250aCB9KSB7XHJcbiAgICBsZXQgeWVhckNvdW50ID0gbW9udGggLyAxMjtcclxuICAgIGxldCB3ZWVrcyA9IDUyO1xyXG4gICAgbGV0IHRvdGFsV2Vla3MgPSB5ZWFyQ291bnQgKiB3ZWVrcztcclxuICAgIGxldCB7XHJcbiAgICAgIHN5c3RlbVNpemUsXHJcbiAgICAgIGVmZmljaWVuY3ksXHJcbiAgICAgIGVuZXJneUNvc3QsXHJcbiAgICAgIHllYXJseUluY3JlYXNpbmcsXHJcbiAgICAgIGVudmlyb25tZW50RWZmaWNpZW5jeSxcclxuICAgIH0gPSB2YWx1ZXM7XHJcbiAgICAvLyBsZXQgZW5lcmd5Q29zdCA9IDAuMjU7XHJcbiAgICBsZXQgZGFpbHlBdmVyYWdlID0gMy45O1xyXG5cclxuICAgIC8vIE9sZCBjYWxjdWxhdGlvbiBtZXRob2RcclxuICAgIC8vIGxldCBwZXJXZWVrID0gKChzeXN0ZW1TaXplICogMC4xOCAqIDcgKiAzLjkgKiBlZmZpY2llbmN5KSAvIDEwMCkudG9GaXhlZCgyKTtcclxuICAgIC8vIGxldCB0b3RhbENvc3QgPSAocGVyV2VlayAqIHdlZWtzICogeWVhckNvdW50KS50b0ZpeGVkKDIpO1xyXG5cclxuICAgIC8vIE5ldyBjYWxjdWxhdGlvblxyXG4gICAgbGV0IGRhaWx5Q29zdCA9IChzeXN0ZW1TaXplICogZGFpbHlBdmVyYWdlICogZW5lcmd5Q29zdCAqIGVmZmljaWVuY3kpIC8gMTAwO1xyXG4gICAgbGV0IHRvdGFsQ29zdCA9IChkYWlseUNvc3QgKiAzNjUgKiBlbnZpcm9ubWVudEVmZmljaWVuY3kpIC8gMTAwO1xyXG4gICAgbGV0IHBlcldlZWsgPSAodG90YWxDb3N0IC8gd2Vla3MpLnRvRml4ZWQoMik7XHJcblxyXG4gICAgLy8gRm9yIGNoYXJ0IHVzYWdlXHJcbiAgICBsZXQgdHdvWWVhckNvc3QgPSB0b3RhbENvc3QgKyAodG90YWxDb3N0ICogeWVhcmx5SW5jcmVhc2luZykgLyAxMDA7XHJcbiAgICBsZXQgdGhyZWVZZWFyQ29zdCA9IHR3b1llYXJDb3N0ICsgKHR3b1llYXJDb3N0ICogeWVhcmx5SW5jcmVhc2luZykgLyAxMDA7XHJcbiAgICBsZXQgZm91clllYXJDb3N0ID0gdGhyZWVZZWFyQ29zdCArICh0aHJlZVllYXJDb3N0ICogeWVhcmx5SW5jcmVhc2luZykgLyAxMDA7XHJcbiAgICBsZXQgZml2ZVllYXJDb3N0ID0gZm91clllYXJDb3N0ICsgKGZvdXJZZWFyQ29zdCAqIHllYXJseUluY3JlYXNpbmcpIC8gMTAwO1xyXG4gICAgbGV0IHNpeFllYXJDb3N0ID0gZml2ZVllYXJDb3N0ICsgKGZpdmVZZWFyQ29zdCAqIHllYXJseUluY3JlYXNpbmcpIC8gMTAwO1xyXG5cclxuICAgIGxldCBjb3N0cyA9IG5ldyBNYXAoW1xyXG4gICAgICBbMSwgdG90YWxDb3N0LnRvRml4ZWQoMildLFxyXG4gICAgICBbMiwgdHdvWWVhckNvc3QudG9GaXhlZCgyKV0sXHJcbiAgICAgIFszLCB0aHJlZVllYXJDb3N0LnRvRml4ZWQoMildLFxyXG4gICAgICBbNCwgZm91clllYXJDb3N0LnRvRml4ZWQoMildLFxyXG4gICAgICBbNSwgZml2ZVllYXJDb3N0LnRvRml4ZWQoMildLFxyXG4gICAgICBbNiwgc2l4WWVhckNvc3QudG9GaXhlZCgyKV0sXHJcbiAgICBdKTtcclxuXHJcbiAgICAvLyBmb3IgY29sdW1uIHVzYWdlXHJcbiAgICBsZXQgdHdvWWVhclNhdmluZ3MgPVxyXG4gICAgICB0b3RhbENvc3QgKyAodG90YWxDb3N0ICogeWVhcmx5SW5jcmVhc2luZykgLyAxMDAgKyB0b3RhbENvc3Q7XHJcbiAgICBsZXQgdGhyZWVZZWFyU2F2aW5ncyA9XHJcbiAgICAgIHR3b1llYXJTYXZpbmdzICsgKHR3b1llYXJTYXZpbmdzICogeWVhcmx5SW5jcmVhc2luZykgLyAxMDAgKyB0b3RhbENvc3Q7XHJcbiAgICBsZXQgZm91clllYXJTYXZpbmdzID1cclxuICAgICAgdGhyZWVZZWFyU2F2aW5ncyArXHJcbiAgICAgICh0aHJlZVllYXJTYXZpbmdzICogeWVhcmx5SW5jcmVhc2luZykgLyAxMDAgK1xyXG4gICAgICB0b3RhbENvc3Q7XHJcbiAgICBsZXQgZml2ZVllYXJTYXZpbmdzID1cclxuICAgICAgZm91clllYXJTYXZpbmdzICsgKGZvdXJZZWFyU2F2aW5ncyAqIHllYXJseUluY3JlYXNpbmcpIC8gMTAwICsgdG90YWxDb3N0O1xyXG4gICAgbGV0IHNpeFllYXJTYXZpbmdzID1cclxuICAgICAgZml2ZVllYXJTYXZpbmdzICsgKGZpdmVZZWFyU2F2aW5ncyAqIHllYXJseUluY3JlYXNpbmcpIC8gMTAwICsgdG90YWxDb3N0O1xyXG5cclxuICAgIGxldCBzYXZpbmdzID0gbmV3IE1hcChbXHJcbiAgICAgIFsxLCB0b3RhbENvc3QudG9GaXhlZCgyKV0sXHJcbiAgICAgIFsyLCB0d29ZZWFyU2F2aW5ncy50b0ZpeGVkKDIpXSxcclxuICAgICAgWzMsIHRocmVlWWVhclNhdmluZ3MudG9GaXhlZCgyKV0sXHJcbiAgICAgIFs0LCBmb3VyWWVhclNhdmluZ3MudG9GaXhlZCgyKV0sXHJcbiAgICAgIFs1LCBmaXZlWWVhclNhdmluZ3MudG9GaXhlZCgyKV0sXHJcbiAgICAgIFs2LCBzaXhZZWFyU2F2aW5ncy50b0ZpeGVkKDIpXSxcclxuICAgIF0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBlcldlZWssXHJcbiAgICAgIHRvdGFsQ29zdDogY29zdHMuZ2V0KHllYXJDb3VudCksXHJcbiAgICAgIHllYXJseVNhdmluZ3M6IHNhdmluZ3MuZ2V0KHllYXJDb3VudCksXHJcbiAgICAgIGZpcnN0WWVhclNhdmluZ3M6IHRvdGFsQ29zdC50b0ZpeGVkKDIpLFxyXG4gICAgICBwZXJXZWVrTmV3OiAoc2F2aW5ncy5nZXQoeWVhckNvdW50KSAvIHllYXJDb3VudCAvIDUyKS50b0ZpeGVkKDIpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ2hhcnREYXRhKG1vbnRoU2VsZWN0ZWQpIHtcclxuICAgIGxldCBhcHBNb250aHMgPSBbLi4ubW9udGhzXTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSBhcHBNb250aHMuaW5kZXhPZihtb250aFNlbGVjdGVkKSArIDE7XHJcbiAgICBsZXQgcmVzdWx0TW9udGhzID0gYXBwTW9udGhzLnNsaWNlKDAsIGluZGV4KTtcclxuXHJcbiAgICBsZXQgY2hhckFubnVhbENvc3RzID0gW107XHJcbiAgICBsZXQgY2hhcnRTYXZpbmdzID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgbW9udGggb2YgcmVzdWx0TW9udGhzKSB7XHJcbiAgICAgIGxldCBwYXltZW50ID1cclxuICAgICAgICBjYWxjdWxhdGVQYXltZW50KHsgdmFsdWVzLCBtb250aDogbW9udGhTZWxlY3RlZCB9KS50b3RhbENvc3QgL1xyXG4gICAgICAgIChtb250aFNlbGVjdGVkIC8gMTIpO1xyXG5cclxuICAgICAgbGV0IHNhdmluZ3MgPSBjYWxjdWxhdGVTYXZpbmdzKHsgdmFsdWVzLCBtb250aCB9KS50b3RhbENvc3Q7XHJcbiAgICAgIGNoYXJBbm51YWxDb3N0cy5wdXNoKHBheW1lbnQpO1xyXG4gICAgICBjaGFydFNhdmluZ3MucHVzaChzYXZpbmdzKTtcclxuICAgIH1cclxuICAgIGxldCBjaGFydExhYmVscyA9IHJlc3VsdE1vbnRocy5tYXAoKG1vbnRoLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgbW9udGhzTGVuZ3RoID0gcmVzdWx0TW9udGhzLmxlbmd0aDtcclxuICAgICAgbGV0IHJlc3VsdEluZGV4ID0gaW5kZXggKyAxO1xyXG5cclxuICAgICAgLy8gaWYgKG1vbnRoc0xlbmd0aCA9PT0gcmVzdWx0SW5kZXgpIHtcclxuICAgICAgLy8gICByZXR1cm4gYCR7bW9udGh9ICAgKG1vbnRoKWA7XHJcbiAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgIC8vICAgcmV0dXJuIG1vbnRoO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIHJldHVybiBbbW9udGgsIFwi5Liq5pyIXCJdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGV4dHJhID0gbmV3IE1hcChbXHJcbiAgICAgIFsxMiwgWzYwMF1dLFxyXG4gICAgICBbMjQsIFs2MDAsIDgwMF1dLFxyXG4gICAgICBbMzYsIFs2MDAsIDgwMCwgMTAwMF1dLFxyXG4gICAgICBbNDgsIFs2MDAsIDgwMCwgMTAwMCwgMTIwMF1dLFxyXG4gICAgICBbNjAsIFs2MDAsIDgwMCwgMTAwMCwgMTIwMCwgMTQwMF1dLFxyXG4gICAgICBbNzIsIFs2MDAsIDgwMCwgMTAwMCwgMTIwMCwgMTQwMCwgMTYwMF1dLFxyXG4gICAgXSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2hhcnRMYWJlbHMsXHJcbiAgICAgIGNoYXJBbm51YWxDb3N0cyxcclxuICAgICAgY2hhcnRTYXZpbmdzLFxyXG4gICAgICBjaGFydEV4dHJhOiBleHRyYS5nZXQobW9udGhTZWxlY3RlZCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2VuZXJhdGVSZXN1bHRzKCkge1xyXG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcclxuXHJcbiAgICBzZWxlY3RlZE1vbnRocy5mb3JFYWNoKChtb250aCkgPT4ge1xyXG4gICAgICBsZXQgY2hhcnREYXRhID0gZ2VuZXJhdGVDaGFydERhdGEobW9udGgpO1xyXG4gICAgICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgICAgIG1vbnRoLFxyXG4gICAgICAgIHBheW1lbnQ6IGNhbGN1bGF0ZVBheW1lbnQoeyB2YWx1ZXMsIG1vbnRoIH0pLFxyXG4gICAgICAgIHNhdmluZ3M6IGNhbGN1bGF0ZVNhdmluZ3MoeyB2YWx1ZXMsIG1vbnRoIH0pLFxyXG4gICAgICAgIGNoYXJ0RGF0YSxcclxuICAgICAgfTtcclxuICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIHNldFJlc3VsdHMocmVzdWx0cyk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzU3VibWl0dGVkKSB7XHJcbiAgICAgIGdlbmVyYXRlUmVzdWx0cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SXNTdWJtaXR0ZWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFtpc1N1Ym1pdHRlZCwgc2VsZWN0ZWRNb250aHNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxCb3ggbXQ9ezR9PlxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgc3BhY2luZz17Nn0+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICA8UGFwZXIgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgPEJveCBwPXszfT5cclxuICAgICAgICAgICAgICAgIDxDYWxjdWxhdGlvbkZvcm0gey4uLnsgZm9ybWlrLCByZXNldEZpZWxkcywgc2VsZWN0ZWRNb250aHMgfX0gLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICA8UGFwZXIgdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm9DYXJkfT5cclxuICAgICAgICAgICAgICA8SW5mb0NvbnRlbnRcclxuICAgICAgICAgICAgICAgIHsuLi57IHZhbHVlcywgbW9udGhzLCBzZWxlY3RlZE1vbnRocywgaGFuZGxlTW9udGhTZWxlY3Rpb24gfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAge2lzU3VibWl0dGVkICYmIHJlc3VsdHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPFBhcGVyPlxyXG4gICAgICAgICAgICAgICAgPEJveCBwPXtzbSA/IDIgOiA0fT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgbXQ9ezF9IG1iPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXN1bHRUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOWkqumYs+aYr+S4gOmhuemrmOaAp+iDveeahOaKlei1hFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3Jlc3VsdHMubWFwKChyZXN1bHQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGtleT17dXVpZCgpfSBpdGVtIGxnPXs2fSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxhbiB7Li4ueyByZXN1bHQsIHNlbGVjdGVkTW9udGhzIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJlc3VsdFRpdGxlOiB7XHJcbiAgICBmb250RmFtaWx5OiBcIk5vdG8gU2FucyBTQ1wiLFxyXG4gICAgZm9udFNpemU6IDQ4LFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCIwLjAxZW1cIixcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG4gIGluZm9DYXJkOiB7XHJcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/index",{

/***/ "./module/Calculator/Plan.js":
/*!***********************************!*\
  !*** ./module/Calculator/Plan.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Plan; });
/* harmony import */ var E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var images_payment_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! images/payment.svg */ "./images/payment.svg");
/* harmony import */ var images_savings_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! images/savings.svg */ "./images/savings.svg");
/* harmony import */ var _Chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Chart */ "./module/Calculator/Chart.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "E:\\client-projects\\solar-calculator-chinese\\module\\Calculator\\Plan.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function Plan(_ref) {
  _s();

  var _ref2;

  var result = _ref.result,
      selectedMonths = _ref.selectedMonths;
  var theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var sm = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])(theme.breakpoints.down("sm"));
  var chartData = result.chartData;
  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 3,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      textAlign: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        variant: "h5",
        className: classes.planName,
        children: [result.month, " \u4E2A\u6708\u6295\u8D44\u8BA1\u5212"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      mt: 2,
      className: classes.planContent,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        className: classes.paymentSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          className: classes.paymentIconBox,
          textAlign: "center",
          p: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(images_payment_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: classes.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          className: classes.paymentContent,
          p: 1,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "h6",
              style: {
                color: "white",
                fontSize: sm ? 14 : 20,
                fontFamily: "Noto Sans SC",
                fontWeight: 400
              },
              children: "\u8D39\u7528"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            mt: 2,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "h1",
              style: {
                color: "white",
                fontSize: sm ? 36 : 48,
                fontWeight: 600
              },
              children: ["$", result.payment.perWeek]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "h6",
              style: (_ref2 = {
                color: "white",
                fontSize: 20,
                fontWeight: 400,
                fontFamily: "Noto Sans SC"
              }, Object(E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "fontWeight", 400), Object(E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, "marginLeft", 5), _ref2),
              children: "\u6BCF\u5468"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center",
            mt: 2,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "subtitle1",
              style: {
                color: "white",
                fontSize: sm ? 12 : 16,
                fontFamily: "Noto Sans SC",
                fontWeight: 400
              },
              children: [result.month, " \u4E2A\u6708\u603B\u8D39\u7528"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "subtitle1",
              style: {
                color: "white"
              },
              children: ["$", result.payment.totalCost]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center",
            mt: 2,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "subtitle1",
              style: {
                color: "white",
                fontSize: sm ? 12 : 16,
                fontFamily: "Noto Sans SC",
                fontWeight: 400
              },
              children: "\u7B2C\u4E00\u5E74\u8D39\u7528"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "subtitle1",
              style: {
                color: "white"
              },
              children: ["$", (result.payment.totalCost / (result.month / 12)).toFixed(2)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        className: classes.savingsSection,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          className: classes.savingsIconBox,
          textAlign: "center",
          p: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(images_savings_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: classes.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          className: classes.savingsContent,
          p: 1,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "h6",
              style: {
                color: "white",
                fontSize: sm ? 14 : 20,
                fontFamily: "Noto Sans SC",
                fontWeight: 400
              },
              children: "\u9884\u8BA1\u6536\u76CA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center",
            mt: 2,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "h1",
              style: {
                color: "white",
                fontSize: sm ? 36 : 48,
                fontWeight: 600
              },
              children: ["$", result.savings.perWeekNew]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "h6",
              style: Object(E_client_projects_solar_calculator_chinese_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
                color: "white",
                fontSize: 20,
                fontWeight: 400,
                fontFamily: "Noto Sans SC"
              }, "fontWeight", 400),
              children: "\u6BCF\u5468"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center",
            mt: 2,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "subtitle1",
              style: {
                color: "white",
                fontSize: sm ? 12 : 16,
                fontFamily: "Noto Sans SC",
                fontWeight: 400
              },
              children: [result.month, " \u4E2A\u6708\u603B\u6536\u76CA"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "subtitle1",
              style: {
                color: "white"
              },
              children: ["$", result.savings.yearlySavings]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center",
            mt: 2,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "subtitle1",
              style: {
                color: "white",
                fontSize: sm ? 12 : 16,
                fontFamily: "Noto Sans SC",
                fontWeight: 400
              },
              children: "\u7B2C\u4E00\u5E74\u9884\u8BA1\u6536\u76CA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            textAlign: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "subtitle1",
              style: {
                color: "white"
              },
              children: ["$", result.savings.firstYearSavings]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      className: classes.planChart,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Chart__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, {
          chartData: chartData
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(Plan, "qb94YEgLrDFFjFauhKt40pC7Mbo=", false, function () {
  return [_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"], _material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"], useStyles];
});

_c = Plan;
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    planChart: {
      backgroundColor: "#fafafa"
    },
    planName: {
      fontFamily: "Poppins",
      fontSize: 20,
      fontWeight: 600
    },
    planContent: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    },
    paymentIconBox: {
      backgroundColor: "#3361C5"
    },
    paymentContent: {
      backgroundColor: "#3361C5",
      marginTop: 4
    },
    savingsIconBox: {
      backgroundColor: "#4C9A5A"
    },
    savingsContent: {
      backgroundColor: "#4C9A5A",
      marginTop: 4
    },
    icon: {
      width: 60,
      color: "white"
    }
  };
});

var _c;

$RefreshReg$(_c, "Plan");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlL0NhbGN1bGF0b3IvUGxhbi5qcyJdLCJuYW1lcyI6WyJQbGFuIiwicmVzdWx0Iiwic2VsZWN0ZWRNb250aHMiLCJ0aGVtZSIsInVzZVRoZW1lIiwic20iLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiY2hhcnREYXRhIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInBsYW5OYW1lIiwibW9udGgiLCJwbGFuQ29udGVudCIsInBheW1lbnRTZWN0aW9uIiwicGF5bWVudEljb25Cb3giLCJpY29uIiwicGF5bWVudENvbnRlbnQiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJwYXltZW50IiwicGVyV2VlayIsInRvdGFsQ29zdCIsInRvRml4ZWQiLCJzYXZpbmdzU2VjdGlvbiIsInNhdmluZ3NJY29uQm94Iiwic2F2aW5nc0NvbnRlbnQiLCJzYXZpbmdzIiwicGVyV2Vla05ldyIsInllYXJseVNhdmluZ3MiLCJmaXJzdFllYXJTYXZpbmdzIiwicGxhbkNoYXJ0IiwibWFrZVN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWFyZ2luVG9wIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUEwQztBQUFBOztBQUFBOztBQUFBLE1BQTFCQyxNQUEwQixRQUExQkEsTUFBMEI7QUFBQSxNQUFsQkMsY0FBa0IsUUFBbEJBLGNBQWtCO0FBQ3ZELE1BQU1DLEtBQUssR0FBR0Msa0VBQVEsRUFBdEI7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLHVFQUFhLENBQUNILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBRCxDQUF4QjtBQUZ1RCxNQUcvQ0MsU0FIK0MsR0FHakNSLE1BSGlDLENBRy9DUSxTQUgrQztBQUt2RCxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFDQSxzQkFDRSxxRUFBQyxxREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUEsNEJBQ0UscUVBQUMscURBQUQ7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDZCQUNFLHFFQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQXlCLGlCQUFTLEVBQUVELE9BQU8sQ0FBQ0UsUUFBNUM7QUFBQSxtQkFDR1gsTUFBTSxDQUFDWSxLQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FLHFFQUFDLHFEQUFEO0FBQUssUUFBRSxFQUFFLENBQVQ7QUFBWSxlQUFTLEVBQUVILE9BQU8sQ0FBQ0ksV0FBL0I7QUFBQSw4QkFDRSxxRUFBQyxxREFBRDtBQUFLLGlCQUFTLEVBQUVKLE9BQU8sQ0FBQ0ssY0FBeEI7QUFBQSxnQ0FDRSxxRUFBQyxxREFBRDtBQUFLLG1CQUFTLEVBQUVMLE9BQU8sQ0FBQ00sY0FBeEI7QUFBd0MsbUJBQVMsRUFBQyxRQUFsRDtBQUEyRCxXQUFDLEVBQUUsQ0FBOUQ7QUFBQSxpQ0FDRSxxRUFBQywwREFBRDtBQUFhLHFCQUFTLEVBQUVOLE9BQU8sQ0FBQ087QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSxxRUFBQyxxREFBRDtBQUFLLG1CQUFTLEVBQUVQLE9BQU8sQ0FBQ1EsY0FBeEI7QUFBd0MsV0FBQyxFQUFFLENBQTNDO0FBQUEsa0NBQ0UscUVBQUMscURBQUQ7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxtQ0FDRSxxRUFBQyw0REFBRDtBQUNFLHFCQUFPLEVBQUMsSUFEVjtBQUVFLG1CQUFLLEVBQUU7QUFDTEMscUJBQUssRUFBRSxPQURGO0FBRUxDLHdCQUFRLEVBQUVmLEVBQUUsR0FBRyxFQUFILEdBQVEsRUFGZjtBQUdMZ0IsMEJBQVUsRUFBRSxjQUhQO0FBSUxDLDBCQUFVLEVBQUU7QUFKUCxlQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQWNFLHFFQUFDLHFEQUFEO0FBQ0UscUJBQVMsRUFBQyxRQURaO0FBRUUsbUJBQU8sRUFBQyxNQUZWO0FBR0Usc0JBQVUsRUFBQyxVQUhiO0FBSUUsMEJBQWMsRUFBQyxRQUpqQjtBQUtFLGNBQUUsRUFBRSxDQUxOO0FBQUEsb0NBT0UscUVBQUMsNERBQUQ7QUFDRSxxQkFBTyxFQUFDLElBRFY7QUFFRSxtQkFBSyxFQUFFO0FBQ0xILHFCQUFLLEVBQUUsT0FERjtBQUVMQyx3QkFBUSxFQUFFZixFQUFFLEdBQUcsRUFBSCxHQUFRLEVBRmY7QUFHTGlCLDBCQUFVLEVBQUU7QUFIUCxlQUZUO0FBQUEsOEJBUUlyQixNQUFNLENBQUNzQixPQUFQLENBQWVDLE9BUm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRixlQWlCRSxxRUFBQyw0REFBRDtBQUNFLHFCQUFPLEVBQUMsSUFEVjtBQUVFLG1CQUFLO0FBQ0hMLHFCQUFLLEVBQUUsT0FESjtBQUVIQyx3QkFBUSxFQUFFLEVBRlA7QUFHSEUsMEJBQVUsRUFBRSxHQUhUO0FBSUhELDBCQUFVLEVBQUU7QUFKVCx1TEFLUyxHQUxULHlLQU1TLENBTlQsU0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRGLGVBNkNFLHFFQUFDLHFEQUFEO0FBQUsscUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBN0NGLGVBK0NFLHFFQUFDLHFEQUFEO0FBQUsscUJBQVMsRUFBQyxRQUFmO0FBQXdCLGNBQUUsRUFBRSxDQUE1QjtBQUFBLG1DQUNFLHFFQUFDLDREQUFEO0FBQ0UscUJBQU8sRUFBQyxXQURWO0FBRUUsbUJBQUssRUFBRTtBQUNMRixxQkFBSyxFQUFFLE9BREY7QUFFTEMsd0JBQVEsRUFBRWYsRUFBRSxHQUFHLEVBQUgsR0FBUSxFQUZmO0FBR0xnQiwwQkFBVSxFQUFFLGNBSFA7QUFJTEMsMEJBQVUsRUFBRTtBQUpQLGVBRlQ7QUFBQSx5QkFTR3JCLE1BQU0sQ0FBQ1ksS0FUVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQS9DRixlQTRERSxxRUFBQyxxREFBRDtBQUFLLHFCQUFTLEVBQUMsUUFBZjtBQUFBLG1DQUNFLHFFQUFDLDREQUFEO0FBQVkscUJBQU8sRUFBQyxXQUFwQjtBQUFnQyxtQkFBSyxFQUFFO0FBQUVNLHFCQUFLLEVBQUU7QUFBVCxlQUF2QztBQUFBLDhCQUNJbEIsTUFBTSxDQUFDc0IsT0FBUCxDQUFlRSxTQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTVERixlQWtFRSxxRUFBQyxxREFBRDtBQUFLLHFCQUFTLEVBQUMsUUFBZjtBQUF3QixjQUFFLEVBQUUsQ0FBNUI7QUFBQSxtQ0FDRSxxRUFBQyw0REFBRDtBQUNFLHFCQUFPLEVBQUMsV0FEVjtBQUVFLG1CQUFLLEVBQUU7QUFDTE4scUJBQUssRUFBRSxPQURGO0FBRUxDLHdCQUFRLEVBQUVmLEVBQUUsR0FBRyxFQUFILEdBQVEsRUFGZjtBQUdMZ0IsMEJBQVUsRUFBRSxjQUhQO0FBSUxDLDBCQUFVLEVBQUU7QUFKUCxlQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsRUYsZUErRUUscUVBQUMscURBQUQ7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxtQ0FDRSxxRUFBQyw0REFBRDtBQUFZLHFCQUFPLEVBQUMsV0FBcEI7QUFBZ0MsbUJBQUssRUFBRTtBQUFFSCxxQkFBSyxFQUFFO0FBQVQsZUFBdkM7QUFBQSw4QkFDSSxDQUFDbEIsTUFBTSxDQUFDc0IsT0FBUCxDQUFlRSxTQUFmLElBQTRCeEIsTUFBTSxDQUFDWSxLQUFQLEdBQWUsRUFBM0MsQ0FBRCxFQUFpRGEsT0FBakQsQ0FBeUQsQ0FBekQsQ0FESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQS9FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUE0RkUscUVBQUMscURBQUQ7QUFBSyxpQkFBUyxFQUFFaEIsT0FBTyxDQUFDaUIsY0FBeEI7QUFBQSxnQ0FDRSxxRUFBQyxxREFBRDtBQUFLLG1CQUFTLEVBQUVqQixPQUFPLENBQUNrQixjQUF4QjtBQUF3QyxtQkFBUyxFQUFDLFFBQWxEO0FBQTJELFdBQUMsRUFBRSxDQUE5RDtBQUFBLGlDQUNFLHFFQUFDLDBEQUFEO0FBQWEscUJBQVMsRUFBRWxCLE9BQU8sQ0FBQ087QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRSxxRUFBQyxxREFBRDtBQUFLLG1CQUFTLEVBQUVQLE9BQU8sQ0FBQ21CLGNBQXhCO0FBQXdDLFdBQUMsRUFBRSxDQUEzQztBQUFBLGtDQUNFLHFFQUFDLHFEQUFEO0FBQUsscUJBQVMsRUFBQyxRQUFmO0FBQUEsbUNBQ0UscUVBQUMsNERBQUQ7QUFDRSxxQkFBTyxFQUFDLElBRFY7QUFFRSxtQkFBSyxFQUFFO0FBQ0xWLHFCQUFLLEVBQUUsT0FERjtBQUVMQyx3QkFBUSxFQUFFZixFQUFFLEdBQUcsRUFBSCxHQUFRLEVBRmY7QUFHTGdCLDBCQUFVLEVBQUUsY0FIUDtBQUlMQywwQkFBVSxFQUFFO0FBSlAsZUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFjRSxxRUFBQyxxREFBRDtBQUFLLHFCQUFTLEVBQUMsUUFBZjtBQUF3QixjQUFFLEVBQUUsQ0FBNUI7QUFBQSxvQ0FDRSxxRUFBQyw0REFBRDtBQUNFLHFCQUFPLEVBQUMsSUFEVjtBQUVFLG1CQUFLLEVBQUU7QUFDTEgscUJBQUssRUFBRSxPQURGO0FBRUxDLHdCQUFRLEVBQUVmLEVBQUUsR0FBRyxFQUFILEdBQVEsRUFGZjtBQUdMaUIsMEJBQVUsRUFBRTtBQUhQLGVBRlQ7QUFBQSw4QkFRSXJCLE1BQU0sQ0FBQzZCLE9BQVAsQ0FBZUMsVUFSbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBV0UscUVBQUMsNERBQUQ7QUFDRSxxQkFBTyxFQUFDLElBRFY7QUFFRSxtQkFBSztBQUNIWixxQkFBSyxFQUFFLE9BREo7QUFFSEMsd0JBQVEsRUFBRSxFQUZQO0FBR0hFLDBCQUFVLEVBQUUsR0FIVDtBQUlIRCwwQkFBVSxFQUFFO0FBSlQsK0JBS1MsR0FMVCxDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkRixlQXNDRSxxRUFBQyxxREFBRDtBQUFLLHFCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXRDRixlQXdDRSxxRUFBQyxxREFBRDtBQUFLLHFCQUFTLEVBQUMsUUFBZjtBQUF3QixjQUFFLEVBQUUsQ0FBNUI7QUFBQSxtQ0FDRSxxRUFBQyw0REFBRDtBQUNFLHFCQUFPLEVBQUMsV0FEVjtBQUVFLG1CQUFLLEVBQUU7QUFDTEYscUJBQUssRUFBRSxPQURGO0FBRUxDLHdCQUFRLEVBQUVmLEVBQUUsR0FBRyxFQUFILEdBQVEsRUFGZjtBQUdMZ0IsMEJBQVUsRUFBRSxjQUhQO0FBSUxDLDBCQUFVLEVBQUU7QUFKUCxlQUZUO0FBQUEseUJBU0dyQixNQUFNLENBQUNZLEtBVFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4Q0YsZUFxREUscUVBQUMscURBQUQ7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQSxtQ0FDRSxxRUFBQyw0REFBRDtBQUFZLHFCQUFPLEVBQUMsV0FBcEI7QUFBZ0MsbUJBQUssRUFBRTtBQUFFTSxxQkFBSyxFQUFFO0FBQVQsZUFBdkM7QUFBQSw4QkFDSWxCLE1BQU0sQ0FBQzZCLE9BQVAsQ0FBZUUsYUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyREYsZUEwREUscUVBQUMscURBQUQ7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBd0IsY0FBRSxFQUFFLENBQTVCO0FBQUEsbUNBQ0UscUVBQUMsNERBQUQ7QUFDRSxxQkFBTyxFQUFDLFdBRFY7QUFFRSxtQkFBSyxFQUFFO0FBQ0xiLHFCQUFLLEVBQUUsT0FERjtBQUVMQyx3QkFBUSxFQUFFZixFQUFFLEdBQUcsRUFBSCxHQUFRLEVBRmY7QUFHTGdCLDBCQUFVLEVBQUUsY0FIUDtBQUlMQywwQkFBVSxFQUFFO0FBSlAsZUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBMURGLGVBdUVFLHFFQUFDLHFEQUFEO0FBQUsscUJBQVMsRUFBQyxRQUFmO0FBQUEsbUNBQ0UscUVBQUMsNERBQUQ7QUFBWSxxQkFBTyxFQUFDLFdBQXBCO0FBQWdDLG1CQUFLLEVBQUU7QUFBRUgscUJBQUssRUFBRTtBQUFULGVBQXZDO0FBQUEsOEJBQ0lsQixNQUFNLENBQUM2QixPQUFQLENBQWVHLGdCQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXZFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBdUxFLHFFQUFDLHFEQUFEO0FBQUssZUFBUyxFQUFFdkIsT0FBTyxDQUFDd0IsU0FBeEI7QUFBQSw2QkFDRSxxRUFBQyxxREFBRDtBQUFLLFNBQUMsRUFBRSxDQUFSO0FBQVcsZUFBTyxFQUFDLE1BQW5CO0FBQTBCLHNCQUFjLEVBQUMsUUFBekM7QUFBa0Qsa0JBQVUsRUFBQyxRQUE3RDtBQUFBLCtCQUNFLHFFQUFDLDhDQUFELG9CQUFlO0FBQUV6QixtQkFBUyxFQUFUQTtBQUFGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0xEOztHQXJNdUJULEk7VUFDUkksMEQsRUFDSEUsK0QsRUFHS0ssUzs7O0tBTE1YLEk7QUFzTXhCLElBQU1XLFNBQVMsR0FBR3dCLG9FQUFVLENBQUMsVUFBQ2hDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDK0IsYUFBUyxFQUFFO0FBQ1RFLHFCQUFlLEVBQUU7QUFEUixLQUQ0QjtBQUl2Q3hCLFlBQVEsRUFBRTtBQUNSUyxnQkFBVSxFQUFFLFNBREo7QUFFUkQsY0FBUSxFQUFFLEVBRkY7QUFHUkUsZ0JBQVUsRUFBRTtBQUhKLEtBSjZCO0FBU3ZDUixlQUFXLEVBQUU7QUFDWHVCLGFBQU8sRUFBRSxNQURFO0FBRVhDLHlCQUFtQixFQUFFO0FBRlYsS0FUMEI7QUFhdkN0QixrQkFBYyxFQUFFO0FBQ2RvQixxQkFBZSxFQUFFO0FBREgsS0FidUI7QUFnQnZDbEIsa0JBQWMsRUFBRTtBQUNka0IscUJBQWUsRUFBRSxTQURIO0FBRWRHLGVBQVMsRUFBRTtBQUZHLEtBaEJ1QjtBQW9CdkNYLGtCQUFjLEVBQUU7QUFDZFEscUJBQWUsRUFBRTtBQURILEtBcEJ1QjtBQXVCdkNQLGtCQUFjLEVBQUU7QUFDZE8scUJBQWUsRUFBRSxTQURIO0FBRWRHLGVBQVMsRUFBRTtBQUZHLEtBdkJ1QjtBQTJCdkN0QixRQUFJLEVBQUU7QUFDSnVCLFdBQUssRUFBRSxFQURIO0FBRUpyQixXQUFLLEVBQUU7QUFGSDtBQTNCaUMsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGY0ZGFmMTY2MzU0ODM2YWY1YWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgbWFrZVN0eWxlcyxcclxuICB1c2VNZWRpYVF1ZXJ5LFxyXG4gIHVzZVRoZW1lLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUGF5bWVudEljb24gZnJvbSBcImltYWdlcy9wYXltZW50LnN2Z1wiO1xyXG5pbXBvcnQgU2F2aW5nc0ljb24gZnJvbSBcImltYWdlcy9zYXZpbmdzLnN2Z1wiO1xyXG5pbXBvcnQgUGxhbkNoYXJ0IGZyb20gXCIuL0NoYXJ0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxhbih7IHJlc3VsdCwgc2VsZWN0ZWRNb250aHMgfSkge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBzbSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpKTtcclxuICBjb25zdCB7IGNoYXJ0RGF0YSB9ID0gcmVzdWx0O1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggbXQ9ezN9PlxyXG4gICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5wbGFuTmFtZX0+XHJcbiAgICAgICAgICB7cmVzdWx0Lm1vbnRofSDkuKrmnIjmipXotYTorqHliJJcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPEJveCBtdD17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLnBsYW5Db250ZW50fT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXltZW50U2VjdGlvbn0+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXltZW50SWNvbkJveH0gdGV4dEFsaWduPVwiY2VudGVyXCIgcD17Mn0+XHJcbiAgICAgICAgICAgIDxQYXltZW50SWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMucGF5bWVudENvbnRlbnR9IHA9ezF9PlxyXG4gICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHNtID8gMTQgOiAyMCxcclxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb3RvIFNhbnMgU0NcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDotLnnlKhcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImJhc2VsaW5lXCJcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgbXQ9ezJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImgxXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBzbSA/IDM2IDogNDgsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgJHtyZXN1bHQucGF5bWVudC5wZXJXZWVrfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vdG8gU2FucyBTQ1wiLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOavj+WRqFxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCI+PC9Cb3g+XHJcblxyXG4gICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiIG10PXsyfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogc20gPyAxMiA6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vdG8gU2FucyBTQ1wiLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtyZXN1bHQubW9udGh9IOS4quaciOaAu+i0ueeUqFxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAke3Jlc3VsdC5wYXltZW50LnRvdGFsQ29zdH1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtdD17Mn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHNtID8gMTIgOiAxNixcclxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJOb3RvIFNhbnMgU0NcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDnrKzkuIDlubTotLnnlKhcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgJHsocmVzdWx0LnBheW1lbnQudG90YWxDb3N0IC8gKHJlc3VsdC5tb250aCAvIDEyKSkudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnNhdmluZ3NTZWN0aW9ufT5cclxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnNhdmluZ3NJY29uQm94fSB0ZXh0QWxpZ249XCJjZW50ZXJcIiBwPXsyfT5cclxuICAgICAgICAgICAgPFNhdmluZ3NJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5zYXZpbmdzQ29udGVudH0gcD17MX0+XHJcbiAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogc20gPyAxNCA6IDIwLFxyXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vdG8gU2FucyBTQ1wiLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOmihOiuoeaUtuebilxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgbXQ9ezJ9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHNtID8gMzYgOiA0OCxcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAke3Jlc3VsdC5zYXZpbmdzLnBlcldlZWtOZXd9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTm90byBTYW5zIFNDXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg5q+P5ZGoXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj48L0JveD5cclxuXHJcbiAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgbXQ9ezJ9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VidGl0bGUxXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBzbSA/IDEyIDogMTYsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTm90byBTYW5zIFNDXCIsXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Jlc3VsdC5tb250aH0g5Liq5pyI5oC75pS255uKXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5cclxuICAgICAgICAgICAgICAgICR7cmVzdWx0LnNhdmluZ3MueWVhcmx5U2F2aW5nc31cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiIG10PXsyfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN1YnRpdGxlMVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogc20gPyAxMiA6IDE2LFxyXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk5vdG8gU2FucyBTQ1wiLFxyXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOesrOS4gOW5tOmihOiuoeaUtuebilxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAke3Jlc3VsdC5zYXZpbmdzLmZpcnN0WWVhclNhdmluZ3N9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLnBsYW5DaGFydH0+XHJcbiAgICAgICAgPEJveCBwPXs0fSBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPFBsYW5DaGFydCB7Li4ueyBjaGFydERhdGEgfX0gLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHBsYW5DaGFydDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNmYWZhZmFcIixcclxuICB9LFxyXG4gIHBsYW5OYW1lOiB7XHJcbiAgICBmb250RmFtaWx5OiBcIlBvcHBpbnNcIixcclxuICAgIGZvbnRTaXplOiAyMCxcclxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICB9LFxyXG4gIHBsYW5Db250ZW50OiB7XHJcbiAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiLFxyXG4gIH0sXHJcbiAgcGF5bWVudEljb25Cb3g6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzM2MUM1XCIsXHJcbiAgfSxcclxuICBwYXltZW50Q29udGVudDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzYxQzVcIixcclxuICAgIG1hcmdpblRvcDogNCxcclxuICB9LFxyXG4gIHNhdmluZ3NJY29uQm94OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzRDOUE1QVwiLFxyXG4gIH0sXHJcbiAgc2F2aW5nc0NvbnRlbnQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNEM5QTVBXCIsXHJcbiAgICBtYXJnaW5Ub3A6IDQsXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICB3aWR0aDogNjAsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/index",{

/***/ "./module/Calculator/Chart.js":
/*!************************************!*\
  !*** ./module/Calculator/Chart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlanChart; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "E:\\client-projects\\solar-calculator-chinese\\module\\Calculator\\Chart.js",
    _s = $RefreshSig$();




function PlanChart(_ref) {
  _s();

  var chartData = _ref.chartData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      options = _useState2[0],
      setOptions = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var chartLabels = chartData.chartLabels,
        charAnnualCosts = chartData.charAnnualCosts,
        chartSavings = chartData.chartSavings,
        chartExtra = chartData.chartExtra;
    var data = {
      labels: chartLabels,
      datasets: [{
        label: "总费用",
        data: charAnnualCosts,
        pointBackgroundColor: "white",
        pointBorderWidth: 1,
        pointRadius: 5,
        borderWidth: 2,
        tension: 0.5,
        backgroundColor: ["#3361C5"],
        borderColor: ["#3361C5"]
      }, {
        label: "预计收益",
        data: chartSavings,
        pointBackgroundColor: "white",
        pointBorderWidth: 1,
        pointRadius: 5,
        borderWidth: 2,
        tension: 0.5,
        backgroundColor: ["#4C9A5A"],
        borderColor: ["#4C9A5A"]
      }, {
        label: "",
        data: chartExtra,
        // pointBackgroundColor: "trans",
        // pointBorderWidth: 1,
        pointRadius: 0,
        borderWidth: 0,
        tension: 0.5,
        backgroundColor: ["transparent"] // borderColor: ["#4C9A5A"],

      }]
    };
    var options = {
      scales: {
        x: {
          ticks: {
            display: true,
            align: "center" // callback: function (val, index) {
            //   // Hide the label of every 2nd dataset
            //   return index % 2 === 0 ? this.getLabelForValue(val) : "";
            // },

          }
        },
        y: {
          ticks: {
            display: true,
            align: "center",
            callback: function callback(val, index) {
              // Hide the label of every 2nd dataset
              return "$ ".concat(this.getLabelForValue(val));
            }
          }
        }
      },
      plugins: {
        legend: {
          position: "top",
          labels: {
            boxWidth: 20
          }
        } // tooltip: {
        //   // mode: "dataset",
        //   title: "hello",
        // },

      }
    };
    setData(data);
    setOptions(options);
  }, [chartData]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: 270,
    children: data && options && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__["Line"], {
      data: data,
      height: 400,
      options: options
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 27
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, this);
}

_s(PlanChart, "Qils2wYgrsnQu+RWXHMMt8JmkZY=");

_c = PlanChart;

var _c;

$RefreshReg$(_c, "PlanChart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlL0NhbGN1bGF0b3IvQ2hhcnQuanMiXSwibmFtZXMiOlsiUGxhbkNoYXJ0IiwiY2hhcnREYXRhIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwidXNlRWZmZWN0IiwiY2hhcnRMYWJlbHMiLCJjaGFyQW5udWFsQ29zdHMiLCJjaGFydFNhdmluZ3MiLCJjaGFydEV4dHJhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsInBvaW50QmFja2dyb3VuZENvbG9yIiwicG9pbnRCb3JkZXJXaWR0aCIsInBvaW50UmFkaXVzIiwiYm9yZGVyV2lkdGgiLCJ0ZW5zaW9uIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJzY2FsZXMiLCJ4IiwidGlja3MiLCJkaXNwbGF5IiwiYWxpZ24iLCJ5IiwiY2FsbGJhY2siLCJ2YWwiLCJpbmRleCIsImdldExhYmVsRm9yVmFsdWUiLCJwbHVnaW5zIiwibGVnZW5kIiwicG9zaXRpb24iLCJib3hXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULE9BQWtDO0FBQUE7O0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUFBLGtCQUN2QkMsc0RBQVEsQ0FBQyxJQUFELENBRGU7QUFBQSxNQUN4Q0MsSUFEd0M7QUFBQSxNQUNsQ0MsT0FEa0M7O0FBQUEsbUJBRWpCRixzREFBUSxDQUFDLElBQUQsQ0FGUztBQUFBLE1BRXhDRyxPQUZ3QztBQUFBLE1BRS9CQyxVQUYrQjs7QUFJL0NDLHlEQUFTLENBQUMsWUFBTTtBQUFBLFFBQ1JDLFdBRFEsR0FDbURQLFNBRG5ELENBQ1JPLFdBRFE7QUFBQSxRQUNLQyxlQURMLEdBQ21EUixTQURuRCxDQUNLUSxlQURMO0FBQUEsUUFDc0JDLFlBRHRCLEdBQ21EVCxTQURuRCxDQUNzQlMsWUFEdEI7QUFBQSxRQUNvQ0MsVUFEcEMsR0FDbURWLFNBRG5ELENBQ29DVSxVQURwQztBQUVkLFFBQUlSLElBQUksR0FBRztBQUNUUyxZQUFNLEVBQUVKLFdBREM7QUFFVEssY0FBUSxFQUFFLENBQ1I7QUFDRUMsYUFBSyxFQUFFLEtBRFQ7QUFFRVgsWUFBSSxFQUFFTSxlQUZSO0FBR0VNLDRCQUFvQixFQUFFLE9BSHhCO0FBSUVDLHdCQUFnQixFQUFFLENBSnBCO0FBS0VDLG1CQUFXLEVBQUUsQ0FMZjtBQU1FQyxtQkFBVyxFQUFFLENBTmY7QUFPRUMsZUFBTyxFQUFFLEdBUFg7QUFRRUMsdUJBQWUsRUFBRSxDQUFDLFNBQUQsQ0FSbkI7QUFTRUMsbUJBQVcsRUFBRSxDQUFDLFNBQUQ7QUFUZixPQURRLEVBWVI7QUFDRVAsYUFBSyxFQUFFLE1BRFQ7QUFFRVgsWUFBSSxFQUFFTyxZQUZSO0FBR0VLLDRCQUFvQixFQUFFLE9BSHhCO0FBSUVDLHdCQUFnQixFQUFFLENBSnBCO0FBS0VDLG1CQUFXLEVBQUUsQ0FMZjtBQU1FQyxtQkFBVyxFQUFFLENBTmY7QUFPRUMsZUFBTyxFQUFFLEdBUFg7QUFTRUMsdUJBQWUsRUFBRSxDQUFDLFNBQUQsQ0FUbkI7QUFVRUMsbUJBQVcsRUFBRSxDQUFDLFNBQUQ7QUFWZixPQVpRLEVBd0JSO0FBQ0VQLGFBQUssRUFBRSxFQURUO0FBRUVYLFlBQUksRUFBRVEsVUFGUjtBQUdFO0FBQ0E7QUFDQU0sbUJBQVcsRUFBRSxDQUxmO0FBTUVDLG1CQUFXLEVBQUUsQ0FOZjtBQU9FQyxlQUFPLEVBQUUsR0FQWDtBQVNFQyx1QkFBZSxFQUFFLENBQUMsYUFBRCxDQVRuQixDQVVFOztBQVZGLE9BeEJRO0FBRkQsS0FBWDtBQXlDQSxRQUFJZixPQUFPLEdBQUc7QUFDWmlCLFlBQU0sRUFBRTtBQUNOQyxTQUFDLEVBQUU7QUFDREMsZUFBSyxFQUFFO0FBQ0xDLG1CQUFPLEVBQUUsSUFESjtBQUVMQyxpQkFBSyxFQUFFLFFBRkYsQ0FHTDtBQUNBO0FBQ0E7QUFDQTs7QUFOSztBQUROLFNBREc7QUFXTkMsU0FBQyxFQUFFO0FBQ0RILGVBQUssRUFBRTtBQUNMQyxtQkFBTyxFQUFFLElBREo7QUFFTEMsaUJBQUssRUFBRSxRQUZGO0FBR0xFLG9CQUFRLEVBQUUsa0JBQVVDLEdBQVYsRUFBZUMsS0FBZixFQUFzQjtBQUM5QjtBQUNBLGlDQUFZLEtBQUtDLGdCQUFMLENBQXNCRixHQUF0QixDQUFaO0FBQ0Q7QUFOSTtBQUROO0FBWEcsT0FESTtBQXVCWkcsYUFBTyxFQUFFO0FBQ1BDLGNBQU0sRUFBRTtBQUNOQyxrQkFBUSxFQUFFLEtBREo7QUFFTnRCLGdCQUFNLEVBQUU7QUFDTnVCLG9CQUFRLEVBQUU7QUFESjtBQUZGLFNBREQsQ0FPUDtBQUNBO0FBQ0E7QUFDQTs7QUFWTztBQXZCRyxLQUFkO0FBcUNBL0IsV0FBTyxDQUFDRCxJQUFELENBQVA7QUFDQUcsY0FBVSxDQUFDRCxPQUFELENBQVY7QUFDRCxHQWxGUSxFQWtGTixDQUFDSixTQUFELENBbEZNLENBQVQ7QUFvRkEsc0JBQ0UscUVBQUMscURBQUQ7QUFBSyxTQUFLLEVBQUUsR0FBWjtBQUFBLGNBQ0dFLElBQUksSUFBSUUsT0FBUixpQkFBbUIscUVBQUMsb0RBQUQ7QUFBTSxVQUFJLEVBQUVGLElBQVo7QUFBa0IsWUFBTSxFQUFFLEdBQTFCO0FBQStCLGFBQU8sRUFBRUU7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0E3RnVCTCxTOztLQUFBQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUzMjBmYTQ4NjE1ODEwNDJiMzMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxhbkNoYXJ0KHsgY2hhcnREYXRhIH0pIHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB7IGNoYXJ0TGFiZWxzLCBjaGFyQW5udWFsQ29zdHMsIGNoYXJ0U2F2aW5ncywgY2hhcnRFeHRyYSB9ID0gY2hhcnREYXRhO1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgIGxhYmVsczogY2hhcnRMYWJlbHMsXHJcbiAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwi5oC76LS555SoXCIsXHJcbiAgICAgICAgICBkYXRhOiBjaGFyQW5udWFsQ29zdHMsXHJcbiAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgcG9pbnRCb3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgIHBvaW50UmFkaXVzOiA1LFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICB0ZW5zaW9uOiAwLjUsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcIiMzMzYxQzVcIl0sXHJcbiAgICAgICAgICBib3JkZXJDb2xvcjogW1wiIzMzNjFDNVwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiBcIumihOiuoeaUtuebilwiLFxyXG4gICAgICAgICAgZGF0YTogY2hhcnRTYXZpbmdzLFxyXG4gICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICBwb2ludFJhZGl1czogNSxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgdGVuc2lvbjogMC41LFxyXG5cclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1wiIzRDOUE1QVwiXSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBbXCIjNEM5QTVBXCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6IFwiXCIsXHJcbiAgICAgICAgICBkYXRhOiBjaGFydEV4dHJhLFxyXG4gICAgICAgICAgLy8gcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNcIixcclxuICAgICAgICAgIC8vIHBvaW50Qm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICBwb2ludFJhZGl1czogMCxcclxuICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxyXG4gICAgICAgICAgdGVuc2lvbjogMC41LFxyXG5cclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1widHJhbnNwYXJlbnRcIl0sXHJcbiAgICAgICAgICAvLyBib3JkZXJDb2xvcjogW1wiIzRDOUE1QVwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgeDoge1xyXG4gICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIC8vIGNhbGxiYWNrOiBmdW5jdGlvbiAodmFsLCBpbmRleCkge1xyXG4gICAgICAgICAgICAvLyAgIC8vIEhpZGUgdGhlIGxhYmVsIG9mIGV2ZXJ5IDJuZCBkYXRhc2V0XHJcbiAgICAgICAgICAgIC8vICAgcmV0dXJuIGluZGV4ICUgMiA9PT0gMCA/IHRoaXMuZ2V0TGFiZWxGb3JWYWx1ZSh2YWwpIDogXCJcIjtcclxuICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB5OiB7XHJcbiAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgLy8gSGlkZSB0aGUgbGFiZWwgb2YgZXZlcnkgMm5kIGRhdGFzZXRcclxuICAgICAgICAgICAgICByZXR1cm4gYCQgJHt0aGlzLmdldExhYmVsRm9yVmFsdWUodmFsKX1gO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgIGxhYmVsczoge1xyXG4gICAgICAgICAgICBib3hXaWR0aDogMjAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gdG9vbHRpcDoge1xyXG4gICAgICAgIC8vICAgLy8gbW9kZTogXCJkYXRhc2V0XCIsXHJcbiAgICAgICAgLy8gICB0aXRsZTogXCJoZWxsb1wiLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICBzZXRPcHRpb25zKG9wdGlvbnMpO1xyXG4gIH0sIFtjaGFydERhdGFdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggd2lkdGg9ezI3MH0+XHJcbiAgICAgIHtkYXRhICYmIG9wdGlvbnMgJiYgPExpbmUgZGF0YT17ZGF0YX0gaGVpZ2h0PXs0MDB9IG9wdGlvbnM9e29wdGlvbnN9IC8+fVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
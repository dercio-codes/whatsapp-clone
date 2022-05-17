webpackHotUpdate_N_E("pages/chatroom",{

/***/ "./components/chat/chatItem.jsx":
/*!**************************************!*\
  !*** ./components/chat/chatItem.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Done */ \"./node_modules/@mui/icons-material/Done.js\");\n/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_DoneAll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/DoneAll */ \"./node_modules/@mui/icons-material/DoneAll.js\");\n/* harmony import */ var _mui_icons_material_DoneAll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_DoneAll__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/dercio/AppWorld/appworld-templates/whatsapp-clone/components/chat/chatItem.jsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar ChatItem = function ChatItem(_ref) {\n  var name = _ref.name,\n      message = _ref.message,\n      isMessageSent = _ref.isMessageSent,\n      time = _ref.time;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: {\n      display: \"flex\",\n      width: \"auto\",\n      m: \"4px 0\",\n      justifyContent: isMessageSent ? \"flex-start\" : \"flex-end\",\n      \"&:hover\": {\n        background: \"rgba(1,1,1,0.4)\"\n      }\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      sx: {\n        display: \"flex\",\n        minWidth: \"200px\",\n        flexDirection: isMessageSent ? \"row\" : \"row-reverse\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n        sx: {\n          maxidth: \"80px\",\n          display: \"flex\",\n          justifyContent: \"center\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n          src: \"\",\n          alt: \"Fede\",\n          sx: {\n            width: \"48px\",\n            height: \"48px\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n        sx: {\n          minWidth: \"70%\",\n          display: \"flex\",\n          padding: \"2px 8px\",\n          justifyContent: isMessageSent ? \"flex-start\" : \"flex-end\"\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          sx: {\n            minWidth: \"20px\",\n            maxWidth: \"80%\",\n            minHeight: \"48px\",\n            background: \"#333\",\n            color: \"#eee\",\n            borderRadius: isMessageSent ? \"12px 2px 18px 2px\" : \"2px 12px 2px 18px\",\n            padding: \"8px\",\n            display: \"flex\",\n            flexDirection: \"column\"\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n            fontWeight: \"600\",\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n            children: message\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n            textAlign: \"end\",\n            fontSize: \"14px\",\n            children: [time, isMessageSent ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              fontSize: \"8px\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 34\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_icons_material_DoneAll__WEBPACK_IMPORTED_MODULE_4___default.a, {\n              fontSize: \"8px\",\n              sx: {\n                margin: \"0px 4px\"\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 65\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ChatItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChatItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0L2NoYXRJdGVtLmpzeD8zZmI5Il0sIm5hbWVzIjpbIkNoYXRJdGVtIiwibmFtZSIsIm1lc3NhZ2UiLCJpc01lc3NhZ2VTZW50IiwidGltZSIsImRpc3BsYXkiLCJ3aWR0aCIsIm0iLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmQiLCJtaW5XaWR0aCIsImZsZXhEaXJlY3Rpb24iLCJtYXhpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTRDO0FBQUEsTUFBekNDLElBQXlDLFFBQXpDQSxJQUF5QztBQUFBLE1BQW5DQyxPQUFtQyxRQUFuQ0EsT0FBbUM7QUFBQSxNQUExQkMsYUFBMEIsUUFBMUJBLGFBQTBCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBRzNELHNCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsTUFBRSxFQUFFO0FBQ0ZDLGFBQU8sRUFBRSxNQURQO0FBRUZDLFdBQUssRUFBRSxNQUZMO0FBR0ZDLE9BQUMsRUFBRSxPQUhEO0FBSUZDLG9CQUFjLEVBQUVMLGFBQWEsR0FBRyxZQUFILEdBQWtCLFVBSjdDO0FBS0YsaUJBQVc7QUFDVE0sa0JBQVUsRUFBRTtBQURIO0FBTFQsS0FETjtBQUFBLDJCQVdFLHFFQUFDLGlEQUFEO0FBQ0UsUUFBRSxFQUFFO0FBQ0ZKLGVBQU8sRUFBRSxNQURQO0FBRUZLLGdCQUFRLEVBQUUsT0FGUjtBQUdGQyxxQkFBYSxFQUFFUixhQUFhLEdBQUcsS0FBSCxHQUFXO0FBSHJDLE9BRE47QUFBQSw4QkFPRSxxRUFBQyxpREFBRDtBQUNFLFVBQUUsRUFBRTtBQUFFUyxpQkFBTyxFQUFFLE1BQVg7QUFBbUJQLGlCQUFPLEVBQUUsTUFBNUI7QUFBb0NHLHdCQUFjLEVBQUU7QUFBcEQsU0FETjtBQUFBLCtCQUdFLHFFQUFDLG9EQUFEO0FBQVEsYUFBRyxFQUFDLEVBQVo7QUFBZSxhQUFHLEVBQUUsTUFBcEI7QUFBNEIsWUFBRSxFQUFFO0FBQUVGLGlCQUFLLEVBQUUsTUFBVDtBQUFpQk8sa0JBQU0sRUFBRTtBQUF6QjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBYUUscUVBQUMsaURBQUQ7QUFDRSxVQUFFLEVBQUU7QUFDRkgsa0JBQVEsRUFBRSxLQURSO0FBRUZMLGlCQUFPLEVBQUUsTUFGUDtBQUdGUyxpQkFBTyxFQUFFLFNBSFA7QUFJRk4sd0JBQWMsRUFBRUwsYUFBYSxHQUFHLFlBQUgsR0FBa0I7QUFKN0MsU0FETjtBQUFBLCtCQVFFLHFFQUFDLGlEQUFEO0FBQ0UsWUFBRSxFQUFFO0FBQ0ZPLG9CQUFRLEVBQUUsTUFEUjtBQUVGSyxvQkFBUSxFQUFFLEtBRlI7QUFHRkMscUJBQVMsRUFBRSxNQUhUO0FBSUZQLHNCQUFVLEVBQUUsTUFKVjtBQUtGUSxpQkFBSyxFQUFFLE1BTEw7QUFNRkMsd0JBQVksRUFBRWYsYUFBYSxHQUN2QixtQkFEdUIsR0FFdkIsbUJBUkY7QUFTRlcsbUJBQU8sRUFBRSxLQVRQO0FBVUZULG1CQUFPLEVBQUUsTUFWUDtBQVdGTSx5QkFBYSxFQUFFO0FBWGIsV0FETjtBQUFBLGtDQWVFLHFFQUFDLHdEQUFEO0FBQVksc0JBQVUsRUFBRSxLQUF4QjtBQUFBLHNCQUFnQ1Y7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRixlQWdCRSxxRUFBQyx3REFBRDtBQUFBLHNCQUFhQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJGLGVBaUJFLHFFQUFDLHdEQUFEO0FBQVkscUJBQVMsRUFBRSxLQUF2QjtBQUE4QixvQkFBUSxFQUFFLE1BQXhDO0FBQUEsdUJBQ0dFLElBREgsRUFHSUQsYUFBYSxnQkFBSSxxRUFBQywrREFBRDtBQUFVLHNCQUFRLEVBQUU7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBSixnQkFBbUMscUVBQUMsa0VBQUQ7QUFBYSxzQkFBUSxFQUFFLEtBQXZCO0FBQThCLGdCQUFFLEVBQUU7QUFBQ2dCLHNCQUFNLEVBQUM7QUFBUjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErREQsQ0FsRUQ7O0tBQU1uQixRO0FBb0VTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2hhdC9jaGF0SXRlbS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEF2YXRhciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRG9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Eb25lJztcbmltcG9ydCBEb25lQWxsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RvbmVBbGwnO1xuY29uc3QgQ2hhdEl0ZW0gPSAoeyBuYW1lLCBtZXNzYWdlLCBpc01lc3NhZ2VTZW50LCB0aW1lIH0pID0+IHtcblxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIHdpZHRoOiBcImF1dG9cIixcbiAgICAgICAgbTogXCI0cHggMFwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogaXNNZXNzYWdlU2VudCA/IFwiZmxleC1zdGFydFwiIDogXCJmbGV4LWVuZFwiLFxuICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgxLDEsMSwwLjQpXCIsXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBtaW5XaWR0aDogXCIyMDBweFwiLFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGlzTWVzc2FnZVNlbnQgPyBcInJvd1wiIDogXCJyb3ctcmV2ZXJzZVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3sgbWF4aWR0aDogXCI4MHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEF2YXRhciBzcmM9XCJcIiBhbHQ9e1wiRmVkZVwifSBzeD17eyB3aWR0aDogXCI0OHB4XCIsIGhlaWdodDogXCI0OHB4XCIgfX0gLz5cbiAgICAgICAgPC9Cb3g+XG4gIFxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIG1pbldpZHRoOiBcIjcwJVwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjJweCA4cHhcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBpc01lc3NhZ2VTZW50ID8gXCJmbGV4LXN0YXJ0XCIgOiBcImZsZXgtZW5kXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIG1pbldpZHRoOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiODAlXCIsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogXCI0OHB4XCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICBjb2xvcjogXCIjZWVlXCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogaXNNZXNzYWdlU2VudFxuICAgICAgICAgICAgICAgID8gXCIxMnB4IDJweCAxOHB4IDJweFwiXG4gICAgICAgICAgICAgICAgOiBcIjJweCAxMnB4IDJweCAxOHB4XCIsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBmb250V2VpZ2h0PXtcIjYwMFwifT57bmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeT57bWVzc2FnZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB0ZXh0QWxpZ249e1wiZW5kXCJ9IGZvbnRTaXplPXtcIjE0cHhcIn0+XG4gICAgICAgICAgICAgIHt0aW1lfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXNNZXNzYWdlU2VudCA/ICA8RG9uZUljb24gZm9udFNpemU9e1wiOHB4XCJ9Lz4gOiA8RG9uZUFsbEljb24gZm9udFNpemU9e1wiOHB4XCJ9IHN4PXt7bWFyZ2luOlwiMHB4IDRweFwifX0vPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhdEl0ZW07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/chat/chatItem.jsx\n");

/***/ })

})
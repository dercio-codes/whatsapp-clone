webpackHotUpdate_N_E("pages/chatroom",{

/***/ "./pages/chatroom.js":
/*!***************************!*\
  !*** ./pages/chatroom.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contacts */ \"./components/contacts/index.jsx\");\n/* harmony import */ var _components_Searchbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Searchbar */ \"./components/Searchbar/index.jsx\");\n/* harmony import */ var _components_chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/chat */ \"./components/chat/index.jsx\");\n/* harmony import */ var _components_archived__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/archived */ \"./components/archived/index.jsx\");\n/* harmony import */ var _components_chatbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/chatbox */ \"./components/chatbox/index.jsx\");\n/* harmony import */ var _context_User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/User */ \"./context/User.js\");\n\n\nvar _jsxFileName = \"/home/dercio/AppWorld/appworld-templates/whatsapp-clone/pages/chatroom.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar ChatRoom = function ChatRoom() {\n  _s();\n\n  var currentWallPaper = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_User__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n  console.log(currentWallPaper);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    container: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n      item: true,\n      md: 3.5,\n      sx: {\n        height: \"100vh\",\n        overflowY: \"scroll\",\n        background: \"#111\",\n        color: \"#eee\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_archived__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_contacts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n      item: true,\n      md: 8.5,\n      sx: {\n        height: \"100vh\",\n        background: \"#111\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        sx: {\n          backgroundSize: \"cover\",\n          backgroundAttachment: \"fixed\",\n          backgroundImage: \"url(\\\"\".concat(currentWallPaper.wallPaper, \"\\\")\") // 'url(\"https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\")',\n\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          sx: {\n            overflowY: \"scroll\",\n            padding: \"8px\",\n            height: \"75vh\",\n            background: \"rgba(1,1,1,.5)\"\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_chat__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        sx: {\n          height: \"15vh\",\n          // background: \"red\",\n          display: 'flex',\n          alignItems: 'center'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_chatbox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ChatRoom, \"kUfcXnz8FKPQDOQCGz3FHJajb9A=\");\n\n_c = ChatRoom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatRoom);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChatRoom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdHJvb20uanM/NDg2MyJdLCJuYW1lcyI6WyJDaGF0Um9vbSIsImN1cnJlbnRXYWxsUGFwZXIiLCJ1c2VDb250ZXh0IiwiV2FsbFBhcGVyQ29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRBdHRhY2htZW50IiwiYmFja2dyb3VuZEltYWdlIiwid2FsbFBhcGVyIiwicGFkZGluZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFckIsTUFBTUMsZ0JBQWdCLEdBQUdDLHdEQUFVLENBQUNDLHFEQUFELENBQW5DO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixnQkFBWjtBQUVBLHNCQUNFLHFFQUFDLGtEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQUEsNEJBQ0UscUVBQUMsa0RBQUQ7QUFDRSxVQUFJLE1BRE47QUFFRSxRQUFFLEVBQUUsR0FGTjtBQUdFLFFBQUUsRUFBRTtBQUNGSyxjQUFNLEVBQUUsT0FETjtBQUVGQyxpQkFBUyxFQUFFLFFBRlQ7QUFHRkMsa0JBQVUsRUFBRSxNQUhWO0FBSUZDLGFBQUssRUFBRTtBQUpMLE9BSE47QUFBQSw4QkFVRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkYsZUFZRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFlRSxxRUFBQyxrREFBRDtBQUNFLFVBQUksTUFETjtBQUVFLFFBQUUsRUFBRSxHQUZOO0FBR0UsUUFBRSxFQUFFO0FBQ0ZILGNBQU0sRUFBRSxPQUROO0FBRUZFLGtCQUFVLEVBQUU7QUFGVixPQUhOO0FBQUEsOEJBUUUscUVBQUMsaURBQUQ7QUFDRSxVQUFFLEVBQUU7QUFDRkUsd0JBQWMsRUFBRSxPQURkO0FBRUZDLDhCQUFvQixFQUFFLE9BRnBCO0FBR0ZDLHlCQUFlLGtCQUFTWCxnQkFBZ0IsQ0FBQ1ksU0FBMUIsUUFIYixDQUlBOztBQUpBLFNBRE47QUFBQSwrQkFRRSxxRUFBQyxpREFBRDtBQUNFLFlBQUUsRUFBRTtBQUNGTixxQkFBUyxFQUFFLFFBRFQ7QUFFRk8sbUJBQU8sRUFBRSxLQUZQO0FBR0ZSLGtCQUFNLEVBQUUsTUFITjtBQUlGRSxzQkFBVSxFQUFFO0FBSlYsV0FETjtBQUFBLGlDQVFFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGLGVBMkJFLHFFQUFDLGlEQUFEO0FBQ0UsVUFBRSxFQUFFO0FBQ0ZGLGdCQUFNLEVBQUUsTUFETjtBQUVGO0FBQ0FTLGlCQUFPLEVBQUMsTUFITjtBQUlGQyxvQkFBVSxFQUFDO0FBSlQsU0FETjtBQUFBLCtCQVFFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0RELENBN0REOztHQUFNaEIsUTs7S0FBQUEsUTtBQStEU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jaGF0cm9vbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHt1c2VDb250ZXh0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgR3JpZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgQ29udGFjdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGFjdHNcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoYmFyXCI7XG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGF0XCI7XG5pbXBvcnQgQXJjaGl2ZWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXJjaGl2ZWRcIjtcbmltcG9ydCBDaGF0Qm94IGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXRib3hcIjtcbmltcG9ydCBXYWxsUGFwZXJDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L1VzZXJcIlxuXG5jb25zdCBDaGF0Um9vbSA9ICgpID0+IHtcblxuICBjb25zdCBjdXJyZW50V2FsbFBhcGVyID0gdXNlQ29udGV4dChXYWxsUGFwZXJDb250ZXh0KVxuICBjb25zb2xlLmxvZyhjdXJyZW50V2FsbFBhcGVyKVxuXG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgPEdyaWRcbiAgICAgICAgaXRlbVxuICAgICAgICBtZD17My41fVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMxMTFcIixcbiAgICAgICAgICBjb2xvcjogXCIjZWVlXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBcmNoaXZlZCAvPlxuICAgICAgICB7LyogPFNlYXJjaEJhciAvPiAqL31cbiAgICAgICAgPENvbnRhY3RzIC8+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZFxuICAgICAgICBpdGVtXG4gICAgICAgIG1kPXs4LjV9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjMTExXCIsXG4gICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6IFwiZml4ZWRcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpgdXJsKFwiJHtjdXJyZW50V2FsbFBhcGVyLndhbGxQYXBlcn1cIilgXG4gICAgICAgICAgICAgIC8vICd1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xNjI5MjM2L3BleGVscy1waG90by0xNjI5MjM2LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTFcIiknLFxuICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjc1dmhcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDEsMSwxLC41KVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hhdCAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTV2aFwiLFxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogXCJyZWRcIixcbiAgICAgICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxuICAgICAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJ1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q2hhdEJveCAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGF0Um9vbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chatroom.js\n");

/***/ })

})
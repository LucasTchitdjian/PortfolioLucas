"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/voxel-dog.js":
/*!*********************************!*\
  !*** ./components/voxel-dog.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelDog = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            // 8 -> 6\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xccccc, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, \"/dog.glb\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x + Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z + Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return function() {\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            top: \"50%\",\n            left: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2\",\n            mt: \"calc(0px - var(--spinner-size)\"\n        }, void 0, false, {\n            fileName: \"/home/lucas/code/LucasTchitdjian/programmes/react/portfolio/components/voxel-dog.js\",\n            lineNumber: 135,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/lucas/code/LucasTchitdjian/programmes/react/portfolio/components/voxel-dog.js\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, _this);\n};\n_s(VoxelDog, \"0SZaFiZUPVxe0T89pZIjNbtjoDU=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9fTl9FLy4vY29tcG9uZW50cy92b3hlbC1kb2cuanM/Y2Y0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSAnLi4vbGliL21vZGVsJ1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XG4gIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcbn1cblxuY29uc3QgVm94ZWxEb2cgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtyZW5kZXJlciwgc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbX2NhbWVyYSwgc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW3RhcmdldF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxuICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxuICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgIDEwLFxuICAgICAgMjAgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxuICAgIClcbiAgKVxuXG4gIGNvbnN0IFtzY2VuZV0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcbiAgY29uc3QgW19jb250cm9scywgc2V0Q29udHJvbHNdID0gdXNlU3RhdGUoKVxuXG4gIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyXG4gICAgaWYgKGNvbnRhaW5lciAmJiByZW5kZXJlcikge1xuICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XG5cbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXG4gICAgfVxuICB9LCBbcmVuZGVyZXJdKVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lclxuICAgIGlmIChjb250YWluZXIgJiYgIXJlbmRlcmVyKSB7XG4gICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcblxuICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgYWxwaGE6IHRydWVcbiAgICAgIH0pXG4gICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcbiAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxuXG4gICAgICAvLyA2NDAgLT4gMjQwXG4gICAgICAvLyA4IC0+IDZcbiAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyA0LjhcbiAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXG4gICAgICAgIC1zY2FsZSxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIHNjYWxlLFxuICAgICAgICAtc2NhbGUsXG4gICAgICAgIDAuMDEsXG4gICAgICAgIDUwMDAwXG4gICAgICApXG4gICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXG4gICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgIHNldENhbWVyYShjYW1lcmEpXG5cbiAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjYywgMSlcbiAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXG5cbiAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcbiAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxuICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXG5cbiAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsICcvZG9nLmdsYicsIHtcbiAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXG4gICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgYW5pbWF0ZSgpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9KVxuXG4gICAgICBsZXQgcmVxID0gbnVsbFxuICAgICAgbGV0IGZyYW1lID0gMFxuICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG5cbiAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSArIDEgOiBmcmFtZVxuXG4gICAgICAgIGlmIChmcmFtZSA8PSAxMDApIHtcbiAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXG4gICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUgLyAxMjApICogTWF0aC5QSSAqIDIwXG5cbiAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPVxuICAgICAgICAgICAgcC54ICsgTWF0aC5jb3Mocm90U3BlZWQpICsgcC56ICogTWF0aC5zaW4ocm90U3BlZWQpXG4gICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPVxuICAgICAgICAgICAgcC56ICsgTWF0aC5jb3Mocm90U3BlZWQpIC0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXG4gICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udHJvbHMudXBkYXRlKClcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcbiAgICAgIH1cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSlcbiAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcbiAgICB9XG4gIH0sIFtyZW5kZXJlciwgaGFuZGxlV2luZG93UmVzaXplXSlcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHJlZj17cmVmQ29udGFpbmVyfVxuICAgICAgY2xhc3NOYW1lPVwidm94ZWwtZG9nXCJcbiAgICAgIG09XCJhdXRvXCJcbiAgICAgIGF0PXtbJy0yMHB4JywgJy02MHB4JywgJy0xMjBweCddfVxuICAgICAgbWI9e1snLTQwcHgnLCAnLTE0MHB4JywgJy0yMDBweCddfVxuICAgICAgdz17WzI4MCwgNDgwLCA2NDBdfVxuICAgICAgaD17WzI4MCwgNDgwLCA2NDBdfVxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgPlxuICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgIHNpemU9XCJ4bFwiXG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgdG9wPVwiNTAlXCJcbiAgICAgICAgICBsZWZ0PVwiNTAlXCJcbiAgICAgICAgICBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvIDJcIlxuICAgICAgICAgIG10PVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVm94ZWxEb2dcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIlZveGVsRG9nIiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlZlY3RvcjMiLCJ0YXJnZXQiLCJzaW4iLCJQSSIsImNvcyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIlNjZW5lIiwic2NlbmUiLCJfY29udHJvbHMiLCJzZXRDb250cm9scyIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsImN1cnJlbnQiLCJjb250YWluZXIiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsImF0IiwibWIiLCJ3IiwiaCIsInNpemUiLCJ0b3AiLCJsZWZ0IiwibWwiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n");

/***/ })

});
"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --font-size: 20px;
    --background-color: 233,233,233;
    --nav-bar-gap: 1px;
    --nav-bar-btn-padding-horizontal: 4rem;
    --nav-bar-btn-padding-vertical: 1rem;
    --nav-bar-btn-font-size: 15px;

    --content-width: 800px;
    --item-cards-width: 350px;
    --item-cards-name-font-size: 20px;
    --item-cards-content-font-size: 16px;
    --item-cards-cost-font-size: 16px;
}  
*{
    margin: 0;
    padding: 0;
    border: none;
}

body{
    background-color: rgb(var(--background-color));
    min-height: 100vh;
    margin: 0;
    overflow: hidden;
}
#content{
    display: grid;
    min-height: 100vh;
    max-width: 100vw;
    grid-template-rows: auto auto 1fr auto;
    
}
.header{
    background-color: white;
    padding: 1rem;
    text-align: center;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin: 0;
}
.footer{
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    text-align: center;
    background-color: white;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
}

/* navBar */
#nav-bar{
    display: grid;
    min-width: var(--content-width);
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4px;
    margin-bottom: 1rem;
}
#nav-bar > button {
    padding: var(--nav-bar-btn-padding-vertical)  var(--nav-bar-btn-padding-horizontal);
    font-size: var(--nav-bar-btn-font-size);
}
.tab-content{
    justify-self: center;
    overflow:hidden;
}

/* home page */
#home-page{
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
    max-width: var(--content-width)
}
#hours-container,
#about-container{
    display: grid;
    grid-auto-rows: auto;
    gap: 1rem;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 1rem;
}
ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
}

/* menu */
#menu-page{
    width: var(--content-width);
    display: grid;
    gap: 2rem;
}
.item-card{
    display: grid;
    width: var(--item-cards-width);
    height: var(--item-cards-height);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 10px;
    border: 1px solid black;
    padding: 1rem;
    border-radius: 1rem;
}
.item-img{
    grid-row: 1 / 4;
    grid-column: 1 / 2;
    width: 200px;
    border-radius: 0.3rem;
}
.item-name{
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    font-size: var(--item-cards-name-font-size);
    font-weight: bold;
}
.item-about{
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    font-size: var(--item-cards-content-font-size);
}
.item-cost{
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    font-size: var(--item-cards-cost-font-size);
}
.food-grid, .drink-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.food-menu,
.drink-menu{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* contact */
.contact-card{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid black;
    padding: 1rem;
    border-radius: 1rem;
}
.contact-card-name{
    font-size: 2rem;;
    font-weight: bold;
}
.contact-card-phone,
.contact-card-address{
    font-size: 1.5rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,+BAA+B;IAC/B,kBAAkB;IAClB,sCAAsC;IACtC,oCAAoC;IACpC,6BAA6B;;IAE7B,sBAAsB;IACtB,yBAAyB;IACzB,iCAAiC;IACjC,oCAAoC;IACpC,iCAAiC;AACrC;AACA;IACI,SAAS;IACT,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,8CAA8C;IAC9C,iBAAiB;IACjB,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,gBAAgB;IAChB,sCAAsC;;AAE1C;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,0CAA0C;IAC1C,WAAW;IACX,SAAS;AACb;AACA;IACI,OAAO;IACP,SAAS;IACT,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,0CAA0C;AAC9C;;AAEA,WAAW;AACX;IACI,aAAa;IACb,+BAA+B;IAC/B,qCAAqC;IACrC,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,mFAAmF;IACnF,uCAAuC;AAC3C;AACA;IACI,oBAAoB;IACpB,eAAe;AACnB;;AAEA,cAAc;AACd;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;IACT;AACJ;AACA;;IAEI,aAAa;IACb,oBAAoB;IACpB,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,SAAS;IACT,UAAU;AACd;;AAEA,SAAS;AACT;IACI,2BAA2B;IAC3B,aAAa;IACb,SAAS;AACb;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,gCAAgC;IAChC,8BAA8B;IAC9B,iCAAiC;IACjC,SAAS;IACT,uBAAuB;IACvB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,2CAA2C;IAC3C,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,8CAA8C;AAClD;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,2CAA2C;AAC/C;AACA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA,YAAY;AACZ;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;IACvB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,iBAAiB;AACrB;AACA;;IAEI,iBAAiB;AACrB","sourcesContent":[":root{\n    --font-size: 20px;\n    --background-color: 233,233,233;\n    --nav-bar-gap: 1px;\n    --nav-bar-btn-padding-horizontal: 4rem;\n    --nav-bar-btn-padding-vertical: 1rem;\n    --nav-bar-btn-font-size: 15px;\n\n    --content-width: 800px;\n    --item-cards-width: 350px;\n    --item-cards-name-font-size: 20px;\n    --item-cards-content-font-size: 16px;\n    --item-cards-cost-font-size: 16px;\n}  \n*{\n    margin: 0;\n    padding: 0;\n    border: none;\n}\n\nbody{\n    background-color: rgb(var(--background-color));\n    min-height: 100vh;\n    margin: 0;\n    overflow: hidden;\n}\n#content{\n    display: grid;\n    min-height: 100vh;\n    max-width: 100vw;\n    grid-template-rows: auto auto 1fr auto;\n    \n}\n.header{\n    background-color: white;\n    padding: 1rem;\n    text-align: center;\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);\n    width: 100%;\n    margin: 0;\n}\n.footer{\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    padding: 1rem;\n    text-align: center;\n    background-color: white;\n    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);\n}\n\n/* navBar */\n#nav-bar{\n    display: grid;\n    min-width: var(--content-width);\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 4px;\n    margin-bottom: 1rem;\n}\n#nav-bar > button {\n    padding: var(--nav-bar-btn-padding-vertical)  var(--nav-bar-btn-padding-horizontal);\n    font-size: var(--nav-bar-btn-font-size);\n}\n.tab-content{\n    justify-self: center;\n    overflow:hidden;\n}\n\n/* home page */\n#home-page{\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    gap: 2rem;\n    max-width: var(--content-width)\n}\n#hours-container,\n#about-container{\n    display: grid;\n    grid-auto-rows: auto;\n    gap: 1rem;\n    border: 1px solid black;\n    border-radius: 1rem;\n    padding: 1rem;\n}\nul, li {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n/* menu */\n#menu-page{\n    width: var(--content-width);\n    display: grid;\n    gap: 2rem;\n}\n.item-card{\n    display: grid;\n    width: var(--item-cards-width);\n    height: var(--item-cards-height);\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto 1fr auto;\n    gap: 10px;\n    border: 1px solid black;\n    padding: 1rem;\n    border-radius: 1rem;\n}\n.item-img{\n    grid-row: 1 / 4;\n    grid-column: 1 / 2;\n    width: 200px;\n    border-radius: 0.3rem;\n}\n.item-name{\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n    font-size: var(--item-cards-name-font-size);\n    font-weight: bold;\n}\n.item-about{\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    font-size: var(--item-cards-content-font-size);\n}\n.item-cost{\n    grid-row: 3 / 4;\n    grid-column: 2 / 3;\n    font-size: var(--item-cards-cost-font-size);\n}\n.food-grid, .drink-grid{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n.food-menu,\n.drink-menu{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n/* contact */\n.contact-card{\n    margin-top: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    border: 1px solid black;\n    padding: 1rem;\n    border-radius: 1rem;\n}\n.contact-card-name{\n    font-size: 2rem;;\n    font-weight: bold;\n}\n.contact-card-phone,\n.contact-card-address{\n    font-size: 1.5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
function contactPage(){
    let contact;
    let contactDOM;
    const init = () =>{
        loadContacts();
    }
    const loadContacts = () => {
        const contactCard = createContact('Hisui Sushi', '000-000-0000', 'Folsom, CA');
        const contactCardDOM = createContactCardDOM(contactCard);

        contactDOM = document.createElement('div');
        contactDOM.setAttribute('id', 'contact-page');
        contactDOM.classList.add('content-page');
        contactDOM.appendChild(contactCardDOM)
    }
    const showContactsDOM = (container) => {
        container.appendChild(contactDOM);
    }
    // creates a contact card
    const createContact = (name, phone, address) => {
        contact = {
            name: name,
            phone: phone,
            address: address
        };
        return contact;
    }
    const createContactCardDOM = (contactCard) =>{
        const card = document.createElement('div');
        const name = document.createElement('p');
        const phone = document.createElement('p');
        const address = document.createElement('p');

        card.classList.add('contact-card');
        name.classList.add('contact-card-name');
        phone.classList.add('contact-card-phone');
        address.classList.add('contact-card-address');

        name.textContent = contactCard.name;
        phone.textContent = contactCard.phone;
        address.textContent = contactCard.address;

        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(address);

        return card;
    }
    init();
    return {showContactsDOM};
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
function homePage(){
    let home;
    let title;
    let about;
    let hours;

    let homeDOM;
    // let titleDOM;
    let aboutDOM;
    let hoursDOM;
    const init = () => {
        // title = 'Greetings! From Hisui Sushi';
        about = 'Combining traditional cuisine with a creative & contemporary flair, we focus on serving our foods in a health conscious manner, using only the freshest & the healthiest ingredients.';
        hours = ['11:00 AM - 02:00 PM', '04:30 PM - 08:30 PM'];
        loadDOM();
    }
    const loadDOM = () => {
        // titleDOM = createTitle(title);
        aboutDOM = createAbout(about);
        hoursDOM = createHours(hours);
        
        homeDOM = document.createElement('div');
        homeDOM.setAttribute('id', 'home-page');
        homeDOM.classList.add('content-page');
        // homeDOM.appendChild(titleDOM);
        homeDOM.appendChild(aboutDOM);
        homeDOM.appendChild(hoursDOM);
    }
    const showHomeDOM = (container) => {
        container.appendChild(homeDOM);;
    }
    const createTitle = (content) =>{
        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = content;
        return title;
    }
    const createHeading = (content) =>{
        const heading = document.createElement('h2');
        heading.classList.add('heading');
        heading.textContent = content;
        return heading;
    }
    const createAbout = (content) => {
        const aboutContainer = document.createElement('div');
        aboutContainer.setAttribute('id', 'about-container');
        const aboutHeading = createHeading('About');
        const aboutContent = document.createElement('p');
        aboutContent.classList.add('about-content');
        aboutContent.textContent = content;

        aboutContainer.appendChild(aboutHeading);
        aboutContainer.appendChild(aboutContent);
        return aboutContainer;
    }
    const createHours = (hours) => {
        const hoursContainer = document.createElement('div');
        hoursContainer.setAttribute('id', 'hours-container');

        const hoursHeading = createHeading('Opening Hours');
        const hoursList = document.createElement('ul');
        hoursList.classList.add('hours-list');

        hours.forEach((time) =>{
            const hoursItem = document.createElement('li');
            hoursItem.textContent = time;
            hoursList.appendChild(hoursItem);
        });

        hoursContainer.appendChild(hoursHeading);
        hoursContainer.appendChild(hoursList);

        return hoursContainer;
    }
    init();
    return {showHomeDOM};
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");








function pageController() {
    let tabContent;
    let homeBtn;
    let menuBtn;
    let contactBtn;
    let page;
    let contact;
    let home;
    let menu;

    const init = () => {
        createContent();
        load();
        cacheDOM();
        bindEvents();
        home.showHomeDOM(tabContent);
    }
    const cacheDOM = () => {
        tabContent = document.querySelector(".tab-content")
        homeBtn = document.getElementById('home-btn');
        menuBtn = document.getElementById('menu-btn');
        contactBtn = document.getElementById('contact-btn');
    }
    const load = () =>{
        page = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__["default"])('content');
        contact = (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
        home =  (0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        menu = (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
    const bindEvents = () => {
        homeBtn.addEventListener('click', () => {
            page.clearTabContent();
            home.showHomeDOM(tabContent);
        })
        menuBtn.addEventListener('click', () => {
            page.clearTabContent();
            menu.showMenuDOM(tabContent);
        })
        contactBtn.addEventListener('click', () => {
            page.clearTabContent();
            contact.showContactsDOM(tabContent);
        })
    }
    const createContent = () => {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id','content');
        const body = document.body;
        body.append(newDiv);
    }
    init();
}

const restaurantPage = pageController();

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _img_dragon_roll_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/dragon-roll.jpg */ "./src/img/dragon-roll.jpg");
/* harmony import */ var _img_tempura_roll_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/tempura-roll.jpg */ "./src/img/tempura-roll.jpg");
/* harmony import */ var _img_pocari_sweat_drink_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/pocari-sweat-drink.jpg */ "./src/img/pocari-sweat-drink.jpg");
/* harmony import */ var _img_ramune_drink_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/ramune-drink.png */ "./src/img/ramune-drink.png");






function menuPage(){
    let menuDOM;
    const init = () =>{
        loadMenu();
    }
    const loadMenu = () =>{
        menuDOM = document.createElement('div');
        menuDOM.setAttribute('id', 'menu-page');
        menuDOM.classList.add('content-page');

        const foodMenuDOM = createFoodDOM();
        const drinkMenuDOM = createDrinkDOM();
        menuDOM.appendChild(foodMenuDOM);
        menuDOM.appendChild(drinkMenuDOM);
    }
    const showMenuDOM = (container) => {
        container.appendChild(menuDOM);
    }
    const createItemCard = (name, about, cost, img) =>{
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');

        const nameDOM = document.createElement('p');
        nameDOM.classList.add('item-name');
        nameDOM.textContent = name;
        const aboutDOM = document.createElement('p');
        aboutDOM.classList.add('item-about');
        aboutDOM.textContent = about;
        const costDOM = document.createElement('p');
        costDOM.classList.add('item-cost');
        costDOM.textContent = '$ '+cost;
        const imgDOM = new Image();
        imgDOM.classList.add('item-img');
        imgDOM.src = img;

        itemCard.appendChild(nameDOM);
        itemCard.appendChild(aboutDOM);
        itemCard.appendChild(costDOM);
        itemCard.appendChild(imgDOM);
        return itemCard;
    }
    const createHeading = (content) =>{
        const heading = document.createElement('h2');
        heading.classList.add('heading');
        heading.textContent = content;
        return heading;
    }
    const createFoodDOM = () => {
        const foodDOM = document.createElement('div');
        foodDOM.classList.add('food-menu');
        const foodHeading = createHeading('Sushi');
        foodDOM.appendChild(foodHeading);
        
        const foodItems = document.createElement('div');
        foodItems.classList.add('food-grid');

        //adding food cards
        const dragonRollName = 'Dragon Roll';
        const dragonRollAbout = 'A sushi roll featuring shrimp tempura, avocado, and cucumber, topped with thin avocado slices and a drizzle of eel sauce.';
        const dragonRollCost = '18';
        const dragonRollImg = _img_dragon_roll_jpg__WEBPACK_IMPORTED_MODULE_0__;

        const tempRollName = 'Tempura Roll'
        const tempRollAbout = 'A sushi roll filled with tempura-fried seafood or vegetables, providing a crispy texture and savory flavor.';
        const tempRollCost = '12';
        const tempRollImg = _img_tempura_roll_jpg__WEBPACK_IMPORTED_MODULE_1__;
        const dragonRollCard = createItemCard(dragonRollName, dragonRollAbout, dragonRollCost, dragonRollImg);
        const tempRollCard = createItemCard(tempRollName, tempRollAbout,tempRollCost,tempRollImg);

        foodItems.appendChild(dragonRollCard);
        foodItems.appendChild(tempRollCard);
        foodDOM.appendChild(foodItems);
        return foodDOM;
    }
    const createDrinkDOM = () => {
        const drinkDOM = document.createElement('div');
        drinkDOM.classList.add('drink-menu')
        const drinkHeading = createHeading('Drinks');
        drinkDOM.appendChild(drinkHeading);

        const drinkItems = document.createElement('div');
        drinkItems.classList.add('drink-grid');
    
        // Adding drink cards
        const pocariSweatName = 'Pocari Sweat';
        const pocariSweatAbout = 'A Japanese isotonic drink designed to replenish electrolytes and fluids, offering a refreshing taste.';
        const pocariSweatCost = '3';
        const pocariSweatImg = _img_pocari_sweat_drink_jpg__WEBPACK_IMPORTED_MODULE_2__;
        const pocariSweatCard = createItemCard(pocariSweatName, pocariSweatAbout, pocariSweatCost, pocariSweatImg);
    
        const ramuneName = 'Ramune';
        const ramuneAbout = 'A popular Japanese soda with a distinctive marble-sealed bottle, available in various flavors and known for its effervescence.';
        const ramuneCost = '2.5';
        const ramuneImg = _img_ramune_drink_png__WEBPACK_IMPORTED_MODULE_3__;
        const ramuneCard = createItemCard(ramuneName, ramuneAbout, ramuneCost, ramuneImg);
    
        drinkItems.appendChild(pocariSweatCard);
        drinkItems.appendChild(ramuneCard);
        drinkDOM.appendChild(drinkItems);
        return drinkDOM;
    }
    init();
    return {showMenuDOM};
}

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadPage)
/* harmony export */ });
function loadPage(id){
    let content;    // parent div where page belongs
    let header;     // header reference
    let footer;     // footer reference
    let navBar;     // reference to navBar
    let tabContent; // reference to content for each tab
    let navContent;
    // initial run
    const init = () => {
        cacheDom();
        loadPage();
    }
    // get relevant dom elements
    const cacheDom = () => {
        content = document.getElementById(id)
    }
    // loads the page
    const loadPage = () => {
        header = createHeader('Hisui Sushi');
        navBar = createNavBar();
        footer = createFooter('Copyright © ' + new Date().getFullYear() + " Jackson Wu");
        tabContent = createTabContent();

        content.appendChild(header);
        content.appendChild(navBar);
        content.appendChild(tabContent);
        content.appendChild(footer);
    }
    // creates the header
    const createHeader = (title) => {
        const header = document.createElement('div');
        const headerTitle = document.createElement('h1');
        
        header.classList.add('header');
        header.setAttribute('id', 'header-title');

        headerTitle.textContent = title;
        header.appendChild(headerTitle);

        return header;
    }
    // creates the navigation bar
    const createNavBar = () => {
        const navBar = document.createElement('nav');
        navBar.setAttribute('id', 'nav-bar');

        const homeBtn = createTabBtn('home-btn', 'Home');
        const menuBtn = createTabBtn('menu-btn', 'Menu');
        const contactBtn = createTabBtn('contact-btn', 'Contact');

        navBar.appendChild(homeBtn);
        navBar.appendChild(menuBtn);
        navBar.appendChild(contactBtn);
        return navBar;
    }
    // creates a functional tab button
    const createTabBtn = (id, text) => {
        const newBtn = document.createElement('button');
        const span = document.createElement('span');

        newBtn.setAttribute('id', id);
        newBtn.classList.add('tab');

        span.textContent = text;

        newBtn.appendChild(span);

        return newBtn;
    }
    // Creates the footer for the webpage
    const createFooter = (text) => {
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        const para = document.createElement('p');
        para.textContent = text;
        footer.appendChild(para);
        return footer;
    }
    const createTabContent = () => {
        const tabContent = document.createElement('div');
        tabContent.classList.add('tab-content');
        return tabContent;
    }
    const clearTabContent = () => {
        while(tabContent.firstChild){
            tabContent.removeChild(tabContent.firstChild);
        }
    }
    init();
    return{content, header, footer, navBar, tabContent, clearTabContent};
}

/***/ }),

/***/ "./src/img/dragon-roll.jpg":
/*!*********************************!*\
  !*** ./src/img/dragon-roll.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e498c44b939748847592.jpg";

/***/ }),

/***/ "./src/img/pocari-sweat-drink.jpg":
/*!****************************************!*\
  !*** ./src/img/pocari-sweat-drink.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17d3c92a3ecf458ad378.jpg";

/***/ }),

/***/ "./src/img/ramune-drink.png":
/*!**********************************!*\
  !*** ./src/img/ramune-drink.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d61f3649ef5485f23348.png";

/***/ }),

/***/ "./src/img/tempura-roll.jpg":
/*!**********************************!*\
  !*** ./src/img/tempura-roll.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc5dcd2be980170760e9.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3REFBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGtEQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7O0FDN0dlO0FBQ2Ysb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tZm9udC1zaXplOiAyMHB4O1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogMjMzLDIzMywyMzM7XG4gICAgLS1uYXYtYmFyLWdhcDogMXB4O1xuICAgIC0tbmF2LWJhci1idG4tcGFkZGluZy1ob3Jpem9udGFsOiA0cmVtO1xuICAgIC0tbmF2LWJhci1idG4tcGFkZGluZy12ZXJ0aWNhbDogMXJlbTtcbiAgICAtLW5hdi1iYXItYnRuLWZvbnQtc2l6ZTogMTVweDtcblxuICAgIC0tY29udGVudC13aWR0aDogODAwcHg7XG4gICAgLS1pdGVtLWNhcmRzLXdpZHRoOiAzNTBweDtcbiAgICAtLWl0ZW0tY2FyZHMtbmFtZS1mb250LXNpemU6IDIwcHg7XG4gICAgLS1pdGVtLWNhcmRzLWNvbnRlbnQtZm9udC1zaXplOiAxNnB4O1xuICAgIC0taXRlbS1jYXJkcy1jb3N0LWZvbnQtc2l6ZTogMTZweDtcbn0gIFxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKHZhcigtLWJhY2tncm91bmQtY29sb3IpKTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNjb250ZW50e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnIgYXV0bztcbiAgICBcbn1cbi5oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cbi5mb290ZXJ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4vKiBuYXZCYXIgKi9cbiNuYXYtYmFye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWluLXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtZ2FwOiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbiNuYXYtYmFyID4gYnV0dG9uIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1uYXYtYmFyLWJ0bi1wYWRkaW5nLXZlcnRpY2FsKSAgdmFyKC0tbmF2LWJhci1idG4tcGFkZGluZy1ob3Jpem9udGFsKTtcbiAgICBmb250LXNpemU6IHZhcigtLW5hdi1iYXItYnRuLWZvbnQtc2l6ZSk7XG59XG4udGFiLWNvbnRlbnR7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xufVxuXG4vKiBob21lIHBhZ2UgKi9cbiNob21lLXBhZ2V7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgbWF4LXdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKVxufVxuI2hvdXJzLWNvbnRhaW5lcixcbiNhYm91dC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgICBnYXA6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxudWwsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4vKiBtZW51ICovXG4jbWVudS1wYWdle1xuICAgIHdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMnJlbTtcbn1cbi5pdGVtLWNhcmR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogdmFyKC0taXRlbS1jYXJkcy13aWR0aCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1pdGVtLWNhcmRzLWhlaWdodCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgICBnYXA6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLml0ZW0taW1ne1xuICAgIGdyaWQtcm93OiAxIC8gNDtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbn1cbi5pdGVtLW5hbWV7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0tY2FyZHMtbmFtZS1mb250LXNpemUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLml0ZW0tYWJvdXR7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0tY2FyZHMtY29udGVudC1mb250LXNpemUpO1xufVxuLml0ZW0tY29zdHtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taXRlbS1jYXJkcy1jb3N0LWZvbnQtc2l6ZSk7XG59XG4uZm9vZC1ncmlkLCAuZHJpbmstZ3JpZHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbn1cbi5mb29kLW1lbnUsXG4uZHJpbmstbWVudXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4vKiBjb250YWN0ICovXG4uY29udGFjdC1jYXJke1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4uY29udGFjdC1jYXJkLW5hbWV7XG4gICAgZm9udC1zaXplOiAycmVtOztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWN0LWNhcmQtcGhvbmUsXG4uY29udGFjdC1jYXJkLWFkZHJlc3N7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxvQ0FBb0M7SUFDcEMsNkJBQTZCOztJQUU3QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNDQUFzQzs7QUFFMUM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwwQ0FBMEM7QUFDOUM7O0FBRUEsV0FBVztBQUNYO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUZBQW1GO0lBQ25GLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUEsY0FBYztBQUNkO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVDtBQUNKO0FBQ0E7O0lBRUksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTs7SUFFSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tZm9udC1zaXplOiAyMHB4O1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IDIzMywyMzMsMjMzO1xcbiAgICAtLW5hdi1iYXItZ2FwOiAxcHg7XFxuICAgIC0tbmF2LWJhci1idG4tcGFkZGluZy1ob3Jpem9udGFsOiA0cmVtO1xcbiAgICAtLW5hdi1iYXItYnRuLXBhZGRpbmctdmVydGljYWw6IDFyZW07XFxuICAgIC0tbmF2LWJhci1idG4tZm9udC1zaXplOiAxNXB4O1xcblxcbiAgICAtLWNvbnRlbnQtd2lkdGg6IDgwMHB4O1xcbiAgICAtLWl0ZW0tY2FyZHMtd2lkdGg6IDM1MHB4O1xcbiAgICAtLWl0ZW0tY2FyZHMtbmFtZS1mb250LXNpemU6IDIwcHg7XFxuICAgIC0taXRlbS1jYXJkcy1jb250ZW50LWZvbnQtc2l6ZTogMTZweDtcXG4gICAgLS1pdGVtLWNhcmRzLWNvc3QtZm9udC1zaXplOiAxNnB4O1xcbn0gIFxcbip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tYmFja2dyb3VuZC1jb2xvcikpO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmciBhdXRvO1xcbiAgICBcXG59XFxuLmhlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG4uZm9vdGVye1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi8qIG5hdkJhciAqL1xcbiNuYXYtYmFye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtaW4td2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLWdhcDogNHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4jbmF2LWJhciA+IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IHZhcigtLW5hdi1iYXItYnRuLXBhZGRpbmctdmVydGljYWwpICB2YXIoLS1uYXYtYmFyLWJ0bi1wYWRkaW5nLWhvcml6b250YWwpO1xcbiAgICBmb250LXNpemU6IHZhcigtLW5hdi1iYXItYnRuLWZvbnQtc2l6ZSk7XFxufVxcbi50YWItY29udGVudHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuLyogaG9tZSBwYWdlICovXFxuI2hvbWUtcGFnZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtYXgtd2lkdGg6IHZhcigtLWNvbnRlbnQtd2lkdGgpXFxufVxcbiNob3Vycy1jb250YWluZXIsXFxuI2Fib3V0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcbnVsLCBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogbWVudSAqL1xcbiNtZW51LXBhZ2V7XFxuICAgIHdpZHRoOiB2YXIoLS1jb250ZW50LXdpZHRoKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG4uaXRlbS1jYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogdmFyKC0taXRlbS1jYXJkcy13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0taXRlbS1jYXJkcy1oZWlnaHQpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuLml0ZW0taW1ne1xcbiAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcbi5pdGVtLW5hbWV7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0tY2FyZHMtbmFtZS1mb250LXNpemUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLml0ZW0tYWJvdXR7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBmb250LXNpemU6IHZhcigtLWl0ZW0tY2FyZHMtY29udGVudC1mb250LXNpemUpO1xcbn1cXG4uaXRlbS1jb3N0e1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZm9udC1zaXplOiB2YXIoLS1pdGVtLWNhcmRzLWNvc3QtZm9udC1zaXplKTtcXG59XFxuLmZvb2QtZ3JpZCwgLmRyaW5rLWdyaWR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuLmZvb2QtbWVudSxcXG4uZHJpbmstbWVudXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiBjb250YWN0ICovXFxuLmNvbnRhY3QtY2FyZHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuLmNvbnRhY3QtY2FyZC1uYW1le1xcbiAgICBmb250LXNpemU6IDJyZW07O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmNvbnRhY3QtY2FyZC1waG9uZSxcXG4uY29udGFjdC1jYXJkLWFkZHJlc3N7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdFBhZ2UoKXtcbiAgICBsZXQgY29udGFjdDtcbiAgICBsZXQgY29udGFjdERPTTtcbiAgICBjb25zdCBpbml0ID0gKCkgPT57XG4gICAgICAgIGxvYWRDb250YWN0cygpO1xuICAgIH1cbiAgICBjb25zdCBsb2FkQ29udGFjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RDYXJkID0gY3JlYXRlQ29udGFjdCgnSGlzdWkgU3VzaGknLCAnMDAwLTAwMC0wMDAwJywgJ0ZvbHNvbSwgQ0EnKTtcbiAgICAgICAgY29uc3QgY29udGFjdENhcmRET00gPSBjcmVhdGVDb250YWN0Q2FyZERPTShjb250YWN0Q2FyZCk7XG5cbiAgICAgICAgY29udGFjdERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0RE9NLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1wYWdlJyk7XG4gICAgICAgIGNvbnRhY3RET00uY2xhc3NMaXN0LmFkZCgnY29udGVudC1wYWdlJyk7XG4gICAgICAgIGNvbnRhY3RET00uYXBwZW5kQ2hpbGQoY29udGFjdENhcmRET00pXG4gICAgfVxuICAgIGNvbnN0IHNob3dDb250YWN0c0RPTSA9IChjb250YWluZXIpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RET00pO1xuICAgIH1cbiAgICAvLyBjcmVhdGVzIGEgY29udGFjdCBjYXJkXG4gICAgY29uc3QgY3JlYXRlQ29udGFjdCA9IChuYW1lLCBwaG9uZSwgYWRkcmVzcykgPT4ge1xuICAgICAgICBjb250YWN0ID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHBob25lOiBwaG9uZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbnRhY3Q7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUNvbnRhY3RDYXJkRE9NID0gKGNvbnRhY3RDYXJkKSA9PntcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZCcpO1xuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZC1uYW1lJyk7XG4gICAgICAgIHBob25lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZC1waG9uZScpO1xuICAgICAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZC1hZGRyZXNzJyk7XG5cbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGNvbnRhY3RDYXJkLm5hbWU7XG4gICAgICAgIHBob25lLnRleHRDb250ZW50ID0gY29udGFjdENhcmQucGhvbmU7XG4gICAgICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBjb250YWN0Q2FyZC5hZGRyZXNzO1xuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cbiAgICBpbml0KCk7XG4gICAgcmV0dXJuIHtzaG93Q29udGFjdHNET019O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVQYWdlKCl7XG4gICAgbGV0IGhvbWU7XG4gICAgbGV0IHRpdGxlO1xuICAgIGxldCBhYm91dDtcbiAgICBsZXQgaG91cnM7XG5cbiAgICBsZXQgaG9tZURPTTtcbiAgICAvLyBsZXQgdGl0bGVET007XG4gICAgbGV0IGFib3V0RE9NO1xuICAgIGxldCBob3Vyc0RPTTtcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICAvLyB0aXRsZSA9ICdHcmVldGluZ3MhIEZyb20gSGlzdWkgU3VzaGknO1xuICAgICAgICBhYm91dCA9ICdDb21iaW5pbmcgdHJhZGl0aW9uYWwgY3Vpc2luZSB3aXRoIGEgY3JlYXRpdmUgJiBjb250ZW1wb3JhcnkgZmxhaXIsIHdlIGZvY3VzIG9uIHNlcnZpbmcgb3VyIGZvb2RzIGluIGEgaGVhbHRoIGNvbnNjaW91cyBtYW5uZXIsIHVzaW5nIG9ubHkgdGhlIGZyZXNoZXN0ICYgdGhlIGhlYWx0aGllc3QgaW5ncmVkaWVudHMuJztcbiAgICAgICAgaG91cnMgPSBbJzExOjAwIEFNIC0gMDI6MDAgUE0nLCAnMDQ6MzAgUE0gLSAwODozMCBQTSddO1xuICAgICAgICBsb2FkRE9NKCk7XG4gICAgfVxuICAgIGNvbnN0IGxvYWRET00gPSAoKSA9PiB7XG4gICAgICAgIC8vIHRpdGxlRE9NID0gY3JlYXRlVGl0bGUodGl0bGUpO1xuICAgICAgICBhYm91dERPTSA9IGNyZWF0ZUFib3V0KGFib3V0KTtcbiAgICAgICAgaG91cnNET00gPSBjcmVhdGVIb3Vycyhob3Vycyk7XG4gICAgICAgIFxuICAgICAgICBob21lRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVET00uc2V0QXR0cmlidXRlKCdpZCcsICdob21lLXBhZ2UnKTtcbiAgICAgICAgaG9tZURPTS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXBhZ2UnKTtcbiAgICAgICAgLy8gaG9tZURPTS5hcHBlbmRDaGlsZCh0aXRsZURPTSk7XG4gICAgICAgIGhvbWVET00uYXBwZW5kQ2hpbGQoYWJvdXRET00pO1xuICAgICAgICBob21lRE9NLmFwcGVuZENoaWxkKGhvdXJzRE9NKTtcbiAgICB9XG4gICAgY29uc3Qgc2hvd0hvbWVET00gPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lRE9NKTs7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVRpdGxlID0gKGNvbnRlbnQpID0+e1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVIZWFkaW5nID0gKGNvbnRlbnQpID0+e1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICByZXR1cm4gaGVhZGluZztcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlQWJvdXQgPSAoY29udGVudCkgPT4ge1xuICAgICAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhYm91dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhYm91dEhlYWRpbmcgPSBjcmVhdGVIZWFkaW5nKCdBYm91dCcpO1xuICAgICAgICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGFib3V0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250ZW50Jyk7XG4gICAgICAgIGFib3V0Q29udGVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkaW5nKTtcbiAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KTtcbiAgICAgICAgcmV0dXJuIGFib3V0Q29udGFpbmVyO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVIb3VycyA9IChob3VycykgPT4ge1xuICAgICAgICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob3Vyc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvdXJzLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGhvdXJzSGVhZGluZyA9IGNyZWF0ZUhlYWRpbmcoJ09wZW5pbmcgSG91cnMnKTtcbiAgICAgICAgY29uc3QgaG91cnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgaG91cnNMaXN0LmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWxpc3QnKTtcblxuICAgICAgICBob3Vycy5mb3JFYWNoKCh0aW1lKSA9PntcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBob3Vyc0l0ZW0udGV4dENvbnRlbnQgPSB0aW1lO1xuICAgICAgICAgICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XG4gICAgICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzTGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGhvdXJzQ29udGFpbmVyO1xuICAgIH1cbiAgICBpbml0KCk7XG4gICAgcmV0dXJuIHtzaG93SG9tZURPTX07XG59IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vcGFnZS1sb2FkLmpzJztcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9tZW51LmpzJztcblxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuXG5cbmZ1bmN0aW9uIHBhZ2VDb250cm9sbGVyKCkge1xuICAgIGxldCB0YWJDb250ZW50O1xuICAgIGxldCBob21lQnRuO1xuICAgIGxldCBtZW51QnRuO1xuICAgIGxldCBjb250YWN0QnRuO1xuICAgIGxldCBwYWdlO1xuICAgIGxldCBjb250YWN0O1xuICAgIGxldCBob21lO1xuICAgIGxldCBtZW51O1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgY3JlYXRlQ29udGVudCgpO1xuICAgICAgICBsb2FkKCk7XG4gICAgICAgIGNhY2hlRE9NKCk7XG4gICAgICAgIGJpbmRFdmVudHMoKTtcbiAgICAgICAgaG9tZS5zaG93SG9tZURPTSh0YWJDb250ZW50KTtcbiAgICB9XG4gICAgY29uc3QgY2FjaGVET00gPSAoKSA9PiB7XG4gICAgICAgIHRhYkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYi1jb250ZW50XCIpXG4gICAgICAgIGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1idG4nKTtcbiAgICAgICAgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xuICAgICAgICBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtYnRuJyk7XG4gICAgfVxuICAgIGNvbnN0IGxvYWQgPSAoKSA9PntcbiAgICAgICAgcGFnZSA9IGxvYWRQYWdlKCdjb250ZW50Jyk7XG4gICAgICAgIGNvbnRhY3QgPSBjb250YWN0UGFnZSgpXG4gICAgICAgIGhvbWUgPSAgaG9tZVBhZ2UoKTtcbiAgICAgICAgbWVudSA9IG1lbnVQYWdlKCk7XG4gICAgfVxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSAoKSA9PiB7XG4gICAgICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwYWdlLmNsZWFyVGFiQ29udGVudCgpO1xuICAgICAgICAgICAgaG9tZS5zaG93SG9tZURPTSh0YWJDb250ZW50KTtcbiAgICAgICAgfSlcbiAgICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBhZ2UuY2xlYXJUYWJDb250ZW50KCk7XG4gICAgICAgICAgICBtZW51LnNob3dNZW51RE9NKHRhYkNvbnRlbnQpO1xuICAgICAgICB9KVxuICAgICAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcGFnZS5jbGVhclRhYkNvbnRlbnQoKTtcbiAgICAgICAgICAgIGNvbnRhY3Quc2hvd0NvbnRhY3RzRE9NKHRhYkNvbnRlbnQpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBjcmVhdGVDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICBib2R5LmFwcGVuZChuZXdEaXYpO1xuICAgIH1cbiAgICBpbml0KCk7XG59XG5cbmNvbnN0IHJlc3RhdXJhbnRQYWdlID0gcGFnZUNvbnRyb2xsZXIoKTsiLCJpbXBvcnQgZHJhZ29uUm9sbCBmcm9tICcuL2ltZy9kcmFnb24tcm9sbC5qcGcnO1xuaW1wb3J0IHRlbXB1cmFSb2xsIGZyb20gJy4vaW1nL3RlbXB1cmEtcm9sbC5qcGcnXG5cbmltcG9ydCBwb2NhcmlTd2VhdCBmcm9tICcuL2ltZy9wb2Nhcmktc3dlYXQtZHJpbmsuanBnJztcbmltcG9ydCByYW11bmUgZnJvbSAnLi9pbWcvcmFtdW5lLWRyaW5rLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVQYWdlKCl7XG4gICAgbGV0IG1lbnVET007XG4gICAgY29uc3QgaW5pdCA9ICgpID0+e1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH1cbiAgICBjb25zdCBsb2FkTWVudSA9ICgpID0+e1xuICAgICAgICBtZW51RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVET00uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LXBhZ2UnKTtcbiAgICAgICAgbWVudURPTS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXBhZ2UnKTtcblxuICAgICAgICBjb25zdCBmb29kTWVudURPTSA9IGNyZWF0ZUZvb2RET00oKTtcbiAgICAgICAgY29uc3QgZHJpbmtNZW51RE9NID0gY3JlYXRlRHJpbmtET00oKTtcbiAgICAgICAgbWVudURPTS5hcHBlbmRDaGlsZChmb29kTWVudURPTSk7XG4gICAgICAgIG1lbnVET00uYXBwZW5kQ2hpbGQoZHJpbmtNZW51RE9NKTtcbiAgICB9XG4gICAgY29uc3Qgc2hvd01lbnVET00gPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51RE9NKTtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlSXRlbUNhcmQgPSAobmFtZSwgYWJvdXQsIGNvc3QsIGltZykgPT57XG4gICAgICAgIGNvbnN0IGl0ZW1DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1DYXJkLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY2FyZCcpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVET00uY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG4gICAgICAgIG5hbWVET00udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBjb25zdCBhYm91dERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYWJvdXRET00uY2xhc3NMaXN0LmFkZCgnaXRlbS1hYm91dCcpO1xuICAgICAgICBhYm91dERPTS50ZXh0Q29udGVudCA9IGFib3V0O1xuICAgICAgICBjb25zdCBjb3N0RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb3N0RE9NLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29zdCcpO1xuICAgICAgICBjb3N0RE9NLnRleHRDb250ZW50ID0gJyQgJytjb3N0O1xuICAgICAgICBjb25zdCBpbWdET00gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nRE9NLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW1nJyk7XG4gICAgICAgIGltZ0RPTS5zcmMgPSBpbWc7XG5cbiAgICAgICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQobmFtZURPTSk7XG4gICAgICAgIGl0ZW1DYXJkLmFwcGVuZENoaWxkKGFib3V0RE9NKTtcbiAgICAgICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQoY29zdERPTSk7XG4gICAgICAgIGl0ZW1DYXJkLmFwcGVuZENoaWxkKGltZ0RPTSk7XG4gICAgICAgIHJldHVybiBpdGVtQ2FyZDtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlSGVhZGluZyA9IChjb250ZW50KSA9PntcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgcmV0dXJuIGhlYWRpbmc7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUZvb2RET00gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb2RET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vZERPTS5jbGFzc0xpc3QuYWRkKCdmb29kLW1lbnUnKTtcbiAgICAgICAgY29uc3QgZm9vZEhlYWRpbmcgPSBjcmVhdGVIZWFkaW5nKCdTdXNoaScpO1xuICAgICAgICBmb29kRE9NLmFwcGVuZENoaWxkKGZvb2RIZWFkaW5nKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvb2RJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb29kSXRlbXMuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncmlkJyk7XG5cbiAgICAgICAgLy9hZGRpbmcgZm9vZCBjYXJkc1xuICAgICAgICBjb25zdCBkcmFnb25Sb2xsTmFtZSA9ICdEcmFnb24gUm9sbCc7XG4gICAgICAgIGNvbnN0IGRyYWdvblJvbGxBYm91dCA9ICdBIHN1c2hpIHJvbGwgZmVhdHVyaW5nIHNocmltcCB0ZW1wdXJhLCBhdm9jYWRvLCBhbmQgY3VjdW1iZXIsIHRvcHBlZCB3aXRoIHRoaW4gYXZvY2FkbyBzbGljZXMgYW5kIGEgZHJpenpsZSBvZiBlZWwgc2F1Y2UuJztcbiAgICAgICAgY29uc3QgZHJhZ29uUm9sbENvc3QgPSAnMTgnO1xuICAgICAgICBjb25zdCBkcmFnb25Sb2xsSW1nID0gZHJhZ29uUm9sbDtcblxuICAgICAgICBjb25zdCB0ZW1wUm9sbE5hbWUgPSAnVGVtcHVyYSBSb2xsJ1xuICAgICAgICBjb25zdCB0ZW1wUm9sbEFib3V0ID0gJ0Egc3VzaGkgcm9sbCBmaWxsZWQgd2l0aCB0ZW1wdXJhLWZyaWVkIHNlYWZvb2Qgb3IgdmVnZXRhYmxlcywgcHJvdmlkaW5nIGEgY3Jpc3B5IHRleHR1cmUgYW5kIHNhdm9yeSBmbGF2b3IuJztcbiAgICAgICAgY29uc3QgdGVtcFJvbGxDb3N0ID0gJzEyJztcbiAgICAgICAgY29uc3QgdGVtcFJvbGxJbWcgPSB0ZW1wdXJhUm9sbDtcbiAgICAgICAgY29uc3QgZHJhZ29uUm9sbENhcmQgPSBjcmVhdGVJdGVtQ2FyZChkcmFnb25Sb2xsTmFtZSwgZHJhZ29uUm9sbEFib3V0LCBkcmFnb25Sb2xsQ29zdCwgZHJhZ29uUm9sbEltZyk7XG4gICAgICAgIGNvbnN0IHRlbXBSb2xsQ2FyZCA9IGNyZWF0ZUl0ZW1DYXJkKHRlbXBSb2xsTmFtZSwgdGVtcFJvbGxBYm91dCx0ZW1wUm9sbENvc3QsdGVtcFJvbGxJbWcpO1xuXG4gICAgICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZChkcmFnb25Sb2xsQ2FyZCk7XG4gICAgICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZCh0ZW1wUm9sbENhcmQpO1xuICAgICAgICBmb29kRE9NLmFwcGVuZENoaWxkKGZvb2RJdGVtcyk7XG4gICAgICAgIHJldHVybiBmb29kRE9NO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVEcmlua0RPTSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZHJpbmtET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHJpbmtET00uY2xhc3NMaXN0LmFkZCgnZHJpbmstbWVudScpXG4gICAgICAgIGNvbnN0IGRyaW5rSGVhZGluZyA9IGNyZWF0ZUhlYWRpbmcoJ0RyaW5rcycpO1xuICAgICAgICBkcmlua0RPTS5hcHBlbmRDaGlsZChkcmlua0hlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IGRyaW5rSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHJpbmtJdGVtcy5jbGFzc0xpc3QuYWRkKCdkcmluay1ncmlkJyk7XG4gICAgXG4gICAgICAgIC8vIEFkZGluZyBkcmluayBjYXJkc1xuICAgICAgICBjb25zdCBwb2NhcmlTd2VhdE5hbWUgPSAnUG9jYXJpIFN3ZWF0JztcbiAgICAgICAgY29uc3QgcG9jYXJpU3dlYXRBYm91dCA9ICdBIEphcGFuZXNlIGlzb3RvbmljIGRyaW5rIGRlc2lnbmVkIHRvIHJlcGxlbmlzaCBlbGVjdHJvbHl0ZXMgYW5kIGZsdWlkcywgb2ZmZXJpbmcgYSByZWZyZXNoaW5nIHRhc3RlLic7XG4gICAgICAgIGNvbnN0IHBvY2FyaVN3ZWF0Q29zdCA9ICczJztcbiAgICAgICAgY29uc3QgcG9jYXJpU3dlYXRJbWcgPSBwb2NhcmlTd2VhdDtcbiAgICAgICAgY29uc3QgcG9jYXJpU3dlYXRDYXJkID0gY3JlYXRlSXRlbUNhcmQocG9jYXJpU3dlYXROYW1lLCBwb2NhcmlTd2VhdEFib3V0LCBwb2NhcmlTd2VhdENvc3QsIHBvY2FyaVN3ZWF0SW1nKTtcbiAgICBcbiAgICAgICAgY29uc3QgcmFtdW5lTmFtZSA9ICdSYW11bmUnO1xuICAgICAgICBjb25zdCByYW11bmVBYm91dCA9ICdBIHBvcHVsYXIgSmFwYW5lc2Ugc29kYSB3aXRoIGEgZGlzdGluY3RpdmUgbWFyYmxlLXNlYWxlZCBib3R0bGUsIGF2YWlsYWJsZSBpbiB2YXJpb3VzIGZsYXZvcnMgYW5kIGtub3duIGZvciBpdHMgZWZmZXJ2ZXNjZW5jZS4nO1xuICAgICAgICBjb25zdCByYW11bmVDb3N0ID0gJzIuNSc7XG4gICAgICAgIGNvbnN0IHJhbXVuZUltZyA9IHJhbXVuZTtcbiAgICAgICAgY29uc3QgcmFtdW5lQ2FyZCA9IGNyZWF0ZUl0ZW1DYXJkKHJhbXVuZU5hbWUsIHJhbXVuZUFib3V0LCByYW11bmVDb3N0LCByYW11bmVJbWcpO1xuICAgIFxuICAgICAgICBkcmlua0l0ZW1zLmFwcGVuZENoaWxkKHBvY2FyaVN3ZWF0Q2FyZCk7XG4gICAgICAgIGRyaW5rSXRlbXMuYXBwZW5kQ2hpbGQocmFtdW5lQ2FyZCk7XG4gICAgICAgIGRyaW5rRE9NLmFwcGVuZENoaWxkKGRyaW5rSXRlbXMpO1xuICAgICAgICByZXR1cm4gZHJpbmtET007XG4gICAgfVxuICAgIGluaXQoKTtcbiAgICByZXR1cm4ge3Nob3dNZW51RE9NfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZShpZCl7XG4gICAgbGV0IGNvbnRlbnQ7ICAgIC8vIHBhcmVudCBkaXYgd2hlcmUgcGFnZSBiZWxvbmdzXG4gICAgbGV0IGhlYWRlcjsgICAgIC8vIGhlYWRlciByZWZlcmVuY2VcbiAgICBsZXQgZm9vdGVyOyAgICAgLy8gZm9vdGVyIHJlZmVyZW5jZVxuICAgIGxldCBuYXZCYXI7ICAgICAvLyByZWZlcmVuY2UgdG8gbmF2QmFyXG4gICAgbGV0IHRhYkNvbnRlbnQ7IC8vIHJlZmVyZW5jZSB0byBjb250ZW50IGZvciBlYWNoIHRhYlxuICAgIGxldCBuYXZDb250ZW50O1xuICAgIC8vIGluaXRpYWwgcnVuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgY2FjaGVEb20oKTtcbiAgICAgICAgbG9hZFBhZ2UoKTtcbiAgICB9XG4gICAgLy8gZ2V0IHJlbGV2YW50IGRvbSBlbGVtZW50c1xuICAgIGNvbnN0IGNhY2hlRG9tID0gKCkgPT4ge1xuICAgICAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgfVxuICAgIC8vIGxvYWRzIHRoZSBwYWdlXG4gICAgY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGhlYWRlciA9IGNyZWF0ZUhlYWRlcignSGlzdWkgU3VzaGknKTtcbiAgICAgICAgbmF2QmFyID0gY3JlYXRlTmF2QmFyKCk7XG4gICAgICAgIGZvb3RlciA9IGNyZWF0ZUZvb3RlcignQ29weXJpZ2h0IMKpICcgKyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyBcIiBKYWNrc29uIFd1XCIpO1xuICAgICAgICB0YWJDb250ZW50ID0gY3JlYXRlVGFiQ29udGVudCgpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgfVxuICAgIC8vIGNyZWF0ZXMgdGhlIGhlYWRlclxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItdGl0bGUnKTtcblxuICAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuICAgIC8vIGNyZWF0ZXMgdGhlIG5hdmlnYXRpb24gYmFyXG4gICAgY29uc3QgY3JlYXRlTmF2QmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICAgICAgbmF2QmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LWJhcicpO1xuXG4gICAgICAgIGNvbnN0IGhvbWVCdG4gPSBjcmVhdGVUYWJCdG4oJ2hvbWUtYnRuJywgJ0hvbWUnKTtcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZVRhYkJ0bignbWVudS1idG4nLCAnTWVudScpO1xuICAgICAgICBjb25zdCBjb250YWN0QnRuID0gY3JlYXRlVGFiQnRuKCdjb250YWN0LWJ0bicsICdDb250YWN0Jyk7XG5cbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbiAgICAgICAgcmV0dXJuIG5hdkJhcjtcbiAgICB9XG4gICAgLy8gY3JlYXRlcyBhIGZ1bmN0aW9uYWwgdGFiIGJ1dHRvblxuICAgIGNvbnN0IGNyZWF0ZVRhYkJ0biA9IChpZCwgdGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICBuZXdCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgbmV3QnRuLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgICAgIG5ld0J0bi5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICByZXR1cm4gbmV3QnRuO1xuICAgIH1cbiAgICAvLyBDcmVhdGVzIHRoZSBmb290ZXIgZm9yIHRoZSB3ZWJwYWdlXG4gICAgY29uc3QgY3JlYXRlRm9vdGVyID0gKHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlVGFiQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50Jyk7XG4gICAgICAgIHJldHVybiB0YWJDb250ZW50O1xuICAgIH1cbiAgICBjb25zdCBjbGVhclRhYkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHdoaWxlKHRhYkNvbnRlbnQuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICB0YWJDb250ZW50LnJlbW92ZUNoaWxkKHRhYkNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdCgpO1xuICAgIHJldHVybntjb250ZW50LCBoZWFkZXIsIGZvb3RlciwgbmF2QmFyLCB0YWJDb250ZW50LCBjbGVhclRhYkNvbnRlbnR9O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
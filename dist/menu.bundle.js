"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["menu"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDQzs7QUFFTztBQUNYOztBQUU3QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpREFBVTs7QUFFeEM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFXO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixrREFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHJhZ29uUm9sbCBmcm9tICcuL2ltZy9kcmFnb24tcm9sbC5qcGcnO1xuaW1wb3J0IHRlbXB1cmFSb2xsIGZyb20gJy4vaW1nL3RlbXB1cmEtcm9sbC5qcGcnXG5cbmltcG9ydCBwb2NhcmlTd2VhdCBmcm9tICcuL2ltZy9wb2Nhcmktc3dlYXQtZHJpbmsuanBnJztcbmltcG9ydCByYW11bmUgZnJvbSAnLi9pbWcvcmFtdW5lLWRyaW5rLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVQYWdlKCl7XG4gICAgbGV0IG1lbnVET007XG4gICAgY29uc3QgaW5pdCA9ICgpID0+e1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH1cbiAgICBjb25zdCBsb2FkTWVudSA9ICgpID0+e1xuICAgICAgICBtZW51RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVET00uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LXBhZ2UnKTtcbiAgICAgICAgbWVudURPTS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXBhZ2UnKTtcblxuICAgICAgICBjb25zdCBmb29kTWVudURPTSA9IGNyZWF0ZUZvb2RET00oKTtcbiAgICAgICAgY29uc3QgZHJpbmtNZW51RE9NID0gY3JlYXRlRHJpbmtET00oKTtcbiAgICAgICAgbWVudURPTS5hcHBlbmRDaGlsZChmb29kTWVudURPTSk7XG4gICAgICAgIG1lbnVET00uYXBwZW5kQ2hpbGQoZHJpbmtNZW51RE9NKTtcbiAgICB9XG4gICAgY29uc3Qgc2hvd01lbnVET00gPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51RE9NKTtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlSXRlbUNhcmQgPSAobmFtZSwgYWJvdXQsIGNvc3QsIGltZykgPT57XG4gICAgICAgIGNvbnN0IGl0ZW1DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1DYXJkLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY2FyZCcpO1xuXG4gICAgICAgIGNvbnN0IG5hbWVET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG5hbWVET00uY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG4gICAgICAgIG5hbWVET00udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBjb25zdCBhYm91dERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYWJvdXRET00uY2xhc3NMaXN0LmFkZCgnaXRlbS1hYm91dCcpO1xuICAgICAgICBhYm91dERPTS50ZXh0Q29udGVudCA9IGFib3V0O1xuICAgICAgICBjb25zdCBjb3N0RE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb3N0RE9NLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29zdCcpO1xuICAgICAgICBjb3N0RE9NLnRleHRDb250ZW50ID0gJyQgJytjb3N0O1xuICAgICAgICBjb25zdCBpbWdET00gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nRE9NLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW1nJyk7XG4gICAgICAgIGltZ0RPTS5zcmMgPSBpbWc7XG5cbiAgICAgICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQobmFtZURPTSk7XG4gICAgICAgIGl0ZW1DYXJkLmFwcGVuZENoaWxkKGFib3V0RE9NKTtcbiAgICAgICAgaXRlbUNhcmQuYXBwZW5kQ2hpbGQoY29zdERPTSk7XG4gICAgICAgIGl0ZW1DYXJkLmFwcGVuZENoaWxkKGltZ0RPTSk7XG4gICAgICAgIHJldHVybiBpdGVtQ2FyZDtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlSGVhZGluZyA9IChjb250ZW50KSA9PntcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgcmV0dXJuIGhlYWRpbmc7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUZvb2RET00gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb2RET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vZERPTS5jbGFzc0xpc3QuYWRkKCdmb29kLW1lbnUnKTtcbiAgICAgICAgY29uc3QgZm9vZEhlYWRpbmcgPSBjcmVhdGVIZWFkaW5nKCdTdXNoaScpO1xuICAgICAgICBmb29kRE9NLmFwcGVuZENoaWxkKGZvb2RIZWFkaW5nKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvb2RJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb29kSXRlbXMuY2xhc3NMaXN0LmFkZCgnZm9vZC1ncmlkJyk7XG5cbiAgICAgICAgLy9hZGRpbmcgZm9vZCBjYXJkc1xuICAgICAgICBjb25zdCBkcmFnb25Sb2xsTmFtZSA9ICdEcmFnb24gUm9sbCc7XG4gICAgICAgIGNvbnN0IGRyYWdvblJvbGxBYm91dCA9ICdBIHN1c2hpIHJvbGwgZmVhdHVyaW5nIHNocmltcCB0ZW1wdXJhLCBhdm9jYWRvLCBhbmQgY3VjdW1iZXIsIHRvcHBlZCB3aXRoIHRoaW4gYXZvY2FkbyBzbGljZXMgYW5kIGEgZHJpenpsZSBvZiBlZWwgc2F1Y2UuJztcbiAgICAgICAgY29uc3QgZHJhZ29uUm9sbENvc3QgPSAnMTgnO1xuICAgICAgICBjb25zdCBkcmFnb25Sb2xsSW1nID0gZHJhZ29uUm9sbDtcblxuICAgICAgICBjb25zdCB0ZW1wUm9sbE5hbWUgPSAnVGVtcHVyYSBSb2xsJ1xuICAgICAgICBjb25zdCB0ZW1wUm9sbEFib3V0ID0gJ0Egc3VzaGkgcm9sbCBmaWxsZWQgd2l0aCB0ZW1wdXJhLWZyaWVkIHNlYWZvb2Qgb3IgdmVnZXRhYmxlcywgcHJvdmlkaW5nIGEgY3Jpc3B5IHRleHR1cmUgYW5kIHNhdm9yeSBmbGF2b3IuJztcbiAgICAgICAgY29uc3QgdGVtcFJvbGxDb3N0ID0gJzEyJztcbiAgICAgICAgY29uc3QgdGVtcFJvbGxJbWcgPSB0ZW1wdXJhUm9sbDtcbiAgICAgICAgY29uc3QgZHJhZ29uUm9sbENhcmQgPSBjcmVhdGVJdGVtQ2FyZChkcmFnb25Sb2xsTmFtZSwgZHJhZ29uUm9sbEFib3V0LCBkcmFnb25Sb2xsQ29zdCwgZHJhZ29uUm9sbEltZyk7XG4gICAgICAgIGNvbnN0IHRlbXBSb2xsQ2FyZCA9IGNyZWF0ZUl0ZW1DYXJkKHRlbXBSb2xsTmFtZSwgdGVtcFJvbGxBYm91dCx0ZW1wUm9sbENvc3QsdGVtcFJvbGxJbWcpO1xuXG4gICAgICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZChkcmFnb25Sb2xsQ2FyZCk7XG4gICAgICAgIGZvb2RJdGVtcy5hcHBlbmRDaGlsZCh0ZW1wUm9sbENhcmQpO1xuICAgICAgICBmb29kRE9NLmFwcGVuZENoaWxkKGZvb2RJdGVtcyk7XG4gICAgICAgIHJldHVybiBmb29kRE9NO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVEcmlua0RPTSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZHJpbmtET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHJpbmtET00uY2xhc3NMaXN0LmFkZCgnZHJpbmstbWVudScpXG4gICAgICAgIGNvbnN0IGRyaW5rSGVhZGluZyA9IGNyZWF0ZUhlYWRpbmcoJ0RyaW5rcycpO1xuICAgICAgICBkcmlua0RPTS5hcHBlbmRDaGlsZChkcmlua0hlYWRpbmcpO1xuXG4gICAgICAgIGNvbnN0IGRyaW5rSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHJpbmtJdGVtcy5jbGFzc0xpc3QuYWRkKCdkcmluay1ncmlkJyk7XG4gICAgXG4gICAgICAgIC8vIEFkZGluZyBkcmluayBjYXJkc1xuICAgICAgICBjb25zdCBwb2NhcmlTd2VhdE5hbWUgPSAnUG9jYXJpIFN3ZWF0JztcbiAgICAgICAgY29uc3QgcG9jYXJpU3dlYXRBYm91dCA9ICdBIEphcGFuZXNlIGlzb3RvbmljIGRyaW5rIGRlc2lnbmVkIHRvIHJlcGxlbmlzaCBlbGVjdHJvbHl0ZXMgYW5kIGZsdWlkcywgb2ZmZXJpbmcgYSByZWZyZXNoaW5nIHRhc3RlLic7XG4gICAgICAgIGNvbnN0IHBvY2FyaVN3ZWF0Q29zdCA9ICczJztcbiAgICAgICAgY29uc3QgcG9jYXJpU3dlYXRJbWcgPSBwb2NhcmlTd2VhdDtcbiAgICAgICAgY29uc3QgcG9jYXJpU3dlYXRDYXJkID0gY3JlYXRlSXRlbUNhcmQocG9jYXJpU3dlYXROYW1lLCBwb2NhcmlTd2VhdEFib3V0LCBwb2NhcmlTd2VhdENvc3QsIHBvY2FyaVN3ZWF0SW1nKTtcbiAgICBcbiAgICAgICAgY29uc3QgcmFtdW5lTmFtZSA9ICdSYW11bmUnO1xuICAgICAgICBjb25zdCByYW11bmVBYm91dCA9ICdBIHBvcHVsYXIgSmFwYW5lc2Ugc29kYSB3aXRoIGEgZGlzdGluY3RpdmUgbWFyYmxlLXNlYWxlZCBib3R0bGUsIGF2YWlsYWJsZSBpbiB2YXJpb3VzIGZsYXZvcnMgYW5kIGtub3duIGZvciBpdHMgZWZmZXJ2ZXNjZW5jZS4nO1xuICAgICAgICBjb25zdCByYW11bmVDb3N0ID0gJzIuNSc7XG4gICAgICAgIGNvbnN0IHJhbXVuZUltZyA9IHJhbXVuZTtcbiAgICAgICAgY29uc3QgcmFtdW5lQ2FyZCA9IGNyZWF0ZUl0ZW1DYXJkKHJhbXVuZU5hbWUsIHJhbXVuZUFib3V0LCByYW11bmVDb3N0LCByYW11bmVJbWcpO1xuICAgIFxuICAgICAgICBkcmlua0l0ZW1zLmFwcGVuZENoaWxkKHBvY2FyaVN3ZWF0Q2FyZCk7XG4gICAgICAgIGRyaW5rSXRlbXMuYXBwZW5kQ2hpbGQocmFtdW5lQ2FyZCk7XG4gICAgICAgIGRyaW5rRE9NLmFwcGVuZENoaWxkKGRyaW5rSXRlbXMpO1xuICAgICAgICByZXR1cm4gZHJpbmtET007XG4gICAgfVxuICAgIGluaXQoKTtcbiAgICByZXR1cm4ge3Nob3dNZW51RE9NfTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
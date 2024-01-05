"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["home"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZSgpe1xuICAgIGxldCBob21lO1xuICAgIGxldCB0aXRsZTtcbiAgICBsZXQgYWJvdXQ7XG4gICAgbGV0IGhvdXJzO1xuXG4gICAgbGV0IGhvbWVET007XG4gICAgLy8gbGV0IHRpdGxlRE9NO1xuICAgIGxldCBhYm91dERPTTtcbiAgICBsZXQgaG91cnNET007XG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgLy8gdGl0bGUgPSAnR3JlZXRpbmdzISBGcm9tIEhpc3VpIFN1c2hpJztcbiAgICAgICAgYWJvdXQgPSAnQ29tYmluaW5nIHRyYWRpdGlvbmFsIGN1aXNpbmUgd2l0aCBhIGNyZWF0aXZlICYgY29udGVtcG9yYXJ5IGZsYWlyLCB3ZSBmb2N1cyBvbiBzZXJ2aW5nIG91ciBmb29kcyBpbiBhIGhlYWx0aCBjb25zY2lvdXMgbWFubmVyLCB1c2luZyBvbmx5IHRoZSBmcmVzaGVzdCAmIHRoZSBoZWFsdGhpZXN0IGluZ3JlZGllbnRzLic7XG4gICAgICAgIGhvdXJzID0gWycxMTowMCBBTSAtIDAyOjAwIFBNJywgJzA0OjMwIFBNIC0gMDg6MzAgUE0nXTtcbiAgICAgICAgbG9hZERPTSgpO1xuICAgIH1cbiAgICBjb25zdCBsb2FkRE9NID0gKCkgPT4ge1xuICAgICAgICAvLyB0aXRsZURPTSA9IGNyZWF0ZVRpdGxlKHRpdGxlKTtcbiAgICAgICAgYWJvdXRET00gPSBjcmVhdGVBYm91dChhYm91dCk7XG4gICAgICAgIGhvdXJzRE9NID0gY3JlYXRlSG91cnMoaG91cnMpO1xuICAgICAgICBcbiAgICAgICAgaG9tZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob21lRE9NLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1wYWdlJyk7XG4gICAgICAgIGhvbWVET00uY2xhc3NMaXN0LmFkZCgnY29udGVudC1wYWdlJyk7XG4gICAgICAgIC8vIGhvbWVET00uYXBwZW5kQ2hpbGQodGl0bGVET00pO1xuICAgICAgICBob21lRE9NLmFwcGVuZENoaWxkKGFib3V0RE9NKTtcbiAgICAgICAgaG9tZURPTS5hcHBlbmRDaGlsZChob3Vyc0RPTSk7XG4gICAgfVxuICAgIGNvbnN0IHNob3dIb21lRE9NID0gKGNvbnRhaW5lcikgPT4ge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZURPTSk7O1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVUaXRsZSA9IChjb250ZW50KSA9PntcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlSGVhZGluZyA9IChjb250ZW50KSA9PntcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgcmV0dXJuIGhlYWRpbmc7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUFib3V0ID0gKGNvbnRlbnQpID0+IHtcbiAgICAgICAgY29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWJvdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWJvdXRIZWFkaW5nID0gY3JlYXRlSGVhZGluZygnQWJvdXQnKTtcbiAgICAgICAgY29uc3QgYWJvdXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBhYm91dENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtY29udGVudCcpO1xuICAgICAgICBhYm91dENvbnRlbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0SGVhZGluZyk7XG4gICAgICAgIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0Q29udGVudCk7XG4gICAgICAgIHJldHVybiBhYm91dENvbnRhaW5lcjtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlSG91cnMgPSAoaG91cnMpID0+IHtcbiAgICAgICAgY29uc3QgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG91cnNDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdob3Vycy1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBob3Vyc0hlYWRpbmcgPSBjcmVhdGVIZWFkaW5nKCdPcGVuaW5nIEhvdXJzJyk7XG4gICAgICAgIGNvbnN0IGhvdXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGhvdXJzTGlzdC5jbGFzc0xpc3QuYWRkKCdob3Vycy1saXN0Jyk7XG5cbiAgICAgICAgaG91cnMuZm9yRWFjaCgodGltZSkgPT57XG4gICAgICAgICAgICBjb25zdCBob3Vyc0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgaG91cnNJdGVtLnRleHRDb250ZW50ID0gdGltZTtcbiAgICAgICAgICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChob3Vyc0l0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0hlYWRpbmcpO1xuICAgICAgICBob3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc0xpc3QpO1xuXG4gICAgICAgIHJldHVybiBob3Vyc0NvbnRhaW5lcjtcbiAgICB9XG4gICAgaW5pdCgpO1xuICAgIHJldHVybiB7c2hvd0hvbWVET019O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
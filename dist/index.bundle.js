"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["index"],{

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
    }
    const bindEvents = () => {
        homeBtn.addEventListener('click', () => {
            page.clearTabContent();
            home.showHomeDOM(tabContent);
        })
        menuBtn.addEventListener('click', () => {
            page.clearTabContent();
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7O0FDbERlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7OztBQzVFc0M7QUFDQztBQUNOO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseURBQVE7QUFDdkIsa0JBQWtCLHVEQUFXO0FBQzdCLGdCQUFnQixvREFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNwRGU7QUFDZixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdFBhZ2UoKXtcbiAgICBsZXQgY29udGFjdDtcbiAgICBsZXQgY29udGFjdERPTTtcbiAgICBjb25zdCBpbml0ID0gKCkgPT57XG4gICAgICAgIGxvYWRDb250YWN0cygpO1xuICAgIH1cbiAgICBjb25zdCBsb2FkQ29udGFjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RDYXJkID0gY3JlYXRlQ29udGFjdCgnSGlzdWkgU3VzaGknLCAnMDAwLTAwMC0wMDAwJywgJ0ZvbHNvbSwgQ0EnKTtcbiAgICAgICAgY29uc3QgY29udGFjdENhcmRET00gPSBjcmVhdGVDb250YWN0Q2FyZERPTShjb250YWN0Q2FyZCk7XG5cbiAgICAgICAgY29udGFjdERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0RE9NLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1wYWdlJyk7XG4gICAgICAgIGNvbnRhY3RET00uY2xhc3NMaXN0LmFkZCgnY29udGVudC1wYWdlJyk7XG4gICAgICAgIGNvbnRhY3RET00uYXBwZW5kQ2hpbGQoY29udGFjdENhcmRET00pXG4gICAgfVxuICAgIGNvbnN0IHNob3dDb250YWN0c0RPTSA9IChjb250YWluZXIpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RET00pO1xuICAgIH1cbiAgICAvLyBjcmVhdGVzIGEgY29udGFjdCBjYXJkXG4gICAgY29uc3QgY3JlYXRlQ29udGFjdCA9IChuYW1lLCBwaG9uZSwgYWRkcmVzcykgPT4ge1xuICAgICAgICBjb250YWN0ID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHBob25lOiBwaG9uZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbnRhY3Q7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUNvbnRhY3RDYXJkRE9NID0gKGNvbnRhY3RDYXJkKSA9PntcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZCcpO1xuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZC1uYW1lJyk7XG4gICAgICAgIHBob25lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZC1waG9uZScpO1xuICAgICAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZC1hZGRyZXNzJyk7XG5cbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGNvbnRhY3RDYXJkLm5hbWU7XG4gICAgICAgIHBob25lLnRleHRDb250ZW50ID0gY29udGFjdENhcmQucGhvbmU7XG4gICAgICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBjb250YWN0Q2FyZC5hZGRyZXNzO1xuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cbiAgICBpbml0KCk7XG4gICAgcmV0dXJuIHtzaG93Q29udGFjdHNET019O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVQYWdlKCl7XG4gICAgbGV0IGhvbWU7XG4gICAgbGV0IHRpdGxlO1xuICAgIGxldCBhYm91dDtcbiAgICBsZXQgaG91cnM7XG5cbiAgICBsZXQgaG9tZURPTTtcbiAgICAvLyBsZXQgdGl0bGVET007XG4gICAgbGV0IGFib3V0RE9NO1xuICAgIGxldCBob3Vyc0RPTTtcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICAvLyB0aXRsZSA9ICdHcmVldGluZ3MhIEZyb20gSGlzdWkgU3VzaGknO1xuICAgICAgICBhYm91dCA9ICdDb21iaW5pbmcgdHJhZGl0aW9uYWwgY3Vpc2luZSB3aXRoIGEgY3JlYXRpdmUgJiBjb250ZW1wb3JhcnkgZmxhaXIsIHdlIGZvY3VzIG9uIHNlcnZpbmcgb3VyIGZvb2RzIGluIGEgaGVhbHRoIGNvbnNjaW91cyBtYW5uZXIsIHVzaW5nIG9ubHkgdGhlIGZyZXNoZXN0ICYgdGhlIGhlYWx0aGllc3QgaW5ncmVkaWVudHMuJztcbiAgICAgICAgaG91cnMgPSBbJzExOjAwIEFNIC0gMDI6MDAgUE0nLCAnMDQ6MzAgUE0gLSAwODozMCBQTSddO1xuICAgICAgICBsb2FkRE9NKCk7XG4gICAgfVxuICAgIGNvbnN0IGxvYWRET00gPSAoKSA9PiB7XG4gICAgICAgIC8vIHRpdGxlRE9NID0gY3JlYXRlVGl0bGUodGl0bGUpO1xuICAgICAgICBhYm91dERPTSA9IGNyZWF0ZUFib3V0KGFib3V0KTtcbiAgICAgICAgaG91cnNET00gPSBjcmVhdGVIb3Vycyhob3Vycyk7XG4gICAgICAgIFxuICAgICAgICBob21lRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVET00uc2V0QXR0cmlidXRlKCdpZCcsICdob21lLXBhZ2UnKTtcbiAgICAgICAgaG9tZURPTS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXBhZ2UnKTtcbiAgICAgICAgLy8gaG9tZURPTS5hcHBlbmRDaGlsZCh0aXRsZURPTSk7XG4gICAgICAgIGhvbWVET00uYXBwZW5kQ2hpbGQoYWJvdXRET00pO1xuICAgICAgICBob21lRE9NLmFwcGVuZENoaWxkKGhvdXJzRE9NKTtcbiAgICB9XG4gICAgY29uc3Qgc2hvd0hvbWVET00gPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lRE9NKTs7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVRpdGxlID0gKGNvbnRlbnQpID0+e1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVIZWFkaW5nID0gKGNvbnRlbnQpID0+e1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICByZXR1cm4gaGVhZGluZztcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlQWJvdXQgPSAoY29udGVudCkgPT4ge1xuICAgICAgICBjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhYm91dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhYm91dEhlYWRpbmcgPSBjcmVhdGVIZWFkaW5nKCdBYm91dCcpO1xuICAgICAgICBjb25zdCBhYm91dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGFib3V0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdhYm91dC1jb250ZW50Jyk7XG4gICAgICAgIGFib3V0Q29udGVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkaW5nKTtcbiAgICAgICAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KTtcbiAgICAgICAgcmV0dXJuIGFib3V0Q29udGFpbmVyO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVIb3VycyA9IChob3VycykgPT4ge1xuICAgICAgICBjb25zdCBob3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBob3Vyc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvdXJzLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGhvdXJzSGVhZGluZyA9IGNyZWF0ZUhlYWRpbmcoJ09wZW5pbmcgSG91cnMnKTtcbiAgICAgICAgY29uc3QgaG91cnNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgaG91cnNMaXN0LmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWxpc3QnKTtcblxuICAgICAgICBob3Vycy5mb3JFYWNoKCh0aW1lKSA9PntcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBob3Vyc0l0ZW0udGV4dENvbnRlbnQgPSB0aW1lO1xuICAgICAgICAgICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGhvdXJzSXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XG4gICAgICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzTGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGhvdXJzQ29udGFpbmVyO1xuICAgIH1cbiAgICBpbml0KCk7XG4gICAgcmV0dXJuIHtzaG93SG9tZURPTX07XG59IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gJy4vcGFnZS1sb2FkLmpzJztcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZS5qcyc7XG5mdW5jdGlvbiBwYWdlQ29udHJvbGxlcigpIHtcbiAgICBsZXQgdGFiQ29udGVudDtcbiAgICBsZXQgaG9tZUJ0bjtcbiAgICBsZXQgbWVudUJ0bjtcbiAgICBsZXQgY29udGFjdEJ0bjtcbiAgICBsZXQgcGFnZTtcbiAgICBsZXQgY29udGFjdDtcbiAgICBsZXQgaG9tZTtcbiAgICBsZXQgbWVudTtcblxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgIGNyZWF0ZUNvbnRlbnQoKTtcbiAgICAgICAgbG9hZCgpO1xuICAgICAgICBjYWNoZURPTSgpO1xuICAgICAgICBiaW5kRXZlbnRzKCk7XG4gICAgfVxuICAgIGNvbnN0IGNhY2hlRE9NID0gKCkgPT4ge1xuICAgICAgICB0YWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWItY29udGVudFwiKVxuICAgICAgICBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtYnRuJyk7XG4gICAgICAgIG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1idG4nKTtcbiAgICAgICAgY29udGFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWJ0bicpO1xuICAgIH1cbiAgICBjb25zdCBsb2FkID0gKCkgPT57XG4gICAgICAgIHBhZ2UgPSBsb2FkUGFnZSgnY29udGVudCcpO1xuICAgICAgICBjb250YWN0ID0gY29udGFjdFBhZ2UoKVxuICAgICAgICBob21lID0gIGhvbWVQYWdlKCk7XG4gICAgfVxuICAgIGNvbnN0IGJpbmRFdmVudHMgPSAoKSA9PiB7XG4gICAgICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwYWdlLmNsZWFyVGFiQ29udGVudCgpO1xuICAgICAgICAgICAgaG9tZS5zaG93SG9tZURPTSh0YWJDb250ZW50KTtcbiAgICAgICAgfSlcbiAgICAgICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBhZ2UuY2xlYXJUYWJDb250ZW50KCk7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwYWdlLmNsZWFyVGFiQ29udGVudCgpO1xuICAgICAgICAgICAgY29udGFjdC5zaG93Q29udGFjdHNET00odGFiQ29udGVudCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdEaXYuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGJvZHkuYXBwZW5kKG5ld0Rpdik7XG4gICAgfVxuICAgIGluaXQoKTtcbn1cblxuY29uc3QgcmVzdGF1cmFudFBhZ2UgPSBwYWdlQ29udHJvbGxlcigpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQYWdlKGlkKXtcbiAgICBsZXQgY29udGVudDsgICAgLy8gcGFyZW50IGRpdiB3aGVyZSBwYWdlIGJlbG9uZ3NcbiAgICBsZXQgaGVhZGVyOyAgICAgLy8gaGVhZGVyIHJlZmVyZW5jZVxuICAgIGxldCBmb290ZXI7ICAgICAvLyBmb290ZXIgcmVmZXJlbmNlXG4gICAgbGV0IG5hdkJhcjsgICAgIC8vIHJlZmVyZW5jZSB0byBuYXZCYXJcbiAgICBsZXQgdGFiQ29udGVudDsgLy8gcmVmZXJlbmNlIHRvIGNvbnRlbnQgZm9yIGVhY2ggdGFiXG4gICAgLy8gaW5pdGlhbCBydW5cbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICBjYWNoZURvbSgpO1xuICAgICAgICBsb2FkUGFnZSgpO1xuICAgIH1cbiAgICAvLyBnZXQgcmVsZXZhbnQgZG9tIGVsZW1lbnRzXG4gICAgY29uc3QgY2FjaGVEb20gPSAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICB9XG4gICAgLy8gbG9hZHMgdGhlIHBhZ2VcbiAgICBjb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgICAgICAgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCdIaXN1aSBTdXNoaScpO1xuICAgICAgICBuYXZCYXIgPSBjcmVhdGVOYXZCYXIoKTtcbiAgICAgICAgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCdDb3B5cmlnaHQgwqkgJyArIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIFwiIEphY2tzb24gV3VcIik7XG4gICAgICAgIHRhYkNvbnRlbnQgPSBjcmVhdGVUYWJDb250ZW50KCk7XG4gICAgICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIH1cbiAgICAvLyBjcmVhdGVzIHRoZSBoZWFkZXJcbiAgICBjb25zdCBjcmVhdGVIZWFkZXIgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLXRpdGxlJyk7XG5cbiAgICAgICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cbiAgICAvLyBjcmVhdGVzIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgIGNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgICAgIG5hdkJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1iYXInKTtcblxuICAgICAgICBjb25zdCBob21lQnRuID0gY3JlYXRlVGFiQnRuKCdob21lLWJ0bicsICdIb21lJyk7XG4gICAgICAgIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVUYWJCdG4oJ21lbnUtYnRuJywgJ01lbnUnKTtcbiAgICAgICAgY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZVRhYkJ0bignY29udGFjdC1idG4nLCAnQ29udGFjdCcpO1xuXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gICAgICAgIHJldHVybiBuYXZCYXI7XG4gICAgfVxuICAgIC8vIGNyZWF0ZXMgYSBmdW5jdGlvbmFsIHRhYiBidXR0b25cbiAgICBjb25zdCBjcmVhdGVUYWJCdG4gPSAoaWQsIHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgbmV3QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgICAgIG5ld0J0bi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgICAgICBuZXdCdG4uYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICAgICAgcmV0dXJuIG5ld0J0bjtcbiAgICB9XG4gICAgLy8gQ3JlYXRlcyB0aGUgZm9vdGVyIGZvciB0aGUgd2VicGFnZVxuICAgIGNvbnN0IGNyZWF0ZUZvb3RlciA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVRhYkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudCcpO1xuICAgICAgICByZXR1cm4gdGFiQ29udGVudDtcbiAgICB9XG4gICAgY29uc3QgY2xlYXJUYWJDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSh0YWJDb250ZW50LmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgdGFiQ29udGVudC5yZW1vdmVDaGlsZCh0YWJDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaXQoKTtcbiAgICByZXR1cm57Y29udGVudCwgaGVhZGVyLCBmb290ZXIsIG5hdkJhciwgdGFiQ29udGVudCwgY2xlYXJUYWJDb250ZW50fTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
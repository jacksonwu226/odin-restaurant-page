"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");


const newDiv = document.createElement('div');
newDiv.setAttribute('id','content');
const body = document.body;
body.append(newDiv);


const page = (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__["default"])('content');
page.init();

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
    let content;
    let header;
    let footer;
    let navBar;
    let tabContent;

    const init = () => {
        cacheDom();
        loadPage();
    }
    const cacheDom = () => {
        content = document.getElementById('content')
    }
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
    const createHeader = (title) => {
        const header = document.createElement('div');
        const headerTitle = document.createElement('h1');
        
        header.classList.add('header');
        header.setAttribute('id', 'header-title');

        headerTitle.textContent = title;
        header.appendChild(headerTitle);

        return header;
    }
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
    const createTabBtn = (id, text) => {
        const newBtn = document.createElement('button');
        const span = document.createElement('span');

        newBtn.setAttribute('id', id);
        newBtn.classList.add('tab');

        span.textContent = text;

        newBtn.appendChild(span);

        return newBtn;
    }
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
    return{init, content, header, footer, navBar, tabContent};
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsYUFBYSx5REFBUTtBQUNyQjs7Ozs7Ozs7Ozs7Ozs7QUNUZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkUGFnZSBmcm9tICcuL3BhZ2UtbG9hZC5qcyc7XG5cbmNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubmV3RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdjb250ZW50Jyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbmJvZHkuYXBwZW5kKG5ld0Rpdik7XG5cblxuY29uc3QgcGFnZSA9IGxvYWRQYWdlKCdjb250ZW50Jyk7XG5wYWdlLmluaXQoKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZShpZCl7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgbGV0IGhlYWRlcjtcbiAgICBsZXQgZm9vdGVyO1xuICAgIGxldCBuYXZCYXI7XG4gICAgbGV0IHRhYkNvbnRlbnQ7XG5cbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICBjYWNoZURvbSgpO1xuICAgICAgICBsb2FkUGFnZSgpO1xuICAgIH1cbiAgICBjb25zdCBjYWNoZURvbSA9ICgpID0+IHtcbiAgICAgICAgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICB9XG4gICAgY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGhlYWRlciA9IGNyZWF0ZUhlYWRlcignSGlzdWkgU3VzaGknKTtcbiAgICAgICAgbmF2QmFyID0gY3JlYXRlTmF2QmFyKCk7XG4gICAgICAgIGZvb3RlciA9IGNyZWF0ZUZvb3RlcignQ29weXJpZ2h0IMKpICcgKyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyBcIiBKYWNrc29uIFd1XCIpO1xuICAgICAgICB0YWJDb250ZW50ID0gY3JlYXRlVGFiQ29udGVudCgpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItdGl0bGUnKTtcblxuICAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgICAgIG5hdkJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1iYXInKTtcblxuICAgICAgICBjb25zdCBob21lQnRuID0gY3JlYXRlVGFiQnRuKCdob21lLWJ0bicsICdIb21lJyk7XG4gICAgICAgIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVUYWJCdG4oJ21lbnUtYnRuJywgJ01lbnUnKTtcbiAgICAgICAgY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZVRhYkJ0bignY29udGFjdC1idG4nLCAnQ29udGFjdCcpO1xuXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gICAgICAgIHJldHVybiBuYXZCYXI7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVRhYkJ0biA9IChpZCwgdGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICBuZXdCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgbmV3QnRuLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgICAgIG5ld0J0bi5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICByZXR1cm4gbmV3QnRuO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVGb290ZXIgPSAodGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgICAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKHBhcmEpO1xuICAgICAgICByZXR1cm4gZm9vdGVyO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVUYWJDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQnKTtcbiAgICAgICAgcmV0dXJuIHRhYkNvbnRlbnQ7XG4gICAgfVxuICAgIHJldHVybntpbml0LCBjb250ZW50LCBoZWFkZXIsIGZvb3RlciwgbmF2QmFyLCB0YWJDb250ZW50fTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
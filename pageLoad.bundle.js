"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["pageLoad"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/page-load.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQYWdlKGlkKXtcbiAgICBsZXQgY29udGVudDtcbiAgICBsZXQgaGVhZGVyO1xuICAgIGxldCBmb290ZXI7XG4gICAgbGV0IG5hdkJhcjtcbiAgICBsZXQgdGFiQ29udGVudDtcblxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgIGNhY2hlRG9tKCk7XG4gICAgICAgIGxvYWRQYWdlKCk7XG4gICAgfVxuICAgIGNvbnN0IGNhY2hlRG9tID0gKCkgPT4ge1xuICAgICAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIH1cbiAgICBjb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgICAgICAgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCdIaXN1aSBTdXNoaScpO1xuICAgICAgICBuYXZCYXIgPSBjcmVhdGVOYXZCYXIoKTtcbiAgICAgICAgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCdDb3B5cmlnaHQgwqkgJyArIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIFwiIEphY2tzb24gV3VcIik7XG4gICAgICAgIHRhYkNvbnRlbnQgPSBjcmVhdGVUYWJDb250ZW50KCk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFiQ29udGVudCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlSGVhZGVyID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIFxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlci10aXRsZScpO1xuXG4gICAgICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlTmF2QmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICAgICAgbmF2QmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LWJhcicpO1xuXG4gICAgICAgIGNvbnN0IGhvbWVCdG4gPSBjcmVhdGVUYWJCdG4oJ2hvbWUtYnRuJywgJ0hvbWUnKTtcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZVRhYkJ0bignbWVudS1idG4nLCAnTWVudScpO1xuICAgICAgICBjb25zdCBjb250YWN0QnRuID0gY3JlYXRlVGFiQnRuKCdjb250YWN0LWJ0bicsICdDb250YWN0Jyk7XG5cbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbiAgICAgICAgcmV0dXJuIG5hdkJhcjtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlVGFiQnRuID0gKGlkLCB0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgIG5ld0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgICAgICBuZXdCdG4uY2xhc3NMaXN0LmFkZCgndGFiJyk7XG5cbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICAgICAgbmV3QnRuLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgIHJldHVybiBuZXdCdG47XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUZvb3RlciA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVRhYkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudCcpO1xuICAgICAgICByZXR1cm4gdGFiQ29udGVudDtcbiAgICB9XG4gICAgcmV0dXJue2luaXQsIGNvbnRlbnQsIGhlYWRlciwgZm9vdGVyLCBuYXZCYXIsIHRhYkNvbnRlbnR9O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/page-load.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUGFnZShpZCl7XG4gICAgbGV0IGNvbnRlbnQ7ICAgIC8vIHBhcmVudCBkaXYgd2hlcmUgcGFnZSBiZWxvbmdzXG4gICAgbGV0IGhlYWRlcjsgICAgIC8vIGhlYWRlciByZWZlcmVuY2VcbiAgICBsZXQgZm9vdGVyOyAgICAgLy8gZm9vdGVyIHJlZmVyZW5jZVxuICAgIGxldCBuYXZCYXI7ICAgICAvLyByZWZlcmVuY2UgdG8gbmF2QmFyXG4gICAgbGV0IHRhYkNvbnRlbnQ7IC8vIHJlZmVyZW5jZSB0byBjb250ZW50IGZvciBlYWNoIHRhYlxuICAgIGxldCBuYXZDb250ZW50O1xuICAgIC8vIGluaXRpYWwgcnVuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgY2FjaGVEb20oKTtcbiAgICAgICAgbG9hZFBhZ2UoKTtcbiAgICB9XG4gICAgLy8gZ2V0IHJlbGV2YW50IGRvbSBlbGVtZW50c1xuICAgIGNvbnN0IGNhY2hlRG9tID0gKCkgPT4ge1xuICAgICAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgfVxuICAgIC8vIGxvYWRzIHRoZSBwYWdlXG4gICAgY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGhlYWRlciA9IGNyZWF0ZUhlYWRlcignSGlzdWkgU3VzaGknKTtcbiAgICAgICAgbmF2QmFyID0gY3JlYXRlTmF2QmFyKCk7XG4gICAgICAgIGZvb3RlciA9IGNyZWF0ZUZvb3RlcignQ29weXJpZ2h0IMKpICcgKyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyBcIiBKYWNrc29uIFd1XCIpO1xuICAgICAgICB0YWJDb250ZW50ID0gY3JlYXRlVGFiQ29udGVudCgpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYkNvbnRlbnQpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgfVxuICAgIC8vIGNyZWF0ZXMgdGhlIGhlYWRlclxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItdGl0bGUnKTtcblxuICAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuICAgIC8vIGNyZWF0ZXMgdGhlIG5hdmlnYXRpb24gYmFyXG4gICAgY29uc3QgY3JlYXRlTmF2QmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICAgICAgbmF2QmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2LWJhcicpO1xuXG4gICAgICAgIGNvbnN0IGhvbWVCdG4gPSBjcmVhdGVUYWJCdG4oJ2hvbWUtYnRuJywgJ0hvbWUnKTtcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGNyZWF0ZVRhYkJ0bignbWVudS1idG4nLCAnTWVudScpO1xuICAgICAgICBjb25zdCBjb250YWN0QnRuID0gY3JlYXRlVGFiQnRuKCdjb250YWN0LWJ0bicsICdDb250YWN0Jyk7XG5cbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbiAgICAgICAgcmV0dXJuIG5hdkJhcjtcbiAgICB9XG4gICAgLy8gY3JlYXRlcyBhIGZ1bmN0aW9uYWwgdGFiIGJ1dHRvblxuICAgIGNvbnN0IGNyZWF0ZVRhYkJ0biA9IChpZCwgdGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICBuZXdCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICAgICAgbmV3QnRuLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgICAgIG5ld0J0bi5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICByZXR1cm4gbmV3QnRuO1xuICAgIH1cbiAgICAvLyBDcmVhdGVzIHRoZSBmb290ZXIgZm9yIHRoZSB3ZWJwYWdlXG4gICAgY29uc3QgY3JlYXRlRm9vdGVyID0gKHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwYXJhKTtcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlVGFiQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50Jyk7XG4gICAgICAgIHJldHVybiB0YWJDb250ZW50O1xuICAgIH1cbiAgICBjb25zdCBjbGVhclRhYkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHdoaWxlKHRhYkNvbnRlbnQuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICB0YWJDb250ZW50LnJlbW92ZUNoaWxkKHRhYkNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdCgpO1xuICAgIHJldHVybntjb250ZW50LCBoZWFkZXIsIGZvb3RlciwgbmF2QmFyLCB0YWJDb250ZW50LCBjbGVhclRhYkNvbnRlbnR9O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
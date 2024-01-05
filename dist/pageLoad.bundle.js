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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQYWdlKGlkKXtcbiAgICBsZXQgY29udGVudDsgICAgLy8gcGFyZW50IGRpdiB3aGVyZSBwYWdlIGJlbG9uZ3NcbiAgICBsZXQgaGVhZGVyOyAgICAgLy8gaGVhZGVyIHJlZmVyZW5jZVxuICAgIGxldCBmb290ZXI7ICAgICAvLyBmb290ZXIgcmVmZXJlbmNlXG4gICAgbGV0IG5hdkJhcjsgICAgIC8vIHJlZmVyZW5jZSB0byBuYXZCYXJcbiAgICBsZXQgdGFiQ29udGVudDsgLy8gcmVmZXJlbmNlIHRvIGNvbnRlbnQgZm9yIGVhY2ggdGFiXG4gICAgLy8gaW5pdGlhbCBydW5cbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICBjYWNoZURvbSgpO1xuICAgICAgICBsb2FkUGFnZSgpO1xuICAgIH1cbiAgICAvLyBnZXQgcmVsZXZhbnQgZG9tIGVsZW1lbnRzXG4gICAgY29uc3QgY2FjaGVEb20gPSAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICB9XG4gICAgLy8gbG9hZHMgdGhlIHBhZ2VcbiAgICBjb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgICAgICAgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCdIaXN1aSBTdXNoaScpO1xuICAgICAgICBuYXZCYXIgPSBjcmVhdGVOYXZCYXIoKTtcbiAgICAgICAgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCdDb3B5cmlnaHQgwqkgJyArIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIFwiIEphY2tzb24gV3VcIik7XG4gICAgICAgIHRhYkNvbnRlbnQgPSBjcmVhdGVUYWJDb250ZW50KCk7XG4gICAgICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIH1cbiAgICAvLyBjcmVhdGVzIHRoZSBoZWFkZXJcbiAgICBjb25zdCBjcmVhdGVIZWFkZXIgPSAodGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLXRpdGxlJyk7XG5cbiAgICAgICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVyO1xuICAgIH1cbiAgICAvLyBjcmVhdGVzIHRoZSBuYXZpZ2F0aW9uIGJhclxuICAgIGNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgICAgIG5hdkJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdi1iYXInKTtcblxuICAgICAgICBjb25zdCBob21lQnRuID0gY3JlYXRlVGFiQnRuKCdob21lLWJ0bicsICdIb21lJyk7XG4gICAgICAgIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVUYWJCdG4oJ21lbnUtYnRuJywgJ01lbnUnKTtcbiAgICAgICAgY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZVRhYkJ0bignY29udGFjdC1idG4nLCAnQ29udGFjdCcpO1xuXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gICAgICAgIHJldHVybiBuYXZCYXI7XG4gICAgfVxuICAgIC8vIGNyZWF0ZXMgYSBmdW5jdGlvbmFsIHRhYiBidXR0b25cbiAgICBjb25zdCBjcmVhdGVUYWJCdG4gPSAoaWQsIHRleHQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgbmV3QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgICAgIG5ld0J0bi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcblxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgICAgICBuZXdCdG4uYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICAgICAgcmV0dXJuIG5ld0J0bjtcbiAgICB9XG4gICAgLy8gQ3JlYXRlcyB0aGUgZm9vdGVyIGZvciB0aGUgd2VicGFnZVxuICAgIGNvbnN0IGNyZWF0ZUZvb3RlciA9ICh0ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgICAgIHJldHVybiBmb290ZXI7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVRhYkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudCcpO1xuICAgICAgICByZXR1cm4gdGFiQ29udGVudDtcbiAgICB9XG4gICAgY29uc3QgY2xlYXJUYWJDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICB3aGlsZSh0YWJDb250ZW50LmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgdGFiQ29udGVudC5yZW1vdmVDaGlsZCh0YWJDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaXQoKTtcbiAgICByZXR1cm57Y29udGVudCwgaGVhZGVyLCBmb290ZXIsIG5hdkJhciwgdGFiQ29udGVudCwgY2xlYXJUYWJDb250ZW50fTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
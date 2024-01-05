"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["contact"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdFBhZ2UoKXtcbiAgICBsZXQgY29udGFjdDtcbiAgICBsZXQgY29udGFjdERPTTtcbiAgICBjb25zdCBpbml0ID0gKCkgPT57XG4gICAgICAgIGxvYWRDb250YWN0cygpO1xuICAgIH1cbiAgICBjb25zdCBsb2FkQ29udGFjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RDYXJkID0gY3JlYXRlQ29udGFjdCgnSGlzdWkgU3VzaGknLCAnMDAwLTAwMC0wMDAwJywgJ0ZvbHNvbSwgQ0EnKTtcbiAgICAgICAgY29uc3QgY29udGFjdENhcmRET00gPSBjcmVhdGVDb250YWN0Q2FyZERPTShjb250YWN0Q2FyZCk7XG5cbiAgICAgICAgY29udGFjdERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWN0RE9NLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1wYWdlJyk7XG4gICAgICAgIGNvbnRhY3RET00uY2xhc3NMaXN0LmFkZCgnY29udGVudC1wYWdlJyk7XG4gICAgICAgIGNvbnRhY3RET00uYXBwZW5kQ2hpbGQoY29udGFjdENhcmRET00pXG4gICAgfVxuICAgIGNvbnN0IHNob3dDb250YWN0c0RPTSA9IChjb250YWluZXIpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RET00pO1xuICAgIH1cbiAgICAvLyBjcmVhdGVzIGEgY29udGFjdCBjYXJkXG4gICAgY29uc3QgY3JlYXRlQ29udGFjdCA9IChuYW1lLCBwaG9uZSwgYWRkcmVzcykgPT4ge1xuICAgICAgICBjb250YWN0ID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHBob25lOiBwaG9uZSxcbiAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3NcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGNvbnRhY3Q7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUNvbnRhY3RDYXJkRE9NID0gKGNvbnRhY3RDYXJkKSA9PntcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZCcpO1xuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZC1uYW1lJyk7XG4gICAgICAgIHBob25lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZC1waG9uZScpO1xuICAgICAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY2FyZC1hZGRyZXNzJyk7XG5cbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGNvbnRhY3RDYXJkLm5hbWU7XG4gICAgICAgIHBob25lLnRleHRDb250ZW50ID0gY29udGFjdENhcmQucGhvbmU7XG4gICAgICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBjb250YWN0Q2FyZC5hZGRyZXNzO1xuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgIH1cbiAgICBpbml0KCk7XG4gICAgcmV0dXJuIHtzaG93Q29udGFjdHNET019O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
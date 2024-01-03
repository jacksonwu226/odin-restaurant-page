import loadPage from './page-load.js';
import contactPage from './contact.js';

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
        console.log(1)
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
        page = loadPage('content');
        contact = contactPage()
    }
    const bindEvents = () => {
        homeBtn.addEventListener('click', () => {
            page.clearTabContent();
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
        console.log(newDiv);
    }
    init();
}

const restaurantPage = pageController();
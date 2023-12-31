export default function loadPage(id){
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
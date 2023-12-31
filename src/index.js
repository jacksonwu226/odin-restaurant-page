import loadPage from './page-load.js';

const newDiv = document.createElement('div');
newDiv.setAttribute('id','content');
const body = document.body;
body.append(newDiv);


const page = loadPage('content');
page.init();
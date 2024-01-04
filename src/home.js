export default function homePage(){
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
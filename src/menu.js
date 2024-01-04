import dragonRoll from './img/dragon-roll.jpg';
import tempuraRoll from './img/tempura-roll.jpg'

import pocariSweat from './img/pocari-sweat-drink.jpg';
import ramune from './img/ramune-drink.png';

export default function menuPage(){
    let menuDOM;
    const init = () =>{
        loadMenu();
    }
    const loadMenu = () =>{
        menuDOM = document.createElement('div');
        menuDOM.setAttribute('id', 'menu-page');
        menuDOM.classList.add('content-page');

        const foodMenuDOM = createFoodDOM();
        const drinkMenuDOM = createDrinkDOM();
        menuDOM.appendChild(foodMenuDOM);
        menuDOM.appendChild(drinkMenuDOM);
    }
    const showMenuDOM = (container) => {
        container.appendChild(menuDOM);
    }
    const createItemCard = (name, about, cost, img) =>{
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');

        const nameDOM = document.createElement('p');
        nameDOM.classList.add('item-name');
        nameDOM.textContent = name;
        const aboutDOM = document.createElement('p');
        aboutDOM.classList.add('item-about');
        aboutDOM.textContent = about;
        const costDOM = document.createElement('p');
        costDOM.classList.add('item-cost');
        costDOM.textContent = '$ '+cost;
        const imgDOM = new Image();
        imgDOM.classList.add('item-img');
        imgDOM.src = img;

        itemCard.appendChild(nameDOM);
        itemCard.appendChild(aboutDOM);
        itemCard.appendChild(costDOM);
        itemCard.appendChild(imgDOM);
        return itemCard;
    }
    const createHeading = (content) =>{
        const heading = document.createElement('h2');
        heading.classList.add('heading');
        heading.textContent = content;
        return heading;
    }
    const createFoodDOM = () => {
        const foodDOM = document.createElement('div');
        foodDOM.classList.add('food-menu');
        const foodHeading = createHeading('Sushi');
        foodDOM.appendChild(foodHeading);
        
        const foodItems = document.createElement('div');
        foodItems.classList.add('food-grid');

        //adding food cards
        const dragonRollName = 'Dragon Roll';
        const dragonRollAbout = 'A sushi roll featuring shrimp tempura, avocado, and cucumber, topped with thin avocado slices and a drizzle of eel sauce.';
        const dragonRollCost = '18';
        const dragonRollImg = dragonRoll;

        const tempRollName = 'Tempura Roll'
        const tempRollAbout = 'A sushi roll filled with tempura-fried seafood or vegetables, providing a crispy texture and savory flavor.';
        const tempRollCost = '12';
        const tempRollImg = tempuraRoll;
        const dragonRollCard = createItemCard(dragonRollName, dragonRollAbout, dragonRollCost, dragonRollImg);
        const tempRollCard = createItemCard(tempRollName, tempRollAbout,tempRollCost,tempRollImg);

        foodItems.appendChild(dragonRollCard);
        foodItems.appendChild(tempRollCard);
        foodDOM.appendChild(foodItems);
        return foodDOM;
    }
    const createDrinkDOM = () => {
        const drinkDOM = document.createElement('div');
        drinkDOM.classList.add('drink-menu')
        const drinkHeading = createHeading('Drinks');
        drinkDOM.appendChild(drinkHeading);

        const drinkItems = document.createElement('div');
        drinkItems.classList.add('drink-grid');
    
        // Adding drink cards
        const pocariSweatName = 'Pocari Sweat';
        const pocariSweatAbout = 'A Japanese isotonic drink designed to replenish electrolytes and fluids, offering a refreshing taste.';
        const pocariSweatCost = '3';
        const pocariSweatImg = pocariSweat;
        const pocariSweatCard = createItemCard(pocariSweatName, pocariSweatAbout, pocariSweatCost, pocariSweatImg);
    
        const ramuneName = 'Ramune';
        const ramuneAbout = 'A popular Japanese soda with a distinctive marble-sealed bottle, available in various flavors and known for its effervescence.';
        const ramuneCost = '2.5';
        const ramuneImg = ramune;
        const ramuneCard = createItemCard(ramuneName, ramuneAbout, ramuneCost, ramuneImg);
    
        drinkItems.appendChild(pocariSweatCard);
        drinkItems.appendChild(ramuneCard);
        drinkDOM.appendChild(drinkItems);
        return drinkDOM;
    }
    init();
    return {showMenuDOM};
}
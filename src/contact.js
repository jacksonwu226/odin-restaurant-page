export default function contact(){
    let contact;
    let contactDOM;
    const init = () =>{
        cacheDom();
        loadContacts();
    }
    const cacheDom = () => {
    }
    const loadContacts = () => {
        contact = createContact('Hisui Sushi', '000-000-0000', 'Folsom, CA');
        contactDOM = createContactCardDOM(contact);
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
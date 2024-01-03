export default function contact(parent, btn){
    let container;
    let contactBtn;
    const init = () =>{
        cacheDom();
    }
    const cacheDom = () => {
        container = parent;
        contactBtn = btn;
    }
    // creates a contact card
    const createContactCard = (name, position, phone, address, img_addr) => {
        contactCard = {
            name: name,
            position: position,
            phone: phone,
            address: address,
            img_addr: img_addr
        };
        return contactCard;
    }
    const createContactCardDOM = (contactCard) =>{
        const contactCard = createElement('div');
    }
}
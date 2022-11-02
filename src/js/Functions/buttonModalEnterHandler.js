import authorization from "../API/authorization.js";
import removeElement from "./removeElement.js";
import createButton from "./createButton.js";
import {buttonCreateVisit} from "../DataStorage/buttons.js";

function buttonModalEnterHandler() {
    const email = document.querySelector('#user-email').value;
    const password = document.querySelector('#user-password').value;
    const filterText = document.querySelector('#filter-text');
    const filterStatus = document.querySelector('#filter-status');
    const filterUrgency = document.querySelector('#filter-urgency');

    authorization(email, password)
        .then(response => {
            localStorage.setItem("cardsToken", response);
            removeElement('.header__btn');
            createButton(buttonCreateVisit);
            filterText.removeAttribute('disabled');
            filterStatus.removeAttribute('disabled');
            filterUrgency.removeAttribute('disabled');
            removeElement('.modal-wrapper');
        })
        .catch(e => console.error(e));
}

export default buttonModalEnterHandler;
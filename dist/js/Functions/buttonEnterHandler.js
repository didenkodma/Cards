import Modal from "../Classes/modal.js";
import {buttonCreateVisit} from "../DataStorage/buttons.js";
import createButton from "./createButton.js";
import removeElement from "./removeElement.js";


function buttonEnterHandler() {

    new Modal().render('.wrapper');

}

export default buttonEnterHandler;
import testHandler from "../Functions/testHandler.js";
import buttonEnterHandler from "../Functions/buttonEnterHandler.js";
import buttonModalCloseHandler from "../Functions/buttonModalCloseHandler.js";
import buttonModalEnterHandler from "../Functions/buttonModalEnterHandler.js";

// Дані для створення кнопки атворизації
const buttonEnter = {
    selector: ".header__useable", 
    content: "Увійти", 
    style: "header__btn", 
    handler: buttonEnterHandler
}

// Дані для створення кнопки, що закриває модалку (авторизація)
const buttonModalClose = {
    selector: ".modal", 
    content: "<i class=\"fa fa-regular fa-close\"></i>", 
    style: "modal__btn-close", 
    handler: buttonModalCloseHandler
}

// Дані для створення кнопки, що відправляє запит на сервер (авторизація)
const buttonModalEnter = {
    selector: ".modal__form", 
    content: "Увійти", 
    style: "modal__btn-enter", 
    handler: buttonModalEnterHandler
}

// Дані для створення кнопки, що створює новий візит
const buttonCreateVisit = {
    selector: ".header__useable", 
    content: "Створити візит", 
    style: "header__btn", 
    handler: testHandler
}

export {buttonEnter, buttonModalEnter, buttonModalClose, buttonCreateVisit};
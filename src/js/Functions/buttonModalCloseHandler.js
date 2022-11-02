import removeElement from "./removeElement.js";

function buttonModalCloseHandler() {
    const btnModalCloseSelector = ".modal-wrapper";
    removeElement(btnModalCloseSelector);
}

export default buttonModalCloseHandler;
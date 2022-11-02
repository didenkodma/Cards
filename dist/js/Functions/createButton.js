import Button from "../Classes/button.js";

function createButton({selector, content, style, handler}) {
    new Button(content, style, handler).render(selector);
}

export default createButton;
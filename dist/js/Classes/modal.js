import createButton from "../Functions/createButton.js";
import {buttonModalEnter, buttonModalClose} from "../DataStorage/buttons.js";

class Modal {

    constructor() {
        this.modalWrapper = document.createElement('div');
        this.modalBack = document.createElement('div');
        this.modal = document.createElement('div');
        this.modalForm = document.createElement('form');
        this.modalLabelUserEmail = document.createElement('label');
        this.modalInputUserEmail = document.createElement('input');
        this.modalLabelUserPassword = document.createElement('label');
        this.modalInputUserPassword = document.createElement('input');
    }

    drawElems(selector) {

        this.modalWrapper.className = 'modal-wrapper';
        this.modalBack.className = 'modal-back'
        this.modal.className = 'modal';
        this.modalForm.className = 'modal__form';
        this.modalLabelUserEmail.className = 'modal__email-label';
        this.modalInputUserEmail.className = 'modal__email-input';
        this.modalLabelUserPassword.className = 'modal__password-label';
        this.modalInputUserPassword.className = 'modal__password-input';

        this.modalLabelUserEmail.innerText = 'Введіть ваш email:';
        this.modalLabelUserPassword.innerText = 'Введіть ваш пароль:';

        this.modalInputUserEmail.id = "user-email";
        this.modalInputUserPassword.id = "user-password";

        this.modalLabelUserEmail.setAttribute("for", "user-email");
        this.modalLabelUserPassword.setAttribute("for", "user-password");
        this.modalInputUserEmail.setAttribute("type", "email");
        this.modalInputUserPassword.setAttribute("type", "password");
        this.modalInputUserEmail.setAttribute("placeholder", "user@test.com");
        this.modalInputUserPassword.setAttribute("placeholder", "***********");

        this.modalInputUserEmail.required = " ";
        this.modalInputUserPassword.required = " ";

        this.modalForm.append(this.modalLabelUserEmail, this.modalInputUserEmail,this.modalLabelUserPassword, this.modalInputUserPassword);
        this.modal.append(this.modalForm);
        this.modalWrapper.append(this.modal, this.modalBack);
        document.querySelector(selector).append(this.modalWrapper);
    }


    render(selector) {

        this.drawElems(selector);

        createButton(buttonModalEnter);
        createButton(buttonModalClose);

        this.modalBack.addEventListener('click', () => {
            this.modalWrapper.remove();
        });

    }
}

export default Modal;
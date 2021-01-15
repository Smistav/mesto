export { defaultValues, FormValidator }

const defaultValues = {
  formSelector: '.popup__container_form_isform',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

class FormValidator {
  constructor(defaultValues, form) {
    this._form = form;
    this._formSelector = defaultValues.formSelector;
    this._input = defaultValues.inputSelector;
    this._submit = defaultValues.submitButtonSelector;
    this._inactiveButton = defaultValues.inactiveButtonClass;
    this._inputError = defaultValues.inputErrorClass;
    this._error = defaultValues.errorClass;
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this._inputError);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._error);
  }
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(this._inputError);
    errorElement.classList.remove(this._error);
    errorElement.textContent = '';
  };

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }
  toggleButtonState() {
    const buttonElement = this._formElement.querySelector(this._submit);

    if (!this._formElement.checkValidity()) {
      buttonElement.classList.add(this._inactiveButton);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButton);
      buttonElement.disabled = false;
    }
  };
  _setEventListeners() {
    this.toggleButtonState();
    this._inputElement.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this.clearError();
        this._isValid(inputElement);
        this.toggleButtonState();
      });
    });
  }
  clearError() {
    const visibleError = this._formElement.querySelectorAll('.' + this._error);

    visibleError.forEach((elem) => elem.classList.remove(this._error));
    this._inputElement.forEach((elem) => elem.classList.remove(this._inputError));
  }
  enableValidation() {
    this._formElement = this._form.querySelector(this._formSelector);
    this._inputElement = this._formElement.querySelectorAll(this._input);
    this._formElement.addEventListener('submit', (evt) => evt.preventDefault());
    this._setEventListeners();
    return this._form
  }
}
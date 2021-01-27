export default class FormValidator {
  constructor(constValid, form) {
    this._form = document.querySelector(form);
    this._formSelector = constValid.formSelector;
    this._input = constValid.inputSelector;
    this._submit = constValid.submitButtonSelector;
    this._inactiveButton = constValid.inactiveButtonClass;
    this._inputError = constValid.inputErrorClass;
    this._error = constValid.errorClass;
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
  _toggleButtonState() {
    if (!this._formElement.checkValidity()) {
      this._buttonElement.classList.add(this._inactiveButton);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButton);
      this._buttonElement.disabled = false;
    }
  };
  _setEventListeners() {
    this._toggleButtonState();
    this._inputElement.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }
  resetValidation() {
    const visibleError = this._formElement.querySelectorAll('.' + this._error);

    visibleError.forEach((elem) => elem.classList.remove(this._error));
    this._inputElement.forEach((elem) => elem.classList.remove(this._inputError));
    this._buttonElement.classList.add(this._inactiveButton);
    this._buttonElement.disabled = true;
  }
  enableValidation() {
    this._formElement = this._form.querySelector(this._formSelector);
    this._inputElement = this._formElement.querySelectorAll(this._input);
    this._buttonElement = this._formElement.querySelector(this._submit);
    this._formElement.addEventListener('submit', (evt) => evt.preventDefault());
    this._setEventListeners();
  }
}
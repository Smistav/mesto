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
    this._input = defaultValues.inputSelector;
    this._inputError = defaultValues.inputErrorClass;
    this._error = defaultValues.errorClass;
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputError);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._error);
  }
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      //hideInputError();
    }
  }
  _setEventListeners() {
    //const inputList = this._formElement.querySelectorAll(this._input);
    //const ButtonElement = formElement.querySelector(validConst.submitButtonSelector);
    //toggleButtonState(formElement.checkValidity(), ButtonElement, validConst);
    //console.log(inputList);
    this._inputElement.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        //toggleButtonState(formElement.checkValidity(), ButtonElement, validConst);
      });
    });
  }
  enableValidation() {
    this._formElement = document.querySelector(this._form);
    this._inputElement = this._formElement.querySelectorAll(this._input); // нужен Олл
    this._formElement.addEventListener('submit', (evt) => evt.preventDefault());
    this._setEventListeners();
    return this._formElement
  }
}
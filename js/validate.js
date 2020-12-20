const defaultValues = {
  formSelector: '.popup__container_form_isform',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement, errorMessage, validConst) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(validConst.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validConst.errorClass);
};

const hideInputError = (formElement, inputElement, validConst) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(validConst.inputErrorClass);
  errorElement.classList.remove(validConst.errorClass);
  errorElement.textContent = '';
};

function clearError(popup) {
  const visibleError = popup.querySelectorAll('.' + defaultValues.errorClass);
  const visibleErrorInput = popup.querySelectorAll(defaultValues.inputSelector);

  visibleError.forEach((elem) => elem.classList.remove(defaultValues.errorClass));
  visibleErrorInput.forEach((elem) => elem.classList.remove(defaultValues.inputErrorClass));
}

const isValid = (formElement, inputElement, validConst) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validConst);
  } else {
    hideInputError(formElement, inputElement, validConst);
  }
};

const toggleButtonState = (isActive, buttonElement, validConst) => {
  if (!isActive) {
    buttonElement.classList.add(validConst.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(validConst.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, validConst) => {
  const inputList = Array.from(formElement.querySelectorAll(validConst.inputSelector));
  const ButtonElement = formElement.querySelector(validConst.submitButtonSelector);

  toggleButtonState(formElement.checkValidity(), ButtonElement, validConst);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, validConst);
      toggleButtonState(formElement.checkValidity(), ButtonElement, validConst);
    });
  });
};

const enableValidation = (validConst) => {
  const formList = Array.from(document.querySelectorAll(validConst.formSelector));
  formList.forEach((inputForm) => {
    inputForm.addEventListener('submit', (evt) => evt.preventDefault());
    setEventListeners(inputForm, validConst);
  });
}

enableValidation(defaultValues);
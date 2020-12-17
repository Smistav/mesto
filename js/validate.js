
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(validConst.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validConst.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(validConst.inputErrorClass);
  errorElement.classList.remove(validConst.errorClass);
  errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validConst.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(validConst.inactiveButtonClass);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(document.querySelectorAll(validConst.inputSelector));
  const ButtonElement = document.querySelector(validConst.submitButtonSelector);

  toggleButtonState(inputList, ButtonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, ButtonElement);
    });
  });
};

const hasValidForm = (inputForm) => {
  const arrElement = Array.from(inputForm);
  let active = false;

  arrElement.forEach((elem) => {
    if (elem.classList.contains('popup__input')) {
      active = true;
    }
  });
  return active;
};

const enableValidation = (validConst) => {
  const formList = Array.from(document.querySelectorAll(validConst.formSelector));

  formList.forEach((inputForm) => {
    if (hasValidForm(inputForm)) {
      inputForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(inputForm);
    }
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
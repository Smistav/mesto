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
// Проверка inputForm на то что она именно form так как есть input
const isForm = (inputForm, validConst) => {
  const arrElement = Array.from(inputForm);
  const element = validConst.inputSelector.slice(1);
  return arrElement.some((elem) => {
    return elem.classList.contains(element);
  });
};

const enableValidation = (validConst) => {
  const formList = Array.from(document.querySelectorAll(validConst.formSelector));
  formList.forEach((inputForm) => {
    if (isForm(inputForm, validConst)) {
      inputForm.addEventListener('submit', (evt) => evt.preventDefault());
      setEventListeners(inputForm, validConst);
    }
  });
}

enableValidation({
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
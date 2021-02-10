export {
  initialCards, constValid, ESCAPE, cardSection,
  popupEditSelector, popupAddSelector, popupImgSelector, popupConfirmSelector,
  editButton, addButton, cardTemplate, profileName, profilePersonDo,
  inputName, inputJob
}

const constValid = {
  formSelector: '.popup__container_form_isform',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// Key close popup
const ESCAPE = 'Escape';
// Template card
const cardTemplate = '#elem';
// Section to enter cards
const cardSection = '.elements';
// Popup Selectors
const popupEditSelector = '.popup_form_edit';
const popupAddSelector = '.popup_form_add';
const popupImgSelector = '.popup_form_img';
const popupConfirmSelector = '.popup_form_confirm';
// Edit Profile Button
const editButton = '.profile__edit-button';
// Add Card Button
const addButton = '.profile__add-button';
// User name and job
const profileName = '.profile__name';
const profilePersonDo = '.profile__person-do';
// input userName and UserJob
const inputName = '.popup__input[name="name"]';
const inputJob = '.popup__input[name="about"]';
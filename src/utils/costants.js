export {
  constValid, ESCAPE, cardSection,
  popupEditSelector, popupAddSelector, popupImgSelector, popupConfirmSelector,
  editButton, addButton, cardTemplate, profileNameSelector, profileAboutSelector,
  inputName, inputJob, editAvatar, popupAvatarSelector
}

const constValid = {
  formSelector: '.popup__container_form_isform',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

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
const popupAvatarSelector = '.popup_form_avatar';
// Edit Profile Button
const editButton = '.profile__edit-button';
// Add Card Button
const addButton = '.profile__add-button';
// User name and job
const profileNameSelector = '.profile__name';
const profileAboutSelector = '.profile__person-do';
// input userName and UserJob
const inputName = '.popup__input[name="name"]';
const inputJob = '.popup__input[name="about"]';
// edit Avatar
const editAvatar = '.profile__avatar';
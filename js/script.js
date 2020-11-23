const handleEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const handlePopupClose = document.querySelector('.popup__close');
let inputPopupName = document.querySelector('.popup__input[name="name"');
let inputPopupJob = document.querySelector('.popup__input[name="job-do"]');
let profileName = document.querySelector('.profile__name');
let profilePersonDo = document.querySelector('.profile__person-do');
let formElement = document.querySelector('.popup__container');

function showPopup() {
  inputPopupName.value = profileName.textContent;
  inputPopupJob.value = profilePersonDo.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputPopupName.value;
  profilePersonDo.textContent = inputPopupJob.value;
  closePopup();
}
handleEditButton.addEventListener('click', showPopup);
handlePopupClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
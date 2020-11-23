const handleEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const handlePopupClose = document.querySelector('.popup__close');
const inputsPopup = document.querySelectorAll('.popup__input');
let profileName = document.querySelector('.profile__name');
let profilePersonDo = document.querySelector('.profile__person-do');

handleEditButton.addEventListener('click', showPopup);
function showPopup() {
  inputsPopup[0].value = profileName.textContent;
  inputsPopup[1].value = profilePersonDo.textContent;
  popup.classList.add('popup_opened');
}
handlePopupClose.addEventListener('click', closePopup);
function closePopup() {
  popup.classList.remove('popup_opened');
}

let formElement = document.querySelector('.popup__container');
formElement.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(evt) {

  evt.preventDefault();
  let nameInput = document.querySelectorAll('.popup__input');
  profileName.textContent = nameInput[0].value;
  profilePersonDo.textContent = nameInput[1].value;
  popup.classList.remove('popup_opened');
}

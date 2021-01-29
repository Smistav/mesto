import {
  initialCards, constValid, cardSection,
  popupEditSelector, popupAddSelector, popupImgSelector,
  editButton, addButton
} from '../components/costants.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
//import Popup from '../components/Popup.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'

//-----------
const handleEditButton = document.querySelector(editButton);
const handleAddButton = document.querySelector(addButton);
// Profile const
const profileName = document.querySelector('.profile__name');
const profilePersonDo = document.querySelector('.profile__person-do');
// PopupEdit inputs
const inputPopupEditName = document.querySelector('.popup__input[name="name"]');
const inputPopupEditJob = document.querySelector('.popup__input[name="job"]');
// PopupAdd inputs
const inputPopupAddPlace = document.querySelector('.popup__input[name="place"]');
const inputPopupAddlink = document.querySelector('.popup__input[name="link"]');

// Initialization PopupEdit
const popupEdit = new PopupWithForm({
  popupSelector: popupEditSelector,
  handleFormSubmit: (input) => {
    profileName.textContent = input.name;
    profilePersonDo.textContent = input.job;
  }
});
popupEdit.setEventListeners();
// Initialization PopupAdd
const popupAdd = new PopupWithForm({
  popupSelector: popupAddSelector,
  handleFormSubmit: () => {
    //addCard({
    //     name: inputPopupAddPlace.value,
    //     link: inputPopupAddlink.value
    //   }
    //   );
  }
});
popupAdd.setEventListeners();
// Initialization PopupImg
const popupImg = new PopupWithImage(popupImgSelector);
popupImg.setEventListeners();
// Initialization Card
const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card(cardItem, '#elem');
    const cardElement = card.generateCard();
    cardElement.querySelector('.elements__img').addEventListener('click', (evt) => popupImg.open(evt));
    cardList.addItem(cardElement);
  }
}, cardSection);
cardList.renderItems();

// Initialization FormValidation PopupEdit
const formEdit = new FormValidator(constValid, popupEditSelector);
formEdit.enableValidation();
// Initialization FormValidation PopupAdd
const formAdd = new FormValidator(constValid, popupAddSelector);
formAdd.enableValidation();

function showEditPopup() {
  inputPopupEditName.value = profileName.textContent;
  inputPopupEditJob.value = profilePersonDo.textContent;
  formEdit.resetValidation();
  popupEdit.open();
}

function showAddPopup() {
  //formAdd.reset();
  formAdd.resetValidation();
  popupAdd.open();
}

// listener editButton
handleEditButton.addEventListener('click', showEditPopup);
// listener addButton
handleAddButton.addEventListener('click', showAddPopup);
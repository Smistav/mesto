import {
  initialCards, constValid, cardSection,
  popupEditSelector, popupAddSelector, popupImgSelector,
  editButton, addButton, cardTemplate, profileName, profilePersonDo
} from '../utils/costants.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'

// button Edit and Add
const handleEditButton = document.querySelector(editButton);
const handleAddButton = document.querySelector(addButton);
// Initialization user
const user = new UserInfo(profileName, profilePersonDo);

// Initialization PopupEdit
const popupEdit = new PopupWithForm({
  popupSelector: popupEditSelector,
  handleFormSubmit: input => user.setUserInfo(input)
});
popupEdit.setEventListeners();

// Initialization PopupAdd
const popupAdd = new PopupWithForm({
  popupSelector: popupAddSelector,
  handleFormSubmit: (input) => {
    const card = new Card({
      card: input,
      handleCardClick: (evt) => popupImg.open(evt)
    }, cardTemplate);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
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
    const card = new Card({
      card: cardItem,
      handleCardClick: (evt) => popupImg.open(evt)
    }, cardTemplate);
    const cardElement = card.generateCard();
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
  user.getUserInfo();
  formEdit.resetValidation();
  popupEdit.open();
}

function showAddPopup() {
  formAdd.resetValidation();
  popupAdd.open();
}

// listener editButton
handleEditButton.addEventListener('click', showEditPopup);

// listener addButton
handleAddButton.addEventListener('click', showAddPopup);
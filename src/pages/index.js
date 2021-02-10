import '../pages/index.css';
import {
  initialCards, constValid, cardSection,
  popupEditSelector, popupAddSelector, popupImgSelector, popupConfirmSelector,
  editButton, addButton, cardTemplate, profileName, profilePersonDo,
  inputName, inputJob
} from '../utils/costants.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupConfirm from '../components/PopupConfirm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'

// button Edit and Add
const editButtonElement = document.querySelector(editButton);
const addButtonElement = document.querySelector(addButton);

const inputEditName = document.querySelector(inputName);
const inputEditJob = document.querySelector(inputJob);
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
      handleCardClick: (name, image) => {
        return popupImg.open(name, image);
      },
      handleCardClickTrash: (element) => {
        return popupConfirm.open(element);
      }
    }, cardTemplate);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
});
popupAdd.setEventListeners();

// Initialization PopupImg
const popupImg = new PopupWithImage(popupImgSelector);
popupImg.setEventListeners();

// Initialization PopupConfirm
const popupConfirm = new PopupConfirm(popupConfirmSelector);
popupConfirm.setEventListeners();

// Initialization Card
const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const card = new Card({
      card: cardItem,
      handleCardClick: (name, image) => {
        return popupImg.open(name, image);
      },
      handleCardClickTrash: (element) => {
        return popupConfirm.open(element);
      }
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
  inputEditName.value = user.getUserInfo().name;
  inputEditJob.value = user.getUserInfo().job;
  formEdit.resetValidation();
  popupEdit.open();
}

function showAddPopup() {
  formAdd.resetValidation();
  popupAdd.open();
}

// listener editButton
editButtonElement.addEventListener('click', showEditPopup);

// listener addButton
addButtonElement.addEventListener('click', showAddPopup);
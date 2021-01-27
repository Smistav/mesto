import { initialCards, constValid } from '../components/costants.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import Popup from '../components/Popup.js'
import PopupWithImage from '../components/PopupWithImage.js'

// Section to enter cards
const cardSection = '.elements';
// Popup Selectors
const popupEditSelector = '.popup_form_edit';
const popupAddSelector = '.popup_form_add';
const popupImgSelector = '.popup_form_img';
// Profile const
const profileName = document.querySelector('.profile__name');
const profilePersonDo = document.querySelector('.profile__person-do');

// Popup Edit const
const handleEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_form_edit');
const handlePopupEditClose = popupEdit.querySelector('.popup__close');
const inputPopupEditName = popupEdit.querySelector('.popup__input[name="name"]');
const inputPopupEditJob = popupEdit.querySelector('.popup__input[name="job"]');
const formElementEdit = popupEdit.querySelector('.popup__container');
// Popup Add const
const handleAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_form_add');
const handlePopupAddClose = popupAdd.querySelector('.popup__close');
const inputPopupAddPlace = popupAdd.querySelector('.popup__input[name="place"]');
const inputPopupAddlink = popupAdd.querySelector('.popup__input[name="link"]');
const formElementAdd = popupAdd.querySelector('.popup__container');
// Popup Img const
// const popupImg = document.querySelector('.popup_form_img');
// const handlePopupImgClose = popupImg.querySelector('.popup__close');
// const formElementImg = popupImg.querySelector('.popup__container');
// const popupImgclass = popupImg.querySelector('.popup__img');
// const popupImgHeading = popupImg.querySelector('.popup__heading');

//-----------
// функция добавления карточки и вешаем слушатели лайков и корзины
const popupImg = new PopupWithImage(popupImgSelector);
popupImg.setEventListeners();

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

// Инициализация валидации форм
const formEdit = new FormValidator(constValid, popupEdit);
formEdit.enableValidation();
const formAdd = new FormValidator(constValid, popupAdd);
formAdd.enableValidation();

// попапы
const popupEdit1 = new Popup(popupEditSelector);
popupEdit1.setEventListeners();
const popupAdd1 = new Popup(popupAddSelector);
popupAdd1.setEventListeners();


function showEditPopup() {
  inputPopupEditName.value = profileName.textContent;
  inputPopupEditJob.value = profilePersonDo.textContent;
  formEdit.resetValidation();
  popupEdit1.open();
}

function showAddPopup() {
  formElementAdd.reset();
  formAdd.resetValidation();
  popupAdd1.open();
}

// function showPopupImg(event) {
//   const targetItem = event.target.closest('.elements__img');

//   popupImgclass.src = targetItem.src;
//   popupImgclass.alt = targetItem.alt;
//   popupImgHeading.textContent = targetItem.alt;
//   popupImg1.open();
// }

function submitFormHandlerEdit(evt) {
  const button = popupEdit.querySelector(defaultValues.submitButtonSelector);

  evt.preventDefault();
  profileName.textContent = inputPopupEditName.value;
  profilePersonDo.textContent = inputPopupEditJob.value;
  popupEdit1.close();
}

function submitFormHandlerAdd(evt) {
  evt.preventDefault();
  addCard({
    name: inputPopupAddPlace.value,
    link: inputPopupAddlink.value
  }
  );
  popupAdd1.close();
}

// function closePopupImg() {
//   popupImg1.close();
// }

// function closeEscPopup(evt) {
//   const activePopup = document.querySelector('.popup_opened');

//   if (evt.key === ESCAPE) closePopup(activePopup);
// }

// function closeClickOverlay(evt) {
//   const activePopup = document.querySelector('.popup_opened');

//   if (evt.target === activePopup) closePopup(activePopup);
// }

// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeEscPopup);
//   document.addEventListener('click', closeClickOverlay);
// }

// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeEscPopup);
//   document.removeEventListener('click', closeClickOverlay);
// }

// слушатели PopupEdit
handleEditButton.addEventListener('click', showEditPopup);
//handlePopupEditClose.addEventListener('click', () => { closePopup(popupEdit) });
formElementEdit.addEventListener('submit', submitFormHandlerEdit);
// слушатели PopupAdd
handleAddButton.addEventListener('click', showAddPopup);
//handlePopupAddClose.addEventListener('click', () => { closePopup(popupAdd) });
formElementAdd.addEventListener('submit', submitFormHandlerAdd);
// слушатели PopupImg
//handlePopupImgClose.addEventListener('click', () => { closePopup(popupImg) });
//formElementImg.addEventListener('submit', closePopupImg);
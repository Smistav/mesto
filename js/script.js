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
// Profile
const profileName = document.querySelector('.profile__name');
const profilePersonDo = document.querySelector('.profile__person-do');
let newCardboolean = false;
// Popup Edit
const handleEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const handlePopupEditClose = document.querySelector('.popup-edit__close');
let inputPopupEditName = document.querySelector('.popup-edit__input[name="name"]');
let inputPopupEditJob = document.querySelector('.popup-edit__input[name="job"]');
const formElementEdit = document.querySelector('.popup-edit__container');

// Popup Add
const handleAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const handlePopupAddClose = document.querySelector('.popup-add__close');
let inputPopupAddPlace = document.querySelector('.popup-add__input[name="place"]');
let inputPopupAddlink = document.querySelector('.popup-add__input[name="link"]');
const formElementAdd = document.querySelector('.popup-add__container');

// Popup Img

const popupImg = document.querySelector('.popup-img');
const handlePopupImgClose = document.querySelector('.popup-img__close');
const formElementImg = document.querySelector('.popup-img__container');

// функция добавления карточки и вешаем слушатель лайков и корзины на вновь прибывших
function addItem(item) {
  const cardTemplate = document.querySelector('#elem').content;
  const elementsOnlineItem = document.querySelector('.elements');
  const elementsItem = cardTemplate.cloneNode(true);
  const handleElementHeart = elementsItem.querySelector('.elements__heart-button');
  const handleElementTrash = elementsItem.querySelector('.elements__trash-button');
  const handleElementImg = elementsItem.querySelector('.elements__img');

  elementsItem.querySelector('.elements__img').src = item.link;
  elementsItem.querySelector('.elements__heading').textContent = item.name;
  elementsItem.querySelector('.elements__img').alt = item.name;
  if (newCardboolean) { elementsOnlineItem.prepend(elementsItem); }
  else { elementsOnlineItem.append(elementsItem); }

  handleElementHeart.addEventListener('click', addRemoveLike);
  handleElementTrash.addEventListener('click', removeElement);
  handleElementImg.addEventListener('click', showPopupImg);
}

// Вывод дефолтного массива
initialCards.forEach(item => addItem(item));

function removeElement(event) {
  let targetItem = event.target;
  targetItem = targetItem.closest('.elements__item')
  targetItem.remove();
};

function addRemoveLike(event) {
  let targetItem = event.target;
  targetItem = targetItem.closest('.elements__heart-button')
  targetItem.classList.toggle('elements__heart-button_active');
};

function showPopupEdit() {
  inputPopupEditName.value = profileName.textContent;
  inputPopupEditJob.value = profilePersonDo.textContent;
  popupEdit.classList.add('popup-edit_opened');
}
function closePopupEdit() {
  popupEdit.classList.remove('popup-edit_opened');
}
function showPopupAdd() {
  inputPopupAddPlace.value = '';
  inputPopupAddlink.value = '';
  popupAdd.classList.add('popup-add_opened');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup-add_opened');
}

function showPopupImg(event) {
  let targetItem = event.target;
  const popupImgclass = document.querySelector('.popup-img__img');
  const popupImgHeading = document.querySelector('.popup-img__heading');

  targetItem = targetItem.closest('.elements__img');
  popupImgclass.src = targetItem.src;
  popupImgclass.alt = targetItem.alt;
  popupImgHeading.textContent = targetItem.alt;
  popupImg.classList.add('popup-img_opened');
}

function closePopupImg() {
  popupImg.classList.remove('popup-img_opened');
}

function submitFormHandlerEdit(evt) {
  evt.preventDefault();
  profileName.textContent = inputPopupEditName.value;
  profilePersonDo.textContent = inputPopupEditJob.value;
  closePopupEdit();
}

function submitFormHandlerAdd(evt) {
  evt.preventDefault();
  let newCard = [{ name: '', link: '' }];
  if (inputPopupAddPlace.value !== '' && inputPopupAddlink.value !== '') {
    newCard.name = inputPopupAddPlace.value;
    newCard.link = inputPopupAddlink.value;
    newCardboolean = true;
    addItem(newCard);
  }
  closePopupAdd();
}

function submitFormHandlerImg(evt) {
  evt.preventDefault();
  closePopupImg();
}
// слушатели PopupEdit
handleEditButton.addEventListener('click', showPopupEdit);
handlePopupEditClose.addEventListener('click', closePopupEdit);
formElementEdit.addEventListener('submit', submitFormHandlerEdit);
// слушатели PopupAdd
handleAddButton.addEventListener('click', showPopupAdd);
handlePopupAddClose.addEventListener('click', closePopupAdd);
formElementAdd.addEventListener('submit', submitFormHandlerAdd);
// слушатели PopupImg
handlePopupImgClose.addEventListener('click', closePopupImg);
formElementImg.addEventListener('submit', submitFormHandlerImg);

// Key close popup
const ESCAPE = 'Escape';
// Profile const
const profileName = document.querySelector('.profile__name');
const profilePersonDo = document.querySelector('.profile__person-do');
// elements const
const cardTemplate = document.querySelector('#elem').content;
const elementsOnlineItem = document.querySelector('.elements');
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
const popupImg = document.querySelector('.popup_form_img');
const handlePopupImgClose = popupImg.querySelector('.popup__close');
const formElementImg = popupImg.querySelector('.popup__container');
const popupImgclass = popupImg.querySelector('.popup__img');
const popupImgHeading = popupImg.querySelector('.popup__heading');

//-----------
// функция добавления карточки и вешаем слушатель лайков и корзины на вновь прибывших
function addCard(newCardboolean, item) {
  const card = createCard();
  const elementImg = card.querySelector('.elements__img');
  elementImg.src = item.link;
  card.querySelector('.elements__heading').textContent = item.name;
  elementImg.alt = item.name;
  if (newCardboolean) { elementsOnlineItem.prepend(card); }
  else { elementsOnlineItem.append(card); }
}

function createCard() {
  const elementsItem = cardTemplate.cloneNode(true);
  const handleElementHeart = elementsItem.querySelector('.elements__heart-button');
  const handleElementTrash = elementsItem.querySelector('.elements__trash-button');
  const handleElementImg = elementsItem.querySelector('.elements__img');

  handleElementHeart.addEventListener('click', addRemoveLike);
  handleElementTrash.addEventListener('click', removeElement);
  handleElementImg.addEventListener('click', showPopupImg);
  return elementsItem;
}
// Вывод дефолтного массива
initialCards.forEach(item => addCard(false, item));

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

function showEditPopup() {
  inputPopupEditName.value = profileName.textContent;
  inputPopupEditJob.value = profilePersonDo.textContent;
  openPopup(popupEdit);
}

function showAddPopup() {
  inputPopupAddPlace.value = '';
  inputPopupAddlink.value = '';
  openPopup(popupAdd);
}

function showPopupImg(event) {
  let targetItem = event.target;

  targetItem = targetItem.closest('.elements__img');
  popupImgclass.src = targetItem.src;
  popupImgclass.alt = targetItem.alt;
  popupImgHeading.textContent = targetItem.alt;
  openPopup(popupImg);
}

function submitFormHandlerEdit(evt) {
  const button = popupEdit.querySelector('.popup__button');

  evt.preventDefault();
  profileName.textContent = inputPopupEditName.value;
  profilePersonDo.textContent = inputPopupEditJob.value;
  closePopup(popupEdit);
  button.classList.add('popup__button_disabled');
  button.disabled = true;
}

function submitFormHandlerAdd(evt) {
  const newCard = [{ name: '', link: '' }];
  const button = popupAdd.querySelector('.popup__button');

  evt.preventDefault();
  newCard.name = inputPopupAddPlace.value;
  newCard.link = inputPopupAddlink.value;
  addCard(true, newCard);
  closePopup(popupAdd);
  button.classList.add('popup__button_disabled');
  button.disabled = true;
}

function submitFormHandlerImg(evt) {
  evt.preventDefault();
  closePopup(popupImg);
}

function closeEscPopup(evt) {
  const activePopup = document.querySelector('.popup_opened');

  if (evt.key === ESCAPE) closePopup(activePopup);
}

function closeClickOverlay(evt) {
  const activePopup = document.querySelector('.popup_opened');

  if (evt.target === activePopup) closePopup(activePopup);
}

function clearError(popup) {
  const visibleError = popup.querySelectorAll('.popup__error');
  const visibleErrorInput = popup.querySelectorAll('.popup__input');

  visibleError.forEach((elem) => elem.classList.remove('popup__error_visible'));
  visibleErrorInput.forEach((elem) => elem.classList.remove('popup__input_type_error'));
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEscPopup);
  document.addEventListener('click', closeClickOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEscPopup);
  document.removeEventListener('click', closeClickOverlay);
  clearError(popup);
}

// слушатели PopupEdit
handleEditButton.addEventListener('click', showEditPopup);
handlePopupEditClose.addEventListener('click', () => { closePopup(popupEdit) });
formElementEdit.addEventListener('submit', submitFormHandlerEdit);
// слушатели PopupAdd
handleAddButton.addEventListener('click', showAddPopup);
handlePopupAddClose.addEventListener('click', () => { closePopup(popupAdd) });
formElementAdd.addEventListener('submit', submitFormHandlerAdd);
// слушатели PopupImg
handlePopupImgClose.addEventListener('click', () => { closePopup(popupImg) });
formElementImg.addEventListener('submit', submitFormHandlerImg);
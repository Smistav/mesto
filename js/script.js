const initialCards = [
  {
    name: 'Карачаевск',
    link: 'images/karachaevsk.jpg'
  },
  {
    name: 'Эльбрус',
    link: 'images/elbrus.jpg'
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
const handleEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
let handlePopupClose = document.querySelector('.popup__close');
let inputPopupName = document.querySelector('.popup__input[name="name"');
let inputPopupJob = document.querySelector('.popup__input[name="job"]');
let profileName = document.querySelector('.profile__name');
let headerPopup = document.querySelector('.popup__heading');
let profilePersonDo = document.querySelector('.profile__person-do');
let formElement = document.querySelector('.popup__container');
const handleAddCardButton = document.querySelector('.profile__add-button');
const headerNewCardPopup = 'Новое место';
const headerEditPopup = 'Редактировать профиль';

const cardTemplate = document.querySelector('#elem').content;
const elementsOnlineItem = document.querySelector('.elements');


// функция добавления карточки и вешаем слушатель лайков на вновь прибывших
function addItem(item) {
  const elementsItem = cardTemplate.cloneNode(true);
  const handleElementHeart = elementsItem.querySelector('.elements__heart-button');
  const handleElementTrash = elementsItem.querySelector('.elements__trash-button');
  elementsItem.querySelector('.elements__img').src = item.link;
  elementsItem.querySelector('.elements__heading').textContent = item.name;
  elementsItem.querySelector('.elements__img').alt = item.name;
  elementsOnlineItem.prepend(elementsItem);
  handleElementHeart.addEventListener('click', addRemoveLike);
  handleElementTrash.addEventListener('click', removeElement);
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

function showEditPopup() {
  headerPopup.textContent = headerEditPopup;
  inputPopupName.value = profileName.textContent;
  inputPopupJob.value = profilePersonDo.textContent;
  popup.classList.add('popup_opened');
}

function showAddCardPopup() {
  inputPopupName.value = '';
  inputPopupJob.value = '';
  inputPopupName.placeholder = 'Название';
  inputPopupJob.placeholder = 'Ссылка на картинку';
  headerPopup.textContent = headerNewCardPopup;
  popup.classList.add('popup_opened');
  AddRemoveClassAddPopup('add');

}

function AddRemoveClassAddPopup(key) {
  if (key === 'add') {
    formElement.classList.add('popup__container_add_width');
    headerPopup.classList.add('popup__heading_add_margin');
    handlePopupClose.classList.add('popup__close_add_position');
    inputPopupJob.classList.add('popup__input_add_margin');
  }
  if (key === 'remove') {
    formElement.classList.remove('popup__container_add_width');
    headerPopup.classList.remove('popup__heading_add_margin');
    handlePopupClose.classList.remove('popup__close_add_position');
    inputPopupJob.classList.remove('popup__input_add_margin');
  }
}
function closePopup() {
  popup.classList.remove('popup_opened');
  AddRemoveClassAddPopup('remove');
}

function addEdit() {
  profileName.textContent = inputPopupName.value;
  profilePersonDo.textContent = inputPopupJob.value;
}
function addNewItem() {
  let newCard = [{ name: '', link: '' }];

  if (inputPopupName.value !== '' && inputPopupName.value !== '') {
    newCard.name = inputPopupName.value;
    newCard.link = inputPopupJob.value;
    addItem(newCard);
  }
}

function submitFormHandler(evt) {
  evt.preventDefault();
  if (headerPopup.textContent === headerNewCardPopup) {
    addNewItem();
  } if (headerPopup.textContent === headerEditPopup) {
    addEdit();
  }
  closePopup();
}
handleEditButton.addEventListener('click', showEditPopup);
handlePopupClose.addEventListener('click', closePopup);
handleAddCardButton.addEventListener('click', showAddCardPopup);
formElement.addEventListener('submit', submitFormHandler);
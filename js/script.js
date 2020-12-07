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
const handlePopupClose = document.querySelector('.popup__close');
let inputPopupNameF = document.querySelector('.popup__input[name="namefirst"');
let inputPopupNameS = document.querySelector('.popup__input[name="namesecond"]');
let profileName = document.querySelector('.profile__name');
let headerPopup = document.querySelector('.popup__heading');
let popupButton = document.querySelector('.popup__button');
let profilePersonDo = document.querySelector('.profile__person-do');
const formElement = document.querySelector('.popup__container');
const handleAddCardButton = document.querySelector('.profile__add-button');
const headerNewCardPopup = 'Новое место';
const headerEditPopup = 'Редактировать профиль';
const cardTemplate = document.querySelector('#elem').content;
const elementsOnlineItem = document.querySelector('.elements');

// функция добавления карточки
function addItem(item) {
  const elementsItem = cardTemplate.cloneNode(true);

  elementsItem.querySelector('.elements__img').src = item.link;
  elementsItem.querySelector('.elements__heading').textContent = item.name;
  elementsItem.querySelector('.elements__img').alt = item.name;
  elementsOnlineItem.prepend(elementsItem);
}

// Вывод дефолтного массива
initialCards.forEach(item => addItem(item));


function showEditPopup() {
  headerPopup.textContent = headerEditPopup;
  inputPopupNameF.value = profileName.textContent;
  inputPopupNameS.value = profilePersonDo.textContent;
  popup.classList.add('popup_opened');
}

function showAddCardPopup() {
  inputPopupNameF.value = '';
  inputPopupNameS.value = '';
  inputPopupNameF.placeholder = 'Название';
  inputPopupNameS.placeholder = 'Ссылка на картинку';
  headerPopup.textContent = headerNewCardPopup;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function submitFormHandler(evt) {
  evt.preventDefault();
  let newCard = [{ name: '', link: '' }];

  if (headerPopup.textContent === headerEditPopup) {
    profileName.textContent = inputPopupNameF.value;
    profilePersonDo.textContent = inputPopupNameS.value;
  }
  if (headerPopup.textContent === headerNewCardPopup) {
    if (inputPopupNameF.value !== '' && inputPopupNameS.value !== '') {
      newCard.name = inputPopupNameF.value;
      newCard.link = inputPopupNameS.value;
      addItem(newCard);
    }
  }
  closePopup();
}
handleEditButton.addEventListener('click', showEditPopup);
handlePopupClose.addEventListener('click', closePopup);
handleAddCardButton.addEventListener('click', showAddCardPopup);
formElement.addEventListener('submit', submitFormHandler);
const InitialCards = [
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
const HandleEditButton = document.querySelector('.profile__edit-button');
const Popup = document.querySelector('.popup');
const HandlePopupClose = document.querySelector('.popup__close');
let InputPopupNameF = document.querySelector('.popup__input[name="namefirst"');
let InputPopupNameS = document.querySelector('.popup__input[name="namesecond"]');
let ProfileName = document.querySelector('.profile__name');
let HeaderPopup = document.querySelector('.popup__heading');
let PopupButton = document.querySelector('.popup__button');
let ProfilePersonDo = document.querySelector('.profile__person-do');
const FormElement = document.querySelector('.popup__container');
const HandleAddCardButton = document.querySelector('.profile__add-button');
const HeaderNewCardPopup = 'Новое место';
const HeaderEditPopup = 'Редактировать профиль';
const CardTemplate = document.querySelector('#elem').content;
const ElementsOnlineItem = document.querySelector('.elements');

// функция добавления карточки
function AddItem(item) {
  const ElementsItem = CardTemplate.cloneNode(true);

  ElementsItem.querySelector('.elements__img').src = item.link;
  ElementsItem.querySelector('.elements__heading').textContent = item.name;
  ElementsOnlineItem.prepend(ElementsItem);
}

// Вывод дефолтного массива
InitialCards.forEach(item => AddItem(item));



function ShowEditPopup() {
  HeaderPopup.textContent = HeaderEditPopup;
  InputPopupNameF.value = ProfileName.textContent;
  InputPopupNameS.value = ProfilePersonDo.textContent;
  Popup.classList.add('popup_opened');
}

function ShowAddCardPopup() {
  InputPopupNameF.value = '';
  InputPopupNameS.value = '';
  InputPopupNameF.placeholder = 'Название';
  InputPopupNameS.placeholder = 'Ссылка на картинку';
  HeaderPopup.textContent = HeaderNewCardPopup;
  Popup.classList.add('popup_opened');
}

function ClosePopup() {
  Popup.classList.remove('popup_opened');
}

function SubmitFormHandler(evt) {
  evt.preventDefault();
  let NewCard = [{ name: '', link: '' }];

  if (HeaderPopup.textContent === HeaderEditPopup) {
    ProfileName.textContent = InputPopupNameF.value;
    ProfilePersonDo.textContent = InputPopupNameS.value;
  }
  if (HeaderPopup.textContent === HeaderNewCardPopup) {
    if (InputPopupNameF.value !== '' && InputPopupNameS.value !== '') {
      NewCard.name = InputPopupNameF.value;
      NewCard.link = InputPopupNameS.value;
      AddItem(NewCard);
    }
  }
  ClosePopup();
}
HandleEditButton.addEventListener('click', ShowEditPopup);
HandlePopupClose.addEventListener('click', ClosePopup);
HandleAddCardButton.addEventListener('click', ShowAddCardPopup);
FormElement.addEventListener('submit', SubmitFormHandler);
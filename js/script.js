const InitialCards = [
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
const HandleEditButton = document.querySelector('.profile__edit-button');
const Popup = document.querySelector('.popup');
const HandlePopupClose = document.querySelector('.popup__close');
let InputPopupName = document.querySelector('.popup__input[name="name"');
let InputPopupJob = document.querySelector('.popup__input[name="job-do"]');
let ProfileName = document.querySelector('.profile__name');
let ProfilePersonDo = document.querySelector('.profile__person-do');
let FormElement = document.querySelector('.popup__container');

const CardTemplate = document.querySelector('#elem').content;
const ElementsOnlineItem = document.querySelector('.elements');

// функция добавления карточки
function AddItem(item) {
  const ElementsItem = CardTemplate.cloneNode(true);

  ElementsItem.querySelector('.elements__img').src = item.link;
  ElementsItem.querySelector('.elements__heading').textContent = item.name;
  ElementsOnlineItem.append(ElementsItem);
}

// Вывод дефолтного массива
InitialCards.forEach(item => AddItem(item));



function ShowPopup() {
  InputPopupName.value = ProfileName.textContent;
  InputPopupJob.value = ProfilePersonDo.textContent;
  Popup.classList.add('popup_opened');
}

function ClosePopup() {
  Popup.classList.remove('popup_opened');
}

function FormSubmitHandler(evt) {
  evt.preventDefault();
  ProfileName.textContent = InputPopupName.value;
  ProfilePersonDo.textContent = InputPopupJob.value;
  ClosePopup();
}
HandleEditButton.addEventListener('click', ShowPopup);
HandlePopupClose.addEventListener('click', ClosePopup);
FormElement.addEventListener('submit', FormSubmitHandler);
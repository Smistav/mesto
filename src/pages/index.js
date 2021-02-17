import '../pages/index.css';
import {
  constValid, cardSection,
  popupEditSelector, popupAddSelector, popupImgSelector, popupConfirmSelector,
  editButton, addButton, cardTemplate, profileNameSelector, profileAboutSelector,
  inputName, inputJob, editAvatar, popupAvatarSelector, profileAvatarSelector
} from '../utils/costants.js'
import Api from '../components/Api.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupConfirm from '../components/PopupConfirm.js'

// button Edit and Add
const editButtonElement = document.querySelector(editButton);
const addButtonElement = document.querySelector(addButton);
const editAvatarElement = document.querySelector(editAvatar);

const inputEditName = document.querySelector(inputName);
const inputEditJob = document.querySelector(inputJob);
let cardList;

// Init Api
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20',
  headers: {
    authorization: '8b4bf4c7-50a5-4055-8a00-6f47d910a5d3',
    'Content-Type': 'application/json'
  }
}
);

// Init user
const user = new UserInfo(profileNameSelector, profileAboutSelector, profileAvatarSelector);
api.getUserInfo()
  .then((userInfo) => {
    user.setUserInfo(userInfo);
    user.setUserAvatar(userInfo.avatar);
  })
  .catch((err) => {
    console.log(err);
  });

// Init PopupEdit
const popupEdit = new PopupWithForm({
  popupSelector: popupEditSelector,
  handleFormSubmit: input => {
    popupEdit.renderLoading(true);
    api.setUserInfo(input)
      .then((userInfo) => {
        user.setUserInfo(userInfo);
        popupEdit.renderLoading(false);
        popupEdit.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
popupEdit.setEventListeners();

// Init PopupAdd
const popupAdd = new PopupWithForm({
  popupSelector: popupAddSelector,
  handleFormSubmit: (input) => {
    popupAdd.renderLoading(true);
    api.addNewCard(input)
      .then(res => {
        const cardElement = createCard(res).generateCard();
        cardList.addItem(cardElement);
        popupAdd.renderLoading(false);
        popupAdd.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
popupAdd.setEventListeners();

// Init PopupImg
const popupImg = new PopupWithImage(popupImgSelector);
popupImg.setEventListeners();

// Init PopupConfirm
const popupConfirm = new PopupConfirm({
  popupSelector: popupConfirmSelector,
  handleClickButton: (element, id) => {
    popupConfirm.renderLoading(true);
    api.deleteCard(id)
      .then(() => {
        element.remove();
        popupConfirm.renderLoading(false);
        popupConfirm.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
popupConfirm.setEventListeners();

// Init popupAvatar
const popupAvatar = new PopupWithForm({
  popupSelector: popupAvatarSelector,
  handleFormSubmit: (avatar) => {
    popupAvatar.renderLoading(true);
    api.setUserAvatar(avatar.link)
      .then(() => {
        user.setUserAvatar(avatar.link);
        popupAvatar.renderLoading(false);
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
popupAvatar.setEventListeners();

// Init Card
api.getInitialCards()
  .then((cards) => {
    cardList = new Section({
      items: cards,
      renderer: (cardItem) => {
        const cardElement = createCard(cardItem).generateCard();
        cardList.addItem(cardElement);
      }
    }, cardSection);
    cardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

// Init FormValidation PopupEdit
const formEdit = new FormValidator(constValid, popupEditSelector);
formEdit.enableValidation();

// Init FormValidation PopupAdd
const formAdd = new FormValidator(constValid, popupAddSelector);
formAdd.enableValidation();

// Init FormValidation PopupAvatar
const formAvatar = new FormValidator(constValid, popupAvatarSelector);
formAvatar.enableValidation();

function createCard(cardItem) {
  const card = new Card({
    card: cardItem,
    handleCardClick: (name, image) => {
      return popupImg.open(name, image);
    },
    handleCardClickTrash: (element) => {
      return popupConfirm.open(element, cardItem);
    },
    handleCardClickHeart: () => {
      if (card.isLike()) {
        api.removeLike(cardItem._id)
          .then(res => card.removeLike(res.likes))
          .catch(err => console.log(err))
      } else {
        api.addLike(cardItem._id)
          .then(res => card.addLike(res.likes))
          .catch(err => console.log(err))
      };
    }
  }, cardTemplate, user);
  return card
}

function showEditPopup() {
  inputEditName.value = user.getUserInfo().name;
  inputEditJob.value = user.getUserInfo().about;
  formEdit.resetValidation();
  popupEdit.open();
}

function showAddPopup() {
  formAdd.resetValidation();
  popupAdd.open();
}

function showAvatarPopup() {
  formAvatar.resetValidation();
  popupAvatar.open();
}
// listener editButton
editButtonElement.addEventListener('click', showEditPopup);

// listener addButton
addButtonElement.addEventListener('click', showAddPopup);

// listener editAvatar
editAvatarElement.addEventListener('click', showAvatarPopup);
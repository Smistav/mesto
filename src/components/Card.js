export default class Card {
  constructor({ card, handleCardClick, handleCardClickTrash }, cardSelector, user) {
    this._name = card.name;
    this._image = card.link;
    this._counterLikes = card.likes;
    this._cardOwner = card.owner;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardClickTrash = handleCardClickTrash;
    this._user = user;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__item')
      .cloneNode(true);

    return cardElement;
  }
  _handleElementHeart() {
    this._element.querySelector('.elements__heart-button').classList.toggle('elements__heart-button_active');
  }

  _setEventListeners() {
    this._element.querySelector('.elements__heart-button').addEventListener('click', () => {
      this._handleElementHeart()
    });
    if (this._checkOwnerCard) this._element.querySelector('.elements__trash-button').addEventListener('click', () => {
      this._handleCardClickTrash(this._element)
    });
    this._element.querySelector('.elements__img').addEventListener('click', () => {
      this._handleCardClick(this._name, this._image)
    });
  }

  _checkOwnerCard() {
    if ((!this._cardOwner) || (this._cardOwner._id === this._user._id)) {
      this._element.querySelector('.elements__trash-button').classList.add('elements__trash-button_active');
    }
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._checkOwnerCard();
    const imageElement = this._element.querySelector('.elements__img');
    imageElement.src = this._image;
    imageElement.alt = this._name;
    this._element.querySelector('.elements__heading').textContent = this._name;
    if (this._counterLikes) {
      this._element.querySelector('.elements__heart-count').textContent = this._counterLikes.length;
    }
    return this._element;
  }
}

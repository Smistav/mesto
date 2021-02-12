export default class Card {
  constructor({ card, handleCardClick, handleCardClickTrash }, cardSelector) {
    this._name = card.name;
    this._image = card.link;
    this._counterLikes = card.likes.length;
    this._cardOwnerId = card.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardClickTrash = handleCardClickTrash;
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
  // _handleElementTrash() {
  //   this._element.remove();
  // }

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
    if (this._cardOwnerId === 'ec24081f201c7a01d554a766') {
      this._element.querySelector('.elements__trash-button').classList.add('elements__trash-button_active');

      return
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
    this._element.querySelector('.elements__heart-count').textContent = this._counterLikes;
    return this._element;
  }
}

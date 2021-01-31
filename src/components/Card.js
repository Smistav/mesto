export default class Card {
  constructor({ card, handleCardClick }, cardSelector) {
    this._name = card.name;
    this._image = card.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
  _handleElementTrash() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element.querySelector('.elements__heart-button').addEventListener('click', () => {
      this._handleElementHeart()
    });
    this._element.querySelector('.elements__trash-button').addEventListener('click', () => {
      this._handleElementTrash()
    });
    this._element.querySelector('.elements__img').addEventListener('click', () => {
      this._handleCardClick(this._name, this._image)
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const imageElement = this._element.querySelector('.elements__img');
    imageElement.src = this._image;
    imageElement.alt = this._name;
    this._element.querySelector('.elements__heading').textContent = this._name;

    return this._element;
  }
}

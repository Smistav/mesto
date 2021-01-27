export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
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
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.elements__img').src = this._image;
    this._element.querySelector('.elements__img').alt = this._name;
    this._element.querySelector('.elements__heading').textContent = this._name;

    return this._element;
  }
}

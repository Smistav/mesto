export default class Card {
  constructor({ card, handleCardClick, handleCardClickTrash, handleCardClickHeart }, cardSelector, user) {
    this._name = card.name;
    this._image = card.link;
    this._counterLikes = card.likes.length;
    this._cardLikes = card.likes;
    this._cardOwnerId = card.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardClickTrash = handleCardClickTrash;
    this._handleCardClickHeart = handleCardClickHeart;
    this._userId = user._id;
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

  _setEventListeners() {
    this._element.querySelector('.elements__heart-button').addEventListener('click', () => {
      this._handleCardClickHeart()
    });
    if (this._checkOwnerCard) this._element.querySelector('.elements__trash-button').addEventListener('click', () => {
      this._handleCardClickTrash(this._element)
    });
    this._element.querySelector('.elements__img').addEventListener('click', () => {
      this._handleCardClick(this._name, this._image)
    });
  }

  _checkOwnerCard() {
    if (this._cardOwnerId === this._userId) {
      this._element.querySelector('.elements__trash-button').classList.add('elements__trash-button_active');
    }
  }
  isLike() {
    return this._cardLikes.some((item) => item._id === this._userId);
  }

  addLike(likes) {
    this._elementLike.classList.add('elements__heart-button_active');
    this._cardLikes = likes;
    this._elementCounterLikes.textContent = likes.length;
  }
  removeLike(likes) {
    this._elementLike.classList.remove('elements__heart-button_active');
    this._cardLikes = likes;
    this._elementCounterLikes.textContent = likes.length;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._checkOwnerCard();
    this._elementLike = this._element.querySelector('.elements__heart-button');
    if (this.isLike()) { this._elementLike.classList.add('elements__heart-button_active'); }
    this._elementCounterLikes = this._element.querySelector('.elements__heart-count');
    const imageElement = this._element.querySelector('.elements__img');
    imageElement.src = this._image;
    imageElement.alt = this._name;
    this._element.querySelector('.elements__heading').textContent = this._name;
    this._elementCounterLikes.textContent = this._counterLikes;
    return this._element;
  }
}

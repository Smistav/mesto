export default class Section {
  constructor({ items, renderer }, cardContainerSelector) {
    this._initialCards = items;
    this._renderer = renderer;
    this._container = document.querySelector(cardContainerSelector);
  }

  renderItems() {
    this._initialCards.reverse().forEach(item => this._renderer(item));
  }

  addItem(card) {
    this._container.prepend(card);
  }
}
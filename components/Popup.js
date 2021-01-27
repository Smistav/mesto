export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }
  _handleEscClose(evt) {
    console.log(evt);
    if (evt.key === 'Escape') this.closePopup(this._popupSelector);
  }
  setEventListeners() {
    const buttonClosePopup = this._popupSelector.querySelector('.popup__close');
    buttonClosePopup.addEventListener('click', () => this.closePopup());
  }
  openPopup() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', () => this._handleEscClose(this));
    //document.addEventListener('click', closeClickOverlay);
  }
  closePopup() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', () => this._handleEscClose());
    //document.removeEventListener('click', closeClickOverlay);
  }
}
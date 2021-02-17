import { ESCAPE } from '../utils/costants.js'
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._escHandleBind = this._handleEscClose.bind(this);
    this._overlayHandleBind = this._handleOverlayClose.bind(this);
    this._buttonPopup = this._popup.querySelector('.popup__button');
  }
  _handleEscClose(evt) {
    if (evt.key === ESCAPE) this.close();
  }
  _handleOverlayClose(evt) {
    if (evt.target === this._popup) this.close();
  }
  setEventListeners() {
    const buttonClosePopup = this._popup.querySelector('.popup__close');
    buttonClosePopup.addEventListener('click', () => this.close());
  }
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._escHandleBind);
    document.addEventListener('click', this._overlayHandleBind);
  }
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._escHandleBind);
    document.removeEventListener('click', this._overlayHandleBind);
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._buttonPopup.textContent = 'Сохранение...';
    }
    else {
      this._buttonPopup.textContent = 'Сохранить';
    }
  }
}
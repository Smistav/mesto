import { ESCAPE } from '../components/costants.js'
export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._escHandleBind = this._handleEscClose.bind(this);
    this._overlayHandleBind = this._handleOverlayClose.bind(this);
  }
  _handleEscClose(evt) {
    if (evt.key === ESCAPE) this.close(this._popupSelector);
  }
  _handleOverlayClose(evt) {
    if (evt.target === this._popupSelector) this.close(this._popupSelector);
  }
  setEventListeners() {
    const buttonClosePopup = this._popupSelector.querySelector('.popup__close');
    buttonClosePopup.addEventListener('click', () => this.close());
  }
  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._escHandleBind);
    document.addEventListener('click', this._overlayHandleBind);
  }
  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._escHandleBind);
    document.removeEventListener('click', this._overlayHandleBind);
  }
}
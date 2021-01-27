import { ESCAPE } from '../components/costants.js'
export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
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
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    document.addEventListener('click', (evt) => this._handleOverlayClose(evt));
  }
  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
    document.removeEventListener('click', (evt) => this._handleOverlayClose(evt));
  }
}
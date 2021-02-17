import Popup from '../components/Popup.js'
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCardImage = this._popup.querySelector('.popup__img');
    this._captionImage = this._popup.querySelector('.popup__heading');
  }
  open(name, image) {
    this._popupCardImage.src = image;
    this._popupCardImage.alt = name;
    this._captionImage.textContent = name;
    super.open();
  }
}
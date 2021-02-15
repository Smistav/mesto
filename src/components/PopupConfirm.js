import Popup from '../components/Popup.js'
export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonPopup = this._popupSelector.querySelector('.popup__button');

  }
  open(element) {
    super.open();
    this._element = element;
  }
  setEventListeners() {

    this._buttonPopup.addEventListener('click', this._reset);
  }
  close() {
    super.close();
    //this._element.remove();
    this._buttonPopup.removeEventListener('click', this._reset);

  }
}
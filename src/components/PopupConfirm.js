import Popup from '../components/Popup.js'
export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(element) {
    super.open();
    this._element = element;
  }
  setEventListeners() {
    super.setEventListeners();
    const buttonPopup = this._popupSelector.querySelector('.popup__button');
    buttonPopup.addEventListener('click', () => {
      this._element.remove();
      this.close()
    });
  }
}
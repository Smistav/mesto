import Popup from '../components/Popup.js'
export default class PopupConfirm extends Popup {
  constructor({ handleClickButton }, popupSelector) {
    super(popupSelector);
    this._buttonPopup = this._popupSelector.querySelector('.popup__button');
    this._handleClickButton = handleClickButton;
  }
  open(element, cardId) {
    super.open();
    this._element = element;
    this._cardId = cardId._id;
  }
  setEventListeners() {
    this._buttonPopup.addEventListener('click', () => {
      this._handleClickButton(this._element, this._cardId);
      this.close();
    }, true);
  }
}
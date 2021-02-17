import Popup from '../components/Popup.js'
export default class PopupConfirm extends Popup {
  constructor({ popupSelector, handleClickButton }) {
    super(popupSelector);
    this._handleClickButton = handleClickButton;

  }
  open(element, cardId) {
    super.open();
    this._element = element;
    this._cardId = cardId._id;
  }
  setEventListeners() {
    super.setEventListeners();
    this._buttonPopup.addEventListener('click', () => {
      this._handleClickButton(this._element, this._cardId);
    }, true);
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._buttonPopup.textContent = 'Удаление...';
    }
    else {
      this._buttonPopup.textContent = 'Да';
    }
  }
}
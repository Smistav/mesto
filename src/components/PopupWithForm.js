import Popup from '../components/Popup.js'
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupSelector.querySelector('.popup__container');
    this._buttonPopup = this._popupSelector.querySelector('.popup__button');
  }
  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll('.popup__input');
    this._formInput = {};
    this._inputList.forEach((input) => {
      this._formInput[input.name] = input.value;
    });

    return this._formInput
  }
  openConfirm(element, cardId) {
    super.open();
    this._element = element;
    this._cardId = cardId._id;
  }

  setEventListenersConfirm() {
    this._buttonPopup.addEventListener('click', () => {
      this._handleFormSubmit(this._element, this._cardId);
      this.closeConfirm();
    }, true);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
  closeConfirm() {
    super.close();
  }
}
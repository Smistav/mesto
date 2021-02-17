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

  renderLoading(isLoading) {
    if (isLoading) {
      this._buttonPopup.textContent = 'Сохранение...';
    }
    else {
      this._buttonPopup.textContent = 'Сохранить';
    }
  }

  renderLoadingConfirm(isLoading) {
    if (isLoading) {
      this._buttonPopup.textContent = 'Удаление...';
    }
    else {
      this._buttonPopup.textContent = 'Да';
    }
  }

  setEventListenersConfirm() {
    this._buttonPopup.addEventListener('click', () => {
      this._handleFormSubmit(this._element, this._cardId);
      //this.closeConfirm();
    }, true);
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
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
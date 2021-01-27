import Popup from '../components/Popup.js'
export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll('.popup-input');
    this._formInput = [];
    this._inputList.forEach(input => this._formInput[input.name] = input.text);
    return this._formInput
  }
  setEventListeners() {
    super.setEventListeners();
    const form = this._popupSelector.querySelector('.popup__container')
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
  close() {
    super.close();
  }
}
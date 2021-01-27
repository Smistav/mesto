import Popup from "./Popup";
import Popup from '../components/Popup.js'
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super.popupSelector;
    this._submit = submit;
  }
  _getInputValues() {

  }
  setEventListeners() {
    super.setEventListeners();

  }
  close() {
    super.close();
  }
}
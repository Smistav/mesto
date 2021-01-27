import Popup from '../components/Popup.js'
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(evt) {
    const popupImgclass = this._popupSelector.querySelector('.popup__img');
    const popupImgHeading = this._popupSelector.querySelector('.popup__heading');
    const targetItem = evt.target.closest('.elements__img');

    popupImgclass.src = targetItem.src;
    popupImgclass.alt = targetItem.alt;
    popupImgHeading.textContent = targetItem.alt;
    super.open();

  }
}
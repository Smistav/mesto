import Popup from '../components/Popup.js'
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(name, image) {
    const popupImgclass = this._popupSelector.querySelector('.popup__img');
    const popupImgHeading = this._popupSelector.querySelector('.popup__heading');

    popupImgclass.src = image;
    popupImgclass.alt = name;
    popupImgHeading.textContent = name;
    super.open();
  }
}
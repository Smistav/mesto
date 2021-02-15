export default class UserInfo {
  constructor(name, job) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
    this._avatar = document.querySelector('.profile__img');
  }
  getUserInfo() {
    const user = { name: this._name.textContent, about: this._job.textContent };

    return user
  }
  setUserInfo(input) {
    this._name.textContent = input.name;
    this._job.textContent = input.about;
    if (input.avatar) {
      this._avatar.src = input.avatar;
      this._avatar.alt = input.name;
    }
    this._id = input._id;
  }
}
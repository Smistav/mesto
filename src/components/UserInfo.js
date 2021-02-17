export default class UserInfo {
  constructor(name, job, avatar) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
  }
  getUserInfo() {
    const user = { name: this._name.textContent, about: this._job.textContent };

    return user
  }
  setUserInfo(input) {
    this._name.textContent = input.name;
    this._job.textContent = input.about;
    this._id = input._id;
  }
  setUserAvatar(input) {
    this._avatar.src = input;
    this._avatar.alt = this._name.textContent;
  }
}
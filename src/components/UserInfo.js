export default class UserInfo {
  constructor(name, job) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
  }
  getUserInfo() {
    document.querySelector('.popup__input[name="name"]').value = this._name.textContent;
    document.querySelector('.popup__input[name="job"]').value = this._job.textContent;
  }
  setUserInfo(input) {
    this._name.textContent = input.name;
    this._job.textContent = input.job;
  }
}
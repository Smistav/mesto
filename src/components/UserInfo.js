export default class UserInfo {
  constructor(name, job) {
    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
  }
  getUserInfo() {
    const user = { name: this._name.textContent, job: this._job.textContent };
    return user
  }
  setUserInfo(input) {
    this._name.textContent = input.name;
    this._job.textContent = input.job;
  }
}
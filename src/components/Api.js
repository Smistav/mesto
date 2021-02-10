export default class Api {
  constructor(options) {
    ({ baseUrl: this._baseUrl, headers: this._headers } = options);
  }

  getInitialCards() {
    return fetch(this._baseUrl + '/cards', { headers: this._headers })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', { headers: this._headers })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  // другие методы работы с API
}

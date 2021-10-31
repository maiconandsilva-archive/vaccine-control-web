import requests from "../requests";

class Account {
  static BASE_PATH = "/account"
  static USER_PATH = `${Account.BASE_PATH}/me`

  async getUser() {
    return requests.get(`${Account.USER_PATH}`);
  }

  async signup(data) {
    return requests.post(`${Account.BASE_PATH}/signup`, data);
  }

  async authenticate(data) {
    return requests.post(`${Account.BASE_PATH}/authenticate`, data);
  }

  async updateEmail(email) {
    return requests.post(`${Account.USER_PATH}/updateEmail`, { email });
  }

  async updatePassword(password) {
    return requests.post(`${Account.USER_PATH}/updatePassword`, { password });
  }
}

export default new Account();
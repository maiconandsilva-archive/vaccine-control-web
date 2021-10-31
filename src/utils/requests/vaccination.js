import requests from "../requests";

class Vaccination {
  static BASE_PATH = "/vaccination"

  async getAll() {
    return requests.get(`${Vaccination.BASE_PATH}`);
  }

  async create(data) {
    return requests.post(`${Vaccination.BASE_PATH}`, data);
  }

  async update({ id, ...data }) {
    return requests.post(`${Vaccination.BASE_PATH}/${id}/update`, data);
  }

  async delete({ id }) {
    return requests.post(`${Vaccination.BASE_PATH}/${id}/delete`);
  }
}

export default new Vaccination();
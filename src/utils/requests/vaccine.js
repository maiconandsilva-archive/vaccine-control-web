import requests from "../requests";

class Vaccine {
  static BASE_PATH = "/vaccine"

  async getAll() {
    return requests.get(`${Vaccine.BASE_PATH}`);
  }

  async create(data) {
    return requests.post(`${Vaccine.BASE_PATH}`, data);
  }

  async update({ id, ...data }) {
    return requests.post(`${Vaccine.BASE_PATH}/${id}/update`, data);
  }

  async delete({ id }) {
    return requests.post(`${Vaccine.BASE_PATH}/${id}/delete`);
  }
}

export default new Vaccine();
import axios from 'axios';

class IdeasApi {
  constructor() {
    this._apiURL = 'http://localhost:3000/api/ideas'
  }

  getIdeas() {
    return axios.get(this._apiURL);
  }

  createIdea(data) {
    return axios.post(this._apiURL, data);
  }
}

export default new IdeasApi();
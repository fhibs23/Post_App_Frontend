import axios from 'axios';
const API_URL = 'http://localhost:8080/api/';
class TutorialDataService {
  getAll() {
    return axios.get(API_URL+'tutorials');
  }
  get(id) {
    return axios.get(API_URL+`tutorials/${id}`);
  }
  create(data) {
    return axios.post(API_URL+'tutorials', data);
  }
  update(id, data) {
    return axios.put(API_URL+`tutorials/${id}`, data);
  }
  delete(id) {
    return axios.delete(API_URL+`tutorials/${id}`);
  }
  deleteAll() {
    return axios.delete(API_URL+'tutorials');
  }
  findByTitle(title) {
    return axios.get(API_URL+`tutorials?title=${title}`);
  }
}
export default new TutorialDataService();
import {JsonFormHttp,MultiFormHttp} from "../components/http/http-common";

class UserService {

  
  async login(data) {
    return await JsonFormHttp.post("/login", data);
  }

  async logout() {
    return await JsonFormHttp.post("/logout");
  }

  getAll() {
    return JsonFormHttp.get("/list-user");
  }

  get(id) {
    return JsonFormHttp.get(`/view-user/${id}`);
  }

  create(data) {
    return MultiFormHttp.post("/create-user", data);
  }

  update(id, data) {
    return MultiFormHttp.put(`/update-user/${id}`, data);
  }

  delete(id) {
    return JsonFormHttp.delete(`/delete-user/${id}`);
  }

  updatePassword(id, data) {
    return JsonFormHttp.post(`/update-password/${id}`,data);
  }

  findByTitle(title) {
    return JsonFormHttp.get(`/tutorials?title=${title}`);
  }
}

export default new UserService();
import { JsonFormHttp, MultiFormHttp } from "../components/http/http-common";

class PostService {

  async getAll() {
    return await JsonFormHttp.get("/list-post");
  }

  async get(id) {
    return await JsonFormHttp.get(`/view-post/${id}`);
  }

  async create(data) {
    return await JsonFormHttp.post("/create-post", data);
  }

  async update(id, data) {
    return await JsonFormHttp.post(`/update-post/${id}`, data);
  }

  async delete(id) {
    return await JsonFormHttp.delete(`/delete-post/${id}`);
  }

  async uploadCsv(data) {
    return await MultiFormHttp.post(`/upload-csv`, data);
  }

  async findByTitle(title) {
    return await JsonFormHttp.get(`/tutorials?title=${title}`);
  }
}

export default new PostService();
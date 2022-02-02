import axios from "axios";


const JsonFormHttp = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true, // for cookies and authentication 
  headers: {
    "Content-type": "application/json"
  }
});

const MultiFormHttp = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true, // for cookies and authentication 
  headers: {
    "Content-type": "multipart/form-data",
  }
});

export { JsonFormHttp, MultiFormHttp };
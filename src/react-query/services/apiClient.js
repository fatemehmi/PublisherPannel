import axios from "axios";

// "http://Localhost:8000"
// "https://jsonplaceholder.typicode.com/posts"
const axiosInstance = axios.create({
  baseURL: "http://Localhost:8000",
});

class APIClient {
  endpoint;
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll=()=> {
    return axiosInstance
    .get(this.endpoint)
    .then((res) => res.data);
  }
  post=(data)=> {
    return axiosInstance
    .post(this.endpoint,data)
    .then((res) => res.data);
  }
  put=(data)=> {
    return axiosInstance
    .put(this.endpoint,data)
    .then((res) => res.data);
  }
}

export default APIClient

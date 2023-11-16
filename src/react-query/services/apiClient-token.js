import axios from "axios";
import Cookies from 'js-cookie' 


const axiosInstance = axios.create({
  baseURL: "http://Localhost:8000",
});

class APIClientToken {
  endpoint;
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  setHeaders() {
    const token = Cookies.get("token");
    return {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
  }

  getAll = () => {
    return axiosInstance.get(this.endpoint, this.setHeaders()).then((res) => res.data);
  };
  post = (data) => {
    return axiosInstance
      .post(this.endpoint, data, this.setHeaders())
      .then((res) => res.data);
  };
  put = (data) => {
    return axiosInstance
      .put(this.endpoint, data, this.setHeaders())
      .then((res) => res.data);
  };
}

export default APIClientToken
import axios from "axios";
import Cookies from 'js-cookie' 

const token = Cookies.get('token');


const config={
    headers:{
        'Authorization':'Bearer '+token
    }
}

const axiosInstance = axios.create({
  baseURL: "http://Localhost:8000",
});

class APIClientToken {
  endpoint;
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll=()=> {
    return axiosInstance
    .get(this.endpoint,config)
    .then((res) => res.data);
  }
  post=(data)=> {
    return axiosInstance
    .post(this.endpoint,data,config)
    .then((res) => res.data);
  }
  put=(data)=> {
    return axiosInstance
    .put(this.endpoint,data,config)
    .then((res) => res.data);
  }
}

export default APIClientToken

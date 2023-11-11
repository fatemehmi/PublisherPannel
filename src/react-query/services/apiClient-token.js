import axios from "axios";

const token = Cookies.get('token');


const config={
    headers:{
        'Authorization':'Bearer '+token
    }
}

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
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
}

export default APIClientToken

import axios from "axios";

const api = axios.create({
   baseURL: "http://192.168.0.12:3333/",
   headers:{
   'accept': 'application/json',
   'Access-Control-Allow-Origin': '*',
   }

});

export default api;

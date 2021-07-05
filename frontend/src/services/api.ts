import axios from "axios";
import { IP } from '../../evironment';

const api = axios.create({
   baseURL: `http://192.168.0.114:3333/`,
   headers:{
   'accept': 'application/json',
   'Access-Control-Allow-Origin': '*',
   }

});

export default api;

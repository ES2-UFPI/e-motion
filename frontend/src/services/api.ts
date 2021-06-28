import axios from "axios";
import { IP } from '../../evironment';

const api = axios.create({
   baseURL: `http://${IP}:3333/`,
   headers:{
   'accept': 'application/json',
   'Access-Control-Allow-Origin': '*',
   }

});

export default api;

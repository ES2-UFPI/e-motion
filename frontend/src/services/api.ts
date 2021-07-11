import axios from "axios";
import { store } from '../store';
import { IP } from '../../evironment';

const api = axios.create({
   baseURL: `http://192.168.0.114:3333/`,
   headers: {
      'Access-Control-Allow-Origin': '*',
      accept: 'application/json',
      Authorization: store.getState().auth.accessToken,
   }
});

export default api;

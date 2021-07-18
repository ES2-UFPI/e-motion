import axios from "axios";
import { store } from '../store';
import { IP } from '../../evironment';

const api = axios.create({
   baseURL: `https://emotion-backend-ufpi.herokuapp.com/`,
   headers: {
      'Access-Control-Allow-Origin': '*',
      accept: 'application/json',
      Authorization: store.getState().auth.accessToken,
   }
});

export default api;

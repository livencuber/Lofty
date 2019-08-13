import axios from 'axios';

const instance = axios.create();

export function signIn(params) {
  return instance.post('/signIn', params);
}

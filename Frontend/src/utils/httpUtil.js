import axios from 'axios';
// import { getLocalStorage } from './storageUtil';
const getLocalStorage = () => {
  return localStorage.getItem('token');
}
export function axiosGet(url, endpoint) {
  return axios
    .get(url + endpoint, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer' + ' ' + getLocalStorage('token')
      }
    });
}

export function axiosPost(url, endpoint, data) {
  return axios
    .post(url + endpoint, data, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer' + ' ' + getLocalStorage('token')
      }
    });
}

export function axiosPut(url, endpoint, data) {
  return axios
    .put(url + endpoint, data, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer' + ' ' + getLocalStorage('token')
      }
    });
}

export function axiosDestroy(url, endpoint) {
  return axios
    .delete(url + endpoint, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer' + ' ' + getLocalStorage('token')
      }
    });
}
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
  headers: {
    Authorization: (getToken()?.access ? `Bearer ${getToken()?.access}` : null),  // <-- add token to request
    "Content-Type": "application/json",
  },
});

function getToken() {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    return  JSON.parse(localStorage.getItem('token'));
  }
}

function setToken(token) {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    localStorage.setItem('token', JSON.stringify(token));
  }
  
}

function removeToken() {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    localStorage.removeItem('token');
  }
}

function getUser() {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    return  JSON.parse(localStorage.getItem('user'));
  }
}

function setUser(user) {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    localStorage.setItem('user', JSON.stringify(user));
  }
  
}

function removeUser() {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    localStorage.removeItem('user');
  }
}

export {api as default, getToken, setToken, removeToken, getUser, setUser, removeUser};
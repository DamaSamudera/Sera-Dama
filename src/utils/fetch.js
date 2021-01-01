import axios from 'axios';

const API = (endpoint) => `https://reqres.in/api/${endpoint}`;

const fetch = (url, method, param1, param2) => {
  return new Promise((resolve, reject) => {
    axios[method](url, param1, param2)
      .then((res) => resolve(res.data))
      .catch((err) => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.',
        };

        if (!err.response) {
          reject(defaultError);
        } else if (!err.response.data) {
          reject(defaultError);
        } else {
          reject(err.response.data);
        }
      });
  });
};

export const login = async (data) =>
  fetch(`${API('login')}`, 'post', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const register = async (data) =>
  fetch(`${API('register')}`, 'post', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

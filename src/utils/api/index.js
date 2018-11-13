// @flow

import axios from 'axios';

import { getToken } from '../auth';

const baseURL = 'https://backend-auth.secrettech.io';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const instance = axios.create({ baseURL, headers });

const request = ({
  method,
  url,
  data,
  options = {}
}) => {
  const { suppressAuth } = options;

  const bearerToken = `Bearer ${getToken()}`;

  return new Promise((resolve, reject) => {
    instance.request({
      method,
      url,
      data,
      headers: suppressAuth ? { ...headers, Authorization: bearerToken } : headers
    })
    .then(resolve)
    .catch(reject)
  });
};

export default {
  get: (url, data = {}, options) => request({ method: 'get', url, options }),
  post: (url, data = {}, options) => request({ method: 'post', url, data, options }),
  put: (url, data = {}, options) => request({ method: 'put', url, data, options }),
  del: (url, data = {}, options) => request({ method: 'delete', url, options })
};

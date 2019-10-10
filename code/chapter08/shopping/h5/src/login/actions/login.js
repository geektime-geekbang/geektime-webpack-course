import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../constants/actionTypes';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    data: data
  };
};

export const loginError = (data) => {
  return {
    type: LOGIN_ERROR,
    data: data
  };
};

export const login = (username, password) => dispatch => {
  dispatch(loginRequest());
  return axios.post('http://127.0.0.1:8001/api/v1/user/login', {
    username,
    password
  })
  .then(res => res.data)
  .then(data => dispatch(loginSuccess(data)))
  .catch((data) => {
    dispatch(loginError(data.response))
  });
};
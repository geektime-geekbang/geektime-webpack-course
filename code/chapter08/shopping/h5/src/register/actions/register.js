import axios from 'axios';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR
} from '../constants/actionTypes';

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST
  };
};

export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    data: data
  };
};

export const registerError = (data) => {
  return {
    type: REGISTER_ERROR,
    data: data
  };
};

export const register = (username, password, email) => dispatch => {
  dispatch(registerRequest());
  return axios.post('http://127.0.0.1:8001/api/v1/user/register', {
    username,
    password,
    email
  })
  .then(res => res.data)
  .then(data => dispatch(registerSuccess(data)))
  .catch((data) => {
    dispatch(registerError(data.response))
  });
};
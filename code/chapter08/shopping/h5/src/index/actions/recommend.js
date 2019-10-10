import axios from 'axios';
import {
  RECOMMEND_REQUEST,
  RECOMMEND_SUCCESS,
  RECOMMEND_ERROR
} from '../constants/actionTypes';

export const recommendRequest = () => {
  return {
    type: RECOMMEND_REQUEST
  };
};

export const recommendSuccess = (data) => {
  return {
    type: RECOMMEND_SUCCESS,
    data: data
  };
};

export const recommendError = (data) => {
  return {
    type: RECOMMEND_ERROR,
    data: data
  };
};

export const recommend = (page, perPage) => dispatch => {
  dispatch(recommendRequest());
  return axios.get('http://127.0.0.1:8001/api/v1/goods', {
    params: {
      page,
      per_page: perPage
    }
  })
  .then(res => res.data)
  .then(data => dispatch(recommendSuccess(data)))
  .catch((data) => {
    dispatch(RECOMMEND_ERROR(data.response))
  });
};
import {
  RECOMMEND_REQUEST,
  RECOMMEND_SUCCESS,
  RECOMMEND_ERROR
} from '../constants/actionTypes';

const initialState = {
  list: [],
  isEnd: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECOMMEND_REQUEST:
      return state;
    case RECOMMEND_SUCCESS:
    case RECOMMEND_ERROR:
      const list = state.list.length > 0 ? state.list.concat(action.data.data) : action.data.data
      return Object.assign({}, state, {
        list: list,
        isEnd: action.data && action.data.data.length === 0
      });
    default:
      return state;
  }
};
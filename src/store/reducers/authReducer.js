import {
  LOG_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  LOG_OUT,
  GET_INFO,
  FIND_HOTEL,
  SWITCH_SUCCESS,
  IS_LOADING,
  GET_HOTEL,
  CLEAR_LIST_HOTEL,
  DONE_LOADING,
} from '../actions/types';

const initialState = {
  isLogin: false,
  user: {},
  token: null,
  error: '',
  isLoading: false,
  listHotel: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DONE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case GET_INFO:
      return {
        ...state,
        user: payload,
      };
    case GET_HOTEL:
      return {
        ...state,
        listHotel: payload,
      };
    case CLEAR_LIST_HOTEL:
      return {
        ...state,
        listHotel: null,
      };
    case FIND_HOTEL:
      return {
        ...state,
        listHotel: payload,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        isLogin: payload.success,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        token: payload.token,
        isLogin: payload.success,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        token: null,
        isLogin: false,
      };
    case SWITCH_SUCCESS:
      return {
        ...state,
        token: payload.token,
        user: payload.data,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;

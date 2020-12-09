import {
  LOG_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  LOG_OUT,
  GET_INFO,
  FIND_HOTEL,
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
    case GET_INFO:
      return {
        ...state,
        user: payload,
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
        token: null,
        isLogin: false,
      };
    default:
      return state;
  }
};

export default authReducer;

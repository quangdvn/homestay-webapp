import axios from 'axios';
import { reqConfig } from '../../utils/requestConfig';
import { notifyError, notifySuccess } from '../../services/alertService';
import {
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  LOG_OUT,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  GET_INFO,
} from './types';

export const getUser = () => async dispatch => {
  try {
    const { data } = await axios.get(
      'https://homestayy.herokuapp.com/api/v1/auth/me',
      reqConfig()
    );
    const token = localStorage.getItem('token');
    dispatch({ type: GET_INFO, payload: data.data });
    dispatch({ type: LOG_IN_SUCCESS, payload: { token, success: true } });
  } catch (err) {
    notifyError(err.message);
  }
};

export const logIn = logInData => async dispatch => {
  try {
    const { data } = await axios.post(
      `https://homestayy.herokuapp.com/api/v1/auth/login`,
      logInData
    );
    localStorage.setItem('token', data.token);
    notifySuccess('Log in success!');
    dispatch({ type: LOG_IN_SUCCESS, payload: data });
    return LOG_IN_SUCCESS;
  } catch (err) {
    notifyError(err.message);
    return LOG_IN_ERROR;
  }
};

export const signUp = signUpData => async dispatch => {
  try {
    const { data } = await axios.post(
      `https://homestayy.herokuapp.com/api/v1/signup`,
      signUpData
    );
    console.log(data);
    localStorage.setItem('token', data.token);
    dispatch({ type: SIGN_UP_SUCCESS, payload: data });
    notifySuccess('Sign up success! Check your email for account activation');
    return SIGN_UP_SUCCESS;
  } catch (err) {
    notifyError(err.message);
    return SIGN_UP_ERROR;
  }
};

export const logOut = () => dispatch => {
  dispatch({ type: LOG_OUT });
  localStorage.clear();
};
// export const signUp = signUpData => async dispatch => {
//   try {
//     const { data } = await goFoodApi.post('/auth/signup', signUpData);
//     await AsyncStorage.setItem('token', data.token);

//     dispatch({ type: SIGN_UP_SUCCESS, payload: data.token });

//     navigateTo('GetInfo');
//   } catch (err) {
//     if (err.response.status === 400) {
//       dispatch({
//         type: SIGN_UP_ERROR,
//         payload: err.response.data.error,
//       });
//     } else {
//       dispatch({
//         type: SIGN_UP_ERROR,
//         payload: 'Something went wrong ..',
//       });
//     }
//   }
// };

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
  FIND_HOTEL,
} from './types';

export const getUser = () => async dispatch => {
  try {
    const { data } = await axios.get(
      'https://homestayy.herokuapp.com/api/v1/auth/me.json',
      reqConfig()
    );
    const token = localStorage.getItem('token');
    dispatch({ type: GET_INFO, payload: data.data });
    dispatch({ type: LOG_IN_SUCCESS, payload: { token, success: true } });
  } catch (err) {
    notifyError(err.message);
  }
};

export const getSearchHotel = reqData => async dispatch => {
  try {
    const { data } = await axios.post(
      'https://homestayy.herokuapp.com/api/v1/travellers/places.json',
      reqData
    );
    dispatch({ type: FIND_HOTEL, payload: data.data.places });
  } catch (err) {
    // console.log(err.response.data);
    notifyError(err.message);
  }
};
export const logIn = logInData => async dispatch => {
  try {
    const { data } = await axios.post(
      `https://homestayy.herokuapp.com/api/v1/auth/login.json'`,
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
      `https://homestayy.herokuapp.com/api/v1/signup.json'`,
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

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { notifyError } from '../../services/alertService';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useSelector(state => state.auth);

  return (
    <Route
      {...rest}
      render={props => {
        if (token) {
          return <Component {...props} />;
        }
        notifyError('You must login before continue');
        return <Redirect to="/sign-in" />;
      }}
    />
  );
};

export default PrivateRoute;

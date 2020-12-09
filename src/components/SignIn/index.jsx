import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './styles.scss';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../store/actions/authAction';
import { LOG_IN_SUCCESS } from '../../store/actions/types';
import { RingLoader } from 'react-spinners';
const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberPass: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().required('This field is required!'),
      password: Yup.string()
        .min(6, 'Minimum 6 characters')
        .required('This field is required!'),
    }),
    onSubmit: values => {
      handleLogIn(values);
    },
  });
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleLogIn = async logInData => {
    setLoading(true);
    const res = await dispatch(logIn(logInData));
    setLoading(false);
    if (res === LOG_IN_SUCCESS) {
      history.push('/');
    }
  };

  return (
    <div className="sign-in">
      <div className="left">
        <div className="form-layout">
          <div className="icon">
            <div className="img"></div>
            <h3 className="title">HomeStay.</h3>
          </div>
          <span className="title1">Welcome Back</span>
          <p className="title2">Please log into your account</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-input">
              <div className="email">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  style={
                    formik.errors.email &&
                    formik.touched.email && { borderColor: 'red' }
                  }
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="err-message">{formik.errors.email}</p>
                )}
              </div>
              <div className="password">
                <label> Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  style={
                    formik.errors.password &&
                    formik.touched.password && { borderColor: 'red' }
                  }
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="err-message">{formik.errors.password}</p>
                )}
              </div>
            </div>
            <div className="remember-forget-pwd">
              <div className="remember-pwd">
                <div className="toggle-btn">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="rememberPass"
                      value={formik.values.rememberPass}
                      onChange={formik.handleChange}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
                <span className="title">Remember Me</span>
              </div>
              <Link to="/forget-password">Forget Password ?</Link>
            </div>
            {loading ? (
              <RingLoader size={30} color={'#f9495b'} css=" margin: 0 auto;" />
            ) : (
              <button className="login-btn" type="submit">
                <div className="icon"></div>
                <div className="title">Login</div>
              </button>
            )}
          </form>
          {/* <div className="divider-inner-text">
            <span className="title3">--Or log in with--</span>
          </div>
          <div className="regis-btn">
            <div className="fb">Facebook</div>
            <div className="gg">Google+</div>
          </div>
           */}
          <p className="title4">
            Don't Have an Account?
            <Link to="/sign-up"> Registration</Link>
          </p>
        </div>
      </div>
      <div className="right">
        <div className="bg-img"></div>
      </div>
    </div>
  );
};

export default SignIn;

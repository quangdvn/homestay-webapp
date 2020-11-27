import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './styles.scss';
import { Link } from 'react-router-dom';
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
      // confirm_password: Yup.string()
      //   .oneOf([Yup.ref("password")], "Password's not match")
      //   .required("Required!")
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="sign-in">
      <div className="left">
        <div className="form-layout">
          <div className="icon">
            <div className="img">
              <img
                src={require('../../assets/images/user-logo.png')}
                alt=""
                width={100}
                height={100}
              />
            </div>
            <h3 className="title">TripFinder.</h3>
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
            <button className="login-btn" type="submit">
              <div className="icon"></div>
              <div className="title">Login</div>
            </button>
          </form>
          <div className="divider-inner-text">
            <span className="title3">--Or log in with--</span>
          </div>
          <div className="regis-btn">
            <div className="fb">Facebook</div>
            <div className="gg">Google+</div>
          </div>
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

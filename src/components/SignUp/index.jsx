import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './styles.scss';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repass: '',
      acceptTerms: false,
      rememberPass: false,
    },
    validationSchema: Yup.object({
      username: Yup.string().required('This field is required!'),
      email: Yup.string().required('This field is required!'),
      password: Yup.string()
        .min(6, 'Minimum 6 characters')
        .required('This field is required!'),
      repass: Yup.string()
        .oneOf([Yup.ref('password')], "Password's not match")
        .required('This field is required!'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="container">
      <div className="left">
        <div className="form-layout">
          <span className="title1">Welcome To TripFinder</span>
          <p className="title2">Please Register for your account</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-input">
              <div className="username">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  style={
                    formik.errors.username &&
                    formik.touched.username && { borderColor: 'red' }
                  }
                />
                {formik.errors.username && formik.touched.username && (
                  <p className="err-message">{formik.errors.username}</p>
                )}
              </div>
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
              <div className="repass">
                <label> Confirm password</label>
                <input
                  type="password"
                  name="repass"
                  onChange={formik.handleChange}
                  value={formik.values.repass}
                  style={
                    formik.errors.repass &&
                    formik.touched.repass && { borderColor: 'red' }
                  }
                />
                {formik.errors.repass && formik.touched.repass && (
                  <p className="err-message">{formik.errors.repass}</p>
                )}
              </div>
            </div>
            <div className="remember-forget-pwd">
              <div className="toggle-btn">
                <label class="switch">
                  <input
                    type="checkbox"
                    name="rememberPass"
                    value={formik.values.rememberPass}
                    onChange={formik.handleChange}
                  />
                  <span class="slider round"></span>
                </label>
              </div>
              <span className="title">Remember Me</span>
              <div className="toggle-btn">
                <label class="switch">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    value={formik.values.acceptTerms}
                    onChange={formik.handleChange}
                  />
                  <span class="slider round"></span>
                </label>
              </div>
              <span className="title">I agree with terms and conditions</span>
            </div>
            <button className="login-btn" type="submit">
              <div className="icon"></div>
              <div className="title">Register</div>
            </button>
          </form>
          <div className="divider-inner-text">
            <span className="title3">--Or Register Up With--</span>
          </div>
          <div className="regis-btn">
            <div className="fb">Facebook</div>
            <div className="gg">Google+</div>
          </div>
          <p className="title4">
            Already Have an Account!
            <a href="#"> Login</a>
          </p>
        </div>
      </div>
      <div className="right">
        <div className="bg-img"></div>
      </div>
    </div>
  );
};

export default SignUp;

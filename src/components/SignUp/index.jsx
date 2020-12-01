import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/actions/authAction';
import city from '../../constants/city';
import { RingLoader } from 'react-spinners';
import './styles.scss';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      phone_number: '',
      email: '',
      full_name: '',
      city_id: '',
      password: '',
      password_confirmation: '',
      acceptTerms: false,
      rememberPass: false,
    },
    validationSchema: Yup.object({
      phone_number: Yup.string().required('This field is required!'),
      email: Yup.string().required('This field is required!'),
      full_name: Yup.string().required('This field is required!'),
      password: Yup.string()
        .min(6, 'Minimum 6 characters')
        .required('This field is required!'),
      password_confirmation: Yup.string()
        .oneOf([Yup.ref('password')], "Password's not match")
        .required('This field is required!'),
    }),
    onSubmit: values => {
      handleSignUp(values);
    },
  });
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleSignUp = async signUpData => {
    console.log(signUpData);
    setLoading(true);
    await dispatch(signUp(signUpData));
    setLoading(false);
  };
  return (
    <div className="sign-up">
      <div className="left">
        <div className="form-layout">
          <span className="title1">Welcome To HomeStay</span>
          <p className="title2">Please Register for your account</p>
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
              <div className="phone_number">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone_number"
                  onChange={formik.handleChange}
                  value={formik.values.phone_number}
                  style={
                    formik.errors.phone_number &&
                    formik.touched.phone_number && { borderColor: 'red' }
                  }
                />
                {formik.errors.phone_number && formik.touched.phone_number && (
                  <p className="err-message">{formik.errors.phone_number}</p>
                )}
              </div>
              <div className="full_name">
                <label>Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  onChange={formik.handleChange}
                  value={formik.values.full_name}
                  style={
                    formik.errors.full_name &&
                    formik.touched.full_name && { borderColor: 'red' }
                  }
                />
                {formik.errors.full_name && formik.touched.full_name && (
                  <p className="err-message">{formik.errors.full_name}</p>
                )}
              </div>
              <div className="city">
                <label>City</label>
                <select
                  onChange={formik.handleChange}
                  value={formik.values.city_id}
                  id="city_id"
                  name="city_id"
                >
                  <option className="label-select">Select city</option>
                  {city.map(data => (
                    <option value={data.city_id}>{data.name}</option>
                  ))}
                </select>
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
              <div className="password_confirmation">
                <label> Confirm password</label>
                <input
                  type="password"
                  name="password_confirmation"
                  onChange={formik.handleChange}
                  value={formik.values.password_confirmation}
                  style={
                    formik.errors.password_confirmation &&
                    formik.touched.password_confirmation && {
                      borderColor: 'red',
                    }
                  }
                />
                {formik.errors.password_confirmation &&
                  formik.touched.password_confirmation && (
                    <p className="err-message">
                      {formik.errors.password_confirmation}
                    </p>
                  )}
              </div>
            </div>
            <div className="remember-forget-pwd">
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
              <div className="toggle-btn">
                <label className="switch">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    value={formik.values.acceptTerms}
                    onChange={formik.handleChange}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <span className="title">I agree with terms and conditions</span>
            </div>
            {loading ? (
              <RingLoader size={30} color={'#f9495b'} css=" margin: 0 auto;" />
            ) : (
              <button className="login-btn" type="submit">
                <div className="icon"></div>
                <div className="title">Register</div>
              </button>
            )}
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
            <Link to="/sign-in"> Login</Link>
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

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastAlert } from '../../components/Alert';
import { getUser } from '../../store/actions/authAction';
import Home from '../../components/Home';
import PlaceDetails from '../../components/PlaceDetails';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import './styles.scss';

function App() {
  const userToken = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken) {
      dispatch(getUser());
    }
  }, [userToken, dispatch]);

  return (
    <Router>
      {/* <Narbar /> */}
      <ToastAlert />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/places/:id/details">
          <PlaceDetails />
        </Route>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/listing" />
        <Route exact path="/profile" />
        <Route exact path="/pricing-plan" />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

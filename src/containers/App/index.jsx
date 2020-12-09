import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastAlert } from '../../components/Alert';
import { getUser } from '../../store/actions/authAction';
import Home from '../../components/Home';
import PlaceDetails from '../../components/PlaceDetails';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import Hosting from '../../components/Hosting';
import NewHosting from '../../components/NewHosting';
import Listing from '../../components/Listing';
import './styles.scss';

function App() {
  const userToken = localStorage.getItem('token');
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
        <Route exact path="/hosting">
          <Hosting />
        </Route>
        <Route exact path="/new-hosting">
          <NewHosting />
        </Route>
        <Route exact path="/listing">
          <Listing />
        </Route>
        <Route exact path="/profile" />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

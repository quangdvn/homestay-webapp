import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastAlert } from '../../components/Alert';
import {
  getUser,
  getListBookMark,
  getHotel,
} from '../../store/actions/authAction';
import Home from '../../components/Home';
import PlaceDetails from '../../components/PlaceDetails';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import Hosting from '../../components/Hosting';
import NewHosting from '../../components/NewHosting';
import Listing from '../../components/Listing';
import PrivateRoute from '../../components/PrivateRoute';
import Bookmark from '../../components/Bookmark';
import LoadingIndicator from '../../components/LoadingIndicator';
import './styles.scss';

function App() {
  const userToken = localStorage.getItem('token');
  const token = useSelector(state => state.auth.token);
  const { isLoading } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken) {
      dispatch(getUser());
      dispatch(getListBookMark());
      dispatch(getHotel());
    }
  }, [token, userToken, dispatch]);

  return (
    <Router>
      <ToastAlert />
      <Switch>
        {isLoading ? (
          <LoadingIndicator isHost />
        ) : (
          <>
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
            <PrivateRoute exact path="/new-hosting" component={NewHosting} />
            <PrivateRoute
              exact
              path="/places/:id/edit"
              component={NewHosting}
            />
            <Route exact path="/listing">
              <Listing />
            </Route>
            <Route exact path="/profile">
              <Bookmark />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;

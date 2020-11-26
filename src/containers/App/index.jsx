import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Narbar from '../../components/Home/Narbar';
import Footer from '../../components/Home/Footer';
import Home from '../../components/Home';
import PlaceDetails from '../../components/PlaceDetails';
import './styles.scss';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

function App() {
  return (
    <Router>
      <Narbar />
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
      <Footer />
    </Router>
  );
}

export default App;

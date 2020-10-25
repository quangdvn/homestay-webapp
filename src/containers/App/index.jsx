import React from 'react';
import Home from '../../components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/listing"></Route>
        <Route exact path="/profile"></Route>
        <Route exact path="/pricing-plan"></Route>
      </Switch>
    </Router>
  );
}

export default App;

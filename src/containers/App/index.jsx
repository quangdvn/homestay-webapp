import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlaceDetails from '../../components/PlaceDetails';
import './styles.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/places/:id/details">
            <PlaceDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

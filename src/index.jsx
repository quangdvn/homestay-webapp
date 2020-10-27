import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './stylesheets/index.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/store';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import './stylesheets/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

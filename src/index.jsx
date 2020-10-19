import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LoadingIndicator from './components/LoadingIndicator';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './stylesheets/index.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/store';
import * as serviceWorker from './serviceWorker';

const App = lazy(() => import('./containers/App'));
const store = configureStore();

ReactDOM.render(
  <>
    <Suspense fallback={<LoadingIndicator />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </>,

  document.getElementById('root')
);

serviceWorker.unregister();

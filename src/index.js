import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { loadData } from './reducers/index'
import { loadJoke } from './actions/index'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(reducer, composedEnhancer);

store.dispatch(loadData)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

export { store }

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
// import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import history from "./history";
import * as serviceWorker from './serviceWorker';
let persistor = persistStore(store);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <BrowserRouter> */}
    <Router history={history}>
      <App />
      </Router>
    {/* </BrowserRouter> */}
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

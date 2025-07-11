import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import {AuthContextProvider} from "./context/AuthContext";
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from 'redux-logger';

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk, logger))
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AuthContextProvider> */}
    <Provider store={store}>
      <App />
    {/* </AuthContextProvider> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

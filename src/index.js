import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import AppReducer from "./components/reducer/ProductReducer"

import {createStore} from "redux";
import {Provider} from "react-redux"

const store = createStore(AppReducer)

ReactDOM.render(<Provider store={store}> <App />  </Provider>, document.getElementById('root'));


serviceWorker.unregister();

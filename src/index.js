import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import{AppReducer} from "./components/reducer/ProductReducer"

import {createStore} from "redux";
import {Provider} from "react-redux"


import { library } from "@fortawesome/fontawesome-svg-core";
//import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add( faCheckSquare, faCoffee);





const store = createStore(AppReducer)

ReactDOM.render(<Provider store={store}> <App />  </Provider>, document.getElementById('root'));


serviceWorker.unregister();

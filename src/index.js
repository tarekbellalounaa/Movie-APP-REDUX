import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; 
import {BrowserRouter , Route} from 'react-router-dom'
import App from "./App";
import { Provider } from 'react-redux';
import store from './Store'
import Film from './Components/film'
ReactDOM.render(<BrowserRouter>
  <Provider store={store}>
    <Route exact path='/' component={App} />
    <Route path='/movie/:id' component={Film} />
  </Provider>
  </BrowserRouter>
  ,document.getElementById("root")
);

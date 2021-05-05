import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import URL from './URL';
import { BrowserRouter, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/">
      <Main/>
    </Route>
    <Route path="/url/:pagePath+" component={URL} />
    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, {useState} from 'react'
import './index.css';
import Main from './Main';
import URL from './URL';
import { BrowserRouter, Route } from 'react-router-dom'
import {Context} from './Context'
import moment from 'moment';

const App = () => {
  const [context, setContext] = useState({
    inputDateRange: [moment().startOf('day'), moment().endOf('day')],
    referrers: [],
    deviceTypes: [],
    countries: [],
    cities: [],
    url: null,
    chartResolution: "h"
  });

  return (
    <Context.Provider value={[context, setContext]}>
      <BrowserRouter>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/url/:pagePath*">
          <URL/>
        </Route>    
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App

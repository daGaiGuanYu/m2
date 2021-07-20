import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from '../page/home/index.jsx'
import Another from '../page/another/index.jsx'

export default function() {
  return <Router>
    <Switch>
      <Route path = '/another'>
        <Another />
      </Route>
      <Route path = '/'>
        <Home />
      </Route>
    </Switch>
  </Router>
}
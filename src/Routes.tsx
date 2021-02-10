import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import PrivatePage from './pages/PrivatePage'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}>
        <Home />
      </Route>
      <Route path="/private" exact component={PrivatePage}>
        <PrivatePage />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Routes
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import list from 'components/pages/List';
import View from 'components/pages/View';

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={list} />
      <Route exact path="/view" component={View} />
    </Switch>
  </React.Fragment>
);

export default App;

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import List from 'components/Pages/List';
import View from 'components/Pages/View';

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="/view" component={View} />
    </Switch>
  </React.Fragment>
);

export default App;

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignIn from 'routes';

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={SignIn} />
    </Switch>
  </React.Fragment>
);

export default App;

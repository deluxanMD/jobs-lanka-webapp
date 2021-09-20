import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Login from '../components/Login';
import Register from '../components/Register';

const index = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default index;

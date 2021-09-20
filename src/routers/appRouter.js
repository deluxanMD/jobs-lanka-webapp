import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from '../components/Home';

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default index;

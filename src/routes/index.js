import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import AvatarCard from '../components/dashboard/AvatarCard';

class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/college/:id" component={AvatarCard} />
        </Switch>
      </div>
    );
  }
}

export default Router;
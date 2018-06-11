import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import CollegePanel from "../components/dashboard/CollegePanel";

class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/college/:id" component={CollegePanel} />
        </Switch>
      </div>
    );
  }
}

export default Router;

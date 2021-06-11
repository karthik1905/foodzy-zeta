import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';

function RoutePath() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </Router>
  );
}

export default RoutePath;
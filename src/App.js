import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shop from './Shop';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
    </Router>

  );
}

export default App;

import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Home';
import Navbar from "./Navbar";
import Category from "./Category";
import Expenses from './Expenses'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category" exact component={Category} />
          <Route path="/expenses" exact component={Expenses} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

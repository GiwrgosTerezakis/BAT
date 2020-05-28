import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataAnalysis from "./DataAnalysis";
import Main from "./Main";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Main} />

        <Route path='/Data/:id' exact component={DataAnalysis} />
      </Switch>
    </Router>
  );
}

export default App;

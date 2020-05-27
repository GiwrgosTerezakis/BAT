import React, { useState } from "react";
import "./styles.css";
import { Typography, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
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

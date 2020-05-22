import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import AppBar from "@material-ui/core/AppBar";
import Bouton1 from "./bouton1";

import Checkbox from './Checkbox';

export default (props) => (
  <Card style={{ padding: 0 , background:"#FCFDF4",boxShadow: "0 1px 3px 1px grey",}}>
    <CardContent style={{ padding: 0 }}>
      <AppBar
        position='static'
        style={{ margin: 0, padding: 0, background: "#84D0D1" }}>
        <Typography align='center' color='textSecondary' gutterBottom>
          <b> Choose a Sample Dataset</b>
        </Typography>
      </AppBar>
      <Checkbox/>
    </CardContent>
    <CardActions>
      <Bouton1 />
    </CardActions>
  </Card>
);

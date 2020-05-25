import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import "./styles.css";
import AppBar from "@material-ui/core/AppBar";
import Bouton2 from "./bouton2";

export default (props) => (
  <Card style={{ padding: 0 , background:"#FCFDF4",boxShadow: "0 1px 3px 1px grey",}}>
    <CardContent style={{ padding: 0 }}>
      <AppBar
        position='static'
        style={{ margin: 0, padding: 0, background: "#84D0D1" }}>
        <Typography align='center'  className="letters">
          <b>Upload Your Own Data </b>
        </Typography>
      </AppBar>
      <br />
      <Typography align='center' color='black'>
        <b> See below for information on how to format input data. </b>
      </Typography>
      <br />

      <Typography align='center' variant='body2' component='p'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
        <br />
        <br />
        <input accept='.csv' id='raised-button-file' multiple type='file' />
        {/* <br/>
        <input type ='submit' value='Upload'/> */}
      </Typography>
    </CardContent>
    <CardActions>
      <Bouton2 />
    </CardActions>
  </Card>
);

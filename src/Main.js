import "./styles.css";
import { Typography, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";
import Apbar from "./Apbar";
import React from 'react';




function Main(){


    return(
        <div className='App' style={{ backgroundColor: "#ffff" }}>
    <Apbar/>

    <Container
      fixed
      style={{ backgroundColor: "white", paddingLeft: 0, paddingRight: 0 }}>
      <div className='JOJO' style={{ marginTop: 5 }}>
        <Container maxWidth='xs'>
          <img
            src={require("./BAT.png")}
            width='100%'
            alt='cam'
            align='center'
          />
        </Container>

        <Typography
          variant='subtitle1'
          align='center'
          style={{ marginTop: 0, paddingTop: 0 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Typography>
      </div>
      <br />

      <Container maxWidth='lg'>
        <img src={require("./BIASREPORT.png")} width='100%' alt='cam' />
      </Container>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <LeftPanel />
        </Grid>
        <Grid item xs={6}>
          <RightPanel />
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Footer />
    </Container>
  </div>

    );
}
export default Main;
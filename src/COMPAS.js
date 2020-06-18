import React, { useState, useEffect, Component, setState } from "react";
import "./styles.css";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as d3 from "d3";
import data from "./COMPAS";
import { readRemoteFile, CSVReader } from "react-papaparse";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CPie from "./CompasPie";
import CScate from "./CompasScatter";
import Footer from "./Footer";
import SelectModel from "./SelectModel";
import SelectAudit from "./SelectAudit";
import BarChart from "./barChart";
import axios from "axios";
import {saveInfo} from './actions';
import { useDispatch } from "react-redux";

// import {
//   ComposedChart,
//   Line,
//   Area,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Scatter,
// } from "recharts";





export default function COMPAS() {
  const dispatch = useDispatch();
  const [Operations, setOperations] = React.useState([{}]);
  await axios.get("https://bat-django.herokuapp.com/Compas/Ml").then((res) => {
   // console.log(res.data[0].model);
    setOperations({ Operations: res.data });
    
    const ee = [
      {
        name: res.data[0].model,
        Accuracy: res.data[0].acc,
        Bias: res.data[0].DIlogisticRegRace,
      },
      {
        name: res.data[1].model,
        Accuracy: res.data[1].acc,
        Bias: res.data[1].DIrandomForestRace,
      },
      {
        name: res.data[2].model,
        Accuracy: res.data[2].acc,
        Bias: res.data[2].DIdesicionTreeRace,
      },
      {
        name: res.data[3].model,
        Accuracy: res.data[3].acc,
        Bias: res.data[3].DIdesicionTreeRace,
      },
      {
        name: res.data[4].model,
        Accuracy: res.data[4].acc,
        Bias: res.data[4].DIdesicionTreeRace,
      },
      {
        name: res.data[5].model,
        Accuracy: res.data[5].acc,
        Bias: res.data[5].DIdesicionTreeRace,
      },
      {
        name: res.data[6].model,
        Accuracy: res.data[6].acc,
        Bias: res.data[6].DIdesicionTreeRace,
      },  
    ];
    dispatch(saveInfo(ee)) ;
  });

  

  return (
    <div>
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <Button
          variant='contained'
          className='BackButton'
          >
          <b> Back </b>
        </Button>
      </Link>

      <Container maxWidth='lg'>
        <Paper style={{ boxShadow: "0 3px 3px 1px grey" }}>
          <Typography
            className='compasTypo'
            // variant='h3'
            align='center'
            style={{ marginTop: 0, paddingTop: 0, marginBottom: 0 }}>
            Cοmpas Recidivism Risk Score Data and Analysis
          </Typography>

          <Grid container spacing={1} alignItems='flex-start'>
            <Grid xs={6}>
              <CPie it={1} />
            </Grid>

            <Grid item xs={6}>
              <CPie it={2} />
            </Grid>
          </Grid>
          <hr />
          <br />
          <SelectModel />
          <span style={{ textAlign: "center" }}>
            <h2>Sensitive Attribute: Race </h2>
          </span>
          <br />

          <Grid container spacing={3} alignItems='flex-start'>
            <Grid item xs={12} sm={6} alignItems='center'>
              <CScate />
            </Grid>
            <Grid item xs={12} sm={6} alignItems='center'>
              <BarChart />
            </Grid>
          </Grid>
          <span style={{ textAlign: "center" }}>
            <h2>Sensitive Attribute: Gender </h2>
          </span>
          <br />

          <Grid container spacing={3} alignItems='flex-start'>
            <Grid item xs={12} sm={6} alignItems='center'>
              <CScate />
            </Grid>
            <Grid item xs={12} sm={6} alignItems='center'>
              <BarChart />
            </Grid>
          </Grid>
          <hr />
          {/* <br/>
          <SelectAudit/> */}
          <Footer />
        </Paper>
      </Container>
    </div>
  );
}

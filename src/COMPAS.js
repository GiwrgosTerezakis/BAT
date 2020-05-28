import React, { useState, useEffect, Component } from "react";
import "./styles.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as d3 from "d3";
import data from "./COMPAS";
import { readRemoteFile, CSVReader } from "react-papaparse";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import CPie from './CompasPie';
import CScate from './CompasScatter';
import Footer from "./Footer";
import SelectModel from "./SelectModel";
import SelectAudit from "./SelectAudit";
import CPIE from "./CompasPie";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";


const ee = [
  {
    name: "Bayes",
    Accuracy: 80,
    Bias: 60,
  },
  {
    name: "SVM",
    Accuracy: 70,
    Bias: 30,
  },
  {
    name: "LogisticR",
    Accuracy: 60,
    Bias: 20,
  },
  {
    name: "LinearR",
    Accuracy: 40,
    Bias: 82,
  },
  {
    name: "Random Forest",
    Accuracy: 30,
    Bias: 25,
  },
];

export default function COMPAS() {
  
  return (
    <div>
      
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <Button
          variant='contained'
          className='BackButton'
          startIcon={
            <ArrowBackIcon fontSize='medium' style={{ color: "white" }} />
          }>
          <b> Back </b>
        </Button>
        
      </Link>
      

      <Container maxWidth='lg'>
      
        <Paper style={{boxShadow: "0 3px 3px 1px grey"}}>
          <Typography
          className="compasTypo"
            variant='h3'
            align='center'
            style={{ marginTop: 0, paddingTop: 0 ,marginBottom: 0}}>
            Cοmpas Recidivism Risk Score Data and Analysis
          </Typography>
          
          <Grid container spacing={3} alignItems="center" >
          <Grid xs={3}>
          <CPie />
        </Grid>
        <Grid item xs={3}>
          <p>Blah Blah Blah</p>
          <p>Blah Blah Blah</p>
          <p>Blah Blah Blah</p>
        </Grid>
        <Grid item xs={3}>
          <CPie/>
        </Grid>
        <Grid item xs={3}>
       < p>Blah Blah Blah</p>
          <p>Blah Blah Blah</p>
          <p>Blah Blah Blah</p>
        </Grid>
          </Grid>
          <hr/>
          <br/>
          <SelectModel />
          <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
          <CScate />
            
        </Grid>
        <Grid item xs={12} sm={6}>
        <CScate/>
        </Grid>
          </Grid>
          <hr/>
          <br/>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <ComposedChart
            width={500}
            height={400}
            data={ee}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}>
            <CartesianGrid stroke='#f5f5f5' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='Accuracy' barSize={20} fill='#413ea0' />
            <Bar dataKey='Bias' barSize={20} fill='red' />
          </ComposedChart>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ComposedChart
            width={500}
            height={400}
            data={ee}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}>
            <CartesianGrid stroke='#f5f5f5' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='Accuracy' barSize={20} fill='#413ea0' />
            <Bar dataKey='Bias' barSize={20} fill='red' />
          </ComposedChart>
        </Grid>
          </Grid>
          <hr/>
          <br/>
          <SelectAudit/>
          <Footer/>
        </Paper>
        
      </Container>
      
    </div>
  );
}

import React, { useState, useEffect, Component } from "react";
import "./styles.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as d3 from 'd3';
import data from './COMPAS';
import { readRemoteFile, CSVReader } from "react-papaparse";
import Paper from "@material-ui/core/Paper";
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, Scatter,
  } from 'recharts';

  const ee = [
    {
      name: 'Bayes',  Accuracy: 80 , Bias:60, 
    },
    {
      name: 'SVM',  Accuracy: 70, Bias:30,
    }
    ,
    {
      name: 'LogisticR',  Accuracy: 60, Bias:20,
    }
    ,
    {
      name: 'LinearR',  Accuracy: 40 ,Bias:82,
    }
    ,
    {
      name: 'Random Forest',  Accuracy: 30, Bias:25,
    }
    
  ];
  

export default function COMPAS() {
    // const [data, setData] = useState([]);
    // // d3.csv(data, function(data) { console.log(data); });
    // d3.csv("COMPAS.csv",function(data){
    //     console.log(data);
    // },function(error, rows){
    //    console.log(rows); 
    // });
//   const handleClick = () => {
//     readRemoteFile(
//       "https://raw.githubusercontent.com/propublica/compas-analysis/master/compas-scores-two-years.csv",
//       {
//         download: true,

//         header: true,
//         download: true,
//         skipEmptyLines: true,
//         complete: (results) => {
            
//             setData(JSON.stringify(results.data));
            
//           }
//         }
//     );
//   };


  
    return (
      <div>
        <Link to={`/`}>
          <IconButton size='medium' className='BackButton'>
            <ArrowBackIcon fontSize='medium' style={{ color: "white" }} />
          </IconButton>
        </Link>

        <Container maxWidth='lg'>
            <Paper>

            
          <Typography
            variant='h3'
            align='center'
            style={{ marginTop: 0, paddingTop: 0 }}>
            Cοmpas Recidivism Risk Score Data and Analysis
          </Typography>
          <ComposedChart
        width={500}
        height={400}
        data={ee}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
          <Bar dataKey="Accuracy" barSize={20} fill="#413ea0" />
          <Bar dataKey="Bias" barSize={20} fill="red" />
               
      </ComposedChart>
          </Paper>

        </Container>
      </div>
    );
  
}

import React, { useState, useEffect, Component, setState } from "react";
import "./styles.css";
import { Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
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
import { saveInfo } from "./actions";
import { useDispatch } from "react-redux";
import { BoxLoading } from "react-loadingg";

export default function COMPAS() {
  const dispatch = useDispatch();
  const [Operations, setOperations] = React.useState([{}]);
  const [a, seta] = React.useState(0);
  // axios.get("https://bat-django.herokuapp.com/Compas/Ml").then((res) => {
  //console.log("true");
  //setOperations({ Operations: res.data });
  useEffect(() => {
    async function fetchData() {
      const res = await axios("https://bat-django.herokuapp.com/Compas/Ml");

      const ee = [
        {
          name: res.data[0].model,
          Accuracy: res.data[0].acc,
          Race_Bias: res.data[0].DIlogisticRegRace,
          Gender_Bias: res.data[0].DIlogisticRegGender,
        },
        {
          name: res.data[1].model,
          Accuracy: res.data[1].acc,
          Race_Bias: res.data[1].DIrandomForestRace,
          Gender_Bias: res.data[1].DIrandomForestGender,
        },
        {
          name: res.data[2].model,
          Accuracy: res.data[2].acc,
          Race_Bias: res.data[2].DIdesicionTreeRace,
          Gender_Bias: res.data[2].DIrandomTreeGender,
        },
        {
          name: res.data[3].model,
          Accuracy: res.data[3].acc,
          Race_Bias: res.data[3].DIkNNRace,
          Gender_Bias: res.data[3].DIkNNGender,
        },
        {
          name: res.data[4].model,
          Accuracy: res.data[4].acc,
          Race_Bias: res.data[4].DInaiveBayesRace,
          Gender_Bias: res.data[4].DInaiveBayesGender,
        },
        {
          name: res.data[5].model,
          Accuracy: res.data[5].acc,
          Race_Bias: res.data[5].DIadaBoostRace,
          Gender_Bias: res.data[5].DIadaBoostGender,
        },
        {
          name: res.data[6].model,
          Accuracy: res.data[6].acc,
          Race_Bias: res.data[6].DISVMRACE,
          Gender_Bias: res.data[6].DISVMGender,
        },
      ];
      dispatch(saveInfo(ee));
      seta(1);
    }
    fetchData();
  }, []);

  if (a == 1) {
    return (
      <div>
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <Button variant='contained' className='BackButton'>
            <b> Back </b>
          </Button>
        </Link>

        <Container maxWidth='lg'>
          <Paper style={{ boxShadow: "0 3px 3px 1px grey" }}>
            <Typography
              className='compasTypo'
              variant='h3'
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

            {/* <br/>
            <SelectAudit/> */}
            <br />
            <br />
            <Footer />
          </Paper>
        </Container>
      </div>
    );
  } else {
    return <BoxLoading />;
  }
}

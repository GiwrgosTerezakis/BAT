import React, { useState } from "react";
import "./styles.css";
import { Typography, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function Apbar() {
  const [value, setValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Tabs
        indicatorColor='secondary'
        textColor='black'
        centered
        value={value}
        style={{
          backgroundColor: "#84D0D1",
          color: "black",
          boxShadow: "0 1px 1px 1px grey",
        }}>
        <Tab
          className='tabb'
          label='Code'
          onClick={() => window.open("https://github.com/GiwrgosTerezakis/BAT")}
          onMouseEnter={() => setValue(0)}
          onMouseLeave={() => setValue(1)}
        />

        <Tab
          className='tabb'
          label='Home'
          onMouseEnter={() => setValue(1)}
          onMouseLeave={() => setValue(1)}
        />

        <Tab
          className='tabb'
          label='Details'
          onMouseEnter={() => setValue(2)}
          onMouseLeave={() => setValue(1)}
        />
      </Tabs>
    </Paper>
  );
}
export default Apbar;
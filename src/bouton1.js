import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./styles.css";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    background:
      "#E5EFEE",
    borderRadius: 5,
    border: '0.5px solid ',
    borderColor: 'black',
    height: 30,
    padding: "0 30px",
    boxShadow: "0 1px 3px 1px grey",
    marginTop: "20px",
    "&:hover": {
      boxShadow: "0 3px 5px 2px black",
      background: '#7799D3'
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export default function Bouton1() {
  return (
    <StyledButton className='btn' size='small' fullWidth>
      {"  "}
      <b>Begin Tutorial</b>
    </StyledButton>
  );
}

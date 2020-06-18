import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import {changeSelect} from './actions';
import { useDispatch } from "react-redux";




const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(1),
    position: "relative",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
    position: "relative",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    
  },
}));

// I METAVLITI POU THA PERASW STO REDUX EINAI TO modelPicked WSTE NA VLEPW POIA GRAFIMATA THA BGAZW, AN EINAI 0 TA BGAZEI OLA MAZI ALLIWS
// KSEXWRISTA TO KATHENA

export default function SelectModel() {
  const classes = useStyles();
  const [modelPicked, setmodelPicked] = React.useState(0);
  const [open, setOpen] = React.useState(false);
 const dispatch = useDispatch();

 
  const handleChange = (event) => {
    event.preventDefault();
    setmodelPicked(event.target.value);
    //console.log(event.target.value);
    dispatch(changeSelect(event.target.value)) ;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  var PickChart;
  if (modelPicked == 0) {
    PickChart = <h2>0</h2>;
  } else {
    PickChart = <h2>not 0</h2>;
  }

  return (
    
    <div>
      
      <Button className={classes.button}>Audit A Specific ML model</Button>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-controlled-open-select-label'>MODELS</InputLabel>
        <Select
          labelId='demo-controlled-open-select-label'
          id='demo-controlled-open-select'
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={modelPicked}
          onChange={handleChange}>
          <MenuItem value={0}>
            <em>ALL</em>
          </MenuItem>
          <MenuItem value={1}>SVM</MenuItem>
          <MenuItem value={2}>RANDOM FOREST</MenuItem>
          <MenuItem value={3}>LINEAR REGRESSION</MenuItem>
          <MenuItem value={4}>LOGISTIC REGRESSION</MenuItem>
          <MenuItem value={5}>NAIVE BAYES</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}

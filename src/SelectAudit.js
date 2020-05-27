import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(1),
    position: 'relative',
    left: '45%',
    top: '35%',
    transform: 'translate(-50%, -50%)'

  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,position: 'relative',
    left: '45%',
    top: '35%',
    transform: 'translate(-50%, -50%)'
  },
}));

export default function SelectAudit() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} >
        Choose Bias mitigation Algorithm
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Bias Mitigation</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>ALL</em>
          </MenuItem>
          <MenuItem value={1}>REWEIGHTING</MenuItem>
          <MenuItem value={2}>OPTIMIZED PRE-PROCESSING</MenuItem>
          <MenuItem value={3}>ADVERSARIAL DEBIASING</MenuItem>
          <MenuItem value={4}>REJECT OPTION CLASSIFICATION</MenuItem>
          <MenuItem value={5}>DISPARATE IMPACT</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
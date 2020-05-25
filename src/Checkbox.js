import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./styles.css";

export default function CheckboxList() {
  const [Datastate, setDatastate] = useState([]);

  useEffect(() => {
    let Datastate = [
      {
        id: 1,
        Name: "COMPAS Recidivism Risk Score Data and Analysis",
        url:
          "https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm",
      },
      {
        id: 2,
        Name: "German Credit Risk",
        url: "https://www.kaggle.com/uciml/german-credit",
      },
      {
        id: 3,
        Name: "Medical Expenditure 2015-2016 ",
        url: "https://www.meps.ahrq.gov/mepsweb/",
      },
      {
        id: 4,
        Name: "Employee attrition ",
        url:
          "https://www.kaggle.com/pavansubhasht/ibm-hr-analytics-attrition-dataset",
      },
      {
        id: 5,
        Name: "Campus Recruitment  ",
        url:
          "https://www.kaggle.com/benroshan/factors-affecting-campus-placement",
      },
    ];

    setDatastate(
      Datastate.map((d) => {
        return {
          select: false,
          id: d.id,
          Name: d.Name,
          url: d.url,
        };
      })
    );
  }, []);

  const GoUrl = (value) => () => {
    Datastate.map((dong) => {
      if (dong.id === value) {
        window.open(dong.url);
      }
    });
  };

  return (
    <List>
      {Datastate.map((d) => {
        const labelId = `checkbox-list-label-${d.id}`;

        return (
          <ListItem key={d.id} dense>
            <br />
            <ListItemIcon></ListItemIcon>
            <Link className='listT' to={`/Data/${d.id}`}>
              <ListItemText disableTypography id={labelId} primary={d.Name} />
            </Link>
            <ListItemSecondaryAction>
              <IconButton className='info' edge='end' onClick={GoUrl(d.id)}>
                <InfoIcon />
                <Typography variant='subtitle2'>nfo</Typography>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

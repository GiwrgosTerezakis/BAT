import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

export default class CPIE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["Ethnicity1 ", "Ethnicity2", "Ethnicity3", "Ethnicity4"],
      labels2: ["Men", "Women"],
      datasets: [
        {
          data: [4000, 2500, 2000, 1500],
          backgroundColor: ["red", "green", "blue", "purple"],
        },
      ],
      datasets2: [
        {
          data: [4000, 2500],
          backgroundColor: ["blue", "red"],
        },
      ],
    };
  }

  render() {
    switch (this.props.it) {
      case 1:
        return (
          <div>
            <br />
            <br />
            <br />
            <span style={{textAlign : "center"}}> <h3> Race Distribution</h3> </span>
            <Pie
              data={{
                labels: this.state.labels,
                datasets: this.state.datasets,
              }}
              height='45'
              width='100'
              left='20%'
            />
            <br />
          </div>
        );

      case 2:
        return (
          <div>
            <br />
            <br />
            <br />
            <span style={{textAlign : "center"}}> <h3> Gender Distribution</h3> </span>
            
            <Pie
              data={{
                labels: this.state.labels2,
                datasets: this.state.datasets2,
              }}
              height='45'
              width='100'
              left='20%'
            />
            <br />
          </div>
        );
    }
  }
}

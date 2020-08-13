import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

//test gia git
const data = [
  {
    name: 'SVM', uv: 0.8, pv: 1.2, amt: 2400,
  },
  {
    name: 'Bayes', uv: 0.75, pv: 2.2, amt: 2210,
  },
  {
    name: 'LogisticR', uv: 0.75, pv: 1.8, amt: 2290,
  },
  {
    name: 'LinearR', uv: 0.75, pv: 1.9, amt: 2000,
  },
  {
    name: 'Random Forest', uv: 0.75, pv: 1.1, amt: 2181,
  },
  
];

export default class Aaa extends Component {
 

  render() {
    return (
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

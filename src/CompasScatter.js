import React, { PureComponent } from 'react';

import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import {useSelector} from 'react-redux';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

const data = [
  {
    name: 'SVM', GroupFairness: 1.2, Accuracy: 0.8, amt: 2400,
  },
  {
    name: 'Bayes', GroupFairness: 2.1, Accuracy: 0.75, amt: 2210,
  },
  {
    name: 'LogisticR', GroupFairness: 1.8, Accuracy: 0.72, amt: 2290,
  },
  {
    name: 'LinearR', GroupFairness: 1.4, Accuracy: 0.82, amt: 2000,
  },
  {
    name: 'RForest', GroupFairness: 1.6, Accuracy: 0.76, amt: 2181,
  },
  
];
const SVM = [{
  name: "Support Vector Machine",
  Accuracy: 0.75,
  GroupFairness: 2.1,
}];
const Bayes = [{
  name: "Naive Bayes",
  Accuracy: 0.8,
  GroupFairness: 1.2
}];

const LogisticR = [{
  name: "Logistic Regression",
  Accuracy: 0.72,
  GroupFairness: 1.8,
}];
const LinearR = [{
  name: "Linear Regression",
  Accuracy: 0.82,
  GroupFairness: 1.4,
}];
const RandomForest = [{
  name: "Random Forest",
  Accuracy: 0.76,
  GroupFairness: 1.6,
}];

const handle = (selection) => {
  switch(selection){
      default: return data;
      case 1: return SVM;
      case 2: return RandomForest;
      case 3: return LinearR;
      case 4: return LogisticR;
      case 5: return Bayes;

  }
}


export default function CScate() {
  
  const selection = useSelector(state => state.modelReducer);
   return (
      <LineChart width={500} height={300} data={handle(selection)}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 15 , right: 20, top:10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Accuracy" stroke="blue" activeDot={{ r: 5 }} />
        <Line type="monotone" dataKey="GroupFairness" stroke="red" activeDot={{ r: 5 }} />
      </LineChart>
    ); 
  
    
  }


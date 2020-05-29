import React from  "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";
import {useSelector} from 'react-redux';

const ee = [
    {
      name: "Bayes",
      Accuracy: 0.8,
      GroupFairness: 1.2,
    },
    {
      name: "SVM",
      Accuracy: 0.75,
      GroupFairness: 2.1,
    },
    {
      name: "LogisticR",
      Accuracy: 0.72,
      GroupFairness: 1.8,
    },
    {
      name: "LinearR",
      Accuracy: 0.82,
      GroupFairness: 1.4,
    },
    {
      name: "Random Forest",
      Accuracy: 0.76,
      GroupFairness: 1.6,
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
        default: return ee;
        case 1: return SVM;
        case 2: return RandomForest;
        case 3: return LinearR;
        case 4: return LogisticR;
        case 5: return Bayes;

    }
}


export default function BarChart(){
    const selection = useSelector(state => state.modelReducer);


    return (
        <ComposedChart
        width={500}
        height={400}
        data={handle(selection)}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}>
        <CartesianGrid stroke='#f5f5f5' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='Accuracy' barSize={16} fill='#413ea0' />
        <Bar dataKey='GroupFairness' barSize={16} fill='red' />
      </ComposedChart>
    ); 
  




}



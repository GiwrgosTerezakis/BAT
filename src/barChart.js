import React from "react";
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
  ReferenceLine,
} from "recharts";
import { useSelector } from "react-redux";

var selection;
var data;
var info;
export default function BarChart() {
  data = useSelector((state) => state.axiosJson);
  if (data != 0) {
    info = data;
  }

  selection = useSelector((state) => state.modelReducer);

  //  console.log(data[1]);
  const handle = (selection) => {
    // console.log(selection);
    // console.log(info[selection]);
    // console.log(info);
    switch (selection) {
      default:
        return info;
      case 1:
        return [info[0]];
      case 2:
        return [info[1]];
      case 3:
        return [info[2]];
      case 4:
        return [info[3]];
      case 5:
        return [info[4]];
    }
  };

  return (
    <ComposedChart
      width={500}
      height={400}
      data={handle(selection)}
      margin={{
        left: 20,
      }}
      padding={{
        right: 0,
        left : 0 
      }}>
      <CartesianGrid stroke='#f5f5f5' />
      <XAxis dataKey='name' />

      <ReferenceLine y={1.2} stroke='black' strokeDasharray='3 3' />
      <ReferenceLine y={0.8} stroke='black' strokeDasharray='3 3' />

      <YAxis
        width={20}
        padding={{ top: 1, bottom: 1 }}
        domain={[0, 2.5]}
        allowDataOverflow={true}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey='Accuracy' barSize={16} fill='#413ea0' />
      <Bar dataKey='Race_Bias' barSize={16} fill='red' />
      <Bar dataKey='Gender_Bias' barSize={16} fill='green' />
    </ComposedChart>
  );
}

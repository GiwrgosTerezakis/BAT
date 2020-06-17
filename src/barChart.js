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
  ReferenceLine,
  
} from "recharts";
import {useSelector} from 'react-redux';
import { red } from "@material-ui/core/colors";








export default function BarChart(){
    const selection = useSelector(state => state.modelReducer);
    var data = [];
    data = useSelector(state => state.axiosJson);

    const handle = (selection) => {
      switch(selection){
          default: return data;
          case 1: return data;
          case 2: return data;
          case 3: return data;
          case 4: return data;
          case 5: return data;
  
      }
  }

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
        
        <ReferenceLine y={1.2}  stroke="black" strokeDasharray="3 3" />
        <ReferenceLine y={0.8}  stroke="black" strokeDasharray="3 3" />
        
        
        <YAxis width={20} padding={{ top: 1, bottom: 1 }}  domain={[0, 2.5]} allowDataOverflow={true}/>
        <Tooltip />
        <Legend />
        <Bar dataKey='Accuracy' barSize={16} fill='#413ea0' />
        <Bar dataKey='Bias' barSize={16} fill='red' />
        
      </ComposedChart>
    ); 
  




}



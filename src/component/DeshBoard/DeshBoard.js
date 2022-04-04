import React from 'react';
import useInfoChart from '../../hooks/useInfoChart';
//import Chart from '../Chart/Chart';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart,Pie,PieChart,Scatter,Tooltip, XAxis, YAxis } from 'recharts';
import './DeshBoard.css'

const DeshBoard = () => {
    const [data]=useInfoChart()
    return (
        <div className='container'>
           <h1>Data Analysis by Different Chart</h1>
           <div className="flex ">
           <div className='LineChart'>
                <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="investment" stroke="red" />
                        <Line type="monotone" dataKey="sell" stroke="blue" />
                        <Line type="monotone" dataKey="revenue" stroke="green" />
                    <CartesianGrid stroke="grey" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
           </div>
           
           <div className='ComposedChart'>
           <ComposedChart width={400} height={300} data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="revenue" fill="green" stroke="#8884d8" />
          <Bar dataKey="sell" barSize={20} fill="blue" />
          <Scatter dataKey="investment" fill="red" />
        </ComposedChart>
           </div>
           <div className='PieChart'>
           <PieChart width={400} height={300}>
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="red" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="green" label />
          <Tooltip />
        </PieChart>
           </div>

           <div className='BarChart'>
           <BarChart width={400}height={300}data={data}margin={{top: 20,right: 30,left: 20,bottom: 5,}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="investment" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" stackId="a" fill="red" />
          <Bar dataKey="sell" stackId="a" fill="blue" />
          <Bar dataKey="month" stackId="a" fill="grey"/>
        </BarChart>
           </div>
           </div>
        </div>
    );
};

export default DeshBoard;
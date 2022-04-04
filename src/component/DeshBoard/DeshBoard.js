import React from 'react';
//import useInfo from '../../hooks/useInfo';
//import Chart from '../Chart/Chart';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart,Pie,PieChart,Scatter,Tooltip, XAxis, YAxis } from 'recharts';
import './DeshBoard.css'

const DeshBoard = () => {
    //const [info]=useInfo()

    const data = [
        {
          "month": "Mar",
          "investment": 100000,
          "sell": 241,
          "revenue": 10401
        },
        {
          "month": "Apr",
          "investment": 200000,
          "sell": 423,
          "revenue": 24500
        },
        {
          "month": "May",
          "investment": 500000,
          "sell": 726,
          "revenue": 67010
        },
        {
          "month": "Jun",
          "investment": 500000,
          "sell": 529,
          "revenue": 40405
        },
        {
          "month": "Jul",
          "investment": 600000,
          "sell": 601,
          "revenue": 50900
        },
        {
          "month": "Aug",
          "investment": 700000,
          "sell": 670,
          "revenue": 61000
        }
      ]


    return (
        <div>
           <h1>Data Analysis by Diffrent Chart</h1>
           
          {/*  {
               info.map(data=><Chart data={data}></Chart>)
           } */}
           <div className="flex container">
           <div className='LineChart'>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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
           <ComposedChart width={600} height={300} data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
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
           <PieChart width={600} height={300}>
          <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="red" />
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="green" label />
          <Tooltip />
        </PieChart>
           </div>

           <div className='BarChart'>
           <BarChart width={600}height={300}data={data}margin={{top: 20,right: 30,left: 20,bottom: 5,}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="red" />
          <Bar dataKey="sell" stackId="a" fill="blue" />
          <Bar dataKey="revenue" stackId="a" fill="green" />
        </BarChart>
           </div>
           </div>
        </div>
    );
};

export default DeshBoard;
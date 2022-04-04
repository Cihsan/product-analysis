import React from 'react';
import useInfo from '../../hooks/useInfo';
import Chart from '../Chart/Chart';
//import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const DeshBoard = () => {
    const [info]=useInfo()
    return (
        <div>
           <h1>This is Desh Board</h1>
           
           {
               info.map(data=><Chart data={data}></Chart>)
           }
           <div>
                {/* <LineChart width={600} height={300} info={info.map(data=>data)} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="month" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                </LineChart> */}
           </div>
        </div>
    );
};

export default DeshBoard;
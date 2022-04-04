import React from 'react';
import { LineChart, Line, XAxis, BarChart, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar } from 'recharts';

const Dashboard = () => {
   const  data=[
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
       <div className='grid grid-cols-1 pl-2  md:grid-cols-2 gap-4 overflow-x-hidden '>
         <div className=' bg-white shadow-md relative  '>
         <ResponsiveContainer width="100%"  height={400}>
        <LineChart
          data={data}
          
          margin={{
            top: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
         
          <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
        </LineChart>
     </ResponsiveContainer>
         </div>
         <div className=' bg-white shadow-md '>
         <ResponsiveContainer width="100%" height={400}>
         <BarChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
     
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sell" fill="#8884d8" />
     
    </BarChart>
    </ResponsiveContainer>
         
         </div>
         
       </div>
    );
};

export default Dashboard;
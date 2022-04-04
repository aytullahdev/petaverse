import React from 'react';
import { LineChart, Line, XAxis, BarChart, YAxis,Scatter, PieChart, Pie, ScatterChart ,CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar } from 'recharts';

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
         <div className=' bg-white shadow-md relative overflow-x-hidden  '>
         <ResponsiveContainer  height={400}>
        <LineChart
          data={data}
          
          margin={{
            top: 5,
            left:20,
            right:30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Legend verticalAlign='top' />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
         
          <Line type="monotone" name='Total Sell' dataKey="sell" stroke="#82ca9d" />
        </LineChart>
     </ResponsiveContainer>
         </div>
         {/* Barcahrt */}
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
      <Legend verticalAlign='top'/>
      <Bar dataKey="revenue" name='Total Revenue ' fill="#8884d8" />
     
    </BarChart>
    </ResponsiveContainer>
         
         </div>
         {/* Charter chart */}
         <div className=' bg-white shadow-md overflow-x-hidden '>
         <ResponsiveContainer width="100%" height={400}>
         <ScatterChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
     
     <CartesianGrid />
          <XAxis type="number" dataKey="sell" name="Sell" unit="" />
          <YAxis type="number" dataKey="revenue" name="Revenue" unit="" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A Company" data={data} fill="#8884d8" />
     
    </ScatterChart>
    </ResponsiveContainer>
         
         </div>
         {/* pie chart */}
         <div className=' bg-white shadow-md '>
            <ResponsiveContainer width="100%" height={400}>
            <PieChart width={400} height={400}>
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Tooltip/>
        </PieChart>
       
            </ResponsiveContainer>
         </div>
       </div>
    );
};

export default Dashboard;
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';



const DoughnutsChart = ({investment,earning}) => {
    const data = [
        { name: 'Track Hr Investment', value: investment },
        { name: 'Track Hr Earning', value: earning },
      ];

      const COLORS = ['#0088FE', '#00C49F'];
   return (
  <PieChart width={400} height={400}>
    <Pie
      data={data}
      cx={200}
      cy={200}
      innerRadius={60}
      outerRadius={100}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
)};

export default DoughnutsChart;

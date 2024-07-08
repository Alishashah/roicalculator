import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = ({ average, NoofEmployees, timeinvest, investment, earning }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        labels: ['Track Hr Investment', 'Earning Track Hr'],
        datasets: [
          {
            data: [investment, earning,1000],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'red'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'red'
            ],
            borderWidth: 1,
            hoverOffset: 50, // Increase the size of the segment when hovered

          },
        ],
      };

      setChartData(data);
    };

    fetchData();

    return () => {};
  }, [average, NoofEmployees, timeinvest, investment, earning]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Doughnut
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            title: {
              display: true,
              text: 'Investment vs Earning',
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;

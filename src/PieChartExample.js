import React, { useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell, Sector, ResponsiveContainer } from 'recharts';
import './PieChartComponent.css';

import { useEffect } from "react"


const PieChartExample = ({ direct, indirect, moneysave, moneyrecovered }) => {

const useNavwidth=()=>{
    const[windowsize,setwindowsize]=useState(
        undefined
    )

 const handlesize=()=>{
    setwindowsize(
        window.innerWidth,
    )
 }
 useEffect(()=>{
    window.addEventListener("resize",handlesize)
    handlesize()
    return()=>window.removeEventListener("resize",handlesize)
 },[])
 return windowsize
}

const windowwidth=useNavwidth()
  const renderActiveShape = (props) => {

    const {
      cx, cy, startAngle, endAngle, fill,
    } = props;

    const activeOuterRadius =  props.outerRadius + 20;

    return (
      <g>
        {windowwidth > 800 ? (
        <>
          <text x={cx} y={cy - 10} textAnchor="middle" fill={fill} fontWeight="bold" fontSize={40} dominantBaseline="middle">
            <tspan x={cx} dy="0">ROI</tspan>
            <tspan x={cx} dy="1.2em" fontSize={24}>{`${300}%`}</tspan>
          </text>
        </>
      ) : (
        <>
          <text x={cx} y={cy - 10} textAnchor="middle" fill={fill} fontSize={20} dominantBaseline="middle">
            <tspan x={cx} dy="0">ROI</tspan>
            <tspan x={cx} dy="1.2em" fontSize={10}>{`${300}%`}</tspan>
          </text>
        </>
      )}

        <Sector
          {...props}
          outerRadius={activeOuterRadius}
          fill={fill}
          className="hover-sector"
        />
      </g>
    );
  };
  const data = [
    { name: `Wastage Saved`, value: Math.round(moneysave), color: '#1250ac' },
    { name: `Performance Recovered`, value: Math.round(moneyrecovered), color: '#1763D4' },
    { name: `Indirect`, value: Math.round(indirect), color: '#E41B1B' },
    { name: `Direct`, value: Math.round(direct), color: '#EB4C4C' },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const CustomTooltip = ({ active, payload, coordinate }) => {
    if (active && payload && payload.length) {
      const { x, y } = coordinate;
      const dataColor = payload[0].payload.color;

      return (
        <div className="custom-tooltip" style={{ left: x, top: y }}>
          <p className="label" style={{ color: dataColor }}>{`${payload[0].name}`}</p>
          <p className="label" style={{ color: dataColor }}>{`${(payload[0].value) / 100}%`}</p>
          <div className="arrow-down"></div>
        </div>
      );
    }

    return null;
  };

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{ width: '100%', height: 700 }}>
      <svg width="0" height="0">
        <defs>
          <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#000000" floodOpacity="0.5" />
          </filter>
        </defs>
      </svg>
      <ResponsiveContainer>
        <PieChart>
          {windowwidth > 800 ? <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={210}
            innerRadius={80}
            fill="#8884d8"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                filter="url(#drop-shadow)"
                onMouseEnter={() => setActiveIndex(index)}
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                stroke='none'
              />
            ))}
          </Pie>: <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={50}
            fill="#8884d8"
            onMouseEnter={onPieEnter}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                filter="url(#drop-shadow)"
                onMouseEnter={() => setActiveIndex(index)}
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                }}
                stroke="none"
              />
            ))}
          </Pie>}
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#999999', strokeWidth: 0.5 }} />
          <Legend
            align="left"
            verticalAlign="bottom"
            layout="horizontal"
            iconType="square"
            iconSize={0}
            wrapperStyle={{ width: '100%', paddingBottom: '20px' }}
            payload={data.map((entry) => ({
              id: entry.name,
              value: (
                <>
                  <tspan style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'left' }}>{`${(Math.round(entry.value) / 100).toFixed(1)}%`}</tspan>
                  <br />
                  <tspan style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', display: 'block' }}>
                    <svg width={20} height={20} style={{ verticalAlign: 'middle',  }}>
                      <rect width={17} height={17} fill={entry.color} />
                    </svg>
                    <span style={{ fontSize: "12px", fontWeight: 600 }}>{entry.name}</span>
                  </tspan>
                </>
              ),
              type: 'square',
              color: entry.color,
            }))}
          />
        </PieChart>
      </ResponsiveContainer>
      <style>{`
        .custom-tooltip {
          background: rgba(255, 255, 255, 0.8);
          border-radius: 4px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          color: #145dcb;
          padding: 10px;
          position: absolute;
          transform: translate(-50%, -100%);
          font-size: 14px;
          z-index: 1000;
        }

        .custom-tooltip .label {
          margin: 0;
          font-weight: bold;
        }

        .custom-tooltip .arrow-down {
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid rgba(255, 255, 255, 0.8);
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
};

export default PieChartExample;





// import React from 'react';
// import { PieChart, Pie, Legend, Tooltip, Cell, Sector } from 'recharts';
// import './PieChartComponent.css';

// const renderActiveShape = (props) => {
//   const {
//     cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill,
//   } = props;

//   const activeOuterRadius = outerRadius + 20; // Increase outer radius for active part

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} fontWeight="bold">ROI</text>
//       <text x={cx} y={cy} dy={24} textAnchor="middle" fill={fill} fontSize={16}>{`${Math.round((endAngle - startAngle) / (Math.PI * 2) * 100)} %`}</text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={activeOuterRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//         filter="url(#drop-shadow)"
//         className="hover-sector"
//       />
//     </g>
//   );
// };

// const CustomTooltip = ({ active, payload, coordinate }) => {
//   if (active && payload && payload.length) {
//     const { x, y } = coordinate;
//     return (
//       <div className="custom-tooltip" style={{ left: x, top: y }}>
//         <p className="label">{`${payload[0].name}`}</p>
//         <div className="arrow-down"></div>
//       </div>
//     );
//   }

//   return null;
// };

// const PieChartExample = ({ direct, indirect, moneysave, moneyrecovered }) => {
//   const data = [
//     { name: `Wastage Saved\n${(Math.round(moneysave) / 100).toFixed(2)}%`, value: Math.round(moneysave) },
//     { name: `Performance Recovered\n${(Math.round(moneyrecovered) / 100).toFixed(2)}%`, value: Math.round(direct) },
//     { name: `Indirect\n${(Math.round(indirect) / 100).toFixed(2)}%`, value: Math.round(indirect) },
//     { name: `Direct\n${(Math.round(direct) / 100).toFixed(2)}%`, value: Math.round(direct) },
//   ];

//   const COLORS = ['#1250ac', '#1763D4', '#E41B1B', '#EB4C4C'];
//   const [activeIndex, setActiveIndex] = React.useState(0);

//   const onPieEnter = (_, index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div>
//       <svg width="0" height="0">
//         <defs>
//           <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
//             <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#000000" floodOpacity="0.5"/>
//           </filter>
//         </defs>
//       </svg>
//       <PieChart width={700} height={600}>
//         <Pie
//           activeIndex={activeIndex}
//           activeShape={renderActiveShape}
//           data={data}
//           dataKey="value"
//           nameKey="name"
//           cx="50%"
//           cy="50%"
//           outerRadius={210}
//           innerRadius={80}
//           fill="#8884d8"
//           onMouseEnter={onPieEnter}
//         >
//           {data.map((entry, index) => (
//             <Cell
//               key={`cell-${index}`}
//               fill={COLORS[index % COLORS.length]}
//               filter="url(#drop-shadow)"
//               onMouseEnter={() => setActiveIndex(index)}
//               style={{
//                 cursor: 'pointer',
//                 transition: 'transform 0.3s ease',
//               }}
//             />
//           ))}
//         </Pie>
//         <Tooltip
//           content={<CustomTooltip />}
//           cursor={{ stroke: '#999999', strokeWidth: 0.5 }}
//         />
//         <Legend />
//       </PieChart>
//       <style>{`
//         .custom-tooltip {
//           background: rgba(255, 255, 255, 0.8);
//           border-radius: 4px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
//           color: #145dcb;
//           padding: 10px;
//           position: absolute;
//           transform: translate(-50%, -100%);
//           font-size: 14px;
//           z-index: 1000;
//         }

//         .custom-tooltip .label {
//           margin: 0;
//           font-weight: bold;
//         }

//         .custom-tooltip .arrow-down {
//           width: 0;
//           height: 0;
//           border-left: 10px solid transparent;
//           border-right: 10px solid transparent;
//           border-top: 10px solid rgba(255, 255, 255, 0.8);
//           position: absolute;
//           top: 100%;
//           left: 50%;
//           transform: translateX(-50%);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PieChartExample;

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // adjust path as needed
import { IgrItemLegend, IgrItemLegendModule, IgrPieChart, IgrPieChartModule, IgrSliceClickEventArgs } from 'igniteui-react-charts';

IgrPieChartModule.register();
IgrItemLegendModule.register();

const NewChart = () => {
    const chartRef = useRef(null);
    const legendRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current || !legendRef.current) {
            return;
        }

        const chart = chartRef.current;
        const legend = legendRef.current;

        chart.legend = legend;
    }, []);

    const data = [
        { MarketShare: 37, Company: "Space Cooling", Summary: "Space Cooling 37%" },
        { MarketShare: 25, Company: "Residential Appliance", Summary: "Residential Appliance 25%" },
        { MarketShare: 12, Company: "Heating", Summary: "Heating 12%" },
        { MarketShare: 8, Company: "Lighting", Summary: "Lighting 8%" },
        { MarketShare: 18, Company: "Other Services", Summary: "Other Services 18%" },
    ];

    const onSliceClick = (s, e) => {
        e.isExploded = !e.isExploded;
    };

    return (
        <div className="container sample">
            <label className="legend-title">Global Electricity Demand by Energy Use</label>
            <div className="options vertical">
                <IgrItemLegend ref={legendRef} orientation="Horizontal" />
            </div>

            <div className="container">
                <IgrPieChart
                    dataSource={data}
                    ref={chartRef}
                    labelMemberPath="Summary"
                    valueMemberPath="MarketShare"
                    legendLabelMemberPath="Company"
                    width="100%"
                    height="400px"
                    labelsPosition="OutsideEnd"
                    labelExtent={30}
                    explodedRadius={0.2}
                    explodedSlices={1}
                    allowSliceExplosion={true}
                    radiusFactor={0.7}
                    sliceClick={onSliceClick}
                    startAngle={-60}
                />
            </div>
        </div>
    );
};

export default NewChart;




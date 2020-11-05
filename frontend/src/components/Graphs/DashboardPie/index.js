import React, { Fragment } from 'react';
import { PieChartWrapper, LeftContainer } from './style';

import {PieChart, Pie, Cell,} from "recharts";

const data = [
	{ name: 'Group A', value: 400 },
	{ name: 'Group B', value: 300 },
	{ name: 'Group C', value: 300 },
	{ name: 'Group D', value: 200 },
	{ name: 'Group E', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#523234'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DashboardPieChart = () => {


  	return (
	  	<Fragment>
			<h2>Expenses</h2>
			<PieChartWrapper>

				<LeftContainer>
					<div className="leftColumn">
						<h3>F&B</h3>
						<h3>Energy & Waste</h3>
						<h3>Maintanance</h3>
					</div>
					<div className="rightColumn">
						<h3>23'122</h3>
						<h3>3'412</h3>
						<h3>2'434</h3>
					</div>

				</LeftContainer>

				<div className="piechart">
					<PieChart width={380} height={400}>
						<Pie
							data={data}
							cx={200}
							cy={200}
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={160}
							fill="#8884d8"
							dataKey="value"
						>
						{
							data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
						}
						</Pie>
					</PieChart>
				</div>
			</PieChartWrapper>
		</Fragment>

    	
    );
}


export default DashboardPieChart;

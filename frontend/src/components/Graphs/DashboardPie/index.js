import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { PieChartWrapper, LeftContainer } from './style';
import getDate from '../../../helper/date_helper';

import {PieChart, Pie, Cell,} from "recharts";

const dummydata = [
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

const DashboardPieChart = ( { props } ) => {
	const [pieData, setPieData] = useState(dummydata);
	 
	let currentTimeFrame = useSelector(state => state.filter.timeFrameStart)

	useEffect(() => {
		let data = [];

        const getData = () => {
			props.invoices.filter(inv => {return inv.date >= getDate(currentTimeFrame)}).map(inv => {
				return inv.articles.map(art => {
					const found = data.some(element => element.name === art.tag.title)
					if (!found){
						data.push({
							"name": art.tag.title,
							"value": art.total_price
						})
					}
					else {
						data.map(entry => {
							if (entry.name === art.tag.title){
								entry.value += art.total_price
							}
						})
					}
				})
			})
		}
		getData();
		setPieData(data)
    }, [currentTimeFrame, props.invoices]);

  	return (
	  	<Fragment>
			<h2>Expenses</h2>
			<PieChartWrapper>


				<LeftContainer>
					<div className="leftColumn">
						{pieData.map((entry) => <h3 key={entry.name}>{entry.name}</h3>)}
						<div>
							<h3>Total</h3>
						</div>

					</div>

					<div className="rightColumn">
						{pieData.map((entry) => <h3 key={entry.id}>{entry.value}</h3>)}
						<div>
							<h3>{pieData.reduce((sum, current) => { return sum + current.value}, 0)}</h3>
						</div>
					</div>
				</LeftContainer>
				{/* {/* <LeftContainer>
					<div className="leftColumn">
						<h3>Total</h3>
					</div>
					<div className="rightColumn">
	  					<h3>{pieData.reduce((sum, current) => { return sum + current.value}, 0)}</h3>
					</div>
				</LeftContainer> */}

				<div className="piechart">
					<PieChart width={380} height={400}>
						<Pie
							data={pieData}
							cx={200}
							cy={200}
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={160}
							fill="#8884d8"
							dataKey="value"
						>
						{
							pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
						}
						</Pie>
					</PieChart>
				</div>
			</PieChartWrapper>
		</Fragment>

    	
    );
}


export default DashboardPieChart;

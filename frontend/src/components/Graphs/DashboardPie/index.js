import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { PieChartWrapper, LeftContainer } from './style';

import {PieChart, Pie, Cell, Legend, Sector } from "recharts";

const dummydata = [
	{ name: 'Group A', value: 400 },
	{ name: 'Group B', value: 300 },
	{ name: 'Group C', value: 300 },
	{ name: 'Group D', value: 200 },
	{ name: 'Group E', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#523234'];

const renderActiveShape = (props) => {
	const RADIAN = Math.PI / 180;
	const {
	  cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
	  fill, payload, percent, value,
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? 'start' : 'end';

	return (
		<g>
		  <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
		  <Sector
			cx={cx}
			cy={cy}
			innerRadius={innerRadius}
			outerRadius={outerRadius}
			startAngle={startAngle}
			endAngle={endAngle}
			fill={fill}
		  />
		  <Sector
			cx={cx}
			cy={cy}
			startAngle={startAngle}
			endAngle={endAngle}
			innerRadius={outerRadius + 6}
			outerRadius={outerRadius + 10}
			fill={fill}
		  />
		  <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
		  <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
		  <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`CHF ${value}`}</text>
		  <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
			{`${(percent * 100).toFixed(2)}%`}
		  </text>
		</g>
	  );
};



const DashboardPieChart = ( { props } ) => {
	const [pieData, setPieData] = useState(dummydata);
	const [activeIndex, setactiveIndex] = useState();
	 
	let currentTimeFrameStart = useSelector(state => state.filter.timeFrameStart)
	let currentTimeFrameEnd = useSelector(state => state.filter.timeFrameEnd)

	
	const onPieEnter = (data, index) => {
		setactiveIndex(index)
	};

	useEffect(() => {
		let data = [];

        const getData = () => {
			props.invoices.filter(inv => {return inv.date >= currentTimeFrameStart && inv.date <= currentTimeFrameEnd}).map(inv => {
				return inv.articles.map(art => {
					const found = data.some(element => element.name === art.tag.title)
					if (!found){
						data.push({
							"name": art.tag.title,
							"value": art.total_price
						})
					}
					else {
						data.map(entry => {return entry.name === art.tag.title ? entry.value += art.total_price : null})
					}
				})
			})
		}
		getData();
		setPieData(data)
		console.log('pieData: ', data);
    }, [currentTimeFrameStart, currentTimeFrameEnd, props.invoices]);

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

				<div className="piechart">
					<PieChart width={600} height={450} >
						<Legend verticalAlign="right" height={36}/>
						<Pie
							activeShape={renderActiveShape}
							activeIndex={activeIndex}
							data={pieData}
							cx={290}
							cy={230}
							innerRadius={70}
							outerRadius={150}
							fill="#8884d8"
							dataKey="value"
							onMouseEnter={onPieEnter}
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

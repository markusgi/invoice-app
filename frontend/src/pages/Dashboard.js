import React, { Fragment } from 'react';
import DashboardPieChart from '../components/Graphs/DashboardPie';
import DashboardBarsChart from '../components/Graphs/DashboardBars';


const Dashboard = () => {

	return (
		<Fragment>
            <h1>Dashboard</h1>
			<div style={{backgroundColor:"red", border:"2px solid black"}}>
				<DashboardPieChart />
			</div>
			<div>
				<DashboardBarsChart />
			</div>
		</Fragment>
	);
};

export default Dashboard;
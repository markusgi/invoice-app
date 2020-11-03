import React, { Fragment } from 'react';
import DashboardPieChart from '../components/Graphs/DashboardPie';


const Dashboard = () => {

	return (
		<Fragment>
            <h1>Dashboard</h1>
			<DashboardPieChart />
		</Fragment>
	);
};

export default Dashboard;
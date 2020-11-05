import React, { Fragment } from 'react';
import DashboardPieChart from '../components/Graphs/DashboardPie';
import DashboardBarsChart from '../components/Graphs/DashboardBars';
import Navbar from '../components/BaseComponents/Navbar';
import InvoiceTable from '../components/Dashboard/Tables';
import RevenueDashboard from '../components/Dashboard/RevenueWindow';
import KPITable from '../components/Dashboard/KPI';

import { StandardWindow, MainBodyContainer } from '../style/Container';


const Dashboard = () => {

	return (
		<Fragment>
			<Navbar props={"dashboard"} />
			<MainBodyContainer Main>
				<MainBodyContainer LeftColumn>

					<StandardWindow>
						<RevenueDashboard />
					</StandardWindow>

					<StandardWindow>
						<InvoiceTable />
					</StandardWindow>

					<StandardWindow>
						<KPITable />
					</StandardWindow>
					
				</MainBodyContainer>
				<MainBodyContainer RightColumn>

					<StandardWindow>
						<DashboardPieChart />
					</StandardWindow>

					<StandardWindow>
						<DashboardBarsChart />
					</StandardWindow>
				</MainBodyContainer>
			</MainBodyContainer>
		</Fragment>
	);
};

export default Dashboard;
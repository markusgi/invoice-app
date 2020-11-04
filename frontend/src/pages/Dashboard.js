import React, { Fragment } from 'react';
import DashboardPieChart from '../components/Graphs/DashboardPie';
import DashboardBarsChart from '../components/Graphs/DashboardBars';
import Navbar from '../components/BaseComponents/Navbar';
import InvoiceTable from '../components/Tables/InvoiceTable'
import { StandardWindow, MainBodyContainer } from '../style/Container';


const Dashboard = () => {

	return (
		<Fragment>
			<Navbar />
			<MainBodyContainer Main>
				<MainBodyContainer LeftColumn>
					<StandardWindow Revenues>
						<h2>Revenue</h2>
						<div>
							<div className="left">
								<h3>This Year</h3>
								<h3>This Month</h3>	
							</div>
							<div className="right">
								<h3>653'323</h3>
								<h3>92'122</h3>
							</div>
						</div>
					</StandardWindow>
					<StandardWindow Invoices>
						<InvoiceTable />
					</StandardWindow>
				</MainBodyContainer>
				<MainBodyContainer RightColumn>
					<StandardWindow PieChart>
						<h2>Expenses</h2>
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
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import getAllAction from '../store/actions/getAll';
import Spinner from '../components/BaseComponents/Spinner';

import DashboardPieChart from '../components/Graphs/DashboardPie';
import DashboardBarsChart from '../components/Graphs/DashboardBars';
import Navbar from '../components/BaseComponents/Navbar';
import InvoiceTable from '../components/Dashboard/Tables';
import RevenueDashboard from '../components/Dashboard/RevenueWindow';
import KPITable from '../components/Dashboard/KPI';

import { StandardWindow, MainBodyContainer } from '../style/Container';



const Dashboard = () => {
    const dispatch = useDispatch();
	const [AllInfo, setAllInfo] = useState([]);
	
	useEffect(() => {
        const getData = async () => {
            const data = await dispatch(getAllAction());
			setAllInfo(data);
		};
		getData();
    }, [setAllInfo]);


	return (
		<Fragment>
			<Navbar props={"dashboard"} />
			<MainBodyContainer Main>
				<MainBodyContainer LeftColumn>

					<StandardWindow>
						{AllInfo.length !== 0 ?
						<RevenueDashboard props={ AllInfo } />
						:
						<Spinner />
						}	
					</StandardWindow>

					<StandardWindow>
						{AllInfo.length !== 0 ?
						<InvoiceTable props={ AllInfo } />
						:
						<Spinner />
						}	
					</StandardWindow>

					<StandardWindow>
						{AllInfo.length !== 0 ?
						<KPITable props={ AllInfo } />
						:
						<Spinner />
						}	
					</StandardWindow>
					
				</MainBodyContainer>
				<MainBodyContainer RightColumn>

					<StandardWindow>
						{AllInfo.length !== 0 ?
						<DashboardPieChart props={ AllInfo } />
						:
						<Spinner />
						}	
					</StandardWindow>
					
					<StandardWindow>
						{AllInfo.length !== 0 ?
						<DashboardBarsChart props={ AllInfo } />
						:
						<Spinner />
						}	
					</StandardWindow>

				</MainBodyContainer>
			</MainBodyContainer>
		</Fragment>
	);
};

export default Dashboard;
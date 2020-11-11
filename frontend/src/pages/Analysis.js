import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../components/BaseComponents/Navbar';

import FiltersAnalysis from '../components/Analysis/filters';
import GraphsAnalysis from '../components/Analysis/graphs';
import { MainBodyContainer } from '../style/Container';

const Analysis = () => {

	let currentlyActive = useSelector(state => state.subWindow.window);

	return (
		<Fragment>
			<Navbar props={"analysis"} />
			<MainBodyContainer Main>
				{currentlyActive === 'filter' ? <FiltersAnalysis /> : null }
				{currentlyActive === 'graphs' ? <GraphsAnalysis /> : null }
			</MainBodyContainer>
		</Fragment>
	);
};

export default Analysis;
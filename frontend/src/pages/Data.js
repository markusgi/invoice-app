import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/BaseComponents/Navbar';

import NewInvoice from '../components/DataP/newInvoice';
import EditInvoice from '../components/DataP/editInvoice';
import Upload from '../components/DataP/upload';

import { MainBodyContainer } from '../style/Container';


const Data = () => {

	let currentlyActive = useSelector(state => state.subWindow.window)

	return (
		<Fragment>
            <Navbar props={"data"} />
			<MainBodyContainer Main>
				{currentlyActive === 'new' ? <NewInvoice /> : null }
				{currentlyActive === 'edit' ? <EditInvoice /> : null }
				{currentlyActive === 'upload' ? <Upload /> : null }
			</MainBodyContainer>
		</Fragment>
	);
};

export default Data;
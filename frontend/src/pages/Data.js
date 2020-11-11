import React, { Fragment } from 'react';
import Navbar from '../components/BaseComponents/Navbar';

import DataPage from '../components/DataPage';
import { Btn, YellowButton } from '../style/Button';

import { MainBodyContainer, StandardWindow } from '../style/Container';


const Data = () => {

	return (
		<Fragment>
            <Navbar props={"data"} />

			<MainBodyContainer Main>

				<StandardWindow>
					<DataPage />
				</StandardWindow>
				
			</MainBodyContainer>
		</Fragment>
	);
};

export default Data;
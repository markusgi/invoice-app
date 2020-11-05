import React, { Fragment } from 'react';
import Navbar from '../components/BaseComponents/Navbar';

import DataPage from '../components/DataP';
import { Btn, YellowButton } from '../style/Button';

import { MainBodyContainer, StandardWindow } from '../style/Container';


const Data = () => {

	return (
		<Fragment>
            <Navbar props={"data"} />

			<MainBodyContainer Main>
				<StandardWindow>
					<h2>Options</h2>
					<br></br>
					<h3>New Invoice</h3>
					<br></br>
					<h3>New Item</h3>
					<br></br>
            		<h3>New Tag</h3>
					<Btn>
						Somethong
					</Btn>
					<YellowButton>
						else
					</YellowButton>
				</StandardWindow>

				<StandardWindow>
					<DataPage />
				</StandardWindow>
				
			</MainBodyContainer>
		</Fragment>
	);
};

export default Data;
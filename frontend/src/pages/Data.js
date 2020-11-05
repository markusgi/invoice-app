import React, { Fragment } from 'react';
import Navbar from '../components/BaseComponents/Navbar';


const Data = () => {

	return (
		<Fragment>
            <Navbar props={"data"} />
            <h1>a nice title</h1>
		</Fragment>
	);
};

export default Data;
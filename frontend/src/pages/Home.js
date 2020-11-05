import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Home = () => {
	const history = useHistory();

	useEffect(() => {
		history.push("/dashboard")
	}, [history]);

	return (
		<Fragment>
            <h1>a nice title</h1>
		</Fragment>
	);
};

export default Home;

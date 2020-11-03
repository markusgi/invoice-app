import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';


const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/dashboard/' component={Dashboard} />
				<Route exact path='/login/' component={Login} />
			</Switch>
		</Router>
	);
};

export default Routes;

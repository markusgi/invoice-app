import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/BaseComponents/Navbar';

import TagsInfo from '../components/Settings/tagsInfo';
import ResInfo from '../components/Settings/resInfo';
import UserInfo from '../components/Settings/userInfo';

import { MainBodyContainer } from '../style/Container';


const Settings = () => {

	let currentlyActive = useSelector(state => state.subWindow.window)

	return (
		<Fragment>
			<Navbar props={"settings"} />
			<MainBodyContainer Main>
				{currentlyActive === 'tags' ? <TagsInfo /> : null }
				{currentlyActive === 'resInfo' ? <ResInfo /> : null }
				{currentlyActive === 'userInfo' ? <UserInfo /> : null }
			</MainBodyContainer>
		</Fragment>
	);
};

export default Settings;
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/BaseComponents/Navbar';

import TagsInfo from '../components/Settings/tagsInfo';
import ResInfo from '../components/Settings/resInfo';


import { ContainerTop, MainBodyContainer, WhiteBackground } from '../style/Container';


const Settings = () => {

	let currentlyActive = useSelector(state => state.subWindow.window)

	return (
		<Fragment>
			<Navbar props={"settings"} />
			<WhiteBackground>
                <ContainerTop />
            </WhiteBackground>
			<MainBodyContainer Main>
				{currentlyActive === 'tags' ? <TagsInfo /> : null }
				{currentlyActive === 'resInfo' ? <ResInfo /> : null }
			</MainBodyContainer>
		</Fragment>
	);
};

export default Settings;
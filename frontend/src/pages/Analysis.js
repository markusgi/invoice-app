import React, { Fragment, useEffect, useState, Component } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getFilteredAction } from '../store/actions/getFilteredAction';

import Spinner from '../components/BaseComponents/Spinner';

import MainList from '../components/Analysis/MainList';
import Navbar from '../components/BaseComponents/Navbar';

import FiltersWindow from '../components/Analysis/Filters';
import { StandardWindow, MainBodyContainer, TitleDiv } from '../style/Container';




const Analysis = () => {
	const dispatch = useDispatch();
	const [Filter, setFilter] = useState({
		timeFrameStart: '12',
		timeFrameEnd: '0',
		tag: null,
		articleName: null,
		invoiceNr: null,
	});
	const [filteredData, setfilteredData] = useState([]);
	const token = useSelector(state => state.user.token)


	useEffect(() => {
        const getData = async () => {
            const data = await dispatch(getFilteredAction(Filter.timeFrameStart, Filter.timeFrameEnd, token));
			setfilteredData(data);
		};
		getData();
    }, [Filter, dispatch]);

	return (
		<Fragment>
			<Navbar props={"analysis"} />

			<MainBodyContainer Main>
				<MainBodyContainer LeftColumn>

					<StandardWindow>
						<h2>Filters</h2>
						<TitleDiv>
							<div className="leftColumn">
								<FiltersWindow />
							</div>

						</TitleDiv>
					</StandardWindow>
				</MainBodyContainer>

				<MainBodyContainer RightColumn>

					<StandardWindow>
						{Filter.length !== 0 ?
						<MainList props/>
						:
						<Spinner />
						}	
					</StandardWindow>

				</MainBodyContainer>
			</MainBodyContainer>
		</Fragment>
	);
};

export default Analysis;
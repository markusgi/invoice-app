import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { timeAction, subWindowAction } from '../../../store/actions/actionTypes';
import getDate from '../../../helper/date_helper';

import { Link } from 'react-router-dom';
import { NavbarWrapper, NavbarTopWrapper, NavbarLeft, NavbarTop, BtnsWrapper, NavbarBottom } from './style';
import logo from '../../../assets/images/logo-5aid-white.png';
import searchIcon from '../../../assets/images/searchIcon.png';
import bellIcon from '../../../assets/images/bellIcon.png';
import userIcon from '../../../assets/images/userIcon.png';

import DateModal from './modalDate';

const Navbar = ( {props} ) => {
    const [active, setActive] = useState(props);
    const [activeSub, setActiveSub] = useState('12');
    const [ activeModal, setActiveModal ] = useState(false);
    const [ activeSubWindow, setActiveSubWindow ] = useState(useSelector(state => state.subWindow.window));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(subWindowAction(activeSubWindow));
    }, [activeSubWindow, activeSub, dispatch]);


	useEffect(() => {
        dispatch(timeAction(getDate(activeSub), getDate('0')));
    }, [activeSub, dispatch]);


	return (
		<Fragment>
			<NavbarWrapper>
                <NavbarTopWrapper>
                    <NavbarLeft>
                        <Link onClick={() => setActive('dashboard')} to='/dashboard'>
                            <img className='logo' src={logo} alt='logo' />
                        </Link>
                    </NavbarLeft>
                    <NavbarTop>
                        <Link
                            className={active === 'dashboard' ? 'dashboardLink active' : 'dashboardLink'}
                            onClick={() => setActive('dashboard')}
                            to='/dashboard'
                        >
                            Dashboard
                        </Link>
                        <Link
                            className={active === 'data' ? 'dataLink active' : 'dataLink'}
                            onClick={() => {
                                setActive('data')
                                setActiveSubWindow('new')}}
                            to='/data'
                        >
                            Data
                        </Link>
                        <Link
                            className={active === 'analysis' ? 'analysisLink active' : 'analysisLink'}
                            onClick={() => {
                                setActiveSubWindow('filter')
                                setActive('analysis')
                            }}
                            to='/analysis'
                        >
                            Analysis
                        </Link>
                        <Link
                            className={active === 'settings' ? 'settingsLink active' : 'settingsLink'}
                            onClick={() => {
                                setActiveSubWindow('userInfo')
                                setActive('settings')
                            }}
                            to='/settings'
                        >
                            Settings
                        </Link>
                        <BtnsWrapper>
                            <Link to='#'>
                                <img className="Icon" src={searchIcon} alt="" />
                            </Link>
                            <Link to='#'>
                                <img className="Icon" src={bellIcon} alt="" />
                            </Link>
                            <Link to='#'>
                                <img className="Icon" src={userIcon} alt="" />
                            </Link>
                        </BtnsWrapper>
                    </NavbarTop>

                </NavbarTopWrapper>
				
                {active === 'dashboard' ? 
                <NavbarBottom>
                    <Link
						className={activeSub === '12' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActiveSub('12')}
					>
						Year
					</Link>
                    <Link
						className={activeSub === '6' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActiveSub('6')}
					>
						6 Months
					</Link>
                    <Link
						className={activeSub === '3' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActiveSub('3')}
					>
						3 Months
					</Link>
                    <Link
						className={activeSub === '2' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActiveSub('2')}
					>
						Last Month
					</Link>
                    <Link
						className={activeSub === '1' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActiveSub('1')}
					>
						This Month
					</Link>
                    <Link
						className={activeSubWindow === 'from' ? 'timeLink active' : 'timeLink'}
						onClick={() => {
                            setActiveModal(!activeModal)
                            setActiveSubWindow('from')
                            setActiveSub('from')
                        }}
					>
						From - To
					</Link>
                </NavbarBottom>
                : null }

                {activeModal ? <DateModal /> : null}
                
                {active === 'data' ? 
                    <NavbarBottom>
                        <Link
                            className={activeSubWindow === 'new' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSubWindow('new')}
                        >
                            New Invoice
                        </Link>
                        <Link
                            className={activeSubWindow === 'edit' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSubWindow('edit')}
                        >
                            Edit
                        </Link>
                        <Link
                            className={activeSubWindow === 'upload' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSubWindow('upload')}
                        >
                            Upload
                        </Link>
                    </NavbarBottom>
                    : null }

                {active === 'analysis' ? 
                    <NavbarBottom>
                        <Link
                            className={activeSubWindow === 'filter' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSubWindow('filter')}
                        >
                            Filter
                        </Link>
                        <Link
                            className={activeSubWindow === 'graphs' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSubWindow('graphs')}
                        >
                            Graphs
                        </Link>
                    </NavbarBottom>
                    : null }

                {active === 'settings' ?
                    <NavbarBottom>
                        <Link
                            className={activeSubWindow === 'userInfo' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSubWindow('userInfo')}
                        >
                            User Profile
                        </Link>
                        <Link
                            className={activeSubWindow === 'resInfo' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSubWindow('resInfo')}
                        >
                            Restaurant Profile
                        </Link>
                        <Link
                            className={activeSubWindow === 'tags' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSubWindow('tags')}
                        >
                            Tags
                        </Link>
                    </NavbarBottom>
                    : null }    
			</NavbarWrapper>
		</Fragment>
	);
};

export default Navbar;
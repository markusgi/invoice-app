import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarWrapper, NavbarTopWrapper, NavbarLeft, NavbarTop, BtnsWrapper, NavbarBottom } from './style';
import logo from '../../../assets/images/logo-5aid-white.png';
import searchIcon from '../../../assets/images/searchIcon.png';
import bellIcon from '../../../assets/images/bellIcon.png';
import userIcon from '../../../assets/images/userIcon.png';

const Navbar = ( {props} ) => {
    const [active, setActive] = useState(props);
    const [activeSub, setActiveSub] = useState('year');

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
                            onClick={() => setActive('data')}
                            to='/data'
                        >
                            Data
                        </Link>
                        <Link
                            className={active === 'analysis' ? 'analysisLink active' : 'analysisLink'}
                            onClick={() => setActive('analysis')}
                            to='/analysis'
                        >
                            Analysis
                        </Link>
                        <Link
                            className={active === 'settings' ? 'settingsLink active' : 'settingsLink'}
                            onClick={() => setActive('settings')}
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
						className={activeSub === 'year' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActiveSub('year')}
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
						className={activeSub === '1' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActiveSub('1')}
					>
						Last Month
					</Link>
                    <Link
						className={activeSub === '0' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActiveSub('0')}
					>
						This Month
					</Link>
                    <Link
						className={activeSub === 'from' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActiveSub('from')}
					>
						From - To
					</Link>
                </NavbarBottom>
                : null }
                
                {active === 'data' ? 
                    <NavbarBottom>
                        <Link
                            className={activeSub === 'new' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSub('new')}
                        >
                            New Invoice
                        </Link>
                        <Link
                            className={activeSub === '6' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSub('6')}
                        >
                            Import
                        </Link>
                        <Link
                            className={activeSub === '3' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSub('3')}
                        >
                            Edit
                        </Link>
                    </NavbarBottom>
                    : null }

                {active === 'analysis' ? 
                    <NavbarBottom>
                        <Link
                            className={activeSub === 'filter' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSub('filter')}
                        >
                            Filter
                        </Link>
                        <Link
                            className={activeSub === 'graph' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSub('graph')}
                        >
                            Graphs
                        </Link>
                    </NavbarBottom>
                    : null }

                {active === 'settings' ?
                    <NavbarBottom>
                        <Link
                            className={activeSub === 'user' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSub('user')}
                        >
                            User Profile
                        </Link>
                        <Link
                            className={activeSub === 'restaurant' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSub('restaurant')}
                        >
                            Restaurant Profile
                        </Link>
                        <Link
                            className={activeSub === 'tags' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSub('tags')}
                        >
                            Tags
                        </Link>
                        <Link
                            className={activeSub === 'info' ? 'timeLink active' : 'timeLink'}
                            onClick={() => setActiveSub('info')}
                        >
                            Information
                        </Link>
                    </NavbarBottom>
                    : null }    
			</NavbarWrapper>
		</Fragment>
	);
};

export default Navbar;
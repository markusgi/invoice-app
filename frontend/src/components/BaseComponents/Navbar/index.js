import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarWrapper, NavbarTopWrapper, NavbarLeft, NavbarTop, BtnsWrapper, NavbarBottom } from './style';
import logo from '../../../assets/images/logo-5aid-white.png';
import searchIcon from '../../../assets/images/searchIcon.png';
import bellIcon from '../../../assets/images/bellIcon.png';
import userIcon from '../../../assets/images/userIcon.png';

const Navbar = ( {props} ) => {
	const [active, setActive] = useState(props);

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
						className={active === 'home' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActive('home')}
						to='/'
					>
						Year
					</Link>
                    <Link
						className={active === 'home' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActive('home')}
						to='/'
					>
						6 Months
					</Link>
                    <Link
						className={active === 'home' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActive('home')}
						to='/'
					>
						3 Months
					</Link>
                    <Link
						className={active === 'home' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActive('home')}
						to='/'
					>
						Last Month
					</Link>
                    <Link
						className={active === 'home' ? 'timeLink active' : 'timeLink'}
						onClick={() => setActive('home')}
						to='/'
					>
						From - To
					</Link>
                </NavbarBottom>
                :
                <p>Not in dashboard</p>
                        }
			</NavbarWrapper>
		</Fragment>
	);
};

export default Navbar;
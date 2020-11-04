import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarWrapper, NavbarTopWrapper, NavbarLeft, NavbarTop, BtnsWrapper, NavbarBottom } from './style';
import logo from '../../../assets/images/logo-5aid-white.png';
import searchIcon from '../../../assets/images/searchIcon.png';
import bellIcon from '../../../assets/images/bellIcon.png';
import userIcon from '../../../assets/images/userIcon.png';

const Navbar = () => {
	const [active, setActive] = useState('dashboard');

	return (
		<Fragment>
			<NavbarWrapper>
                <NavbarTopWrapper>
                    <NavbarLeft>
                        <Link to='/dashboard'>
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
                            className={active === 'search' ? 'searchLink active' : 'searchLink'}
                            onClick={() => setActive('search')}
                            to='/data'
                        >
                            Data
                        </Link>
                        <Link
                            className={
                                active === 'profile' ? 'profileLink active' : 'profileLink'
                            }
                            onClick={() => setActive('profile')}
                            to='/analysis'
                        >
                            Analysis
                        </Link>
                        <Link
                            className={
                                active === 'profile' ? 'profileLink active' : 'profileLink'
                            }
                            onClick={() => setActive('profile')}
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
			</NavbarWrapper>
		</Fragment>
	);
};

export default Navbar;
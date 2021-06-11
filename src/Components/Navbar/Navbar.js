import React from 'react'
import '../../Styles/Navbar.css';
import Logo from '../../Assets/logo-white_1_25.png';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='nav'>

            {/* Company logo and name */}
            <NavLink to='/' className='navLink'>
                <img src={Logo} alt='Logo' className='navLogo'/>
            </NavLink>
            <FaBars  className='mobileMenu'/>
            
            {/* Menu items */}
            <div className='navMenu'>
                <div className='dropdown'>
                    <span className="dropbtn">Products</span>
                    <div className="dropdown-content">
                        <NavLink to='/galaxyswap' className='navLink'>
                            <span>GalaxySwap</span>
                        </NavLink>
                        <NavLink to='/nebulalaunchpad' className='navLink'>
                            <span>Nebula Launchpad</span>
                        </NavLink>
                        <NavLink to='/galaxyuniverse' className='navLink'>
                            <span>Galaxy Universe</span>
                        </NavLink>
                        <NavLink to='/safegalaxy' className='navLink'>
                            <span>SafeGalaxy</span>
                        </NavLink>
                    </div>
                </div>
                
                <div className='dropdown'>
                    <span className="dropbtn">Developers</span>
                    <div className="dropdown-content">
                        <NavLink to='/documentation' className='navLink'>
                            <span>Documentation</span>
                        </NavLink>
                        <NavLink to='/whitepaperv1' className='navLink'>
                            <span>Whitepaper V1</span>
                        </NavLink>
                        <NavLink to='/audit' className='navLink'>
                            <span>Audit</span>
                        </NavLink>
                    </div>
                </div>

                <div className='dropdown'>
                    <span className="dropbtn">Community</span>
                    <div className="dropdown-content">
                        <NavLink to='/discord' className='navLink'>
                            <span>Discord</span>
                        </NavLink>
                        <NavLink to='/telegram' className='navLink'>
                            <span>Telegram</span>
                        </NavLink>
                        <NavLink to='/twitter' className='navLink'>
                            <span>Twitter</span>
                        </NavLink>
                    </div>
                </div>

                <div className='dropdown'>
                    <span className="dropbtn">About</span>
                    <div className="dropdown-content">
                        <NavLink to='/aboutus' className='navLink'>
                            <span>About Us</span>
                        </NavLink>
                        <NavLink to='/meetourteam' className='navLink'>
                            <span>Meet Our Team</span>
                        </NavLink>
                        <NavLink to='/jobs' className='navLink'>
                            <span>Jobs</span>
                        </NavLink>
                        <NavLink to='/faq' className='navLink'>
                            <span>FAQ</span>
                        </NavLink>
                        <NavLink to='/presskit' className='navLink'>
                            <span>Presskit</span>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className='navBtn'>
                <NavLink to='/galaxyswap' className='navBtnLink'>
                        <span className='navBold'>Use&nbsp;</span><span className='navBold'>Galaxy</span><span className='normal'>Swap</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar

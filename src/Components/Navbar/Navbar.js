import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import '../../Styles/Navbar.css';

const Navbar = () => {
    return (
        <Nav>

            {/* Company logo and name */}
            <NavLink to='/'>
                <span className='galaxy'>Galaxy</span>
                <span className='protocol'>protocol</span>
            </NavLink>
            <Bars />
            
            {/* Menu items */}
            <NavMenu>
                <div className='dropdown'>
                    <span className="dropbtn">Products</span>
                    <div className="dropdown-content">
                        <NavLink to='/galaxyswap'>
                            <span>GalaxySwap</span>
                        </NavLink>
                        <NavLink to='/nebulalaunchpad'>
                            <span>Nebula Launchpad</span>
                        </NavLink>
                        <NavLink to='/galaxyuniverse'>
                            <span>Galaxy Universe</span>
                        </NavLink>
                        <NavLink to='/safegalaxy'>
                            <span>SafeGalaxy</span>
                        </NavLink>
                    </div>
                </div>
                
                <div className='dropdown'>
                    <span className="dropbtn">Developers</span>
                    <div className="dropdown-content">
                        <NavLink to='/documentation'>
                            <span>Documentation</span>
                        </NavLink>
                        <NavLink to='/whitepaperv1'>
                            <span>Whitepaper V1</span>
                        </NavLink>
                        <NavLink to='/audit'>
                            <span>Audit</span>
                        </NavLink>
                    </div>
                </div>

                <div className='dropdown'>
                    <span className="dropbtn">Community</span>
                    <div className="dropdown-content">
                        <NavLink to='/discord'>
                            <span>Discord</span>
                        </NavLink>
                        <NavLink to='/telegram'>
                            <span>Telegram</span>
                        </NavLink>
                        <NavLink to='/twitter'>
                            <span>Twitter</span>
                        </NavLink>
                    </div>
                </div>

                <div className='dropdown'>
                    <span className="dropbtn">About</span>
                    <div className="dropdown-content">
                        <NavLink to='/aboutus'>
                            <span>About Us</span>
                        </NavLink>
                        <NavLink to='/meetourteam'>
                            <span>Meet Our Team</span>
                        </NavLink>
                        <NavLink to='/jobs'>
                            <span>Jobs</span>
                        </NavLink>
                        <NavLink to='/faq'>
                            <span>FAQ</span>
                        </NavLink>
                        <NavLink to='/presskit'>
                            <span>Presskit</span>
                        </NavLink>
                    </div>
                </div>
            </NavMenu>

            <NavBtn>
                <NavBtnLink to='/galaxyswap'>
                    <span className='navBold'>Use&nbsp;</span><span className='navBold'>Galaxy</span><span className='normal'>Swap</span>
                </NavBtnLink>
            </NavBtn>
        </Nav>
    )
}

export default Navbar

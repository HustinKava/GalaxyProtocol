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
                        <NavLink to='/galaxyswap' activeStyle>
                            <span>GalaxySwap</span>
                        </NavLink>
                        <NavLink to='/nebulalaunchpad' activeStyle>
                            <span>Nebula Launchpad</span>
                        </NavLink>
                        <NavLink to='/galaxyuniverse' activeStyle>
                            <span>Galaxy Universe</span>
                        </NavLink>
                        <NavLink to='/safegalaxy' activeStyle>
                            <span>SafeGalaxy</span>
                        </NavLink>
                    </div>
                </div>
                
                <div className='dropdown'>
                    <span className="dropbtn">Developers</span>
                    <div className="dropdown-content">
                        <NavLink to='/documentation' activeStyle>
                            <span>Documentation</span>
                        </NavLink>
                        <NavLink to='/whitepaperv1' activeStyle>
                            <span>Whitepaper V1</span>
                        </NavLink>
                        <NavLink to='/audit' activeStyle>
                            <span>Audit</span>
                        </NavLink>
                    </div>
                </div>

                <div className='dropdown'>
                    <span className="dropbtn">Community</span>
                    <div className="dropdown-content">
                        <NavLink to='/discord' activeStyle>
                            <span>Discord</span>
                        </NavLink>
                        <NavLink to='/telegram' activeStyle>
                            <span>Telegram</span>
                        </NavLink>
                        <NavLink to='/twitter' activeStyle>
                            <span>Twitter</span>
                        </NavLink>
                    </div>
                </div>

                <div className='dropdown'>
                    <span className="dropbtn">About</span>
                    <div className="dropdown-content">
                        <NavLink to='/aboutus' activeStyle>
                            <span>About Us</span>
                        </NavLink>
                        <NavLink to='/meetourteam' activeStyle>
                            <span>Meet Our Team</span>
                        </NavLink>
                        <NavLink to='/jobs' activeStyle>
                            <span>Jobs</span>
                        </NavLink>
                        <NavLink to='/faq' activeStyle>
                            <span>FAQ</span>
                        </NavLink>
                        <NavLink to='/presskit' activeStyle>
                            <span>Presskit</span>
                        </NavLink>
                    </div>
                </div>
            </NavMenu>

            <NavBtn>
                <NavBtnLink to='/galaxyswap'>
                    <span className='bold'>Use&nbsp;</span><span className='bold'>Galaxy</span><span className='normal'>Swap</span>
                </NavBtnLink>
            </NavBtn>
        </Nav>
    )
}

export default Navbar

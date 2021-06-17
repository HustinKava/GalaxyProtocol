import React from 'react'
import {SidebarContainer} from './SidebarElements';
import { FaTimes } from 'react-icons/fa';
import Logo from '../../Assets/logo-white_1_25.png';
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import '../../Styles/Sidebar.css';

function Sidebar( {isOpen, toggle} ) {
    return (

        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            
            {/* Close button */}
            <div className='icon' onClick={toggle}>
                <FaTimes className='closeBtn' />
            </div>
            
           {/* Sidebar logo */}
            <img src={Logo} alt='Logo' className='sidebarLogo'/>

            {/* Products */}
            <p className='sidebarHeader'>Products</p>

            <div>
                {/* <NavLink to='/galaxyswap' className='sidebarLinks'> */}
                <Link className='sidebarLinks'>
                    <p className='sidebarText'>GalaxySwap</p>
                </Link>
                {/* </NavLink> */}
                <Link to='/#footerUniversity' className='sidebarLinks'>
                    <p className='sidebarText'>Galaxy University</p>
                </Link>
                {/* <NavLink to='/nebulalaunchpad' className='sidebarLinks'> */}
                <Link className='sidebarLinks'>
                    <p className='sidebarText'>Nebula Launchpad</p>
                </Link>
                {/* </NavLink> */}
                {/* <NavLink to='/galaxystation' className='sidebarLinks'> */}
                <Link className='sidebarLinks'>
                    <p className='sidebarText'>Galaxy Station</p>
                </Link>
                {/* </NavLink> */}
                <Link to='/#footerMerchandise' className='sidebarLinks'>
                    <p className='sidebarText'>Galaxy Merchandise</p>
                </Link>
            </div>

            {/* Developers */}
            <p className='sidebarHeader'>Developers</p>

            <div>
                <NavLink to='/documentation' className='sidebarLinks'>
                    <p className='sidebarText'>Documentation</p>
                </NavLink>
                {/* <NavLink to='/whitepaperv1' className='sidebarLinks'> */}
                <Link className='sidebarLinks'>
                    <p className='sidebarText'>Whitepaper V1</p>
                </Link>
                {/* </NavLink> */}
                {/* <NavLink to='/audit' className='sidebarLinks'> */}
                <Link className='sidebarLinks'>
                    <p className='sidebarText'>Audit</p>
                </Link>
                {/* </NavLink> */}
                {/* <NavLink to='/partnershipoverview' className='sidebarLinks'> */}
                <Link className='sidebarLinks'>
                    <p className='sidebarText'>Partnership Overview</p>
                </Link>
                {/* </NavLink> */}
                {/* <NavLink to='/term&conditions' className='sidebarLinks'> */}
                <Link className='sidebarLinks'>
                    <p className='sidebarText'>Terms & Conditions</p>
                </Link>
                {/* </NavLink> */}
                {/* <NavLink to='/privacy&policy' className='sidebarLinks'> */}
                <Link className='sidebarLinks'>
                    <p className='sidebarText'>Privacy & Policy</p>
                </Link>
                {/* </NavLink> */}
            </div>

            {/* About */}
            <p className='sidebarHeader'>About</p>

            <div>
                {/* <NavLink to='/aboutus' className='sidebarLinks'> */}
                <Link className='sidebarLinks'>
                    <p className='sidebarText'>About Us</p>
                </Link>
                {/* </NavLink> */}
                {/* <NavLink to='/meetourteam' className='sidebarLinks'> */}
                <Link className='sidebarLinks'>
                    <p className='sidebarText'>Meet Our Team</p>
                </Link>
                {/* </NavLink> */}
                <NavLink to='/jobs' className='sidebarLinks'>
                    <p className='sidebarText'>Jobs</p>
                </NavLink>
                <NavLink to='/faq' className='sidebarLinks'>
                    <p className='sidebarText'>FAQ</p>
                </NavLink>
                {/* <NavLink to='/presskit' className='sidebarLinks'> */}
                <Link className='sidebarLinks'>
                    <p className='sidebarText'>Presskit</p>
                </Link>
                {/* </NavLink> */}
            </div>

        </SidebarContainer>
    )
}

export default Sidebar;

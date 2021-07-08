import React from 'react';
import GalaxyProtocol from '../Assets/logos/GP-LOGO-COLOR.png';
import Arrow from '../Assets/presskit/Arrow-button.png';
import ProtocolWhite from '../Assets/presskit/protocol-white.png';
import ProtocolBlack from '../Assets/presskit/protocol-black.png';
import ProtocolColor from '../Assets/presskit/protocol-color.png';
import SwapWhite from '../Assets/presskit/swap-white.png';
import SwapWhiteSvg from '../Assets/presskit/swap-white-svg.svg'
import SwapBlack from '../Assets/presskit/swap-black.png';
import SwapBlackSvg from '../Assets/presskit/swap-black-svg.svg';
import SwapColor from '../Assets/presskit/swap-color.png';
import Kal from '../Assets/team/Kal-tongue-out.png';
import GalaxyToken from '../Assets/presskit/galaxy-token.png';
import GalaxiaToken3D from '../Assets/presskit/Galaxia-Token-3D.zip';
import KalIn3D from '../Assets/presskit/KAL-in-3D.zip';

function Presskit() {
    return (
        <div className="mainContainer preskit-docs-container">
            <img className='presskit-image' src={GalaxyProtocol} alt='Galaxy Protocol'/>
            <p className='preskit-text'>Please do not change, edit, deform or recolour the SafeGalaxy logo. It’s OK to scale and adjust the logos as long the original aspect ratio is maintained. This way you can use our logo on your website, socials or any other digital platform.</p>
            <div className='presskit-discover'>
                <h3>Discover our brand.</h3>
                <img className='presskit-discover__image' src={Arrow} alt='arrow'/>
                <h3 className='presskit-discover__assets'>GalaxyProtocol assets</h3>
            </div>

            <div className='presskit-flex'>
                <div>
                    <div className='presskit-flex__1'>
                        <a href = {ProtocolWhite} target = "_blank" rel="noreferrer">
                            <img className='presskit-flex__image' src={ProtocolWhite} alt='ProtocolWhite'/>                
                        </a>
                    </div>
                    <p className='presskit-flex__text'>GalaxyProtocol logo white (PNG)</p>
                </div>

                <div>
                    <div className='presskit-flex__1'>
                        <img className='presskit-flex__image' src={ProtocolWhite} alt='ProtocolWhite'/>
                    </div>
                    <p className='presskit-flex__text'>GalaxyProtocol logo white (SVG, scalable)</p>
                </div>

                <div>
                    <div className='presskit-flex__2'>
                        <a href = {ProtocolBlack} target = "_blank" rel="noreferrer">
                            <img className='presskit-flex__image' src={ProtocolBlack} alt='ProtocolBlack'/>
                        </a>
                    </div>
                    <p className='presskit-flex__text'>GalaxyProtocol logo black (PNG)</p>
                </div>

                <div>
                    <div className='presskit-flex__2'>
                        <img className='presskit-flex__image' src={ProtocolBlack} alt='ProtocolBlack'/>
                    </div>
                    <p className='presskit-flex__text'>GalaxyProtocol logo black (SVG, scalable)</p>
                </div>

                <div>
                    <div className='presskit-flex__1'>
                        <a href = {ProtocolColor} target = "_blank" rel="noreferrer">
                            <img className='presskit-flex__image' src={ProtocolColor} alt='ProtocolColor'/>
                        </a>
                    </div>
                    <p className='presskit-flex__text'>GalaxyProtocol logo color (PNG)</p>
                </div>

                <div>
                    <div className='presskit-flex__1'>
                        <img className='presskit-flex__image' src={ProtocolColor} alt='ProtocolColor'/>
                    </div>
                    <p className='presskit-flex__text'>GalaxyProtocol logo color (SVG, scalable)</p>
                </div>
            </div>

            <h3 className='presskit-discover__assets presskit-color'>Color scheme GalaxyProtocol</h3>

            <h3 className='presskit-discover__assets presskit-color'>GalaxySwap assets</h3>

            <div className='presskit-flex'>
                <div>
                    <div className='presskit-flex__1'>
                        <a href = {SwapWhite} target = "_blank" rel="noreferrer">
                            <img className='presskit-flex__image' src={SwapWhite} alt='SwapWhite'/>
                        </a>
                    </div>
                    <p className='presskit-flex__text'>GalaxySwap logo white (PNG)</p>
                </div>

                <div>
                    <div className='presskit-flex__1'>
                        <a href = {SwapWhiteSvg} target = "_blank" rel="noreferrer">
                            <img className='presskit-flex__image' src={SwapWhite} alt='Kal'/>
                        </a>
                    </div>
                    <p className='presskit-flex__text'>GalaxySwap logo white (SVG, scalable)</p>
                </div>

                <div>
                    <div className='presskit-flex__2'>
                        <a href = {SwapBlack} target = "_blank" rel="noreferrer">
                            <img className='presskit-flex__image' src={SwapBlack} alt='SwapBlack'/>
                        </a>
                    </div>
                    <p className='presskit-flex__text'>GalaxySwap logo black (PNG)</p>
                </div>

                <div>
                    <div className='presskit-flex__2'>
                        <a href = {SwapBlackSvg} target = "_blank" rel="noreferrer">
                            <img className='presskit-flex__image' src={SwapBlack} alt='Kal'/>
                        </a>
                    </div>
                    <p className='presskit-flex__text'>GalaxySwap logo black (SVG, scalable)</p>
                </div>

                <div>
                    <div className='presskit-flex__1'>
                        <a href = {SwapColor} target = "_blank" rel="noreferrer">
                            <img className='presskit-flex__image' src={SwapColor} alt='SwapColor'/>
                        </a>
                    </div>
                    <p className='presskit-flex__text'>GalaxySwap logo color (PNG)</p>
                </div>

                <div>
                    <div className='presskit-flex__1'>
                        <img className='presskit-flex__image' src={SwapColor} alt='SwapColor'/>
                    </div>
                    <p className='presskit-flex__text'>GalaxySwap logo color (SVG, scalable)</p>
                </div>

                <div>
                    <div className='presskit-flex__1'>
                        <a href = {KalIn3D} target = "_blank" rel="noreferrer">
                            <img className='presskit-flex__image presskit-kal' src={Kal} alt='Kal'/>
                        </a>
                    </div>
                    <p className='presskit-flex__text presskit-kal'>Kal the Alien files (PNG)</p>
                </div>

                <div>
                    <div className='presskit-flex__1'>
                        <a href = {GalaxiaToken3D} target = "_blank" rel="noreferrer">
                            <img className='presskit-flex__image presskit-token' src={GalaxyToken} alt='Token'/>
                        </a>
                    </div>
                    <p className='presskit-flex__text'>GALAXIA token files (PNG)</p>
                </div>
            </div>

            <h3 className='presskit-discover__assets presskit-color'>Color scheme GalaxySwap</h3>

        </div>
    )
}

export default Presskit;

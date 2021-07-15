import React from 'react';

import GradientFilterBtn from './GradientFilterBtn'
//Importing filter button socialIcons
import cryptoIcon from '../../Assets/university/cryptoIcon.png'
import blockchainIcon from '../../Assets/university/blockchainIcon.png'
import investingIcon from '../../Assets/university/investingIcon.png'
// import tradingIcon from '../../Assets/university/tradingIcon.png'

const GradientBar = ({handler, articleFilters}) => {
    return (
        <div className="gradientBar">
            <div className="gradientBarContents">

                <div className="barTitle">
                    <p className="barTitle--1">Quick
                        <span className="barTitle--2"> Learn:</span>
                    </p>
                </div>

                {/* Filter titles must go in an array to sort the styling within the next component */}
                <div className="filterOptionsContainer">
                    {/* <div className="filterBtn">
                        <p className="filterBtn__txt1">Knowledge</p>
                        <p className="filterBtn__txt2">Station</p>
                    </div> */}
                    <GradientFilterBtn
                        filterType={['DeFi']}
                        icon={cryptoIcon}  
                        handler={handler}
                        articleFilters={articleFilters}
                        />
                    <GradientFilterBtn
                        filterType={['Blockchain']}
                        icon={blockchainIcon} 
                        handler={handler}
                        articleFilters={articleFilters}
                        />
                    {/* <GradientFilterBtn
                        filterType={['Trading']}
                        icon={tradingIcon} 
                        handler={handler}
                        articleFilters={articleFilters}
                        /> */}
                    <GradientFilterBtn
                        filterType={['Finance']}
                        icon={investingIcon} 
                        handler={handler}
                        articleFilters={articleFilters}
                        />
                </div>
            </div>
        </div>
    );
};

export default GradientBar;

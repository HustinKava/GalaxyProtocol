import React from 'react';
import '../../Styles/BannersGlobal.css';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Newsletter from '../../Components/Home/Newsletter';
import Banner3 from './Banner3';
import Banner4 from './Banner4';
import Banner5 from './Banner5';

const Banners = () => {
    return (
        <div>
            {/* GalaxySwap */}
            <Banner1/>

            {/* GalaxyUniversity */}
            <Banner2/>

            {/* Newsletter Subscribe */}
            <Newsletter />

            {/* GalaxyMerch */}
            <Banner3/>

            {/* Telegram */}
            <Banner4/>

            {/* Discord */}
            <Banner5/>
        </div>
    )
};

export default Banners;

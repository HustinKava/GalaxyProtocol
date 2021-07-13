import React from 'react';

const GradientFilterBtn = ({ filterType, icon, handler, articleFilters }) => {

    function sendFilterType(){
        handler(filterType)
    }


    return (
        <div key={filterType} className={articleFilters.includes(filterType[0].toLowerCase()) ? 'filterBtnSelected' : 'filterBtn'} onClick={sendFilterType}>

            {filterType.map((word, index) => {
                return (
                    <>
                        <p key={index} className="filterBtn__txt1 ">{word}</p>
                        <img className="filterBtnIcon" src={icon} alt="filter icon"></img>
                    </>
                )
            })}
        </div>
    );
};

export default GradientFilterBtn;

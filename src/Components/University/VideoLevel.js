import React from 'react';



function VideoLevel(level) {

    //Dynamic level population and color attribute based on level
    level = "Beginner";
    let levelStyle;

    if(level === "Beginner") {
        levelStyle = "video-level-beginner"

    } else if (level === "Intermediate"){
        levelStyle = "video-level-intermediate"
        
    } else {
        levelStyle = "video-level-advanced"
    }

    return <div className={levelStyle}> &bull; {level}</div>
}

export default VideoLevel;

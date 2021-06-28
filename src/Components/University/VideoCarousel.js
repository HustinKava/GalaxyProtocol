import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from '../../Assets/left-arrow.png';
import RightArrow from '../../Assets/right-arrow.png';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa'; 
require('dotenv').config()

function VideoCarousel() {
    const [data, setData] = useState([]);

    const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE;

    const SlickButtonFix = ({currentSlide, slideCount, children, ...props}) => (
        <div {...props}>{children}</div>
    );

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: (
            <SlickButtonFix>
                <img src={LeftArrow} alt='left-arrow' className='arrows' />               
            </SlickButtonFix>
        ),
        nextArrow: (
            <SlickButtonFix>     
                <img src={RightArrow} alt='right-arrow' className='arrows'/>             
            </SlickButtonFix>
        ),
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // }
          ]
    };

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=UC4VeQJeQNWt_F7DuXRq6hLQ&part=snippet,id&order=date&maxResults=20`)
            .then(res => {
                setData([res.data])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='carousel-background'>
                <div className='carousel-recent-videos'>
                    <span className='carousel-thin'>Recent&nbsp;</span>
                    <span className='carousel-bold'>Videos</span>
                </div>
                <div className='carousel-line-padding'/>
                <div className='carousel-container'>
                    <Slider {...settings}>

                        {data.length === 0 ? <FaSpinner icon="spinner" className="spinner" /> : data[0].items.filter((item) => item.id.kind === 'youtube#video').map(item => (
                            <div key={item.id.videoId} className="carousel-image-container">
                                <img src={item.snippet.thumbnails.high.url} alt={item.id.videoId} className="carousel-image"/>
                                <div className="carousel-overlay">
                                    <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`} target="_blank" rel="noopener noreferrer">
                                        <div className="carousel-text">{item.snippet.title}</div>
                                    </a>
                                </div>
                            </div>
                        ))}

                    </Slider>
                </div>
                <div className='carousel-all-videos-container'>
                    <div className='carousel-all-videos'>
                        <span className='carousel-thin'>More&nbsp;</span>
                        <span className='carousel-bold'>Videos</span>
                    </div>
                </div>
            <div className='carousel-line-padding'/>

        </div>
    )
}

export default VideoCarousel;

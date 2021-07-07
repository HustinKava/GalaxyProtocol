import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftArrow from '../../Assets/customButtons/left-arrow.png';
import RightArrow from '../../Assets/customButtons/right-arrow.png';
import { FaSpinner } from 'react-icons/fa';
import youtube from '../../apis/youtube';

function VideoCarousel() {
  const [data, setData] = useState([]);

  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
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
        <img src={LeftArrow} alt="left-arrow" className="arrows" />
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix>
        <img src={RightArrow} alt="right-arrow" className="arrows" />
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ],
  };

  useEffect(() => {
    youtube
      .get('/playlistItems')
      .then((res) => setData([res.data]))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const YoutubeLink = ({ children, item }) => {
    return (
      <a
        href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  };

  return (
    <div className="carousel-background">
      <div className="carousel-recent-videos">
        <span className="carousel-thin">Recent&nbsp;</span>
        <span className="carousel-bold">Videos</span>
      </div>
      <div className="carousel-line-padding" />
      <div className="carousel-container">
        {data.length === 0 ? (
          <div className="spinner-container">
            <FaSpinner icon="spinner" className="spinner" />
          </div>
        ) : (
          <Slider {...settings}>
            {data[0].items.map((item) => (
              <div key={item.id} className="carousel-image-container">
                <YoutubeLink item={item}>
                  <img
                    src={item.snippet.thumbnails.high.url}
                    alt={item.snippet.title}
                    className="carousel-image"
                  />
                  <div className="carousel-overlay">
                    <div className="carousel-text">{item.snippet.title}</div>
                  </div>
                </YoutubeLink>
              </div>
            ))}
          </Slider>
        )}
      </div>
      <div className="carousel-all-videos-container">
        <div className="carousel-all-videos">
          <span className="carousel-thin">More&nbsp;</span>
          <span className="carousel-bold">Videos</span>
        </div>
      </div>
      <div className="carousel-line-padding" />
    </div>
  );
}

export default VideoCarousel;

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';

function App() {
  const videoIds = ['bW5czKqT05A', 'kW57PpibCMA', '-Bz_9PSpkUc', '7RPiGAzk4wA'];

  return (
    <div className="container">
      <div className="main-block">
        <div className="text-block">
          <h1 className="noteworthy">Noteworthy</h1>
          <p className="subtext">In-vest-ed in A Capella</p>
        </div>
        <div className="button-group">
          <a href="#" className="button">About Us</a>
          <a href="#" className="button">People of Note</a>
          <a href="#" className="button">Hire Us</a>
          <a href="#" className="button">Auditions</a>
        </div>
      </div>
      <div className="about-us-block">
        <h2 className="about-us-heading">About Us</h2>
        <p className="about-us-text">
          We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests! Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.
        </p>
      </div>
      <div className="favorites-block">
        <h2 className="favorites-heading">A Few of Our Favorites</h2>
        <Carousel videos={videoIds} />
      </div>
    </div>
  );
}

function Carousel({ videos }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          variableWidth: false,
        },
      },
    ],
  };
  
  
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {videos.map((videoId, index) => (
          <div key={index} className="video-slide" style={{ width: 300 }}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%" }}
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
}




/* this is the code for the memebrs*/
function Members(){
  return(
     
<div className="members-contact-container">
      {/* Members Section */}
      <div className="members-section">
        <h1>Members</h1>
        <div className="member-cards-container">
          {/* Example Member Card */}
          <div className="member-card">
            <div className="member-image-placeholder"></div>
            <h2>Name</h2>
            <p>Member Info</p>
          </div>
          {/* Duplicate the member card for additional members */}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-section">
        <h1>Contact Us</h1>
        <div className="contact-card">
          <div className="social-media-placeholder">
            Insta
            {/* Insert Instagram or other social media icons as needed */}
          </div>
        </div>
      </div>
    </div>

  );
}


export default App;

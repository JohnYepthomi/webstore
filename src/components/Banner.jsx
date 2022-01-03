import React from 'react';
import '../styles/Banner.css';
import BannerImg1 from '../assets/banner.jpg';

export default function Banner(){
  return (
    <div className="banner-container"> 
      <img src={BannerImg1} alt="banner-image" />
    </div>
  ) 
}
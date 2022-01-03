import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Showcasegrids from '../components/Showcasegrids';
import '../styles/Home.css'


export default function  Home (){
  return (
    <div className="home-container">
      <div className="container">
        <Categories />
      </div>
      <Banner />
      <div className="container">
        <Showcasegrids title="Best Selling" limit={4} />
      </div>
    </div>
  )
}
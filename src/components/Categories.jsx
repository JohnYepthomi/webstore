import React from 'react';
import '../styles/Categories.css';

export default function Categories(){
  return (
    <div className="categories-container"> 
      <ul>
        <li>
          <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
          <p>Home</p>
        </li>
        <li>
          <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
          <p>Beauty</p>
        </li>
        <li>
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <p>Furnitures</p>
        </li>
        <li>
          <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <p>Mobiles</p>
        </li>
        <li> </li>
      </ul>
    </div>
  ) 
}
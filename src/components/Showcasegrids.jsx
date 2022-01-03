import React from 'react';
//import '../styles/Showcasegrids.css';

export default function Showcasegrids({ title, limit }){
  return (
    <div className=""> 
    <div>{title}</div>
    <div>
      Showcasegrids with limit {limit}
    </div>
    </div>
  ) 
}
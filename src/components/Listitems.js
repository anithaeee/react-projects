import React from 'react';
import './listitems.css';
const Listitems = ()=>{
  const items = ['item1','item2','item3','item4']
  return(
    <div>
    
        {items.map((dt,index)=>{
          return(
            <li key={index}>{dt}</li>
          )
        } )}
      
    </div>
  )
};
export default Listitems;
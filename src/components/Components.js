import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './Components.css';
import { useState } from "react";
import { Button } from 'primereact/button';
        
const Components = () => {
  const [ON, setON]= useState("false");
  const handleToggle= () => {
     setON(prevState => !prevState)
  };
  return (
    <div className="button">
      <h1>{ON}</h1>
      <Button onClick={handleToggle} />
      {ON ? 'ON' : 'OFF'}
    </div>
  )
}

export default Components;
import React from 'react';
import './form.css';
import  {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) =>{
    setInputValue(event.target.value);
  };
  const handleClearClick = () => {
    setInputValue('');
  };
 return (
  <form>
  <div className="forms">
    <InputText  value={inputValue} onChange={handleInputChange}/>
    <div>
      {inputValue}
    </div>
    <Button onClick={handleClearClick} />
  </div>
  </form>
 )
};
export default Form;
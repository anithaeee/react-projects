import React from 'react'
import './login.css';
import { useState } from 'react';
import { Button } from 'primereact/button';
const Login = () => {
  const [loggin, setloggin] = useState(false);
  const logginform = () => {
    setloggin(!loggin);
  };
  let content;
  if (loggin) {
    content = <h3>welcome message</h3>
  }else {

  }
  return (
    <div>
      <Button onClick={logginform} />
    </div>
  )
}

export default Login;
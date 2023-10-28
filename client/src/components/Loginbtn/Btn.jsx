import React from "react";
import { useNavigate } from 'react-router-dom';


export default function Btn() {
    const navigate = useNavigate();

    function sayHello() {
      navigate('/body');
    }
    
  
  return (
    <div>
      <button onClick={sayHello}>Login</button>
    </div>
  )
}

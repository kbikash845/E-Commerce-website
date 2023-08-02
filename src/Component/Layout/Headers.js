import React from 'react';
import './Headers.css';
import HeaderButton from './HeaderButton';
import { NavLink } from 'react-router-dom';

function Headers() {
  return (
    <>
    <div className='main-container'>
        <div style={{flexGrow:"2"}}>Child1</div>
        <div style={{flexGrow:"5"}} className='child2'>
           <div> <NavLink to='Home'>Home</NavLink></div>
           <div> <NavLink to='Product'>Store</NavLink></div>
          <div>  <NavLink to='About'>About</NavLink></div>
          <div> <NavLink to='ContactUs'>Contact Us</NavLink></div> 
        </div>
        <div style={{flexGrow:"3"}}>
            <HeaderButton/>
        </div>
    </div>
    <div className="Genrics">
          <h1>The Generics</h1>
        </div>
    </>
  )
}

export default Headers
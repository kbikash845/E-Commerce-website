import React from 'react';
import './Headers.css';
import HeaderButton from './HeaderButton';

function Headers() {
  return (
    <>
    <div className='main-container'>
        <div style={{flexGrow:"2"}}>Child1</div>
        <div style={{flexGrow:"5"}} className='child2'>
            <div>Home</div>
            <div>Store</div>
            <div>About</div>
            <div>Contact Us</div>
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
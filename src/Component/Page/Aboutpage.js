import React from 'react'
import './Css/About.css'
import vikashImage from '../../images/img5.png';
import Aboutpagetext from './Aboutpagetext';


function Aboutpage() {
  return (
    <div className='aboutpage' id='about'>
      <div className='photodiv'>
        <div className='photo'>
          <img src={vikashImage} className=" about-img" alt="..." />
        </div>
      </div>
      <div className='text-div'>
        <Aboutpagetext />
      </div>

    </div>
  )
}

export default Aboutpage

import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import './Css/Header.css';
import Smallheader from './Smallheader';


function Header() {

  const [isSmallHeader, setIsSmallHeader] = useState(false);

  return (
    <div>
      <nav className="py-2 border-bottom header">
        <div className="container d-flex flex-wrap header-div">
          <ul className="nav me-auto">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-white"><span className='name'> वि-kash</span></a></li>
          </ul>

          <ul className="nav navbar">
            <li className="nav-item"><a href="#home" className="nav-link  px-2 text-white active" aria-current="page">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link  px-2 text-white"> About</a></li>
            <li className="nav-item"><a href="#skills" className="nav-link px-2 text-white">Skills</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link px-2 text-white">Projects</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link  px-2 text-white">Contact</a></li>
          </ul>

          <div className='small-Header' onClick={() => setIsSmallHeader(!isSmallHeader)}>
            <GiHamburgerMenu style={{ fontSize: '25px', cursor: 'pointer' }} />
            {isSmallHeader && <Smallheader />}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

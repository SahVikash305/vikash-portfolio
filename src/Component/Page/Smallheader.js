import React from 'react'
import './Css/Header.css'

function Smallheader() {
  return (
    <div className='header-box'>
       <a className='header-content' href='#home'>Home</a>
       <a className='header-content' href='#about'>About</a>
       <a className='header-content' href='#skills'>Skills</a>
       <a className='header-content' href='#projects'>Projects</a>
       <a className='header-content' href='#contact'>Contact</a>
    </div>
  )
}

export default Smallheader
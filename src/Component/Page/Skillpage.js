import React from 'react'
import './Css/Skill.css'
import Skills from './Skills'

function Skillpage() {
  return (
    <div className='skillpage' id='skills'>
      <div className='skillheading-div'>
        <div className='skills-heading'>
          <h1 className='skill-letter'>S</h1>
          <h1 className='skill-letter'>K</h1>
          <h1 className='skill-letter'>I</h1>
          <h1 className='skill-letter'>L</h1>
          <h1 className='skill-letter'>L</h1>
          <h1 className='skill-letter'>S</h1>
        </div>
      </div>
      
      <div className='skilldiv'>
       <Skills />
      </div>
    </div>
  )
}

export default Skillpage

import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";


function Contactprofile() {
  return (
    <div>
       <div className='profile-div'>
                   <p className='find'> FIND ME ON</p>
                   <p className='find1'>Feel free to <span className='contactme'> contact</span> with me</p>
                  
                   <div className='social-media'>
                    <a href='https://www.instagram.com/gupta_vikash52/' target='_blank'>{<BsInstagram  style={{ fontSize: '2em',color: 'gray'}}/>}</a>
                    <a href='https://www.facebook.com/share/bCUkZMozonoSi5RM/?mibextid=qi2Omg '  target='_blank'>{<FaFacebookF style={{ fontSize: '2em' ,color: 'gray'}}/> }</a>
                    <a href='https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit'  target='_blank'>{<FaLinkedinIn style={{ fontSize: '2em' ,color: 'gray'}} /> }</a>
                    
                    <a href='https://leetcode.com/u/vsah32805/'  target='_blank'>{<SiLeetcode style={{ fontSize: '2em' ,color: 'gray'}}/>}</a>
                   </div>
                </div>
    </div>
  )
}

export default Contactprofile
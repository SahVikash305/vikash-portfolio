import React from 'react'
import projectImage1 from '../../images/projectimg1.jpg';
import projectImage2 from '../../images/projectimg2.jpg';
import projectImage3 from '../../images/projectimg3.jpg';
import projectImage4 from '../../images/projectimg4.jpg';
import Project from './Project';

function Projectlist() {
    const link = ['https://delivery-website-gold.vercel.app/','https://university-rosy-six.vercel.app/','https://demo-restaurant-six.vercel.app/','https://sahvikash305.github.io/search-image/'];
  return (
    <div>
      <div className='project-list'>
               <Project img={projectImage1} link={link[0]} projectName= 'Delivery Website'/>
               <Project img={projectImage2} link={link[1]} projectName= 'University Website'/>
               <Project img={projectImage3} link={link[2]} projectName= 'Restaurent Website'/>
               <Project img={projectImage4} link={link[3]} projectName= 'Image-search Website'/>
           
               
            </div>
    </div>
  )
}

export default Projectlist

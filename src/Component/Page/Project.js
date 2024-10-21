import React from 'react'



function Project({img,link,projectName}) {
  return (
    <div>
       <div className='project-item'>
                    <div className='project'>
                        <a href={link} target='_blank'><img className='project-img' src={img} /></a>
                    </div>
                    <div className='project-name'>
                        {projectName}

                    </div>
                </div>
    </div> 
  )
}

export default Project

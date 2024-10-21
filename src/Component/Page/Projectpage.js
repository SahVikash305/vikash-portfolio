import React from 'react'
import './Css/Project.css'
import Projectuper from './Projectuper';
import Projectlist from './Projectlist';

function Projectpage() {
    return (
        <div className='project-page' id='projects'>
            <Projectuper />
            <Projectlist />
        </div>
    )
}

export default Projectpage

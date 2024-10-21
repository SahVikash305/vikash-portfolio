import React from 'react';
import './Css/Main.css'
import vikashImage from '../../images/2.jpg';
import Mainpageintro from '../Mainpageintro';
import Header from './Header';


function Mainpage() {
    return (
        <div className='main' id='home'>
            <Header />
            <div className='mainpage'>
                <Mainpageintro />
                <div className='imgdiv'>
                    <img src={vikashImage} className="img" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Mainpage

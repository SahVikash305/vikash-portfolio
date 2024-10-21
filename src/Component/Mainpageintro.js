import React from 'react'
import Typewriter from "typewriter-effect";

function Mainpageintro() {
    return (
        <div className='intro'>
             <h1 className='typewriter'>
                <span className='name'>
                    {/* Hii..... */}
                    <Typewriter
                        options={{
                            strings: ['Hii,This is Vikash'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </span>
            </h1>
            <div>
                <p className='pragraph'><h4 className='name'> Frontend Developer and coder </h4> Passionate about building modern web apps with React. <br />Let's connect and create something amazing together! </p>
            </div>
            <div className='india'>
                <div className='horizontal-line'></div>
                <h2 className='name'> From India</h2>
                <div className='horizontal-line'></div>
            </div>
        </div>
    )
}

export default Mainpageintro
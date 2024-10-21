import React from 'react'
import { FaReact } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { FaPython } from "react-icons/fa6";
import { ImCss3 } from "react-icons/im";
import { AiOutlineJava } from "react-icons/ai";
import { TbBrandJavascript } from "react-icons/tb";

function Skills() {
    return (
        <div className='skill-container'>
            <div className='div1'>
                {<FaReact className="icon1" />}
            </div>
            <div className='div1'>
                {<TbBrandRedux  className="icon2"/>}
            </div>
            <div className='div1'>
                {<FaBootstrap  className="icon3" />}
            </div>
            <div className='div1'>
                <img className='cimg' src='https://new-portfolio-sage-beta.vercel.app/static/media/c.83dfa097dfa94f707a41.png'></img>
            </div>
            <div className='div1'>
                {<FaPython  className="icon4" />}
            </div>
            <div className='div1'>
                {<AiOutlineJava  className="icon5" />}
            </div>
            <div className='div1'>
                {<TbBrandJavascript  className="icon6"  />}
            </div>
            <div className='div1'>
                {<ImHtmlFive  className="icon7" />}
            </div>
            <div className='div1'>
                {<ImCss3  className="icon8"  />}
            </div>
        </div>
    )
}

export default Skills

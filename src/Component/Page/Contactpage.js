import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import './Css/Contact.css'

import Contactprofile from './Contactprofile';
import Contactform from './Contactform';


function Contactpage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !message){
            return window.alert("Fill all the fields");
        }

        emailjs.sendForm('service_tndqzyg', 'template_gs3iuyc', e.target, '-8EhafRvuo7R7KnOy')
            .then(res => {
                window.alert("Email Sent successfully");
            }).catch(error => {
                window.alert("Email not sent");
            })

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className='contact' id='contact'>
            <div className='contact-profile'>
                <Contactprofile />
            </div>

            <div className='contact-form'>
                <form className="forms" onSubmit={handleOnSubmit}>
                    <div className='send'><p className='heading'>Send mail to me</p></div>
                    <div className='name'>
                        <input className='firstname' placeholder='Your Name' type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} />

                    </div>
                    <div className='email-div'>
                        <input className='email' placeholder='Your Email' type='email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='textarea-div'>
                        <textarea className='textarea' placeholder=' Message' name="message" value={message} rows={5} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className='btn-div'>
                        <button className='submit' type='submit'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contactpage

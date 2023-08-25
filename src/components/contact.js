 
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({}){
    const form = useRef();   
    const inputName = useRef(null);
    const inputMail = useRef(null);
    const inputText = useRef(null);
    const contactRef = useRef(null);
    
    const resetInput = () => {
        inputName.current.value =""
        inputMail.current.value =""
        inputText.current.value =""
    }
    const sendEmail = () => {
      emailjs.sendForm('contact_service', 'contact_form', form.current, 'QyCupuCGrX-n-zDKj')
        .then((result) => {
            window.alert("Message was sent successfully")
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });
    };
    const sendAndReset = (e) => {
        e.preventDefault(e);
        sendEmail()
        resetInput()
    }
    return (
        <div className="about-section">
         <h1 id='contact-title'  className="about-title" ref={contactRef}>Contact ME</h1>
            <form className='contact-form' onSubmit={sendAndReset} ref={form} >
                <input className='name-input' required  placeholder='Name' type="text" name="user_name" ref={inputName}/>
                <input className="email-input" required placeholder='Email' type="email" name="user_email" ref={inputMail} />
                <textarea className='message-input' placeholder='Your Message' name="message" ref={inputText}/>
                <input className='submit-button' required type="submit" value="Send" />
            </form>
        </div>
    )
}
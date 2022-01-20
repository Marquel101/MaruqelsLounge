import React from 'react'
import {AiOutlineMail, AiOutlineLinkedin, AiOutlinePhone, AiOutlineGithub} from 'react-icons/ai'
import './Contact.css'

export default function Contact() {
    
    return (
        <>
            <div id="contact"/>
            <div className='c__sec'>
                <h1 id="c__header">CONTACT ME</h1>
                <div className='contacts'>
                <a className='contact__icons' rel="noopener noreferrer" href="https://www.linkedin.com/in/marquel-sears-0b8907219/" target="_blank"><AiOutlineLinkedin/></a>
                <a className='contact__icons' rel="noopener noreferrer" href="https://github.com/Marquel101" target="_blank"><AiOutlineGithub/></a>
                <a className='contact__icons' rel="noopener noreferrer" href="mailto:daylensears2@gmail.com" target="_blank"><AiOutlineMail/></a>
                <a className='contact__icons' rel="noopener noreferrer" href="tel:+1-812-470-1785" target="_blank"><AiOutlinePhone/></a>
                </div>
                
        </div>
        </>
    )
}

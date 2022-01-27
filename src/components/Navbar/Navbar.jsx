import './Navbar.css'
import React from 'react'

import { HashLink as Link } from 'react-router-hash-link'

export default function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className='nav__contents'>
                    <Link className='nav__title' to="/" >MARQUEL'S LOUNGE</Link>
                </div>
            </div>
            <div className='nav__links'>
                <Link className="about" to='/#about'>ABOUT</Link>
                <Link className="projects" to='/#projects'>PROJECTS</Link>
                <Link className='contact' to='/#contact'>CONTACT</Link>
                <a className="resume"  href={require("/home/marquel/portfolio/MaruqelsLounge/src/Resume (1).pdf")} target="blank">RESUME</a>
                </div>
        </>
    )
}

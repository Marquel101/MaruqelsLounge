import React from 'react'
import "./Splash.css"


export default function Splash() {
    return (
        <div className='boom'>
            <h2 className='welcome'>
                WELCOME ALL TO <br/> <span>MARQUEL'S LOUNGE</span>.<br/> HERE IS YOUR CHANCE TO LEARN MORE <br/>ABOUT THE DEVELOPER NAMED<br/> <span>MARQUEL</span> (THAT'S ME) <span>!</span>
            </h2>
            <div className='show__off'>
                <img className="marquel" src="https://i.imgur.com/MOs8lFg.jpg" alt="Marquel" />
                <div className='list'>
                    <div className='traits'>YOUNG</div>
                    <div className='traits'>INSPIRING</div>
                    <div className='traits'>OBSERVANT</div>
                    <div className='traits'>CREATIVE</div>
                    <div className='traits'>SMART</div>
                    <div className='traits'>FUNNY</div>
                    <div className='traits'>CURIOUS</div>
                    <div className='traits'>ORGAANIZED</div>
                    <div className='traits'>ADAPTABLE</div>
                    <div className='traits'>EXPERIENCED</div>
                    <div className='traits'>COOL</div>
                    <div className='traits'>PATIENT</div>
                    <div className='traits'>SOCIABLE</div>
                </div>
            </div>     
        </div>
    )
}

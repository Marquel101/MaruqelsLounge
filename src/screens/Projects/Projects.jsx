import React from 'react'
import './Projects.css'

export default function Projects() {
    return (
        <>
            <div id="projects"/>
            <div className='proj__sec'>
                <h1 id="p__header">MY WORK:</h1>
                <div className='project'>
                    <div className='proj__title'></div>
                    <img className='proj__pic' src='https://i.imgur.com/Rebe5DK.png' alt='MUFFLED RAGE' />
                    <div className='proj__info'>
                        <div className='proj__bio'>Muffled Rage is a fun ineteractive blog site for everyone to come and vent to others about their problems. Things happen everyday that we wish didn't. It's hard and frustrating sometimes. This is a place to let out that frustration. Let us know what's upsetting and how you feel about it.</div>
                        <div className='proj__links'>
                            <a className='proj__links' rel="noopener noreferrer" href="https://muffled-rage.netlify.app/" target="_blank">Link Here</a>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <div className='proj__title'></div>
                    <img className='proj__pic' src='https://i.imgur.com/WXOoYSw.png' alt='frankslist' />
                    <div className='proj__info'>
                        <div className='proj__bio'>You work, you eat, you sleep - and that's about it... your life is boring. That's why we made Frankslist! Frankslist is the one stop web application for finding your dream hobby. Create an account, search for hobbies based on your unique lifestyle, and save your favorites! If you have a hobby you would like to share with the community, you can create a new page for that hobby!</div>
                        <div className='proj__links'>
                        <a className='proj__links' rel="noopener noreferrer" href="https://franks-list.netlify.app/" target="_blank">Link Here</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

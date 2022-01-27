import React from 'react'
import "./About.css"
import { DiJavascript, DiRuby, DiCss3, DiReact, DiNodejs, DiMongodb, DiGithub,} from "react-icons/di";
import { SiExpress,SiHtml5, SiRubyonrails} from "react-icons/si";

export default function About() {
    return (
        <>
        <div id="about"/>
        <div className='about__sec'>
            <h1 id="a__header">WHO AM I ?</h1>
            <div className='paragraphs'  >
                <div className='one'>
                    <p className='paragraph1'>
                        Hello, Marquel Sears here. So far in life, I have worked numerous of jobs. From food services all the way to mechanical work for the United States Air Force. And each occupation has taught me valuable skills, such as detail orientation and even being socially proficient.
                    </p>
                    <img className='me' src='https://i.imgur.com/8jTl8hP.jpg' alt="SrA Sears"/>
                </div>
                <div className='two'>
                    <img className='me' src='https://i.imgur.com/ywQu5Q5.jpg' alt="bike marquel"/>
                    <p className='paragraph2'>
                    I notice that even my hobbies are bettering me.
                    I learn patience and diligence just from practicing my ukelele. Staying active helps keep a tenacious mindset. Even gaming helps me problem solve.
                    </p>
                </div>
                <div className='three'>
                    <p className='paragraph3'>
                    Ever since I was a kid I knew I was destined in life to work with computers. I now am looking to put these skills to use as I jump into the software developer career field and follow my destiny.
                    </p>
                </div>
            </div>
            <div className='skills'>SKILLS</div>
            <div className='programs'>
                
                <div className='program'>
                    <DiJavascript/>
                </div>
                <br/>
                <div className='program'>
                    <DiRuby/>
                </div>
                <br/>
                <div className='program'>
                    <DiCss3/>
                </div>
                <br/>
                <div className='program'>
                    <DiReact/>
                </div>
                <br/>
                <div className='program'>
                    <DiNodejs/>
                </div>
                <br/>
                <div className='program'>
                    <DiMongodb/>
                </div>
                <br/>
                <div className='program'>
                    <DiGithub/>
                </div>
                <br/>
                <div className='program'>
                    <SiExpress/>
                </div>
                <br/>
                <div className='program'>
                    <SiHtml5/>
                </div>
                <br/>
                <div className='program'>
                    <SiRubyonrails/>
                </div>
                <br/>
            </div>
        </div>
        </>
    )
}

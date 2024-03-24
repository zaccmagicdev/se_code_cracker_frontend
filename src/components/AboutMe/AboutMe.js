import React from 'react';
import './AboutMe.css';

function AboutMe(){
    return(
        <div className='aboutme'>
            <img className='aboutme__author-picture' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd9%2F6b%2Fba%2Fd96bba4e224a0e6b403f5041153ab599.jpg&f=1&nofb=1&ipt=ba5c14f1f71b5bdd4370ae35c13533e42ae95c61026467100a9b94255e0ceda6&ipo=images' alt='placeholder until I get my picture up in here'/>
            <p className='aboutme__author-about'>Hello there! My name is Zachary and I am a full-stack developer that uses JS technologies and frameworks 
            such as React.js and Mongoose for back-end. Programming to me is both an art and a science and it's something I'm very passionate
            about doing. I started programming in Java back in 2018 but I wasn't very good at it and I gave up because I thought I wasn't 
            smart or talented enought to do software development. Earlier last year I decided to start taking up programming again in the
            web development world and I'm so glad I did because I feel like I found my calling! </p>
        </div>
    )
}

export default AboutMe;
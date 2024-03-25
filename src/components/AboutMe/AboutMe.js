import React from 'react';
import './AboutMe.css';
import authorPicture from '../../vendor/author_picture.jpg';

function AboutMe(){
    return(
        <div className='aboutme'>
            <img className='aboutme__author-picture' src={authorPicture} alt='placeholder until I get my picture up in here'/>
            <h1 className='aboutme__author-header'>Zachary Wedel</h1>
            <p className='aboutme__author-about'>Hello there! My name is Zachary and I am a full-stack developer that uses JS technologies and frameworks 
            such as React.js and Mongoose for back-end. Programming to me is both an art and a science and it's something I'm very passionate
            about doing. I started programming in Java back in 2018 but I wasn't very good at it and I gave up because I thought I wasn't 
            smart or talented enought to do software development. Earlier last year I decided to start taking up programming again in the
            web development world and I'm so glad I did because I feel like I found my calling! </p>
        </div>
    )
}

export default AboutMe;
import React from 'react'
import About from './About';
import Study from './Study';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';

function MainPage(props){
    
    return (
        <div className={props.side ? 'page-content content' : 'page-content content active'}>            

            <About />

            <Study />

            <Skill />

            <Project />

            <Contact />
        </div>
    )
}

export default MainPage;
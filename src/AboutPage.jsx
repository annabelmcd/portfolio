import React from 'react';
import {NavBar} from './NavBar.jsx';

export function AboutPage(props){

    return(
        <div>
            <NavBar />

            <div className="about-section">
                <img src='/img/profilepic.jpg' className="profilepic" />
                <div className="blurb-box">
                    <p className="blurb-text">I’m a third year Informatics student at the University of Washington interested in product management and information systems, and I’m especially focused on understanding users and working closely with teams to solve meaningful problems. I bring strong collaboration, leadership, and communication skills, along with a systems-thinking mindset that helps connect user needs to practical solutions. I’m looking to continue developing my skills in a product role where I can learn from experienced teams and contribute to building impactful products.</p>
                </div>
                <div className="about-buttons-small">
                    <div className="about-section-button">Resume</div>
                    <div className="break"></div>
                    <div className="about-section-button">Portfolio</div>
                </div>
            </div>
            <div className="about-buttons-large">
                <div className="about-section-button resume">Resume</div>
                <div className="about-section-button portfolio">Portfolio</div>
            </div>

        </div>
    );

}
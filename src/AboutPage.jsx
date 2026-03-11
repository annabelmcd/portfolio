import React from 'react';
import { NavBar } from './NavBar.jsx';
import { Footer } from './Footer';
import { Link } from 'react-router';

export function AboutPage(props){

    return(
        <div>
            <NavBar />

            <div className="about-section">
                <img src='profilepic.jpg' className="profilepic" />
                <div className="blurb-box">
                    <p className="blurb-text">I’m a third year Informatics student at the University of Washington interested in product management and information systems, and I’m especially focused on understanding users and working closely with teams to solve meaningful problems. I bring strong collaboration, leadership, and communication skills, along with a systems-thinking mindset that helps connect user needs to practical solutions. I’m looking to continue developing my skills in a product role where I can learn from experienced teams and contribute to building impactful products.</p>
                </div>
                <div className="about-buttons-small">
                    <a href="https://drive.google.com/file/d/1Skbav1cC3q8n-a6vnV1q6V_PrHFZQPlp/view?usp=sharing" className="about-section-button" target="_blank" rel="noopener noreferrer">Resume</a>
                    <div className="break"></div>
                    <Link to='/portfolio/work' className="about-section-button">Portfolio</Link>
                </div>
            </div>
            <div className="about-buttons-large">
                <a href="https://drive.google.com/file/d/1Skbav1cC3q8n-a6vnV1q6V_PrHFZQPlp/view?usp=sharing" className="about-section-button">Resume</a>
                <Link to='/portfolio/work' className="about-section-button portfolio">Portfolio</Link>
            </div>
            <Footer />
        </div>
    );

}
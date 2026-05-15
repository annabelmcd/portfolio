import React from 'react';
import { NavBar } from './NavBar.jsx';
import { Footer } from './Footer';
import { Link } from 'react-router';

export function AboutPage(props){

    return(
        <div>
            <NavBar />

            <div className="about-section">
                <img src="./img/profilepic.jpg" className="profilepic" />
                <div className="about-blurb-column">
                    <div className="blurb-box">
                        <p className="blurb-text">I&apos;m a third year Informatics student at the University of Washington interested in user experience design and information systems. I&apos;m especially focused on understanding users and working closely with teams to solve meaningful problems. I bring strong collaboration, leadership, and communication skills, along with a systems-thinking mindset that helps connect user needs to practical solutions. I&apos;m looking to continue developing my skills in a product role where I can learn from experienced teams and contribute to building impactful products.</p>
                    </div>
                    <div className="about-buttons-small">
                        <a href="https://drive.google.com/file/d/1Skbav1cC3q8n-a6vnV1q6V_PrHFZQPlp/view?usp=sharing" className="about-section-button" target="_blank" rel="noopener noreferrer">Resume</a>
                        <div className="break"></div>
                        <Link to="/work" className="about-section-button">Portfolio</Link>
                        <div className="about-projects-banner about-projects-banner-mobile"></div>
                        <Link to="/personal-projects" className="project-card-small">
                            <h3>Personal Projects</h3>
                            <div className="break"></div>
                            <img src="./img/inspired.png" alt="" />
                        </Link>
                    </div>
                    <div className="about-buttons-large">
                        <a href="https://drive.google.com/file/d/1Skbav1cC3q8n-a6vnV1q6V_PrHFZQPlp/view?usp=sharing" className="about-section-button" target="_blank" rel="noopener noreferrer">Resume</a>
                        <Link to="/work" className="about-section-button portfolio">Portfolio</Link>
                    </div>
                </div>
            </div>
            <div className="about-projects-banner"></div>
            <Link to="/personal-projects" className="project-card-lg">
                <img src="./img/inspired.png" alt="Personal Projects" />
                <div className="break"></div>
                <h3>Personal Projects</h3>
            </Link>
            <Footer />
        </div>
    );

}

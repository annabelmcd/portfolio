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
                        <img src="./img/annabel-alive.png" className="blurb-corner-img blurb-corner-top-right" alt="" />
                        <img src="./img/annabel-warm.png" className="blurb-corner-img blurb-corner-bottom-left" alt="" />
                        <div className="blurb-text">
                            <p className="blurb-greeting">Hello and Welcome!</p>
                            <p className="blurb-fields">I&apos;m passionate about...<br />UX &nbsp;·&nbsp; HCI &nbsp;·&nbsp; Information Management<br />and intentional, people-focused products!</p>
                            <p className="blurb-cta">Explore my page and <a href="mailto:annamcd795@gmail.com" className="blurb-reach-out">reach out</a> if you want to connect!</p>
                        </div>
                    </div>
                    <div className="about-buttons-small">
                        <a href="https://drive.google.com/file/d/1Sy4zxioQvheKM9L0c2TXbj0Tp0JjNSI5/view?usp=sharing" className="about-section-button" target="_blank" rel="noopener noreferrer">Resume</a>
                        <div className="break"></div>
                        <Link to="/work" className="about-section-button">Portfolio</Link>
                    </div>
                    <div className="about-buttons-large">
                        <a href="https://drive.google.com/file/d/1Sy4zxioQvheKM9L0c2TXbj0Tp0JjNSI5/view?usp=sharing" className="about-section-button" target="_blank" rel="noopener noreferrer">Resume</a>
                        <Link to="/work" className="about-section-button portfolio">Portfolio</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}
102
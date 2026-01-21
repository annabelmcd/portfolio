import React from 'react';
import {NavBar} from './NavBar.jsx';

export function AboutPage(props){

    return(
        <div>
            <NavBar />

            <div className="about-section">
                <img src='/img/profilepic.jpg' className="profilepic" />
                <div className="blurb-box">
                    <p className="blurb-text">blurb</p>
                </div>
                <div className="about-buttons">
                    <div className="about-section-button">Resume</div>
                    <div className="break"></div>
                    <div className="about-section-button">Portfolio</div>
                </div>
            </div>

        </div>
    );

}
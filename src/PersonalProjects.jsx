import React from 'react';
import { NavBar } from './NavBar.jsx';
import { Footer } from './Footer.jsx';

export function PersonalProjects(props) {
    return (
        <div>
            <NavBar />

            <div className="work-section">
                <h2>Personal Projects</h2>
                <div className="blurb-box">
                    <p className="blurb-text">
                        Welcome to my personal projects page! This is a space for me to share my creativity, unique ideas, and have fun! 
                    </p>
                </div>

                <div className="project-card-small">
                    <h3>inspire(d)</h3>
                    <div className="break"></div>
                    <img src="./img/inspired.png" alt="inspire(d)" />
                </div>

                <div className="project-card-lg">
                    <img src="./img/inspired.png" alt="inspire(d)" />
                    <div className="break"></div>
                    <h3>inspire(d)</h3>
                </div>

            </div>

            <Footer />
        </div>
    );
}

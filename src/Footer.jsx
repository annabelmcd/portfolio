import React from 'react';
import { Link } from 'react-router';

export function Footer(props) {
    return (
        <div className="footer">
            <hr />
            <h1>Annabel McDonald</h1>
            <a href="mailto:annamcd795@gmail.com" className="purple-button">Let's Chat</a>
            <div className="footer-div">
                <h3>Navigate</h3>
                <Link to='/portfolio' className="footer-mini">About</Link>
                <br />
                <Link to='/portfolio/work' className="footer-mini">Work</Link>  
                <br />
                <a href="https://drive.google.com/file/d/1Skbav1cC3q8n-a6vnV1q6V_PrHFZQPlp/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="footer-mini">Resume</a>
            </div>
            <div className="footer-div">
                <h3>Connect</h3>
                <a href="mailto:annamcd795@gmail.com">Email</a>
                <div className="break"></div>
                <a href="https://www.linkedin.com/in/annabel-mcdonald" target="_blank" rel="noopener noreferrer">LinkedIn</a>  
            </div>
            <hr />
            <p>&copy; Annabel McDonald. All Rights Reserved.</p>
            
        </div>
    )
}
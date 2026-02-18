import React from 'react';
import { NavBar } from './NavBar.jsx';

export function WorkPage(props) {

    return (
        <div>
            <NavBar />

            <div className="work-section">
                <h2>- Projects -⁠</h2>
                <div className="blurb-box">
                    <p className="blurb-text">blurb</p>
                </div>

                <div className="project-card">
                    <h3>ChoreSync</h3>
                    <div className="break"></div>
                    <img src="/img/ChoreSync-MainPage.png" />
                    <div className="break"></div>
                    <h4 className="tag web">Web Development</h4>
                    <h4 className="tag responsive">Responsive Design</h4>
                </div>

                <div className="project-card">
                    <h3>Pathways Forward</h3>
                    <div className="break"></div>
                    <img src="/img/PathwaysForward-Main.png" />
                    <div className="break"></div>
                    <h4 className="tag research">User Research</h4>
                    <h4 className="tag iterative">Iterative Process</h4>
                    <h4 className="tag problem">Real-World Problem</h4>
                    <h4 className="tag figma">Figma</h4>
                    <h4 className="tag prototyping">Prototyping</h4>
                    <h4 className="tag wireframing">Wireframing</h4>
                </div>

                <div className="project-card">
                    <h3>OtterWise</h3>
                    <div className="break"></div>
                    <img src="/img/OtterWise-Logo.png" />
                    <div className="break"></div>
                    <h4 className="tag figma">Figma</h4>
                    <h4 className="tag prototyping">Prototyping</h4>
                    <h4 className="tag problem">Real-World Problem</h4>
                </div>

                <div className="project-card">
                    <h3>This Website!</h3>
                    <div className="break"></div>
                    <img src="/img/OtterWise-Logo.png" />
                    <div className="break"></div>
                    <h4 className="tag web">Web Development</h4>
                    <h4 className="tag iterative">Iterative Process</h4>
                    <h4 className="tag responsive">Responsive Design</h4>
                </div>
            </div>

        </div>
    );


}
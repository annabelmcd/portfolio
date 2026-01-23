import React from 'react';
import { NavBar } from './NavBar.jsx';

export function WorkPage(props) {

    return (
        <div>
            <NavBar />

            <div className="work-section">
                <h2> -- Portfolio --</h2>
                <div className="blurb-box">
                    <p className="blurb-text">blurb</p>
                </div>

                <div className="project-card">
                    <h3>ChoreSync</h3>
                    <img src="/img/ChoreSync-MainPage.png" />
                    <h4 className="tag web">Web Development</h4>
                    <h4 className="tag responsive">Responsive Design</h4>
                </div>

                <div className="project-card">
                    <h3>Pathways Forward</h3>
                    <img src="/img/ChoreSync-MainPage.png" />
                    <h4 className="tag research">User Research</h4>
                    <h4 className="tag responsive">Responsive Design</h4>
                </div>
            </div>

        </div>
    );


}
import React from 'react';
import { NavBar } from './NavBar.jsx';
import { Footer } from './Footer.jsx';

export function Organizations(props) {
    return (
        <div>
            <NavBar />

            <div className="work-section">
                <h2>Organizations</h2>
                <div className="blurb-box">
                    <p className="blurb-text">

                    </p>
                </div>

                <div className="project-card-small">
                    <h3>Husky Marching Band</h3>
                    <div className="break"></div>
                    <img src="" alt="Husky Marching Band" />
                </div>

                <div className="project-card-lg">
                    <img src="" alt="Husky Marching Band" />
                    <div className="break"></div>
                    <h3>Husky Marching Band</h3>
                </div>

                <div className="break"></div>

                <div className="project-card-small">
                    <h3>iJournal</h3>
                    <div className="break"></div>
                    <img src="" alt="iJournal" />
                </div>

                <div className="project-card-lg">
                    <img src="" alt="iJournal" />
                    <div className="break"></div>
                    <h3>iJournal</h3>
                </div>

                <div className="break"></div>

                <div className="project-card-small">
                    <h3>Wordplay</h3>
                    <div className="break"></div>
                    <img src="" alt="Wordplay" />
                </div>

                <div className="project-card-lg">
                    <img src="" alt="Wordplay" />
                    <div className="break"></div>
                    <h3>Wordplay</h3>
                </div>

            </div>

            <Footer />
        </div>
    );
}

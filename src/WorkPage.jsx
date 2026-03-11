import React from 'react';
import { NavBar } from './NavBar.jsx';
import { Footer } from './Footer.jsx';
import { Link } from 'react-router';

export function WorkPage(props) {

    return (
        <div>
            <NavBar />

            <div className="work-section">
                <h2>Projects⁠</h2>
                <div className="blurb-box">
                    <p className="blurb-text">
                        Welcome to my portfolio! Here you'll find the projects I've done that I am most passionate about sharing. This is a place for me to highlight my <strong>process</strong> for each project and share the experiences and skills I've built along the way. You will find projects focused in <strong>User Research, Interface Design, Problem Solving, and Technical Implementation.</strong>
                    </p>
                </div>

                <Link to='/work/PathwaysForward' className="project-card-small">
                    <h3>Pathways Forward</h3>
                    <div className="break"></div>
                    <img src="./img/PathwaysForward-Banner.png" />
                    <div className="break"></div>
                    <h4 className="tag research">User Research</h4>
                    <h4 className="tag problem">Real-World Problem</h4>
                    <h4 className="tag figma">Figma</h4>
                    <h4 className="tag prototyping">Prototyping</h4>
                    <h4 className="tag wireframing">Wireframing</h4>
                </Link>

                <Link to='/work/PathwaysForward' className="project-card-lg">
                    <img src="./img/PathwaysForward-Banner.png" /> 
                    <div className="break"></div>
                    <h3>Pathways Forward</h3>
                    <div className="break"></div>
                    <div className="tags">
                        <h4 className="tag research">User Research</h4>
                        <h4 className="tag problem">Real-World Problem</h4>
                        <h4 className="tag figma">Figma</h4>
                        <h4 className="tag prototyping">Prototyping</h4>
                        <h4 className="tag wireframing">Wireframing</h4>
                    </div>
                </Link>

                <div className="break"></div>

                <Link to='/work/ChoreSync' className="project-card-small">
                    <h3>ChoreSync</h3>
                    <div className="break"></div>
                    <img src="./img/ChoreSync-Banner.png" />
                    <div className="break"></div>
                    <h4 className="tag web">Web Development</h4>
                    <h4 className="tag responsive">Responsive Design</h4>
                </Link>

                <Link to='/work/ChoreSync' className="project-card-lg">
                    <img src="./img/ChoreSync-Banner.png" /> 
                    <div className="break"></div>
                    <h3>ChoreSync</h3>
                    <div className="break"></div>
                    <div className="tags">
                        <h4 className="tag web">Web Development</h4>
                        <h4 className="tag responsive">Responsive Design</h4>
                    </div>
                </Link>

                <div className="break"></div>

                <Link to='/work/OtterWise' className="project-card-small">
                    <h3>OtterWise</h3>
                    <div className="break"></div>
                    <img src="./img/OtterWise-Banner.png" />
                    <div className="break"></div>
                    <h4 className="tag figma">Figma</h4>
                    <h4 className="tag prototyping">Prototyping</h4>
                    <h4 className="tag problem">Real-World Problem</h4>
                </Link>

                <Link to='/work/OtterWise' className="project-card-lg">
                    <img src="./img/OtterWise-Banner.png" /> 
                    <div className="break"></div>
                    <h3>OtterWise</h3>
                    <div className="break"></div>
                    <div className="tags">
                        <h4 className="tag figma">Figma</h4>
                        <h4 className="tag prototyping">Prototyping</h4>
                        <h4 className="tag problem">Real-World Problem</h4>
                    </div>
                </Link>

                <div className="break"></div>

                <Link to='/work/HuskyCommuter' className="project-card-small">
                    <h3>HuskyCommuter</h3>
                    <div className="break"></div>
                    <img src="./img/HuskyCommuter-Banner.png" />
                    <div className="break"></div>
                        <h4 className="tag research">User Research</h4>
                        <h4 className="tag figma">Figma</h4>
                        <h4 className="tag prototyping">Prototyping</h4>
                </Link>
                
                <Link to='/work/HuskyCommuter' className="project-card-lg">
                    <img src="./img/HuskyCommuter-Banner.png" /> 
                    <div className="break"></div>
                    <h3>HuskyCommuter</h3>
                    <div className="break"></div>
                    <div className="tags">
                        <h4 className="tag research">User Research</h4>
                        <h4 className="tag figma">Figma</h4>
                        <h4 className="tag prototyping">Prototyping</h4>
                    </div>
                </Link>

            </div>

            <Footer />

        </div>
    );


}
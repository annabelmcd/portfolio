import React from 'react';
import { NavBar } from './NavBar.jsx';

export function PathwaysForward(props) {
    return (
        <div>
            <NavBar />

            <div className='PathwaysForward-section'>

                <div className='heading block'>
                    <h1>Pathways Forward</h1>
                    <hr />
                    <p>This public outreach project aims to provide those without the knowledge of public hygiene resources, or quality of life facilities, such as food banks, shelters, and other resources with actionable information. This project also targets the restriction of technology, namely the lack of access to internet and mobile devices by a majority of the population of people affected by homelessness.</p> 
                    <hr />
                    <h2>INFO 200 -</h2>
                    <h2>Intellectual Foundations of Informatics</h2>
                    <hr />
                    <h2>Relevant Tools Used:</h2>
                    <p><strong>Figma:</strong> for wireframing and prototyping</p>
                </div>

                <div className='main'>
                    <div className='project-report'>Link to Project Report</div>
                    <div className="break"></div>

                    <div className='problem block'>
                        <h2>The Problem</h2>
                        <hr />
                        <p>Seattle has one of the biggest homeless populations in the country. People experiencing homelessness suffer from a variety of issues that stem from a lack of proper access to hygiene, shelter, and other resources.</p>
                    </div>

                    <div className='research block'>
                        <h2>User Research</h2>
                    </div>

                    <div className='solution block'>
                        <h2>Our Solution</h2>
                        <hr />
                        <p>Pathways Forward is a touch screen, equipped with a live interactive map, placed at bus stations that gives users information about where nearby resources are. These resources include sanitation stations, shelters, food banks, etc. The map is connected to bus routes so that users can easily follow instructions to get to the resource they choose. Additionally, there is a printer system attached that allows users to print personalized information about the resources they select (i.e. hours, location, services offered, directions from current location).</p>
                    </div>


                </div>

            </div>

        </div>
    );
}
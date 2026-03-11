import React from 'react';
import { NavBar } from './NavBar.jsx';
import { Footer } from './Footer.jsx';
import { Link } from 'react-router';

export function PathwaysForward(props) {
    return (
        <div>
            <NavBar />

            <div className='Project-section'>

                <div className='main'>

                    <img src="img/PathwaysForward-Banner.png" className='banner'/>
                    <div className="break"></div>

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

                    <div className="break"></div>

                    <div className='problem block'>
                        <h2>The Problem</h2>
                        <hr />
                        <p>Seattle has one of the biggest homeless populations in the country. People experiencing homelessness suffer from a variety of issues that stem from a lack of proper access to hygiene, shelter, and other resources.</p>
                    </div>

                    <div className="break"></div>

                    <div className='research block'>
                        <h2>User Research</h2>
                        <hr />
                        <p>People experiencing homelessness are a difficult group to reach through surveys and interviews. We redirected our attention to service workers at food banks and shelters to learn more about their experiences and the needs of people they provide care to.</p>
                        <hr />
                        <h3>User Persona</h3>
                        <img src="img/PathwaysForward-persona.png" alt='User Persona. Addie is a mother to her 3 year old daughter, Tracie. She has been homeless for about 2 years. She is currently unemployed, and searching for job opportunities to support her and Tracie, but has a hard time finding positions that fit her skillset. She also spends a lot of her time searching for safe places to sleep, especially during Seattles cold winters, for her and Tracie, but has run out of places to look. Without a phone or easy access to technology, Addie relies heavily on word-of-mouth to find help resources for her and her daughter.'/>
                    </div>

                    <div className="break"></div>

                    <div className='solution block'>
                        <h2>Our Solution</h2>
                        <hr />
                        <p>Pathways Forward is a touch screen, equipped with a live interactive map, placed at bus stations that gives users information about where nearby resources are. These resources include sanitation stations, shelters, food banks, etc. The map is connected to bus routes so that users can easily follow instructions to get to the resource they choose. Additionally, there is a printer system attached that allows users to print personalized information about the resources they select (i.e. hours, location, services offered, directions from current location).</p>
                        <hr />
                        <h3>Primary Features</h3>
                        <div className='features'>
                            <hr />
                            <h4>• Interactive Touch Screen</h4>
                            <p>↳ Responsive touch screen designed for user-friendly navigation needs.</p>
                            <h4>• Live Map and Navigation Assistance</h4>
                            <p>↳ Screen displays a live map connected to Seattle's public transit system to provide real-time information on bus routes and directions to nearby essential resources.</p>
                            <h4>• Pamphlet Printing</h4>
                            <p>↳ Users can print information pamphlets to help them access information without the need of technology. These pamphlets include directions to their selected resource(s), as well as hours and other important details.</p>
                            <h4>• "Need More Help" Screen</h4>
                            <p>↳ Screen that allows users to immediately call or request additional assistance.</p>
                            <h4>• Simple Resource Directory</h4>
                            <p>↳ Contains all of the resources in one, easy to navigate place.</p>
                        </div>
                    </div>

                    <div className="break"></div>

                    <div className='wireframe block'>
                        <h2>Low-Fidelity Wireframes</h2>
                        <hr />
                        <img src="img/PathwaysForward-LowFid1.png" />
                        <img src="img/PathwaysForward-LowFid2.png" />
                        <img src="img/PathwaysForward-LowFid3.png" />
                        <img src="img/PathwaysForward-LowFid4.png" />
                        <img src="img/PathwaysForward-LowFid5.png" />
                    </div>

                    <div className="break"></div>

                    <div className='design block'>
                        <h2>Style Guide</h2>
                        <hr />
                        <h3>Font: Nunito</h3>
                        <h3>Colors:</h3>
                        <p>We selected these colors because we wanted out device's design to follow a similar color pattern to Seattle Sound Transit.</p>
                        <img src="img/PathwaysForward-colorscheme.png" />
                    </div>

                    <div className="break"></div>

                    <div className='prototype block'>
                        <h2>High-Fidelity Wireframes</h2>
                        <hr />
                        <img src="img/PathwaysForward-HighFid1.png" />
                        <p>This is the welcome screen that clearly lays out all of the resources a user may need more information about.</p>
                        <img src="img/PathwaysForward-HighFid2.png" />
                        <p>After choosing one of the buttons, the user is directed to this screen that displays information about each of the available resources. The user can rank the resources by distance, ratings, hours open, or amenities.</p>
                        <img src="img/PathwaysForward-HighFid3.png" />
                        <p>Clicking on the live map button, the user is able to clearly see how to get to any of the nearby locations. Clicking on any of the icons will provide more information.</p>
                        <img src="img/PathwaysForward-HighFid4.png" />
                        <p>Clicking on any of the options will display more information about them, including directions from the user's current location.</p>
                        <img src="img/PathwaysForward-HighFid5.png" />
                        <p>A pamphlet with the most important information can be printed so that the information they received can be referenced again and again.</p>
                    </div>

                    <div className="break"></div>

                    <a href="https://www.figma.com/proto/h6PMtQKMOZ9j6sWBBZLshQ/nfagun-s-team-library?node-id=3375-15&starting-point-node-id=3375%3A15&t=ePbBVVe84YXgXOc7-1" className='purple-button'>Link to Interactive Prototype</a>
                    <Link to='/work' className='purple-button'>Back to Projects</Link>

                </div>

            </div>

            <Footer />

        </div>
    );
}
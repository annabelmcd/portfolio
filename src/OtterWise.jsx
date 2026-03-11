import React from 'react';
import { NavBar } from './NavBar.jsx';
import { Footer } from './Footer.jsx';
import { Link } from 'react-router';

export function OtterWise(props) {
    return (
        <div>
            <NavBar />

            <div className='Project-section'>

                <div className='main'>

                    <img src="img/OtterWise-Banner.png" className='banner'/>
                    <div className="break"></div>

                    <div className='heading block'>
                        <h1>OtterWise</h1>
                        <hr />
                        <p>An app that focuses on promoting media literacy in younger generations.</p> 
                        <p>OtterWise hopes to target social media's impact on the spread of misinformation through information modules, gamified engagement incentives, and misinformation detection and user notification.</p>
                        <hr />
                        <h2>WINFO Hackathon -</h2>
                        <h2>Winter 2026</h2>
                        <hr />
                        <h2>Relevant Tools Used:</h2>
                        <p><strong>Figma:</strong> for prototyping</p>
                        <p><strong>Canva:</strong> for design</p>
                    </div>
                    
                    <div className="break"></div>

                    <div className='problem block'>
                        <h2>Context</h2>
                        <hr />
                        <p>This was completed during a one-day WINFO Hackathon. Our team competed in the <em>Best Impact</em> category, which required a high-fidelity prototype, and no implementation.</p>
                    </div>

                    <div className="break"></div>

                    <div className='problem block'>
                        <h2>The Problem</h2>
                        <hr />
                        <p>Teens and young adults increasingly rely on social media for news, but these platforms reward speed and engagement over accuracy. Misinformation spreads faster than facts, and young users, who are still developing media literacy skills, are often left to judge credibility on their own.</p>
                    </div>

                    <div className="break"></div>

                    <div className='solution block'>
                        <h2>Our Solution</h2>
                        <hr />
                        <h3>Primary Features</h3>
                        <div className='features'>
                            <hr />
                            <h4>• Informational Modules</h4>
                            <p>↳ Tasks related to misinformation that build media literacy skills.</p>
                            <h4>• Otter Habitat & Reward System</h4>
                            <p>↳ Completion of modules gives the user stars that they can use to buy accessories for their personal otter characters. Engagement with the app through weekly logins and module completion leads to improved health conditions for the user's otter.</p>
                            <h4>• Misinformation Detector</h4>
                            <p>↳ Input text and recieve a misinformation risk summary.</p>
                            <h4>• Social Media Plug-In</h4>
                            <p>↳ Share content with the app and recieve a notification of high/medium/low potential misinformation.</p>
                            <h4>• Widgets</h4>
                            <p>↳ Home-Screen widgets encourage engagement.</p>
                        </div>
                    </div>

                    <div className="break"></div>

                    <a href="https://www.figma.com/proto/DlSxiyRu5dmIXstcCpat1A/OtterWise?node-id=152-562&starting-point-node-id=5%3A805&t=CJxtemmNnUS6eVVk-1" className='purple-button'>Link to Prototype</a>

                    <div className="break"></div>

                    <div className='prototype block'>
                        <h2>Wireframes</h2>
                        <hr />
                        <img src="img/OtterWise-Frame1.png" />
                        <p>Home Screen</p>
                        <img src="img/OtterWise-Frame2.png" />
                        <p>Otter Habitat</p>
                        <img src="img/OtterWise-Frame3.png" />
                        <p>Informational Modules</p>
                        <img src="img/OtterWise-Frame4.png" />
                        <p>Misinformation Detector</p>
                        <img src="img/OtterWise-Frame5.png" />
                        <p>Description of Misinformation Detector</p>
                        <img src="img/OtterWise-Frame6.png" />
                        <p>Widgets</p>
                    </div>

                    <div className="break"></div>

                    <Link to='/work' className='purple-button'>Back to Projects</Link>

                </div>

            </div>

            <Footer />

        </div>
    );
}
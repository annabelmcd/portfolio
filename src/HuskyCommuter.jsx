import React from 'react';
import { NavBar } from './NavBar.jsx';
import { Footer } from './Footer.jsx';
import { Link } from 'react-router';

export function HuskyCommuter(props) {
    return (
        <div>
            <NavBar />

            <div className='Project-section'>

                <div className='main'>

                    <img src="/img/HuskyCommuter-Banner.png" className='banner'/>
                    <div className="break"></div>

                    <div className='heading block'>
                        <h1>HuskyCommuter</h1>
                        <hr />
                        <p>An app designed for University of Washington commuters to simplify the commuting process by putting everything in one place: from travel planning, parking information, and campus updates.</p> 
                        <hr />
                        <h2>INFO 360 -</h2>
                        <h2>Design Methods</h2>
                        <hr />
                        <h2>Relevant Tools Used:</h2>
                        <p><strong>Figma:</strong> for wireframing and prototyping</p>
                    </div>

                    <div className="break"></div>
                    
                    <div className='problem block'>
                        <h2>The Problem</h2>
                        <hr />
                        <p>Commuting plays a major role in how students structure their days, connect with peers, and engage with campus activities. However, many UW students face challenges such as long travel times, inconsistent bus schedules, and tranferring busses/trains. These daily struggles can lead to added stress, lateness, and reduced motivation to stay involved on campus.</p>
                    </div>

                    <div className="break"></div>

                    <div className='research block'>
                        <h2>User Research</h2>
                        <hr />
                        <p>We designed an distributed a survey to University of Washington commuters to learn more about their experiences with commuting and public transportation and pinpoint the focus areas for this project.</p>
                        <hr />
                        <h3>Key Results</h3>
                        <hr />
                        <div className='results'>
                            <h4>• Parking</h4>
                            <p>↳ Parking on campus is extremely frustrating. Finding open spots and paying the high fee negatively effects their commuting experiences.</p>
                            <h4>• Involvement on Campus</h4>
                            <p>↳ UW commuters feel that traveling all of the time and not living near campus limits their involvement on campus (RSOs, time spent, friends, etc.). They are lacking a solid campus community.</p>
                            <h4>• Public Transportation Scheduling</h4>
                            <p>↳ Planning around the inconsistencies of public transportation is also something that negatively impacts their commuting experiences.</p>
                        </div>
                    </div>

                    <div className='competitive-analysis block'>
                        <h2>Competitive Analysis</h2>
                        <hr />
                        <p>We explored solutions that already exist that try to solve our problem and identified their strengths and weaknesses in order to inform the direction of our product.</p>
                        <hr />
                        <h3>Clever Commute</h3>
                        <img src='/img/HuskyCommuter-CleverCommute.png' />
                        <div className='pros-cons'>
                            <h4>Key Strengths:</h4>
                            <p>↳ Provides a form of community for commuters through a forum-like communication platform.</p>
                            <p>↳ Shows the history of different trains/public transportation so that people can plan using long-term data and with much more information than is typically available.</p>
                            <h4>Key Weaknesses</h4>
                            <p>↳ The UI is very confusing and difficult to navigate.</p>
                            <p>↳ The app is not very popular, and since it relies heavily on updates from users, having a small user base means it doesn’t function ideally. </p>
                        </div>
                        <hr />
                        <h3>CityMapper</h3>
                        <img src='/img/HuskyCommuter-CityMapper.png' />
                        <div className='pros-cons'>
                            <h4>Key Strengths:</h4>
                            <p>↳ Provides users with all available information regarding various transportation options.</p>
                            <p>↳ Extremely engaging UI.</p>
                            <p>↳ Illustration of a user’s wellbeing when traveling. This includes aspects such as a total amount of money you’ve saved and how many calories you’ll burn depending on if you’re biking or walking to your destination. It focuses on both how you travel and how you feel when you travel. </p>
                            <h4>Key Weaknesses</h4>
                            <p>↳ The abundance of features can be overwhelming for new users.</p>
                            <p>↳ Inability to compare routes easily.</p>
                        </div>
                       
                    </div>

                    <div className="break"></div>

                    <div className='ideation block'>
                        <h2>Ideation</h2>
                        <hr />
                        <img src='/img/HuskyCommuter-ideation.png' />
                    </div>

                    <div className='ideation block'>
                        <h2>Analytical Evaluation</h2>
                        <hr />
                        <p>After completing our intial prototype in Figma, we completed a cognitive walkthrough to pinpoint areas to improve.</p>
                    </div>

                    <div className="break"></div>

                    <a href="https://drive.google.com/file/d/1wE52ji4lMihAY4DBhobiK6DfVHCKKy_2/view?usp=sharing" className='purple-button'>Link to Cognitive Walkthrough</a>
                    <div className="break"></div>

                    <div className='ideation block'>
                        <h2>Empirical Evaluation</h2>
                        <hr />
                        <p>After completing our second iteration of our design, we completed a series of usability tests to improve further.</p>
                    </div>

                    <div className="break"></div>

                    <a href="https://drive.google.com/file/d/1iz0dwJyXnKjumS6Nx07qCOKNpBMMmpQi/view?usp=sharing" className='purple-button'>Link to Interview Scripts</a>

                    <div className="break"></div>

                    <div className='solution block'>
                        <h2>Our Solution</h2>
                        <hr />
                        <h3>Primary Features</h3>
                        <div className='features'>
                            <hr />
                            <h4>• Travel Planner</h4>
                            <p>↳ Users can import their class schedules and recieve travel options to arrive on-time.</p>
                            <h4>• Live Parking Map</h4>
                            <p>↳ Shows available parking spots across campus. Users can also reserve spots through the app.</p>
                            <h4>• Commuter Chat</h4>
                            <p>↳ Helps commuter students build community. Also allows commuters to discuss things like bus delays or road closures to support each others travel experiences.</p>
                        </div>
                    </div>

                    <div className="break"></div>

                    <a href="https://www.figma.com/proto/6fAY1OHm2RQ6PURsx67HIw/INFO-360---Prototype?node-id=19-4&p=f&t=PWcQymsKhDNvYEvt-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A4" className='purple-button'>Link to Interactive Prototype</a>
                    <Link to='/work' className='purple-button'>Back to Projects</Link>

                </div>

            </div>

            <Footer />

        </div>
    );
}
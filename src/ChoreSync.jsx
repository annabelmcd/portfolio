import React from 'react';
import { NavBar } from './NavBar.jsx';
import { Footer } from './Footer.jsx';
import { Link } from 'react-router';

export function ChoreSync(props) {
    return (
        <div>
            <NavBar />

            <div className='Project-section'>

                <div className='main'>

                    <img src="img/ChoreSync-Banner.png" className='banner'/>
                    <div className="break"></div>

                    <div className='heading block'>
                        <h1>ChoreSync</h1>
                        <hr />
                        <p>A free, easy-to-use website that helps roomates fairly divide, track, and complete household chores through shared checklists, calendars, and reminders.</p> 
                        <p>Our website is designed for anyone with roommates or housemates, with an interface made to feel familiar and easy to use, especially for students. Users can easily delegate tasks based on each other's schedules, creating an efficient and organized way to divide household responsibilities.</p>
                        <hr />
                        <h2>INFO 340 -</h2>
                        <h2>Client-Side Development</h2>
                        <hr />
                        <h2>Relevant Tools Used:</h2>
                        <p><strong>Figma:</strong> for prototyping</p>
                        <p><strong>git & Github:</strong> for collaborative development</p>
                        <p><strong>HTML:</strong> for the static elements of page content</p>
                        <p><strong>CSS:</strong> for the design of page content</p>
                        <p><strong>JavaScript:</strong> for the interactivity of the website</p>
                        <p><strong>React:</strong> the core of this single page application</p>
                        <p><strong>Firebase:</strong> our hosting site where authentication and the real time database exist</p>
                    </div>
                    
                    <div className="break"></div>

                    <div className='problem block'>
                        <h2>Context</h2>
                        <hr />
                        <p>The purpose of this project was website implementation, not research or design.</p>
                    </div>

                    <div className="break"></div>

                    <div className='problem block'>
                        <h2>The Problem</h2>
                        <hr />
                        <p>Many people struggle with dividing up household chores fairly and keeping track of what needs to get done. When multiple people live together, it can be hard to stay organized and make sure tasks are shared evenly, especially when everyone has different schedules and priorities. Without proper reminders or deadlines, chores are often forgotten or left unfinished, which can lead to frustration and imbalance in shared spaces. Having a clear system to assign, track, and remind people about their responsibilities can make daily life smoother and more cooperative.</p>
                    </div>

                    <div className="break"></div>

                    <div className='solution block'>
                        <h2>Our Solution</h2>
                        <hr />
                        <h3>Primary Features</h3>
                        <div className='features'>
                            <hr />
                            <h4>• Member Views</h4>
                            <p>↳ Show household tasks per person in each view, or see everyone's tasks collectively.</p>
                            <h4>• Calendar View</h4>
                            <p>↳ See tasks in a calendar for better planning.</p>
                            <h4>• Join & Create Households</h4>
                            <p>↳ Join and create as many households as needed.</p>
                            <h4>• Add and Assign Tasks</h4>
                            <p>↳ Easily assign tasks to roomates and account for unavailability.</p>
                            <h4>• To-Do List</h4>
                            <p>↳ See tasks as a to-do list and check them off with ease.</p>
                            <h4>• Track Contribution</h4>
                            <p>↳ Track individual contribution to keep everyone accountable.</p>
                        </div>
                    </div>

                    <div className="break"></div>

                    <div className='prototype block'>
                        <h2>Website Frames</h2>
                        <hr />
                        <img src="img/ChoreSync-MainPage.png" />
                        <p>The main screen of our website that shows a list of tasks that need to be completed. Clicking on any of the names in the navigation bar will filter the tasks to those assigned to that household member. From each page, the user can easily navigate anywhere within the website as the navigation bar is always visible.</p>
                        <img src="img/ChoreSync-CalendarPage.png" />
                        <p>The Calendar Page where tasks are displayed based on their assigned due dates. The toggle at the top allows users to seamlessly transition between weeks.</p>
                        <img src="img/ChoreSync-ProgressPage.png" />
                        <p>The Progress Page. Each task has a designated number of points, depending on its difficulty. After a household member marks a task complete, their stats are updated and visible on the Progress page.</p>
                        <img src="img/ChoreSync-AddTask.png" />
                        <p>By clicking the green "Add Task" button that is visible on every page, members can easily add new tasks and assign them to anyone in the household.</p>
                        <img src="img/ChoreSync-EditChores.png" />
                        <p>If any member wishes to change the list of chores selected for their household, they can navigate to the settings page.</p>
                        <img src="img/ChoreSync-Create&Join.png" />
                        <p>Users can join and create as many households as they would like and easily swap between them in settings.</p>
                    </div>

                    <div className="break"></div>

                    <Link to='/work' className='purple-button'>Back to Projects</Link>

                </div>

            </div>
            <Footer />

        </div>
    );
}
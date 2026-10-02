import React from 'react';
import { NavBar } from './NavBar.jsx';
import { Footer } from './Footer.jsx';
import { Link } from 'react-router';

export function FashionForwardDashboard(props) {
    return (
        <div>
            <NavBar />

            <div className='Project-section'>

                <div className='main'>

                    <img src="./img/FashionForward.png" className='banner' alt='FashionForward Dashboard Banner' />
                    <div className="break"></div>

                    <div className='heading block'>
                        <h1>FashionForward Dashboard</h1>
                        <hr />
                        <h2>INFO 380 -</h2>
                        <h2>Product and Information Systems Management</h2>
                        <hr />
                        <p>This solution tracks supplier sustainability metrics and performance data, automatically checks supplier data for compliance, creates alerts for non-compliant suppliers, tracks corrective actions, uploads audit documents, generates reports, and displays supplier performance information through the KPI Dashboard.</p>
                        <hr />
                        <h2>Relevant Tools Used:</h2>
                        <p><strong>Jira:</strong> for sprint planning & task management</p>
                        <p><strong>Miro:</strong> for workflow diagramming</p>
                        <p><strong>Excel:</strong> for project management</p>
                        <p><strong>Claude:</strong> for prototyping and final design</p>
                        <p><strong>Github:</strong> for dashboard hosting</p>
                    </div>

                    <div className="break"></div>

                    <a href="https://annabelmcd.github.io/FSCTP-INFO380/" className='purple-button' target="_blank" rel="noopener noreferrer">Link to Prototype</a>
                    <div className="break"></div>

                    <div className="break"></div>

                    <div className='problem block'>
                        <h2>The Problem</h2>
                        <hr />
                        <p>FashionForward is committed to sustainable and ethical production, but its current systems can’t support that commitment. Reliance on manual reporting, a lack of real-time tracking, and poor data management across 200 distinct supply chains have created gaps in supply chain visibility and accountability. Supply chain executives lack the oversight necessary for performance monitoring, compliance directors can’t properly verify authentic compliance with sustainability metrics, and consumers are left without true transparency, which ultimately damages brand trust.</p>
                    </div>

                    <div className="break"></div>

                    <div className='research block'>
                        <h2>User Research</h2>
                        <hr />
                        <p>For the sake of this class, our team was given a document with stakeholder interviews to reference. We analyzed all information and built a table of stakeholder needs, ranking them by importance and impact.</p>
                        <img src="./img/StakeholderNeeds.png" alt='FashionForward Stakeholder Needs table' />
                        <p>A snippet of the table.</p>
                    </div>

                    <div className="break"></div>

                    <div className='block'>
                        <h2>Initial Opportunity Statement</h2>
                        <hr />
                        <p>FashionForward's supply chain operations have outgrown the systems supporting them. Tracing a single quality issue takes nearly three weeks, sustainability claims go largely unverified, and the analytics team spends roughly 60% of their time collecting and cleaning data rather than acting on it. The FSCTP addresses this directly by replacing manual tracing with blockchain-backed traceability, reactive logistics with IoT-driven monitoring, and unverified supplier self-reporting with automated compliance tracking.</p>
                    </div>
                    <div className="break"></div>

                    <a href="https://drive.google.com/file/d/1OGIew4fg2Jm9YUVO9zDsWnMB3mGvgBzT/view?usp=sharing" className='purple-button' target="_blank" rel="noopener noreferrer">Link to Executive Briefing</a>
                    <div className="break"></div>

                    <div className='solution block'>
                        <h2>Solution Vision & Strategy</h2>
                        <hr />
                        <p>The FSCTP will replace FashionForward’s fragmented manual process with a blockchain-centered platform for traceability, compliance monitoring, and supplier data management.</p>
                    </div>
                    <div className="break"></div>

                    <a href="https://drive.google.com/file/d/1ngYkjWb_X6OwUg3ose3ZR96lWHTQ2hxw/view?usp=sharing" className='purple-button' target="_blank" rel="noopener noreferrer">Link to Solution Vision & Strategy</a>
                    <div className="break"></div>

                    <div className="break"></div>

                    <div className='wireframe block'>
                        <h2>Release Plan</h2>
                        <hr />
                        <p>The team prioritized stories based on two criteria: foundational dependency and alignment with FashionForward’s most critical product goals.</p>
                    <img src="./img/Jira.png" alt='FashionForward Jira Sprint Planning' />
                        <p>A snippet of the sprint planning.</p>
                    </div>
                    <div className="break"></div>

                    <a href="https://drive.google.com/file/d/10sG4v0b7F_HHCPqe-G0Q4eVrfzSXv6Wi/view?usp=sharing" className='purple-button' target="_blank" rel="noopener noreferrer">Link to Release Plan Summary</a>
                    <div className="break"></div>


                    <div className="break"></div>

                    <div className='prototype block'>
                        <h2>Workflows</h2>
                        <hr />
                        <p>The following workflow maps the process by which supplier-submitted compliance data is checked against sustainability thresholds, flagged if a breach is detected, and resolved by internal compliance staff.</p>
                        <img src="./img/FlaggingWorkflow.png" alt='FashionForward Flagging Compliance Workflow' />
                        <p>The following workflow maps how the Sustainability and Compliance Director interacts with the KPI dashboard, from login and access verification through supplier search, flag review, corrective action documentation, report generation, and logoff, with error states at each decision point.</p>
                        <img src="./img/KPIWorkflow.png" alt='FashionForward KPI Dashboard Compliance Workflow' />
                        <p>The following KPI Dashboard data flow diagram traces how supplier compliance data moves from intake through automated flagging to corrective action and stakeholder review.</p>
                        <img src="./img/DataFlowDiagram.png" alt='FashionForward Data Flow Diagram' />
                    </div>
                    <div className="break"></div>

                    <a href="https://miro.com/app/board/uXjVHTMX8PM=/?share_link_id=463889003226" className='purple-button' target="_blank" rel="noopener noreferrer">Link to Workflows</a>
                    <div className="break"></div>

                    <div className='design block'>
                        <h2>Interactive Prototype</h2>
                        <hr />
                        <img src="./img/FSCTP1.png" alt='FashionForward Dashboard' />
                        <p>The main dashboard provides an overview of supplier compliance with FashionForward expectations. Interactive diagrams surface where suppliers are struggling the most, including an “At Risk” identifier to support breach prevention, a need identified by the SCD. A sortable supplier table below allows filtering by name, product type, compliance status, and upcoming audit date for individual-level visibility. </p>
                        <img src="./img/FSCTP2.png" alt='FashionForward Individual Supplier Page' />
                        <p>Clicking on any row in the supplier table redirects to that supplier’s individual page, displaying collected sustainability metrics and their compliance status as determined by the flagging system. Tracked metrics were informed by the data dictionary and SCD interview findings. All information updates automatically upon submission, validated against expected values as outlined in the data flow diagram.</p>
                        <img src="./img/FSCTP3.png" alt='FashionForward Notifications' />
                        <p>Notifications are sent automatically within 2 minutes of a breach, including relevant details and a direct link to the supplier’s profile, as outlined in the flagging system workflow. </p>
                        <img src="./img/FSCTP4.png" alt='FashionForward Compliance Issue Modal' />
                        <p>Clicking the “Breach” button on any supplier page opens a timeline of actions taken to address that issue. Users can classify, describe, and log corrective actions directly to the timeline, supporting the SCD’s need for documented follow-up, identified in interviews. </p>                        
                    </div>

                    <div className="break"></div>

                    <a href="https://drive.google.com/file/d/1a-8uSl-QEnu23l8C6nNx8aGdyTi25TsU/view?usp=sharing" className='purple-button' target="_blank" rel="noopener noreferrer">Link to Solution Design Brief</a>
                    <div className="break"></div>

                    <div className="break"></div>

                    <a href="https://annabelmcd.github.io/FSCTP-INFO380/" className='purple-button' target="_blank" rel="noopener noreferrer">Link to Prototype</a>
                    <div className="break"></div>

                    <div className="break"></div>

                    <Link to='/work' className='purple-button'>Back to Projects</Link>

                </div>

            </div>

            <Footer />

        </div>
    );
}

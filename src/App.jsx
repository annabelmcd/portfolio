import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { NavBar } from './NavBar.jsx';
import { AboutPage } from './AboutPage.jsx';
import { WorkPage } from './WorkPage.jsx';
import { PathwaysForward } from './PathwaysForward.jsx';
import { ChoreSync } from './ChoreSync.jsx';
import { HuskyCommuter } from './HuskyCommuter.jsx';
import { OtterWise } from './OtterWise.jsx';

export function App (props) {
    return (
        <AboutPage />
    );
}


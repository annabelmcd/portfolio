import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { NavBar } from './NavBar.jsx';
import { AboutPage } from './AboutPage.jsx';
import { WorkPage } from './WorkPage.jsx';

export function App (props) {
    return (
        <WorkPage />
    );
}


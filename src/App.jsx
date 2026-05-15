import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AboutPage } from './AboutPage.jsx';
import { WorkPage } from './WorkPage.jsx';
import { PathwaysForward } from './PathwaysForward.jsx';
import { ChoreSync } from './ChoreSync.jsx';
import { HuskyCommuter } from './HuskyCommuter.jsx';
import { OtterWise } from './OtterWise.jsx';
import { PersonalProjects } from './PersonalProjects.jsx';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

export function App (props) {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<AboutPage />} />
                <Route path='/work' element={<WorkPage />} />
                <Route path='/work/PathwaysForward' element={<PathwaysForward />} />
                <Route path='/work/ChoreSync' element={<ChoreSync />} />
                <Route path='/work/HuskyCommuter' element={<HuskyCommuter />} />
                <Route path='/work/OtterWise' element={<OtterWise />} />
                <Route path='/personal-projects' element={<PersonalProjects />} />
            </Routes>
        </>
    );
}


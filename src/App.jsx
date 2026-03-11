import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import { Routes, Route } from 'react-router';
import { AboutPage } from './AboutPage.jsx';
import { WorkPage } from './WorkPage.jsx';
import { PathwaysForward } from './PathwaysForward.jsx';
import { ChoreSync } from './ChoreSync.jsx';
import { HuskyCommuter } from './HuskyCommuter.jsx';
import { OtterWise } from './OtterWise.jsx';

export function App (props) {
    return (
        <Routes>
            <Route index element={<AboutPage />} />
            <Route path='/work' element={<WorkPage />} />
            <Route path='/work/PathwaysForward' element={<PathwaysForward />} />
            <Route path='/work/ChoreSync' element={<ChoreSync />} />
            <Route path='/work/HuskyCommuter' element={<HuskyCommuter />} />
            <Route path='/work/OtterWise' element={<OtterWise />} />
        </Routes>
    );
}


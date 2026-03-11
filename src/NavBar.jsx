import React from 'react';
import { Link } from 'react-router';

export function NavBar(props) {
        
    return (
        <div className="navbar"> 
            <header><h1>ANNABEL</h1></header>
            <div className="break"></div>
            <div className="buttons">
                <Link to='/portfolio' className="button about">About</Link>
                <div className="divider"> | </div>
                <Link to='/portfolio/work' className="button work">Work</Link>
            </div>
        </div>
    );

}
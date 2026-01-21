import React from 'react';

export function NavBar(props) {
        
    return (
        <div className="navbar"> 
            <header><h1>ANNABEL</h1></header>
            <div className="break"></div>
            <div className="buttons">
                <div className="button about">About</div>
                <div className="divider"> | </div>
                <div className="button work">Work</div>
            </div>
        </div>
    );

}
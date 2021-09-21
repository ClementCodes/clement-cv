import React from 'react';

import Navbar from '../components/Navbar';
import Project from '../components/Project';

export const Project2 = () => {
    return (
        <main>
            <div className="project">
                <Navbar />
                <Project projectNumber={1} />
                <div className="absolute">
                   
                </div>
            </div>
        </main>
    )
};

export const Project3 = () => {
    return (
        <main>
            <div className="project">
                <Navbar />
                <Project projectNumber={2} />
            </div>
        </main>
    )
};

export const Project4 = () => {
    
    return (
        <main>
            <div  className="project">
                <Navbar />
                <Project id="der" projectNumber={3} />     
            </div>
        </main>
    )
};




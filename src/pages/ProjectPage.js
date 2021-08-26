import React from 'react';
import ButtonsScroll from '../components/Buttons-scroll';
import Navbar from '../components/Navbar';

import Project from '../components/Project';






export const Project2 = () => {
    return (
        <main>

            <div className="project">
                <Navbar/>
               

                <Project projectNumber={1} />
                <div className="absolute">
                    <ButtonsScroll left={"/projetflag"} right={"/project-3"} />
                    </div>
            </div>
        </main>
    );
};

export const Project3 = () => {
    return (
        <main>

            <div className="project">
              
                <Navbar/>

                <Project projectNumber={2} />
                <ButtonsScroll left={"/project-2"} right={"/project-4"} className="absolute" />
            </div>
        </main>
    );
};

export const Project4 = () => {
    
    return (
        <main>

            <div className="project">
            <Navbar/>

                <Project projectNumber={3} />
                <ButtonsScroll left={"/project-3"} right={"/contact"} />
            </div>
        </main>
    );
};




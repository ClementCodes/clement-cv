import React from 'react';
import ButtonsScroll from '../components/Buttons-scroll';
import Navigation from '../components/Navigation';
import Project from '../components/Project';





export const Project1 = () => {





    return (
        <main>

            <div className="project">
                <Navigation />

                <Project projectNumber={0} />
                <ButtonsScroll left={'/projetFlag'} right={'/project-2'} />
            </div>
        </main>
    );
};

export const Project2 = () => {
    return (
        <main>

            <div className="project">
                <Navigation />

                <Project projectNumber={1} />
                <ButtonsScroll left={"/project-1"} right={"/project-3"} />
            </div>
        </main>
    );
};

export const Project3 = () => {
    return (
        <main>

            <div className="project">
                <Navigation />

                <Project projectNumber={2} />
                <ButtonsScroll left={"/project-2"} right={"/project-4"} />
            </div>
        </main>
    );
};

export const Project4 = () => {
    return (
        <main>

            <div className="project">
                <Navigation />

                <Project projectNumber={3} />
                <ButtonsScroll left={"/project-3"} right={"/contact"} />
            </div>
        </main>
    );
};




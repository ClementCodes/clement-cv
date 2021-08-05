import React from 'react';
import ButtonsScroll from './Buttons-scroll';
import Navigation from './Navigation';
import Pays from './Pays';



const Projet = () => {
    return (
        <div>
            <Navigation />

            <Pays />
            <div className="countries"></div>
            <ButtonsScroll left={"/"} right={"/project-1"} />

        </div>
    );
};

export default Projet;
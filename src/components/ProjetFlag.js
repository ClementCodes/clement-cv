import React from 'react';
import ButtonsScroll from './Buttons-scroll';
import Navbar from './Navbar';

import Pays from './Pays';



const Projet = () => {
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Pays />
            <div className="countries"></div>
            <ButtonsScroll left={"/"} right={"/project-2"} />

        </div>
    );
};

export default Projet;
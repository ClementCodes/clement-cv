import React from 'react';

import Navbar from './Navbar';

import Pays from './Pays';



const Projet = () => {
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br /> <div className="countries"><p>Ici un projet en REACT avec une api rest qui references les drapeaux du monde ( pas tous) avec une methode axios simple </p></div>
            
           
            <br />
            <br />
            <br />
            <Pays />
            <div className="countries"></div>
        

        </div>
    );
};

export default Projet;
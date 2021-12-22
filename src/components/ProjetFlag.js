import React from 'react';

import Navbar from './Navbar';

import Pays from './Pays';



const Projet = () => {
    return (
        <div>
            <Navbar />
            <br />
            <div className="countries"><p>             Ici un projet en REACT avec une api rest qui références les drapeaux du monde ( pas tous) avec une méthode venant du module axios .
                Il est possible de faire défiler le nombre de drapeaux avec le curseur juste en dessous afin de définir le nombre de drapeaux de chaque continent que l'on souhaite visualiser.
                <br />
                <p>L'api est DONE il faut que je m'en occupe </p>
            </p> <Pays /></div>
        

        </div>
    )
};

export default Projet;
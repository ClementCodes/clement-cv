import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <h1 className="header-home" >Clément<span className="title-cv" >CV</span>
            </h1>
            <br />
            <br />
            <h2>
                <p>Bienvenue sur ma page  portfolio, elle est entièrement réalisé en react et en cours de réalisation.
                    <br />
                    <br />
                    <p>Je me presente Clément 33 ans,  vous y trouverez  plusieurs projets sur differentes pages  avec les liens ci dessous  :</p>
                    <br /><br /><br />
                   
                        
                    <a href="/"
   download="../img/cv-dev-web.png"> <li> Ici un lien  pour télécharger mon cv standard
                        </li></a>
                       
                       
                    <br />
                    <li>  Au milieu de la page d'acceuil avec 4 liens de projets </li>
                    <br />
                    <li>   Puis un lien qui dirigera  vers la page  de contact</li>
                    <li></li>
                </p>
                <p></p>    
            </h2>
        </div>
    );
};

export default Header;
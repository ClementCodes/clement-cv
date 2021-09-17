import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import gitHub from "../assets/github.png"
import mail from "../assets/mail.png"

// import { projectsData } from '../data/projectsData';


const Navbar = () => {
 
  
  

    return (
        <nav   >
            <div className="p-body">
          
                <div className="h1 button"  >
                    <h1 className="header-home" >Clément <span className="title-cv" > PORTFOLIO</span> </h1>
                   <div>
                    <NavLink className="contactez-moi button-cv" to="/contact" >
                            
                    <span> Contact</span>
                      <img src={mail} alt="" />
                       
                    </NavLink>
                    </div>
                    
                   
                </div>

                <br />
                <p>Bienvenue sur mon portfolio.  Il est entièrement réalisé from scratch avec la librairie React, pour le style j’utilise le préprocesseur Sass,  vous y trouverez  plusieurs projets  sur differentes pages  avec les liens ci dessous  :</p>
                <br /><br /><br />
                <div className="button">   <a href="./assets/img/cv.jpg" target="_blank"
                > <li className="lien-cv"> Ici un lien  pour télécharger mon cv
                    </li> </a></div>
                <br />
                <li>  Au milieu de la page d'acceuil avec 4 liens de projets </li><br />
                
                <a className="gitHub" href="https://github.com/ClementCodes">
                    <div className="github button" >           
                        <span >Mon Github</span>
                        <img src={gitHub} alt="" />
                    </div>
                </a>

                <br />
                <br />
                    
                <li></li>
                 
                <p>Ce Portfolio est en  cours de réalisation notamment la partie desktop .... mais si vous voyez des choses à améliorer merci de me contacter sur la page dédiée à cet effet ce sera avec grand plaisir </p>
                <br />
               
            </div>

      
            <div className="liste" >
           
                <NavLink to="/" exact >
                    <li className="li-nav">Acceuil </li>
                </NavLink>
                <NavLink to="/projetflag"  >
                    <li className="li-nav">Projet React </li>
                </NavLink>
                <NavLink to="/project-2" >
                    <li className="li-nav"> Porjet MERN </li>
                </NavLink>
                <NavLink to="/project-3" >
                    <li className="li-nav">TypeScript </li>
                </NavLink>
                <NavLink to="/project-4" >
                    <li className="li-nav">Projet PHP </li>
                </NavLink>
                {/* <NavLink to="/contact" >
                    <li className="li-nav">Contact</li>
                </NavLink> */}
         
            </div>
           
       
        </nav>
    );
}

export default Navbar;
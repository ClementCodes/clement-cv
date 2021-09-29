import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import gitHub from "../assets/github.png"
import mail from "../assets/mail.png"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import { projectsData } from '../data/projectsData';


const Navbar = () => {
 
  
  

    return (
        <nav  >
            <div className="p-body">    
                <div className="liste1 "   >
                    <NavLink to="/"  className="li-nav1"    >Clément  PORTFOLIO</NavLink>
                    
                   
                        <NavLink className="contactez-moi " activeClassName="liste-nav-active-2"   to="/contact"onClick={() => scroll.scrollToBottom()} >              
            Contact
                            <img src={mail} alt="" /> 
                        </NavLink>
                        <div>
                    </div>         
                </div>
                <br />
                <span>
             
                Bienvenue sur mon portfolio,   </span>   <p> Il est entièrement réalisé from scratch avec la librairie React, pour le style j’utilise le préprocesseur Sass avec flexbox,  vous y trouverez  plusieurs projets  sur differentes pages  avec les liens ci dessous  :</p>
                <br /><br />
                <div className="button">
                    <a href="./assets/img/cv.jpg" target="_blank" >
                        <li className="lien-cv"> Ici un lien  pour télécharger mon cv
                        </li>
                    </a>
                </div>
                <br />
                <li className="li-big">  Au milieu de la page d'acceuil avec plusieurs liens de projets </li><br />
              
                <a className="gitHub" href="https://github.com/ClementCodes">
                    <div className="github button" >
                        <span >Mon Github</span>
                        <img src={gitHub} alt="" />
                    </div>
                </a>
                <br />
                <br />

                <p>Ce Portfolio est en  cours de réalisation notamment la page "Home" pour le style .... mais si vous voyez des choses à améliorer merci de me contacter sur la page dédiée à cet effet ce sera avec grand plaisir </p>
                <br />
               
            </div>

            <Element name="scroll-container-first-element" >
            <div className="liste" >
      
           
                <NavLink to="/" className=" li-nav " activeClassName="liste-nav-active" exact onClick={() => scroll.scrollToBottom()} >
            
                   Acceuil 
                </NavLink>
              
                <NavLink className=" li-nav " activeClassName="liste-nav-active" to="/projetflag" onClick={() => scroll.scrollToBottom()} >
             
                Projet React 
         
                    
                </NavLink>
                <NavLink className=" li-nav " activeClassName="liste-nav-active" to="/project-2" onClick={() => scroll.scrollToBottom()} >
                    
                 Porjet MERN
                </NavLink>
                <NavLink className=" li-nav "  activeClassName="liste-nav-active" to="/project-3" onClick={() => scroll.scrollToBottom()}>
                   TypeScript 
                </NavLink>
                <NavLink className=" li-nav "  activeClassName="liste-nav-active"to="/project-4"onClick={() => scroll.scrollToBottom()} >
                   Projet PHP 
                </NavLink>
                {/* <NavLink to="/contact" >
                    <li className="li-nav">Contact</li>
                </NavLink> */}
      
            </div>
            </Element>
       
        </nav>
    );
}

export default Navbar;
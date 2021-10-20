import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import gitHub from "../assets/github.png"
import mail from "../assets/mail.png"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import SocialNetwork from "../components/SocialNetworks";


const Navbar = () => {




    return (
        <nav  >
            <div className="p-body">
                <div className="liste1 "   >
                    <NavLink to="/" className="li-nav1"    >Clément  PORTFOLIO</NavLink>
                    <div>
                    </div>
                    <NavLink className="troisTraits " activeClassName="liste-nav-active-2" to="/contact" onClick={() => scroll.scrollToBottom()} >
                        <img src={mail} alt="" />
                        Contact
                    </NavLink>
                </div>
                <div className="contact-reseaux">
                <NavLink className="contactez-moi " activeClassName="liste-nav-active-2" to="/contact" onClick={() => scroll.scrollToBottom()} >
                    <img src={mail} alt="" />
                    Contact  
                </NavLink>
                <SocialNetwork />
                </div>
                <div className="bienvenue">
                    <span>         Bienvenue sur mon portfolio,   </span>   <p> Il est entièrement réalisé from scratch avec la librairie React, pour le style j’utilise le préprocesseur Sass avec flexbox</p>
                </div>
                <a className="gitHub" href="https://github.com/ClementCodes">
                    <div className="github " >
                        <img src={gitHub} alt="" />
                        <span >Mon Github</span>
                    </div>
                </a>
                <div className="button">
                    <a href="./assets/img/cv.jpg" target="_blank" >
                        <li className="lien-cv">  mon cv
                        </li>
                    </a>
                </div>

            </div>
        </nav>
    )
};







export default Navbar;

{/* <Element name="scroll-container-first-element" >
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

    // </div>
// </Element> */}
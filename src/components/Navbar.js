import React from 'react';
import { NavLink } from 'react-router-dom';
import gitHub from "../assets/github.png";
import mail from "../assets/mail.png";
import cercle from "../assets/cercle.png";
import { Link, Element, animateScroll as scroll, } from 'react-scroll'
import SocialNetwork from "../components/SocialNetworks";
import btn from "../assets/menu.png"
import { useState, useEffect } from 'react';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [largeur, setLargeur] = useState(Window.innerWidth)
    
    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu)

    }

    useEffect(() => {
        const changeWidth = () => {
            
            setLargeur(window.innerWidth)
            if (window.innerWidth > 500) {
                setToggleMenu(false)
            }
        }
        window.addEventListener('resize', changeWidth)
        
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <>
            <Element name="scroll-container-first-element" >
                <nav >
                    <div className="p-body">
                        <div className="liste1 "   >
                   
                            {(toggleMenu || largeur > 7400) && (
                                <ul className="liste">
                                    <NavLink to="/" onClick={toggleNavSmallScreen} >        <li className="items">Acceuil </li> </NavLink>
                                    <button className="btn-items" onClick={toggleNavSmallScreen}  >X</button>
                                    <NavLink to="/projetflag" > <li className="items">Projet React (API) </li></NavLink>
                                    <NavLink to="/project-2" >   <li className="items">Projet MERN </li></NavLink>
                                    <NavLink to="/project-3" >   <li className="items">Projet TypeScript React </li></NavLink>
                                    <NavLink to="/project-4" >  <li className="items">Projet PHP CRUD</li></NavLink>
                                    <a href="./assets/img/cv.jpg" target="_blank" >         <li className="items">CV</li></a>
                                    <NavLink to="/formulaire" >          <li className="items">Contact</li></NavLink>
                                </ul>
                            )}
             
                            <NavLink to="/" className="li-nav1"    >PORTFOLIO</NavLink>
                            <div>
                            </div>
                            <button className="troisTraits" onClick={toggleNavSmallScreen}  ><img src={btn} alt="" /></button>

                        </div>
                        <div className="cercle">
                            <a href="./assets/img/cv.jpg" target="_blank" >
                                <img src={cercle} alt="" />
                            </a>
                        </div>
                        <div className="contact-reseaux">
                            <Link className="contactez-moi " activeClassName="liste-nav-active-2" to="/Formulaire" onClick={() => scroll.scrollToBottom()} >
                                <img src={mail} alt="" />
                                Contact
                            </Link>
                            <SocialNetwork />
                        </div>
                        <div className="bienvenue">
                            <span>         Bienvenue sur mon portfolio,   </span>   <p> Il est entièrement réalisé from scratch avec la librairie React, pour le style j'utilise le préprocesseur Sass avec flexbox</p>

                    
                        </div>
                        <a className="gitHub" href="https://github.com/ClementCodes">
                            <div className="github " >
                                <img src={gitHub} alt="" />
                                <span >Mon Github</span>
                            </div>
                        </a>
                    </div>
                </nav>
            </Element>
        </>
    )
};







export default Navbar;

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => {


    const [toggleMenu, setToggleMenu] = useState(false)
    const [largeur, setLargeur] = useState(window.innerWidth)


    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu)
    }


    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth)
            if (Window.innerWidth > 500) {
                setToggleMenu(false)
            }
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize',changeWidth)
        }
    },[])
    return (
        <nav  >
      
            {(toggleMenu || largeur > 500) && (   
                <ul className="liste">
                    <NavLink to="/" exact >
                        <li className="items">Acceuil</li>
                    </NavLink>
                    <NavLink to="/projetFlag" >
                        <li className="items">Projet Flag</li>
                    </NavLink>
                    <NavLink to="/project-2" >
                        <li className="items">Porjet MERN</li>
                    </NavLink>
                    <NavLink to="/project-3" >
                        <li className="items">Projet 3</li>
                    </NavLink>
                    <NavLink to="/project-4" >
                        <li className="items">Projet My_cave</li>
                    </NavLink>
                    <NavLink to="/contact" >
                        <li className="items">Contact</li>
                    </NavLink>
                </ul>)}
            <button onClick={toggleNavSmallScreen} className="btn">-=</button>
        </nav>
    );
};

export default Navbar;
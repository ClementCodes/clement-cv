import React, { useEffect } from 'react';
import { useState } from 'react';

const Burger = () => {

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
    },[])
    return (
        <nav>

            {(toggleMenu ||   largeur > 500)  && (
          
                <ul className="liste">
                    <li className="items">Acceuil</li>
                    <li className="items">Projet </li>
                    <li className="items">1</li>
                    <li className="items">1</li>
                    <li className="items">1</li>
                    <li className="items">Contact</li>
            </ul>
                )}

            
          
            <button onClick={ toggleNavSmallScreen }className="btn" >Btn</button>
        </nav>
    )
};

export default Burger;
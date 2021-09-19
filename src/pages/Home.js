import React from 'react';
import { NavLink } from 'react-router-dom';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import react from "../assets/react.png"
import types from "../assets/ts-react.png"



const Home = () => {
  
    return (
        <div className="home ">
            <div>
                <Navbar>
                </Navbar>
            </div><div className="projet">
            <NavLink to="/projetFlag" >
                <div className="button-project" >
                    <div className="button" >Projet React sur API REST<img src={react} alt="logo-react" /></div>
                    <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
                </div>
            </NavLink>
            <NavLink to="/project-2" >
                <div className="button-project" >
                    <div className="button" >Projet MERN <img src={react} alt="logo-react" /></div>
                    <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
                </div>
            </NavLink>
            <NavLink to="/project-4"  >
                <div className="button-project" >
                    <div className="button" >Projet PHP CRUD </div>
                    <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
                </div>
            </NavLink>
            <a href="https://typescript-app-34e74.web.app/pokemons/"  >
                <div className="button-project" >
                    <div className="button" >Projet React CRUD Typescript<img className="types" src={types} alt="logo-react" /></div>
                    <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
                </div>
            </a>
            <NavLink to="/contact"  >
                <div className="button-project" >
                    <div className="button" >Page contact</div>
                    <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
                </div>
            </NavLink>
           
                </div>
        </div>

    )
}

export default Home;
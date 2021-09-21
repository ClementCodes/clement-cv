import React from 'react';
import { NavLink } from 'react-router-dom';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import react from "../assets/react.png"
import types from "../assets/ts-react.png"
import { Link } from 'react-router-dom';


const Home = () => {
  
    return (
        <div className="home ">
            <div>
                <Navbar>
                </Navbar>
                <br />
                
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
            <Link  href="der" to="/project-4"  >
                <div className="button-project" >
                    <div className="button" >Projet PHP CRUD </div>
                    <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
                </div>
            </Link>
            <Link  href="der" to="/project-3"  >
                <div className="button-project" >
                    <div className="button" >Projet React CRUD Typescript<img className="types" src={types} alt="logo-react" /></div>
                    <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
                </div>
                </Link>
            <Link  to="/contact"  >
                <div className="button-project" >
                    <div className="button" >Page contact</div>
                    <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
                </div>
            </Link>
           
                </div>
        </div>

    )
}

export default Home;
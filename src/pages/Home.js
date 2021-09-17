import React from 'react';
import { NavLink } from 'react-router-dom';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';




const Home = () => {
  
    return (
        <div className="home ">
         <div>
        <Navbar>
                </Navbar>
                </div>
  
            <div className="item">
            
                {/* <div className="header"><Header /> */}
            </div>
                
            <NavLink to="/projetFlag" >
                <div className="button-project" >
                    <div className="button" >Projet React sur API REST</div>
                 
                    <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
                      
                </div>
            </NavLink>
            <NavLink to="/project-2" >
                <div className="button-project" >
                    <div className="button" >Projet MERN </div>
                 
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

                    <div className="button" >Projet React CRUD Typescript</div>
                    
                    <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
                </div>
            </a>
            <NavLink to="/contact"  >
                <div className="button-project" >

                    <div className="button" >Page contact</div>
                    
                    <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
                </div>
            </NavLink>
           

            <div className="paul">
                <img src=".././public/assets/img/projet-2.jpg" alt="" />
            </div>
        </div>
       
    );
}

export default Home;
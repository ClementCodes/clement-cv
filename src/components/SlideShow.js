import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from "../assets/country.png";
import img2 from "../assets/tree.png";
import img3 from "../assets/my_cave.png";
import img4 from "../assets/pokemon.png";
import { NavLink } from 'react-router-dom';
import react from "../assets/react.png"


  

  
const Slideshow = () => {
  return (
    <div className="slideShow">
      <p className="un">Les projets  </p>
      <p className="deux">Du moment  </p>

      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${img1})` }}>
            <div className="projSlide">
              <NavLink to="/projetFlag" >
                <div className="button-project" >
                  <div className="button" >Projet React sur API REST<img src={react} alt="logo-react" /></div>
                </div>
                <div className="plus"> Plus d'informations !</div>
              </NavLink>
            </div>
          </div>
   
        </div>
        
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${img2})` }}>
            <div className="projSlide">
              <NavLink to="/project-2" >
                <div className="button-project" >
                  <div className="button" >Projet MERN<img src={react} alt="logo-react" /></div>
                 
                </div>
                <div className="plus"> Plus d'informations !</div>
              </NavLink>
            </div>
          </div>

        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${img3})` }}>
            <div className="projSlide">
              <NavLink to="/project-4" >
                <div className="button-project" >
                  <div className="button" >Projet PHP CRUD</div>
                </div>
                <div className="plus"> Plus d'informations !</div>
              </NavLink>
            </div>
          </div>
         
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${img4})` }}>
            <div className="projSlide">
              <NavLink to="/project-3" >
                <div className="button-project" >
                  <div className="button" >Projet React CRUD Typescript</div>
                </div>
                <div className="plus"> Plus d'informations !</div>
              </NavLink>
            </div>
          </div>
         
        </div>
           
      </Slide>
    </div>
  )
};
  
  export default Slideshow;
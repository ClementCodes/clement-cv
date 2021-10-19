import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from "../assets/img2.jpg";
import img2 from "../assets/img1.jpg";
import img3 from "../assets/img2.jpg";
import { NavLink } from 'react-router-dom';
import react from "../assets/react.png"


  

  
const Slideshow = () => {
  return (
    <div className="slideShow">
      <p>Les projets  <span> du moment</span></p>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${img1})` }}>
            <div className="projSlide">
              <NavLink to="/projetFlag" >
                <div className="button-project" >
                  <div className="button" >Projet React sur API REST<img src={react} alt="logo-react" /></div>
                </div>
                <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
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
                <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
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
                <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
              </NavLink>
            </div>
          </div>
         
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${img1})` }}>
            <div className="projSlide">
              <NavLink to="/project-3" >
                <div className="button-project" >
                  <div className="button" >Projet React CRUD Typescript</div>
                </div>
                <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
              </NavLink>
            </div>
          </div>
         
        </div>
           
      </Slide>
    </div>
  )
};
  
  export default Slideshow;
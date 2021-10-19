import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from "../assets/img2.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img2.jpg";
import { NavLink } from 'react-router-dom';
import react from "../assets/react.png"


  

  
  const Slideshow = () => {
      return (
        <div>

          <p>Les projets  <span> du moment</span></p>
          <Slide easing="ease">
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${img1})`}}>
              <NavLink to="/projetFlag" >
                <div className="button-project" >
                    <div className="button" >Projet React sur API REST<img src={react} alt="logo-react" /></div>
                    <div className="plus"> <span className="grey">|</span> Plus d'informations</div>
                </div>
            </NavLink>
                       
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${img2})`}}>
                <span>Projet Mern</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${img3})`}}>
                <span>Projet Typescript React</span>
              </div>
            </div>
          </Slide>
        </div>
      )
  };
  
  export default Slideshow;
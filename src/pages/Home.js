import React from 'react';
import { NavLink } from 'react-router-dom';
// import Header from '../components/Header';
import Navbar from '../components/Navbar';
import react from "../assets/react.png"
import types from "../assets/ts-react.png"
import { Link } from 'react-router-dom'
import Slideshow from '../components/SlideShow';
import Formulaire from '../components/Formulaire';
// import Contact from './Contact';
import {  DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const Home = () => {
  
    return (
        <div className="home ">
            <div>            
                <Navbar />        
                <br />            
            </div>
            <div className="containerSlide">
                <Slideshow />
              
            </div>
            <Element name="test2" className="element">
            <Formulaire/>
        </Element>
      
            {/* <Contact/> */}
        </div>

    );
}

export default Home;
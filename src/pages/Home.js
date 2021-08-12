import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonsScroll from '../components/Buttons-scroll';
// import DynamicText from '../components/DynamicText';
import Header from '../components/Header';
import SocialNetwork from '../components/SocialNetworks';




const Home = () => {
  
    return (
        <div className="body navigation ">
            <div className="header"><Header />
            </div>
          
                <div className="projet-flag button-home ">
                    <NavLink to="/projetFlag" >
                      <ul> <li className="color-button">Projet 1</li></ul>  
                    </NavLink></div>
                <div className="projet-2 button-home "><NavLink to="/project-2" >
                <ul> <li className="color-button">Projet 2</li></ul>    
                </NavLink></div>
                <div className="projet-3 button-home ">  <NavLink to="/project-3"  >
                <ul> <li className="color-button">Projet 3</li></ul>   
            </NavLink></div>
            <div className="projet-4 button-home" >  <NavLink to="/project-4"  >
            <ul> <li className="color-button">Projet 4</li></ul>   
                </NavLink></div>
                <div className="contact1 button-home" > <NavLink to="/contact" >
                <ul> <li className="color-button"> Contact</li></ul>   
            </NavLink></div>
            <div className="paul">
               <img src=".././public/assets/img/projet-2.jpg" alt="" />
            </div>
            {/* <div><DynamicText /> </div> */}
            <div className="color-social"><SocialNetwork /></div>
            {/* <div>
               <ButtonsScroll left={"/contact"} right={"/projetFlag"} /></div>  */}
        </div>
    );
};

export default Home;
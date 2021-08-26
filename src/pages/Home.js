import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';





const Home = () => {
  
    return (
        <div className="home navigation ">
           
            <div className="header"><Header />
            </div>
          
                <div className="projet-flag button-home ">
                    <NavLink to="/projetFlag" >
                      <ul> <li >Projet 1</li></ul>  
                    </NavLink></div>
                <div className="projet-2 button-home "><NavLink to="/project-2" >
                <ul> <li >Projet 2</li></ul>    
                </NavLink></div>
                <div className="projet-3 button-home ">  <NavLink to="/project-3"  >
                <ul> <li >Projet 3</li></ul>   
            </NavLink></div>
            <div className="projet-4 button-home" >  <NavLink to="/project-4"  >
            <ul> <li >Projet 4</li></ul>   
                </NavLink></div>
                <div className=" contact1 " > <NavLink to="/contact" >
                <ul> <li> Me contacter</li></ul>   
            </NavLink></div>
            <div className="paul">
               <img src=".././public/assets/img/projet-2.jpg" alt="" />
            </div>
            {/* <div><DynamicText /> </div> */}
           
            {/* <div>
               <ButtonsScroll left={"/contact"} right={"/projetFlag"} /></div>  */}
        </div>
    );
};

export default Home;
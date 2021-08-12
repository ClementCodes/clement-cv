import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (

    <div className="navigation">
      <ul>
        <NavLink to="/" exact activeClassName="nav-active" className="hover">
          <li className="nav-link">Accueil</li>
        </NavLink>
        <NavLink to="/contact" activeClassName="nav-active" className="hover">
          <li className="nav-link">Contact</li>
        </NavLink>
        <li className="nav-portfolio"> Projet
          <ul className="nav-projects">

            <NavLink to="/projetFlag" activeClassName="nav-active1"
              className="hover">
              <li className="nav-link" >Projet Flag</li>
            </NavLink>

            <NavLink to="/project-2" activeClassName="nav-active1"
              className="hover">
              <li className="nav-link">Projet Mern</li>
            </NavLink>


            <NavLink to="/project-3" activeClassName="nav-active1"
              className="hover">
              <li className="nav-link">Projet 3</li>
            </NavLink>

            <NavLink to="/project-4" activeClassName="nav-active1"
              className="hover">
              <li className="nav-link">Projet MyCave</li>
            </NavLink>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
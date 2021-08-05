import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (

    <div className="navigation">
      <ul>

        <NavLink to="/" exact activeClassName="nav-active" className="hover">
          <li>accueil</li>
        </NavLink>



        <li className="nav-portfolio"> Portfolio
          <ul className="nav-projects">

            <NavLink to="/projetFlag" activeClassName="nav-active1"
              className="hover">
              <li>projet Flag</li>
            </NavLink>

            <NavLink to="/project-2" activeClassName="nav-active1"
              className="hover">
              <li>projet 2</li>
            </NavLink>


            <NavLink to="/project-3" activeClassName="nav-active1"
              className="hover">
              <li>projet 3</li>
            </NavLink>

            <NavLink to="/project-4" activeClassName="nav-active1"
              className="hover">
              <li>projet 4</li>
            </NavLink>
          </ul>
        </li>


        <NavLink to="/contact" activeClassName="nav-active" className="hover">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (

    <div className="navigation">
      <ul>
        <li className="nav-portfolio"> Projet
          <ul className="nav-projects">
            <NavLink to="/project-4" >
              <li className="nav-link">Projet MyCave</li>
            </NavLink>
          </ul>
        </li>
      </ul>
    </div>
  )
};

export default Navigation;
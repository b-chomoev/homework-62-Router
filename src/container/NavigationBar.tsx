import React from 'react';
import {NavLink} from 'react-router-dom';

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <span className="navbar-brand "> <h1 className='display-3'>Beksultan Chomoev</h1></span>
        <ul className="navbar-nav mr-auto">
          <li className="nav-link">
            <NavLink to="/" className="nav-link">About me</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="contacts" className="nav-link">Contacts</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="resume" className="nav-link">Resume</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
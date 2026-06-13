import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen, toggleMenu }) {
  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className="brand-area">
        <div class="logo">Zicson</div>
        <div class="subtitle">Digital Solutions</div>
      </div>

      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active-route" : "nav-link"} onClick={toggleMenu}>
            <i className="fa-solid fa-house"></i> Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active-route" : "nav-link"} onClick={toggleMenu}>
            <i className="fa-solid fa-user"></i> About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/work" className={({ isActive }) => isActive ? "nav-link active-route" : "nav-link"} onClick={toggleMenu}>
            <i className="fa-solid fa-briefcase"></i> My Work
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/skills" className={({ isActive }) => isActive ? "nav-link active-route" : "nav-link"} onClick={toggleMenu}>
            <i className="fa-solid fa-code"></i> Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/testimonials" className={({ isActive }) => isActive ? "nav-link active-route" : "nav-link"} onClick={toggleMenu}>
            <i className="fa-solid fa-quote-left"></i> Testimonials
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-footer">
        <a href="tel:+2348137528741"><i className="fa-solid fa-phone"></i> +234 704 137 4919</a>
        {/* <a href="mailto:isaac@zicsonenterprise.com"><i className="fa-solid fa-envelope"></i> isaac@zicson.com</a> */}
        <NavLink to="/contact" className="nav-link" onClick={toggleMenu}><i className="fa-solid fa-comments"></i> Contact Panel</NavLink>
      </div>
    </aside>
  );
}
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen, toggleMenu }) {
  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className="brand-area">
        <div className="logo">Zicson</div>
        <div className="subtitle">Digital Solutions</div>
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
        {/* Direct Call Setup */}
        <a href="tel:+2347041374919">
          <i className="fa-solid fa-phone"></i> +234 704 137 4919
        </a>
        
        {/* WhatsApp Instant Messaging Link */}
        <a href="https://wa.me/2347041374919" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-whatsapp"></i> WhatsApp
        </a>

        {/* GitHub Repository Connection Link */}
        <a href="https://github.com/isaacchigo27-svg" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i> GitHub
        </a>
        
        {/* Internal Navigation Routing Link */}
        <NavLink to="/contact" className="nav-link" style={{ padding: 0 }} onClick={toggleMenu}>
          <i className="fa-solid fa-comments"></i> Contact Panel
        </NavLink>
      </div>
    </aside>
  );
}
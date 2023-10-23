import React from "react";
import { Link } from 'react-router-dom';

export default function Headertop(){
    return(
      // <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link to="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1>Append</h1>
          <span>.</span>
        </Link>
      
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="index.html#services">Services</Link></li>
            <li><Link to="index.html#portfolio">Portfolio</Link></li>
            <li><Link to="index.html#team">Team</Link></li>
            <li><Link to="blog.html">Blog</Link></li>
            <li className="dropdown has-dropdown"><Link to="#"><span>Dropdown</span> <i className="bi bi-chevron-down" /></Link>
              <ul className="dd-box-shadow">
                <li><a to="#">Dropdown 1</a></li>
                <li className="dropdown has-dropdown"><Link to="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down" /></Link>
                  <ul className="dd-box-shadow">
                    <li><Link to="#">Deep Dropdown 1</Link></li>
                    <li><Link to="#">Deep Dropdown 2</Link></li>
                    <li><Link to="#">Deep Dropdown 3</Link></li>
                    <li><Link to="#">Deep Dropdown 4</Link></li>
                    <li><Link to="#">Deep Dropdown 5</Link></li>
                  </ul>
                </li>
                <li><Link to="#">Dropdown 2</Link></li>
                <li><Link to="#">Dropdown 3</Link></li>
                <li><Link to="#">Dropdown 4</Link></li>
              </ul>
            </li>
            <li><Link to="index.html#contact">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <Link className="btn-getstarted" to="index.html#about">Get Started</Link>
      </div>
    // </header>
    )
}
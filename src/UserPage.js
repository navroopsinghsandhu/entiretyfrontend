import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function UserPage() {
  return (

    <div>
        <nav className ="navbar background">
            <ul className="nav-list">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <li>Home</li>
                </Link>
                <Link style={{ textDecoration: 'none' }}>
                    <li>Logout</li>
                </Link>
            </ul>
    
            <div className="rightNav">
                <input type="text" placeholder="Search for products..."name="search" id="search"/>
                <button className="btn btn-sm" type="submit"><i className="fa fa-search"></i></button>
                {/* <button className="btn btn-sm">Search</button> */}
            </div>
        </nav>

        <section className="firstsection">
            <div className="box-main">
                <div className="firstHalf">
                    <h1 className="text-big" id="web">Welcome! </h1>
                </div>
            </div>
        </section>
    </div>

  );
}

export default UserPage;
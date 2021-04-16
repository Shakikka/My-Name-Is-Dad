import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='title-container'>
                <h4 className="site-title">My Name is Dad</h4>
                <p>Hi, my name is App.</p>
                <p>Hi App, my name is Dad!</p>
            </div>
            <div className="nav-btn-container">
                <Link to={'/'}>
                    <button className="nav-btn">Humble Abode</button>
                </Link>
                <Link to={'/search'}>
                    <button className="nav-btn nav-search">Search</button>
                </Link>
            </div>
        </header>
    )
}

export default Header;
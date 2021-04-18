import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation().pathname; 
    
    return (
        <header>
            <div className='title-container'>
                <h4 className="site-title">My Name is Dad</h4>
                <p>Hi, my name is App.</p>
                <p>Hi App, my name is Dad!</p>
            </div>
            <div className="nav-btn-container">
                <Link to={'/'} aria-label='home'>
                    {location === '/search' && <button className="nav-btn nav-home">Humble Abode</button>}
                </Link>
                <Link to={'/search'} aria-label='search'>
                    {location === '/' && <button className="nav-btn nav-search">Search</button>}
                </Link>
            </div>
        </header>
    )
}

export default Header;

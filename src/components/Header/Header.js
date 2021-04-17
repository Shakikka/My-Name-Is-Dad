import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation().pathname; 
    let abode = true; 
    let search = true; 
    if(location === '/') {
        abode = true;
        search = false; 
    } else if (location === '/search' ) {
        abode = false; 
        search = true; 
    }

    return (
        <header>
            <div className='title-container'>
                <h4 className="site-title">My Name is Dad</h4>
                <p>Hi, my name is App.</p>
                <p>Hi App, my name is Dad!</p>
            </div>
            <div className="nav-btn-container">
                <Link to={'/'}>
                     {!abode && <button className="nav-btn">Humble Abode</button>}
                </Link>
                <Link to={'/search'}>
                    {!search && <button className="nav-btn">Search</button>}
                </Link>
            </div>
        </header>
    )
}

export default Header;
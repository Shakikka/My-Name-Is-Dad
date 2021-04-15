import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className='title-container'>
                <h4 className="site-title">My Name is Dad</h4>
                <p>Hi, my name is App.</p>
                <p>Hi App, my name is Dad!</p>
            </div>
            <div className="nav-btn-container">
                {/* <Link = */}
                <button className="nav-btn">Be Your Own Dad</button>
                <button className="nav-btn">Favorites</button>
            </div>
        </header>
    )
}

export default Header;
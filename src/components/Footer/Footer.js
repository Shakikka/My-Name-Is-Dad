import React from 'react';
import './Footer.css';
import { FaGithub } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-name'>
                <FaGithub />
                <a href="https://github.com/mattmcvey">Matt McVey</a>
            </div>
            <div className='footer-name'>
                <FaGithub />
                <a href="https://github.com/jgiwinski">Julia Iwinski</a>
            </div>
            <div className='footer-name'>
                <FaGithub />
                <a href="https://github.com/Shakikka">Joel Thomas</a>
            </div>
        </footer>
    )
}

export default Footer;
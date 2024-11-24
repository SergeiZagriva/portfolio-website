import React from 'react';
import './NavBar.css';
import { face } from '../../assets';


const NavBar = () => {

    return <div className='navBar'>

        <ul className='navList'>

            <li className='navItem'>
                About
            </li>

            <li className='navItem'>
                Projects
            </li>

            <li className='navItem'>
                Contact
            </li>

        </ul>

        <img className='face' src={face} alt="face" />

    </div>
};

export default NavBar; 
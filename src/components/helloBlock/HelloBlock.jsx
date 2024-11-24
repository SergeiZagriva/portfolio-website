import React from 'react';
import './HelloBlock.css';
import { arrow1 } from '../../assets';


const Hello = () => {
    return <div className='wrapper'>
        <div className='helloBlock'>
        <p className='helloText'>Hi, my <br></br> name is <strong>Sergei.</strong></p>
        <p className='helloText2'>I’m a <strong>Software Engineering graduate</strong> <br></br> from Portsmouth, UK.</p>
        </div>
        <img className='arrow1' src={arrow1} alt="arrow1" />
    </div>
    
    
};

export default Hello; 
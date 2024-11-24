import React from 'react';
import './IntroBlock.css';
import { programmer } from '../../assets';

const Intro = () => {
    return <div className='wrapper2'>
        <p className='heading1'>Let me <strong>introduce</strong> myself</p>
        <div className='introBlock'>
        <p className='introText'>My life journey has been dedicated to pursuing a professional football career, splitting my time between intense training and academic studies in sports. The dedication has led me to drop out of the university and sign my first professional contract in Estonia - a dream realised - only to pivot when an injury ended my career at the age of 22. 

<br></br><br></br>With no experience outside of sports, I decided to follow my passion for technology. I have completed a Software Engineering degree and have been fully commited to learning and developing in this new field. 

<br></br><br></br>I am now ready to start my career in technology, bringing my skills to a dynamic team where I can continue learning and building my future in this exciting new chapter.</p>
    </div>

    <img className='programmer' src={programmer} alt='programmerpic' />

    </div>
    
};

export default Intro; 
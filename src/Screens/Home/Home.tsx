import React from 'react';
import './Home.css';

import {Header, Food} from '../../Components';
import {width} from '../../config/dimensions';

import Intro from './Components/Intro';

function Home() {
    return (
        <div className='Home'>
            <Header />
            <Intro />
            <div className='Home_foodContainer' style={{width: width - 20}} >
                <Food />
            </div>
        </div>
    );
}

export default Home;
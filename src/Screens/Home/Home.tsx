import React from 'react';
import './Home.css';

import {Header} from '../../Components'
import Intro from './Components/Intro';

function Home() {
    return (
        <div className='Home'>
            <Header />
            <Intro />
        </div>
    );
}

export default Home;
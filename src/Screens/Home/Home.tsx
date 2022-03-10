import React from 'react';
import './Home.css';

import {Header, Food} from '../../Components';
import {width} from '../../config/dimensions';

import Intro from './Components/Intro';

import chicken from '../../Assets/chicken.jpg';
import cream from '../../Assets/cream.jpg';

function Home(props: any) {
    return (
        <div className='Home'>
            <Header props={props} />
            <Intro onClick={() => props.history.push('/foods')} />
            <div className='Home_foodContainer' style={{width: width - 20}} >
                {/* <Food img={chicken} name='Chicken and chips' price={1900} />
                <Food img={cream} name='Cream salad' price={3000} /> */}
            </div>
        </div>
    );
}

export default Home;
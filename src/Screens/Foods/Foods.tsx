import React from 'react';
import './Foods.css';

import { Header, Food } from '../../Components';
import {width} from '../../config/dimensions';

import chicken from '../../Assets/chicken.jpg';
import cream from '../../Assets/cream.jpg';

function Foods() {
    return (
        <div className='Foods_page'>
            <Header />
            <section>
                <p className='Foods_page_Title'>All</p>
                <div className='Food_foodContainer' style={{width: width - 20}} >
                    <Food img={chicken} name='Chicken and chips' price={1900} />
                    <Food img={cream} name='Cream salad' price={3000} />
                    <Food img={chicken} name='Chicken and chips' price={1900} />
                    <Food img={cream} name='Cream salad' price={3000} />
                    <Food img={chicken} name='Chicken and chips' price={1900} />
                    <Food img={cream} name='Cream salad' price={3000} />
                </div>
            </section>
        </div>
    );
}

export default Foods;
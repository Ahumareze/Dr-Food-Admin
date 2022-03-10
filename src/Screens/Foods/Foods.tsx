import React from 'react';
import './Foods.css';

import { Header, Food } from '../../Components';
import {width} from '../../config/dimensions';

import chicken from '../../Assets/chicken.jpg';
import cream from '../../Assets/cream.jpg';

import data from '../../config/testData';

function Foods(props: any) {

    const onSelect = (id: any) => {
        localStorage.setItem('@selectedId', id);
        props.history.push('/selected_food');
    }

    return (
        <div className='Foods_page'>
            <Header props={props} />
            <section>
                <p className='Foods_page_Title'>All</p>
                <div className='Food_foodContainer' style={{width: width - 20}} >
                    {data.map((i, idx) => (
                        <Food img={i.img} name={i.name} price={i.price} key={idx} onClick={() => onSelect(idx)}/>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Foods;
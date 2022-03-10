import React, {FC} from 'react';

import { FiXCircle } from 'react-icons/fi';
import {width} from '../../../config/dimensions';

interface ItemProps{
    img: any,
    name: string,
    quantity: number,
    price: number
}

const Item:FC<ItemProps> = ({img, name, quantity, price}):JSX.Element => {
    return (
        <div className='CartItem' style={{width: width - 20}} >
            <div className='CartImage' style={{backgroundImage: `url(${img})`}} ></div>
            <div className='CartMainDetails'>
                <p className='CartDetailsTitle'>{name}</p>
                <p className='CartDetailsTitle'>quantity: {quantity}</p>
                <p className='CartDetailsTitle' style={{color: '#ED7C0B'}} >N{price}</p>
            </div>
            <div className='CartCancleContainer'>
                <FiXCircle size={22} color='#fa8072' />
            </div>
        </div>
    );
}

export default Item;
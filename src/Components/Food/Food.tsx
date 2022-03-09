import React, {FC} from 'react';
import './Food.css';

import { Button } from '..';

interface FoodProps{
    img: any,
    name: string,
    price: number
}

const Food:FC<FoodProps> = ({img, name, price}):JSX.Element => {
    let newName = name
    if(name.length > 14){
        newName = name.substring(0, 14) + '...'
    }
    return (
        <div className='Food_Item'>
            <div className='Food_Image' style={{backgroundImage: `url(${img})`}} ></div>
            <p className='Food_nameTag'>{newName}</p>
            <p className='Food_priceTag'>N{price}</p>
            <div className='Food_buttonContainer'>
                <Button name='Buy' height={35} width={100} />
            </div>
        </div>
    );
}

export default Food;
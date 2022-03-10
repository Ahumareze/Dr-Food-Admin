import React, {FC} from 'react';
import './Food.css';

import { Button } from '..';

interface FoodProps{
    img: any,
    name: string,
    price: number,
    onClick: () => void
}

const Food:FC<FoodProps> = ({img, name, price, onClick}):JSX.Element => {
    let newName = name
    if(name.length > 14){
        newName = name.substring(0, 14) + '...'
    }
    return (
        <div className='Food_Item'>
            <div className='Food_Image' style={{backgroundImage: `url(${img})`}} onClick={() => onClick()} ></div>
            <p className='Food_nameTag'>{newName}</p>
            <p className='Food_priceTag'>N{price}</p>
            <div className='Food_buttonContainer'>
                <Button onClick={() => console.log('HELLO')} name='Buy' height={35} width={100} />
            </div>
        </div>
    );
}

export default Food;